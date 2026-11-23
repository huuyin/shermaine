/*
 * dc-lite: a small runtime for this site's page templates.
 *
 * Each part of the page (the page itself, the sections, the character, the project drawings, the check icon)
 * is an HTML template with {{holes}} plus a small logic class that says what goes in the holes.
 * This file turns a template into React elements and keeps the logic class in step with React.
 * It needs window.React and window.ReactDOM (React 18, MIT licence) to be loaded first.
 *
 * Template rules it understands:
 *   {{ a.b }}                        a value from the logic class's renderVals(); literals true/false/null/numbers/'text'
 *   attr="{{ x }}"                   the raw value (a function for onClick, a ref, a boolean ...)
 *   attr="a {{ x }} b"               text with the value filled in
 *   <sc-if value="{{ x }}">          shows its content when x is truthy
 *   <sc-for list="{{ xs }}" as="x">  repeats its content; {{ x }} and {{ $index }} are in scope
 *   <dc-import name="Part" p="..">   another part of the page; the other attributes become its props
 */
(function () {
  'use strict';
  var React = window.React;
  var ReactDOM = window.ReactDOM;
  var h = React.createElement;
  var Fragment = React.Fragment;

  var parts = {};        // name -> { html, tpl, Logic }
  var hosts = {};        // name -> React component

  // ---------- looking a value up
  var IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*/;
  var NUM = /^-?\d+(\.\d+)?$/;

  function walk(scope, path) {
    var m = path.match(IDENT);
    if (!m) return undefined;
    var cur = scope == null ? undefined : scope[m[0]];
    var i = m[0].length;
    while (i < path.length) {
      if (path[i] !== '.') return undefined;
      var rest = path.slice(i + 1);
      var k = rest.match(IDENT) || rest.match(/^\d+/);
      if (!k) return undefined;
      cur = cur == null ? undefined : cur[k[0]];
      i += 1 + k[0].length;
    }
    return cur;
  }

  function lookup(scope, expr) {
    var e = String(expr).trim();
    if (!e) return undefined;
    if (e[0] === '!') return !lookup(scope, e.slice(1));
    if (e === 'true') return true;
    if (e === 'false') return false;
    if (e === 'null') return null;
    if (e === 'undefined') return undefined;
    if (NUM.test(e)) return Number(e);
    if (e.length >= 2 && (e[0] === '"' || e[0] === "'") && e[e.length - 1] === e[0]) return e.slice(1, -1);
    return walk(scope, e);
  }

  // an attribute's value: one whole hole gives the raw value, a mix gives text, anything else is the text itself
  function getter(text) {
    var whole = text.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
    if (whole) { var path = whole[1]; return function (scope) { return lookup(scope, path); }; }
    if (text.indexOf('{{') !== -1) {
      var bits = text.split(/\{\{([\s\S]+?)\}\}/g);
      return function (scope) {
        var out = '';
        for (var i = 0; i < bits.length; i++) {
          if (i & 1) { var v = lookup(scope, bits[i]); out += v == null ? '' : v; } else out += bits[i];
        }
        return out;
      };
    }
    return function () { return text; };
  }

  // ---------- attributes
  var BOOLEAN = {};
  ('allowFullScreen async autoFocus autoPlay checked controls default defer disabled disablePictureInPicture disableRemotePlayback ' +
    'formNoValidate hidden itemScope loop multiple muted noModule noValidate open playsInline readOnly required reversed scoped seamless selected')
    .split(' ').forEach(function (n) { BOOLEAN[n] = true; BOOLEAN[n.toLowerCase()] = true; });
  var EVENTS = {
    onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit', onkeydown: 'onKeyDown', onkeyup: 'onKeyUp',
    onkeypress: 'onKeyPress', onmousedown: 'onMouseDown', onmouseup: 'onMouseUp', onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave',
    onfocus: 'onFocus', onblur: 'onBlur', ondoubleclick: 'onDoubleClick', oncontextmenu: 'onContextMenu', onmousemove: 'onMouseMove',
    onmouseover: 'onMouseOver', onmouseout: 'onMouseOut', onpointerdown: 'onPointerDown', onpointerup: 'onPointerUp', onpointermove: 'onPointerMove',
    onpointerenter: 'onPointerEnter', onpointerleave: 'onPointerLeave', ontouchstart: 'onTouchStart', ontouchend: 'onTouchEnd', ontouchmove: 'onTouchMove',
    onscroll: 'onScroll', onwheel: 'onWheel', onanimationend: 'onAnimationEnd', ontransitionend: 'onTransitionEnd', onload: 'onLoad', onerror: 'onError'
  };
  var REACT_BOOLEAN_NAME = { autofocus: 'autoFocus', autoplay: 'autoPlay', playsinline: 'playsInline', readonly: 'readOnly', allowfullscreen: 'allowFullScreen', novalidate: 'noValidate' };
  function camel(s) { return s.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); }

  // the inline style is written to the element exactly as the template has it. React is not given a style prop,
  // so the two never fight; a new style text means a new ref function, which is how React hands the element over again
  var styleRefs = new Map();
  var styleRefsWith = new WeakMap();
  function applyStyle(css) {
    return function (el) {
      if (!el || el.__css === css) return;
      el.__css = css;
      el.style.cssText = css || '';
    };
  }
  function setRef(ref, el) { if (typeof ref === 'function') ref(el); else if (ref) ref.current = el; }
  function styleRef(css, userRef) {
    var key = css == null ? '\u0000none' : css;
    if (userRef == null || (typeof userRef !== 'function' && typeof userRef !== 'object')) {
      var f = styleRefs.get(key);
      if (!f) { if (styleRefs.size >= 4000) styleRefs.clear(); f = applyStyle(css); styleRefs.set(key, f); }
      return f;
    }
    var mine = styleRefsWith.get(userRef);
    if (!mine) { mine = new Map(); styleRefsWith.set(userRef, mine); }
    var g = mine.get(key);
    if (!g) { var a = applyStyle(css); g = function (el) { a(el); setRef(userRef, el); }; mine.set(key, g); }
    return g;
  }

  // ---------- turning a template into a render function
  function compileNodes(parent) {
    var out = [];
    for (var n = parent.firstChild; n; n = n.nextSibling) { var f = compileNode(n); if (f) out.push(f); }
    return out;
  }
  function renderAll(fns, scope) { var a = new Array(fns.length); for (var i = 0; i < fns.length; i++) a[i] = fns[i](scope, i); return a; }

  function compileNode(node) {
    if (node.nodeType === 3) return compileText(node.nodeValue || '');
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'sc-for') return compileFor(node);
    if (tag === 'sc-if') return compileIf(node);
    if (tag === 'dc-import') return compileImport(node);
    return compileElement(node);
  }

  function compileText(text) {
    if (text.indexOf('{{') === -1) {
      if (!text.trim() && text.indexOf(' ') === -1) return null;   // line breaks between tags are not content
      return function () { return text; };
    }
    var bits = text.split(/\{\{([\s\S]+?)\}\}/g);
    return function (scope, key) {
      var kids = [];
      for (var i = 0; i < bits.length; i++) {
        if (!(i & 1)) { kids.push(bits[i]); continue; }
        var v = lookup(scope, bits[i]);
        if (v === undefined || v === null || typeof v === 'boolean') kids.push(null);
        else if (React.isValidElement(v) || Array.isArray(v)) kids.push(h(Fragment, { key: i }, v));
        else kids.push(h('span', { key: i, className: 'sc-interp' }, String(v)));
      }
      return h.apply(null, [Fragment, { key: key }].concat(kids));
    };
  }

  function compileFor(node) {
    var list = getter(node.getAttribute('list') || '');
    var as = node.getAttribute('as') || 'item';
    var kids = compileNodes(node);
    return function (scope, key) {
      var items = list(scope);
      if (!Array.isArray(items)) items = [];
      return h(Fragment, { key: key }, items.map(function (item, index) {
        var inner = Object.assign({}, scope);
        inner[as] = item; inner.$index = index;
        return h(Fragment, { key: index }, renderAll(kids, inner));
      }));
    };
  }

  function compileIf(node) {
    var value = getter(node.getAttribute('value') || '');
    var kids = compileNodes(node);
    return function (scope, key) { return value(scope) ? h(Fragment, { key: key }, renderAll(kids, scope)) : null; };
  }

  var HOST_STYLE = { position: 1, left: 1, right: 1, top: 1, bottom: 1, inset: 1, width: 1, height: 1, 'z-index': 1, transform: 1 };
  function hostStyle(css) {
    if (typeof css !== 'string') return undefined;
    var out = {}; var any = false;
    css.split(';').forEach(function (d) {
      var i = d.indexOf(':'); if (i < 0) return;
      var k = d.slice(0, i).trim();
      if (HOST_STYLE[k]) { out[camel(k)] = d.slice(i + 1).trim(); any = true; }
    });
    return any ? out : undefined;
  }

  function compileImport(node) {
    var name = node.getAttribute('name') || node.getAttribute('component') || '';
    var style = node.getAttribute('style');
    var styleGet = style != null ? getter(style) : null;
    var props = [];
    for (var i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i];
      if (a.name === 'name' || a.name === 'component' || a.name === 'style' || a.name === 'hint-size') continue;
      var pn = a.name.indexOf('-') !== -1 ? camel(a.name) : a.name;
      props.push([pn, getter(a.value)]);
    }
    var kids = compileNodes(node);
    return function (scope, key) {
      var p = { key: key, __hostStyle: styleGet ? hostStyle(styleGet(scope)) : undefined };
      for (var j = 0; j < props.length; j++) p[props[j][0]] = props[j][1](scope);
      if (kids.length) p.children = renderAll(kids, scope);
      return h(host(name), p);
    };
  }

  function compileElement(node) {
    var tag = node.localName;
    var attrs = [];
    var styleGet = null;
    for (var i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i]; var n = a.name; var v = a.value;
      if (n === 'style') { styleGet = getter(v); continue; }
      if (n === 'class') n = 'className';
      else if (n === 'for') n = 'htmlFor';
      else if (n.slice(0, 2) === 'on') n = EVENTS[n] || ('on' + n[2].toUpperCase() + n.slice(3));
      else if (n === 'checked' && tag === 'input' && v.indexOf('{{') === -1) { attrs.push(['defaultChecked', function () { return true; }]); continue; }
      else if (v === '' && BOOLEAN[n]) { attrs.push([REACT_BOOLEAN_NAME[n] || n, function () { return true; }]); continue; }
      attrs.push([n, getter(v)]);
    }
    var kids = compileNodes(node);
    return function (scope, key) {
      var p = { key: key };
      for (var j = 0; j < attrs.length; j++) {
        var val = attrs[j][1](scope);
        if ((attrs[j][0] === 'value' || attrs[j][0] === 'checked') && val === undefined) val = attrs[j][0] === 'checked' ? false : '';
        p[attrs[j][0]] = val;
      }
      if (styleGet) { var css = styleGet(scope); p.ref = styleRef(typeof css === 'string' ? css : null, p.ref); }
      return h.apply(null, [tag, p].concat(renderAll(kids, scope)));
    };
  }

  function compile(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    var fns = compileNodes(t.content);
    return function (scope) { return renderAll(fns, scope); };
  }

  // ---------- the logic class every part extends
  class DCLogic {
    constructor(props) { this.props = props || {}; this.state = {}; this.__host = null; }
    setState(update, done) { if (this.__host) this.__host.__setLogicState(update, done); }
    forceUpdate() { if (this.__host) this.__host.forceUpdate(); }
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {}
    renderVals() { return {}; }
  }

  function userProps(props) {
    var out = {};
    for (var k in props) if (k !== '__name' && k !== '__hostStyle') out[k] = props[k];
    return out;
  }

  // ---------- the React component that hosts one part
  class Host extends React.Component {
    constructor(props) {
      super(props);
      this.state = { v: 0 };
      var part = parts[props.__name];
      this.logic = new (part.Logic || DCLogic)(userProps(props));
      this.logic.__host = this;
    }
    // the logic class sees its new state straight away; React is then asked to draw again
    __setLogicState(update, done) {
      var cur = this.logic.state;
      var next = typeof update === 'function' ? update(cur) : update;
      this.logic.state = Object.assign({}, cur, next);
      this.setState(function (s) { return { v: s.v + 1 }; }, done);
    }
    componentDidMount() { try { this.logic.componentDidMount(); } catch (e) { console.error(e); } }
    componentDidUpdate(prev) { this.logic.props = userProps(this.props); try { this.logic.componentDidUpdate(prev); } catch (e) { console.error(e); } }
    componentWillUnmount() { try { this.logic.componentWillUnmount(); } catch (e) { console.error(e); } }
    render() {
      var part = parts[this.props.__name];
      if (!part.tpl) part.tpl = compile(part.html);
      var mine = userProps(this.props);
      this.logic.props = mine;
      var vals = mine;
      try { vals = Object.assign({}, mine, this.logic.renderVals() || {}); } catch (e) { console.error(e); }
      return h('div', { className: 'sc-host', style: this.props.__hostStyle, 'data-sc-name': this.props.__name }, part.tpl(vals));
    }
  }

  function host(name) {
    var c = hosts[name];
    if (c) return c;
    if (!parts[name]) { console.error('dc-lite: no part called "' + name + '"'); parts[name] = { html: '', Logic: null }; }
    c = function (props) { return h(Host, Object.assign({}, props, { __name: name })); };
    c.displayName = name;
    hosts[name] = c;
    return c;
  }

  window.DCLite = {
    DCLogic: DCLogic,
    // define(name, templateHtml, function (DCLogic, React) { class Component extends DCLogic {...}; return Component; })
    define: function (name, html, makeLogic) { parts[name] = { html: html, tpl: null, Logic: makeLogic ? makeLogic(DCLogic, React) : null }; },
    mount: function (name, el, props) { ReactDOM.createRoot(el).render(h(host(name), props || {})); }
  };
})();
