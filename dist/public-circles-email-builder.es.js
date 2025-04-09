import Te, { createContext as Mn, memo as Ln, useEffect as je, useLayoutEffect as Fn, useState as De, useCallback as Nt, useMemo as pe, isValidElement as $n, cloneElement as ir, useContext as Hn, useRef as Bn } from "react";
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _t = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Un() {
  if (ar)
    return He;
  ar = 1;
  var t = Te, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, u) {
    var f, g = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (f in d)
      n.call(d, f) && !o.hasOwnProperty(f) && (g[f] = d[f]);
    if (l && l.defaultProps)
      for (f in d = l.defaultProps, d)
        g[f] === void 0 && (g[f] = d[f]);
    return { $$typeof: e, type: l, key: h, ref: p, props: g, _owner: s.current };
  }
  return He.Fragment = r, He.jsx = c, He.jsxs = c, He;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Vn() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Te, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), x = Symbol.iterator, v = "@@iterator";
    function O(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = x && a[x] || a[v];
      return typeof m == "function" ? m : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(a) {
      {
        for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), j = 1; j < m; j++)
          E[j - 1] = arguments[j];
        A("error", a, E);
      }
    }
    function A(a, m, E) {
      {
        var j = C.ReactDebugCurrentFrame, W = j.getStackAddendum();
        W !== "" && (m += "%s", E = E.concat([W]));
        var K = E.map(function(V) {
          return String(V);
        });
        K.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, K);
      }
    }
    var F = !1, b = !1, $ = !1, q = !1, te = !1, ge;
    ge = Symbol.for("react.module.reference");
    function Ee(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || te || a === s || a === u || a === f || q || a === p || F || b || $ || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === g || a.$$typeof === c || a.$$typeof === l || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ge || a.getModuleId !== void 0));
    }
    function ye(a, m, E) {
      var j = a.displayName;
      if (j)
        return j;
      var W = m.displayName || m.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function be(a) {
      return a.displayName || "Context";
    }
    function Q(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            var m = a;
            return be(m) + ".Consumer";
          case c:
            var E = a;
            return be(E._context) + ".Provider";
          case d:
            return ye(a, a.render, "ForwardRef");
          case g:
            var j = a.displayName || null;
            return j !== null ? j : Q(a.type) || "Memo";
          case h: {
            var W = a, K = W._payload, V = W._init;
            try {
              return Q(V(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ce = 0, re, ae, ve, xe, y, T, k;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function N() {
      {
        if (ce === 0) {
          re = console.log, ae = console.info, ve = console.warn, xe = console.error, y = console.group, T = console.groupCollapsed, k = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        ce++;
      }
    }
    function H() {
      {
        if (ce--, ce === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, a, {
              value: re
            }),
            info: ee({}, a, {
              value: ae
            }),
            warn: ee({}, a, {
              value: ve
            }),
            error: ee({}, a, {
              value: xe
            }),
            group: ee({}, a, {
              value: y
            }),
            groupCollapsed: ee({}, a, {
              value: T
            }),
            groupEnd: ee({}, a, {
              value: k
            })
          });
        }
        ce < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = C.ReactCurrentDispatcher, I;
    function M(a, m, E) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (W) {
            var j = W.stack.trim().match(/\n( *(at )?)/);
            I = j && j[1] || "";
          }
        return `
` + I + a;
      }
    }
    var B = !1, L;
    {
      var Z = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Z();
    }
    function S(a, m) {
      if (!a || B)
        return "";
      {
        var E = L.get(a);
        if (E !== void 0)
          return E;
      }
      var j;
      B = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = _.current, _.current = null, N();
      try {
        if (m) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (oe) {
              j = oe;
            }
            Reflect.construct(a, [], V);
          } else {
            try {
              V.call();
            } catch (oe) {
              j = oe;
            }
            a.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            j = oe;
          }
          a();
        }
      } catch (oe) {
        if (oe && j && typeof oe.stack == "string") {
          for (var U = oe.stack.split(`
`), ne = j.stack.split(`
`), X = U.length - 1, J = ne.length - 1; X >= 1 && J >= 0 && U[X] !== ne[J]; )
            J--;
          for (; X >= 1 && J >= 0; X--, J--)
            if (U[X] !== ne[J]) {
              if (X !== 1 || J !== 1)
                do
                  if (X--, J--, J < 0 || U[X] !== ne[J]) {
                    var ue = `
` + U[X].replace(" at new ", " at ");
                    return a.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", a.displayName)), typeof a == "function" && L.set(a, ue), ue;
                  }
                while (X >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        B = !1, _.current = K, H(), Error.prepareStackTrace = W;
      }
      var Ie = a ? a.displayName || a.name : "", we = Ie ? M(Ie) : "";
      return typeof a == "function" && L.set(a, we), we;
    }
    function w(a, m, E) {
      return S(a, !1);
    }
    function le(a) {
      var m = a.prototype;
      return !!(m && m.isReactComponent);
    }
    function Oe(a, m, E) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return S(a, le(a));
      if (typeof a == "string")
        return M(a);
      switch (a) {
        case u:
          return M("Suspense");
        case f:
          return M("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return w(a.render);
          case g:
            return Oe(a.type, m, E);
          case h: {
            var j = a, W = j._payload, K = j._init;
            try {
              return Oe(K(W), m, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, zt = {}, Gt = C.ReactDebugCurrentFrame;
    function qe(a) {
      if (a) {
        var m = a._owner, E = Oe(a.type, a._source, m ? m.type : null);
        Gt.setExtraStackFrame(E);
      } else
        Gt.setExtraStackFrame(null);
    }
    function gn(a, m, E, j, W) {
      {
        var K = Function.call.bind(Fe);
        for (var V in a)
          if (K(a, V)) {
            var U = void 0;
            try {
              if (typeof a[V] != "function") {
                var ne = Error((j || "React class") + ": " + E + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              U = a[V](m, V, j, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              U = X;
            }
            U && !(U instanceof Error) && (qe(W), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", E, V, typeof U), qe(null)), U instanceof Error && !(U.message in zt) && (zt[U.message] = !0, qe(W), D("Failed %s type: %s", E, U.message), qe(null));
          }
      }
    }
    var hn = Array.isArray;
    function nt(a) {
      return hn(a);
    }
    function mn(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, E = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return E;
      }
    }
    function vn(a) {
      try {
        return Kt(a), !1;
      } catch {
        return !0;
      }
    }
    function Kt(a) {
      return "" + a;
    }
    function Xt(a) {
      if (vn(a))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mn(a)), Kt(a);
    }
    var $e = C.ReactCurrentOwner, yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Jt, Zt, st;
    st = {};
    function bn(a) {
      if (Fe.call(a, "ref")) {
        var m = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function xn(a) {
      if (Fe.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Sn(a, m) {
      if (typeof a.ref == "string" && $e.current && m && $e.current.stateNode !== m) {
        var E = Q($e.current.type);
        st[E] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q($e.current.type), a.ref), st[E] = !0);
      }
    }
    function En(a, m) {
      {
        var E = function() {
          Jt || (Jt = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        E.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Tn(a, m) {
      {
        var E = function() {
          Zt || (Zt = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        E.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var On = function(a, m, E, j, W, K, V) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: a,
        key: m,
        ref: E,
        props: V,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function wn(a, m, E, j, W) {
      {
        var K, V = {}, U = null, ne = null;
        E !== void 0 && (Xt(E), U = "" + E), xn(m) && (Xt(m.key), U = "" + m.key), bn(m) && (ne = m.ref, Sn(m, W));
        for (K in m)
          Fe.call(m, K) && !yn.hasOwnProperty(K) && (V[K] = m[K]);
        if (a && a.defaultProps) {
          var X = a.defaultProps;
          for (K in X)
            V[K] === void 0 && (V[K] = X[K]);
        }
        if (U || ne) {
          var J = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          U && En(V, J), ne && Tn(V, J);
        }
        return On(a, U, ne, W, j, $e.current, V);
      }
    }
    var ot = C.ReactCurrentOwner, Qt = C.ReactDebugCurrentFrame;
    function _e(a) {
      if (a) {
        var m = a._owner, E = Oe(a.type, a._source, m ? m.type : null);
        Qt.setExtraStackFrame(E);
      } else
        Qt.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function at(a) {
      return typeof a == "object" && a !== null && a.$$typeof === e;
    }
    function er() {
      {
        if (ot.current) {
          var a = Q(ot.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Cn(a) {
      {
        if (a !== void 0) {
          var m = a.fileName.replace(/^.*[\\\/]/, ""), E = a.lineNumber;
          return `

Check your code at ` + m + ":" + E + ".";
        }
        return "";
      }
    }
    var tr = {};
    function Dn(a) {
      {
        var m = er();
        if (!m) {
          var E = typeof a == "string" ? a : a.displayName || a.name;
          E && (m = `

Check the top-level render call using <` + E + ">.");
        }
        return m;
      }
    }
    function rr(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var E = Dn(m);
        if (tr[E])
          return;
        tr[E] = !0;
        var j = "";
        a && a._owner && a._owner !== ot.current && (j = " It was passed a child from " + Q(a._owner.type) + "."), _e(a), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, j), _e(null);
      }
    }
    function nr(a, m) {
      {
        if (typeof a != "object")
          return;
        if (nt(a))
          for (var E = 0; E < a.length; E++) {
            var j = a[E];
            at(j) && rr(j, m);
          }
        else if (at(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var W = O(a);
          if (typeof W == "function" && W !== a.entries)
            for (var K = W.call(a), V; !(V = K.next()).done; )
              at(V.value) && rr(V.value, m);
        }
      }
    }
    function jn(a) {
      {
        var m = a.type;
        if (m == null || typeof m == "string")
          return;
        var E;
        if (typeof m == "function")
          E = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === g))
          E = m.propTypes;
        else
          return;
        if (E) {
          var j = Q(m);
          gn(E, a.props, "prop", j, a);
        } else if (m.PropTypes !== void 0 && !it) {
          it = !0;
          var W = Q(m);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nn(a) {
      {
        for (var m = Object.keys(a.props), E = 0; E < m.length; E++) {
          var j = m[E];
          if (j !== "children" && j !== "key") {
            _e(a), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), _e(null);
            break;
          }
        }
        a.ref !== null && (_e(a), D("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var sr = {};
    function or(a, m, E, j, W, K) {
      {
        var V = Ee(a);
        if (!V) {
          var U = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = Cn(W);
          ne ? U += ne : U += er();
          var X;
          a === null ? X = "null" : nt(a) ? X = "array" : a !== void 0 && a.$$typeof === e ? (X = "<" + (Q(a.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : X = typeof a, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, U);
        }
        var J = wn(a, m, E, W, K);
        if (J == null)
          return J;
        if (V) {
          var ue = m.children;
          if (ue !== void 0)
            if (j)
              if (nt(ue)) {
                for (var Ie = 0; Ie < ue.length; Ie++)
                  nr(ue[Ie], a);
                Object.freeze && Object.freeze(ue);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nr(ue, a);
        }
        if (Fe.call(m, "key")) {
          var we = Q(a), oe = Object.keys(m).filter(function(kn) {
            return kn !== "key";
          }), ct = oe.length > 0 ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[we + ct]) {
            var An = oe.length > 0 ? "{" + oe.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ct, we, An, we), sr[we + ct] = !0;
          }
        }
        return a === n ? Nn(J) : jn(J), J;
      }
    }
    function _n(a, m, E) {
      return or(a, m, E, !0);
    }
    function In(a, m, E) {
      return or(a, m, E, !1);
    }
    var Pn = In, Rn = _n;
    Be.Fragment = n, Be.jsx = Pn, Be.jsxs = Rn;
  }()), Be;
}
process.env.NODE_ENV === "production" ? _t.exports = Un() : _t.exports = Vn();
var i = _t.exports;
let se = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, r) => (r &= 63, r < 36 ? e += r.toString(36) : r < 62 ? e += (r - 26).toString(36).toUpperCase() : r > 62 ? e += "-" : e += "_", e), "");
const lr = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (f, g) => {
    const h = typeof f == "function" ? f(e) : f;
    if (!Object.is(h, e)) {
      const p = e;
      e = g ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), r.forEach((x) => x(e, p));
    }
  }, s = () => e, d = { setState: n, getState: s, getInitialState: () => u, subscribe: (f) => (r.add(f), () => r.delete(f)), destroy: () => {
    r.clear();
  } }, u = e = t(n, s, d);
  return d;
}, qn = (t) => t ? lr(t) : lr;
var It = { exports: {} }, lt = {}, We = { exports: {} }, ut = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Wn() {
  if (ur)
    return ut;
  ur = 1;
  var t = Te;
  function e(g, h) {
    return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, o = t.useLayoutEffect, c = t.useDebugValue;
  function l(g, h) {
    var p = h(), x = n({ inst: { value: p, getSnapshot: h } }), v = x[0].inst, O = x[1];
    return o(
      function() {
        v.value = p, v.getSnapshot = h, d(v) && O({ inst: v });
      },
      [g, p, h]
    ), s(
      function() {
        return d(v) && O({ inst: v }), g(function() {
          d(v) && O({ inst: v });
        });
      },
      [g]
    ), c(p), p;
  }
  function d(g) {
    var h = g.getSnapshot;
    g = g.value;
    try {
      var p = h();
      return !r(g, p);
    } catch {
      return !0;
    }
  }
  function u(g, h) {
    return h();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : l;
  return ut.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, ut;
}
var dt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function Yn() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, x) {
      return p === x && (p !== 0 || 1 / p === 1 / x) || p !== p && x !== x;
    }
    function e(p, x) {
      f || s.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = x();
      if (!g) {
        var O = x();
        o(v, O) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), g = !0);
      }
      O = c({
        inst: { value: v, getSnapshot: x }
      });
      var C = O[0].inst, D = O[1];
      return d(
        function() {
          C.value = v, C.getSnapshot = x, r(C) && D({ inst: C });
        },
        [p, v, x]
      ), l(
        function() {
          return r(C) && D({ inst: C }), p(function() {
            r(C) && D({ inst: C });
          });
        },
        [p]
      ), u(v), v;
    }
    function r(p) {
      var x = p.getSnapshot;
      p = p.value;
      try {
        var v = x();
        return !o(p, v);
      } catch {
        return !0;
      }
    }
    function n(p, x) {
      return x();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = Te, o = typeof Object.is == "function" ? Object.is : t, c = s.useState, l = s.useEffect, d = s.useLayoutEffect, u = s.useDebugValue, f = !1, g = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : e;
    dt.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dt;
}
var fr;
function Br() {
  return fr || (fr = 1, process.env.NODE_ENV === "production" ? We.exports = Wn() : We.exports = Yn()), We.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function zn() {
  if (pr)
    return lt;
  pr = 1;
  var t = Te, e = Br();
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, o = t.useRef, c = t.useEffect, l = t.useMemo, d = t.useDebugValue;
  return lt.useSyncExternalStoreWithSelector = function(u, f, g, h, p) {
    var x = o(null);
    if (x.current === null) {
      var v = { hasValue: !1, value: null };
      x.current = v;
    } else
      v = x.current;
    x = l(
      function() {
        function C($) {
          if (!D) {
            if (D = !0, A = $, $ = h($), p !== void 0 && v.hasValue) {
              var q = v.value;
              if (p(q, $))
                return F = q;
            }
            return F = $;
          }
          if (q = F, n(A, $))
            return q;
          var te = h($);
          return p !== void 0 && p(q, te) ? (A = $, q) : (A = $, F = te);
        }
        var D = !1, A, F, b = g === void 0 ? null : g;
        return [
          function() {
            return C(f());
          },
          b === null ? void 0 : function() {
            return C(b());
          }
        ];
      },
      [f, g, h, p]
    );
    var O = s(u, x[0], x[1]);
    return c(
      function() {
        v.hasValue = !0, v.value = O;
      },
      [O]
    ), d(O), O;
  }, lt;
}
var ft = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Gn() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    function t(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = Te, r = Br(), n = typeof Object.is == "function" ? Object.is : t, s = r.useSyncExternalStore, o = e.useRef, c = e.useEffect, l = e.useMemo, d = e.useDebugValue;
    ft.useSyncExternalStoreWithSelector = function(u, f, g, h, p) {
      var x = o(null);
      if (x.current === null) {
        var v = { hasValue: !1, value: null };
        x.current = v;
      } else
        v = x.current;
      x = l(
        function() {
          function C($) {
            if (!D) {
              if (D = !0, A = $, $ = h($), p !== void 0 && v.hasValue) {
                var q = v.value;
                if (p(q, $))
                  return F = q;
              }
              return F = $;
            }
            if (q = F, n(A, $))
              return q;
            var te = h($);
            return p !== void 0 && p(q, te) ? (A = $, q) : (A = $, F = te);
          }
          var D = !1, A, F, b = g === void 0 ? null : g;
          return [
            function() {
              return C(f());
            },
            b === null ? void 0 : function() {
              return C(b());
            }
          ];
        },
        [f, g, h, p]
      );
      var O = s(u, x[0], x[1]);
      return c(
        function() {
          v.hasValue = !0, v.value = O;
        },
        [O]
      ), d(O), O;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ft;
}
process.env.NODE_ENV === "production" ? It.exports = zn() : It.exports = Gn();
var Kn = It.exports;
const Xn = /* @__PURE__ */ Hr(Kn), { useDebugValue: Jn } = Te, { useSyncExternalStoreWithSelector: Zn } = Xn;
const Qn = (t) => t;
function es(t, e = Qn, r) {
  const n = Zn(
    t.subscribe,
    t.getState,
    t.getServerState || t.getInitialState,
    e,
    r
  );
  return Jn(n), n;
}
const hr = (t) => {
  const e = typeof t == "function" ? qn(t) : t, r = (n, s) => es(e, n, s);
  return Object.assign(r, e), r;
}, ts = (t) => t ? hr(t) : hr, Ur = [
  {
    type: "section",
    icon: "fa-columns",
    label: "Section",
    category: "layout",
    defaultProps: {
      style: {
        backgroundColor: "#f9fafb",
        padding: "16px",
        marginBottom: "16px"
      },
      children: []
    }
  },
  {
    type: "spacer",
    icon: "fa-arrows-alt-v",
    label: "Spacer",
    category: "layout",
    defaultProps: {
      style: {
        height: "40px"
      }
    }
  },
  {
    type: "divider",
    icon: "fa-minus",
    label: "Divider",
    category: "layout",
    defaultProps: {
      style: {
        borderTop: "1px solid #e5e7eb",
        marginTop: "8px",
        marginBottom: "8px"
      }
    }
  },
  {
    type: "columns",
    icon: "fa-table-columns",
    label: "Columns",
    category: "layout",
    defaultProps: {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "16px"
      },
      columnCount: 2,
      children: []
    }
  },
  {
    type: "heading",
    icon: "fa-heading",
    label: "Heading",
    category: "content",
    defaultProps: {
      tagName: "h2",
      content: "Welcome to our Newsletter",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#333333",
        marginTop: "0",
        marginBottom: "16px"
      }
    }
  },
  {
    type: "text",
    icon: "fa-align-left",
    label: "Text",
    category: "content",
    defaultProps: {
      tagName: "p",
      content: "This is a paragraph of text. You can edit this content to add your own message.",
      style: {
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#4b5563",
        marginTop: "0",
        marginBottom: "16px"
      }
    }
  },
  {
    type: "image",
    icon: "fa-image",
    label: "Image",
    category: "content",
    defaultProps: {
      tagName: "img",
      attributes: {
        src: "https://placehold.co/600x200/e2e8f0/a0aec0?text=Image",
        alt: "Image description"
      },
      style: {
        maxWidth: "100%",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
  },
  {
    type: "button",
    icon: "fa-square",
    label: "Button",
    category: "content",
    defaultProps: {
      tagName: "a",
      content: "Click Me",
      attributes: {
        href: "#"
      },
      style: {
        display: "inline-block",
        padding: "12px 24px",
        backgroundColor: "#3182ce",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: "600",
        borderRadius: "4px",
        textAlign: "center"
      }
    }
  },
  {
    type: "social",
    icon: "fa-share-nodes",
    label: "Social",
    category: "advanced",
    defaultProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        marginTop: "16px",
        marginBottom: "16px"
      },
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: "fab fa-facebook-f",
          color: "#3b5998"
        },
        {
          platform: "twitter",
          url: "#",
          icon: "fab fa-twitter",
          color: "#1da1f2"
        },
        {
          platform: "instagram",
          url: "#",
          icon: "fab fa-instagram",
          color: "#e1306c"
        },
        {
          platform: "linkedin",
          url: "#",
          icon: "fab fa-linkedin-in",
          color: "#0077b5"
        }
      ]
    }
  },
  {
    type: "video",
    icon: "fa-play",
    label: "Video",
    category: "advanced",
    defaultProps: {
      tagName: "div",
      attributes: {
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      style: {
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: "56.25%",
        // 16:9 aspect ratio
        backgroundColor: "#f3f4f6",
        borderRadius: "4px",
        overflow: "hidden"
      }
    }
  }
], rs = (t) => {
  const e = Ur.find((r) => r.type === t);
  if (!e)
    throw new Error(`Component type ${t} not found`);
  return {
    id: se(),
    type: e.type,
    content: e.defaultProps.content || "",
    props: { ...e.defaultProps }
  };
}, ke = {
  width: 600,
  fontFamily: "Helvetica, Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  showMobilePreview: !1,
  showDesktopPreview: !0
}, mr = (t = "Untitled Template") => ({
  id: se(),
  name: t,
  components: [],
  settings: ke
}), ns = ts((t) => ({
  template: mr(),
  selectedComponentId: null,
  isPropertiesPanelOpen: !1,
  isComponentPanelOpen: !0,
  isSettingsPanelOpen: !1,
  isOutputModalOpen: !1,
  initializeTemplate: () => {
    t({ template: mr() });
  },
  addComponent: (e) => {
    t((r) => {
      const n = rs(e);
      return {
        template: {
          ...r.template,
          components: [...r.template.components, n]
        },
        selectedComponentId: n.id,
        isPropertiesPanelOpen: !0,
        isComponentPanelOpen: !1
      };
    });
  },
  removeComponent: (e) => {
    t((r) => {
      const n = r.template.components.filter(
        (s) => s.id !== e
      );
      return {
        template: {
          ...r.template,
          components: n
        },
        selectedComponentId: null,
        isPropertiesPanelOpen: !1,
        isComponentPanelOpen: !0
      };
    });
  },
  updateComponent: (e, r) => {
    t((n) => {
      const s = n.template.components.map(
        (o) => o.id === e ? { ...o, ...r } : o
      );
      return {
        template: {
          ...n.template,
          components: s
        }
      };
    });
  },
  updateComponentProps: (e, r) => {
    t((n) => {
      const s = n.template.components.map(
        (o) => o.id === e ? {
          ...o,
          props: {
            ...o.props,
            ...r
          }
        } : o
      );
      return {
        template: {
          ...n.template,
          components: s
        }
      };
    });
  },
  updateComponentContent: (e, r) => {
    t((n) => {
      const s = n.template.components.map(
        (o) => o.id === e ? { ...o, content: r } : o
      );
      return {
        template: {
          ...n.template,
          components: s
        }
      };
    });
  },
  selectComponent: (e) => {
    t({
      selectedComponentId: e,
      isPropertiesPanelOpen: e !== null,
      isComponentPanelOpen: e === null,
      isSettingsPanelOpen: !1
    });
  },
  openComponentPanel: () => {
    t({
      isComponentPanelOpen: !0,
      isPropertiesPanelOpen: !1,
      isSettingsPanelOpen: !1
    });
  },
  openPropertiesPanel: () => {
    t({
      isPropertiesPanelOpen: !0,
      isComponentPanelOpen: !1,
      isSettingsPanelOpen: !1
    });
  },
  openSettingsPanel: () => {
    t({
      isSettingsPanelOpen: !0,
      isPropertiesPanelOpen: !1,
      isComponentPanelOpen: !1,
      selectedComponentId: null
    });
  },
  updateTemplateSettings: (e) => {
    t((r) => ({
      template: {
        ...r.template,
        settings: {
          ...r.template.settings,
          ...e
        }
      }
    }));
  },
  setOutputModalOpen: (e) => {
    t({ isOutputModalOpen: e });
  }
})), G = ns, ss = () => {
  const {
    isComponentPanelOpen: t,
    isPropertiesPanelOpen: e,
    isSettingsPanelOpen: r,
    openComponentPanel: n,
    openPropertiesPanel: s,
    openSettingsPanel: o,
    setOutputModalOpen: c
  } = G();
  return /* @__PURE__ */ i.jsx("header", { className: "bg-white border-b border-gray-200 shadow-sm", children: /* @__PURE__ */ i.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ i.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ i.jsxs("h1", { className: "text-2xl font-semibold text-gray-800", children: [
      /* @__PURE__ */ i.jsx("span", { className: "text-primary font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E61DAB] to-[#8E33FF]", children: "Public Circles" }),
      /* @__PURE__ */ i.jsx("span", { className: "ml-2 text-lg", children: "Email Builder" })
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ i.jsxs("nav", { className: "hidden md:flex space-x-1", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `px-3 py-2 rounded-md text-sm font-medium ${t ? "bg-[#EFD6FF] text-[#8E33FF]" : "text-gray-700 hover:bg-gray-100"}`,
            onClick: n,
            children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ i.jsx("i", { className: "fas fa-th-large text-xs" }),
              "Components"
            ] })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `px-3 py-2 rounded-md text-sm font-medium ${e ? "bg-[#EFD6FF] text-[#8E33FF]" : "text-gray-700 hover:bg-gray-100"}`,
            onClick: s,
            children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ i.jsx("i", { className: "fas fa-sliders-h text-xs" }),
              "Properties"
            ] })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `px-3 py-2 rounded-md text-sm font-medium ${r ? "bg-[#EFD6FF] text-[#8E33FF]" : "text-gray-700 hover:bg-gray-100"}`,
            onClick: o,
            children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ i.jsx("i", { className: "fas fa-cog text-xs" }),
              "Settings"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] text-white rounded-md hover:from-[#F1136C] hover:to-[#5119B7] transition-all shadow-sm hover:shadow",
          onClick: () => c(!0),
          children: [
            /* @__PURE__ */ i.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "h-4 w-4", children: [
              /* @__PURE__ */ i.jsx("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }),
              /* @__PURE__ */ i.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
              /* @__PURE__ */ i.jsx("polyline", { points: "7 3 7 8 15 8" })
            ] }),
            "Save HTML"
          ]
        }
      ) })
    ] })
  ] }) }) });
}, os = ss, Vr = Mn({
  dragDropManager: void 0
});
function de(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var vr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), pt = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, yr = {
  INIT: "@@redux/INIT" + pt(),
  REPLACE: "@@redux/REPLACE" + pt(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + pt();
  }
};
function is(t) {
  if (typeof t != "object" || t === null)
    return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function as(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  var e = typeof t;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(t))
    return "array";
  if (us(t))
    return "date";
  if (ls(t))
    return "error";
  var r = cs(t);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return e.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function cs(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function ls(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function us(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function Pe(t) {
  var e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = as(t)), e;
}
function qr(t, e, r) {
  var n;
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? de(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? de(1) : "Expected the enhancer to be a function. Instead, received: '" + Pe(r) + "'");
    return r(qr)(t, e);
  }
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? de(2) : "Expected the root reducer to be a function. Instead, received: '" + Pe(t) + "'");
  var s = t, o = e, c = [], l = c, d = !1;
  function u() {
    l === c && (l = c.slice());
  }
  function f() {
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? de(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function g(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? de(4) : "Expected the listener to be a function. Instead, received: '" + Pe(v) + "'");
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? de(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var O = !0;
    return u(), l.push(v), function() {
      if (O) {
        if (d)
          throw new Error(process.env.NODE_ENV === "production" ? de(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        O = !1, u();
        var D = l.indexOf(v);
        l.splice(D, 1), c = null;
      }
    };
  }
  function h(v) {
    if (!is(v))
      throw new Error(process.env.NODE_ENV === "production" ? de(7) : "Actions must be plain objects. Instead, the actual type was: '" + Pe(v) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? de(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? de(9) : "Reducers may not dispatch actions.");
    try {
      d = !0, o = s(o, v);
    } finally {
      d = !1;
    }
    for (var O = c = l, C = 0; C < O.length; C++) {
      var D = O[C];
      D();
    }
    return v;
  }
  function p(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? de(10) : "Expected the nextReducer to be a function. Instead, received: '" + Pe(v));
    s = v, h({
      type: yr.REPLACE
    });
  }
  function x() {
    var v, O = g;
    return v = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(D) {
        if (typeof D != "object" || D === null)
          throw new Error(process.env.NODE_ENV === "production" ? de(11) : "Expected the observer to be an object. Instead, received: '" + Pe(D) + "'");
        function A() {
          D.next && D.next(f());
        }
        A();
        var F = O(A);
        return {
          unsubscribe: F
        };
      }
    }, v[vr] = function() {
      return this;
    }, v;
  }
  return h({
    type: yr.INIT
  }), n = {
    dispatch: h,
    subscribe: g,
    getState: f,
    replaceReducer: p
  }, n[vr] = x, n;
}
function R(t, e, ...r) {
  if (ds() && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    let n;
    if (e === void 0)
      n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let s = 0;
      n = new Error(e.replace(/%s/g, function() {
        return r[s++];
      })), n.name = "Invariant Violation";
    }
    throw n.framesToPop = 1, n;
  }
}
function ds() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function fs(t, e, r) {
  return e.split(".").reduce(
    (n, s) => n && n[s] ? n[s] : r || null,
    t
  );
}
function ps(t, e) {
  return t.filter(
    (r) => r !== e
  );
}
function Wr(t) {
  return typeof t == "object";
}
function gs(t, e) {
  const r = /* @__PURE__ */ new Map(), n = (o) => {
    r.set(o, r.has(o) ? r.get(o) + 1 : 1);
  };
  t.forEach(n), e.forEach(n);
  const s = [];
  return r.forEach((o, c) => {
    o === 1 && s.push(c);
  }), s;
}
function hs(t, e) {
  return t.filter(
    (r) => e.indexOf(r) > -1
  );
}
const $t = "dnd-core/INIT_COORDS", Ze = "dnd-core/BEGIN_DRAG", Ht = "dnd-core/PUBLISH_DRAG_SOURCE", Qe = "dnd-core/HOVER", et = "dnd-core/DROP", tt = "dnd-core/END_DRAG";
function br(t, e) {
  return {
    type: $t,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
const ms = {
  type: $t,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function vs(t) {
  return function(r = [], n = {
    publishSource: !0
  }) {
    const { publishSource: s = !0, clientOffset: o, getSourceClientOffset: c } = n, l = t.getMonitor(), d = t.getRegistry();
    t.dispatch(br(o)), ys(r, l, d);
    const u = Ss(r, l);
    if (u == null) {
      t.dispatch(ms);
      return;
    }
    let f = null;
    if (o) {
      if (!c)
        throw new Error("getSourceClientOffset must be defined");
      bs(c), f = c(u);
    }
    t.dispatch(br(o, f));
    const h = d.getSource(u).beginDrag(l, u);
    if (h == null)
      return;
    xs(h), d.pinSource(u);
    const p = d.getSourceType(u);
    return {
      type: Ze,
      payload: {
        itemType: p,
        item: h,
        sourceId: u,
        clientOffset: o || null,
        sourceClientOffset: f || null,
        isSourcePublic: !!s
      }
    };
  };
}
function ys(t, e, r) {
  R(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(n) {
    R(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function bs(t) {
  R(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function xs(t) {
  R(Wr(t), "Item must be an object.");
}
function Ss(t, e) {
  let r = null;
  for (let n = t.length - 1; n >= 0; n--)
    if (e.canDragSource(t[n])) {
      r = t[n];
      break;
    }
  return r;
}
function Es(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Ts(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    }))), n.forEach(function(s) {
      Es(t, s, r[s]);
    });
  }
  return t;
}
function Os(t) {
  return function(r = {}) {
    const n = t.getMonitor(), s = t.getRegistry();
    ws(n), js(n).forEach((c, l) => {
      const d = Cs(c, l, s, n), u = {
        type: et,
        payload: {
          dropResult: Ts({}, r, d)
        }
      };
      t.dispatch(u);
    });
  };
}
function ws(t) {
  R(t.isDragging(), "Cannot call drop while not dragging."), R(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Cs(t, e, r, n) {
  const s = r.getTarget(t);
  let o = s ? s.drop(n, t) : void 0;
  return Ds(o), typeof o > "u" && (o = e === 0 ? {} : n.getDropResult()), o;
}
function Ds(t) {
  R(typeof t > "u" || Wr(t), "Drop result must either be an object or undefined.");
}
function js(t) {
  const e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function Ns(t) {
  return function() {
    const r = t.getMonitor(), n = t.getRegistry();
    _s(r);
    const s = r.getSourceId();
    return s != null && (n.getSource(s, !0).endDrag(r, s), n.unpinSource()), {
      type: tt
    };
  };
}
function _s(t) {
  R(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function Pt(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(
    (r) => r === e
  ) : t === e;
}
function Is(t) {
  return function(r, { clientOffset: n } = {}) {
    Ps(r);
    const s = r.slice(0), o = t.getMonitor(), c = t.getRegistry(), l = o.getItemType();
    return As(s, c, l), Rs(s, o, c), ks(s, o, c), {
      type: Qe,
      payload: {
        targetIds: s,
        clientOffset: n || null
      }
    };
  };
}
function Ps(t) {
  R(Array.isArray(t), "Expected targetIds to be an array.");
}
function Rs(t, e, r) {
  R(e.isDragging(), "Cannot call hover while not dragging."), R(!e.didDrop(), "Cannot call hover after drop.");
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    R(t.lastIndexOf(s) === n, "Expected targetIds to be unique in the passed array.");
    const o = r.getTarget(s);
    R(o, "Expected targetIds to be registered.");
  }
}
function As(t, e, r) {
  for (let n = t.length - 1; n >= 0; n--) {
    const s = t[n], o = e.getTargetType(s);
    Pt(o, r) || t.splice(n, 1);
  }
}
function ks(t, e, r) {
  t.forEach(function(n) {
    r.getTarget(n).hover(e, n);
  });
}
function Ms(t) {
  return function() {
    if (t.getMonitor().isDragging())
      return {
        type: Ht
      };
  };
}
function Ls(t) {
  return {
    beginDrag: vs(t),
    publishDragSource: Ms(t),
    hover: Is(t),
    drop: Os(t),
    endDrag: Ns(t)
  };
}
class Fs {
  receiveBackend(e) {
    this.backend = e;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const e = this, { dispatch: r } = this.store;
    function n(o) {
      return (...c) => {
        const l = o.apply(e, c);
        typeof l < "u" && r(l);
      };
    }
    const s = Ls(this);
    return Object.keys(s).reduce((o, c) => {
      const l = s[c];
      return o[c] = n(l), o;
    }, {});
  }
  dispatch(e) {
    this.store.dispatch(e);
  }
  constructor(e, r) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      const n = this.store.getState().refCount > 0;
      this.backend && (n && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !n && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = e, this.monitor = r, e.subscribe(this.handleRefCountChange);
  }
}
function $s(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function Yr(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function Hs(t) {
  const { clientOffset: e, initialClientOffset: r, initialSourceClientOffset: n } = t;
  return !e || !r || !n ? null : Yr($s(e, n), r);
}
function Bs(t) {
  const { clientOffset: e, initialClientOffset: r } = t;
  return !e || !r ? null : Yr(e, r);
}
const Ue = [], Bt = [];
Ue.__IS_NONE__ = !0;
Bt.__IS_ALL__ = !0;
function Us(t, e) {
  return t === Ue ? !1 : t === Bt || typeof e > "u" ? !0 : hs(e, t).length > 0;
}
class Vs {
  subscribeToStateChange(e, r = {}) {
    const { handlerIds: n } = r;
    R(typeof e == "function", "listener must be a function."), R(typeof n > "u" || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
    let s = this.store.getState().stateId;
    const o = () => {
      const c = this.store.getState(), l = c.stateId;
      try {
        l === s || l === s + 1 && !Us(c.dirtyHandlerIds, n) || e();
      } finally {
        s = l;
      }
    };
    return this.store.subscribe(o);
  }
  subscribeToOffsetChange(e) {
    R(typeof e == "function", "listener must be a function.");
    let r = this.store.getState().dragOffset;
    const n = () => {
      const s = this.store.getState().dragOffset;
      s !== r && (r = s, e());
    };
    return this.store.subscribe(n);
  }
  canDragSource(e) {
    if (!e)
      return !1;
    const r = this.registry.getSource(e);
    return R(r, `Expected to find a valid source. sourceId=${e}`), this.isDragging() ? !1 : r.canDrag(this, e);
  }
  canDropOnTarget(e) {
    if (!e)
      return !1;
    const r = this.registry.getTarget(e);
    if (R(r, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop())
      return !1;
    const n = this.registry.getTargetType(e), s = this.getItemType();
    return Pt(n, s) && r.canDrop(this, e);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(e) {
    if (!e)
      return !1;
    const r = this.registry.getSource(e, !0);
    if (R(r, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    const n = this.registry.getSourceType(e), s = this.getItemType();
    return n !== s ? !1 : r.isDragging(this, e);
  }
  isOverTarget(e, r = {
    shallow: !1
  }) {
    if (!e)
      return !1;
    const { shallow: n } = r;
    if (!this.isDragging())
      return !1;
    const s = this.registry.getTargetType(e), o = this.getItemType();
    if (o && !Pt(s, o))
      return !1;
    const c = this.getTargetIds();
    if (!c.length)
      return !1;
    const l = c.indexOf(e);
    return n ? l === c.length - 1 : l > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return !!this.store.getState().dragOperation.isSourcePublic;
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return Hs(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return Bs(this.store.getState().dragOffset);
  }
  constructor(e, r) {
    this.store = e, this.registry = r;
  }
}
const xr = typeof global < "u" ? global : self, zr = xr.MutationObserver || xr.WebKitMutationObserver;
function Gr(t) {
  return function() {
    const r = setTimeout(s, 0), n = setInterval(s, 50);
    function s() {
      clearTimeout(r), clearInterval(n), t();
    }
  };
}
function qs(t) {
  let e = 1;
  const r = new zr(t), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    e = -e, n.data = e;
  };
}
const Ws = typeof zr == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  qs
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  Gr
);
class Ys {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(e) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = e;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: e } = this;
      for (; this.index < e.length; ) {
        const r = this.index;
        if (this.index++, e[r].call(), this.index > this.capacity) {
          for (let n = 0, s = e.length - this.index; n < s; n++)
            e[n] = e[n + this.index];
          e.length -= this.index, this.index = 0;
        }
      }
      e.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (e) => {
      this.pendingErrors.push(e), this.requestErrorThrow();
    }, this.requestFlush = Ws(this.flush), this.requestErrorThrow = Gr(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class zs {
  call() {
    try {
      this.task && this.task();
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(e, r) {
    this.onError = e, this.release = r, this.task = null;
  }
}
class Gs {
  create(e) {
    const r = this.freeTasks, n = r.length ? r.pop() : new zs(
      this.onError,
      (s) => r[r.length] = s
    );
    return n.task = e, n;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const Kr = new Ys(), Ks = new Gs(Kr.registerPendingError);
function Xs(t) {
  Kr.enqueueTask(Ks.create(t));
}
const Ut = "dnd-core/ADD_SOURCE", Vt = "dnd-core/ADD_TARGET", qt = "dnd-core/REMOVE_SOURCE", rt = "dnd-core/REMOVE_TARGET";
function Js(t) {
  return {
    type: Ut,
    payload: {
      sourceId: t
    }
  };
}
function Zs(t) {
  return {
    type: Vt,
    payload: {
      targetId: t
    }
  };
}
function Qs(t) {
  return {
    type: qt,
    payload: {
      sourceId: t
    }
  };
}
function eo(t) {
  return {
    type: rt,
    payload: {
      targetId: t
    }
  };
}
function to(t) {
  R(typeof t.canDrag == "function", "Expected canDrag to be a function."), R(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), R(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function ro(t) {
  R(typeof t.canDrop == "function", "Expected canDrop to be a function."), R(typeof t.hover == "function", "Expected hover to be a function."), R(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function Rt(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(
      (r) => Rt(r, !1)
    );
    return;
  }
  R(typeof t == "string" || typeof t == "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var fe;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(fe || (fe = {}));
let no = 0;
function so() {
  return no++;
}
function oo(t) {
  const e = so().toString();
  switch (t) {
    case fe.SOURCE:
      return `S${e}`;
    case fe.TARGET:
      return `T${e}`;
    default:
      throw new Error(`Unknown Handler Role: ${t}`);
  }
}
function Sr(t) {
  switch (t[0]) {
    case "S":
      return fe.SOURCE;
    case "T":
      return fe.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${t}`);
  }
}
function Er(t, e) {
  const r = t.entries();
  let n = !1;
  do {
    const { done: s, value: [, o] } = r.next();
    if (o === e)
      return !0;
    n = !!s;
  } while (!n);
  return !1;
}
class io {
  addSource(e, r) {
    Rt(e), to(r);
    const n = this.addHandler(fe.SOURCE, e, r);
    return this.store.dispatch(Js(n)), n;
  }
  addTarget(e, r) {
    Rt(e, !0), ro(r);
    const n = this.addHandler(fe.TARGET, e, r);
    return this.store.dispatch(Zs(n)), n;
  }
  containsHandler(e) {
    return Er(this.dragSources, e) || Er(this.dropTargets, e);
  }
  getSource(e, r = !1) {
    return R(this.isSourceId(e), "Expected a valid source ID."), r && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
  getTarget(e) {
    return R(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
  }
  getSourceType(e) {
    return R(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
  }
  getTargetType(e) {
    return R(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
  }
  isSourceId(e) {
    return Sr(e) === fe.SOURCE;
  }
  isTargetId(e) {
    return Sr(e) === fe.TARGET;
  }
  removeSource(e) {
    R(this.getSource(e), "Expected an existing source."), this.store.dispatch(Qs(e)), Xs(() => {
      this.dragSources.delete(e), this.types.delete(e);
    });
  }
  removeTarget(e) {
    R(this.getTarget(e), "Expected an existing target."), this.store.dispatch(eo(e)), this.dropTargets.delete(e), this.types.delete(e);
  }
  pinSource(e) {
    const r = this.getSource(e);
    R(r, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = r;
  }
  unpinSource() {
    R(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(e, r, n) {
    const s = oo(e);
    return this.types.set(s, r), e === fe.SOURCE ? this.dragSources.set(s, n) : e === fe.TARGET && this.dropTargets.set(s, n), s;
  }
  constructor(e) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
  }
}
const ao = (t, e) => t === e;
function co(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function lo(t, e, r = ao) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; ++n)
    if (!r(t[n], e[n]))
      return !1;
  return !0;
}
function uo(t = Ue, e) {
  switch (e.type) {
    case Qe:
      break;
    case Ut:
    case Vt:
    case rt:
    case qt:
      return Ue;
    case Ze:
    case Ht:
    case tt:
    case et:
    default:
      return Bt;
  }
  const { targetIds: r = [], prevTargetIds: n = [] } = e.payload, s = gs(r, n);
  if (!(s.length > 0 || !lo(r, n)))
    return Ue;
  const c = n[n.length - 1], l = r[r.length - 1];
  return c !== l && (c && s.push(c), l && s.push(l)), s;
}
function fo(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function po(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    }))), n.forEach(function(s) {
      fo(t, s, r[s]);
    });
  }
  return t;
}
const Tr = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function go(t = Tr, e) {
  const { payload: r } = e;
  switch (e.type) {
    case $t:
    case Ze:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case Qe:
      return co(t.clientOffset, r.clientOffset) ? t : po({}, t, {
        clientOffset: r.clientOffset
      });
    case tt:
    case et:
      return Tr;
    default:
      return t;
  }
}
function ho(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Re(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    }))), n.forEach(function(s) {
      ho(t, s, r[s]);
    });
  }
  return t;
}
const mo = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function vo(t = mo, e) {
  const { payload: r } = e;
  switch (e.type) {
    case Ze:
      return Re({}, t, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Ht:
      return Re({}, t, {
        isSourcePublic: !0
      });
    case Qe:
      return Re({}, t, {
        targetIds: r.targetIds
      });
    case rt:
      return t.targetIds.indexOf(r.targetId) === -1 ? t : Re({}, t, {
        targetIds: ps(t.targetIds, r.targetId)
      });
    case et:
      return Re({}, t, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case tt:
      return Re({}, t, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return t;
  }
}
function yo(t = 0, e) {
  switch (e.type) {
    case Ut:
    case Vt:
      return t + 1;
    case qt:
    case rt:
      return t - 1;
    default:
      return t;
  }
}
function bo(t = 0) {
  return t + 1;
}
function xo(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function So(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    }))), n.forEach(function(s) {
      xo(t, s, r[s]);
    });
  }
  return t;
}
function Eo(t = {}, e) {
  return {
    dirtyHandlerIds: uo(t.dirtyHandlerIds, {
      type: e.type,
      payload: So({}, e.payload, {
        prevTargetIds: fs(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: go(t.dragOffset, e),
    refCount: yo(t.refCount, e),
    dragOperation: vo(t.dragOperation, e),
    stateId: bo(t.stateId)
  };
}
function To(t, e = void 0, r = {}, n = !1) {
  const s = Oo(n), o = new Vs(s, new io(s)), c = new Fs(s, o), l = t(c, e, r);
  return c.receiveBackend(l), c;
}
function Oo(t) {
  const e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return qr(Eo, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function wo(t, e) {
  if (t == null)
    return {};
  var r = Co(t, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++)
      n = o[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Co(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), s, o;
  for (o = 0; o < n.length; o++)
    s = n[o], !(e.indexOf(s) >= 0) && (r[s] = t[s]);
  return r;
}
let Or = 0;
const Ge = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var Do = /* @__PURE__ */ Ln(function(e) {
  var { children: r } = e, n = wo(e, [
    "children"
  ]);
  const [s, o] = jo(n);
  return je(() => {
    if (o) {
      const c = Xr();
      return ++Or, () => {
        --Or === 0 && (c[Ge] = null);
      };
    }
  }, []), /* @__PURE__ */ i.jsx(Vr.Provider, {
    value: s,
    children: r
  });
});
function jo(t) {
  if ("manager" in t)
    return [
      {
        dragDropManager: t.manager
      },
      !1
    ];
  const e = No(t.backend, t.context, t.options, t.debugMode), r = !t.context;
  return [
    e,
    r
  ];
}
function No(t, e = Xr(), r, n) {
  const s = e;
  return s[Ge] || (s[Ge] = {
    dragDropManager: To(t, e, r, n)
  }), s[Ge];
}
function Xr() {
  return typeof global < "u" ? global : window;
}
var Jr = function t(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, s, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (s = n; s-- !== 0; )
        if (!t(e[s], r[s]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (s = n; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[s]))
        return !1;
    for (s = n; s-- !== 0; ) {
      var c = o[s];
      if (!t(e[c], r[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const _o = /* @__PURE__ */ Hr(Jr), Ne = typeof window < "u" ? Fn : je;
function Io(t, e, r) {
  const [n, s] = De(
    () => e(t)
  ), o = Nt(() => {
    const c = e(t);
    _o(n, c) || (s(c), r && r());
  }, [
    n,
    t,
    r
  ]);
  return Ne(o), [
    n,
    o
  ];
}
function Po(t, e, r) {
  const [n, s] = Io(t, e, r);
  return Ne(function() {
    const c = t.getHandlerId();
    if (c != null)
      return t.subscribeToStateChange(s, {
        handlerIds: [
          c
        ]
      });
  }, [
    t,
    s
  ]), n;
}
function Zr(t, e, r) {
  return Po(
    e,
    t || (() => ({})),
    () => r.reconnect()
  );
}
function Qr(t, e) {
  const r = [
    ...e || []
  ];
  return e == null && typeof t != "function" && r.push(t), pe(() => typeof t == "function" ? t() : t, r);
}
function Ro(t) {
  return pe(
    () => t.hooks.dragSource(),
    [
      t
    ]
  );
}
function Ao(t) {
  return pe(
    () => t.hooks.dragPreview(),
    [
      t
    ]
  );
}
let gt = !1, ht = !1;
class ko {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    R(!gt, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return gt = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      gt = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    R(!ht, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return ht = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      ht = !1;
    }
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  isDraggingSource(e) {
    return this.internalMonitor.isDraggingSource(e);
  }
  isOverTarget(e, r) {
    return this.internalMonitor.isOverTarget(e, r);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(e) {
    return this.internalMonitor.subscribeToOffsetChange(e);
  }
  canDragSource(e) {
    return this.internalMonitor.canDragSource(e);
  }
  canDropOnTarget(e) {
    return this.internalMonitor.canDropOnTarget(e);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.sourceId = null, this.internalMonitor = e.getMonitor();
  }
}
let mt = !1;
class Mo {
  receiveHandlerId(e) {
    this.targetId = e;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(e, r) {
    return this.internalMonitor.subscribeToStateChange(e, r);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    R(!mt, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return mt = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      mt = !1;
    }
  }
  isOver(e) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, e) : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(e) {
    this.targetId = null, this.internalMonitor = e.getMonitor();
  }
}
function Lo(t, e, r) {
  const n = r.getRegistry(), s = n.addTarget(t, e);
  return [
    s,
    () => n.removeTarget(s)
  ];
}
function Fo(t, e, r) {
  const n = r.getRegistry(), s = n.addSource(t, e);
  return [
    s,
    () => n.removeSource(s)
  ];
}
function At(t, e, r, n) {
  let s = r ? r.call(n, t, e) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  const o = Object.keys(t), c = Object.keys(e);
  if (o.length !== c.length)
    return !1;
  const l = Object.prototype.hasOwnProperty.bind(e);
  for (let d = 0; d < o.length; d++) {
    const u = o[d];
    if (!l(u))
      return !1;
    const f = t[u], g = e[u];
    if (s = r ? r.call(n, f, g, u) : void 0, s === !1 || s === void 0 && f !== g)
      return !1;
  }
  return !0;
}
function kt(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function $o(t) {
  if (typeof t.type == "string")
    return;
  const e = t.type.displayName || t.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Ho(t) {
  return (e = null, r = null) => {
    if (!$n(e)) {
      const o = e;
      return t(o, r), o;
    }
    const n = e;
    return $o(n), Bo(n, r ? (o) => t(o, r) : t);
  };
}
function en(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (r.endsWith("Ref"))
      e[r] = t[r];
    else {
      const s = Ho(n);
      e[r] = () => s;
    }
  }), e;
}
function wr(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function Bo(t, e) {
  const r = t.ref;
  return R(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? ir(t, {
    ref: (n) => {
      wr(r, n), wr(e, n);
    }
  }) : ir(t, {
    ref: e
  });
}
class Uo {
  receiveHandlerId(e) {
    this.handlerId !== e && (this.handlerId = e, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(e) {
    this.dragSourceOptionsInternal = e;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(e) {
    this.dragPreviewOptionsInternal = e;
  }
  reconnect() {
    const e = this.reconnectDragSource();
    this.reconnectDragPreview(e);
  }
  reconnectDragSource() {
    const e = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return r && this.disconnectDragSource(), this.handlerId ? e ? (r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), r) : (this.lastConnectedDragSource = e, r) : r;
  }
  reconnectDragPreview(e = !1) {
    const r = this.dragPreview, n = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (n && this.disconnectDragPreview(), !!this.handlerId) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !At(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !At(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null, this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null, this.dragPreviewRef = null;
  }
  constructor(e) {
    this.hooks = en({
      dragSource: (r, n) => {
        this.clearDragSource(), this.dragSourceOptions = n || null, kt(r) ? this.dragSourceRef = r : this.dragSourceNode = r, this.reconnectDragSource();
      },
      dragPreview: (r, n) => {
        this.clearDragPreview(), this.dragPreviewOptions = n || null, kt(r) ? this.dragPreviewRef = r : this.dragPreviewNode = r, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
  }
}
class Vo {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    e && this.disconnectDropTarget();
    const r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
    }
  }
  receiveHandlerId(e) {
    e !== this.handlerId && (this.handlerId = e, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(e) {
    this.dropTargetOptionsInternal = e;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !At(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null, this.dropTargetNode = null;
  }
  constructor(e) {
    this.hooks = en({
      dropTarget: (r, n) => {
        this.clearDropTarget(), this.dropTargetOptions = n, kt(r) ? this.dropTargetRef = r : this.dropTargetNode = r, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
  }
}
function Le() {
  const { dragDropManager: t } = Hn(Vr);
  return R(t != null, "Expected drag drop context"), t;
}
function qo(t, e) {
  const r = Le(), n = pe(
    () => new Uo(r.getBackend()),
    [
      r
    ]
  );
  return Ne(() => (n.dragSourceOptions = t || null, n.reconnect(), () => n.disconnectDragSource()), [
    n,
    t
  ]), Ne(() => (n.dragPreviewOptions = e || null, n.reconnect(), () => n.disconnectDragPreview()), [
    n,
    e
  ]), n;
}
function Wo() {
  const t = Le();
  return pe(
    () => new ko(t),
    [
      t
    ]
  );
}
class Yo {
  beginDrag() {
    const e = this.spec, r = this.monitor;
    let n = null;
    return typeof e.item == "object" ? n = e.item : typeof e.item == "function" ? n = e.item(r) : n = {}, n ?? null;
  }
  canDrag() {
    const e = this.spec, r = this.monitor;
    return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag == "function" ? e.canDrag(r) : !0;
  }
  isDragging(e, r) {
    const n = this.spec, s = this.monitor, { isDragging: o } = n;
    return o ? o(s) : r === e.getSourceId();
  }
  endDrag() {
    const e = this.spec, r = this.monitor, n = this.connector, { end: s } = e;
    s && s(r.getItem(), r), n.reconnect();
  }
  constructor(e, r, n) {
    this.spec = e, this.monitor = r, this.connector = n;
  }
}
function zo(t, e, r) {
  const n = pe(
    () => new Yo(t, e, r),
    [
      e,
      r
    ]
  );
  return je(() => {
    n.spec = t;
  }, [
    t
  ]), n;
}
function Go(t) {
  return pe(() => {
    const e = t.type;
    return R(e != null, "spec.type must be defined"), e;
  }, [
    t
  ]);
}
function Ko(t, e, r) {
  const n = Le(), s = zo(t, e, r), o = Go(t);
  Ne(function() {
    if (o != null) {
      const [l, d] = Fo(o, s, n);
      return e.receiveHandlerId(l), r.receiveHandlerId(l), d;
    }
  }, [
    n,
    e,
    r,
    s,
    o
  ]);
}
function Xo(t, e) {
  const r = Qr(t, e);
  R(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const n = Wo(), s = qo(r.options, r.previewOptions);
  return Ko(r, n, s), [
    Zr(r.collect, n, s),
    Ro(s),
    Ao(s)
  ];
}
function Jo(t) {
  return pe(
    () => t.hooks.dropTarget(),
    [
      t
    ]
  );
}
function Zo(t) {
  const e = Le(), r = pe(
    () => new Vo(e.getBackend()),
    [
      e
    ]
  );
  return Ne(() => (r.dropTargetOptions = t || null, r.reconnect(), () => r.disconnectDropTarget()), [
    t
  ]), r;
}
function Qo() {
  const t = Le();
  return pe(
    () => new Mo(t),
    [
      t
    ]
  );
}
function ei(t) {
  const { accept: e } = t;
  return pe(() => (R(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [
    e
  ]), [
    e
  ]);
}
class ti {
  canDrop() {
    const e = this.spec, r = this.monitor;
    return e.canDrop ? e.canDrop(r.getItem(), r) : !0;
  }
  hover() {
    const e = this.spec, r = this.monitor;
    e.hover && e.hover(r.getItem(), r);
  }
  drop() {
    const e = this.spec, r = this.monitor;
    if (e.drop)
      return e.drop(r.getItem(), r);
  }
  constructor(e, r) {
    this.spec = e, this.monitor = r;
  }
}
function ri(t, e) {
  const r = pe(
    () => new ti(t, e),
    [
      e
    ]
  );
  return je(() => {
    r.spec = t;
  }, [
    t
  ]), r;
}
function ni(t, e, r) {
  const n = Le(), s = ri(t, e), o = ei(t);
  Ne(function() {
    const [l, d] = Lo(o, s, n);
    return e.receiveHandlerId(l), r.receiveHandlerId(l), d;
  }, [
    n,
    e,
    s,
    r,
    o.map(
      (c) => c.toString()
    ).join("|")
  ]);
}
function si(t, e) {
  const r = Qr(t, e), n = Qo(), s = Zo(r.options);
  return ni(r, n, s), [
    Zr(r.collect, n, s),
    Jo(s)
  ];
}
const oi = ({ component: t }) => {
  const [{ isDragging: e }, r] = Xo(() => ({
    type: "COMPONENT",
    item: { componentType: t.type },
    collect: (n) => ({
      isDragging: !!n.isDragging()
    })
  }));
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: r,
      className: `border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md hover:border-[#DB7BD0] transition cursor-move ${e ? "opacity-50" : "opacity-100"}`,
      children: /* @__PURE__ */ i.jsxs("div", { className: "p-3", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ i.jsx("i", { className: `fas ${t.icon} text-[#E61DAB] mr-2` }),
          /* @__PURE__ */ i.jsx("span", { className: "text-sm font-medium", children: t.label })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "bg-gray-50 h-8 mt-2 rounded border border-gray-200 flex items-center justify-center", children: [
          t.type === "heading" && /* @__PURE__ */ i.jsx("div", { className: "w-3/4 h-4 bg-[#DB7BB0] bg-opacity-40 rounded" }),
          t.type === "text" && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center px-2 w-full", children: [
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-1 bg-[#DB7BB0] bg-opacity-40 rounded mb-1" }),
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-1 bg-[#DB7BB0] bg-opacity-40 rounded mb-1" }),
            /* @__PURE__ */ i.jsx("div", { className: "w-3/4 h-1 bg-[#DB7BB0] bg-opacity-40 rounded" })
          ] }),
          t.type === "image" && /* @__PURE__ */ i.jsx("i", { className: "fas fa-mountain text-[#8E33FF]" }),
          t.type === "button" && /* @__PURE__ */ i.jsx("div", { className: "px-3 py-1 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] rounded text-white text-xs", children: "Button" }),
          t.type === "divider" && /* @__PURE__ */ i.jsx("div", { className: "w-3/4 h-[2px] bg-[#DB7BB0] bg-opacity-40" }),
          t.type === "spacer" && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center w-3/4", children: [
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-[2px] bg-[#DB7BB0] bg-opacity-40 mb-2" }),
            /* @__PURE__ */ i.jsx("div", { className: "w-full h-[2px] bg-[#DB7BB0] bg-opacity-40" })
          ] }),
          t.type === "social" && /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ i.jsx("i", { className: "fab fa-facebook-f text-[#8E33FF] text-xs" }),
            /* @__PURE__ */ i.jsx("i", { className: "fab fa-twitter text-[#8E33FF] text-xs" }),
            /* @__PURE__ */ i.jsx("i", { className: "fab fa-instagram text-[#8E33FF] text-xs" })
          ] }),
          t.type === "section" && /* @__PURE__ */ i.jsx("div", { className: "border border-dashed border-[#8E33FF] w-3/4 h-6 rounded" }),
          t.type === "columns" && /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 w-3/4", children: [
            /* @__PURE__ */ i.jsx("div", { className: "border border-dashed border-[#8E33FF] w-1/2 h-6 rounded" }),
            /* @__PURE__ */ i.jsx("div", { className: "border border-dashed border-[#8E33FF] w-1/2 h-6 rounded" })
          ] }),
          t.type === "video" && /* @__PURE__ */ i.jsx("i", { className: "fas fa-play text-[#8E33FF]" })
        ] })
      ] })
    }
  );
}, vt = oi, ii = () => {
  const [t, e] = De(""), r = Ur.filter(
    (c) => c.label.toLowerCase().includes(t.toLowerCase())
  ), n = r.filter((c) => c.category === "layout"), s = r.filter((c) => c.category === "content"), o = r.filter((c) => c.category === "advanced");
  return /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-auto p-4", children: [
    /* @__PURE__ */ i.jsx("div", { className: "mb-4", children: /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search components...",
        value: t,
        onChange: (c) => e(c.target.value),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
      }
    ) }),
    n.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2", children: "Layout" }),
      /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-2", children: n.map((c) => /* @__PURE__ */ i.jsx(vt, { component: c }, c.type)) })
    ] }),
    s.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2", children: "Content" }),
      /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-2", children: s.map((c) => /* @__PURE__ */ i.jsx(vt, { component: c }, c.type)) })
    ] }),
    o.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2", children: "Advanced" }),
      /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 gap-2", children: o.map((c) => /* @__PURE__ */ i.jsx(vt, { component: c }, c.type)) })
    ] })
  ] });
}, ai = ii, ci = () => {
  const t = G((d) => d.template), e = G((d) => d.selectedComponentId), r = G((d) => d.updateComponentProps), n = G((d) => d.updateComponentContent), s = G((d) => d.removeComponent);
  if (!e)
    return /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-auto p-4", children: /* @__PURE__ */ i.jsx("p", { className: "text-gray-500 text-center py-8", children: "Select a component to edit its properties" }) });
  const o = t.components.find((d) => d.id === e);
  if (!o)
    return /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-auto p-4", children: /* @__PURE__ */ i.jsx("p", { className: "text-gray-500 text-center py-8", children: "Component not found" }) });
  const c = (d, u) => {
    r(e, {
      style: {
        ...o.props.style,
        [d]: u
      }
    });
  }, l = () => {
    var d, u, f, g, h, p, x, v, O, C, D, A, F, b, $, q, te, ge, Ee, ye, be, Q, ee, ce, re, ae, ve, xe, y, T, k, P, N, H, _, I, M, B, L, Z, S;
    switch (o.type) {
      case "heading":
      case "text":
        return /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Content" }),
            /* @__PURE__ */ i.jsx(
              "textarea",
              {
                className: "w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                rows: 4,
                value: o.content,
                onChange: (w) => n(e, w.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Tag" }),
            /* @__PURE__ */ i.jsx(
              "select",
              {
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                value: o.props.tagName || "",
                onChange: (w) => r(e, { tagName: w.target.value }),
                children: o.type === "heading" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  /* @__PURE__ */ i.jsx("option", { value: "h1", children: "Heading 1" }),
                  /* @__PURE__ */ i.jsx("option", { value: "h2", children: "Heading 2" }),
                  /* @__PURE__ */ i.jsx("option", { value: "h3", children: "Heading 3" }),
                  /* @__PURE__ */ i.jsx("option", { value: "h4", children: "Heading 4" }),
                  /* @__PURE__ */ i.jsx("option", { value: "h5", children: "Heading 5" }),
                  /* @__PURE__ */ i.jsx("option", { value: "h6", children: "Heading 6" })
                ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  /* @__PURE__ */ i.jsx("option", { value: "p", children: "Paragraph" }),
                  /* @__PURE__ */ i.jsx("option", { value: "div", children: "Div" }),
                  /* @__PURE__ */ i.jsx("option", { value: "span", children: "Span" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Font Size" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "10",
                  max: "48",
                  value: parseInt(((d = o.props.style) == null ? void 0 : d.fontSize) || "16"),
                  onChange: (w) => c("fontSize", `${w.target.value}px`),
                  className: "w-full mr-2"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "text-xs w-12 text-center", children: [
                parseInt(((u = o.props.style) == null ? void 0 : u.fontSize) || "16"),
                "px"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Color" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: ((f = o.props.style) == null ? void 0 : f.color) || "#000000",
                onChange: (w) => c("color", w.target.value),
                className: "w-full h-10 p-1 border border-gray-300 rounded-md"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Text Align" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex border border-gray-300 rounded-md overflow-hidden", children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((g = o.props.style) == null ? void 0 : g.textAlign) === "left" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => c("textAlign", "left"),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-left" })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((h = o.props.style) == null ? void 0 : h.textAlign) === "center" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => c("textAlign", "center"),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-center" })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((p = o.props.style) == null ? void 0 : p.textAlign) === "right" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => c("textAlign", "right"),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-right" })
                }
              )
            ] })
          ] })
        ] });
      case "image":
        return /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Image URL" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                value: ((x = o.props.attributes) == null ? void 0 : x.src) || "",
                onChange: (w) => r(e, {
                  attributes: {
                    ...o.props.attributes,
                    src: w.target.value
                  }
                })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Alt Text" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                value: ((v = o.props.attributes) == null ? void 0 : v.alt) || "",
                onChange: (w) => r(e, {
                  attributes: {
                    ...o.props.attributes,
                    alt: w.target.value
                  }
                })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Width" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "10",
                  max: "100",
                  value: parseInt(((O = o.props.style) == null ? void 0 : O.width) || "100"),
                  onChange: (w) => c("width", `${w.target.value}%`),
                  className: "w-full mr-2"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "text-xs w-12 text-center", children: [
                parseInt(((C = o.props.style) == null ? void 0 : C.width) || "100"),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Alignment" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex border border-gray-300 rounded-md overflow-hidden", children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((D = o.props.style) == null ? void 0 : D.marginLeft) === "0" && ((A = o.props.style) == null ? void 0 : A.marginRight) === "auto" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => r(e, {
                    style: {
                      ...o.props.style,
                      marginLeft: "0",
                      marginRight: "auto"
                    }
                  }),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-left" })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((F = o.props.style) == null ? void 0 : F.marginLeft) === "auto" && ((b = o.props.style) == null ? void 0 : b.marginRight) === "auto" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => r(e, {
                    style: {
                      ...o.props.style,
                      marginLeft: "auto",
                      marginRight: "auto"
                    }
                  }),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-center" })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${(($ = o.props.style) == null ? void 0 : $.marginLeft) === "auto" && ((q = o.props.style) == null ? void 0 : q.marginRight) === "0" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => r(e, {
                    style: {
                      ...o.props.style,
                      marginLeft: "auto",
                      marginRight: "0"
                    }
                  }),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-right" })
                }
              )
            ] })
          ] })
        ] });
      case "button":
        return /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Button Text" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                value: o.content,
                onChange: (w) => n(e, w.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Link URL" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                value: ((te = o.props.attributes) == null ? void 0 : te.href) || "#",
                onChange: (w) => r(e, {
                  attributes: {
                    ...o.props.attributes,
                    href: w.target.value
                  }
                })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Background Color" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: ((ge = o.props.style) == null ? void 0 : ge.backgroundColor) || "#3182ce",
                onChange: (w) => c("backgroundColor", w.target.value),
                className: "w-full h-10 p-1 border border-gray-300 rounded-md"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Text Color" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: ((Ee = o.props.style) == null ? void 0 : Ee.color) || "#ffffff",
                onChange: (w) => c("color", w.target.value),
                className: "w-full h-10 p-1 border border-gray-300 rounded-md"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Padding" }),
            /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs mb-1", children: "Horizontal" }),
                /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "range",
                      min: "4",
                      max: "48",
                      value: parseInt(((ye = o.props.style) == null ? void 0 : ye.paddingLeft) || "24"),
                      onChange: (w) => {
                        const le = `${w.target.value}px`;
                        r(e, {
                          style: {
                            ...o.props.style,
                            paddingLeft: le,
                            paddingRight: le
                          }
                        });
                      },
                      className: "w-full mr-2"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("span", { className: "text-xs w-8 text-center", children: parseInt(((be = o.props.style) == null ? void 0 : be.paddingLeft) || "24") })
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs mb-1", children: "Vertical" }),
                /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "range",
                      min: "2",
                      max: "32",
                      value: parseInt(((Q = o.props.style) == null ? void 0 : Q.paddingTop) || "12"),
                      onChange: (w) => {
                        const le = `${w.target.value}px`;
                        r(e, {
                          style: {
                            ...o.props.style,
                            paddingTop: le,
                            paddingBottom: le
                          }
                        });
                      },
                      className: "w-full mr-2"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("span", { className: "text-xs w-8 text-center", children: parseInt(((ee = o.props.style) == null ? void 0 : ee.paddingTop) || "12") })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Border Radius" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: "24",
                  value: parseInt(((ce = o.props.style) == null ? void 0 : ce.borderRadius) || "4"),
                  onChange: (w) => c("borderRadius", `${w.target.value}px`),
                  className: "w-full mr-2"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "text-xs w-8 text-center", children: parseInt(((re = o.props.style) == null ? void 0 : re.borderRadius) || "4") })
            ] })
          ] })
        ] });
      case "divider":
        return /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Color" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "color",
                value: ((ae = o.props.style) == null ? void 0 : ae.borderTopColor) || "#e5e7eb",
                onChange: (w) => c("borderTopColor", w.target.value),
                className: "w-full h-10 p-1 border border-gray-300 rounded-md"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Thickness" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "1",
                  max: "10",
                  value: parseInt(((ve = o.props.style) == null ? void 0 : ve.borderTopWidth) || "1"),
                  onChange: (w) => c("borderTopWidth", `${w.target.value}px`),
                  className: "w-full mr-2"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "text-xs w-8 text-center", children: [
                parseInt(((xe = o.props.style) == null ? void 0 : xe.borderTopWidth) || "1"),
                "px"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Style" }),
            /* @__PURE__ */ i.jsxs(
              "select",
              {
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
                value: ((y = o.props.style) == null ? void 0 : y.borderTopStyle) || "solid",
                onChange: (w) => c("borderTopStyle", w.target.value),
                children: [
                  /* @__PURE__ */ i.jsx("option", { value: "solid", children: "Solid" }),
                  /* @__PURE__ */ i.jsx("option", { value: "dashed", children: "Dashed" }),
                  /* @__PURE__ */ i.jsx("option", { value: "dotted", children: "Dotted" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Spacing" }),
            /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs mb-1", children: "Top" }),
                /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "range",
                      min: "0",
                      max: "48",
                      value: parseInt(((T = o.props.style) == null ? void 0 : T.marginTop) || "8"),
                      onChange: (w) => c("marginTop", `${w.target.value}px`),
                      className: "w-full mr-2"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("span", { className: "text-xs w-8 text-center", children: parseInt(((k = o.props.style) == null ? void 0 : k.marginTop) || "8") })
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("label", { className: "block text-xs mb-1", children: "Bottom" }),
                /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "range",
                      min: "0",
                      max: "48",
                      value: parseInt(((P = o.props.style) == null ? void 0 : P.marginBottom) || "8"),
                      onChange: (w) => c("marginBottom", `${w.target.value}px`),
                      className: "w-full mr-2"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("span", { className: "text-xs w-8 text-center", children: parseInt(((N = o.props.style) == null ? void 0 : N.marginBottom) || "8") })
                ] })
              ] })
            ] })
          ] })
        ] });
      case "spacer":
        return /* @__PURE__ */ i.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Height" }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "range",
                min: "4",
                max: "120",
                value: parseInt(((H = o.props.style) == null ? void 0 : H.height) || "40"),
                onChange: (w) => c("height", `${w.target.value}px`),
                className: "w-full mr-2"
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "text-xs w-12 text-center", children: [
              parseInt(((_ = o.props.style) == null ? void 0 : _.height) || "40"),
              "px"
            ] })
          ] })
        ] }) });
      case "social":
        return o.props.socialLinks ? /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Alignment" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex border border-gray-300 rounded-md overflow-hidden", children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((I = o.props.style) == null ? void 0 : I.justifyContent) === "flex-start" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => c("justifyContent", "flex-start"),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-left" })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((M = o.props.style) == null ? void 0 : M.justifyContent) === "center" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => c("justifyContent", "center"),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-center" })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `flex-1 py-2 ${((B = o.props.style) == null ? void 0 : B.justifyContent) === "flex-end" ? "bg-[#EFD6FF]" : "bg-white"}`,
                  onClick: () => c("justifyContent", "flex-end"),
                  children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-align-right" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Icon Size" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "20",
                  max: "60",
                  value: 40,
                  onChange: (w) => {
                  },
                  className: "w-full mr-2"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "text-xs w-12 text-center", children: "40px" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Spacing" }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "4",
                  max: "32",
                  value: parseInt(((L = o.props.style) == null ? void 0 : L.gap) || "16"),
                  onChange: (w) => c("gap", `${w.target.value}px`),
                  className: "w-full mr-2"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "text-xs w-12 text-center", children: [
                parseInt(((Z = o.props.style) == null ? void 0 : Z.gap) || "16"),
                "px"
              ] })
            ] })
          ] })
        ] }) : /* @__PURE__ */ i.jsx("p", { className: "text-gray-500", children: "No social links defined" });
      case "video":
        return /* @__PURE__ */ i.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Video URL" }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
              value: ((S = o.props.attributes) == null ? void 0 : S.videoUrl) || "",
              onChange: (w) => r(e, {
                attributes: {
                  ...o.props.attributes,
                  videoUrl: w.target.value
                }
              })
            }
          ),
          /* @__PURE__ */ i.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Note: Videos are not supported in all email clients. A fallback link will be shown." })
        ] }) });
      default:
        return /* @__PURE__ */ i.jsxs("p", { className: "text-gray-500", children: [
          "Properties for ",
          o.type,
          " components are not available yet."
        ] });
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-auto p-4", children: [
    l(),
    /* @__PURE__ */ i.jsx("div", { className: "pt-2 border-t border-gray-200 mt-4", children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition",
        onClick: () => s(e),
        children: [
          /* @__PURE__ */ i.jsx("i", { className: "fas fa-trash mr-2" }),
          " Delete Component"
        ]
      }
    ) })
  ] });
}, li = ci, ui = () => {
  const t = G((n) => n.template), e = G((n) => n.updateTemplateSettings), r = [
    "Arial, sans-serif",
    "Helvetica, Arial, sans-serif",
    "Georgia, serif",
    "Tahoma, Verdana, sans-serif",
    "Trebuchet MS, sans-serif",
    "Times New Roman, serif",
    "Verdana, sans-serif",
    "Courier New, monospace"
  ];
  return /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-auto p-4", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium text-[#E61DAB] mb-4", children: "Template Settings" }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Template Name" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
            value: t.name,
            onChange: (n) => {
              const s = { ...t, name: n.target.value };
              G.setState({ template: s });
            }
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Width (px)" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "range",
              min: "320",
              max: "800",
              step: "10",
              value: t.settings.width,
              onChange: (n) => e({ width: parseInt(n.target.value) }),
              className: "w-full mr-2"
            }
          ),
          /* @__PURE__ */ i.jsxs("span", { className: "text-sm font-mono w-14 text-center", children: [
            t.settings.width,
            "px"
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
          /* @__PURE__ */ i.jsx("span", { children: "Mobile" }),
          /* @__PURE__ */ i.jsx("span", { children: "Desktop" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Font Family" }),
        /* @__PURE__ */ i.jsx(
          "select",
          {
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent",
            value: t.settings.fontFamily,
            onChange: (n) => e({ fontFamily: n.target.value }),
            children: r.map((n) => /* @__PURE__ */ i.jsx("option", { value: n, children: n }, n))
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("label", { className: "block text-sm font-medium mb-1", children: "Background Color" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "color",
            value: t.settings.backgroundColor,
            onChange: (n) => e({ backgroundColor: n.target.value }),
            className: "w-full h-10 p-1 border border-gray-300 rounded-md"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "pt-4 border-t border-gray-200", children: [
        /* @__PURE__ */ i.jsx("h4", { className: "text-sm font-medium mb-2", children: "Preview Options" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              id: "desktopPreview",
              checked: t.settings.showDesktopPreview,
              onChange: (n) => e({ showDesktopPreview: n.target.checked }),
              className: "mr-2 h-4 w-4 text-[#E61DAB] focus:ring-[#E61DAB] rounded"
            }
          ),
          /* @__PURE__ */ i.jsx("label", { htmlFor: "desktopPreview", className: "text-sm", children: "Show Desktop Preview" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              id: "mobilePreview",
              checked: t.settings.showMobilePreview,
              onChange: (n) => e({ showMobilePreview: n.target.checked }),
              className: "mr-2 h-4 w-4 text-[#E61DAB] focus:ring-[#E61DAB] rounded"
            }
          ),
          /* @__PURE__ */ i.jsx("label", { htmlFor: "mobilePreview", className: "text-sm", children: "Show Mobile Preview" })
        ] })
      ] })
    ] })
  ] }) }) });
}, di = ui;
var tn = {}, Mt = { exports: {} }, Ye = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function fi() {
  if (Cr)
    return Y;
  Cr = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, p = t ? Symbol.for("react.memo") : 60115, x = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, D = t ? Symbol.for("react.scope") : 60119;
  function A(b) {
    if (typeof b == "object" && b !== null) {
      var $ = b.$$typeof;
      switch ($) {
        case e:
          switch (b = b.type, b) {
            case d:
            case u:
            case n:
            case o:
            case s:
            case g:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case f:
                case x:
                case p:
                case c:
                  return b;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function F(b) {
    return A(b) === u;
  }
  return Y.AsyncMode = d, Y.ConcurrentMode = u, Y.ContextConsumer = l, Y.ContextProvider = c, Y.Element = e, Y.ForwardRef = f, Y.Fragment = n, Y.Lazy = x, Y.Memo = p, Y.Portal = r, Y.Profiler = o, Y.StrictMode = s, Y.Suspense = g, Y.isAsyncMode = function(b) {
    return F(b) || A(b) === d;
  }, Y.isConcurrentMode = F, Y.isContextConsumer = function(b) {
    return A(b) === l;
  }, Y.isContextProvider = function(b) {
    return A(b) === c;
  }, Y.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Y.isForwardRef = function(b) {
    return A(b) === f;
  }, Y.isFragment = function(b) {
    return A(b) === n;
  }, Y.isLazy = function(b) {
    return A(b) === x;
  }, Y.isMemo = function(b) {
    return A(b) === p;
  }, Y.isPortal = function(b) {
    return A(b) === r;
  }, Y.isProfiler = function(b) {
    return A(b) === o;
  }, Y.isStrictMode = function(b) {
    return A(b) === s;
  }, Y.isSuspense = function(b) {
    return A(b) === g;
  }, Y.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === o || b === s || b === g || b === h || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === p || b.$$typeof === c || b.$$typeof === l || b.$$typeof === f || b.$$typeof === O || b.$$typeof === C || b.$$typeof === D || b.$$typeof === v);
  }, Y.typeOf = A, Y;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function pi() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, p = t ? Symbol.for("react.memo") : 60115, x = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, D = t ? Symbol.for("react.scope") : 60119;
    function A(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === o || S === s || S === g || S === h || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === p || S.$$typeof === c || S.$$typeof === l || S.$$typeof === f || S.$$typeof === O || S.$$typeof === C || S.$$typeof === D || S.$$typeof === v);
    }
    function F(S) {
      if (typeof S == "object" && S !== null) {
        var w = S.$$typeof;
        switch (w) {
          case e:
            var le = S.type;
            switch (le) {
              case d:
              case u:
              case n:
              case o:
              case s:
              case g:
                return le;
              default:
                var Oe = le && le.$$typeof;
                switch (Oe) {
                  case l:
                  case f:
                  case x:
                  case p:
                  case c:
                    return Oe;
                  default:
                    return w;
                }
            }
          case r:
            return w;
        }
      }
    }
    var b = d, $ = u, q = l, te = c, ge = e, Ee = f, ye = n, be = x, Q = p, ee = r, ce = o, re = s, ae = g, ve = !1;
    function xe(S) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(S) || F(S) === d;
    }
    function y(S) {
      return F(S) === u;
    }
    function T(S) {
      return F(S) === l;
    }
    function k(S) {
      return F(S) === c;
    }
    function P(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function N(S) {
      return F(S) === f;
    }
    function H(S) {
      return F(S) === n;
    }
    function _(S) {
      return F(S) === x;
    }
    function I(S) {
      return F(S) === p;
    }
    function M(S) {
      return F(S) === r;
    }
    function B(S) {
      return F(S) === o;
    }
    function L(S) {
      return F(S) === s;
    }
    function Z(S) {
      return F(S) === g;
    }
    z.AsyncMode = b, z.ConcurrentMode = $, z.ContextConsumer = q, z.ContextProvider = te, z.Element = ge, z.ForwardRef = Ee, z.Fragment = ye, z.Lazy = be, z.Memo = Q, z.Portal = ee, z.Profiler = ce, z.StrictMode = re, z.Suspense = ae, z.isAsyncMode = xe, z.isConcurrentMode = y, z.isContextConsumer = T, z.isContextProvider = k, z.isElement = P, z.isForwardRef = N, z.isFragment = H, z.isLazy = _, z.isMemo = I, z.isPortal = M, z.isProfiler = B, z.isStrictMode = L, z.isSuspense = Z, z.isValidElementType = A, z.typeOf = F;
  }()), z;
}
var jr;
function rn() {
  return jr || (jr = 1, process.env.NODE_ENV === "production" ? Ye.exports = fi() : Ye.exports = pi()), Ye.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var yt, Nr;
function gi() {
  if (Nr)
    return yt;
  Nr = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(c).map(function(f) {
        return c[f];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return yt = s() ? Object.assign : function(o, c) {
    for (var l, d = n(o), u, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var g in l)
        e.call(l, g) && (d[g] = l[g]);
      if (t) {
        u = t(l);
        for (var h = 0; h < u.length; h++)
          r.call(l, u[h]) && (d[u[h]] = l[u[h]]);
      }
    }
    return d;
  }, yt;
}
var bt, _r;
function Wt() {
  if (_r)
    return bt;
  _r = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return bt = t, bt;
}
var xt, Ir;
function nn() {
  return Ir || (Ir = 1, xt = Function.call.bind(Object.prototype.hasOwnProperty)), xt;
}
var St, Pr;
function hi() {
  if (Pr)
    return St;
  Pr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Wt(), r = {}, n = nn();
    t = function(o) {
      var c = "Warning: " + o;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function s(o, c, l, d, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var g;
          try {
            if (typeof o[f] != "function") {
              var h = Error(
                (d || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = o[f](c, f, d, l, null, e);
          } catch (x) {
            g = x;
          }
          if (g && !(g instanceof Error) && t(
            (d || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var p = u ? u() : "";
            t(
              "Failed " + l + " type: " + g.message + (p ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, St = s, St;
}
var Et, Rr;
function mi() {
  if (Rr)
    return Et;
  Rr = 1;
  var t = rn(), e = gi(), r = Wt(), n = nn(), s = hi(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Et = function(l, d) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(y) {
      var T = y && (u && y[u] || y[f]);
      if (typeof T == "function")
        return T;
    }
    var h = "<<anonymous>>", p = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: D(),
      arrayOf: A,
      element: F(),
      elementType: b(),
      instanceOf: $,
      node: Ee(),
      objectOf: te,
      oneOf: q,
      oneOfType: ge,
      shape: be,
      exact: Q
    };
    function x(y, T) {
      return y === T ? y !== 0 || 1 / y === 1 / T : y !== y && T !== T;
    }
    function v(y, T) {
      this.message = y, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function O(y) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, k = 0;
      function P(H, _, I, M, B, L, Z) {
        if (M = M || h, L = L || I, Z !== r) {
          if (d) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var w = M + ":" + I;
            !T[w] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[w] = !0, k++);
          }
        }
        return _[I] == null ? H ? _[I] === null ? new v("The " + B + " `" + L + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new v("The " + B + " `" + L + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : y(_, I, M, B, L);
      }
      var N = P.bind(null, !1);
      return N.isRequired = P.bind(null, !0), N;
    }
    function C(y) {
      function T(k, P, N, H, _, I) {
        var M = k[P], B = re(M);
        if (B !== y) {
          var L = ae(M);
          return new v(
            "Invalid " + H + " `" + _ + "` of type " + ("`" + L + "` supplied to `" + N + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return O(T);
    }
    function D() {
      return O(c);
    }
    function A(y) {
      function T(k, P, N, H, _) {
        if (typeof y != "function")
          return new v("Property `" + _ + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var I = k[P];
        if (!Array.isArray(I)) {
          var M = re(I);
          return new v("Invalid " + H + " `" + _ + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected an array."));
        }
        for (var B = 0; B < I.length; B++) {
          var L = y(I, B, N, H, _ + "[" + B + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return O(T);
    }
    function F() {
      function y(T, k, P, N, H) {
        var _ = T[k];
        if (!l(_)) {
          var I = re(_);
          return new v("Invalid " + N + " `" + H + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(y);
    }
    function b() {
      function y(T, k, P, N, H) {
        var _ = T[k];
        if (!t.isValidElementType(_)) {
          var I = re(_);
          return new v("Invalid " + N + " `" + H + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(y);
    }
    function $(y) {
      function T(k, P, N, H, _) {
        if (!(k[P] instanceof y)) {
          var I = y.name || h, M = xe(k[P]);
          return new v("Invalid " + H + " `" + _ + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return O(T);
    }
    function q(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function T(k, P, N, H, _) {
        for (var I = k[P], M = 0; M < y.length; M++)
          if (x(I, y[M]))
            return null;
        var B = JSON.stringify(y, function(Z, S) {
          var w = ae(S);
          return w === "symbol" ? String(S) : S;
        });
        return new v("Invalid " + H + " `" + _ + "` of value `" + String(I) + "` " + ("supplied to `" + N + "`, expected one of " + B + "."));
      }
      return O(T);
    }
    function te(y) {
      function T(k, P, N, H, _) {
        if (typeof y != "function")
          return new v("Property `" + _ + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var I = k[P], M = re(I);
        if (M !== "object")
          return new v("Invalid " + H + " `" + _ + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected an object."));
        for (var B in I)
          if (n(I, B)) {
            var L = y(I, B, N, H, _ + "." + B, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return O(T);
    }
    function ge(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var T = 0; T < y.length; T++) {
        var k = y[T];
        if (typeof k != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(k) + " at index " + T + "."
          ), c;
      }
      function P(N, H, _, I, M) {
        for (var B = [], L = 0; L < y.length; L++) {
          var Z = y[L], S = Z(N, H, _, I, M, r);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && B.push(S.data.expectedType);
        }
        var w = B.length > 0 ? ", expected one of type [" + B.join(", ") + "]" : "";
        return new v("Invalid " + I + " `" + M + "` supplied to " + ("`" + _ + "`" + w + "."));
      }
      return O(P);
    }
    function Ee() {
      function y(T, k, P, N, H) {
        return ee(T[k]) ? null : new v("Invalid " + N + " `" + H + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return O(y);
    }
    function ye(y, T, k, P, N) {
      return new v(
        (y || "React class") + ": " + T + " type `" + k + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function be(y) {
      function T(k, P, N, H, _) {
        var I = k[P], M = re(I);
        if (M !== "object")
          return new v("Invalid " + H + " `" + _ + "` of type `" + M + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var B in y) {
          var L = y[B];
          if (typeof L != "function")
            return ye(N, H, _, B, ae(L));
          var Z = L(I, B, N, H, _ + "." + B, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return O(T);
    }
    function Q(y) {
      function T(k, P, N, H, _) {
        var I = k[P], M = re(I);
        if (M !== "object")
          return new v("Invalid " + H + " `" + _ + "` of type `" + M + "` " + ("supplied to `" + N + "`, expected `object`."));
        var B = e({}, k[P], y);
        for (var L in B) {
          var Z = y[L];
          if (n(y, L) && typeof Z != "function")
            return ye(N, H, _, L, ae(Z));
          if (!Z)
            return new v(
              "Invalid " + H + " `" + _ + "` key `" + L + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(k[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var S = Z(I, L, N, H, _ + "." + L, r);
          if (S)
            return S;
        }
        return null;
      }
      return O(T);
    }
    function ee(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(ee);
          if (y === null || l(y))
            return !0;
          var T = g(y);
          if (T) {
            var k = T.call(y), P;
            if (T !== y.entries) {
              for (; !(P = k.next()).done; )
                if (!ee(P.value))
                  return !1;
            } else
              for (; !(P = k.next()).done; ) {
                var N = P.value;
                if (N && !ee(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(y, T) {
      return y === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function re(y) {
      var T = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : ce(T, y) ? "symbol" : T;
    }
    function ae(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var T = re(y);
      if (T === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function ve(y) {
      var T = ae(y);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function xe(y) {
      return !y.constructor || !y.constructor.name ? h : y.constructor.name;
    }
    return p.checkPropTypes = s, p.resetWarningCache = s.resetWarningCache, p.PropTypes = p, p;
  }, Et;
}
var Tt, Ar;
function vi() {
  if (Ar)
    return Tt;
  Ar = 1;
  var t = Wt();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Tt = function() {
    function n(c, l, d, u, f, g) {
      if (g !== t) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Tt;
}
if (process.env.NODE_ENV !== "production") {
  var yi = rn(), bi = !0;
  Mt.exports = mi()(yi.isElement, bi);
} else
  Mt.exports = vi()();
var xi = Mt.exports, Si = ie && ie.__extends || function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Je = ie && ie.__assign || function() {
  return Je = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Je.apply(this, arguments);
}, Ei = ie && ie.__createBinding || (Object.create ? function(t, e, r, n) {
  n === void 0 && (n = r);
  var s = Object.getOwnPropertyDescriptor(e, r);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}), Ti = ie && ie.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), sn = ie && ie.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && Ei(e, t, r);
  return Ti(e, t), e;
}, Oi = ie && ie.__rest || function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}, wi = ie && ie.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(tn, "__esModule", { value: !0 });
var Ot = sn(Te), Ci = wi(Jr), Se = sn(xi);
function kr(t) {
  return t && t.replace(/&nbsp;|\u202F|\u00A0/g, " ").replace(/<br \/>/g, "<br>");
}
function Di(t) {
  var e = document.createTextNode("");
  t.appendChild(e);
  var r = document.activeElement === t;
  if (e !== null && e.nodeValue !== null && r) {
    var n = window.getSelection();
    if (n !== null) {
      var s = document.createRange();
      s.setStart(e, e.nodeValue.length), s.collapse(!0), n.removeAllRanges(), n.addRange(s);
    }
    t instanceof HTMLElement && t.focus();
  }
}
var ji = (
  /** @class */
  function(t) {
    Si(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.lastHtml = r.props.html, r.el = typeof r.props.innerRef == "function" ? { current: null } : Ot.createRef(), r.getEl = function() {
        return (r.props.innerRef && typeof r.props.innerRef != "function" ? r.props.innerRef : r.el).current;
      }, r.emitChange = function(n) {
        var s = r.getEl();
        if (s) {
          var o = s.innerHTML;
          if (r.props.onChange && o !== r.lastHtml) {
            var c = Object.assign({}, n, {
              target: {
                value: o
              }
            });
            r.props.onChange(c);
          }
          r.lastHtml = o;
        }
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props, s = n.tagName, o = n.html, c = n.innerRef, l = Oi(n, ["tagName", "html", "innerRef"]);
      return Ot.createElement(s || "div", Je(Je({}, l), { ref: typeof c == "function" ? function(d) {
        c(d), r.el.current = d;
      } : c || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: o } }), this.props.children);
    }, e.prototype.shouldComponentUpdate = function(r) {
      var n = this.props, s = this.getEl();
      return !s || kr(r.html) !== kr(s.innerHTML) ? !0 : n.disabled !== r.disabled || n.tagName !== r.tagName || n.className !== r.className || n.innerRef !== r.innerRef || n.placeholder !== r.placeholder || !(0, Ci.default)(n.style, r.style);
    }, e.prototype.componentDidUpdate = function() {
      var r = this.getEl();
      r && (this.props.html !== r.innerHTML && (r.innerHTML = this.props.html), this.lastHtml = this.props.html, Di(r));
    }, e.propTypes = {
      html: Se.string.isRequired,
      onChange: Se.func,
      disabled: Se.bool,
      tagName: Se.string,
      className: Se.string,
      style: Se.object,
      innerRef: Se.oneOfType([
        Se.object,
        Se.func
      ])
    }, e;
  }(Ot.Component)
), wt = tn.default = ji;
const Ni = ({ component: t, isSelected: e }) => {
  const r = G((u) => u.selectComponent), n = G((u) => u.updateComponentContent), s = G((u) => u.removeComponent), o = (u) => {
    u.stopPropagation(), r(t.id);
  }, c = (u) => {
    u.stopPropagation(), s(t.id);
  }, l = (u) => {
    n(t.id, u.target.value);
  }, d = () => {
    var u, f, g, h;
    switch (t.type) {
      case "heading":
        return /* @__PURE__ */ i.jsx(
          wt,
          {
            html: t.content,
            onChange: l,
            tagName: t.props.tagName || "h2",
            style: t.props.style,
            className: "outline-none w-full"
          }
        );
      case "text":
        return /* @__PURE__ */ i.jsx(
          wt,
          {
            html: t.content,
            onChange: l,
            tagName: t.props.tagName || "p",
            style: t.props.style,
            className: "outline-none w-full"
          }
        );
      case "image":
        return /* @__PURE__ */ i.jsx(
          "img",
          {
            src: ((u = t.props.attributes) == null ? void 0 : u.src) || "",
            alt: ((f = t.props.attributes) == null ? void 0 : f.alt) || "",
            style: t.props.style
          }
        );
      case "button":
        return /* @__PURE__ */ i.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ i.jsx(
          wt,
          {
            html: t.content,
            onChange: l,
            tagName: "div",
            style: t.props.style,
            className: "outline-none inline-block"
          }
        ) });
      case "divider":
        return /* @__PURE__ */ i.jsx("hr", { style: t.props.style });
      case "spacer":
        return /* @__PURE__ */ i.jsx("div", { style: t.props.style, children: " " });
      case "social":
        return /* @__PURE__ */ i.jsx("div", { style: t.props.style, className: "flex justify-center", children: (g = t.props.socialLinks) == null ? void 0 : g.map((p, x) => /* @__PURE__ */ i.jsx(
          "a",
          {
            href: p.url,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              display: "inline-block",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: p.color,
              color: "white",
              textAlign: "center",
              lineHeight: "40px",
              margin: "0 8px"
            },
            children: /* @__PURE__ */ i.jsx("i", { className: p.icon })
          },
          x
        )) });
      case "video":
        return /* @__PURE__ */ i.jsx("div", { style: t.props.style, children: /* @__PURE__ */ i.jsx("div", { style: {
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden"
        }, children: /* @__PURE__ */ i.jsxs("p", { style: { textAlign: "center", color: "#666", paddingTop: "20px" }, children: [
          "Video placeholder (URL: ",
          (h = t.props.attributes) == null ? void 0 : h.videoUrl,
          ")"
        ] }) }) });
      case "section":
      case "columns":
        return null;
      default:
        return /* @__PURE__ */ i.jsxs("div", { children: [
          "Unknown component: ",
          t.type
        ] });
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `template-component ${e ? "selected" : ""}`,
      onClick: o,
      children: [
        d(),
        /* @__PURE__ */ i.jsx("div", { className: "component-actions", children: /* @__PURE__ */ i.jsx("button", { className: "action-button", onClick: c, title: "Delete", children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-trash" }) }) })
      ]
    }
  );
}, _i = Ni, Ii = () => {
  const t = G((l) => l.template), e = G((l) => l.selectedComponentId), r = G((l) => l.addComponent), n = G((l) => l.selectComponent), [{ isOver: s }, o] = si(() => ({
    accept: "COMPONENT",
    drop: (l) => {
      r(l.componentType);
    },
    collect: (l) => ({
      isOver: !!l.isOver()
    })
  })), c = () => {
    n(null);
  };
  return /* @__PURE__ */ i.jsx("div", { className: "w-full lg:w-2/3 bg-gray-50 overflow-auto p-4", onClick: c, children: /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: o,
      className: `bg-white mx-auto max-w-3xl shadow-sm rounded-md border border-gray-200 min-h-[600px] relative ${s ? "bg-[#EFD6FF] border-[#8E33FF]" : ""}`,
      style: { width: `${t.settings.width}px`, maxWidth: "100%" },
      children: /* @__PURE__ */ i.jsx("div", { className: "p-6 flex flex-col gap-2", children: t.components.length === 0 ? /* @__PURE__ */ i.jsxs("div", { className: "text-center py-10 text-gray-600 border-2 border-dashed border-[#DB7BD0] rounded-md", children: [
        /* @__PURE__ */ i.jsx("i", { className: "fas fa-arrow-right text-[#E61DAB] text-3xl mb-2" }),
        /* @__PURE__ */ i.jsx("p", { className: "text-lg", children: "Drag components from the right panel" }),
        /* @__PURE__ */ i.jsx("p", { className: "text-sm", children: "or" }),
        /* @__PURE__ */ i.jsxs("button", { className: "mt-2 px-4 py-2 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] text-white hover:from-[#F1136C] hover:to-[#5119B7] rounded transition", children: [
          /* @__PURE__ */ i.jsx("i", { className: "fas fa-upload mr-2" }),
          " Import Template"
        ] })
      ] }) : t.components.map((l) => /* @__PURE__ */ i.jsx(
        _i,
        {
          component: l,
          isSelected: l.id === e
        },
        l.id
      )) })
    }
  ) });
}, Pi = Ii, Lt = (t) => {
  var r, n, s, o;
  let e = "";
  switch (t.type) {
    case "heading":
      const c = t.props.tagName || "h2", l = he(t.props.style || {});
      e = `<${c} style="${l}">${t.content}</${c}>`;
      break;
    case "text":
      const d = t.props.tagName || "p", u = he(t.props.style || {});
      e = `<${d} style="${u}">${t.content}</${d}>`;
      break;
    case "image":
      const f = he(t.props.style || {}), g = ((r = t.props.attributes) == null ? void 0 : r.src) || "", h = ((n = t.props.attributes) == null ? void 0 : n.alt) || "";
      e = `<img src="${g}" alt="${h}" style="${f}" />`;
      break;
    case "button":
      const p = t.props.tagName || "a", x = he(t.props.style || {}), v = ((s = t.props.attributes) == null ? void 0 : s.href) || "#";
      e = `<${p} href="${v}" style="${x}">${t.content}</${p}>`;
      break;
    case "divider":
      e = `<hr style="${he(t.props.style || {})}" />`;
      break;
    case "spacer":
      e = `<div style="${he(t.props.style || {})}">&nbsp;</div>`;
      break;
    case "social":
      if (e = `<div style="${he(t.props.style || {})}">`, t.props.socialLinks && Array.isArray(t.props.socialLinks))
        for (const q of t.props.socialLinks)
          e += `
            <a href="${q.url}" style="display: inline-block; width: 40px; height: 40px; border-radius: 50%; background-color: ${q.color}; color: white; text-align: center; line-height: 40px; margin: 0 8px; text-decoration: none;" target="_blank">
              <i class="${q.icon}"></i>
            </a>
          `;
      e += "</div>";
      break;
    case "section":
      if (e = `<div style="${he(t.props.style || {})}">`, t.props.children && Array.isArray(t.props.children))
        for (const q of t.props.children)
          e += Lt(q);
      e += "</div>";
      break;
    case "columns":
      if (e = `<div style="${he(t.props.style || {})}">`, t.props.children && Array.isArray(t.props.children))
        for (const q of t.props.children) {
          const te = he({
            ...q.props.style || {},
            width: "100%"
          });
          if (e += `<div style="${te}">`, q.props.children && Array.isArray(q.props.children))
            for (const ge of q.props.children)
              e += Lt(ge);
          e += "</div>";
        }
      e += "</div>";
      break;
    case "video":
      const b = he(t.props.style || {}), $ = ((o = t.props.attributes) == null ? void 0 : o.videoUrl) || "";
      e = `
        <div style="${b}">
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <p style="text-align: center; color: #666; padding-top: 20px;">
              Video placeholder (not supported in all email clients)
            </p>
            <p style="text-align: center; padding-top: 10px;">
              <a href="${$}" style="color: #3182ce; text-decoration: underline;" target="_blank">
                Watch Video
              </a>
            </p>
          </div>
        </div>
      `;
      break;
    default:
      e = `<!-- Unsupported component type: ${t.type} -->`;
  }
  return e;
}, he = (t) => Object.entries(t).map(([e, r]) => `${e.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${r}`).join("; "), on = (t) => {
  const { components: e, settings: r } = t;
  let n = "";
  for (const s of e)
    n += Lt(s);
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body style="margin: 0; padding: 0; background-color: ${r.backgroundColor}; font-family: ${r.fontFamily};">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td align="center" valign="top">
        <table cellpadding="0" cellspacing="0" border="0" width="${r.width}" style="max-width: ${r.width}px; margin: 0 auto;">
          <tr>
            <td>
              ${n}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}, me = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
function Ri() {
  return se();
}
const Ae = /* @__PURE__ */ new Map(), Ke = [];
let Xe = { toasts: [] };
function Ce(t) {
  Xe = Ai(Xe, t), Ke.forEach((e) => {
    e(Xe);
  });
}
function Ai(t, e) {
  switch (e.type) {
    case me.ADD_TOAST:
      return {
        ...t,
        toasts: [...t.toasts, e.toast]
      };
    case me.UPDATE_TOAST:
      return {
        ...t,
        toasts: t.toasts.map(
          (r) => r.id === e.toast.id ? { ...r, ...e.toast } : r
        )
      };
    case me.DISMISS_TOAST: {
      const { toastId: r } = e;
      return r === void 0 ? {
        ...t,
        toasts: t.toasts.map((n) => ({
          ...n,
          dismissed: !0
        }))
      } : {
        ...t,
        toasts: t.toasts.map(
          (n) => n.id === r ? { ...n, dismissed: !0 } : n
        )
      };
    }
    case me.REMOVE_TOAST: {
      const { toastId: r } = e;
      return r === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((n) => n.id !== r)
      };
    }
  }
}
function ki({ ...t }) {
  const e = Ri(), r = (o) => Ce({
    type: me.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Ce({ type: me.DISMISS_TOAST, toastId: e });
  Ce({
    type: me.ADD_TOAST,
    toast: {
      ...t,
      id: e,
      title: t.title,
      description: t.description,
      type: t.type || "default"
    }
  });
  const s = setTimeout(() => {
    Ce({ type: me.DISMISS_TOAST, toastId: e }), setTimeout(() => {
      Ce({ type: me.REMOVE_TOAST, toastId: e });
    }, 300);
  }, 5e3);
  return Ae.set(e, s), {
    id: e,
    update: r,
    dismiss: n
  };
}
function Mi() {
  const [t, e] = De(Xe);
  je(() => (Ke.push(e), () => {
    const s = Ke.indexOf(e);
    s > -1 && Ke.splice(s, 1);
  }), [t]);
  const r = Nt((s) => {
    Ce({ type: me.DISMISS_TOAST, toastId: s }), s && Ae.has(s) && (clearTimeout(Ae.get(s)), Ae.delete(s));
  }, []), n = Nt(() => {
    Ce({ type: me.DISMISS_TOAST }), Ae.forEach((s) => clearTimeout(s)), Ae.clear();
  }, []);
  return {
    ...t,
    toast: ki,
    dismiss: r,
    dismissAll: n
  };
}
const Li = () => {
  const { toast: t } = Mi(), e = G((l) => l.isOutputModalOpen), r = G((l) => l.setOutputModalOpen), n = G((l) => l.template), s = on(n), o = Bn(null), c = () => {
    o.current && navigator.clipboard.writeText(s).then(() => {
      t({
        title: "Copied to clipboard",
        description: "HTML has been copied to your clipboard"
      });
    }).catch((l) => {
      t({
        type: "error",
        title: "Copy failed",
        description: "Failed to copy HTML to clipboard"
      }), console.error("Failed to copy text: ", l);
    });
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "p-4 border-b border-gray-200 flex justify-between items-center", children: [
      /* @__PURE__ */ i.jsx("h2", { className: "text-lg font-bold text-[#E61DAB]", children: "Public Circles - Generated HTML" }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "text-gray-400 hover:text-gray-600",
          onClick: () => r(!1),
          children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-times" })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "p-4 overflow-auto flex-1", children: /* @__PURE__ */ i.jsx(
      "pre",
      {
        ref: o,
        className: "bg-[#EFD6FF] bg-opacity-20 p-4 rounded-md overflow-x-auto text-sm font-mono border border-[#C684FF]",
        children: s
      }
    ) }),
    /* @__PURE__ */ i.jsx("div", { className: "p-4 border-t border-gray-200 flex justify-end", children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: c,
        className: "px-4 py-2 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] text-white rounded-md hover:from-[#F1136C] hover:to-[#5119B7] transition-all flex items-center gap-2",
        children: [
          /* @__PURE__ */ i.jsx("i", { className: "fas fa-copy" }),
          "Copy to Clipboard"
        ]
      }
    ) })
  ] }) }) : null;
}, Fi = Li, $i = (t) => {
  const e = t.replace(/\\n/g, `
`).replace(/\\"/g, '"');
  if (e.length > 5e4 || e.includes("BECHMARKONE") || e.includes("BMEMBF"))
    return console.log("Detected complex template - using simplified approach"), Hi(e);
  const n = new DOMParser().parseFromString(e, "text/html"), s = n.body;
  if (!s)
    return console.error("Could not parse HTML: No body element found"), Gi("Failed Import");
  const o = {
    ...ke,
    backgroundColor: Ve(s, "background-color") || ke.backgroundColor,
    fontFamily: Ve(s, "font-family") || ke.fontFamily
  };
  let c = null;
  const l = s.querySelectorAll("table[name], table[class]");
  if (l.length > 0)
    for (const u of l) {
      const f = u.getAttribute("name") || "", g = u.getAttribute("class") || "";
      if (f.includes("Main") || f.includes("Content") || g.includes("main") || g.includes("content") || f.includes("email") || g.includes("email")) {
        c = u;
        break;
      }
    }
  if (!c) {
    const u = s.querySelectorAll("table");
    if (u.length > 0)
      for (const f of u) {
        const g = f.textContent && f.textContent.trim().length > 50, h = f.querySelectorAll("img").length > 0;
        (g || h) && (!c || f.querySelectorAll("table").length > 0) && (c = f);
      }
  }
  if (!c) {
    const u = s.querySelectorAll('div[class*="content"], div[id*="content"], div[class*="container"], div[id*="container"]');
    for (const f of u)
      if (f.textContent && f.textContent.trim().length > 100) {
        c = f;
        break;
      }
  }
  if (c || (c = s), c && c.hasAttribute("width")) {
    const u = c.getAttribute("width");
    u && !isNaN(parseInt(u)) && (o.width = parseInt(u));
  } else if (c) {
    const u = Ve(c, "width");
    if (u && u.includes("px")) {
      const f = parseInt(u.replace("px", ""));
      isNaN(f) || (o.width = f);
    }
  }
  const d = {
    id: se(),
    name: n.title || "Imported Template",
    components: [],
    settings: o
  };
  try {
    Mr(c, d.components), d.components.length === 0 && Mr(s, d.components), d.components.length === 0 && (console.warn("Failed to extract components from template - using fallback"), d.components.push({
      id: se(),
      type: "text",
      content: e,
      props: {
        tagName: "div",
        style: { padding: "10px" }
      }
    }));
  } catch (u) {
    console.error("Error parsing template content:", u), d.components = [{
      id: se(),
      type: "text",
      content: e,
      props: {
        tagName: "div",
        style: { padding: "10px" }
      }
    }];
  }
  return d;
};
function Hi(t) {
  return {
    id: se(),
    name: "Complex Email Template",
    components: [{
      id: se(),
      type: "text",
      content: Bi(t),
      props: {
        tagName: "div",
        style: {
          padding: "10px",
          width: "100%"
        }
      }
    }],
    settings: {
      ...ke,
      width: 600
      // Standard email width
    }
  };
}
function Bi(t) {
  let e = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  return e = e.replace(/<!--\[if.*?<!\[endif\]-->/gs, ""), e;
}
const Mr = (t, e) => {
  if (!t)
    return;
  const r = Array.from(t.children).filter(
    (n) => !["style", "script", "meta", "link", "head"].includes(n.tagName.toLowerCase())
  );
  if (t.tagName.toLowerCase() === "table") {
    const n = t.querySelectorAll(":scope > tbody > tr, :scope > tr");
    if (n.length > 0) {
      n.forEach((s) => {
        const o = s.querySelectorAll("td, th");
        if (o.length === 1) {
          const c = Me(o[0]);
          c && e.push(c);
        } else if (o.length > 1) {
          const c = Vi(o);
          c && e.push(c);
        }
      });
      return;
    }
  }
  if (r.length === 0) {
    const n = Me(t);
    n && e.push(n);
  } else if (Ui(t)) {
    const s = qi(t, r);
    s && e.push(s);
  } else
    r.forEach((s) => {
      const o = Me(s);
      o && e.push(o);
    });
}, Ui = (t) => {
  var s, o;
  const e = t.tagName.toLowerCase(), r = ((s = t.className) == null ? void 0 : s.toLowerCase()) || "", n = ((o = t.id) == null ? void 0 : o.toLowerCase()) || "";
  return e === "div" && (r.includes("section") || r.includes("container") || r.includes("wrapper") || n.includes("section") || n.includes("container")) || e === "section" || // Email templates often use nested tables for layout
  e === "table" && t.querySelectorAll("table").length > 0;
}, Vi = (t) => {
  const e = [];
  return t.forEach((r) => {
    const n = Me(r);
    n && e.push(n);
  }), e.length === 0 ? null : {
    id: se(),
    type: "columns",
    content: "",
    props: {
      tagName: "div",
      style: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
      },
      children: e
    }
  };
}, qi = (t, e) => {
  const r = [];
  if (e.forEach((s) => {
    const o = Me(s);
    o && r.push(o);
  }), r.length === 0)
    return Me(t);
  const n = Yt(t);
  return {
    id: se(),
    type: "section",
    content: "",
    props: {
      tagName: "div",
      style: n,
      children: r
    }
  };
}, Me = (t) => {
  if (!t || !t.tagName)
    return null;
  const e = t.innerHTML || "", r = t.textContent || "";
  if (!e.trim() && !r.trim())
    return null;
  const n = t.tagName.toLowerCase();
  let s = Wi(t);
  const o = Yt(t), c = {
    id: se(),
    type: s,
    content: e,
    props: {
      tagName: n,
      style: o
    }
  };
  return Yi(c, t, s), c;
}, Wi = (t) => {
  var l, d;
  if (!t)
    return "text";
  const e = t.tagName.toLowerCase(), r = ((l = t.className) == null ? void 0 : l.toLowerCase()) || "", n = ((d = t.id) == null ? void 0 : d.toLowerCase()) || "", s = !!t.querySelector("img"), o = !!t.querySelector('a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"]'), c = t.textContent || "";
  if (/^h[1-6]$/.test(e))
    return "heading";
  if (e === "img" || s) {
    const u = e === "img" ? t : t.querySelector("img");
    if (u) {
      const f = u.getAttribute("width"), g = u.getAttribute("height"), h = f && parseInt(f) < 50 || g && parseInt(g) < 50, p = !!u.closest("a");
      if (h && p && o)
        return "social";
    }
    return "image";
  }
  return e === "a" || r.includes("button") || n.includes("button") || t.querySelector("a") && !s ? "button" : e === "hr" || r.includes("divider") || n.includes("divider") ? "divider" : e === "div" && c.trim() === "" || r.includes("spacer") || n.includes("spacer") ? "spacer" : e === "iframe" || t.querySelector("iframe") || r.includes("video") || n.includes("video") ? "video" : o ? "social" : e === "table" && t.querySelectorAll("td").length > 1 ? "columns" : (e === "div" || e === "section") && (r.includes("section") || n.includes("section") || r.includes("container") || n.includes("container")) ? "section" : e === "p" || e === "div" || e === "span" ? "text" : e === "table" || e === "tr" || e === "td" ? "section" : "text";
}, Yt = (t) => {
  const e = {};
  if (!t)
    return e;
  const r = t.getAttribute("style");
  r && r.split(";").forEach((n) => {
    const s = n.split(":");
    if (s.length === 2) {
      const o = s[0].trim(), c = s[1].trim();
      if (o && c) {
        const l = o.replace(/-([a-z])/g, (d, u) => u.toUpperCase());
        e[l] = c;
      }
    }
  });
  try {
    const n = window.getComputedStyle(t);
    [
      "color",
      "background-color",
      "font-size",
      "font-weight",
      "text-align",
      "margin",
      "padding",
      "border",
      "width",
      "height"
    ].forEach((o) => {
      const c = o.replace(/-([a-z])/g, (l, d) => d.toUpperCase());
      if (!e[c]) {
        const l = n.getPropertyValue(o);
        l && l !== "" && l !== "normal" && l !== "auto" && (e[c] = l);
      }
    });
  } catch (n) {
    console.warn("Error getting computed style:", n);
  }
  return e;
}, Yi = (t, e, r) => {
  switch (t.props.style || (t.props.style = {}), r) {
    case "image":
      const n = e.tagName.toLowerCase() === "img" ? e : e.querySelector("img");
      n && (t.props.attributes = {
        src: n.getAttribute("src") || "",
        alt: n.getAttribute("alt") || "",
        width: n.getAttribute("width") || "",
        height: n.getAttribute("height") || ""
      }, t.content = "");
      break;
    case "button":
      const s = e.tagName.toLowerCase() === "a" ? e : e.querySelector("a");
      if (s) {
        t.props.attributes = {
          href: s.getAttribute("href") || "#",
          target: s.getAttribute("target") || "_blank"
        }, t.content = s.textContent || "Click Here";
        const d = Yt(s);
        Object.keys(d).length > 0 && (t.props.style = {
          ...t.props.style,
          ...d
        });
      }
      break;
    case "video":
      const o = e.tagName.toLowerCase() === "iframe" ? e : e.querySelector("iframe");
      o && (t.props.attributes = {
        videoUrl: o.getAttribute("src") || "",
        width: o.getAttribute("width") || "100%",
        height: o.getAttribute("height") || "auto"
      }, t.content = "");
      break;
    case "social":
      const c = e.querySelectorAll('a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"], a[href*="youtube"]');
      if (c.length > 0) {
        const d = [];
        c.forEach((u) => {
          const f = u.getAttribute("href") || "";
          let g = "other";
          f.includes("facebook") ? g = "facebook" : f.includes("twitter") ? g = "twitter" : f.includes("instagram") ? g = "instagram" : f.includes("linkedin") ? g = "linkedin" : f.includes("youtube") && (g = "youtube"), d.push({ platform: g, url: f });
        }), t.props.socialLinks = d;
      }
      break;
    case "spacer":
      const l = t.props.style.height || Ve(e, "height") || Ve(e, "padding-top") || "20px";
      t.props.style.height = l, t.content = "";
      break;
    case "divider":
      t.props.style = {
        ...t.props.style,
        borderTop: t.props.style.borderTop || "1px solid #ccc",
        margin: t.props.style.margin || "20px 0"
      }, t.content = "";
      break;
    case "heading":
      if (!t.props.style.fontSize) {
        const d = {
          h1: "32px",
          h2: "28px",
          h3: "24px",
          h4: "20px",
          h5: "18px",
          h6: "16px"
        }, u = t.props.tagName || "h2";
        t.props.style.fontSize = d[u] || "24px";
      }
      t.props.style.fontWeight || (t.props.style.fontWeight = "bold");
      break;
    case "text":
      t.content = zi(t.content);
      break;
  }
}, zi = (t) => t ? t.replace(/<strong>(.*?)<\/strong>/g, '<span style="font-weight: bold;">$1</span>').replace(/<b>(.*?)<\/b>/g, '<span style="font-weight: bold;">$1</span>').replace(/<em>(.*?)<\/em>/g, '<span style="font-style: italic;">$1</span>').replace(/<i>(.*?)<\/i>/g, '<span style="font-style: italic;">$1</span>').replace(/<u>(.*?)<\/u>/g, '<span style="text-decoration: underline;">$1</span>').replace(/<s>(.*?)<\/s>/g, '<span style="text-decoration: line-through;">$1</span>').replace(/<del>(.*?)<\/del>/g, '<span style="text-decoration: line-through;">$1</span>').replace(/<mark>(.*?)<\/mark>/g, '<span style="background-color: yellow;">$1</span>') : "", Ve = (t, e) => {
  if (!t)
    return null;
  const r = t.getAttribute("style");
  if (r) {
    const n = new RegExp(`${e}:\\s*([^;]+)`, "i"), s = r.match(n);
    if (s && s[1])
      return s[1].trim();
  }
  try {
    if (window.getComputedStyle) {
      const s = window.getComputedStyle(t).getPropertyValue(e);
      if (s && s !== "" && s !== "normal" && s !== "auto")
        return s;
    }
  } catch (n) {
    console.warn("Error getting computed style:", n);
  }
  return null;
}, Gi = (t) => ({
  id: se(),
  name: t,
  components: [
    {
      id: se(),
      type: "text",
      content: "Failed to parse the HTML template. Please check the HTML code and try again.",
      props: {
        tagName: "p",
        style: {
          color: "red",
          padding: "20px",
          textAlign: "center"
        }
      }
    }
  ],
  settings: ke
}), Ki = ({
  initialHtml: t,
  useEnhancedParser: e = !0,
  onExport: r,
  onTemplateChange: n
}) => {
  const [s, o] = De(!!t), {
    isComponentPanelOpen: c,
    isPropertiesPanelOpen: l,
    isSettingsPanelOpen: d,
    openComponentPanel: u,
    openPropertiesPanel: f,
    openSettingsPanel: g
  } = G();
  return je(() => {
    if (t) {
      o(!0);
      try {
        console.log("Parsing HTML template, length:", t.length), t.length > 1e5 && console.warn(
          "Very large HTML template detected:",
          t.length,
          "characters"
        );
        const h = $i(t);
        console.log(
          "Successfully parsed template with components:",
          h.components.length
        ), setTimeout(() => {
          G.setState({ template: h }), o(!1), n && n(h);
        }, 100);
      } catch (h) {
        console.error("Failed to parse HTML:", h), console.log("Attempting fallback parsing approach...");
        try {
          const p = {
            id: se(),
            name: "Imported Template",
            components: [
              {
                id: se(),
                type: "text",
                content: t,
                props: {
                  tagName: "div",
                  style: { padding: "10px" }
                }
              }
            ],
            settings: G.getState().template.settings
          };
          G.setState({ template: p }), o(!1), n && n(p), console.log(
            "Used fallback parsing - template imported as single content block"
          ), alert(
            "The template was imported as a single content block due to its complexity. You can now edit it as needed."
          );
        } catch (p) {
          console.error("Even fallback parsing failed:", p);
          const x = G.getState().template;
          G.getState().initializeTemplate(), o(!1), n && n(x), alert(
            "Could not parse the template. Please check the HTML format and try again."
          );
        }
      }
    } else {
      G.getState().initializeTemplate();
      const h = G.getState().template;
      o(!1), n && n(h);
    }
  }, [t, n]), je(() => {
    if (!r && !n)
      return;
    const h = G.subscribe((p, x) => {
      if (p.template !== x.template && n && n(p.template), p.isOutputModalOpen !== x.isOutputModalOpen && !p.isOutputModalOpen && r) {
        const v = on(p.template);
        r(v);
      }
    });
    return () => {
      h();
    };
  }, [r, n]), /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ i.jsx(os, {}),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ i.jsx(Pi, {}),
      /* @__PURE__ */ i.jsxs("div", { className: "w-full lg:w-1/3 border-l border-gray-200 flex flex-col bg-white", children: [
        /* @__PURE__ */ i.jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ i.jsxs("nav", { className: "flex", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `px-4 py-3 text-sm font-medium ${c ? "text-[#E61DAB] border-b-2 border-[#E61DAB]" : "text-gray-600 hover:text-[#8E33FF]"}`,
              onClick: u,
              children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ i.jsx("i", { className: "fas fa-th-large text-xs" }),
                "Components"
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `px-4 py-3 text-sm font-medium ${l ? "text-[#E61DAB] border-b-2 border-[#E61DAB]" : "text-gray-600 hover:text-[#8E33FF]"}`,
              onClick: f,
              children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ i.jsx("i", { className: "fas fa-sliders-h text-xs" }),
                "Properties"
              ] })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `px-4 py-3 text-sm font-medium ${d ? "text-[#E61DAB] border-b-2 border-[#E61DAB]" : "text-gray-600 hover:text-[#8E33FF]"}`,
              onClick: g,
              children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ i.jsx("i", { className: "fas fa-cog text-xs" }),
                "Settings"
              ] })
            }
          )
        ] }) }),
        c && /* @__PURE__ */ i.jsx(ai, {}),
        l && /* @__PURE__ */ i.jsx(li, {}),
        d && /* @__PURE__ */ i.jsx(di, {})
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(Fi, {})
  ] });
}, Xi = Ki;
function an(t) {
  let e = null;
  return () => (e == null && (e = t()), e);
}
function Ji(t, e) {
  return t.filter(
    (r) => r !== e
  );
}
function Zi(t, e) {
  const r = /* @__PURE__ */ new Set(), n = (o) => r.add(o);
  t.forEach(n), e.forEach(n);
  const s = [];
  return r.forEach(
    (o) => s.push(o)
  ), s;
}
class Qi {
  enter(e) {
    const r = this.entered.length, n = (s) => this.isNodeInDocument(s) && (!s.contains || s.contains(e));
    return this.entered = Zi(this.entered.filter(n), [
      e
    ]), r === 0 && this.entered.length > 0;
  }
  leave(e) {
    const r = this.entered.length;
    return this.entered = Ji(this.entered.filter(this.isNodeInDocument), e), r > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(e) {
    this.entered = [], this.isNodeInDocument = e;
  }
}
class ea {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((e) => {
      Object.defineProperty(this.item, e, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(e) {
    if (e) {
      const r = {};
      Object.keys(this.config.exposeProperties).forEach((n) => {
        const s = this.config.exposeProperties[n];
        s != null && (r[n] = {
          value: s(e, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, r);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(e, r) {
    return r === e.getSourceId();
  }
  endDrag() {
  }
  constructor(e) {
    this.config = e, this.item = {}, this.initializeExposedProperties();
  }
}
const cn = "__NATIVE_FILE__", ln = "__NATIVE_URL__", un = "__NATIVE_TEXT__", dn = "__NATIVE_HTML__", Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: cn,
  HTML: dn,
  TEXT: un,
  URL: ln
}, Symbol.toStringTag, { value: "Module" }));
function Ct(t, e, r) {
  const n = e.reduce(
    (s, o) => s || t.getData(o),
    ""
  );
  return n ?? r;
}
const Ft = {
  [cn]: {
    exposeProperties: {
      files: (t) => Array.prototype.slice.call(t.files),
      items: (t) => t.items,
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Files"
    ]
  },
  [dn]: {
    exposeProperties: {
      html: (t, e) => Ct(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [ln]: {
    exposeProperties: {
      urls: (t, e) => Ct(t, e, "").split(`
`),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [un]: {
    exposeProperties: {
      text: (t, e) => Ct(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function ta(t, e) {
  const r = Ft[t];
  if (!r)
    throw new Error(`native type ${t} has no configuration`);
  const n = new ea(r);
  return n.loadDataTransfer(e), n;
}
function Dt(t) {
  if (!t)
    return null;
  const e = Array.prototype.slice.call(t.types || []);
  return Object.keys(Ft).filter((r) => {
    const n = Ft[r];
    return n != null && n.matchesTypes ? n.matchesTypes.some(
      (s) => e.indexOf(s) > -1
    ) : !1;
  })[0] || null;
}
const ra = an(
  () => /firefox/i.test(navigator.userAgent)
), fn = an(
  () => !!window.safari
);
class Fr {
  interpolate(e) {
    const { xs: r, ys: n, c1s: s, c2s: o, c3s: c } = this;
    let l = r.length - 1;
    if (e === r[l])
      return n[l];
    let d = 0, u = c.length - 1, f;
    for (; d <= u; ) {
      f = Math.floor(0.5 * (d + u));
      const p = r[f];
      if (p < e)
        d = f + 1;
      else if (p > e)
        u = f - 1;
      else
        return n[f];
    }
    l = Math.max(0, u);
    const g = e - r[l], h = g * g;
    return n[l] + s[l] * g + o[l] * h + c[l] * g * h;
  }
  constructor(e, r) {
    const { length: n } = e, s = [];
    for (let p = 0; p < n; p++)
      s.push(p);
    s.sort(
      (p, x) => e[p] < e[x] ? -1 : 1
    );
    const o = [], c = [];
    let l, d;
    for (let p = 0; p < n - 1; p++)
      l = e[p + 1] - e[p], d = r[p + 1] - r[p], o.push(l), c.push(d / l);
    const u = [
      c[0]
    ];
    for (let p = 0; p < o.length - 1; p++) {
      const x = c[p], v = c[p + 1];
      if (x * v <= 0)
        u.push(0);
      else {
        l = o[p];
        const O = o[p + 1], C = l + O;
        u.push(3 * C / ((C + O) / x + (C + l) / v));
      }
    }
    u.push(c[c.length - 1]);
    const f = [], g = [];
    let h;
    for (let p = 0; p < u.length - 1; p++) {
      h = c[p];
      const x = u[p], v = 1 / o[p], O = x + u[p + 1] - h - h;
      f.push((h - x - O) * v), g.push(O * v * v);
    }
    this.xs = e, this.ys = r, this.c1s = u, this.c2s = f, this.c3s = g;
  }
}
const na = 1;
function pn(t) {
  const e = t.nodeType === na ? t : t.parentElement;
  if (!e)
    return null;
  const { top: r, left: n } = e.getBoundingClientRect();
  return {
    x: n,
    y: r
  };
}
function ze(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function sa(t) {
  var e;
  return t.nodeName === "IMG" && (ra() || !(!((e = document.documentElement) === null || e === void 0) && e.contains(t)));
}
function oa(t, e, r, n) {
  let s = t ? e.width : r, o = t ? e.height : n;
  return fn() && t && (o /= window.devicePixelRatio, s /= window.devicePixelRatio), {
    dragPreviewWidth: s,
    dragPreviewHeight: o
  };
}
function ia(t, e, r, n, s) {
  const o = sa(e), l = pn(o ? t : e), d = {
    x: r.x - l.x,
    y: r.y - l.y
  }, { offsetWidth: u, offsetHeight: f } = t, { anchorX: g, anchorY: h } = n, { dragPreviewWidth: p, dragPreviewHeight: x } = oa(o, e, u, f), v = () => {
    let $ = new Fr([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      d.y,
      // Align at the center
      d.y / f * x,
      // Dock to the bottom
      d.y + x - f
    ]).interpolate(h);
    return fn() && o && ($ += (window.devicePixelRatio - 1) * x), $;
  }, O = () => new Fr([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    d.x,
    // Align at the center
    d.x / u * p,
    // Dock to the right
    d.x + p - u
  ]).interpolate(g), { offsetX: C, offsetY: D } = s, A = C === 0 || C, F = D === 0 || D;
  return {
    x: A ? C : O(),
    y: F ? D : v()
  };
}
class aa {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var e;
    return !((e = this.globalContext) === null || e === void 0) && e.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var e;
    return ((e = this.optionsArgs) === null || e === void 0 ? void 0 : e.rootElement) || this.window;
  }
  constructor(e, r) {
    this.ownerDocument = null, this.globalContext = e, this.optionsArgs = r;
  }
}
function ca(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function $r(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {}, n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    }))), n.forEach(function(s) {
      ca(t, s, r[s]);
    });
  }
  return t;
}
class la {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var e, r;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((e = this.dragStartSourceIds) === null || e === void 0 ? void 0 : e.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const e = this.rootElement;
    if (e !== void 0) {
      if (e.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
    }
  }
  teardown() {
    const e = this.rootElement;
    if (e !== void 0 && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var r;
      (r = this.window) === null || r === void 0 || r.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(e, r, n) {
    return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, r), () => {
      this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
    };
  }
  connectDragSource(e, r, n) {
    this.sourceNodes.set(e, r), this.sourceNodeOptions.set(e, n);
    const s = (c) => this.handleDragStart(c, e), o = (c) => this.handleSelectStart(c);
    return r.setAttribute("draggable", "true"), r.addEventListener("dragstart", s), r.addEventListener("selectstart", o), () => {
      this.sourceNodes.delete(e), this.sourceNodeOptions.delete(e), r.removeEventListener("dragstart", s), r.removeEventListener("selectstart", o), r.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(e, r) {
    const n = (c) => this.handleDragEnter(c, e), s = (c) => this.handleDragOver(c, e), o = (c) => this.handleDrop(c, e);
    return r.addEventListener("dragenter", n), r.addEventListener("dragover", s), r.addEventListener("drop", o), () => {
      r.removeEventListener("dragenter", n), r.removeEventListener("dragover", s), r.removeEventListener("drop", o);
    };
  }
  addEventListeners(e) {
    e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(e) {
    e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const e = this.monitor.getSourceId(), r = this.sourceNodeOptions.get(e);
    return $r({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, r || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const e = this.monitor.getSourceId(), r = this.sourcePreviewNodeOptions.get(e);
    return $r({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, r || {});
  }
  isDraggingNativeItem() {
    const e = this.monitor.getItemType();
    return Object.keys(Lr).some(
      (r) => Lr[r] === e
    );
  }
  beginDragNativeItem(e, r) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = ta(e, r), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(e) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
    const r = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var n;
      return (n = this.rootElement) === null || n === void 0 ? void 0 : n.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, r);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var e;
        (e = this.window) === null || e === void 0 || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, r) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(r));
  }
  handleDragEnter(e, r) {
    this.dragEnterTargetIds.unshift(r);
  }
  handleDragOver(e, r) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(r);
  }
  handleDrop(e, r) {
    this.dropTargetIds.unshift(r);
  }
  constructor(e, r, n) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (s) => {
      const o = this.sourceNodes.get(s);
      return o && pn(o) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (s) => !!(s && this.document && this.document.body && this.document.body.contains(s)), this.endDragIfSourceWasRemovedFromDOM = () => {
      const s = this.currentDragSourceNode;
      s == null || this.isNodeInDocument(s) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (s) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(s || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (s) => {
      if (s.defaultPrevented)
        return;
      const { dragStartSourceIds: o } = this;
      this.dragStartSourceIds = null;
      const c = ze(s);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(o || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: c
      });
      const { dataTransfer: l } = s, d = Dt(l);
      if (this.monitor.isDragging()) {
        if (l && typeof l.setDragImage == "function") {
          const f = this.monitor.getSourceId(), g = this.sourceNodes.get(f), h = this.sourcePreviewNodes.get(f) || g;
          if (h) {
            const { anchorX: p, anchorY: x, offsetX: v, offsetY: O } = this.getCurrentSourcePreviewNodeOptions(), A = ia(g, h, c, {
              anchorX: p,
              anchorY: x
            }, {
              offsetX: v,
              offsetY: O
            });
            l.setDragImage(h, A.x, A.y);
          }
        }
        try {
          l == null || l.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(s.target);
        const { captureDraggingState: u } = this.getCurrentSourcePreviewNodeOptions();
        u ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (d)
        this.beginDragNativeItem(d);
      else {
        if (l && !l.types && (s.target && !s.target.hasAttribute || !s.target.hasAttribute("draggable")))
          return;
        s.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (s) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(s.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(s.target) || this.monitor.isDragging())
        return;
      const { dataTransfer: l } = s, d = Dt(l);
      d && this.beginDragNativeItem(d, l);
    }, this.handleTopDragEnter = (s) => {
      const { dragEnterTargetIds: o } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = s.altKey, o.length > 0 && this.actions.hover(o, {
        clientOffset: ze(s)
      }), o.some(
        (l) => this.monitor.canDropOnTarget(l)
      ) && (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (s) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(s.dataTransfer);
      }
    }, this.handleTopDragOver = (s) => {
      const { dragOverTargetIds: o } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = s.altKey, this.lastClientOffset = ze(s), this.scheduleHover(o), (o || []).some(
        (l) => this.monitor.canDropOnTarget(l)
      ) ? (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? s.preventDefault() : (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (s) => {
      this.isDraggingNativeItem() && s.preventDefault(), this.enterLeaveCounter.leave(s.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (s) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var o;
        s.preventDefault(), (o = this.currentNativeSource) === null || o === void 0 || o.loadDataTransfer(s.dataTransfer);
      } else
        Dt(s.dataTransfer) && s.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (s) => {
      const { dropTargetIds: o } = this;
      this.dropTargetIds = [], this.actions.hover(o, {
        clientOffset: ze(s)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (s) => {
      const o = s.target;
      typeof o.dragDrop == "function" && (o.tagName === "INPUT" || o.tagName === "SELECT" || o.tagName === "TEXTAREA" || o.isContentEditable || (s.preventDefault(), o.dragDrop()));
    }, this.options = new aa(r, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Qi(this.isNodeInDocument);
  }
}
const ua = function(e, r, n) {
  return new la(e, r, n);
}, da = () => /* @__PURE__ */ i.jsx("div", { id: "toaster", className: "fixed bottom-4 right-4 z-50" }), jt = ({ children: t, variant: e, ...r }) => {
  const n = "py-2 px-4 rounded", s = e === "outline" ? `bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 ${n}` : `bg-[#E61DAB] hover:bg-[#d31a9c] text-white ${n}`;
  return /* @__PURE__ */ i.jsx("button", { ...r, className: r.className || s, children: t });
}, fa = (t) => /* @__PURE__ */ i.jsx(
  "textarea",
  {
    ...t,
    className: t.className || "w-full min-h-[200px] p-3 border border-gray-300 rounded font-mono text-sm"
  }
), pa = ({ children: t, ...e }) => /* @__PURE__ */ i.jsx(
  "div",
  {
    ...e,
    className: e.className || "mx-auto max-w-4xl my-4 bg-white p-6 rounded-lg shadow-sm",
    children: t
  }
), ga = ({ children: t, ...e }) => /* @__PURE__ */ i.jsx("div", { ...e, className: e.className || "mb-3", children: t }), ha = ({ children: t, ...e }) => /* @__PURE__ */ i.jsx("h2", { ...e, className: e.className || "text-xl font-semibold", children: t }), ma = ({ children: t, ...e }) => /* @__PURE__ */ i.jsx("div", { ...e, className: e.className || "", children: t });
function ya() {
  const [t, e] = De(void 0), [r, n] = De(!1), [s, o] = De(""), c = () => {
    if (s.trim())
      try {
        console.log("Processing template input, length:", s.length);
        try {
          const u = JSON.parse(s);
          if (u.body) {
            console.log("Detected JSON with body property"), e(u.body), n(!1);
            return;
          } else if (typeof u == "string") {
            console.log("Detected JSON string"), e(u), n(!1);
            return;
          } else if (u.html || u.content) {
            console.log("Detected JSON with html/content property"), e(u.html || u.content), n(!1);
            return;
          }
        } catch {
          if (console.log("Not JSON, treating as raw HTML"), s.includes("<") && s.includes(">")) {
            e(s), n(!1), s.length > 1e5 && (console.warn(
              "Very large HTML template detected:",
              s.length,
              "chars"
            ), alert(
              "This is a very large template. It may take longer to process."
            ));
            return;
          } else
            throw new Error("Input does not appear to contain HTML tags");
        }
      } catch (u) {
        console.error("Failed to parse input:", u), alert(
          "Could not parse input. Make sure it contains valid HTML with proper tags."
        );
      }
  }, l = () => {
    e(void 0), n(!1), o("");
  }, d = () => {
    n(!r);
  };
  return /* @__PURE__ */ i.jsx(Do, { backend: ua, children: /* @__PURE__ */ i.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "p-4 bg-white border-b flex justify-center space-x-4", children: [
      /* @__PURE__ */ i.jsx(
        jt,
        {
          onClick: d,
          className: "bg-[#E61DAB] hover:bg-[#d31a9c] text-white",
          children: r ? "Hide HTML Input" : "Enter HTML Template"
        }
      ),
      /* @__PURE__ */ i.jsx(jt, { onClick: l, variant: "outline", children: "Reset Template" })
    ] }),
    r && /* @__PURE__ */ i.jsxs(pa, { className: "mx-auto max-w-4xl my-4", children: [
      /* @__PURE__ */ i.jsx(ga, { children: /* @__PURE__ */ i.jsx(ha, { children: "Enter HTML Template" }) }),
      /* @__PURE__ */ i.jsxs(ma, { children: [
        /* @__PURE__ */ i.jsx(
          fa,
          {
            value: s,
            onChange: (u) => o(u.target.value),
            placeholder: "Paste HTML or JSON with HTML content here...",
            className: "min-h-[200px] font-mono text-sm"
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ i.jsx(
          jt,
          {
            onClick: c,
            className: "bg-[#E61DAB] hover:bg-[#d31a9c] text-white",
            children: "Load Template"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: r ? "hidden" : "", children: /* @__PURE__ */ i.jsx(Xi, { initialHtml: t }) }),
    /* @__PURE__ */ i.jsx(da, {})
  ] }) });
}
export {
  ya as App,
  Ur as COMPONENT_ITEMS,
  ai as ComponentPanel,
  ke as DEFAULT_TEMPLATE_SETTINGS,
  _i as DroppableComponent,
  Pi as EmailCanvas,
  Xi as EmailEditor,
  Fi as HtmlOutputModal,
  li as PropertiesPanel,
  di as SettingsPanel,
  Lt as generateComponentHtml,
  he as generateStyleString,
  on as generateTemplateHtml,
  rs as getComponentDefinitionByType,
  mr as getEmptyTemplate,
  $i as parseHtmlToTemplate,
  G as useEditorStore
};
//# sourceMappingURL=public-circles-email-builder.es.js.map
