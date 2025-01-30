function Xb(K) {
  return K && K.__esModule && Object.prototype.hasOwnProperty.call(K, "default") ? K.default : K;
}
var Bm = { exports: {} }, qp = {}, $m = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G0;
function Kb() {
  if (G0) return St;
  G0 = 1;
  var K = Symbol.for("react.element"), le = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), ut = Symbol.for("react.strict_mode"), _t = Symbol.for("react.profiler"), xt = Symbol.for("react.provider"), bt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), be = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Be = Symbol.iterator;
  function Z(b) {
    return b === null || typeof b != "object" ? null : (b = Be && b[Be] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ue = Object.assign, we = {};
  function ot(b, $, De) {
    this.props = b, this.context = $, this.refs = we, this.updater = De || Fe;
  }
  ot.prototype.isReactComponent = {}, ot.prototype.setState = function(b, $) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, $, "setState");
  }, ot.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Hn() {
  }
  Hn.prototype = ot.prototype;
  function rn(b, $, De) {
    this.props = b, this.context = $, this.refs = we, this.updater = De || Fe;
  }
  var rt = rn.prototype = new Hn();
  rt.constructor = rn, ue(rt, ot.prototype), rt.isPureReactComponent = !0;
  var Ne = Array.isArray, kt = Object.prototype.hasOwnProperty, Ce = { current: null }, st = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(b, $, De) {
    var Ve, $e = {}, nt = null, Et = null;
    if ($ != null) for (Ve in $.ref !== void 0 && (Et = $.ref), $.key !== void 0 && (nt = "" + $.key), $) kt.call($, Ve) && !st.hasOwnProperty(Ve) && ($e[Ve] = $[Ve]);
    var Qe = arguments.length - 2;
    if (Qe === 1) $e.children = De;
    else if (1 < Qe) {
      for (var yt = Array(Qe), Vt = 0; Vt < Qe; Vt++) yt[Vt] = arguments[Vt + 2];
      $e.children = yt;
    }
    if (b && b.defaultProps) for (Ve in Qe = b.defaultProps, Qe) $e[Ve] === void 0 && ($e[Ve] = Qe[Ve]);
    return { $$typeof: K, type: b, key: nt, ref: Et, props: $e, _owner: Ce.current };
  }
  function Sn(b, $) {
    return { $$typeof: K, type: b.type, key: $, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Mt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === K;
  }
  function fn(b) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(De) {
      return $[De];
    });
  }
  var $t = /\/+/g;
  function mt(b, $) {
    return typeof b == "object" && b !== null && b.key != null ? fn("" + b.key) : $.toString(36);
  }
  function Me(b, $, De, Ve, $e) {
    var nt = typeof b;
    (nt === "undefined" || nt === "boolean") && (b = null);
    var Et = !1;
    if (b === null) Et = !0;
    else switch (nt) {
      case "string":
      case "number":
        Et = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case K:
          case le:
            Et = !0;
        }
    }
    if (Et) return Et = b, $e = $e(Et), b = Ve === "" ? "." + mt(Et, 0) : Ve, Ne($e) ? (De = "", b != null && (De = b.replace($t, "$&/") + "/"), Me($e, $, De, "", function(Vt) {
      return Vt;
    })) : $e != null && (Mt($e) && ($e = Sn($e, De + (!$e.key || Et && Et.key === $e.key ? "" : ("" + $e.key).replace($t, "$&/") + "/") + b)), $.push($e)), 1;
    if (Et = 0, Ve = Ve === "" ? "." : Ve + ":", Ne(b)) for (var Qe = 0; Qe < b.length; Qe++) {
      nt = b[Qe];
      var yt = Ve + mt(nt, Qe);
      Et += Me(nt, $, De, yt, $e);
    }
    else if (yt = Z(b), typeof yt == "function") for (b = yt.call(b), Qe = 0; !(nt = b.next()).done; ) nt = nt.value, yt = Ve + mt(nt, Qe++), Et += Me(nt, $, De, yt, $e);
    else if (nt === "object") throw $ = String(b), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function At(b, $, De) {
    if (b == null) return b;
    var Ve = [], $e = 0;
    return Me(b, Ve, "", "", function(nt) {
      return $.call(De, nt, $e++);
    }), Ve;
  }
  function vt(b) {
    if (b._status === -1) {
      var $ = b._result;
      $ = $(), $.then(function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = De);
      }, function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = De);
      }), b._status === -1 && (b._status = 0, b._result = $);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var tt = { current: null }, B = { transition: null }, me = { ReactCurrentDispatcher: tt, ReactCurrentBatchConfig: B, ReactCurrentOwner: Ce };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: At, forEach: function(b, $, De) {
    At(b, function() {
      $.apply(this, arguments);
    }, De);
  }, count: function(b) {
    var $ = 0;
    return At(b, function() {
      $++;
    }), $;
  }, toArray: function(b) {
    return At(b, function($) {
      return $;
    }) || [];
  }, only: function(b) {
    if (!Mt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, St.Component = ot, St.Fragment = A, St.Profiler = _t, St.PureComponent = rn, St.StrictMode = ut, St.Suspense = pt, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, St.act = re, St.cloneElement = function(b, $, De) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ve = ue({}, b.props), $e = b.key, nt = b.ref, Et = b._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (nt = $.ref, Et = Ce.current), $.key !== void 0 && ($e = "" + $.key), b.type && b.type.defaultProps) var Qe = b.type.defaultProps;
      for (yt in $) kt.call($, yt) && !st.hasOwnProperty(yt) && (Ve[yt] = $[yt] === void 0 && Qe !== void 0 ? Qe[yt] : $[yt]);
    }
    var yt = arguments.length - 2;
    if (yt === 1) Ve.children = De;
    else if (1 < yt) {
      Qe = Array(yt);
      for (var Vt = 0; Vt < yt; Vt++) Qe[Vt] = arguments[Vt + 2];
      Ve.children = Qe;
    }
    return { $$typeof: K, type: b.type, key: $e, ref: nt, props: Ve, _owner: Et };
  }, St.createContext = function(b) {
    return b = { $$typeof: bt, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: xt, _context: b }, b.Consumer = b;
  }, St.createElement = He, St.createFactory = function(b) {
    var $ = He.bind(null, b);
    return $.type = b, $;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, St.isValidElement = Mt, St.lazy = function(b) {
    return { $$typeof: pe, _payload: { _status: -1, _result: b }, _init: vt };
  }, St.memo = function(b, $) {
    return { $$typeof: be, type: b, compare: $ === void 0 ? null : $ };
  }, St.startTransition = function(b) {
    var $ = B.transition;
    B.transition = {};
    try {
      b();
    } finally {
      B.transition = $;
    }
  }, St.unstable_act = re, St.useCallback = function(b, $) {
    return tt.current.useCallback(b, $);
  }, St.useContext = function(b) {
    return tt.current.useContext(b);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(b) {
    return tt.current.useDeferredValue(b);
  }, St.useEffect = function(b, $) {
    return tt.current.useEffect(b, $);
  }, St.useId = function() {
    return tt.current.useId();
  }, St.useImperativeHandle = function(b, $, De) {
    return tt.current.useImperativeHandle(b, $, De);
  }, St.useInsertionEffect = function(b, $) {
    return tt.current.useInsertionEffect(b, $);
  }, St.useLayoutEffect = function(b, $) {
    return tt.current.useLayoutEffect(b, $);
  }, St.useMemo = function(b, $) {
    return tt.current.useMemo(b, $);
  }, St.useReducer = function(b, $, De) {
    return tt.current.useReducer(b, $, De);
  }, St.useRef = function(b) {
    return tt.current.useRef(b);
  }, St.useState = function(b) {
    return tt.current.useState(b);
  }, St.useSyncExternalStore = function(b, $, De) {
    return tt.current.useSyncExternalStore(b, $, De);
  }, St.useTransition = function() {
    return tt.current.useTransition();
  }, St.version = "18.3.1", St;
}
var Kp = { exports: {} };
Kp.exports;
var q0;
function Jb() {
  return q0 || (q0 = 1, function(K, le) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ut = "18.3.1", _t = Symbol.for("react.element"), xt = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), pt = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), ot = Symbol.for("react.offscreen"), Hn = Symbol.iterator, rn = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Hn && h[Hn] || h[rn];
        return typeof C == "function" ? C : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, st = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, Sn = null;
      function Mt(h) {
        Sn = h;
      }
      He.setExtraStackFrame = function(h) {
        Sn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        Sn && (h += Sn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var fn = !1, $t = !1, mt = !1, Me = !1, At = !1, vt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: st
      };
      vt.ReactDebugCurrentFrame = He, vt.ReactCurrentActQueue = Ce;
      function tt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          me("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          me("error", h, M);
        }
      }
      function me(h, C, M) {
        {
          var F = vt.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", M = M.concat([X]));
          var he = M.map(function(se) {
            return String(se);
          });
          he.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, he);
        }
      }
      var re = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", X = F + "." + C;
          if (re[X])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), re[X] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          b(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, F) {
          b(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, F) {
          b(h, "setState");
        }
      }, De = Object.assign, Ve = {};
      Object.freeze(Ve);
      function $e(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || $;
      }
      $e.prototype.isReactComponent = {}, $e.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, $e.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var nt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Et = function(h, C) {
          Object.defineProperty($e.prototype, h, {
            get: function() {
              tt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Qe in nt)
          nt.hasOwnProperty(Qe) && Et(Qe, nt[Qe]);
      }
      function yt() {
      }
      yt.prototype = $e.prototype;
      function Vt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || $;
      }
      var bn = Vt.prototype = new yt();
      bn.constructor = Vt, De(bn, $e.prototype), bn.isPureReactComponent = !0;
      function Qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var rr = Array.isArray;
      function Dn(h) {
        return rr(h);
      }
      function Sr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Vn(h) {
        try {
          return kn(h), !1;
        } catch {
          return !0;
        }
      }
      function kn(h) {
        return "" + h;
      }
      function oa(h) {
        if (Vn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(h)), kn(h);
      }
      function Qa(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? M + "(" + X + ")" : M;
      }
      function br(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case bt:
            return "Fragment";
          case xt:
            return "Portal";
          case pt:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case Fe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return br(C) + ".Consumer";
            case be:
              var M = h;
              return br(M._context) + ".Provider";
            case Be:
              return Qa(h, h.render, "ForwardRef");
            case ue:
              var F = h.displayName || null;
              return F !== null ? F : Pn(h.type) || "Memo";
            case we: {
              var X = h, he = X._payload, se = X._init;
              try {
                return Pn(se(he));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Wn = Object.prototype.hasOwnProperty, Gn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, Wa, On;
      On = {};
      function ar(h) {
        if (Wn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function $r(h) {
        if (Wn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ki(h, C) {
        var M = function() {
          Er || (Er = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function sa(h, C) {
        var M = function() {
          Wa || (Wa = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function J(h) {
        if (typeof h.ref == "string" && st.current && h.__self && st.current.stateNode !== h.__self) {
          var C = Pn(st.current.type);
          On[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), On[C] = !0);
        }
      }
      var Oe = function(h, C, M, F, X, he, se) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _t,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: se,
          // Record the component responsible for creating this element.
          _owner: he
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function Je(h, C, M) {
        var F, X = {}, he = null, se = null, Ue = null, et = null;
        if (C != null) {
          ar(C) && (se = C.ref, J(C)), $r(C) && (oa(C.key), he = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, et = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          X.children = M;
        else if (Ft > 1) {
          for (var Qt = Array(Ft), Wt = 0; Wt < Ft; Wt++)
            Qt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Qt), X.children = Qt;
        }
        if (h && h.defaultProps) {
          var Xe = h.defaultProps;
          for (F in Xe)
            X[F] === void 0 && (X[F] = Xe[F]);
        }
        if (he || se) {
          var Jt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          he && ki(X, Jt), se && sa(X, Jt);
        }
        return Oe(h, he, se, Ue, et, st.current, X);
      }
      function Nt(h, C) {
        var M = Oe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function an(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = De({}, h.props), he = h.key, se = h.ref, Ue = h._self, et = h._source, Ft = h._owner;
        if (C != null) {
          ar(C) && (se = C.ref, Ft = st.current), $r(C) && (oa(C.key), he = "" + C.key);
          var Qt;
          h.type && h.type.defaultProps && (Qt = h.type.defaultProps);
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (C[F] === void 0 && Qt !== void 0 ? X[F] = Qt[F] : X[F] = C[F]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          X.children = M;
        else if (Wt > 1) {
          for (var Xe = Array(Wt), Jt = 0; Jt < Wt; Jt++)
            Xe[Jt] = arguments[Jt + 2];
          X.children = Xe;
        }
        return Oe(h.type, he, se, Ue, et, Ft, X);
      }
      function ln(h) {
        return typeof h == "object" && h !== null && h.$$typeof === _t;
      }
      var un = ".", qn = ":";
      function tn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return M[X];
        });
        return "$" + F;
      }
      var Yt = !1, zt = /\/+/g;
      function ca(h) {
        return h.replace(zt, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (oa(h.key), tn("" + h.key)) : C.toString(36);
      }
      function xa(h, C, M, F, X) {
        var he = typeof h;
        (he === "undefined" || he === "boolean") && (h = null);
        var se = !1;
        if (h === null)
          se = !0;
        else
          switch (he) {
            case "string":
            case "number":
              se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case _t:
                case xt:
                  se = !0;
              }
          }
        if (se) {
          var Ue = h, et = X(Ue), Ft = F === "" ? un + _a(Ue, 0) : F;
          if (Dn(et)) {
            var Qt = "";
            Ft != null && (Qt = ca(Ft) + "/"), xa(et, C, Qt, "", function(Xf) {
              return Xf;
            });
          } else et != null && (ln(et) && (et.key && (!Ue || Ue.key !== et.key) && oa(et.key), et = Nt(
            et,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (et.key && (!Ue || Ue.key !== et.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + et.key) + "/"
            ) : "") + Ft
          )), C.push(et));
          return 1;
        }
        var Wt, Xe, Jt = 0, Cn = F === "" ? un : F + qn;
        if (Dn(h))
          for (var Kl = 0; Kl < h.length; Kl++)
            Wt = h[Kl], Xe = Cn + _a(Wt, Kl), Jt += xa(Wt, C, M, Xe, X);
        else {
          var Wo = rt(h);
          if (typeof Wo == "function") {
            var Hi = h;
            Wo === Hi.entries && (Yt || tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Jl = Wo.call(Hi), Go, qf = 0; !(Go = Jl.next()).done; )
              Wt = Go.value, Xe = Cn + _a(Wt, qf++), Jt += xa(Wt, C, M, Xe, X);
          } else if (he === "object") {
            var lc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (lc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : lc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Oi(h, C, M) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return xa(h, F, "", "", function(he) {
          return C.call(M, he, X++);
        }), F;
      }
      function $l(h) {
        var C = 0;
        return Oi(h, function() {
          C++;
        }), C;
      }
      function Yl(h, C, M) {
        Oi(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Li(h) {
        return Oi(h, function(C) {
          return C;
        }) || [];
      }
      function Il(h) {
        if (!ln(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ui(h) {
        var C = {
          $$typeof: pe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: be,
          _context: C
        };
        var M = !1, F = !1, X = !1;
        {
          var he = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(he, {
            Provider: {
              get: function() {
                return F || (F = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(se) {
                C.Provider = se;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(se) {
                C._currentValue = se;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(se) {
                C._currentValue2 = se;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(se) {
                C._threadCount = se;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(se) {
                X || (tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", se), X = !0);
              }
            }
          }), C.Consumer = he;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, ir = 0, da = 1, Yr = 2;
      function oi(h) {
        if (h._status === fa) {
          var C = h._result, M = C();
          if (M.then(function(he) {
            if (h._status === ir || h._status === fa) {
              var se = h;
              se._status = da, se._result = he;
            }
          }, function(he) {
            if (h._status === ir || h._status === fa) {
              var se = h;
              se._status = Yr, se._result = he;
            }
          }), h._status === fa) {
            var F = h;
            F._status = ir, F._result = M;
          }
        }
        if (h._status === da) {
          var X = h._result;
          return X === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function si(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, M = {
          $$typeof: we,
          _payload: C,
          _init: oi
        };
        {
          var F, X;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(he) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = he, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(he) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = he, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Mi(h) {
        h != null && h.$$typeof === ue ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Be,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === bt || h === pt || At || h === S || h === Z || h === Fe || Me || h === ot || fn || $t || mt || typeof h == "object" && h !== null && (h.$$typeof === we || h.$$typeof === ue || h.$$typeof === be || h.$$typeof === pe || h.$$typeof === Be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        Y(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return M;
      }
      function ie() {
        var h = Ne.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function at(h) {
        var C = ie();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = ie();
        return C.useState(h);
      }
      function ct(h, C, M) {
        var F = ie();
        return F.useReducer(h, C, M);
      }
      function Ze(h) {
        var C = ie();
        return C.useRef(h);
      }
      function En(h, C) {
        var M = ie();
        return M.useEffect(h, C);
      }
      function nn(h, C) {
        var M = ie();
        return M.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var M = ie();
        return M.useLayoutEffect(h, C);
      }
      function Cr(h, C) {
        var M = ie();
        return M.useCallback(h, C);
      }
      function Ga(h, C) {
        var M = ie();
        return M.useMemo(h, C);
      }
      function Ut(h, C, M) {
        var F = ie();
        return F.useImperativeHandle(h, C, M);
      }
      function dn(h, C) {
        {
          var M = ie();
          return M.useDebugValue(h, C);
        }
      }
      function Ge() {
        var h = ie();
        return h.useTransition();
      }
      function ci(h) {
        var C = ie();
        return C.useDeferredValue(h);
      }
      function Ni() {
        var h = ie();
        return h.useId();
      }
      function nc(h, C, M) {
        var F = ie();
        return F.useSyncExternalStore(h, C, M);
      }
      var zi = 0, ll, Ir, Po, Dr, Bo, rc, ac;
      function Ui() {
      }
      Ui.__reactDisabledLog = !0;
      function ul() {
        {
          if (zi === 0) {
            ll = console.log, Ir = console.info, Po = console.warn, Dr = console.error, Bo = console.group, rc = console.groupCollapsed, ac = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ui,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          zi++;
        }
      }
      function Qr() {
        {
          if (zi--, zi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: De({}, h, {
                value: ll
              }),
              info: De({}, h, {
                value: Ir
              }),
              warn: De({}, h, {
                value: Po
              }),
              error: De({}, h, {
                value: Dr
              }),
              group: De({}, h, {
                value: Bo
              }),
              groupCollapsed: De({}, h, {
                value: rc
              }),
              groupEnd: De({}, h, {
                value: ac
              })
            });
          }
          zi < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = vt.ReactCurrentDispatcher, ol;
      function Au(h, C, M) {
        {
          if (ol === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              ol = F && F[1] || "";
            }
          return `
` + ol + h;
        }
      }
      var Ai = !1, Ql;
      {
        var Wl = typeof WeakMap == "function" ? WeakMap : Map;
        Ql = new Wl();
      }
      function sl(h, C) {
        if (!h || Ai)
          return "";
        {
          var M = Ql.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        Ai = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var he;
        he = fi.current, fi.current = null, ul();
        try {
          if (C) {
            var se = function() {
              throw Error();
            };
            if (Object.defineProperty(se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(se, []);
              } catch (Cn) {
                F = Cn;
              }
              Reflect.construct(h, [], se);
            } else {
              try {
                se.call();
              } catch (Cn) {
                F = Cn;
              }
              h.call(se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Cn) {
              F = Cn;
            }
            h();
          }
        } catch (Cn) {
          if (Cn && F && typeof Cn.stack == "string") {
            for (var Ue = Cn.stack.split(`
`), et = F.stack.split(`
`), Ft = Ue.length - 1, Qt = et.length - 1; Ft >= 1 && Qt >= 0 && Ue[Ft] !== et[Qt]; )
              Qt--;
            for (; Ft >= 1 && Qt >= 0; Ft--, Qt--)
              if (Ue[Ft] !== et[Qt]) {
                if (Ft !== 1 || Qt !== 1)
                  do
                    if (Ft--, Qt--, Qt < 0 || Ue[Ft] !== et[Qt]) {
                      var Wt = `
` + Ue[Ft].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && Ql.set(h, Wt), Wt;
                    }
                  while (Ft >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          Ai = !1, fi.current = he, Qr(), Error.prepareStackTrace = X;
        }
        var Xe = h ? h.displayName || h.name : "", Jt = Xe ? Au(Xe) : "";
        return typeof h == "function" && Ql.set(h, Jt), Jt;
      }
      function $o(h, C, M) {
        return sl(h, !1);
      }
      function Yo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Ct(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return sl(h, Yo(h));
        if (typeof h == "string")
          return Au(h);
        switch (h) {
          case Z:
            return Au("Suspense");
          case Fe:
            return Au("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Be:
              return $o(h.render);
            case ue:
              return Ct(h.type, C, M);
            case we: {
              var F = h, X = F._payload, he = F._init;
              try {
                return Ct(he(X), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Io = {}, Fu = vt.ReactDebugCurrentFrame;
      function Rt(h) {
        if (h) {
          var C = h._owner, M = Ct(h.type, h._source, C ? C.type : null);
          Fu.setExtraStackFrame(M);
        } else
          Fu.setExtraStackFrame(null);
      }
      function ic(h, C, M, F, X) {
        {
          var he = Function.call.bind(Wn);
          for (var se in h)
            if (he(h, se)) {
              var Ue = void 0;
              try {
                if (typeof h[se] != "function") {
                  var et = Error((F || "React class") + ": " + M + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw et.name = "Invariant Violation", et;
                }
                Ue = h[se](C, se, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Ue = Ft;
              }
              Ue && !(Ue instanceof Error) && (Rt(X), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, se, typeof Ue), Rt(null)), Ue instanceof Error && !(Ue.message in Io) && (Io[Ue.message] = !0, Rt(X), B("Failed %s type: %s", M, Ue.message), Rt(null));
            }
        }
      }
      function di(h) {
        if (h) {
          var C = h._owner, M = Ct(h.type, h._source, C ? C.type : null);
          Mt(M);
        } else
          Mt(null);
      }
      var Pe;
      Pe = !1;
      function Gl() {
        if (st.current) {
          var h = Pn(st.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Xn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Wr(h) {
        return h != null ? Xn(h.__source) : "";
      }
      var kr = {};
      function pi(h) {
        var C = Gl();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function mn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = pi(C);
          if (!kr[M]) {
            kr[M] = !0;
            var F = "";
            h && h._owner && h._owner !== st.current && (F = " It was passed a child from " + Pn(h._owner.type) + "."), di(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), di(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Dn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              ln(F) && mn(F, C);
            }
          else if (ln(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = rt(h);
            if (typeof X == "function" && X !== h.entries)
              for (var he = X.call(h), se; !(se = he.next()).done; )
                ln(se.value) && mn(se.value, C);
          }
        }
      }
      function qa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Pn(C);
            ic(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Pe) {
            Pe = !0;
            var X = Pn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ba(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              di(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), di(null);
              break;
            }
          }
          h.ref !== null && (di(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), di(null));
        }
      }
      function Rr(h, C, M) {
        var F = Y(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Wr(C);
          he ? X += he : X += Gl();
          var se;
          h === null ? se = "null" : Dn(h) ? se = "array" : h !== void 0 && h.$$typeof === _t ? (se = "<" + (Pn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : se = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, X);
        }
        var Ue = Je.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (F)
          for (var et = 2; et < arguments.length; et++)
            It(arguments[et], h);
        return h === bt ? ba(Ue) : qa(Ue), Ue;
      }
      var Or = !1;
      function Gf(h) {
        var C = Rr.bind(null, h);
        return C.type = h, Or || (Or = !0, tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function ju(h, C, M) {
        for (var F = an.apply(this, arguments), X = 2; X < arguments.length; X++)
          It(arguments[X], F.type);
        return qa(F), F;
      }
      function ql(h, C) {
        var M = kt.transition;
        kt.transition = {};
        var F = kt.transition;
        kt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (kt.transition = M, M === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Hu = !1, Vu = null;
      function Xl(h) {
        if (Vu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = K && K[C];
            Vu = M.call(K, "timers").setImmediate;
          } catch {
            Vu = function(X) {
              Hu === !1 && (Hu = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var he = new MessageChannel();
              he.port1.onmessage = X, he.port2.postMessage(void 0);
            };
          }
        return Vu(h);
      }
      var Da = 0, ka = !1;
      function cl(h) {
        {
          var C = Da;
          Da++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var X = Ce.current;
              X !== null && (Ce.didScheduleLegacyUpdate = !1, ji(X));
            }
          } catch (Xe) {
            throw Fi(C), Xe;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var he = F, se = !1, Ue = {
              then: function(Xe, Jt) {
                se = !0, he.then(function(Cn) {
                  Fi(C), Da === 0 ? Pu(Cn, Xe, Jt) : Xe(Cn);
                }, function(Cn) {
                  Fi(C), Jt(Cn);
                });
              }
            };
            return !ka && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              se || (ka = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var et = F;
            if (Fi(C), Da === 0) {
              var Ft = Ce.current;
              Ft !== null && (ji(Ft), Ce.current = null);
              var Qt = {
                then: function(Xe, Jt) {
                  Ce.current === null ? (Ce.current = [], Pu(et, Xe, Jt)) : Xe(et);
                }
              };
              return Qt;
            } else {
              var Wt = {
                then: function(Xe, Jt) {
                  Xe(et);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Fi(h) {
        h !== Da - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = h;
      }
      function Pu(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              ji(F), Xl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : Pu(h, C, M);
              });
            } catch (X) {
              M(X);
            }
          else
            C(h);
        }
      }
      var fl = !1;
      function ji(h) {
        if (!fl) {
          fl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            fl = !1;
          }
        }
      }
      var Bu = Rr, Qo = ju, Oa = Gf, $u = {
        map: Oi,
        forEach: Yl,
        count: $l,
        toArray: Li,
        only: Il
      };
      le.Children = $u, le.Component = $e, le.Fragment = bt, le.Profiler = pt, le.PureComponent = Vt, le.StrictMode = S, le.Suspense = Z, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt, le.act = cl, le.cloneElement = Qo, le.createContext = ui, le.createElement = Bu, le.createFactory = Oa, le.createRef = Qn, le.forwardRef = Mi, le.isValidElement = ln, le.lazy = si, le.memo = ne, le.startTransition = ql, le.unstable_act = cl, le.useCallback = Cr, le.useContext = at, le.useDebugValue = dn, le.useDeferredValue = ci, le.useEffect = En, le.useId = Ni, le.useImperativeHandle = Ut, le.useInsertionEffect = nn, le.useLayoutEffect = on, le.useMemo = Ga, le.useReducer = ct, le.useRef = Ze, le.useState = Ye, le.useSyncExternalStore = nc, le.useTransition = Ge, le.version = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kp, Kp.exports)), Kp.exports;
}
var X0;
function Qm() {
  if (X0) return $m.exports;
  X0 = 1;
  var K = {};
  return K.NODE_ENV === "production" ? $m.exports = Kb() : $m.exports = Jb(), $m.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K0;
function Zb() {
  if (K0) return qp;
  K0 = 1;
  var K = Qm(), le = Symbol.for("react.element"), A = Symbol.for("react.fragment"), ut = Object.prototype.hasOwnProperty, _t = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function bt(S, pt, be) {
    var pe, Be = {}, Z = null, Fe = null;
    be !== void 0 && (Z = "" + be), pt.key !== void 0 && (Z = "" + pt.key), pt.ref !== void 0 && (Fe = pt.ref);
    for (pe in pt) ut.call(pt, pe) && !xt.hasOwnProperty(pe) && (Be[pe] = pt[pe]);
    if (S && S.defaultProps) for (pe in pt = S.defaultProps, pt) Be[pe] === void 0 && (Be[pe] = pt[pe]);
    return { $$typeof: le, type: S, key: Z, ref: Fe, props: Be, _owner: _t.current };
  }
  return qp.Fragment = A, qp.jsx = bt, qp.jsxs = bt, qp;
}
var Xp = {}, J0;
function eD() {
  if (J0) return Xp;
  J0 = 1;
  var K = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return K.NODE_ENV !== "production" && function() {
    var le = Qm(), A = Symbol.for("react.element"), ut = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), xt = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), pt = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), we = Symbol.iterator, ot = "@@iterator";
    function Hn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = we && R[we] || R[ot];
      return typeof Y == "function" ? Y : null;
    }
    var rn = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), ie = 1; ie < Y; ie++)
          ne[ie - 1] = arguments[ie];
        Ne("error", R, ne);
      }
    }
    function Ne(R, Y, ne) {
      {
        var ie = rn.ReactDebugCurrentFrame, at = ie.getStackAddendum();
        at !== "" && (Y += "%s", ne = ne.concat([at]));
        var Ye = ne.map(function(ct) {
          return String(ct);
        });
        Ye.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var kt = !1, Ce = !1, st = !1, He = !1, Sn = !1, Mt;
    Mt = Symbol.for("react.module.reference");
    function fn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === _t || R === bt || Sn || R === xt || R === pe || R === Be || He || R === ue || kt || Ce || st || typeof R == "object" && R !== null && (R.$$typeof === Fe || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === pt || R.$$typeof === be || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Mt || R.getModuleId !== void 0));
    }
    function $t(R, Y, ne) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var at = Y.displayName || Y.name || "";
      return at !== "" ? ne + "(" + at + ")" : ne;
    }
    function mt(R) {
      return R.displayName || "Context";
    }
    function Me(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case _t:
          return "Fragment";
        case ut:
          return "Portal";
        case bt:
          return "Profiler";
        case xt:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case pt:
            var Y = R;
            return mt(Y) + ".Consumer";
          case S:
            var ne = R;
            return mt(ne._context) + ".Provider";
          case be:
            return $t(R, R.render, "ForwardRef");
          case Z:
            var ie = R.displayName || null;
            return ie !== null ? ie : Me(R.type) || "Memo";
          case Fe: {
            var at = R, Ye = at._payload, ct = at._init;
            try {
              return Me(ct(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, vt = 0, tt, B, me, re, b, $, De;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function $e() {
      {
        if (vt === 0) {
          tt = console.log, B = console.info, me = console.warn, re = console.error, b = console.group, $ = console.groupCollapsed, De = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        vt++;
      }
    }
    function nt() {
      {
        if (vt--, vt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: tt
            }),
            info: At({}, R, {
              value: B
            }),
            warn: At({}, R, {
              value: me
            }),
            error: At({}, R, {
              value: re
            }),
            group: At({}, R, {
              value: b
            }),
            groupCollapsed: At({}, R, {
              value: $
            }),
            groupEnd: At({}, R, {
              value: De
            })
          });
        }
        vt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Et = rn.ReactCurrentDispatcher, Qe;
    function yt(R, Y, ne) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (at) {
            var ie = at.stack.trim().match(/\n( *(at )?)/);
            Qe = ie && ie[1] || "";
          }
        return `
` + Qe + R;
      }
    }
    var Vt = !1, bn;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      bn = new Qn();
    }
    function rr(R, Y) {
      if (!R || Vt)
        return "";
      {
        var ne = bn.get(R);
        if (ne !== void 0)
          return ne;
      }
      var ie;
      Vt = !0;
      var at = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = Et.current, Et.current = null, $e();
      try {
        if (Y) {
          var ct = function() {
            throw Error();
          };
          if (Object.defineProperty(ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ct, []);
            } catch (dn) {
              ie = dn;
            }
            Reflect.construct(R, [], ct);
          } else {
            try {
              ct.call();
            } catch (dn) {
              ie = dn;
            }
            R.call(ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            ie = dn;
          }
          R();
        }
      } catch (dn) {
        if (dn && ie && typeof dn.stack == "string") {
          for (var Ze = dn.stack.split(`
`), En = ie.stack.split(`
`), nn = Ze.length - 1, on = En.length - 1; nn >= 1 && on >= 0 && Ze[nn] !== En[on]; )
            on--;
          for (; nn >= 1 && on >= 0; nn--, on--)
            if (Ze[nn] !== En[on]) {
              if (nn !== 1 || on !== 1)
                do
                  if (nn--, on--, on < 0 || Ze[nn] !== En[on]) {
                    var Cr = `
` + Ze[nn].replace(" at new ", " at ");
                    return R.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", R.displayName)), typeof R == "function" && bn.set(R, Cr), Cr;
                  }
                while (nn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, Et.current = Ye, nt(), Error.prepareStackTrace = at;
      }
      var Ga = R ? R.displayName || R.name : "", Ut = Ga ? yt(Ga) : "";
      return typeof R == "function" && bn.set(R, Ut), Ut;
    }
    function Dn(R, Y, ne) {
      return rr(R, !1);
    }
    function Sr(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Vn(R, Y, ne) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return rr(R, Sr(R));
      if (typeof R == "string")
        return yt(R);
      switch (R) {
        case pe:
          return yt("Suspense");
        case Be:
          return yt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case be:
            return Dn(R.render);
          case Z:
            return Vn(R.type, Y, ne);
          case Fe: {
            var ie = R, at = ie._payload, Ye = ie._init;
            try {
              return Vn(Ye(at), Y, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, oa = {}, Qa = rn.ReactDebugCurrentFrame;
    function br(R) {
      if (R) {
        var Y = R._owner, ne = Vn(R.type, R._source, Y ? Y.type : null);
        Qa.setExtraStackFrame(ne);
      } else
        Qa.setExtraStackFrame(null);
    }
    function Pn(R, Y, ne, ie, at) {
      {
        var Ye = Function.call.bind(kn);
        for (var ct in R)
          if (Ye(R, ct)) {
            var Ze = void 0;
            try {
              if (typeof R[ct] != "function") {
                var En = Error((ie || "React class") + ": " + ne + " type `" + ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw En.name = "Invariant Violation", En;
              }
              Ze = R[ct](Y, ct, ie, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              Ze = nn;
            }
            Ze && !(Ze instanceof Error) && (br(at), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", ne, ct, typeof Ze), br(null)), Ze instanceof Error && !(Ze.message in oa) && (oa[Ze.message] = !0, br(at), rt("Failed %s type: %s", ne, Ze.message), br(null));
          }
      }
    }
    var Wn = Array.isArray;
    function Gn(R) {
      return Wn(R);
    }
    function Er(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ne = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ne;
      }
    }
    function Wa(R) {
      try {
        return On(R), !1;
      } catch {
        return !0;
      }
    }
    function On(R) {
      return "" + R;
    }
    function ar(R) {
      if (Wa(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(R)), On(R);
    }
    var $r = rn.ReactCurrentOwner, ki = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sa, J;
    function Oe(R) {
      if (kn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Je(R) {
      if (kn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Nt(R, Y) {
      typeof R.ref == "string" && $r.current;
    }
    function an(R, Y) {
      {
        var ne = function() {
          sa || (sa = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function ln(R, Y) {
      {
        var ne = function() {
          J || (J = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var un = function(R, Y, ne, ie, at, Ye, ct) {
      var Ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ne,
        props: ct,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(Ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: at
      }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
    };
    function qn(R, Y, ne, ie, at) {
      {
        var Ye, ct = {}, Ze = null, En = null;
        ne !== void 0 && (ar(ne), Ze = "" + ne), Je(Y) && (ar(Y.key), Ze = "" + Y.key), Oe(Y) && (En = Y.ref, Nt(Y, at));
        for (Ye in Y)
          kn.call(Y, Ye) && !ki.hasOwnProperty(Ye) && (ct[Ye] = Y[Ye]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ye in nn)
            ct[Ye] === void 0 && (ct[Ye] = nn[Ye]);
        }
        if (Ze || En) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ze && an(ct, on), En && ln(ct, on);
        }
        return un(R, Ze, En, at, ie, $r.current, ct);
      }
    }
    var tn = rn.ReactCurrentOwner, Yt = rn.ReactDebugCurrentFrame;
    function zt(R) {
      if (R) {
        var Y = R._owner, ne = Vn(R.type, R._source, Y ? Y.type : null);
        Yt.setExtraStackFrame(ne);
      } else
        Yt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function xa() {
      {
        if (tn.current) {
          var R = Me(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Oi(R) {
      return "";
    }
    var $l = {};
    function Yl(R) {
      {
        var Y = xa();
        if (!Y) {
          var ne = typeof R == "string" ? R : R.displayName || R.name;
          ne && (Y = `

Check the top-level render call using <` + ne + ">.");
        }
        return Y;
      }
    }
    function Li(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ne = Yl(Y);
        if ($l[ne])
          return;
        $l[ne] = !0;
        var ie = "";
        R && R._owner && R._owner !== tn.current && (ie = " It was passed a child from " + Me(R._owner.type) + "."), zt(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, ie), zt(null);
      }
    }
    function Il(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Gn(R))
          for (var ne = 0; ne < R.length; ne++) {
            var ie = R[ne];
            _a(ie) && Li(ie, Y);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var at = Hn(R);
          if (typeof at == "function" && at !== R.entries)
            for (var Ye = at.call(R), ct; !(ct = Ye.next()).done; )
              _a(ct.value) && Li(ct.value, Y);
        }
      }
    }
    function ui(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ne;
        if (typeof Y == "function")
          ne = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === be || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === Z))
          ne = Y.propTypes;
        else
          return;
        if (ne) {
          var ie = Me(Y);
          Pn(ne, R.props, "prop", ie, R);
        } else if (Y.PropTypes !== void 0 && !ca) {
          ca = !0;
          var at = Me(Y);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", at || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fa(R) {
      {
        for (var Y = Object.keys(R.props), ne = 0; ne < Y.length; ne++) {
          var ie = Y[ne];
          if (ie !== "children" && ie !== "key") {
            zt(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), zt(null);
            break;
          }
        }
        R.ref !== null && (zt(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var ir = {};
    function da(R, Y, ne, ie, at, Ye) {
      {
        var ct = fn(R);
        if (!ct) {
          var Ze = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var En = Oi();
          En ? Ze += En : Ze += xa();
          var nn;
          R === null ? nn = "null" : Gn(R) ? nn = "array" : R !== void 0 && R.$$typeof === A ? (nn = "<" + (Me(R.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, Ze);
        }
        var on = qn(R, Y, ne, at, Ye);
        if (on == null)
          return on;
        if (ct) {
          var Cr = Y.children;
          if (Cr !== void 0)
            if (ie)
              if (Gn(Cr)) {
                for (var Ga = 0; Ga < Cr.length; Ga++)
                  Il(Cr[Ga], R);
                Object.freeze && Object.freeze(Cr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Il(Cr, R);
        }
        if (kn.call(Y, "key")) {
          var Ut = Me(R), dn = Object.keys(Y).filter(function(Ni) {
            return Ni !== "key";
          }), Ge = dn.length > 0 ? "{key: someKey, " + dn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[Ut + Ge]) {
            var ci = dn.length > 0 ? "{" + dn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, Ut, ci, Ut), ir[Ut + Ge] = !0;
          }
        }
        return R === _t ? fa(on) : ui(on), on;
      }
    }
    function Yr(R, Y, ne) {
      return da(R, Y, ne, !0);
    }
    function oi(R, Y, ne) {
      return da(R, Y, ne, !1);
    }
    var si = oi, Mi = Yr;
    Xp.Fragment = _t, Xp.jsx = si, Xp.jsxs = Mi;
  }(), Xp;
}
var Z0;
function tD() {
  if (Z0) return Bm.exports;
  Z0 = 1;
  var K = {};
  return K.NODE_ENV === "production" ? Bm.exports = Zb() : Bm.exports = eD(), Bm.exports;
}
var Jp = tD(), Wf = {}, Ym = { exports: {} }, Ya = {}, Im = { exports: {} }, fE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function nD() {
  return eT || (eT = 1, function(K) {
    function le(B, me) {
      var re = B.length;
      B.push(me);
      e: for (; 0 < re; ) {
        var b = re - 1 >>> 1, $ = B[b];
        if (0 < _t($, me)) B[b] = me, B[re] = $, re = b;
        else break e;
      }
    }
    function A(B) {
      return B.length === 0 ? null : B[0];
    }
    function ut(B) {
      if (B.length === 0) return null;
      var me = B[0], re = B.pop();
      if (re !== me) {
        B[0] = re;
        e: for (var b = 0, $ = B.length, De = $ >>> 1; b < De; ) {
          var Ve = 2 * (b + 1) - 1, $e = B[Ve], nt = Ve + 1, Et = B[nt];
          if (0 > _t($e, re)) nt < $ && 0 > _t(Et, $e) ? (B[b] = Et, B[nt] = re, b = nt) : (B[b] = $e, B[Ve] = re, b = Ve);
          else if (nt < $ && 0 > _t(Et, re)) B[b] = Et, B[nt] = re, b = nt;
          else break e;
        }
      }
      return me;
    }
    function _t(B, me) {
      var re = B.sortIndex - me.sortIndex;
      return re !== 0 ? re : B.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var xt = performance;
      K.unstable_now = function() {
        return xt.now();
      };
    } else {
      var bt = Date, S = bt.now();
      K.unstable_now = function() {
        return bt.now() - S;
      };
    }
    var pt = [], be = [], pe = 1, Be = null, Z = 3, Fe = !1, ue = !1, we = !1, ot = typeof setTimeout == "function" ? setTimeout : null, Hn = typeof clearTimeout == "function" ? clearTimeout : null, rn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function rt(B) {
      for (var me = A(be); me !== null; ) {
        if (me.callback === null) ut(be);
        else if (me.startTime <= B) ut(be), me.sortIndex = me.expirationTime, le(pt, me);
        else break;
        me = A(be);
      }
    }
    function Ne(B) {
      if (we = !1, rt(B), !ue) if (A(pt) !== null) ue = !0, vt(kt);
      else {
        var me = A(be);
        me !== null && tt(Ne, me.startTime - B);
      }
    }
    function kt(B, me) {
      ue = !1, we && (we = !1, Hn(He), He = -1), Fe = !0;
      var re = Z;
      try {
        for (rt(me), Be = A(pt); Be !== null && (!(Be.expirationTime > me) || B && !fn()); ) {
          var b = Be.callback;
          if (typeof b == "function") {
            Be.callback = null, Z = Be.priorityLevel;
            var $ = b(Be.expirationTime <= me);
            me = K.unstable_now(), typeof $ == "function" ? Be.callback = $ : Be === A(pt) && ut(pt), rt(me);
          } else ut(pt);
          Be = A(pt);
        }
        if (Be !== null) var De = !0;
        else {
          var Ve = A(be);
          Ve !== null && tt(Ne, Ve.startTime - me), De = !1;
        }
        return De;
      } finally {
        Be = null, Z = re, Fe = !1;
      }
    }
    var Ce = !1, st = null, He = -1, Sn = 5, Mt = -1;
    function fn() {
      return !(K.unstable_now() - Mt < Sn);
    }
    function $t() {
      if (st !== null) {
        var B = K.unstable_now();
        Mt = B;
        var me = !0;
        try {
          me = st(!0, B);
        } finally {
          me ? mt() : (Ce = !1, st = null);
        }
      } else Ce = !1;
    }
    var mt;
    if (typeof rn == "function") mt = function() {
      rn($t);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), At = Me.port2;
      Me.port1.onmessage = $t, mt = function() {
        At.postMessage(null);
      };
    } else mt = function() {
      ot($t, 0);
    };
    function vt(B) {
      st = B, Ce || (Ce = !0, mt());
    }
    function tt(B, me) {
      He = ot(function() {
        B(K.unstable_now());
      }, me);
    }
    K.unstable_IdlePriority = 5, K.unstable_ImmediatePriority = 1, K.unstable_LowPriority = 4, K.unstable_NormalPriority = 3, K.unstable_Profiling = null, K.unstable_UserBlockingPriority = 2, K.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, K.unstable_continueExecution = function() {
      ue || Fe || (ue = !0, vt(kt));
    }, K.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, K.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, K.unstable_getFirstCallbackNode = function() {
      return A(pt);
    }, K.unstable_next = function(B) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = Z;
      }
      var re = Z;
      Z = me;
      try {
        return B();
      } finally {
        Z = re;
      }
    }, K.unstable_pauseExecution = function() {
    }, K.unstable_requestPaint = function() {
    }, K.unstable_runWithPriority = function(B, me) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var re = Z;
      Z = B;
      try {
        return me();
      } finally {
        Z = re;
      }
    }, K.unstable_scheduleCallback = function(B, me, re) {
      var b = K.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? b + re : b) : re = b, B) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = re + $, B = { id: pe++, callback: me, priorityLevel: B, startTime: re, expirationTime: $, sortIndex: -1 }, re > b ? (B.sortIndex = re, le(be, B), A(pt) === null && B === A(be) && (we ? (Hn(He), He = -1) : we = !0, tt(Ne, re - b))) : (B.sortIndex = $, le(pt, B), ue || Fe || (ue = !0, vt(kt))), B;
    }, K.unstable_shouldYield = fn, K.unstable_wrapCallback = function(B) {
      var me = Z;
      return function() {
        var re = Z;
        Z = me;
        try {
          return B.apply(this, arguments);
        } finally {
          Z = re;
        }
      };
    };
  }(fE)), fE;
}
var dE = {}, tT;
function rD() {
  return tT || (tT = 1, function(K) {
    var le = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    le.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, ut = 5;
      function _t(J, Oe) {
        var Je = J.length;
        J.push(Oe), S(J, Oe, Je);
      }
      function xt(J) {
        return J.length === 0 ? null : J[0];
      }
      function bt(J) {
        if (J.length === 0)
          return null;
        var Oe = J[0], Je = J.pop();
        return Je !== Oe && (J[0] = Je, pt(J, Je, 0)), Oe;
      }
      function S(J, Oe, Je) {
        for (var Nt = Je; Nt > 0; ) {
          var an = Nt - 1 >>> 1, ln = J[an];
          if (be(ln, Oe) > 0)
            J[an] = Oe, J[Nt] = ln, Nt = an;
          else
            return;
        }
      }
      function pt(J, Oe, Je) {
        for (var Nt = Je, an = J.length, ln = an >>> 1; Nt < ln; ) {
          var un = (Nt + 1) * 2 - 1, qn = J[un], tn = un + 1, Yt = J[tn];
          if (be(qn, Oe) < 0)
            tn < an && be(Yt, qn) < 0 ? (J[Nt] = Yt, J[tn] = Oe, Nt = tn) : (J[Nt] = qn, J[un] = Oe, Nt = un);
          else if (tn < an && be(Yt, Oe) < 0)
            J[Nt] = Yt, J[tn] = Oe, Nt = tn;
          else
            return;
        }
      }
      function be(J, Oe) {
        var Je = J.sortIndex - Oe.sortIndex;
        return Je !== 0 ? Je : J.id - Oe.id;
      }
      var pe = 1, Be = 2, Z = 3, Fe = 4, ue = 5;
      function we(J, Oe) {
      }
      var ot = typeof performance == "object" && typeof performance.now == "function";
      if (ot) {
        var Hn = performance;
        K.unstable_now = function() {
          return Hn.now();
        };
      } else {
        var rn = Date, rt = rn.now();
        K.unstable_now = function() {
          return rn.now() - rt;
        };
      }
      var Ne = 1073741823, kt = -1, Ce = 250, st = 5e3, He = 1e4, Sn = Ne, Mt = [], fn = [], $t = 1, mt = null, Me = Z, At = !1, vt = !1, tt = !1, B = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(J) {
        for (var Oe = xt(fn); Oe !== null; ) {
          if (Oe.callback === null)
            bt(fn);
          else if (Oe.startTime <= J)
            bt(fn), Oe.sortIndex = Oe.expirationTime, _t(Mt, Oe);
          else
            return;
          Oe = xt(fn);
        }
      }
      function $(J) {
        if (tt = !1, b(J), !vt)
          if (xt(Mt) !== null)
            vt = !0, On(De);
          else {
            var Oe = xt(fn);
            Oe !== null && ar($, Oe.startTime - J);
          }
      }
      function De(J, Oe) {
        vt = !1, tt && (tt = !1, $r()), At = !0;
        var Je = Me;
        try {
          var Nt;
          if (!A) return Ve(J, Oe);
        } finally {
          mt = null, Me = Je, At = !1;
        }
      }
      function Ve(J, Oe) {
        var Je = Oe;
        for (b(Je), mt = xt(Mt); mt !== null && !(mt.expirationTime > Je && (!J || Qa())); ) {
          var Nt = mt.callback;
          if (typeof Nt == "function") {
            mt.callback = null, Me = mt.priorityLevel;
            var an = mt.expirationTime <= Je, ln = Nt(an);
            Je = K.unstable_now(), typeof ln == "function" ? mt.callback = ln : mt === xt(Mt) && bt(Mt), b(Je);
          } else
            bt(Mt);
          mt = xt(Mt);
        }
        if (mt !== null)
          return !0;
        var un = xt(fn);
        return un !== null && ar($, un.startTime - Je), !1;
      }
      function $e(J, Oe) {
        switch (J) {
          case pe:
          case Be:
          case Z:
          case Fe:
          case ue:
            break;
          default:
            J = Z;
        }
        var Je = Me;
        Me = J;
        try {
          return Oe();
        } finally {
          Me = Je;
        }
      }
      function nt(J) {
        var Oe;
        switch (Me) {
          case pe:
          case Be:
          case Z:
            Oe = Z;
            break;
          default:
            Oe = Me;
            break;
        }
        var Je = Me;
        Me = Oe;
        try {
          return J();
        } finally {
          Me = Je;
        }
      }
      function Et(J) {
        var Oe = Me;
        return function() {
          var Je = Me;
          Me = Oe;
          try {
            return J.apply(this, arguments);
          } finally {
            Me = Je;
          }
        };
      }
      function Qe(J, Oe, Je) {
        var Nt = K.unstable_now(), an;
        if (typeof Je == "object" && Je !== null) {
          var ln = Je.delay;
          typeof ln == "number" && ln > 0 ? an = Nt + ln : an = Nt;
        } else
          an = Nt;
        var un;
        switch (J) {
          case pe:
            un = kt;
            break;
          case Be:
            un = Ce;
            break;
          case ue:
            un = Sn;
            break;
          case Fe:
            un = He;
            break;
          case Z:
          default:
            un = st;
            break;
        }
        var qn = an + un, tn = {
          id: $t++,
          callback: Oe,
          priorityLevel: J,
          startTime: an,
          expirationTime: qn,
          sortIndex: -1
        };
        return an > Nt ? (tn.sortIndex = an, _t(fn, tn), xt(Mt) === null && tn === xt(fn) && (tt ? $r() : tt = !0, ar($, an - Nt))) : (tn.sortIndex = qn, _t(Mt, tn), !vt && !At && (vt = !0, On(De))), tn;
      }
      function yt() {
      }
      function Vt() {
        !vt && !At && (vt = !0, On(De));
      }
      function bn() {
        return xt(Mt);
      }
      function Qn(J) {
        J.callback = null;
      }
      function rr() {
        return Me;
      }
      var Dn = !1, Sr = null, Vn = -1, kn = ut, oa = -1;
      function Qa() {
        var J = K.unstable_now() - oa;
        return !(J < kn);
      }
      function br() {
      }
      function Pn(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? kn = Math.floor(1e3 / J) : kn = ut;
      }
      var Wn = function() {
        if (Sr !== null) {
          var J = K.unstable_now();
          oa = J;
          var Oe = !0, Je = !0;
          try {
            Je = Sr(Oe, J);
          } finally {
            Je ? Gn() : (Dn = !1, Sr = null);
          }
        } else
          Dn = !1;
      }, Gn;
      if (typeof re == "function")
        Gn = function() {
          re(Wn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), Wa = Er.port2;
        Er.port1.onmessage = Wn, Gn = function() {
          Wa.postMessage(null);
        };
      } else
        Gn = function() {
          B(Wn, 0);
        };
      function On(J) {
        Sr = J, Dn || (Dn = !0, Gn());
      }
      function ar(J, Oe) {
        Vn = B(function() {
          J(K.unstable_now());
        }, Oe);
      }
      function $r() {
        me(Vn), Vn = -1;
      }
      var ki = br, sa = null;
      K.unstable_IdlePriority = ue, K.unstable_ImmediatePriority = pe, K.unstable_LowPriority = Fe, K.unstable_NormalPriority = Z, K.unstable_Profiling = sa, K.unstable_UserBlockingPriority = Be, K.unstable_cancelCallback = Qn, K.unstable_continueExecution = Vt, K.unstable_forceFrameRate = Pn, K.unstable_getCurrentPriorityLevel = rr, K.unstable_getFirstCallbackNode = bn, K.unstable_next = nt, K.unstable_pauseExecution = yt, K.unstable_requestPaint = ki, K.unstable_runWithPriority = $e, K.unstable_scheduleCallback = Qe, K.unstable_shouldYield = Qa, K.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dE)), dE;
}
var nT;
function uT() {
  if (nT) return Im.exports;
  nT = 1;
  var K = {};
  return K.NODE_ENV === "production" ? Im.exports = nD() : Im.exports = rD(), Im.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function aD() {
  if (rT) return Ya;
  rT = 1;
  var K = Qm(), le = uT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ut = /* @__PURE__ */ new Set(), _t = {};
  function xt(n, r) {
    bt(n, r), bt(n + "Capture", r);
  }
  function bt(n, r) {
    for (_t[n] = r, n = 0; n < r.length; n++) ut.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pt = Object.prototype.hasOwnProperty, be = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, Be = {};
  function Z(n) {
    return pt.call(Be, n) ? !0 : pt.call(pe, n) ? !1 : be.test(n) ? Be[n] = !0 : (pe[n] = !0, !1);
  }
  function Fe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ue(n, r, l, o) {
    if (r === null || typeof r > "u" || Fe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function we(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ot = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ot[n] = new we(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ot[r] = new we(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ot[n] = new we(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ot[n] = new we(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ot[n] = new we(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ot[n] = new we(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ot[n] = new we(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ot[n] = new we(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ot[n] = new we(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Hn = /[\-:]([a-z])/g;
  function rn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Hn,
      rn
    );
    ot[r] = new we(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Hn, rn);
    ot[r] = new we(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Hn, rn);
    ot[r] = new we(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ot[n] = new we(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ot.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ot[n] = new we(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function rt(n, r, l, o) {
    var c = ot.hasOwnProperty(r) ? ot[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ne = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), st = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), Sn = Symbol.for("react.profiler"), Mt = Symbol.for("react.provider"), fn = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), tt = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, b;
  function $(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var De = !1;
  function Ve(n, r) {
    if (!n || De) return "";
    De = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      De = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function $e(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case st:
        return "Fragment";
      case Ce:
        return "Portal";
      case Sn:
        return "Profiler";
      case He:
        return "StrictMode";
      case mt:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case fn:
        return (n.displayName || "Context") + ".Consumer";
      case Mt:
        return (n._context.displayName || "Context") + ".Provider";
      case $t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Et(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return nt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Qe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function yt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = yt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function bn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = yt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function rr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Dn(n, r) {
    var l = r.checked;
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Sr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && rt(n, "checked", r, !1);
  }
  function kn(n, r) {
    Vn(n, r);
    var l = Qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Qa(n, r.type, Qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function oa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Qa(n, r, l) {
    (r !== "number" || rr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var br = Array.isArray;
  function Pn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Qe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Gn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (br(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Qe(l) };
  }
  function Er(n, r) {
    var l = Qe(r.value), o = Qe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Wa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function On(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ar(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? On(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $r, ki = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $r.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function sa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Oe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    Oe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function Je(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Nt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Je(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var an = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (an[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function un(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qn = null;
  function tn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, zt = null, ca = null;
  function _a(n) {
    if (n = os(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = $i(r), Yt(n.stateNode, n.type, r));
    }
  }
  function xa(n) {
    zt ? ca ? ca.push(n) : ca = [n] : zt = n;
  }
  function Oi() {
    if (zt) {
      var n = zt, r = ca;
      if (ca = zt = null, _a(n), r) for (n = 0; n < r.length; n++) _a(r[n]);
    }
  }
  function $l(n, r) {
    return n(r);
  }
  function Yl() {
  }
  var Li = !1;
  function Il(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return $l(n, r, l);
    } finally {
      Li = !1, (zt !== null || ca !== null) && (Yl(), Oi());
    }
  }
  function ui(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = $i(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var fa = !1;
  if (S) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      fa = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    fa = !1;
  }
  function da(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Yr = !1, oi = null, si = !1, Mi = null, R = { onError: function(n) {
    Yr = !0, oi = n;
  } };
  function Y(n, r, l, o, c, d, m, E, T) {
    Yr = !1, oi = null, da.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, E, T) {
    if (Y.apply(this, arguments), Yr) {
      if (Yr) {
        var z = oi;
        Yr = !1, oi = null;
      } else throw Error(A(198));
      si || (si = !0, Mi = z);
    }
  }
  function ie(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function at(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ye(n) {
    if (ie(n) !== n) throw Error(A(188));
  }
  function ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ie(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Ye(c), n;
          if (d === o) return Ye(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ze(n) {
    return n = ct(n), n !== null ? En(n) : null;
  }
  function En(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = En(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = le.unstable_scheduleCallback, on = le.unstable_cancelCallback, Cr = le.unstable_shouldYield, Ga = le.unstable_requestPaint, Ut = le.unstable_now, dn = le.unstable_getCurrentPriorityLevel, Ge = le.unstable_ImmediatePriority, ci = le.unstable_UserBlockingPriority, Ni = le.unstable_NormalPriority, nc = le.unstable_LowPriority, zi = le.unstable_IdlePriority, ll = null, Ir = null;
  function Po(n) {
    if (Ir && typeof Ir.onCommitFiberRoot == "function") try {
      Ir.onCommitFiberRoot(ll, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : ac, Bo = Math.log, rc = Math.LN2;
  function ac(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Bo(n) / rc | 0) | 0;
  }
  var Ui = 64, ul = 4194304;
  function Qr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function fi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Qr(E) : (d &= m, d !== 0 && (o = Qr(d)));
    } else m = l & ~c, m !== 0 ? o = Qr(m) : d !== 0 && (o = Qr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ol(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = ol(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Ai(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ql() {
    var n = Ui;
    return Ui <<= 1, !(Ui & 4194240) && (Ui = 64), n;
  }
  function Wl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function sl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function $o(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Yo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ct = 0;
  function Io(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Fu, Rt, ic, di, Pe, Gl = !1, Xn = [], Wr = null, kr = null, pi = null, mn = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), qa = [], ba = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Rr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Wr = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        pi = null;
        break;
      case "pointerover":
      case "pointerout":
        mn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        It.delete(r.pointerId);
    }
  }
  function Or(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = os(r), r !== null && Rt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Gf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Wr = Or(Wr, n, r, l, o, c), !0;
      case "dragenter":
        return kr = Or(kr, n, r, l, o, c), !0;
      case "mouseover":
        return pi = Or(pi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return mn.set(d, Or(mn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, It.set(d, Or(It.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ju(n) {
    var r = ru(n.target);
    if (r !== null) {
      var l = ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = at(l), r !== null) {
            n.blockedOn = r, Pe(n.priority, function() {
              ic(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ql(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Bu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        qn = o, l.target.dispatchEvent(o), qn = null;
      } else return r = os(l), r !== null && Rt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Hu(n, r, l) {
    ql(n) && l.delete(r);
  }
  function Vu() {
    Gl = !1, Wr !== null && ql(Wr) && (Wr = null), kr !== null && ql(kr) && (kr = null), pi !== null && ql(pi) && (pi = null), mn.forEach(Hu), It.forEach(Hu);
  }
  function Xl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Gl || (Gl = !0, le.unstable_scheduleCallback(le.unstable_NormalPriority, Vu)));
  }
  function Da(n) {
    function r(c) {
      return Xl(c, n);
    }
    if (0 < Xn.length) {
      Xl(Xn[0], n);
      for (var l = 1; l < Xn.length; l++) {
        var o = Xn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Wr !== null && Xl(Wr, n), kr !== null && Xl(kr, n), pi !== null && Xl(pi, n), mn.forEach(r), It.forEach(r), l = 0; l < qa.length; l++) o = qa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qa.length && (l = qa[0], l.blockedOn === null); ) ju(l), l.blockedOn === null && qa.shift();
  }
  var ka = Ne.ReactCurrentBatchConfig, cl = !0;
  function Fi(n, r, l, o) {
    var c = Ct, d = ka.transition;
    ka.transition = null;
    try {
      Ct = 1, fl(n, r, l, o);
    } finally {
      Ct = c, ka.transition = d;
    }
  }
  function Pu(n, r, l, o) {
    var c = Ct, d = ka.transition;
    ka.transition = null;
    try {
      Ct = 4, fl(n, r, l, o);
    } finally {
      Ct = c, ka.transition = d;
    }
  }
  function fl(n, r, l, o) {
    if (cl) {
      var c = Bu(n, r, l, o);
      if (c === null) ud(n, r, o, ji, l), Rr(n, o);
      else if (Gf(c, n, r, l, o)) o.stopPropagation();
      else if (Rr(n, o), r & 4 && -1 < ba.indexOf(n)) {
        for (; c !== null; ) {
          var d = os(c);
          if (d !== null && Fu(d), d = Bu(n, r, l, o), d === null && ud(n, r, o, ji, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else ud(n, r, o, null, l);
    }
  }
  var ji = null;
  function Bu(n, r, l, o) {
    if (ji = null, n = tn(o), n = ru(n), n !== null) if (r = ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = at(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ji = n, null;
  }
  function Qo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dn()) {
          case Ge:
            return 1;
          case ci:
            return 4;
          case Ni:
          case nc:
            return 16;
          case zi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Oa = null, $u = null, h = null;
  function C() {
    if (h) return h;
    var n, r = $u, l = r.length, o, c = "value" in Oa ? Oa.value : Oa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function X() {
    return !1;
  }
  function he(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : X, this.isPropagationStopped = X, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ue = he(se), et = re({}, se, { view: 0, detail: 0 }), Ft = he(et), Qt, Wt, Xe, Jt = re({}, et, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xe && (Xe && n.type === "mousemove" ? (Qt = n.screenX - Xe.screenX, Wt = n.screenY - Xe.screenY) : Wt = Qt = 0, Xe = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Cn = he(Jt), Kl = re({}, Jt, { dataTransfer: 0 }), Wo = he(Kl), Hi = re({}, et, { relatedTarget: 0 }), Jl = he(Hi), Go = re({}, se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = he(Go), lc = re({}, se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = he(lc), Zp = re({}, se, { data: 0 }), uc = he(Zp), ev = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = nv[n]) ? !!r[n] : !1;
  }
  function Xa() {
    return Wm;
  }
  var Gm = re({}, et, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Kf = he(Gm), Jf = re({}, Jt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oc = he(Jf), qm = re({}, et, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), sc = he(qm), rv = re({}, se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gr = he(rv), Vi = re({}, Jt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ln = he(Vi), Pi = [9, 13, 27, 32], qo = S && "CompositionEvent" in window, dl = null;
  S && "documentMode" in document && (dl = document.documentMode);
  var Xm = S && "TextEvent" in window && !dl, Yu = S && (!qo || dl && 8 < dl && 11 >= dl), av = " ", iv = !1;
  function cc(n, r) {
    switch (n) {
      case "keyup":
        return Pi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Iu = !1;
  function Km(n, r) {
    switch (n) {
      case "compositionend":
        return lv(r);
      case "keypress":
        return r.which !== 32 ? null : (iv = !0, av);
      case "textInput":
        return n = r.data, n === av && iv ? null : n;
      default:
        return null;
    }
  }
  function uv(n, r) {
    if (Iu) return n === "compositionend" || !qo && cc(n, r) ? (n = C(), h = $u = Oa = null, Iu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Yu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function sv(n, r, l, o) {
    xa(o), r = is(r, "onChange"), 0 < r.length && (l = new Ue("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Qu = null, vi = null;
  function Zf(n) {
    vc(n, 0);
  }
  function Xo(n) {
    var r = _e(n);
    if (Qn(r)) return n;
  }
  function cv(n, r) {
    if (n === "change") return r;
  }
  var fv = !1;
  if (S) {
    var ed;
    if (S) {
      var td = "oninput" in document;
      if (!td) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), td = typeof dv.oninput == "function";
      }
      ed = td;
    } else ed = !1;
    fv = ed && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    Qu && (Qu.detachEvent("onpropertychange", vv), vi = Qu = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Xo(vi)) {
      var r = [];
      sv(r, vi, n, tn(n)), Il(Zf, r);
    }
  }
  function Zm(n, r, l) {
    n === "focusin" ? (pv(), Qu = r, vi = l, Qu.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function ey(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Xo(vi);
  }
  function hv(n, r) {
    if (n === "click") return Xo(r);
  }
  function ty(n, r) {
    if (n === "input" || n === "change") return Xo(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ka = typeof Object.is == "function" ? Object.is : mv;
  function Ko(n, r) {
    if (Ka(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!pt.call(r, c) || !Ka(n[c], r[c])) return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yv(l);
    }
  }
  function fc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? fc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function pl() {
    for (var n = window, r = rr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = rr(n.document);
    }
    return r;
  }
  function Wu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sv(n) {
    var r = pl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && fc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Wu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gv(l, d);
          var m = gv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Gu = S && "documentMode" in document && 11 >= document.documentMode, qu = null, nd = null, Jo = null, rd = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    rd || qu == null || qu !== rr(o) || (o = qu, "selectionStart" in o && Wu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Ko(Jo, o) || (Jo = o, o = is(nd, "onSelect"), 0 < o.length && (r = new Ue("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = qu)));
  }
  function Zo(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xu = { animationend: Zo("Animation", "AnimationEnd"), animationiteration: Zo("Animation", "AnimationIteration"), animationstart: Zo("Animation", "AnimationStart"), transitionend: Zo("Transition", "TransitionEnd") }, dc = {}, Tr = {};
  S && (Tr = document.createElement("div").style, "AnimationEvent" in window || (delete Xu.animationend.animation, delete Xu.animationiteration.animation, delete Xu.animationstart.animation), "TransitionEvent" in window || delete Xu.transitionend.transition);
  function es(n) {
    if (dc[n]) return dc[n];
    if (!Xu[n]) return n;
    var r = Xu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Tr) return dc[n] = r[l];
    return n;
  }
  var Cv = es("animationend"), Rv = es("animationiteration"), Tv = es("animationstart"), wv = es("transitionend"), _v = /* @__PURE__ */ new Map(), ad = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hi(n, r) {
    _v.set(n, r), xt(r, [n]);
  }
  for (var Zl = 0; Zl < ad.length; Zl++) {
    var id = ad[Zl], ts = id.toLowerCase(), ny = id[0].toUpperCase() + id.slice(1);
    hi(ts, "on" + ny);
  }
  hi(Cv, "onAnimationEnd"), hi(Rv, "onAnimationIteration"), hi(Tv, "onAnimationStart"), hi("dblclick", "onDoubleClick"), hi("focusin", "onFocus"), hi("focusout", "onBlur"), hi(wv, "onTransitionEnd"), bt("onMouseEnter", ["mouseout", "mouseover"]), bt("onMouseLeave", ["mouseout", "mouseover"]), bt("onPointerEnter", ["pointerout", "pointerover"]), bt("onPointerLeave", ["pointerout", "pointerover"]), xt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), xt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), xt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), xt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), xt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
  function pc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
  }
  function vc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          pc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          pc(c, E, z), d = T;
        }
      }
    }
    if (si) throw n = Mi, si = !1, Mi = null, n;
  }
  function jt(n, r) {
    var l = r[od];
    l === void 0 && (l = r[od] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ld(r, n, 2, !1), l.add(o));
  }
  function vl(n, r, l) {
    var o = 0;
    r && (o |= 4), ld(l, n, o, r);
  }
  var rs = "_reactListening" + Math.random().toString(36).slice(2);
  function as(n) {
    if (!n[rs]) {
      n[rs] = !0, ut.forEach(function(l) {
        l !== "selectionchange" && (ry.has(l) || vl(l, !1, n), vl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[rs] || (r[rs] = !0, vl("selectionchange", !1, r));
    }
  }
  function ld(n, r, l, o) {
    switch (Qo(r)) {
      case 1:
        var c = Fi;
        break;
      case 4:
        c = Pu;
        break;
      default:
        c = fl;
    }
    l = c.bind(null, r, l, n), c = void 0, !fa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function ud(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = ru(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Il(function() {
      var z = d, Q = tn(l), W = [];
      e: {
        var I = _v.get(n);
        if (I !== void 0) {
          var ce = Ue, ye = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Kf;
              break;
            case "focusin":
              ye = "focus", ce = Jl;
              break;
            case "focusout":
              ye = "blur", ce = Jl;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Jl;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Cn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Wo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = sc;
              break;
            case Cv:
            case Rv:
            case Tv:
              ce = qf;
              break;
            case wv:
              ce = Gr;
              break;
            case "scroll":
              ce = Ft;
              break;
            case "wheel":
              ce = Ln;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = oc;
          }
          var Ee = (r & 4) !== 0, _n = !Ee && n === "scroll", D = Ee ? I !== null ? I + "Capture" : null : I;
          Ee = [];
          for (var _ = z, L; _ !== null; ) {
            L = _;
            var q = L.stateNode;
            if (L.tag === 5 && q !== null && (L = q, D !== null && (q = ui(_, D), q != null && Ee.push(Ku(_, q, L)))), _n) break;
            _ = _.return;
          }
          0 < Ee.length && (I = new ce(I, ye, null, l, Q), W.push({ event: I, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", I && l !== qn && (ye = l.relatedTarget || l.fromElement) && (ru(ye) || ye[Bi])) break e;
          if ((ce || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, ce ? (ye = l.relatedTarget || l.toElement, ce = z, ye = ye ? ru(ye) : null, ye !== null && (_n = ie(ye), ye !== _n || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ce = null, ye = z), ce !== ye)) {
            if (Ee = Cn, q = "onMouseLeave", D = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = oc, q = "onPointerLeave", D = "onPointerEnter", _ = "pointer"), _n = ce == null ? I : _e(ce), L = ye == null ? I : _e(ye), I = new Ee(q, _ + "leave", ce, l, Q), I.target = _n, I.relatedTarget = L, q = null, ru(Q) === z && (Ee = new Ee(D, _ + "enter", ye, l, Q), Ee.target = L, Ee.relatedTarget = _n, q = Ee), _n = q, ce && ye) t: {
              for (Ee = ce, D = ye, _ = 0, L = Ee; L; L = eu(L)) _++;
              for (L = 0, q = D; q; q = eu(q)) L++;
              for (; 0 < _ - L; ) Ee = eu(Ee), _--;
              for (; 0 < L - _; ) D = eu(D), L--;
              for (; _--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = eu(Ee), D = eu(D);
              }
              Ee = null;
            }
            else Ee = null;
            ce !== null && hc(W, I, ce, Ee, !1), ye !== null && _n !== null && hc(W, _n, ye, Ee, !0);
          }
        }
        e: {
          if (I = z ? _e(z) : window, ce = I.nodeName && I.nodeName.toLowerCase(), ce === "select" || ce === "input" && I.type === "file") var Re = cv;
          else if (ov(I)) if (fv) Re = ty;
          else {
            Re = ey;
            var ge = Zm;
          }
          else (ce = I.nodeName) && ce.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (Re = hv);
          if (Re && (Re = Re(n, z))) {
            sv(W, Re, l, Q);
            break e;
          }
          ge && ge(n, I, z), n === "focusout" && (ge = I._wrapperState) && ge.controlled && I.type === "number" && Qa(I, "number", I.value);
        }
        switch (ge = z ? _e(z) : window, n) {
          case "focusin":
            (ov(ge) || ge.contentEditable === "true") && (qu = ge, nd = z, Jo = null);
            break;
          case "focusout":
            Jo = nd = qu = null;
            break;
          case "mousedown":
            rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rd = !1, Ev(W, l, Q);
            break;
          case "selectionchange":
            if (Gu) break;
          case "keydown":
          case "keyup":
            Ev(W, l, Q);
        }
        var ke;
        if (qo) e: {
          switch (n) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else Iu ? cc(n, l) && (je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (Yu && l.locale !== "ko" && (Iu || je !== "onCompositionStart" ? je === "onCompositionEnd" && Iu && (ke = C()) : (Oa = Q, $u = "value" in Oa ? Oa.value : Oa.textContent, Iu = !0)), ge = is(z, je), 0 < ge.length && (je = new uc(je, n, null, l, Q), W.push({ event: je, listeners: ge }), ke ? je.data = ke : (ke = lv(l), ke !== null && (je.data = ke)))), (ke = Xm ? Km(n, l) : uv(n, l)) && (z = is(z, "onBeforeInput"), 0 < z.length && (Q = new uc("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: z }), Q.data = ke));
      }
      vc(W, r);
    });
  }
  function Ku(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ui(n, l), d != null && o.unshift(Ku(n, d, c)), d = ui(n, r), d != null && o.push(Ku(n, d, c))), n = n.return;
    }
    return o;
  }
  function eu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function hc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = ui(l, d), T != null && m.unshift(Ku(l, T, E))) : c || (T = ui(l, d), T != null && m.push(Ku(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ay = /\r\n?/g, xv = /\u0000|\uFFFD/g;
  function bv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ay, `
`).replace(xv, "");
  }
  function mc(n, r, l) {
    if (r = bv(r), bv(n) !== r && l) throw Error(A(425));
  }
  function yc() {
  }
  var tu = null, ls = null;
  function nu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var gc = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Sc = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sc < "u" ? function(n) {
    return Sc.resolve(null).then(n).catch(Ju);
  } : gc;
  function Ju(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Zu(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Da(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Da(r);
  }
  function Ja(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ec(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var eo = Math.random().toString(36).slice(2), La = "__reactFiber$" + eo, us = "__reactProps$" + eo, Bi = "__reactContainer$" + eo, od = "__reactEvents$" + eo, sd = "__reactListeners$" + eo, to = "__reactHandles$" + eo;
  function ru(n) {
    var r = n[La];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Bi] || l[La]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ec(n); n !== null; ) {
          if (l = n[La]) return l;
          n = Ec(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function os(n) {
    return n = n[La] || n[Bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function _e(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function $i(n) {
    return n[us] || null;
  }
  var Mn = [], ft = -1;
  function qr(n) {
    return { current: n };
  }
  function Gt(n) {
    0 > ft || (n.current = Mn[ft], Mn[ft] = null, ft--);
  }
  function Zt(n, r) {
    ft++, Mn[ft] = n.current, n.current = r;
  }
  var it = {}, yn = qr(it), Nn = qr(!1), Ma = it;
  function pa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return it;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function mi() {
    Gt(Nn), Gt(yn);
  }
  function Cc(n, r, l) {
    if (yn.current !== it) throw Error(A(168));
    Zt(yn, r), Zt(Nn, l);
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Et(n) || "Unknown", c));
    return re({}, l, o);
  }
  function au(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || it, Ma = yn.current, Zt(yn, n), Zt(Nn, Nn.current), !0;
  }
  function Na(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = kv(n, r, Ma), o.__reactInternalMemoizedMergedChildContext = n, Gt(Nn), Gt(yn), Zt(yn, n)) : Gt(Nn), Zt(Nn, l);
  }
  var Za = null, ss = !1, cs = !1;
  function hl(n) {
    Za === null ? Za = [n] : Za.push(n);
  }
  function cd(n) {
    ss = !0, hl(n);
  }
  function Lr() {
    if (!cs && Za !== null) {
      cs = !0;
      var n = 0, r = Ct;
      try {
        var l = Za;
        for (Ct = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Za = null, ss = !1;
      } catch (c) {
        throw Za !== null && (Za = Za.slice(n + 1)), nn(Ge, Lr), c;
      } finally {
        Ct = r, cs = !1;
      }
    }
    return null;
  }
  var ml = [], yl = 0, no = null, gl = 0, lr = [], Un = 0, iu = null, Mr = 1, yi = "";
  function Sl(n, r) {
    ml[yl++] = gl, ml[yl++] = no, no = n, gl = r;
  }
  function Ov(n, r, l) {
    lr[Un++] = Mr, lr[Un++] = yi, lr[Un++] = iu, iu = n;
    var o = Mr;
    n = yi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Mr = 1 << 32 - Dr(r) + c | l << c | o, yi = d + n;
    } else Mr = 1 << d | l << c | o, yi = n;
  }
  function fd(n) {
    n.return !== null && (Sl(n, 1), Ov(n, 1, 0));
  }
  function Rc(n) {
    for (; n === no; ) no = ml[--yl], ml[yl] = null, gl = ml[--yl], ml[yl] = null;
    for (; n === iu; ) iu = lr[--Un], lr[Un] = null, yi = lr[--Un], lr[Un] = null, Mr = lr[--Un], lr[Un] = null;
  }
  var Xr = null, Kr = null, sn = !1, ei = null;
  function dd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function pd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = Ja(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = iu !== null ? { id: Mr, overflow: yi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hd(n) {
    if (sn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!pd(n, r)) {
          if (vd(n)) throw Error(A(418));
          r = Ja(l.nextSibling);
          var o = Xr;
          r && pd(n, r) ? dd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Xr = n);
        }
      } else {
        if (vd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Xr = n;
      }
    }
  }
  function Lv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function Rn(n) {
    if (n !== Xr) return !1;
    if (!sn) return Lv(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !nu(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (vd(n)) throw Mv(), Error(A(418));
      for (; r; ) dd(n, r), r = Ja(r.nextSibling);
    }
    if (Lv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Ja(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = Xr ? Ja(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Mv() {
    for (var n = Kr; n; ) n = Ja(n.nextSibling);
  }
  function Yi() {
    Kr = Xr = null, sn = !1;
  }
  function fs(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  var lu = Ne.ReactCurrentBatchConfig;
  function ds(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function ro(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(D, _) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [_], D.flags |= 16) : L.push(_);
      }
    }
    function l(D, _) {
      if (!n) return null;
      for (; _ !== null; ) r(D, _), _ = _.sibling;
      return null;
    }
    function o(D, _) {
      for (D = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? D.set(_.key, _) : D.set(_.index, _), _ = _.sibling;
      return D;
    }
    function c(D, _) {
      return D = Ol(D, _), D.index = 0, D.sibling = null, D;
    }
    function d(D, _, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < _ ? (D.flags |= 2, _) : L) : (D.flags |= 2, _)) : (D.flags |= 1048576, _);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, _, L, q) {
      return _ === null || _.tag !== 6 ? (_ = Tu(L, D.mode, q), _.return = D, _) : (_ = c(_, L), _.return = D, _);
    }
    function T(D, _, L, q) {
      var Re = L.type;
      return Re === st ? Q(D, _, L.props.children, q, L.key) : _ !== null && (_.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === vt && Nv(Re) === _.type) ? (q = c(_, L.props), q.ref = ds(D, _, L), q.return = D, q) : (q = of(L.type, L.key, L.props, null, D.mode, q), q.ref = ds(D, _, L), q.return = D, q);
    }
    function z(D, _, L, q) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = Qd(L, D.mode, q), _.return = D, _) : (_ = c(_, L.children || []), _.return = D, _);
    }
    function Q(D, _, L, q, Re) {
      return _ === null || _.tag !== 7 ? (_ = Ll(L, D.mode, q, Re), _.return = D, _) : (_ = c(_, L), _.return = D, _);
    }
    function W(D, _, L) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Tu("" + _, D.mode, L), _.return = D, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case kt:
            return L = of(_.type, _.key, _.props, null, D.mode, L), L.ref = ds(D, null, _), L.return = D, L;
          case Ce:
            return _ = Qd(_, D.mode, L), _.return = D, _;
          case vt:
            var q = _._init;
            return W(D, q(_._payload), L);
        }
        if (br(_) || me(_)) return _ = Ll(_, D.mode, L, null), _.return = D, _;
        ro(D, _);
      }
      return null;
    }
    function I(D, _, L, q) {
      var Re = _ !== null ? _.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(D, _, "" + L, q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            return L.key === Re ? T(D, _, L, q) : null;
          case Ce:
            return L.key === Re ? z(D, _, L, q) : null;
          case vt:
            return Re = L._init, I(
              D,
              _,
              Re(L._payload),
              q
            );
        }
        if (br(L) || me(L)) return Re !== null ? null : Q(D, _, L, q, null);
        ro(D, L);
      }
      return null;
    }
    function ce(D, _, L, q, Re) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return D = D.get(L) || null, E(_, D, "" + q, Re);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case kt:
            return D = D.get(q.key === null ? L : q.key) || null, T(_, D, q, Re);
          case Ce:
            return D = D.get(q.key === null ? L : q.key) || null, z(_, D, q, Re);
          case vt:
            var ge = q._init;
            return ce(D, _, L, ge(q._payload), Re);
        }
        if (br(q) || me(q)) return D = D.get(L) || null, Q(_, D, q, Re, null);
        ro(_, q);
      }
      return null;
    }
    function ye(D, _, L, q) {
      for (var Re = null, ge = null, ke = _, je = _ = 0, tr = null; ke !== null && je < L.length; je++) {
        ke.index > je ? (tr = ke, ke = null) : tr = ke.sibling;
        var Dt = I(D, ke, L[je], q);
        if (Dt === null) {
          ke === null && (ke = tr);
          break;
        }
        n && ke && Dt.alternate === null && r(D, ke), _ = d(Dt, _, je), ge === null ? Re = Dt : ge.sibling = Dt, ge = Dt, ke = tr;
      }
      if (je === L.length) return l(D, ke), sn && Sl(D, je), Re;
      if (ke === null) {
        for (; je < L.length; je++) ke = W(D, L[je], q), ke !== null && (_ = d(ke, _, je), ge === null ? Re = ke : ge.sibling = ke, ge = ke);
        return sn && Sl(D, je), Re;
      }
      for (ke = o(D, ke); je < L.length; je++) tr = ce(ke, D, je, L[je], q), tr !== null && (n && tr.alternate !== null && ke.delete(tr.key === null ? je : tr.key), _ = d(tr, _, je), ge === null ? Re = tr : ge.sibling = tr, ge = tr);
      return n && ke.forEach(function(Ml) {
        return r(D, Ml);
      }), sn && Sl(D, je), Re;
    }
    function Ee(D, _, L, q) {
      var Re = me(L);
      if (typeof Re != "function") throw Error(A(150));
      if (L = Re.call(L), L == null) throw Error(A(151));
      for (var ge = Re = null, ke = _, je = _ = 0, tr = null, Dt = L.next(); ke !== null && !Dt.done; je++, Dt = L.next()) {
        ke.index > je ? (tr = ke, ke = null) : tr = ke.sibling;
        var Ml = I(D, ke, Dt.value, q);
        if (Ml === null) {
          ke === null && (ke = tr);
          break;
        }
        n && ke && Ml.alternate === null && r(D, ke), _ = d(Ml, _, je), ge === null ? Re = Ml : ge.sibling = Ml, ge = Ml, ke = tr;
      }
      if (Dt.done) return l(
        D,
        ke
      ), sn && Sl(D, je), Re;
      if (ke === null) {
        for (; !Dt.done; je++, Dt = L.next()) Dt = W(D, Dt.value, q), Dt !== null && (_ = d(Dt, _, je), ge === null ? Re = Dt : ge.sibling = Dt, ge = Dt);
        return sn && Sl(D, je), Re;
      }
      for (ke = o(D, ke); !Dt.done; je++, Dt = L.next()) Dt = ce(ke, D, je, Dt.value, q), Dt !== null && (n && Dt.alternate !== null && ke.delete(Dt.key === null ? je : Dt.key), _ = d(Dt, _, je), ge === null ? Re = Dt : ge.sibling = Dt, ge = Dt);
      return n && ke.forEach(function(Ey) {
        return r(D, Ey);
      }), sn && Sl(D, je), Re;
    }
    function _n(D, _, L, q) {
      if (typeof L == "object" && L !== null && L.type === st && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            e: {
              for (var Re = L.key, ge = _; ge !== null; ) {
                if (ge.key === Re) {
                  if (Re = L.type, Re === st) {
                    if (ge.tag === 7) {
                      l(D, ge.sibling), _ = c(ge, L.props.children), _.return = D, D = _;
                      break e;
                    }
                  } else if (ge.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === vt && Nv(Re) === ge.type) {
                    l(D, ge.sibling), _ = c(ge, L.props), _.ref = ds(D, ge, L), _.return = D, D = _;
                    break e;
                  }
                  l(D, ge);
                  break;
                } else r(D, ge);
                ge = ge.sibling;
              }
              L.type === st ? (_ = Ll(L.props.children, D.mode, q, L.key), _.return = D, D = _) : (q = of(L.type, L.key, L.props, null, D.mode, q), q.ref = ds(D, _, L), q.return = D, D = q);
            }
            return m(D);
          case Ce:
            e: {
              for (ge = L.key; _ !== null; ) {
                if (_.key === ge) if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                  l(D, _.sibling), _ = c(_, L.children || []), _.return = D, D = _;
                  break e;
                } else {
                  l(D, _);
                  break;
                }
                else r(D, _);
                _ = _.sibling;
              }
              _ = Qd(L, D.mode, q), _.return = D, D = _;
            }
            return m(D);
          case vt:
            return ge = L._init, _n(D, _, ge(L._payload), q);
        }
        if (br(L)) return ye(D, _, L, q);
        if (me(L)) return Ee(D, _, L, q);
        ro(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (l(D, _.sibling), _ = c(_, L), _.return = D, D = _) : (l(D, _), _ = Tu(L, D.mode, q), _.return = D, D = _), m(D)) : l(D, _);
    }
    return _n;
  }
  var ti = zv(!0), ur = zv(!1), te = qr(null), va = null, wr = null, md = null;
  function yd() {
    md = wr = va = null;
  }
  function gd(n) {
    var r = te.current;
    Gt(te), n._currentValue = r;
  }
  function Sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function ao(n, r) {
    va = n, md = wr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Zn = !0), n.firstContext = null);
  }
  function Pt(n) {
    var r = n._currentValue;
    if (md !== n) if (n = { context: n, memoizedValue: r, next: null }, wr === null) {
      if (va === null) throw Error(A(308));
      wr = n, va.dependencies = { lanes: 0, firstContext: n };
    } else wr = wr.next = n;
    return r;
  }
  var uu = null;
  function Ed(n) {
    uu === null ? uu = [n] : uu.push(n);
  }
  function Uv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ed(r)) : (l.next = c.next, c.next = l), r.interleaved = l, gi(n, o);
  }
  function gi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var za = !1;
  function El(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Av(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ii(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Cl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, gi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ed(o)) : (r.next = c.next, c.next = r), o.interleaved = r, gi(n, l);
  }
  function Tc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yo(n, l);
    }
  }
  function Fv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function wc(n, r, l, o) {
    var c = n.updateQueue;
    za = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = z : E.next = z, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = z = T = null, E = d;
      do {
        var I = E.lane, ce = E.eventTime;
        if ((o & I) === I) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (I = r, ce = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  W = ye.call(ce, W, I);
                  break e;
                }
                W = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, I = typeof ye == "function" ? ye.call(ce, W, I) : ye, I == null) break e;
                W = re({}, W, I);
                break e;
              case 2:
                za = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else ce = { eventTime: ce, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = ce, T = W) : Q = Q.next = ce, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      yu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Cd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var io = {}, Si = qr(io), ps = qr(io), vs = qr(io);
  function ou(n) {
    if (n === io) throw Error(A(174));
    return n;
  }
  function Rd(n, r) {
    switch (Zt(vs, r), Zt(ps, n), Zt(Si, io), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ar(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ar(r, n);
    }
    Gt(Si), Zt(Si, r);
  }
  function lo() {
    Gt(Si), Gt(ps), Gt(vs);
  }
  function Td(n) {
    ou(vs.current);
    var r = ou(Si.current), l = ar(r, n.type);
    r !== l && (Zt(ps, n), Zt(Si, l));
  }
  function wd(n) {
    ps.current === n && (Gt(Si), Gt(ps));
  }
  var pn = qr(0);
  function _c(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var _d = [];
  function hs() {
    for (var n = 0; n < _d.length; n++) _d[n]._workInProgressVersionPrimary = null;
    _d.length = 0;
  }
  var xe = Ne.ReactCurrentDispatcher, lt = Ne.ReactCurrentBatchConfig, gt = 0, qe = null, qt = null, Bn = null, xc = !1, ms = !1, ys = 0, xd = 0;
  function V() {
    throw Error(A(321));
  }
  function An(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ka(n[l], r[l])) return !1;
    return !0;
  }
  function ze(n, r, l, o, c, d) {
    if (gt = d, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xe.current = n === null || n.memoizedState === null ? Pc : Bc, n = l(o, c), ms) {
      d = 0;
      do {
        if (ms = !1, ys = 0, 25 <= d) throw Error(A(301));
        d += 1, Bn = qt = null, r.updateQueue = null, xe.current = Rs, n = l(o, c);
      } while (ms);
    }
    if (xe.current = Bt, r = qt !== null && qt.next !== null, gt = 0, Bn = qt = qe = null, xc = !1, r) throw Error(A(300));
    return n;
  }
  function Rl() {
    var n = ys !== 0;
    return ys = 0, n;
  }
  function Kn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n, Bn;
  }
  function Jn() {
    if (qt === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = qt.next;
    var r = Bn === null ? qe.memoizedState : Bn.next;
    if (r !== null) Bn = r, qt = n;
    else {
      if (n === null) throw Error(A(310));
      qt = n, n = { memoizedState: qt.memoizedState, baseState: qt.baseState, baseQueue: qt.baseQueue, queue: qt.queue, next: null }, Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n;
    }
    return Bn;
  }
  function Jr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function su(n) {
    var r = Jn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = qt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Q = z.lane;
        if ((gt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, qe.lanes |= Q, yu |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Ka(o, r.memoizedState) || (Zn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, qe.lanes |= d, yu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tl(n) {
    var r = Jn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ka(d, r.memoizedState) || (Zn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function uo() {
  }
  function bc(n, r) {
    var l = qe, o = Jn(), c = r(), d = !Ka(o.memoizedState, c);
    if (d && (o.memoizedState = c, Zn = !0), o = o.queue, gs(Oc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Bn !== null && Bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, cu(9, kc.bind(null, l, o, c, r), void 0, null), Fn === null) throw Error(A(349));
      gt & 30 || Dc(l, r, c);
    }
    return c;
  }
  function Dc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function kc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Lc(r) && Mc(n);
  }
  function Oc(n, r, l) {
    return l(function() {
      Lc(r) && Mc(n);
    });
  }
  function Lc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ka(n, l);
    } catch {
      return !0;
    }
  }
  function Mc(n) {
    var r = gi(n, 1);
    r !== null && Sa(r, n, 1, -1);
  }
  function Nc(n) {
    var r = Kn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Cs.bind(null, qe, n), [r.memoizedState, n];
  }
  function cu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function zc() {
    return Jn().memoizedState;
  }
  function oo(n, r, l, o) {
    var c = Kn();
    qe.flags |= n, c.memoizedState = cu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function so(n, r, l, o) {
    var c = Jn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (qt !== null) {
      var m = qt.memoizedState;
      if (d = m.destroy, o !== null && An(o, m.deps)) {
        c.memoizedState = cu(r, l, d, o);
        return;
      }
    }
    qe.flags |= n, c.memoizedState = cu(1 | r, l, d, o);
  }
  function Uc(n, r) {
    return oo(8390656, 8, n, r);
  }
  function gs(n, r) {
    return so(2048, 8, n, r);
  }
  function Ac(n, r) {
    return so(4, 2, n, r);
  }
  function Fc(n, r) {
    return so(4, 4, n, r);
  }
  function Ss(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function fu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, so(4, 4, Ss.bind(null, r, n), l);
  }
  function Es() {
  }
  function jc(n, r) {
    var l = Jn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Hc(n, r) {
    var l = Jn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Vc(n, r, l) {
    return gt & 21 ? (Ka(l, r) || (l = Ql(), qe.lanes |= l, yu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Zn = !0), n.memoizedState = l);
  }
  function jv(n, r) {
    var l = Ct;
    Ct = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = lt.transition;
    lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ct = l, lt.transition = o;
    }
  }
  function co() {
    return Jn().memoizedState;
  }
  function Hv(n, r, l) {
    var o = ga(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ha(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = en();
      Sa(l, n, o, c), Vv(l, r, o);
    }
  }
  function Cs(n, r, l) {
    var o = ga(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) ha(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ka(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Ed(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, o), l !== null && (c = en(), Sa(l, n, o, c), Vv(l, r, o));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function ha(n, r) {
    ms = xc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Vv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yo(n, l);
    }
  }
  var Bt = { readContext: Pt, useCallback: V, useContext: V, useEffect: V, useImperativeHandle: V, useInsertionEffect: V, useLayoutEffect: V, useMemo: V, useReducer: V, useRef: V, useState: V, useDebugValue: V, useDeferredValue: V, useTransition: V, useMutableSource: V, useSyncExternalStore: V, useId: V, unstable_isNewReconciler: !1 }, Pc = { readContext: Pt, useCallback: function(n, r) {
    return Kn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pt, useEffect: Uc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, oo(
      4194308,
      4,
      Ss.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return oo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return oo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Kn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Kn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, qe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Kn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Nc, useDebugValue: Es, useDeferredValue: function(n) {
    return Kn().memoizedState = n;
  }, useTransition: function() {
    var n = Nc(!1), r = n[0];
    return n = jv.bind(null, n[1]), Kn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = qe, c = Kn();
    if (sn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Fn === null) throw Error(A(349));
      gt & 30 || Dc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Uc(Oc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, cu(9, kc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Kn(), r = Fn.identifierPrefix;
    if (sn) {
      var l = yi, o = Mr;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ys++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = xd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Bc = {
    readContext: Pt,
    useCallback: jc,
    useContext: Pt,
    useEffect: gs,
    useImperativeHandle: fu,
    useInsertionEffect: Ac,
    useLayoutEffect: Fc,
    useMemo: Hc,
    useReducer: su,
    useRef: zc,
    useState: function() {
      return su(Jr);
    },
    useDebugValue: Es,
    useDeferredValue: function(n) {
      var r = Jn();
      return Vc(r, qt.memoizedState, n);
    },
    useTransition: function() {
      var n = su(Jr)[0], r = Jn().memoizedState;
      return [n, r];
    },
    useMutableSource: uo,
    useSyncExternalStore: bc,
    useId: co,
    unstable_isNewReconciler: !1
  }, Rs = { readContext: Pt, useCallback: jc, useContext: Pt, useEffect: gs, useImperativeHandle: fu, useInsertionEffect: Ac, useLayoutEffect: Fc, useMemo: Hc, useReducer: Tl, useRef: zc, useState: function() {
    return Tl(Jr);
  }, useDebugValue: Es, useDeferredValue: function(n) {
    var r = Jn();
    return qt === null ? r.memoizedState = n : Vc(r, qt.memoizedState, n);
  }, useTransition: function() {
    var n = Tl(Jr)[0], r = Jn().memoizedState;
    return [n, r];
  }, useMutableSource: uo, useSyncExternalStore: bc, useId: co, unstable_isNewReconciler: !1 };
  function Zr(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function bd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var $c = { isMounted: function(n) {
    return (n = n._reactInternals) ? ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = ga(n), d = Ii(o, c);
    d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Sa(r, n, c, o), Tc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = ga(n), d = Ii(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Sa(r, n, c, o), Tc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = en(), o = ga(n), c = Ii(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Cl(n, c, o), r !== null && (Sa(r, n, o, l), Tc(r, n, o));
  } };
  function Pv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Ko(l, o) || !Ko(c, d) : !0;
  }
  function Bv(n, r, l) {
    var o = !1, c = it, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pt(d) : (c = zn(r) ? Ma : yn.current, o = r.contextTypes, d = (o = o != null) ? pa(n, c) : it), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $c, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Yc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && $c.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, El(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pt(d) : (d = zn(r) ? Ma : yn.current, c.context = pa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (bd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && $c.enqueueReplaceState(c, c.state, null), wc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += $e(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ic(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function kd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ly = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(n, r, l) {
    l = Ii(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      bl || (bl = !0, Ls = o), kd(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Ii(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        kd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      kd(n, r), typeof o != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Od(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ly();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = $d.bind(null, n, r, l), r.then(n, n));
  }
  function Ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ii(-1, 1), r.tag = 2, Cl(l, r, 1))), l.lanes |= 1), n);
  }
  var du = Ne.ReactCurrentOwner, Zn = !1;
  function Tn(n, r, l, o) {
    r.child = n === null ? ur(r, null, l, o) : ti(r, n.child, l, o);
  }
  function Qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ao(r, c), o = ze(n, r, l, o, d, c), l = Rl(), n !== null && !Zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && l && fd(r), r.flags |= 1, Tn(n, r, o, c), r.child);
  }
  function ea(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, pu(n, r, d, o, c)) : (n = of(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ko, l(m, o) && n.ref === r.ref) return or(n, r, c);
    }
    return r.flags |= 1, n = Ol(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function pu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Ko(d, o) && n.ref === r.ref) if (Zn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Zn = !0);
      else return r.lanes = n.lanes, or(n, r, c);
    }
    return Wc(n, r, l, o, c);
  }
  function Ke(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Zt(ho, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Zt(ho, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Zt(ho, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Zt(ho, ya), ya |= o;
    return Tn(n, r, c, l), r.child;
  }
  function ws(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Wc(n, r, l, o, c) {
    var d = zn(l) ? Ma : yn.current;
    return d = pa(r, d), ao(r, c), l = ze(n, r, l, o, d, c), o = Rl(), n !== null && !Zn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && o && fd(r), r.flags |= 1, Tn(n, r, l, c), r.child);
  }
  function uy(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      au(r);
    } else d = !1;
    if (ao(r, c), r.stateNode === null) Ua(n, r), Bv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Pt(z) : (z = zn(l) ? Ma : yn.current, z = pa(r, z));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Yc(r, m, o, z), za = !1;
      var I = r.memoizedState;
      m.state = I, wc(r, o, m, c), T = r.memoizedState, E !== o || I !== T || Nn.current || za ? (typeof Q == "function" && (bd(r, l, Q, o), T = r.memoizedState), (E = za || Pv(r, l, E, o, I, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : Zr(r.type, E), m.props = z, W = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Pt(T) : (T = zn(l) ? Ma : yn.current, T = pa(r, T));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== T) && Yc(r, m, o, T), za = !1, I = r.memoizedState, m.state = I, wc(r, o, m, c);
      var ye = r.memoizedState;
      E !== W || I !== ye || Nn.current || za ? (typeof ce == "function" && (bd(r, l, ce, o), ye = r.memoizedState), (z = za || Pv(r, l, z, o, I, ye, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    ws(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Na(r, l, !1), or(n, r, d);
    o = r.stateNode, du.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ti(r, n.child, null, d), r.child = ti(r, null, E, d)) : Tn(n, r, E, d), r.memoizedState = o.state, c && Na(r, l, !0), r.child;
  }
  function Gc(n) {
    var r = n.stateNode;
    r.pendingContext ? Cc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Cc(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function fo(n, r, l, o, c) {
    return Yi(), fs(c), r.flags |= 256, Tn(n, r, l, o), r.child;
  }
  var Nd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = pn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Zt(pn, c & 1), n === null)
      return hd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Co(m, o, 0, null), n = Ll(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = qc(l), r.memoizedState = Nd, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ol(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ol(E, d) : (d = Ll(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? qc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Nd, o;
    }
    return d = n.child, n = d.sibling, o = Ol(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function _s(n, r) {
    return r = Co({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Xc(n, r, l, o) {
    return o !== null && fs(o), ti(r, n.child, null, l), n = _s(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ic(Error(A(422))), Xc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Co({ mode: "visible", children: o.children }, c, 0, null), d = Ll(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ti(r, n.child, null, m), r.child.memoizedState = qc(m), r.memoizedState = Nd, d);
    if (!(r.mode & 1)) return Xc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Ic(d, o, void 0), Xc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Zn || E) {
      if (o = Fn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, gi(n, c), Sa(o, n, c, -1));
      }
      return Pd(), o = Ic(Error(A(421))), Xc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Ja(c.nextSibling), Xr = r, sn = !0, ei = null, n !== null && (lr[Un++] = Mr, lr[Un++] = yi, lr[Un++] = iu, Mr = n.id, yi = n.overflow, iu = r), r = _s(r, o.children), r.flags |= 4096, r);
  }
  function zd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Sd(n.return, r, l);
  }
  function Kc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ta(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Tn(n, r, o.children, l), o = pn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && zd(n, l, r);
        else if (n.tag === 19) zd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Zt(pn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && _c(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Kc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && _c(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Kc(r, !0, l, null, d);
        break;
      case "together":
        Kc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ua(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function or(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), yu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Ol(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ol(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Jc(n, r, l) {
    switch (r.tag) {
      case 3:
        Gc(r), Yi();
        break;
      case 5:
        Td(r);
        break;
      case 1:
        zn(r.type) && au(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Zt(te, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Zt(pn, pn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (Zt(pn, pn.current & 1), n = or(n, r, l), n !== null ? n.sibling : null);
        Zt(pn, pn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ta(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Zt(pn, pn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ke(n, r, l);
    }
    return or(n, r, l);
  }
  var po, ma, $n, Wv;
  po = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ma = function() {
  }, $n = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ou(Si.current);
      var d = null;
      switch (l) {
        case "input":
          c = Dn(n, c), o = Dn(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Wn(n, c), o = Wn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = yc);
      }
      ln(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (_t.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (_t.hasOwnProperty(z) ? (T != null && z === "onScroll" && jt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xs(n, r) {
    if (!sn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function _r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ud(n, r, l) {
    var o = r.pendingProps;
    switch (Rc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _r(r), null;
      case 1:
        return zn(r.type) && mi(), _r(r), null;
      case 3:
        return o = r.stateNode, lo(), Gt(Nn), Gt(yn), hs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Rn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ei !== null && (Us(ei), ei = null))), ma(n, r), _r(r), null;
      case 5:
        wd(r);
        var c = ou(vs.current);
        if (l = r.type, n !== null && r.stateNode != null) $n(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return _r(r), null;
          }
          if (n = ou(Si.current), Rn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[La] = r, o[us] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                jt("cancel", o), jt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                jt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ns.length; c++) jt(ns[c], o);
                break;
              case "source":
                jt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                jt(
                  "error",
                  o
                ), jt("load", o);
                break;
              case "details":
                jt("toggle", o);
                break;
              case "input":
                Sr(o, d), jt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, jt("invalid", o);
                break;
              case "textarea":
                Gn(o, d), jt("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && mc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && mc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : _t.hasOwnProperty(m) && E != null && m === "onScroll" && jt("scroll", o);
            }
            switch (l) {
              case "input":
                bn(o), oa(o, d, !0);
                break;
              case "textarea":
                bn(o), Wa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = yc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = On(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[La] = r, n[us] = o, po(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = un(l, o), l) {
                case "dialog":
                  jt("cancel", n), jt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  jt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ns.length; c++) jt(ns[c], n);
                  c = o;
                  break;
                case "source":
                  jt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  jt(
                    "error",
                    n
                  ), jt("load", n), c = o;
                  break;
                case "details":
                  jt("toggle", n), c = o;
                  break;
                case "input":
                  Sr(n, o), c = Dn(n, o), jt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), jt("invalid", n);
                  break;
                case "textarea":
                  Gn(n, o), c = Wn(n, o), jt("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Nt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ki(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && sa(n, T) : typeof T == "number" && sa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_t.hasOwnProperty(d) ? T != null && d === "onScroll" && jt("scroll", n) : T != null && rt(n, d, T, m));
              }
              switch (l) {
                case "input":
                  bn(n), oa(n, o, !1);
                  break;
                case "textarea":
                  bn(n), Wa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Qe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = yc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _r(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = ou(vs.current), ou(Si.current), Rn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[La] = r, (d = o.nodeValue !== l) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                mc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && mc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[La] = r, r.stateNode = o;
        }
        return _r(r), null;
      case 13:
        if (Gt(pn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Kr !== null && r.mode & 1 && !(r.flags & 128)) Mv(), Yi(), r.flags |= 98560, d = !1;
          else if (d = Rn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[La] = r;
            } else Yi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ei !== null && (Us(ei), ei = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pn.current & 1 ? Yn === 0 && (Yn = 3) : Pd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return lo(), ma(n, r), n === null && as(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return gd(r.type._context), _r(r), null;
      case 17:
        return zn(r.type) && mi(), _r(r), null;
      case 19:
        if (Gt(pn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) xs(d, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = _c(n), m !== null) {
              for (r.flags |= 128, xs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Zt(pn, pn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ut() > yo && (r.flags |= 128, o = !0, xs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = _c(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !sn) return _r(r), null;
          } else 2 * Ut() - d.renderingStartTime > yo && l !== 1073741824 && (r.flags |= 128, o = !0, xs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ut(), r.sibling = null, l = pn.current, Zt(pn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Gv(n, r) {
    switch (Rc(r), r.tag) {
      case 1:
        return zn(r.type) && mi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return lo(), Gt(Nn), Gt(yn), hs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Gt(pn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Yi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Gt(pn), null;
      case 4:
        return lo(), null;
      case 10:
        return gd(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vu = !1, sr = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function xl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      gn(n, r, o);
    }
    else l.current = null;
  }
  function Ad(n, r, l) {
    try {
      l();
    } catch (o) {
      gn(n, r, o);
    }
  }
  var Fd = !1;
  function sy(n, r) {
    if (tu = cl, n = pl(), Wu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, Q = 0, W = n, I = null;
          t: for (; ; ) {
            for (var ce; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (ce = W.firstChild) !== null; )
              I = W, W = ce;
            for (; ; ) {
              if (W === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++Q === o && (T = m), (ce = W.nextSibling) !== null) break;
              W = I, I = W.parentNode;
            }
            W = ce;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ls = { focusedElem: n, selectionRange: l }, cl = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, _n = ye.memoizedState, D = r.stateNode, _ = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : Zr(r.type, Ee), _n);
              D.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (q) {
        gn(r, r.return, q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return ye = Fd, Fd = !1, ye;
  }
  function vo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ad(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Zc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ef(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function qv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, qv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[La], delete r[us], delete r[od], delete r[sd], delete r[to])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function tf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function bs(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || tf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ei(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = yc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ei(n, r, l), n = n.sibling; n !== null; ) Ei(n, r, l), n = n.sibling;
  }
  function Ci(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ci(n, r, l), n = n.sibling; n !== null; ) Ci(n, r, l), n = n.sibling;
  }
  var vn = null, Nr = !1;
  function Aa(n, r, l) {
    for (l = l.child; l !== null; ) Qi(n, r, l), l = l.sibling;
  }
  function Qi(n, r, l) {
    if (Ir && typeof Ir.onCommitFiberUnmount == "function") try {
      Ir.onCommitFiberUnmount(ll, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || xl(l, r);
      case 6:
        var o = vn, c = Nr;
        vn = null, Aa(n, r, l), vn = o, Nr = c, vn !== null && (Nr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vn.removeChild(l.stateNode));
        break;
      case 18:
        vn !== null && (Nr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? Zu(n.parentNode, l) : n.nodeType === 1 && Zu(n, l), Da(n)) : Zu(vn, l.stateNode));
        break;
      case 4:
        o = vn, c = Nr, vn = l.stateNode.containerInfo, Nr = !0, Aa(n, r, l), vn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ad(l, r, m), c = c.next;
          } while (c !== o);
        }
        Aa(n, r, l);
        break;
      case 1:
        if (!sr && (xl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          gn(l, r, E);
        }
        Aa(n, r, l);
        break;
      case 21:
        Aa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, Aa(n, r, l), sr = o) : Aa(n, r, l);
        break;
      default:
        Aa(n, r, l);
    }
  }
  function Xv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new oy()), r.forEach(function(o) {
        var c = vy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ni(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              vn = E.stateNode, Nr = !1;
              break e;
            case 3:
              vn = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              vn = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (vn === null) throw Error(A(160));
        Qi(d, m, c), vn = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        gn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Kv(r, n), r = r.sibling;
  }
  function Kv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ni(r, n), ri(n), o & 4) {
          try {
            vo(3, n, n.return), Zc(3, n);
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
          try {
            vo(5, n, n.return);
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ni(r, n), ri(n), o & 512 && l !== null && xl(l, l.return);
        break;
      case 5:
        if (ni(r, n), ri(n), o & 512 && l !== null && xl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            sa(c, "");
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), un(E, m);
            var z = un(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], W = T[m + 1];
              Q === "style" ? Nt(c, W) : Q === "dangerouslySetInnerHTML" ? ki(c, W) : Q === "children" ? sa(c, W) : rt(c, Q, W, z);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                Er(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? Pn(c, !!d.multiple, ce, !1) : I !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[us] = d;
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ni(r, n), ri(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ni(r, n), ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Da(r.containerInfo);
        } catch (Ee) {
          gn(n, n.return, Ee);
        }
        break;
      case 4:
        ni(r, n), ri(n);
        break;
      case 13:
        ni(r, n), ri(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Hd = Ut())), o & 4 && Xv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (z = sr) || Q, ni(r, n), sr = z) : ni(r, n), ri(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (ve = n, Q = n.child; Q !== null; ) {
            for (W = ve = Q; ve !== null; ) {
              switch (I = ve, ce = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, I, I.return);
                  break;
                case 1:
                  xl(I, I.return);
                  var ye = I.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      gn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  xl(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Zv(W);
                    continue;
                  }
              }
              ce !== null ? (ce.return = I, ve = ce) : Zv(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Je("display", m));
                } catch (Ee) {
                  gn(n, n.return, Ee);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Ee) {
                gn(n, n.return, Ee);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Q === W && (Q = null), W = W.return;
            }
            Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        ni(r, n), ri(n), o & 4 && Xv(n);
        break;
      case 21:
        break;
      default:
        ni(
          r,
          n
        ), ri(n);
    }
  }
  function ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (tf(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (sa(c, ""), o.flags &= -33);
            var d = bs(n);
            Ci(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = bs(n);
            Ei(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        gn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ds(n, r, l) {
    ve = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || vu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || sr;
          E = vu;
          var z = sr;
          if (vu = m, (sr = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? ks(c) : T !== null ? (T.return = m, ve = T) : ks(c);
          for (; d !== null; ) ve = d, Jv(d), d = d.sibling;
          ve = c, vu = E, sr = z;
        }
        jd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : jd(n);
    }
  }
  function jd(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || Zc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !sr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Zr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Cd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Cd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var Q = z.memoizedState;
                  if (Q !== null) {
                    var W = Q.dehydrated;
                    W !== null && Da(W);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          sr || r.flags & 512 && ef(r);
        } catch (I) {
          gn(r, r.return, I);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function ks(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Zc(4, r);
            } catch (T) {
              gn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                gn(r, c, T);
              }
            }
            var d = r.return;
            try {
              ef(r);
            } catch (T) {
              gn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              ef(r);
            } catch (T) {
              gn(r, m, T);
            }
        }
      } catch (T) {
        gn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var eh = Math.ceil, nf = Ne.ReactCurrentDispatcher, hu = Ne.ReactCurrentOwner, xr = Ne.ReactCurrentBatchConfig, dt = 0, Fn = null, wn = null, cr = 0, ya = 0, ho = qr(0), Yn = 0, mu = null, yu = 0, gu = 0, Os = 0, mo = null, na = null, Hd = 0, yo = 1 / 0, Wi = null, bl = !1, Ls = null, Fa = null, rf = !1, Dl = null, Ms = 0, go = 0, So = null, Su = -1, Ns = 0;
  function en() {
    return dt & 6 ? Ut() : Su !== -1 ? Su : Su = Ut();
  }
  function ga(n) {
    return n.mode & 1 ? dt & 2 && cr !== 0 ? cr & -cr : lu.transition !== null ? (Ns === 0 && (Ns = Ql()), Ns) : (n = Ct, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Qo(n.type)), n) : 1;
  }
  function Sa(n, r, l, o) {
    if (50 < go) throw go = 0, So = null, Error(A(185));
    sl(n, l, o), (!(dt & 2) || n !== Fn) && (n === Fn && (!(dt & 2) && (gu |= l), Yn === 4 && kl(n, cr)), er(n, o), l === 1 && dt === 0 && !(r.mode & 1) && (yo = Ut() + 500, ss && Lr()));
  }
  function er(n, r) {
    var l = n.callbackNode;
    Au(n, r);
    var o = fi(n, n === Fn ? cr : 0);
    if (o === 0) l !== null && on(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && on(l), r === 1) n.tag === 0 ? cd(Fs.bind(null, n)) : hl(Fs.bind(null, n)), iy(function() {
        !(dt & 6) && Lr();
      }), l = null;
      else {
        switch (Io(o)) {
          case 1:
            l = Ge;
            break;
          case 4:
            l = ci;
            break;
          case 16:
            l = Ni;
            break;
          case 536870912:
            l = zi;
            break;
          default:
            l = Ni;
        }
        l = lh(l, th.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function th(n, r) {
    if (Su = -1, Ns = 0, dt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Eo() && n.callbackNode !== l) return null;
    var o = fi(n, n === Fn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = uf(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = nh();
      (Fn !== n || cr !== r) && (Wi = null, yo = Ut() + 500, Cu(n, r));
      do
        try {
          fy();
          break;
        } catch (E) {
          lf(n, E);
        }
      while (!0);
      yd(), nf.current = d, dt = c, wn !== null ? r = 0 : (Fn = null, cr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ai(n), c !== 0 && (o = c, r = zs(n, c))), r === 1) throw l = mu, Cu(n, 0), kl(n, o), er(n, Ut()), l;
      if (r === 6) kl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !As(c) && (r = uf(n, o), r === 2 && (d = Ai(n), d !== 0 && (o = d, r = zs(n, d))), r === 1)) throw l = mu, Cu(n, 0), kl(n, o), er(n, Ut()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Ru(n, na, Wi);
            break;
          case 3:
            if (kl(n, o), (o & 130023424) === o && (r = Hd + 500 - Ut(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                en(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = gc(Ru.bind(null, n, na, Wi), r);
              break;
            }
            Ru(n, na, Wi);
            break;
          case 4:
            if (kl(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ut() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * eh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = gc(Ru.bind(null, n, na, Wi), o);
              break;
            }
            Ru(n, na, Wi);
            break;
          case 5:
            Ru(n, na, Wi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return er(n, Ut()), n.callbackNode === l ? th.bind(null, n) : null;
  }
  function zs(n, r) {
    var l = mo;
    return n.current.memoizedState.isDehydrated && (Cu(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = na, na = l, r !== null && Us(r)), n;
  }
  function Us(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function As(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ka(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function kl(n, r) {
    for (r &= ~Os, r &= ~gu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fs(n) {
    if (dt & 6) throw Error(A(327));
    Eo();
    var r = fi(n, 0);
    if (!(r & 1)) return er(n, Ut()), null;
    var l = uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Ai(n);
      o !== 0 && (r = o, l = zs(n, o));
    }
    if (l === 1) throw l = mu, Cu(n, 0), kl(n, r), er(n, Ut()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ru(n, na, Wi), er(n, Ut()), null;
  }
  function af(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (yo = Ut() + 500, ss && Lr());
    }
  }
  function Eu(n) {
    Dl !== null && Dl.tag === 0 && !(dt & 6) && Eo();
    var r = dt;
    dt |= 1;
    var l = xr.transition, o = Ct;
    try {
      if (xr.transition = null, Ct = 1, n) return n();
    } finally {
      Ct = o, xr.transition = l, dt = r, !(dt & 6) && Lr();
    }
  }
  function Vd() {
    ya = ho.current, Gt(ho);
  }
  function Cu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (Rc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mi();
          break;
        case 3:
          lo(), Gt(Nn), Gt(yn), hs();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          lo();
          break;
        case 13:
          Gt(pn);
          break;
        case 19:
          Gt(pn);
          break;
        case 10:
          gd(o.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      l = l.return;
    }
    if (Fn = n, wn = n = Ol(n.current, null), cr = ya = r, Yn = 0, mu = null, Os = gu = yu = 0, na = mo = null, uu !== null) {
      for (r = 0; r < uu.length; r++) if (l = uu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      uu = null;
    }
    return n;
  }
  function lf(n, r) {
    do {
      var l = wn;
      try {
        if (yd(), xe.current = Bt, xc) {
          for (var o = qe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          xc = !1;
        }
        if (gt = 0, Bn = qt = qe = null, ms = !1, ys = 0, hu.current = null, l === null || l.return === null) {
          Yn = 1, mu = r, wn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var I = Q.alternate;
              I ? (Q.updateQueue = I.updateQueue, Q.memoizedState = I.memoizedState, Q.lanes = I.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = Ld(m);
            if (ce !== null) {
              ce.flags &= -257, Yv(ce, m, E, d, r), ce.mode & 1 && Od(d, z, r), r = ce, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Od(d, z, r), Pd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (sn && E.mode & 1) {
            var _n = Ld(m);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), Yv(_n, m, E, d, r), fs(_l(T, E));
              break e;
            }
          }
          d = T = _l(T, E), Yn !== 4 && (Yn = 2), mo === null ? mo = [d] : mo.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Ts(d, T, r);
                Fv(d, D);
                break e;
              case 1:
                E = T;
                var _ = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Fa === null || !Fa.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = $v(d, E, r);
                  Fv(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (Re) {
        r = Re, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = nf.current;
    return nf.current = Bt, n === null ? Bt : n;
  }
  function Pd() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Fn === null || !(yu & 268435455) && !(gu & 268435455) || kl(Fn, cr);
  }
  function uf(n, r) {
    var l = dt;
    dt |= 2;
    var o = nh();
    (Fn !== n || cr !== r) && (Wi = null, Cu(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        lf(n, c);
      }
    while (!0);
    if (yd(), dt = l, nf.current = o, wn !== null) throw Error(A(261));
    return Fn = null, cr = 0, Yn;
  }
  function cy() {
    for (; wn !== null; ) Bd(wn);
  }
  function fy() {
    for (; wn !== null && !Cr(); ) Bd(wn);
  }
  function Bd(n) {
    var r = Yd(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : wn = r, hu.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, wn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, wn = null;
          return;
        }
      } else if (l = Ud(l, r, ya), l !== null) {
        wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function Ru(n, r, l) {
    var o = Ct, c = xr.transition;
    try {
      xr.transition = null, Ct = 1, dy(n, r, l, o);
    } finally {
      xr.transition = c, Ct = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      Eo();
    while (Dl !== null);
    if (dt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($o(n, d), n === Fn && (wn = Fn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || rf || (rf = !0, lh(Ni, function() {
      return Eo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = xr.transition, xr.transition = null;
      var m = Ct;
      Ct = 1;
      var E = dt;
      dt |= 4, hu.current = null, sy(n, l), Kv(l, n), Sv(ls), cl = !!tu, ls = tu = null, n.current = l, Ds(l), Ga(), dt = E, Ct = m, xr.transition = d;
    } else n.current = l;
    if (rf && (rf = !1, Dl = n, Ms = c), d = n.pendingLanes, d === 0 && (Fa = null), Po(l.stateNode), er(n, Ut()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bl) throw bl = !1, n = Ls, Ls = null, n;
    return Ms & 1 && n.tag !== 0 && Eo(), d = n.pendingLanes, d & 1 ? n === So ? go++ : (go = 0, So = n) : go = 0, Lr(), null;
  }
  function Eo() {
    if (Dl !== null) {
      var n = Io(Ms), r = xr.transition, l = Ct;
      try {
        if (xr.transition = null, Ct = 16 > n ? 16 : n, Dl === null) var o = !1;
        else {
          if (n = Dl, Dl = null, Ms = 0, dt & 6) throw Error(A(331));
          var c = dt;
          for (dt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var Q = ve;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vo(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, ve = W;
                    else for (; ve !== null; ) {
                      Q = ve;
                      var I = Q.sibling, ce = Q.return;
                      if (qv(Q), Q === z) {
                        ve = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = ce, ve = I;
                        break;
                      }
                      ve = ce;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var _n = Ee.sibling;
                      Ee.sibling = null, Ee = _n;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  vo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ve = D;
                break e;
              }
              ve = d.return;
            }
          }
          var _ = n.current;
          for (ve = _; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ve = L;
            else e: for (m = _; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zc(9, E);
                }
              } catch (Re) {
                gn(E, E.return, Re);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var q = E.sibling;
              if (q !== null) {
                q.return = E.return, ve = q;
                break e;
              }
              ve = E.return;
            }
          }
          if (dt = c, Lr(), Ir && typeof Ir.onPostCommitFiberRoot == "function") try {
            Ir.onPostCommitFiberRoot(ll, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ct = l, xr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = _l(l, r), r = Ts(n, r, 1), n = Cl(n, r, 1), r = en(), n !== null && (sl(n, 1, r), er(n, r));
  }
  function gn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fa === null || !Fa.has(o))) {
          n = _l(l, n), n = $v(r, n, 1), r = Cl(r, n, 1), n = en(), r !== null && (sl(r, 1, n), er(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function $d(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = en(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (cr & l) === l && (Yn === 4 || Yn === 3 && (cr & 130023424) === cr && 500 > Ut() - Hd ? Cu(n, 0) : Os |= l), er(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : r = 1);
    var l = en();
    n = gi(n, r), n !== null && (sl(n, r, l), er(n, l));
  }
  function py(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function vy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var Yd;
  Yd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Nn.current) Zn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Zn = !1, Jc(n, r, l);
      Zn = !!(n.flags & 131072);
    }
    else Zn = !1, sn && r.flags & 1048576 && Ov(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ua(n, r), n = r.pendingProps;
        var c = pa(r, yn.current);
        ao(r, l), c = ze(null, r, o, n, c, l);
        var d = Rl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, au(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, El(r), c.updater = $c, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && fd(r), Tn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = Zr(o, n), c) {
            case 0:
              r = Wc(null, r, o, n, l);
              break e;
            case 1:
              r = uy(null, r, o, n, l);
              break e;
            case 11:
              r = Qc(null, r, o, n, l);
              break e;
            case 14:
              r = ea(null, r, o, Zr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Zr(o, c), Wc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Zr(o, c), uy(n, r, o, c, l);
      case 3:
        e: {
          if (Gc(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), wc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(A(423)), r), r = fo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(A(424)), r), r = fo(n, r, o, l, c);
            break e;
          } else for (Kr = Ja(r.stateNode.containerInfo.firstChild), Xr = r, sn = !0, ei = null, l = ur(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Yi(), o === c) {
              r = or(n, r, l);
              break e;
            }
            Tn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Td(r), n === null && hd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, nu(o, c) ? m = null : d !== null && nu(o, d) && (r.flags |= 32), ws(n, r), Tn(n, r, m, l), r.child;
      case 6:
        return n === null && hd(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ti(r, null, o, l) : Tn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Zr(o, c), Qc(n, r, o, c, l);
      case 7:
        return Tn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Zt(te, o._currentValue), o._currentValue = m, d !== null) if (Ka(d.value, m)) {
            if (d.children === c.children && !Nn.current) {
              r = or(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Ii(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Sd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Sd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          Tn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ao(r, l), c = Pt(c), o = o(c), r.flags |= 1, Tn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Zr(o, r.pendingProps), c = Zr(o.type, c), ea(n, r, o, c, l);
      case 15:
        return pu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Zr(o, c), Ua(n, r), r.tag = 1, zn(o) ? (n = !0, au(r)) : n = !1, ao(r, l), Bv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ta(n, r, l);
      case 22:
        return Ke(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function lh(n, r) {
    return nn(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === $t) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function Ol(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function of(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Id(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case st:
        return Ll(l.children, c, d, r);
      case He:
        m = 8, c |= 8;
        break;
      case Sn:
        return n = ja(12, l, r, c | 2), n.elementType = Sn, n.lanes = d, n;
      case mt:
        return n = ja(13, l, r, c), n.elementType = mt, n.lanes = d, n;
      case Me:
        return n = ja(19, l, r, c), n.elementType = Me, n.lanes = d, n;
      case tt:
        return Co(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Mt:
            m = 10;
            break e;
          case fn:
            m = 9;
            break e;
          case $t:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case vt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ll(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Co(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = tt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Tu(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function Qd(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function uh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function sf(n, r, l, o, c, d, m, E, T) {
    return n = new uh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, El(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return it;
    n = n._reactInternals;
    e: {
      if (ie(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return kv(n, l, r);
    }
    return r;
  }
  function Wd(n, r, l, o, c, d, m, E, T) {
    return n = sf(l, o, !0, n, c, d, m, E, T), n.context = sh(null), l = n.current, o = en(), c = ga(l), d = Ii(o, c), d.callback = r ?? null, Cl(l, d, c), n.current.lanes = c, sl(n, c, o), er(n, o), n;
  }
  function cf(n, r, l, o) {
    var c = r.current, d = en(), m = ga(c);
    return l = sh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ii(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Cl(c, r, m), n !== null && (Sa(n, c, m, d), Tc(n, c, m)), m;
  }
  function ff(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ch(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function df(n, r) {
    ch(n, r), (n = n.alternate) && ch(n, r);
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function pf(n) {
    this._internalRoot = n;
  }
  Gi.prototype.render = pf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    cf(n, r, null, null);
  }, Gi.prototype.unmount = pf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Eu(function() {
        cf(null, n, null, null);
      }), r[Bi] = null;
    }
  };
  function Gi(n) {
    this._internalRoot = n;
  }
  Gi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = di();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qa.length && r !== 0 && r < qa[l].priority; l++) ;
      qa.splice(l, 0, n), l === 0 && ju(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function fh() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = ff(m);
          d.call(z);
        };
      }
      var m = Wd(r, o, n, 0, null, !1, !1, "", fh);
      return n._reactRootContainer = m, n[Bi] = m.current, as(n.nodeType === 8 ? n.parentNode : n), Eu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = ff(T);
        E.call(z);
      };
    }
    var T = sf(n, 0, !1, null, null, !1, !1, "", fh);
    return n._reactRootContainer = T, n[Bi] = T.current, as(n.nodeType === 8 ? n.parentNode : n), Eu(function() {
      cf(r, T, l, o);
    }), T;
  }
  function hf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = ff(m);
          E.call(T);
        };
      }
      cf(r, m, n, c);
    } else m = yy(l, r, n, c, o);
    return ff(m);
  }
  Fu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Qr(r.pendingLanes);
          l !== 0 && (Yo(r, l | 1), er(r, Ut()), !(dt & 6) && (yo = Ut() + 500, Lr()));
        }
        break;
      case 13:
        Eu(function() {
          var o = gi(n, 1);
          if (o !== null) {
            var c = en();
            Sa(o, n, 1, c);
          }
        }), df(n, 1);
    }
  }, Rt = function(n) {
    if (n.tag === 13) {
      var r = gi(n, 134217728);
      if (r !== null) {
        var l = en();
        Sa(r, n, 134217728, l);
      }
      df(n, 134217728);
    }
  }, ic = function(n) {
    if (n.tag === 13) {
      var r = ga(n), l = gi(n, r);
      if (l !== null) {
        var o = en();
        Sa(l, n, r, o);
      }
      df(n, r);
    }
  }, di = function() {
    return Ct;
  }, Pe = function(n, r) {
    var l = Ct;
    try {
      return Ct = n, r();
    } finally {
      Ct = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = $i(o);
              if (!c) throw Error(A(90));
              Qn(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Er(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, $l = af, Yl = Eu;
  var gy = { usingClientEntryPoint: !1, Events: [os, _e, $i, xa, Oi, af] }, Ro = { findFiberByHostInstance: ru, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Ro.bundleType, version: Ro.version, rendererPackageName: Ro.rendererPackageName, rendererConfig: Ro.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ze(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ro.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mf.isDisabled && mf.supportsFiber) try {
      ll = mf.inject(Sy), Ir = mf;
    } catch {
    }
  }
  return Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r)) throw Error(A(200));
    return oh(n, r, null, l);
  }, Ya.createRoot = function(n, r) {
    if (!qd(n)) throw Error(A(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = sf(n, 1, !1, null, null, l, !1, o, c), n[Bi] = r.current, as(n.nodeType === 8 ? n.parentNode : n), new pf(r);
  }, Ya.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Ze(r), n = n === null ? null : n.stateNode, n;
  }, Ya.flushSync = function(n) {
    return Eu(n);
  }, Ya.hydrate = function(n, r, l) {
    if (!vf(r)) throw Error(A(200));
    return hf(null, n, r, !0, l);
  }, Ya.hydrateRoot = function(n, r, l) {
    if (!qd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Wd(r, null, n, 1, l ?? null, c, !1, d, m), n[Bi] = r.current, as(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Gi(r);
  }, Ya.render = function(n, r, l) {
    if (!vf(r)) throw Error(A(200));
    return hf(null, n, r, !1, l);
  }, Ya.unmountComponentAtNode = function(n) {
    if (!vf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Eu(function() {
      hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Bi] = null;
      });
    }), !0) : !1;
  }, Ya.unstable_batchedUpdates = af, Ya.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!vf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return hf(n, r, l, !1, o);
  }, Ya.version = "18.3.1-next-f1338f8080-20240426", Ya;
}
var Ia = {}, aT;
function iD() {
  if (aT) return Ia;
  aT = 1;
  var K = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return K.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var le = Qm(), A = uT(), ut = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _t = !1;
    function xt(e) {
      _t = e;
    }
    function bt(e) {
      if (!_t) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        pt("warn", e, a);
      }
    }
    function S(e) {
      if (!_t) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        pt("error", e, a);
      }
    }
    function pt(e, t, a) {
      {
        var i = ut.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var be = 0, pe = 1, Be = 2, Z = 3, Fe = 4, ue = 5, we = 6, ot = 7, Hn = 8, rn = 9, rt = 10, Ne = 11, kt = 12, Ce = 13, st = 14, He = 15, Sn = 16, Mt = 17, fn = 18, $t = 19, mt = 21, Me = 22, At = 23, vt = 24, tt = 25, B = !0, me = !1, re = !1, b = !1, $ = !1, De = !0, Ve = !0, $e = !0, nt = !0, Et = /* @__PURE__ */ new Set(), Qe = {}, yt = {};
    function Vt(e, t) {
      bn(e, t), bn(e + "Capture", t);
    }
    function bn(e, t) {
      Qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qe[e] = t;
      {
        var a = e.toLowerCase();
        yt[a] = e, e === "onDoubleClick" && (yt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Et.add(t[i]);
    }
    var Qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function Dn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Sr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function kn(e, t) {
      if (Sr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function oa(e) {
      if (Sr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    function Qa(e, t) {
      if (Sr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function br(e, t) {
      if (Sr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function Pn(e) {
      if (Sr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    function Wn(e) {
      if (Sr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    var Gn = 0, Er = 1, Wa = 2, On = 3, ar = 4, $r = 5, ki = 6, sa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = sa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + sa + "][" + J + "]*$"), Je = {}, Nt = {};
    function an(e) {
      return rr.call(Nt, e) ? !0 : rr.call(Je, e) ? !1 : Oe.test(e) ? (Nt[e] = !0, !0) : (Je[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function ln(e, t, a) {
      return t !== null ? t.type === Gn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === Gn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function qn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case ar:
            return t === !1;
          case $r:
            return isNaN(t);
          case ki:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Wa || t === On || t === ar, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      zt[e] = new Yt(
        e,
        Gn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      zt[t] = new Yt(
        t,
        Er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        Wa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        Wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      zt[e] = new Yt(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Yt(
        e,
        On,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Yt(
        e,
        ar,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Yt(
        e,
        ki,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        $r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, xa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, xa);
      zt[t] = new Yt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, xa);
      zt[t] = new Yt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, xa);
      zt[t] = new Yt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Oi = "xlinkHref";
    zt[Oi] = new Yt(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var $l = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Yl = !1;
    function Li(e) {
      !Yl && $l.test(e) && (Yl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Il(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        kn(a, t), i.sanitizeURL && Li("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ar) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : qn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (qn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return qn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ui(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return kn(a, t), u === "" + a ? a : u;
      }
    }
    function fa(e, t, a, i) {
      var u = tn(t);
      if (!ln(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
          if (an(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (kn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, w;
          x === On || x === ar && a === !0 ? w = "" : (kn(a, y), w = "" + a, u.sanitizeURL && Li(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ir = Symbol.for("react.element"), da = Symbol.for("react.portal"), Yr = Symbol.for("react.fragment"), oi = Symbol.for("react.strict_mode"), si = Symbol.for("react.profiler"), Mi = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), ct = Symbol.for("react.scope"), Ze = Symbol.for("react.debug_trace_mode"), En = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), Cr = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, Ut = "@@iterator";
    function dn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[Ut];
      return typeof t == "function" ? t : null;
    }
    var Ge = Object.assign, ci = 0, Ni, nc, zi, ll, Ir, Po, Dr;
    function Bo() {
    }
    Bo.__reactDisabledLog = !0;
    function rc() {
      {
        if (ci === 0) {
          Ni = console.log, nc = console.info, zi = console.warn, ll = console.error, Ir = console.group, Po = console.groupCollapsed, Dr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Bo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ci++;
      }
    }
    function ac() {
      {
        if (ci--, ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ge({}, e, {
              value: Ni
            }),
            info: Ge({}, e, {
              value: nc
            }),
            warn: Ge({}, e, {
              value: zi
            }),
            error: Ge({}, e, {
              value: ll
            }),
            group: Ge({}, e, {
              value: Ir
            }),
            groupCollapsed: Ge({}, e, {
              value: Po
            }),
            groupEnd: Ge({}, e, {
              value: Dr
            })
          });
        }
        ci < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ui = ut.ReactCurrentDispatcher, ul;
    function Qr(e, t, a) {
      {
        if (ul === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ul = i && i[1] || "";
          }
        return `
` + ul + e;
      }
    }
    var fi = !1, ol;
    {
      var Au = typeof WeakMap == "function" ? WeakMap : Map;
      ol = new Au();
    }
    function Ai(e, t) {
      if (!e || fi)
        return "";
      {
        var a = ol.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      fi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ui.current, Ui.current = null, rc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && ol.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        fi = !1, Ui.current = s, ac(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Qr(w) : "";
      return typeof e == "function" && ol.set(e, N), N;
    }
    function Ql(e, t, a) {
      return Ai(e, !0);
    }
    function Wl(e, t, a) {
      return Ai(e, !1);
    }
    function sl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $o(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ai(e, sl(e));
      if (typeof e == "string")
        return Qr(e);
      switch (e) {
        case ne:
          return Qr("Suspense");
        case ie:
          return Qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return Wl(e.render);
          case at:
            return $o(e.type, t, a);
          case Ye: {
            var i = e, u = i._payload, s = i._init;
            try {
              return $o(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Yo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return Qr(e.type);
        case Sn:
          return Qr("Lazy");
        case Ce:
          return Qr("Suspense");
        case $t:
          return Qr("SuspenseList");
        case be:
        case Be:
        case He:
          return Wl(e.type);
        case Ne:
          return Wl(e.type.render);
        case pe:
          return Ql(e.type);
        default:
          return "";
      }
    }
    function Ct(e) {
      try {
        var t = "", a = e;
        do
          t += Yo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Io(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Yr:
          return "Fragment";
        case da:
          return "Portal";
        case si:
          return "Profiler";
        case oi:
          return "StrictMode";
        case ne:
          return "Suspense";
        case ie:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Fu(t) + ".Consumer";
          case Mi:
            var a = e;
            return Fu(a._context) + ".Provider";
          case Y:
            return Io(e, e.render, "ForwardRef");
          case at:
            var i = e.displayName || null;
            return i !== null ? i : Rt(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Rt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ic(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function di(e) {
      return e.displayName || "Context";
    }
    function Pe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case vt:
          return "Cache";
        case rn:
          var i = a;
          return di(i) + ".Consumer";
        case rt:
          var u = a;
          return di(u._context) + ".Provider";
        case fn:
          return "DehydratedFragment";
        case Ne:
          return ic(a, a.render, "ForwardRef");
        case ot:
          return "Fragment";
        case ue:
          return a;
        case Fe:
          return "Portal";
        case Z:
          return "Root";
        case we:
          return "Text";
        case Sn:
          return Rt(a);
        case Hn:
          return a === oi ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case kt:
          return "Profiler";
        case mt:
          return "Scope";
        case Ce:
          return "Suspense";
        case $t:
          return "SuspenseList";
        case tt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case pe:
        case be:
        case Mt:
        case Be:
        case st:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gl = ut.ReactDebugCurrentFrame, Xn = null, Wr = !1;
    function kr() {
      {
        if (Xn === null)
          return null;
        var e = Xn._debugOwner;
        if (e !== null && typeof e < "u")
          return Pe(e);
      }
      return null;
    }
    function pi() {
      return Xn === null ? "" : Ct(Xn);
    }
    function mn() {
      Gl.getCurrentStack = null, Xn = null, Wr = !1;
    }
    function It(e) {
      Gl.getCurrentStack = e === null ? null : pi, Xn = e, Wr = !1;
    }
    function qa() {
      return Xn;
    }
    function ba(e) {
      Wr = e;
    }
    function Rr(e) {
      return "" + e;
    }
    function Or(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Wn(e), e;
        default:
          return "";
      }
    }
    var Gf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ju(e, t) {
      Gf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ql(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Hu(e) {
      return e._valueTracker;
    }
    function Vu(e) {
      e._valueTracker = null;
    }
    function Xl(e) {
      var t = "";
      return e && (ql(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Da(e) {
      var t = ql(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Wn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Wn(p), i = "" + p;
          },
          stopTracking: function() {
            Vu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ka(e) {
      Hu(e) || (e._valueTracker = Da(e));
    }
    function cl(e) {
      if (!e)
        return !1;
      var t = Hu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Xl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Fi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Pu = !1, fl = !1, ji = !1, Bu = !1;
    function Qo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Oa(e, t) {
      var a = e, i = t.checked, u = Ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function $u(e, t) {
      ju("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !fl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), fl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Pu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Pu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Or(t.value != null ? t.value : i),
        controlled: Qo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && fa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Qo(t);
        !a._wrapperState.controlled && i && !Bu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bu = !0), a._wrapperState.controlled && !i && !ji && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ji = !0);
      }
      h(e, t);
      var u = Or(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Rr(u)) : a.value !== Rr(u) && (a.value = Rr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? he(a, t.type, u) : t.hasOwnProperty("defaultValue") && he(a, t.type, Or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Rr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        kn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Dh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            cl(f), C(f, p);
          }
        }
      }
    }
    function he(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Fi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Rr(e._wrapperState.initialValue) : e.defaultValue !== Rr(a) && (e.defaultValue = Rr(a)));
    }
    var se = !1, Ue = !1, et = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? le.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ue || (Ue = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (et || (et = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !se && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), se = !0);
    }
    function Qt(e, t) {
      t.value != null && e.setAttribute("value", Rr(Or(t.value)));
    }
    var Wt = Array.isArray;
    function Xe(e) {
      return Wt(e);
    }
    var Jt;
    Jt = !1;
    function Cn() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Kl = ["value", "defaultValue"];
    function Wo(e) {
      {
        ju("select", e);
        for (var t = 0; t < Kl.length; t++) {
          var a = Kl[t];
          if (e[a] != null) {
            var i = Xe(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cn());
          }
        }
      }
    }
    function Hi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Rr(Or(a)), x = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          x === null && !u[w].disabled && (x = u[w]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function Jl(e, t) {
      return Ge({}, t, {
        value: void 0
      });
    }
    function Go(e, t) {
      var a = e;
      Wo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Hi(a, !!t.multiple, i, !1) : t.defaultValue != null && Hi(a, !!t.multiple, t.defaultValue, !0);
    }
    function lc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Hi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Hi(a, !!t.multiple, t.defaultValue, !0) : Hi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Hi(a, !!t.multiple, i, !1);
    }
    var Zp = !1;
    function uc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      ju("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), Zp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Xe(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Or(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Or(t.value), u = Or(t.defaultValue);
      if (i != null) {
        var s = Rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Rr(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Wm(e, t) {
      tv(e, t);
    }
    var Xa = "http://www.w3.org/1999/xhtml", Gm = "http://www.w3.org/1998/Math/MathML", Kf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Kf;
        case "math":
          return Gm;
        default:
          return Xa;
      }
    }
    function oc(e, t) {
      return e == null || e === Xa ? Jf(t) : e === Kf && t === "foreignObject" ? Xa : e;
    }
    var qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, rv = qm(function(e, t) {
      if (e.namespaceURI === Kf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Vi = 3, Ln = 8, Pi = 9, qo = 11, dl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Yu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var iv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Yu).forEach(function(e) {
      iv.forEach(function(t) {
        Yu[av(t, e)] = Yu[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Yu.hasOwnProperty(e) && Yu[e]) ? t + "px" : (br(t, e), ("" + t).trim());
    }
    var lv = /([A-Z])/g, Iu = /^ms-/;
    function Km(e) {
      return e.replace(lv, "-$1").toLowerCase().replace(Iu, "-ms-");
    }
    var uv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, sv = /-(.)/g, Qu = /;\s*$/, vi = {}, Zf = {}, Xo = !1, cv = !1, fv = function(e) {
        return e.replace(sv, function(t, a) {
          return a.toUpperCase();
        });
      }, ed = function(e) {
        vi.hasOwnProperty(e) && vi[e] || (vi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fv(e.replace(ov, "ms-"))
        ));
      }, td = function(e) {
        vi.hasOwnProperty(e) && vi[e] || (vi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dv = function(e, t) {
        Zf.hasOwnProperty(t) && Zf[t] || (Zf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Qu, "")));
      }, pv = function(e, t) {
        Xo || (Xo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        cv || (cv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      uv = function(e, t) {
        e.indexOf("-") > -1 ? ed(e) : Jm.test(e) ? td(e) : Qu.test(t) && dv(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var Zm = uv;
    function ey(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Km(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Zm(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ty(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function mv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ka(e, t) {
      {
        if (!t)
          return;
        var a = mv(e), i = mv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ty(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Ko = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, yv = Ge({
      menuitem: !0
    }, Ko), gv = "__html";
    function fc(e, t) {
      if (t) {
        if (yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function pl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Wu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Gu = {}, qu = new RegExp("^(aria)-[" + J + "]*$"), nd = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function Jo(e, t) {
      {
        if (rr.call(Gu, t) && Gu[t])
          return !0;
        if (nd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Gu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Gu[t] = !0, !0;
        }
        if (qu.test(t)) {
          var u = t.toLowerCase(), s = Sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Gu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Gu[t] = !0, !0;
        }
      }
      return !0;
    }
    function rd(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Jo(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ev(e, t) {
      pl(e, t) || rd(e, t);
    }
    var Zo = !1;
    function Xu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Zo && (Zo = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var dc = function() {
    };
    {
      var Tr = {}, es = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + J + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + J + "]*$");
      dc = function(e, t, a, i) {
        if (rr.call(Tr, t) && Tr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Tr[t] = !0, !0;
          if (es.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Tr[t] = !0, !0;
        } else if (es.test(t))
          return Cv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tr[t] = !0, !0;
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tr[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === Gn;
        if (Wu.hasOwnProperty(u)) {
          var g = Wu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Tr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Tr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === On && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = dc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _v(e, t, a) {
      pl(e, t) || wv(e, t, a);
    }
    var ad = 1, hi = 2, Zl = 4, id = ad | hi | Zl, ts = null;
    function ny(e) {
      ts !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ts = e;
    }
    function ns() {
      ts === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ts = null;
    }
    function ry(e) {
      return e === ts;
    }
    function pc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var vc = null, jt = null, vl = null;
    function rs(e) {
      var t = _o(e);
      if (t) {
        if (typeof vc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          vc(t.stateNode, t.type, i);
        }
      }
    }
    function as(e) {
      vc = e;
    }
    function ld(e) {
      jt ? vl ? vl.push(e) : vl = [e] : jt = e;
    }
    function ud() {
      return jt !== null || vl !== null;
    }
    function Ku() {
      if (jt) {
        var e = jt, t = vl;
        if (jt = null, vl = null, rs(e), t)
          for (var a = 0; a < t.length; a++)
            rs(t[a]);
      }
    }
    var is = function(e, t) {
      return e(t);
    }, eu = function() {
    }, hc = !1;
    function ay() {
      var e = ud();
      e && (eu(), Ku());
    }
    function xv(e, t, a) {
      if (hc)
        return e(t, a);
      hc = !0;
      try {
        return is(e, t, a);
      } finally {
        hc = !1, ay();
      }
    }
    function bv(e, t, a) {
      is = e, eu = a;
    }
    function mc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function yc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && mc(t));
        default:
          return !1;
      }
    }
    function tu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Dh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (yc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (Qn)
      try {
        var nu = {};
        Object.defineProperty(nu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", nu, nu), window.removeEventListener("test", nu, nu);
      } catch {
        ls = !1;
      }
    function gc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Dv = gc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Sc = document.createElement("react");
      Dv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, w = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          Sc.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Le() {
          x = !0, j(), a.apply(i, ae), w = !1;
        }
        var Te, wt = !1, ht = !1;
        function k(O) {
          if (Te = O.error, wt = !0, Te === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Sc.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), Sc.dispatchEvent(g), U && Object.defineProperty(window, "event", U), x && w && (wt ? ht && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", k), !x)
          return j(), gc.apply(this, arguments);
      };
    }
    var iy = Dv, Ju = !1, Zu = null, Ja = !1, Ec = null, eo = {
      onError: function(e) {
        Ju = !0, Zu = e;
      }
    };
    function La(e, t, a, i, u, s, f, p, v) {
      Ju = !1, Zu = null, iy.apply(eo, arguments);
    }
    function us(e, t, a, i, u, s, f, p, v) {
      if (La.apply(this, arguments), Ju) {
        var y = sd();
        Ja || (Ja = !0, Ec = y);
      }
    }
    function Bi() {
      if (Ja) {
        var e = Ec;
        throw Ja = !1, Ec = null, e;
      }
    }
    function od() {
      return Ju;
    }
    function sd() {
      if (Ju) {
        var e = Zu;
        return Ju = !1, Zu = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function to(e) {
      return e._reactInternals;
    }
    function ru(e) {
      return e._reactInternals !== void 0;
    }
    function os(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), $i = (
      /*                */
      1
    ), Mn = (
      /*                    */
      2
    ), ft = (
      /*                       */
      4
    ), qr = (
      /*                */
      16
    ), Gt = (
      /*                 */
      32
    ), Zt = (
      /*                     */
      64
    ), it = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), Nn = (
      /*                          */
      512
    ), Ma = (
      /*                     */
      1024
    ), pa = (
      /*                      */
      2048
    ), zn = (
      /*                    */
      4096
    ), mi = (
      /*                   */
      8192
    ), Cc = (
      /*             */
      16384
    ), kv = (
      /*               */
      32767
    ), au = (
      /*                   */
      32768
    ), Na = (
      /*                */
      65536
    ), Za = (
      /* */
      131072
    ), ss = (
      /*                       */
      1048576
    ), cs = (
      /*                    */
      2097152
    ), hl = (
      /*                 */
      4194304
    ), cd = (
      /*                */
      8388608
    ), Lr = (
      /*               */
      16777216
    ), ml = (
      /*              */
      33554432
    ), yl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ft | Ma | 0
    ), no = Mn | ft | qr | Gt | Nn | zn | mi, gl = ft | Zt | Nn | mi, lr = pa | qr, Un = hl | cd | cs, iu = ut.ReactCurrentOwner;
    function Mr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Mn | zn)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function yi(e) {
      if (e.tag === Ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Sl(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return Mr(e) === e;
    }
    function fd(e) {
      {
        var t = iu.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = to(e);
      return u ? Mr(u) === u : !1;
    }
    function Rc(e) {
      if (Mr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Xr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Mr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Rc(s), e;
            if (v === u)
              return Rc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = Xr(e);
      return t !== null ? sn(t) : null;
    }
    function sn(e) {
      if (e.tag === ue || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ei(e) {
      var t = Xr(e);
      return t !== null ? dd(t) : null;
    }
    function dd(e) {
      if (e.tag === ue || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Fe) {
          var a = dd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var pd = A.unstable_scheduleCallback, vd = A.unstable_cancelCallback, hd = A.unstable_shouldYield, Lv = A.unstable_requestPaint, Rn = A.unstable_now, Mv = A.unstable_getCurrentPriorityLevel, Yi = A.unstable_ImmediatePriority, fs = A.unstable_UserBlockingPriority, lu = A.unstable_NormalPriority, ds = A.unstable_LowPriority, ro = A.unstable_IdlePriority, Nv = A.unstable_yieldValue, zv = A.unstable_setDisableYieldValue, ti = null, ur = null, te = null, va = !1, wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function md(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = Ge({}, e, {
          getLaneLabelMap: Ed,
          injectProfilingHooks: uu
        })), ti = t.inject(e), ur = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(ti, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & it) === it;
          if ($e) {
            var i;
            switch (t) {
              case ta:
                i = Yi;
                break;
              case Ua:
                i = fs;
                break;
              case or:
                i = lu;
                break;
              case Jc:
                i = ro;
                break;
              default:
                i = lu;
                break;
            }
            ur.onCommitFiberRoot(ti, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(ti, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ao(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(ti, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pt(e) {
      if (typeof Nv == "function" && (zv(e), xt(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(ti, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function uu(e) {
      te = e;
    }
    function Ed() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xd; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function gi() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function za(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function El() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Av(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Ii() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Cl(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Tc() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function wc() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Cd(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function io() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Si(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function ps(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function vs(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function ou() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Rd(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function lo() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function Td(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function wd() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function pn() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function _c(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function _d(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function hs(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var xe = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), gt = (
      /*                    */
      2
    ), qe = (
      /*               */
      8
    ), qt = (
      /*              */
      16
    ), Bn = Math.clz32 ? Math.clz32 : ys, xc = Math.log, ms = Math.LN2;
    function ys(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (xc(t) / ms | 0) | 0;
    }
    var xd = 31, V = (
      /*                        */
      0
    ), An = (
      /*                          */
      0
    ), ze = (
      /*                        */
      1
    ), Rl = (
      /*    */
      2
    ), Kn = (
      /*             */
      4
    ), Jn = (
      /*            */
      8
    ), Jr = (
      /*                     */
      16
    ), su = (
      /*                */
      32
    ), Tl = (
      /*                       */
      4194240
    ), uo = (
      /*                        */
      64
    ), bc = (
      /*                        */
      128
    ), Dc = (
      /*                        */
      256
    ), kc = (
      /*                        */
      512
    ), Oc = (
      /*                        */
      1024
    ), Lc = (
      /*                        */
      2048
    ), Mc = (
      /*                        */
      4096
    ), Nc = (
      /*                        */
      8192
    ), cu = (
      /*                        */
      16384
    ), zc = (
      /*                       */
      32768
    ), oo = (
      /*                       */
      65536
    ), so = (
      /*                       */
      131072
    ), Uc = (
      /*                       */
      262144
    ), gs = (
      /*                       */
      524288
    ), Ac = (
      /*                       */
      1048576
    ), Fc = (
      /*                       */
      2097152
    ), Ss = (
      /*                            */
      130023424
    ), fu = (
      /*                             */
      4194304
    ), Es = (
      /*                             */
      8388608
    ), jc = (
      /*                             */
      16777216
    ), Hc = (
      /*                             */
      33554432
    ), Vc = (
      /*                             */
      67108864
    ), jv = fu, co = (
      /*          */
      134217728
    ), Hv = (
      /*                          */
      268435455
    ), Cs = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), ha = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & ze)
          return "Sync";
        if (e & Rl)
          return "InputContinuousHydration";
        if (e & Kn)
          return "InputContinuous";
        if (e & Jn)
          return "DefaultHydration";
        if (e & Jr)
          return "Default";
        if (e & su)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & Ss)
          return "Retry";
        if (e & co)
          return "SelectiveHydration";
        if (e & Cs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & ha)
          return "Offscreen";
      }
    }
    var Bt = -1, Pc = uo, Bc = fu;
    function Rs(e) {
      switch (du(e)) {
        case ze:
          return ze;
        case Rl:
          return Rl;
        case Kn:
          return Kn;
        case Jn:
          return Jn;
        case Jr:
          return Jr;
        case su:
          return su;
        case uo:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case cu:
        case zc:
        case oo:
        case so:
        case Uc:
        case gs:
        case Ac:
        case Fc:
          return e & Tl;
        case fu:
        case Es:
        case jc:
        case Hc:
        case Vc:
          return e & Ss;
        case co:
          return co;
        case Cs:
          return Cs;
        case wl:
          return wl;
        case ha:
          return ha;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Zr(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = Rs(p);
        else {
          var v = f & s;
          v !== V && (i = Rs(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = Rs(y) : s !== V && (i = Rs(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = du(i), x = du(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Jr && (x & Tl) !== V
        )
          return t;
      }
      (i & Kn) !== V && (i |= a & Jr);
      var w = e.entangledLanes;
      if (w !== V)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = Tn(U), ae = 1 << j;
          i |= N[j], U &= ~ae;
        }
      return i;
    }
    function bd(e, t) {
      for (var a = e.eventTimes, i = Bt; t > 0; ) {
        var u = Tn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function $c(e, t) {
      switch (e) {
        case ze:
        case Rl:
        case Kn:
          return t + 250;
        case Jn:
        case Jr:
        case su:
        case uo:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case cu:
        case zc:
        case oo:
        case so:
        case Uc:
        case gs:
        case Ac:
        case Fc:
          return t + 5e3;
        case fu:
        case Es:
        case jc:
        case Hc:
        case Vc:
          return Bt;
        case co:
        case Cs:
        case wl:
        case ha:
          return Bt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Bt;
      }
    }
    function Pv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p, y = s[p];
        y === Bt ? ((v & i) === V || (v & u) !== V) && (s[p] = $c(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return Rs(e.pendingLanes);
    }
    function Yc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== V ? t : t & ha ? ha : V;
    }
    function Dd(e) {
      return (e & ze) !== V;
    }
    function _l(e) {
      return (e & Hv) !== V;
    }
    function Ic(e) {
      return (e & Ss) === e;
    }
    function kd(e) {
      var t = ze | Kn | Jr;
      return (e & t) === V;
    }
    function ly(e) {
      return (e & Tl) === e;
    }
    function Ts(e, t) {
      var a = Rl | Kn | Jn | Jr;
      return (t & a) !== V;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function Od(e) {
      return (e & Tl) !== V;
    }
    function Ld() {
      var e = Pc;
      return Pc <<= 1, (Pc & Tl) === V && (Pc = uo), e;
    }
    function Yv() {
      var e = Bc;
      return Bc <<= 1, (Bc & Ss) === V && (Bc = fu), e;
    }
    function du(e) {
      return e & -e;
    }
    function Zn(e) {
      return du(e);
    }
    function Tn(e) {
      return 31 - Bn(e);
    }
    function Qc(e) {
      return Tn(e);
    }
    function ea(e, t) {
      return (e & t) !== V;
    }
    function pu(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Wc(e, t) {
      return e & t;
    }
    function uy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== An && e < t ? e : t;
    }
    function Gc(e) {
      for (var t = [], a = 0; a < xd; a++)
        t.push(e);
      return t;
    }
    function fo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Qc(t);
      i[u] = a;
    }
    function Nd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Tn(i), s = 1 << u;
        a[u] = Bt, i &= ~s;
      }
    }
    function qc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Iv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p;
        i[p] = V, u[p] = Bt, s[p] = Bt, f &= ~v;
      }
    }
    function _s(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Tn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Xc(e, t) {
      var a = du(t), i;
      switch (a) {
        case Kn:
          i = Rl;
          break;
        case Jr:
          i = Jn;
          break;
        case uo:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case cu:
        case zc:
        case oo:
        case so:
        case Uc:
        case gs:
        case Ac:
        case Fc:
        case fu:
        case Es:
        case jc:
        case Hc:
        case Vc:
          i = su;
          break;
        case wl:
          i = Cs;
          break;
        default:
          i = An;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== An ? An : i;
    }
    function Qv(e, t, a) {
      if (wr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function zd(e, t) {
      if (wr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Kc(e, t) {
      return null;
    }
    var ta = ze, Ua = Kn, or = Jr, Jc = wl, po = An;
    function ma() {
      return po;
    }
    function $n(e) {
      po = e;
    }
    function Wv(e, t) {
      var a = po;
      try {
        return po = e, t();
      } finally {
        po = a;
      }
    }
    function xs(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _r(e, t) {
      return e > t ? e : t;
    }
    function Ud(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = du(e);
      return Ud(ta, t) ? Ud(Ua, t) ? _l(t) ? or : Jc : Ua : ta;
    }
    function vu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sr;
    function oy(e) {
      sr = e;
    }
    function ve(e) {
      sr(e);
    }
    var xl;
    function Ad(e) {
      xl = e;
    }
    var Fd;
    function sy(e) {
      Fd = e;
    }
    var vo;
    function Zc(e) {
      vo = e;
    }
    var ef;
    function qv(e) {
      ef = e;
    }
    var tf = !1, bs = [], Ei = null, Ci = null, vn = null, Nr = /* @__PURE__ */ new Map(), Aa = /* @__PURE__ */ new Map(), Qi = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ni(e) {
      return Xv.indexOf(e) > -1;
    }
    function Kv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ri(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ei = null;
          break;
        case "dragenter":
        case "dragleave":
          Ci = null;
          break;
        case "mouseover":
        case "mouseout":
          vn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Nr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Aa.delete(i);
          break;
        }
      }
    }
    function Ds(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Kv(t, a, i, u, s);
        if (t !== null) {
          var p = _o(t);
          p !== null && xl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Jv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ei = Ds(Ei, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ci = Ds(Ci, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return vn = Ds(vn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Nr.set(y, Ds(Nr.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return Aa.set(x, Ds(Aa.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = Vs(e.target);
      if (t !== null) {
        var a = Mr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = yi(a);
            if (u !== null) {
              e.blockedOn = u, ef(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (vu(s)) {
              e.blockedOn = Sl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = vo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Qi.length && Ud(t, Qi[i].priority); i++)
        ;
      Qi.splice(i, 0, a), i === 0 && jd(a);
    }
    function ks(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Os(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ny(s), u.target.dispatchEvent(s), ns();
        } else {
          var f = _o(i);
          return f !== null && xl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      ks(e) && a.delete(t);
    }
    function nf() {
      tf = !1, Ei !== null && ks(Ei) && (Ei = null), Ci !== null && ks(Ci) && (Ci = null), vn !== null && ks(vn) && (vn = null), Nr.forEach(eh), Aa.forEach(eh);
    }
    function hu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, tf || (tf = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, nf)));
    }
    function xr(e) {
      if (bs.length > 0) {
        hu(bs[0], e);
        for (var t = 1; t < bs.length; t++) {
          var a = bs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ei !== null && hu(Ei, e), Ci !== null && hu(Ci, e), vn !== null && hu(vn, e);
      var i = function(p) {
        return hu(p, e);
      };
      Nr.forEach(i), Aa.forEach(i);
      for (var u = 0; u < Qi.length; u++) {
        var s = Qi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Qi.length > 0; ) {
        var f = Qi[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && Qi.shift();
      }
    }
    var dt = ut.ReactCurrentBatchConfig, Fn = !0;
    function wn(e) {
      Fn = !!e;
    }
    function cr() {
      return Fn;
    }
    function ya(e, t, a) {
      var i = mo(t), u;
      switch (i) {
        case ta:
          u = ho;
          break;
        case Ua:
          u = Yn;
          break;
        case or:
        default:
          u = mu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ho(e, t, a, i) {
      var u = ma(), s = dt.transition;
      dt.transition = null;
      try {
        $n(ta), mu(e, t, a, i);
      } finally {
        $n(u), dt.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      var u = ma(), s = dt.transition;
      dt.transition = null;
      try {
        $n(Ua), mu(e, t, a, i);
      } finally {
        $n(u), dt.transition = s;
      }
    }
    function mu(e, t, a, i) {
      Fn && yu(e, t, a, i);
    }
    function yu(e, t, a, i) {
      var u = Os(e, t, a, i);
      if (u === null) {
        by(e, t, i, gu, a), ri(e, i);
        return;
      }
      if (Jv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ri(e, i), t & Zl && ni(e)) {
        for (; u !== null; ) {
          var s = _o(u);
          s !== null && ve(s);
          var f = Os(e, t, a, i);
          if (f === null && by(e, t, i, gu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var gu = null;
    function Os(e, t, a, i) {
      gu = null;
      var u = pc(i), s = Vs(u);
      if (s !== null) {
        var f = Mr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = yi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (vu(y))
              return Sl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return gu = s, null;
    }
    function mo(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ta;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ua;
        case "message": {
          var t = Mv();
          switch (t) {
            case Yi:
              return ta;
            case fs:
              return Ua;
            case lu:
            case ds:
              return or;
            case ro:
              return Jc;
            default:
              return or;
          }
        }
        default:
          return or;
      }
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Hd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function yo(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Wi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var bl = null, Ls = null, Fa = null;
    function rf(e) {
      return bl = e, Ls = go(), !0;
    }
    function Dl() {
      bl = null, Ls = null, Fa = null;
    }
    function Ms() {
      if (Fa)
        return Fa;
      var e, t = Ls, a = t.length, i, u = go(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Fa = u.slice(e, p), Fa;
    }
    function go() {
      return "value" in bl ? bl.value : bl.textContent;
    }
    function So(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Su() {
      return !0;
    }
    function Ns() {
      return !1;
    }
    function en(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Su : this.isDefaultPrevented = Ns, this.isPropagationStopped = Ns, this;
      }
      return Ge(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Su);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Su);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Su
      }), t;
    }
    var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Sa = en(ga), er = Ge({}, ga, {
      view: 0,
      detail: 0
    }), th = en(er), zs, Us, As;
    function kl(e) {
      e !== As && (As && e.type === "mousemove" ? (zs = e.screenX - As.screenX, Us = e.screenY - As.screenY) : (zs = 0, Us = 0), As = e);
    }
    var Fs = Ge({}, er, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $d,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (kl(e), zs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Us;
      }
    }), af = en(Fs), Eu = Ge({}, Fs, {
      dataTransfer: 0
    }), Vd = en(Eu), Cu = Ge({}, er, {
      relatedTarget: 0
    }), lf = en(Cu), nh = Ge({}, ga, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pd = en(nh), uf = Ge({}, ga, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cy = en(uf), fy = Ge({}, ga, {
      data: 0
    }), Bd = en(fy), rh = Bd, Ru = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, dy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Eo(e) {
      if (e.key) {
        var t = Ru[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = So(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? dy[e.keyCode] || "Unidentified" : "";
    }
    var ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function gn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function $d(e) {
      return gn;
    }
    var ih = Ge({}, er, {
      key: Eo,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $d,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? So(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), py = en(ih), vy = Ge({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Yd = en(vy), lh = Ge({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $d
    }), hy = en(lh), ja = Ge({}, ga, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Id = en(ja), my = Ge({}, Fs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ol = en(my), of = [9, 13, 27, 32], Ll = 229, Co = Qn && "CompositionEvent" in window, Tu = null;
    Qn && "documentMode" in document && (Tu = document.documentMode);
    var Qd = Qn && "TextEvent" in window && !Tu, uh = Qn && (!Co || Tu && Tu > 8 && Tu <= 11), sf = 32, oh = String.fromCharCode(sf);
    function sh() {
      Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Wd = !1;
    function cf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ch(e, t) {
      return e === "keydown" && t.keyCode === Ll;
    }
    function df(e, t) {
      switch (e) {
        case "keyup":
          return of.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ll;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function pf(e) {
      return e.locale === "ko";
    }
    var Gi = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (Co ? s = ff(t) : Gi ? df(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !pf(i) && (!Gi && s === "onCompositionStart" ? Gi = rf(u) : s === "onCompositionEnd" && Gi && (f = Ms()));
      var p = hh(a, s);
      if (p.length > 0) {
        var v = new Bd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== sf ? null : (Wd = !0, oh);
        case "textInput":
          var i = t.data;
          return i === oh && Wd ? null : i;
        default:
          return null;
      }
    }
    function fh(e, t) {
      if (Gi) {
        if (e === "compositionend" || !Co && df(e, t)) {
          var a = Ms();
          return Dl(), Gi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!cf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uh && !pf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function yy(e, t, a, i, u) {
      var s;
      if (Qd ? s = vf(t, i) : s = fh(t, i), !s)
        return null;
      var f = hh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function hf(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), yy(e, t, a, i, u);
    }
    var gy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ro(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Sy(e) {
      if (!Qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function mf() {
      Vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ld(i);
      var u = hh(t, "onChange");
      if (u.length > 0) {
        var s = new Sa("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, pc(e)), xv(d, t);
    }
    function d(e) {
      _E(e, 0);
    }
    function m(e) {
      var t = Rf(e);
      if (cl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    Qn && (T = Sy("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", W);
    }
    function Q() {
      r && (r.detachEvent("onpropertychange", W), r = null, l = null);
    }
    function W(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (Q(), z(t, a)) : e === "focusout" && Q();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ee(e, t) {
      if (e === "click")
        return m(t);
    }
    function _n(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || he(e, "number", e.value);
    }
    function _(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window, v, y;
      if (o(p) ? v = E : Ro(p) ? T ? v = _n : (v = ce, y = I) : ye(p) && (v = Ee), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      bn("onMouseEnter", ["mouseout", "mouseover"]), bn("onMouseLeave", ["mouseout", "mouseover"]), bn("onPointerEnter", ["pointerout", "pointerover"]), bn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function q(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ry(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Vs(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, N = U ? Vs(U) : null, N !== null) {
            var j = Mr(N);
            (N !== j || N.tag !== ue && N.tag !== we) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var ae = af, Le = "onMouseLeave", Te = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Yd, Le = "onPointerLeave", Te = "onPointerEnter", wt = "pointer");
          var ht = w == null ? g : Rf(w), k = N == null ? g : Rf(N), H = new ae(Le, wt + "leave", w, i, u);
          H.target = ht, H.relatedTarget = k;
          var O = null, G = Vs(u);
          if (G === a) {
            var de = new ae(Te, wt + "enter", N, i, u);
            de.target = k, de.relatedTarget = ht, O = de;
          }
          DT(e, H, O, w, N);
        }
      }
    }
    function Re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : Re;
    function ke(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!rr.call(t, s) || !ge(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Dt(e, t) {
      for (var a = je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = je(tr(a));
      }
    }
    function Ml(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ey(e, u, s, f, p);
    }
    function Ey(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Vi) && (f = s + a), g === i && (u === 0 || g.nodeType === Vi) && (p = s + u), g.nodeType === Vi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          x = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function sT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Dt(e, f), g = Dt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function pE(e) {
      return e && e.nodeType === Vi;
    }
    function vE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : pE(e) ? !1 : pE(t) ? vE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && vE(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function hE() {
      for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = Fi(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = hE();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = hE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Cy(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ml(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : sT(e, t);
    }
    var mT = Qn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      Vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, Ry = null, Xd = null, Ty = !1;
    function gT(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Pi ? e : e.ownerDocument;
    }
    function mE(e, t, a) {
      var i = ST(a);
      if (!(Ty || yf == null || yf !== Fi(i))) {
        var u = gT(yf);
        if (!Xd || !ke(Xd, u)) {
          Xd = u;
          var s = hh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Sa("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ro(p) || p.contentEditable === "true") && (yf = p, Ry = a, Xd = null);
          break;
        case "focusout":
          yf = null, Ry = null, Xd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, mE(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (mT)
            break;
        // falls through
        case "keydown":
        case "keyup":
          mE(e, i, u);
      }
    }
    function dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: dh("Animation", "AnimationEnd"),
      animationiteration: dh("Animation", "AnimationIteration"),
      animationstart: dh("Animation", "AnimationStart"),
      transitionend: dh("Transition", "TransitionEnd")
    }, wy = {}, yE = {};
    Qn && (yE = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function ph(e) {
      if (wy[e])
        return wy[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in yE)
          return wy[e] = t[a];
      return e;
    }
    var gE = ph("animationend"), SE = ph("animationiteration"), EE = ph("animationstart"), CE = ph("transitionend"), RE = /* @__PURE__ */ new Map(), TE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function To(e, t) {
      RE.set(e, t), Vt(t, [e]);
    }
    function CT() {
      for (var e = 0; e < TE.length; e++) {
        var t = TE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        To(a, "on" + i);
      }
      To(gE, "onAnimationEnd"), To(SE, "onAnimationIteration"), To(EE, "onAnimationStart"), To("dblclick", "onDoubleClick"), To("focusin", "onFocus"), To("focusout", "onBlur"), To(CE, "onTransitionEnd");
    }
    function RT(e, t, a, i, u, s, f) {
      var p = RE.get(t);
      if (p !== void 0) {
        var v = Sa, y = t;
        switch (t) {
          case "keypress":
            if (So(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = py;
            break;
          case "focusin":
            y = "focus", v = lf;
            break;
          case "focusout":
            y = "blur", v = lf;
            break;
          case "beforeblur":
          case "afterblur":
            v = lf;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = hy;
            break;
          case gE:
          case SE:
          case EE:
            v = Pd;
            break;
          case CE:
            v = Id;
            break;
          case "scroll":
            v = th;
            break;
          case "wheel":
            v = Ol;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Yd;
            break;
        }
        var g = (s & Zl) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = xT(a, p, i.type, g, x);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    CT(), L(), mf(), yT(), sh();
    function TT(e, t, a, i, u, s, f) {
      RT(e, t, a, i, u, s);
      var p = (s & id) === 0;
      p && (q(e, t, a, i, u), _(e, t, a, i, u), ET(e, t, a, i, u), hf(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function wE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, us(i, t, void 0, e), e.currentTarget = null;
    }
    function wT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          wE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, w = g.currentTarget, N = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          wE(e, N, w), i = x;
        }
    }
    function _E(e, t) {
      for (var a = (t & Zl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        wT(s, f, a);
      }
      Bi();
    }
    function _T(e, t, a, i, u) {
      var s = pc(a), f = [];
      TT(f, e, i, a, s, t), _E(f, t);
    }
    function hn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = kT(e);
      i.has(u) || (xE(t, e, hi, a), i.add(u));
    }
    function xy(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zl), xE(a, e, i, t);
    }
    var vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[vh]) {
        e[vh] = !0, Et.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Pi ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function xE(e, t, a, i, u) {
      var s = ya(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? yo(e, t, s, f) : Hd(e, t, s) : f !== void 0 ? Wi(e, t, s, f) : na(e, t, s);
    }
    function bE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & ad) && !(t & hi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === Fe) {
              var y = p.stateNode.containerInfo;
              if (bE(y, f))
                break;
              if (v === Fe)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === Z || x === Fe) {
                    var w = g.stateNode.containerInfo;
                    if (bE(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Vs(y);
                if (N === null)
                  return;
                var U = N.tag;
                if (U === ue || U === we) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      xv(function() {
        return _T(e, t, a, s);
      });
    }
    function Zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function xT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, w = x.stateNode, N = x.tag;
        if (N === ue && w !== null && (g = w, p !== null)) {
          var U = tu(y, p);
          U != null && v.push(Zd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function hh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = tu(u, a);
          y != null && i.unshift(Zd(u, y, v));
          var g = tu(u, t);
          g != null && i.push(Zd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Sf(s))
        u++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; u - f > 0; )
        a = Sf(a), u--;
      for (; f - u > 0; )
        i = Sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function DE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === ue && g !== null) {
          var w = g;
          if (u) {
            var N = tu(p, s);
            N != null && f.unshift(Zd(p, N, w));
          } else if (!u) {
            var U = tu(p, s);
            U != null && f.push(Zd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function DT(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && DE(e, t, i, s, !1), u !== null && a !== null && DE(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var Ha = !1, ep = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", wo = "suppressHydrationWarning", kE = "autoFocus", js = "children", Hs = "style", yh = "__html", Dy, gh, tp, OE, Sh, LE, ME;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gh = function(e, t) {
      Ev(e, t), Xu(e, t), _v(e, t, {
        registrationNameDependencies: Qe,
        possibleRegistrationNames: yt
      });
    }, LE = Qn && !document.documentMode, tp = function(e, t, a) {
      if (!Ha) {
        var i = Eh(a), u = Eh(t);
        u !== i && (Ha = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, OE = function(e) {
      if (!Ha) {
        Ha = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Sh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, ME = function(e, t) {
      var a = e.namespaceURI === Xa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function Eh(e) {
      Pn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Ha || (Ha = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function NE(e) {
      return e.nodeType === Pi ? e : e.ownerDocument;
    }
    function MT() {
    }
    function Rh(e) {
      e.onclick = MT;
    }
    function NT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Hs)
            f && Object.freeze(f), hv(t, f);
          else if (s === ep) {
            var p = f ? f[yh] : void 0;
            p != null && rv(t, p);
          } else if (s === js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && dl(t, f);
            } else typeof f == "number" && dl(t, "" + f);
          else s === mh || s === wo || s === kE || (Qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && fa(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Hs ? hv(e, f) : s === ep ? rv(e, f) : s === js ? dl(e, f) : fa(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = NE(a), f, p = i;
      if (p === Xa && (p = Jf(e)), p === Xa) {
        if (u = pl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Xa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !rr.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return NE(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
      var u = pl(t, a);
      gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          hn("cancel", e), hn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            hn(Kd[f], e);
          s = a;
          break;
        case "source":
          hn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e), s = a;
          break;
        case "details":
          hn("toggle", e), s = a;
          break;
        case "input":
          $u(e, a), s = Oa(e, a), hn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          Go(e, a), s = Jl(e, a), hn("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = uc(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), NT(t, e, i, s, u), t) {
        case "input":
          ka(e), M(e, a, !1);
          break;
        case "textarea":
          ka(e), nv(e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Rh(e);
          break;
      }
    }
    function jT(e, t, a, i, u) {
      gh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Oa(e, a), p = Oa(e, i), s = [];
          break;
        case "select":
          f = Jl(e, a), p = Jl(e, i), s = [];
          break;
        case "textarea":
          f = uc(e, a), p = uc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Rh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Hs) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === ep || v === js || v === mh || v === wo || v === kE || (Qe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Hs)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === ep) {
            var U = w ? w[yh] : void 0, j = N ? N[yh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === js ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === mh || v === wo || (Qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Sh(v, w), v === "onScroll" && hn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Ka(g, p[Hs]), (s = s || []).push(Hs, g)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = pl(a, i), f = pl(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          tv(e, u);
          break;
        case "select":
          lc(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Wu.hasOwnProperty(t) && Wu[t] || null;
      }
    }
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = pl(t, a), gh(t, a), t) {
        case "dialog":
          hn("cancel", e), hn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            hn(Kd[y], e);
          break;
        case "source":
          hn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e);
          break;
        case "details":
          hn("toggle", e);
          break;
        case "input":
          $u(e, a), hn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          Go(e, a), hn("invalid", e);
          break;
        case "textarea":
          ev(e, a), hn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var w = g[x].name.toLowerCase();
          switch (w) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === js)
            typeof j == "string" ? e.textContent !== j && (a[wo] !== !0 && Ch(e.textContent, j, s, f), N = [js, j]) : typeof j == "number" && e.textContent !== "" + j && (a[wo] !== !0 && Ch(e.textContent, j, s, f), N = [js, "" + j]);
          else if (Qe.hasOwnProperty(U))
            j != null && (typeof j != "function" && Sh(U, j), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Le = tn(U);
            if (a[wo] !== !0) {
              if (!(U === mh || U === wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === ep) {
                  var Te = e.innerHTML, wt = j ? j[yh] : void 0;
                  if (wt != null) {
                    var ht = ME(e, wt);
                    ht !== Te && tp(U, Te, ht);
                  }
                } else if (U === Hs) {
                  if (v.delete(U), LE) {
                    var k = ey(j);
                    ae = e.getAttribute("style"), k !== ae && tp(U, ae, k);
                  }
                } else if (p)
                  v.delete(U.toLowerCase()), ae = ui(e, U, j), j !== ae && tp(U, ae, j);
                else if (!ln(U, Le, p) && !qn(U, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ae = Il(e, U, j, Le);
                  else {
                    var O = i;
                    if (O === Xa && (O = Jf(t)), O === Xa)
                      v.delete(U.toLowerCase());
                    else {
                      var G = VT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    ae = ui(e, U, j);
                  }
                  var de = $;
                  !de && j !== ae && !H && tp(U, ae, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wo] !== !0 && OE(v), t) {
        case "input":
          ka(e), M(e, a, !0);
          break;
        case "textarea":
          ka(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Rh(e);
          break;
      }
      return N;
    }
    function BT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Ha)
          return;
        Ha = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Ha)
          return;
        Ha = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Wm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], zE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], IT = zE.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], UE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = Ge({}, e || UE), i = {
          tag: t
        };
        return zE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return QT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, AE = {};
      np = function(e, t, a) {
        a = a || UE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!AE[y]) {
            AE[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Th = "suppressHydrationWarning", wh = "$", _h = "/$", ap = "$?", ip = "$!", qT = "style", Ny = null, zy = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Pi:
        case qo: {
          t = i === Pi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : oc(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = oc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = oc(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function fD(e) {
      return e;
    }
    function JT(e) {
      Ny = cr(), zy = dT();
      var t = null;
      return wn(!1), t;
    }
    function ZT(e) {
      pT(zy), wn(Ny), Ny = null, zy = null;
    }
    function e1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = UT(e, t, a, s);
      return op(u, y), By(y, t), y;
    }
    function t1(e, t) {
      e.appendChild(t);
    }
    function n1(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function r1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return jT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function a1(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return op(i, s), s;
    }
    function i1() {
      var e = window.event;
      return e === void 0 ? or : mo(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, l1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, FE = typeof Promise == "function" ? Promise : void 0, u1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof FE < "u" ? function(e) {
      return FE.resolve(null).then(e).catch(o1);
    } : Ay;
    function o1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function s1(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function c1(e, t, a, i, u, s) {
      HT(e, t, a, i, u), By(e, u);
    }
    function jE(e) {
      dl(e, "");
    }
    function f1(e, t, a) {
      e.nodeValue = a;
    }
    function d1(e, t) {
      e.appendChild(t);
    }
    function p1(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function v1(e, t, a) {
      e.insertBefore(t, a);
    }
    function h1(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function m1(e, t) {
      e.removeChild(t);
    }
    function y1(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(u), xr(t);
              return;
            } else
              i--;
          else (s === wh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      xr(t);
    }
    function g1(e, t) {
      e.nodeType === Ln ? jy(e.parentNode, t) : e.nodeType === Gr && jy(e, t), xr(e);
    }
    function S1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function E1(e) {
      e.nodeValue = "";
    }
    function C1(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function R1(e, t) {
      e.nodeValue = t;
    }
    function T1(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Pi && e.documentElement && e.removeChild(e.documentElement);
    }
    function w1(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _1(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function x1(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function HE(e) {
      return e.data === ap;
    }
    function Hy(e) {
      return e.data === ip;
    }
    function b1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function D1(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Vi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === wh || a === ip || a === ap)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return xh(e.nextSibling);
    }
    function k1(e) {
      return xh(e.firstChild);
    }
    function O1(e) {
      return xh(e.firstChild);
    }
    function L1(e) {
      return xh(e.nextSibling);
    }
    function M1(e, t, a, i, u, s, f) {
      op(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & lt) !== xe;
      return PT(e, t, a, p, i, y, f);
    }
    function N1(e, t, a, i) {
      return op(a, e), a.mode & lt, BT(e, t);
    }
    function z1(e, t) {
      op(t, e);
    }
    function U1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return lp(t);
            a--;
          } else (i === wh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === wh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function A1(e) {
      xr(e);
    }
    function F1(e) {
      xr(e);
    }
    function j1(e) {
      return e !== "head" && e !== "body";
    }
    function H1(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function V1(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function P1(e, t) {
      t.nodeType === Gr ? ky(e, t) : t.nodeType === Ln || Oy(e, t);
    }
    function B1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? ky(a, t) : t.nodeType === Ln || Oy(a, t));
      }
    }
    function $1(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Gr ? ky(a, i) : i.nodeType === Ln || Oy(a, i));
    }
    function Y1(e, t, a) {
      Ly(e, t);
    }
    function I1(e, t) {
      My(e, t);
    }
    function Q1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function W1(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function G1(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && Ly(a, i);
    }
    function q1(e, t, a, i, u) {
      (u || t[Th] !== !0) && My(a, i);
    }
    function X1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function K1(e) {
      Jd(e);
    }
    var Ef = Math.random().toString(36).slice(2), Cf = "__reactFiber$" + Ef, Vy = "__reactProps$" + Ef, up = "__reactContainer$" + Ef, Py = "__reactEvents$" + Ef, J1 = "__reactListeners$" + Ef, Z1 = "__reactHandles$" + Ef;
    function ew(e) {
      delete e[Cf], delete e[Vy], delete e[Py], delete e[J1], delete e[Z1];
    }
    function op(e, t) {
      t[Cf] = e;
    }
    function bh(e, t) {
      t[up] = e;
    }
    function PE(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function Vs(e) {
      var t = e[Cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[Cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = VE(e); u !== null; ) {
              var s = u[Cf];
              if (s)
                return s;
              u = VE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[Cf] || e[up];
      return t && (t.tag === ue || t.tag === we || t.tag === Ce || t.tag === Z) ? t : null;
    }
    function Rf(e) {
      if (e.tag === ue || e.tag === we)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function tw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var BE = {}, $E = ut.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = $o(e.type, e._source, t ? t.type : null);
        $E.setExtraStackFrame(a);
      } else
        $E.setExtraStackFrame(null);
    }
    function qi(e, t, a, i, u) {
      {
        var s = Function.call.bind(rr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (kh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), kh(null)), p instanceof Error && !(p.message in BE) && (BE[p.message] = !0, kh(u), S("Failed %s type: %s", a, p.message), kh(null));
          }
      }
    }
    var $y = [], Oh;
    Oh = [];
    var wu = -1;
    function xo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (wu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[wu] && S("Unexpected Fiber popped."), e.current = $y[wu], $y[wu] = null, Oh[wu] = null, wu--;
    }
    function aa(e, t, a) {
      wu++, $y[wu] = e.current, Oh[wu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var ai = {};
    Object.freeze(ai);
    var _u = xo(ai), Nl = xo(!1), Iy = ai;
    function Tf(e, t, a) {
      return a && zl(t) ? Iy : _u.current;
    }
    function YE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ai;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Pe(e) || "Unknown";
          qi(i, s, "context", p);
        }
        return u && YE(e, t, s), s;
      }
    }
    function Lh() {
      return Nl.current;
    }
    function zl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Mh(e) {
      ra(Nl, e), ra(_u, e);
    }
    function Qy(e) {
      ra(Nl, e), ra(_u, e);
    }
    function IE(e, t, a) {
      {
        if (_u.current !== ai)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(_u, t, e), aa(Nl, a, e);
      }
    }
    function QE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Pe(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Pe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Pe(e) || "Unknown";
          qi(u, f, "child context", v);
        }
        return Ge({}, a, f);
      }
    }
    function Nh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ai;
        return Iy = _u.current, aa(_u, a, e), aa(Nl, Nl.current, e), !0;
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = QE(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Nl, e), ra(_u, e), aa(_u, u, e), aa(Nl, a, e);
        } else
          ra(Nl, e), aa(Nl, a, e);
      }
    }
    function nw(e) {
      {
        if (!Ov(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (zl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var bo = 0, zh = 1, xu = null, Wy = !1, Gy = !1;
    function GE(e) {
      xu === null ? xu = [e] : xu.push(e);
    }
    function rw(e) {
      Wy = !0, GE(e);
    }
    function qE() {
      Wy && Do();
    }
    function Do() {
      if (!Gy && xu !== null) {
        Gy = !0;
        var e = 0, t = ma();
        try {
          var a = !0, i = xu;
          for ($n(ta); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          xu = null, Wy = !1;
        } catch (s) {
          throw xu !== null && (xu = xu.slice(e + 1)), pd(Yi, Do), s;
        } finally {
          $n(t), Gy = !1;
        }
      }
      return null;
    }
    var _f = [], xf = 0, Uh = null, Ah = 0, Ri = [], Ti = 0, Ps = null, bu = 1, Du = "";
    function aw(e) {
      return $s(), (e.flags & ss) !== _e;
    }
    function iw(e) {
      return $s(), Ah;
    }
    function lw() {
      var e = Du, t = bu, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function Bs(e, t) {
      $s(), _f[xf++] = Ah, _f[xf++] = Uh, Uh = e, Ah = t;
    }
    function XE(e, t, a) {
      $s(), Ri[Ti++] = bu, Ri[Ti++] = Du, Ri[Ti++] = Ps, Ps = e;
      var i = bu, u = Du, s = Fh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Fh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), w = f >> y, N = s - y, U = Fh(t) + N, j = p << N, ae = j | w, Le = x + u;
        bu = 1 << U | ae, Du = Le;
      } else {
        var Te = p << s, wt = Te | f, ht = u;
        bu = 1 << v | wt, Du = ht;
      }
    }
    function qy(e) {
      $s();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Bs(e, a), XE(e, a, i);
      }
    }
    function Fh(e) {
      return 32 - Bn(e);
    }
    function uw(e) {
      return 1 << Fh(e) - 1;
    }
    function Xy(e) {
      for (; e === Uh; )
        Uh = _f[--xf], _f[xf] = null, Ah = _f[--xf], _f[xf] = null;
      for (; e === Ps; )
        Ps = Ri[--Ti], Ri[Ti] = null, Du = Ri[--Ti], Ri[Ti] = null, bu = Ri[--Ti], Ri[Ti] = null;
    }
    function ow() {
      return $s(), Ps !== null ? {
        id: bu,
        overflow: Du
      } : null;
    }
    function sw(e, t) {
      $s(), Ri[Ti++] = bu, Ri[Ti++] = Du, Ri[Ti++] = Ps, bu = t.id, Du = t.overflow, Ps = e;
    }
    function $s() {
      Ur() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, wi = null, Xi = !1, Ys = !1, ko = null;
    function cw() {
      Xi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function KE() {
      Ys = !0;
    }
    function fw() {
      return Ys;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return wi = O1(t), zr = e, Xi = !0, ko = null, Ys = !1, !0;
    }
    function pw(e, t, a) {
      return wi = L1(t), zr = e, Xi = !0, ko = null, Ys = !1, a !== null && sw(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case Z: {
          P1(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & lt) !== xe;
          $1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && B1(i.dehydrated, t);
          break;
        }
      }
    }
    function ZE(e, t) {
      JE(e, t);
      var a = yb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= qr) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Ys)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, Y1(a, i);
                break;
              case we:
                var u = t.pendingProps;
                I1(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & lt) !== xe;
                G1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case we: {
                var x = t.pendingProps, w = (e.mode & lt) !== xe;
                q1(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case ue:
                var j = t.type;
                t.pendingProps, Q1(U, j);
                break;
              case we:
                var ae = t.pendingProps;
                W1(U, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function eC(e, t) {
      t.flags = t.flags & -4097 | Mn, Ky(e, t);
    }
    function tC(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = w1(t, a);
          return i !== null ? (e.stateNode = i, zr = e, wi = k1(i), !0) : !1;
        }
        case we: {
          var u = e.pendingProps, s = _1(t, u);
          return s !== null ? (e.stateNode = s, zr = e, wi = null, !0) : !1;
        }
        case Ce: {
          var f = x1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: ha
            };
            e.memoizedState = p;
            var v = gb(f);
            return v.return = e, e.child = v, zr = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & lt) !== xe && (e.flags & it) === _e;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Xi) {
        var t = wi;
        if (!t) {
          Jy(e) && (Ky(zr, e), Zy()), eC(zr, e), Xi = !1, zr = e;
          return;
        }
        var a = t;
        if (!tC(e, t)) {
          Jy(e) && (Ky(zr, e), Zy()), t = lp(a);
          var i = zr;
          if (!t || !tC(e, t)) {
            eC(zr, e), Xi = !1, zr = e;
            return;
          }
          ZE(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !Ys, s = M1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = N1(t, a, e);
      if (i) {
        var u = zr;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & lt) !== xe;
              H1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & lt) !== xe;
              V1(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      z1(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return U1(a);
    }
    function nC(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== Z && t.tag !== Ce; )
        t = t.return;
      zr = t;
    }
    function jh(e) {
      if (e !== zr)
        return !1;
      if (!Xi)
        return nC(e), Xi = !0, !1;
      if (e.tag !== Z && (e.tag !== ue || j1(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Jy(e))
            rC(e), Zy();
          else
            for (; t; )
              ZE(e, t), t = lp(t);
      }
      return nC(e), e.tag === Ce ? wi = yw(e) : wi = zr ? lp(e.stateNode) : null, !0;
    }
    function gw() {
      return Xi && wi !== null;
    }
    function rC(e) {
      for (var t = wi; t; )
        JE(e, t), t = lp(t);
    }
    function bf() {
      zr = null, wi = null, Xi = !1, Ys = !1;
    }
    function aC() {
      ko !== null && (KR(ko), ko = null);
    }
    function Ur() {
      return Xi;
    }
    function tg(e) {
      ko === null ? ko = [e] : ko.push(e);
    }
    var Sw = ut.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
    }
    var Ki = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Rw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qe && (t = a), a = a.return;
        return t;
      }, Is = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Qs = /* @__PURE__ */ new Set();
      Ki.recordUnsafeLifecycleWarnings = function(e, t) {
        Qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Ki.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          e.add(Pe(w) || "Component"), Qs.add(w.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          t.add(Pe(w) || "Component"), Qs.add(w.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          a.add(Pe(w) || "Component"), Qs.add(w.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          i.add(Pe(w) || "Component"), Qs.add(w.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          u.add(Pe(w) || "Component"), Qs.add(w.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(w) {
          s.add(Pe(w) || "Component"), Qs.add(w.type);
        }), hp = []), t.size > 0) {
          var f = Is(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Is(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Is(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Is(e);
          bt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Is(a);
          bt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Is(u);
          bt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), iC = /* @__PURE__ */ new Set();
      Ki.recordLegacyContextWarning = function(e, t) {
        var a = Rw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!iC.has(e.type)) {
          var i = Hh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hh.set(a, i)), i.push(e));
        }
      }, Ki.flushLegacyContextWarning = function() {
        Hh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Pe(s) || "Component"), iC.add(s.type);
            });
            var u = Is(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              mn();
            }
          }
        });
      }, Ki.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Hh = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, lC = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, lC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Pe(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qe || De) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Pe(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Qa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var w = v.refs;
            x === null ? delete w[y] : w[y] = x;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Vh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ph(e) {
      {
        var t = Pe(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function uC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function oC(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= qr) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = tc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= ss, H;
        var G = k.alternate;
        if (G !== null) {
          var de = G.index;
          return de < H ? (k.flags |= Mn, H) : de;
        } else
          return k.flags |= Mn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= Mn), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== we) {
          var de = tE(O, k.mode, G);
          return de.return = k, de;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, G) {
        var de = O.type;
        if (de === Yr)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === de || // Keep this check inline so it only runs on the false path:
        p0(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === Ye && uC(de) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = mp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Ae = eE(O, k.mode, G);
        return Ae.ref = mp(k, H, O), Ae.return = k, Ae;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== Fe || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var de = nE(O, k.mode, G);
          return de.return = k, de;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, G, de) {
        if (H === null || H.tag !== ot) {
          var oe = Vo(O, k.mode, G, de);
          return oe.return = k, oe;
        } else {
          var Ae = u(H, O);
          return Ae.return = k, Ae;
        }
      }
      function x(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = tE("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ir: {
              var de = eE(H, k.mode, O);
              return de.ref = mp(k, null, H), de.return = k, de;
            }
            case da: {
              var oe = nE(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Ye: {
              var Ae = H._payload, We = H._init;
              return x(k, We(Ae), O);
            }
          }
          if (Xe(H) || dn(H)) {
            var Kt = Vo(H, k.mode, O, null);
            return Kt.return = k, Kt;
          }
          Vh(k, H);
        }
        return typeof H == "function" && Ph(k), null;
      }
      function w(k, H, O, G) {
        var de = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return O.key === de ? v(k, H, O, G) : null;
            case da:
              return O.key === de ? y(k, H, O, G) : null;
            case Ye: {
              var oe = O._payload, Ae = O._init;
              return w(k, H, Ae(oe), G);
            }
          }
          if (Xe(O) || dn(O))
            return de !== null ? null : g(k, H, O, G, null);
          Vh(k, O);
        }
        return typeof O == "function" && Ph(k), null;
      }
      function N(k, H, O, G, de) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + G, de);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case ir: {
              var Ae = k.get(G.key === null ? O : G.key) || null;
              return v(H, Ae, G, de);
            }
            case da: {
              var We = k.get(G.key === null ? O : G.key) || null;
              return y(H, We, G, de);
            }
            case Ye:
              var Kt = G._payload, Ot = G._init;
              return N(k, H, O, Ot(Kt), de);
          }
          if (Xe(G) || dn(G)) {
            var In = k.get(O) || null;
            return g(H, In, G, de, null);
          }
          Vh(H, G);
        }
        return typeof G == "function" && Ph(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case ir:
            case da:
              lC(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Ye:
              var de = k._payload, oe = k._init;
              U(oe(de), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, G) {
        for (var de = null, oe = 0; oe < O.length; oe++) {
          var Ae = O[oe];
          de = U(Ae, de, k);
        }
        for (var We = null, Kt = null, Ot = H, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (jn = Ot, Ot = null) : jn = Ot.sibling;
          var la = w(k, Ot, O[Lt], G);
          if (la === null) {
            Ot === null && (Ot = jn);
            break;
          }
          e && Ot && la.alternate === null && t(k, Ot), In = s(la, In, Lt), Kt === null ? We = la : Kt.sibling = la, Kt = la, Ot = jn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), Ur()) {
            var Br = Lt;
            Bs(k, Br);
          }
          return We;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var li = x(k, O[Lt], G);
            li !== null && (In = s(li, In, Lt), Kt === null ? We = li : Kt.sibling = li, Kt = li);
          }
          if (Ur()) {
            var Ta = Lt;
            Bs(k, Ta);
          }
          return We;
        }
        for (var wa = i(k, Ot); Lt < O.length; Lt++) {
          var ua = N(wa, k, Lt, O[Lt], G);
          ua !== null && (e && ua.alternate !== null && wa.delete(ua.key === null ? Lt : ua.key), In = s(ua, In, Lt), Kt === null ? We = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && wa.forEach(function(Qf) {
          return t(k, Qf);
        }), Ur()) {
          var Uu = Lt;
          Bs(k, Uu);
        }
        return We;
      }
      function ae(k, H, O, G) {
        var de = dn(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === de && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var oe = de.call(O);
          if (oe)
            for (var Ae = null, We = oe.next(); !We.done; We = oe.next()) {
              var Kt = We.value;
              Ae = U(Kt, Ae, k);
            }
        }
        var Ot = de.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Lt = null, jn = H, la = 0, Br = 0, li = null, Ta = Ot.next(); jn !== null && !Ta.done; Br++, Ta = Ot.next()) {
          jn.index > Br ? (li = jn, jn = null) : li = jn.sibling;
          var wa = w(k, jn, Ta.value, G);
          if (wa === null) {
            jn === null && (jn = li);
            break;
          }
          e && jn && wa.alternate === null && t(k, jn), la = s(wa, la, Br), Lt === null ? In = wa : Lt.sibling = wa, Lt = wa, jn = li;
        }
        if (Ta.done) {
          if (a(k, jn), Ur()) {
            var ua = Br;
            Bs(k, ua);
          }
          return In;
        }
        if (jn === null) {
          for (; !Ta.done; Br++, Ta = Ot.next()) {
            var Uu = x(k, Ta.value, G);
            Uu !== null && (la = s(Uu, la, Br), Lt === null ? In = Uu : Lt.sibling = Uu, Lt = Uu);
          }
          if (Ur()) {
            var Qf = Br;
            Bs(k, Qf);
          }
          return In;
        }
        for (var Gp = i(k, jn); !Ta.done; Br++, Ta = Ot.next()) {
          var Bl = N(Gp, k, Br, Ta.value, G);
          Bl !== null && (e && Bl.alternate !== null && Gp.delete(Bl.key === null ? Br : Bl.key), la = s(Bl, la, Br), Lt === null ? In = Bl : Lt.sibling = Bl, Lt = Bl);
        }
        if (e && Gp.forEach(function(qb) {
          return t(k, qb);
        }), Ur()) {
          var Gb = Br;
          Bs(k, Gb);
        }
        return In;
      }
      function Le(k, H, O, G) {
        if (H !== null && H.tag === we) {
          a(k, H.sibling);
          var de = u(H, O);
          return de.return = k, de;
        }
        a(k, H);
        var oe = tE(O, k.mode, G);
        return oe.return = k, oe;
      }
      function Te(k, H, O, G) {
        for (var de = O.key, oe = H; oe !== null; ) {
          if (oe.key === de) {
            var Ae = O.type;
            if (Ae === Yr) {
              if (oe.tag === ot) {
                a(k, oe.sibling);
                var We = u(oe, O.props.children);
                return We.return = k, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (oe.elementType === Ae || // Keep this check inline so it only runs on the false path:
            p0(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ae == "object" && Ae !== null && Ae.$$typeof === Ye && uC(Ae) === oe.type) {
              a(k, oe.sibling);
              var Kt = u(oe, O.props);
              return Kt.ref = mp(k, oe, O), Kt.return = k, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === Yr) {
          var Ot = Vo(O.props.children, k.mode, G, O.key);
          return Ot.return = k, Ot;
        } else {
          var In = eE(O, k.mode, G);
          return In.ref = mp(k, H, O), In.return = k, In;
        }
      }
      function wt(k, H, O, G) {
        for (var de = O.key, oe = H; oe !== null; ) {
          if (oe.key === de)
            if (oe.tag === Fe && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Ae = u(oe, O.children || []);
              return Ae.return = k, Ae;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var We = nE(O, k.mode, G);
        return We.return = k, We;
      }
      function ht(k, H, O, G) {
        var de = typeof O == "object" && O !== null && O.type === Yr && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return f(Te(k, H, O, G));
            case da:
              return f(wt(k, H, O, G));
            case Ye:
              var oe = O._payload, Ae = O._init;
              return ht(k, H, Ae(oe), G);
          }
          if (Xe(O))
            return j(k, H, O, G);
          if (dn(O))
            return ae(k, H, O, G);
          Vh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, G)) : (typeof O == "function" && Ph(k), a(k, H));
      }
      return ht;
    }
    var Df = oC(!0), sC = oC(!1);
    function ww(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = tc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = tc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _w(e, t) {
      for (var a = e.child; a !== null; )
        db(a, t), a = a.sibling;
    }
    var ug = xo(null), og;
    og = {};
    var Bh = null, kf = null, sg = null, $h = !1;
    function Yh() {
      Bh = null, kf = null, sg = null, $h = !1;
    }
    function cC() {
      $h = !0;
    }
    function fC() {
      $h = !1;
    }
    function dC(e, t, a) {
      aa(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ra(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (pu(i.childLanes, t) ? u !== null && !pu(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = Zn(a), v = ku(Bt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ke(w.lanes, a)), fg(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === fn) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ke(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), fg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Of(e, t) {
      Bh = e, kf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function nr(e) {
      $h && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Bh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Bh.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Ws = null;
    function dg(e) {
      Ws === null ? Ws = [e] : Ws.push(e);
    }
    function Dw() {
      if (Ws !== null) {
        for (var e = 0; e < Ws.length; e++) {
          var t = Ws[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ws = null;
      }
    }
    function pC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function kw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Va(e, t) {
      return Ih(e, t);
    }
    var Lw = Ih;
    function Ih(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (Mn | zn)) !== _e && s0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (Mn | zn)) !== _e && s0(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var vC = 0, hC = 1, Qh = 2, pg = 3, Wh = !1, vg, Gh;
    vg = !1, Gh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function mC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function ku(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: vC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Oo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Gh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), kx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Od(a)) {
          var s = u.lanes;
          s = Wc(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, _s(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Mw(e, t, a, i, u, s) {
      switch (a.tag) {
        case hC: {
          var f = a.payload;
          if (typeof f == "function") {
            cC();
            var p = f.call(s, i, u);
            {
              if (e.mode & qe) {
                Pt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              fC();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & -65537 | it;
        // Intentional fallthrough
        case vC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            cC(), y = v.call(s, i, u);
            {
              if (e.mode & qe) {
                Pt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              fC();
            }
          } else
            y = v;
          return y == null ? i : Ge({}, i, y);
        }
        case Qh:
          return Wh = !0, i;
      }
      return i;
    }
    function Xh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, Gh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, w = x.lastBaseUpdate;
          w !== f && (w === null ? x.firstBaseUpdate = y : w.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = V, j = null, ae = null, Le = null, Te = s;
        do {
          var wt = Te.lane, ht = Te.eventTime;
          if (pu(i, wt)) {
            if (Le !== null) {
              var H = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Le = Le.next = H;
            }
            N = Mw(e, u, Te, N, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== An) {
              e.flags |= Zt;
              var G = u.effects;
              G === null ? u.effects = [Te] : G.push(Te);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: wt,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Le === null ? (ae = Le = k, j = N) : Le = Le.next = k, U = Ke(U, wt);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, oe = de.next;
            de.next = null, Te = oe, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = N), u.baseState = j, u.firstBaseUpdate = ae, u.lastBaseUpdate = Le;
        var Ae = u.shared.interleaved;
        if (Ae !== null) {
          var We = Ae;
          do
            U = Ke(U, We.lane), We = We.next;
          while (We !== Ae);
        } else s === null && (u.shared.lanes = V);
        $p(U), e.lanes = U, e.memoizedState = N;
      }
      Gh = null;
    }
    function Nw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function yC() {
      Wh = !1;
    }
    function Kh() {
      return Wh;
    }
    function gC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nw(f, a));
        }
    }
    var yp = {}, Lo = xo(yp), gp = xo(yp), Jh = xo(yp);
    function Zh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function SC() {
      var e = Zh(Jh.current);
      return e;
    }
    function yg(e, t) {
      aa(Jh, t, e), aa(gp, e, e), aa(Lo, yp, e);
      var a = XT(t);
      ra(Lo, e), aa(Lo, a, e);
    }
    function Lf(e) {
      ra(Lo, e), ra(gp, e), ra(Jh, e);
    }
    function gg() {
      var e = Zh(Lo.current);
      return e;
    }
    function EC(e) {
      Zh(Jh.current);
      var t = Zh(Lo.current), a = KT(t, e.type);
      t !== a && (aa(gp, e, e), aa(Lo, a, e));
    }
    function Sg(e) {
      gp.current === e && (ra(Lo, e), ra(gp, e));
    }
    var zw = 0, CC = 1, RC = 1, Sp = 2, Ji = xo(zw);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & CC;
    }
    function Cg(e, t) {
      return e & CC | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function Mo(e, t) {
      aa(Ji, t, e);
    }
    function Nf(e) {
      ra(Ji, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || HE(i) || Hy(i))
              return t;
          }
        } else if (t.tag === $t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & it) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pa = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Ul = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Ar = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function Fw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = ut.ReactCurrentDispatcher, Ep = ut.ReactCurrentBatchConfig, wg, zf;
    wg = /* @__PURE__ */ new Set();
    var Gs = V, Xt = null, pr = null, vr = null, tm = !1, Cp = !1, Rp = 0, jw = 0, Hw = 25, P = null, _i = null, No = -1, _g = !1;
    function Ht() {
      {
        var e = P;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ee() {
      {
        var e = P;
        _i !== null && (No++, _i[No] !== e && Vw(e));
      }
    }
    function Uf(e) {
      e != null && !Xe(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Vw(e) {
      {
        var t = Pe(Xt);
        if (!wg.has(t) && (wg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= No; u++) {
            for (var s = _i[u], f = u === No ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function xg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      Gs = s, Xt = t, _i = e !== null ? e._debugHookTypes : null, No = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? fe.current = YC : _i !== null ? fe.current = $C : fe.current = BC;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Rp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, pr = null, vr = null, t.updateQueue = null, No = -1, fe.current = IC, f = a(i, u);
        } while (Cp);
      }
      fe.current = vm, t._debugHookTypes = _i;
      var v = pr !== null && pr.next !== null;
      if (Gs = V, Xt = null, pr = null, vr = null, P = null, _i = null, No = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== xe && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Ff() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function TC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== xe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function wC() {
      if (fe.current = vm, tm) {
        for (var e = Xt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Gs = V, Xt = null, pr = null, vr = null, _i = null, No = -1, P = null, FC = !1, Cp = !1, Rp = 0;
    }
    function Al() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Xt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function xi() {
      var e;
      if (pr === null) {
        var t = Xt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Xt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Xt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function _C() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
      var i = Al(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yw.bind(null, Xt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, w = null, N = null, U = null, j = g;
        do {
          var ae = j.lane;
          if (pu(Gs, ae)) {
            if (U !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = Te;
            }
            if (j.hasEagerState)
              x = j.eagerState;
            else {
              var wt = j.action;
              x = e(x, wt);
            }
          } else {
            var Le = {
              lane: ae,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Le, w = x) : U = U.next = Le, Xt.lanes = Ke(Xt.lanes, ae), $p(ae);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = x : U.next = N, ge(x, i.memoizedState) || Lp(), i.memoizedState = x, i.baseState = w, i.baseQueue = U, u.lastRenderedState = x;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var H = k.lane;
          Xt.lanes = Ke(Xt.lanes, H), $p(H), k = k.next;
        } while (k !== ht);
      } else f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ge(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function dD(e, t, a) {
    }
    function pD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Xt, u = Al(), s, f = Ur();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = Nm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(v, Gs) || xC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(DC.bind(null, i, y, e), [e]), i.flags |= pa, Tp(fr | Ar, bC.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = Xt, u = xi(), s = t();
      if (!zf) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, Lp());
      var y = u.queue;
      if (_p(DC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= pa, Tp(fr | Ar, bC.bind(null, i, y, s, t), void 0, null);
        var g = Nm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(g, Gs) || xC(i, t, s);
      }
      return s;
    }
    function xC(e, t, a) {
      e.flags |= Cc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Xt.updateQueue;
      if (u === null)
        u = _C(), Xt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function bC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, kC(t) && OC(e);
    }
    function DC(e, t, a) {
      var i = function() {
        kC(t) && OC(e);
      };
      return a(i);
    }
    function kC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function OC(e) {
      var t = Va(e, ze);
      t !== null && gr(t, e, ze, Bt);
    }
    function rm(e) {
      var t = Al();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, Xt, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return kg(bg);
    }
    function Ng(e) {
      return Og(bg);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Xt.updateQueue;
      if (s === null)
        s = _C(), Xt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = Al();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = xi();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Al(), s = i === void 0 ? null : i;
      Xt.flags |= e, u.memoizedState = Tp(fr | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = xi(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (xg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Xt.flags |= e, u.memoizedState = Tp(fr | t, a, f, s);
    }
    function lm(e, t) {
      return (Xt.mode & qt) !== xe ? wp(ml | pa | cd, Ar, e, t) : wp(pa | cd, Ar, e, t);
    }
    function _p(e, t) {
      return im(pa, Ar, e, t);
    }
    function Ug(e, t) {
      return wp(ft, Ul, e, t);
    }
    function um(e, t) {
      return im(ft, Ul, e, t);
    }
    function Ag(e, t) {
      var a = ft;
      return a |= hl, (Xt.mode & qt) !== xe && (a |= Lr), wp(a, dr, e, t);
    }
    function om(e, t) {
      return im(ft, dr, e, t);
    }
    function LC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Fg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ft;
      return u |= hl, (Xt.mode & qt) !== xe && (u |= Lr), wp(u, dr, LC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(ft, dr, LC.bind(null, t, e), i);
    }
    function Pw(e, t) {
    }
    var cm = Pw;
    function jg(e, t) {
      var a = Al(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Al(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function dm(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = Al();
      return t.memoizedState = e, e;
    }
    function MC(e) {
      var t = xi(), a = pr, i = a.memoizedState;
      return zC(t, i, e);
    }
    function NC(e) {
      var t = xi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return zC(t, a, e);
    }
    function zC(e, t, a) {
      var i = !kd(Gs);
      if (i) {
        if (!ge(a, t)) {
          var u = Ld();
          Xt.lanes = Ke(Xt.lanes, u), $p(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Bw(e, t, a) {
      var i = ma();
      $n(xs(i, Ua)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = rm(!1), t = e[0], a = e[1], i = Bw.bind(null, a), u = Al();
      return u.memoizedState = i, [t, i];
    }
    function UC() {
      var e = Mg(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    function AC() {
      var e = Ng(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    var FC = !1;
    function $w() {
      return FC;
    }
    function Bg() {
      var e = Al(), t = Nm(), a = t.identifierPrefix, i;
      if (Ur()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = jw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = xi(), t = e.memoizedState;
      return t;
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = jo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jC(e))
        HC(t, u);
      else {
        var s = pC(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          gr(s, e, i, f), VC(s, t, i);
        }
      }
      PC(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = jo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jC(e))
        HC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                kw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = pC(e, t, u, i);
        if (g !== null) {
          var x = Ra();
          gr(g, e, i, x), VC(g, t, i);
        }
      }
      PC(e, i);
    }
    function jC(e) {
      var t = e.alternate;
      return e === Xt || t !== null && t === Xt;
    }
    function HC(e, t) {
      Cp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Od(a)) {
        var i = t.lanes;
        i = Wc(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, _s(e, u);
      }
    }
    function PC(e, t, a) {
      hs(e, t);
    }
    var vm = {
      readContext: nr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: me
    }, BC = null, $C = null, YC = null, IC = null, Fl = null, Zi = null, hm = null;
    {
      var $g = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      BC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ht(), Uf(t), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ht(), Uf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ht(), Uf(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ht(), Uf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ht(), Uf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ht(), Uf(t);
          var a = fe.current;
          fe.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ht();
          var i = fe.current;
          fe.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ht(), zg(e);
        },
        useState: function(e) {
          P = "useState", Ht();
          var t = fe.current;
          fe.current = Fl;
          try {
            return rm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ht(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ht(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ht(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ht(), Bg();
        },
        unstable_isNewReconciler: me
      }, $C = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), zg(e);
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = Fl;
          try {
            return rm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", ee(), Bg();
        },
        unstable_isNewReconciler: me
      }, YC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = Zi;
          try {
            return dm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = Zi;
          try {
            return kg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), am();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Mg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), MC(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), UC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", ee(), pm();
        },
        unstable_isNewReconciler: me
      }, IC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = hm;
          try {
            return dm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = hm;
          try {
            return Og(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), am();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = hm;
          try {
            return Ng(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), NC(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), AC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", ee(), pm();
        },
        unstable_isNewReconciler: me
      }, Fl = {
        readContext: function(e) {
          return $g(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), Ht(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), Ht(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), Ht(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), Ht(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), Ht(), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), Ht();
          var a = fe.current;
          fe.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), Ht();
          var i = fe.current;
          fe.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), Ht(), zg(e);
        },
        useState: function(e) {
          P = "useState", Ie(), Ht();
          var t = fe.current;
          fe.current = Fl;
          try {
            return rm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), Ht(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), Ht(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), Ht(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ie(), Ht(), Bg();
        },
        unstable_isNewReconciler: me
      }, Zi = {
        readContext: function(e) {
          return $g(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), ee();
          var a = fe.current;
          fe.current = Zi;
          try {
            return dm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), ee();
          var i = fe.current;
          fe.current = Zi;
          try {
            return kg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), ee(), am();
        },
        useState: function(e) {
          P = "useState", Ie(), ee();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Mg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), ee(), MC(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), ee(), UC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), ee(), pm();
        },
        unstable_isNewReconciler: me
      }, hm = {
        readContext: function(e) {
          return $g(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), ee();
          var a = fe.current;
          fe.current = Zi;
          try {
            return dm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), ee();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Og(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), ee(), am();
        },
        useState: function(e) {
          P = "useState", Ie(), ee();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Ng(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), ee(), NC(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), ee(), AC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), ee(), pm();
        },
        unstable_isNewReconciler: me
      };
    }
    var zo = A.unstable_now, QC = 0, mm = -1, xp = -1, ym = -1, Yg = !1, gm = !1;
    function WC() {
      return Yg;
    }
    function Qw() {
      gm = !0;
    }
    function Ww() {
      Yg = !1, gm = !1;
    }
    function Gw() {
      Yg = gm, gm = !1;
    }
    function GC() {
      return QC;
    }
    function qC() {
      QC = zo();
    }
    function Ig(e) {
      xp = zo(), e.actualStartTime < 0 && (e.actualStartTime = zo());
    }
    function XC(e) {
      xp = -1;
    }
    function Sm(e, t) {
      if (xp >= 0) {
        var a = zo() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function jl(e) {
      if (mm >= 0) {
        var t = zo() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case kt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (ym >= 0) {
        var t = zo() - ym;
        ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case kt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Hl() {
      mm = zo();
    }
    function Wg() {
      ym = zo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function el(e, t) {
      if (e && e.defaultProps) {
        var a = Ge({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Jg, Zg, eS, KC, Em, tS, nS, rS, bp;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), bp = /* @__PURE__ */ new Set();
      var JC = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          JC.has(a) || (JC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, KC = function(e, t) {
        if (t === void 0) {
          var a = Rt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & qe) {
          Pt(!0);
          try {
            s = a(i, u);
          } finally {
            Pt(!1);
          }
        }
        KC(t, s);
      }
      var f = s == null ? u : Ge({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: fd,
      enqueueSetState: function(e, t, a) {
        var i = to(e), u = Ra(), s = jo(i), f = ku(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = Oo(i, f, s);
        p !== null && (gr(p, i, s, u), qh(p, i, s)), hs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = to(e), u = Ra(), s = jo(i), f = ku(u, s);
        f.tag = hC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = Oo(i, f, s);
        p !== null && (gr(p, i, s, u), qh(p, i, s)), hs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = to(e), i = Ra(), u = jo(a), s = ku(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = Oo(a, s, u);
        f !== null && (gr(f, a, u, i), qh(f, a, u)), _d(a, u);
      }
    };
    function ZC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qe) {
            Pt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ke(a, i) || !ke(u, s) : !0;
    }
    function qw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Rt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === xe && (bp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === xe && (bp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Xe(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function eR(e, t) {
      t.updater = iS, e.stateNode = t, os(t, e), t._reactInternalInstance = qg;
    }
    function tR(e, t, a) {
      var i = !1, u = ai, s = ai, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? wf(e, u) : ai;
      }
      var g = new t(a, s);
      if (e.mode & qe) {
        Pt(!0);
        try {
          g = new t(a, s);
        } finally {
          Pt(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      eR(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var w = Rt(t) || "Component";
          Kg.has(w) || (Kg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var ae = Rt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(ae) || (Zg.add(ae), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Le, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && YE(e, u, s), g;
    }
    function Xw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Pe(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function nR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Pe(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      qw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Tf(e, t, !0);
        u.context = wf(e, f);
      }
      {
        if (u.state === a) {
          var p = Rt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qe && Ki.recordLegacyContextWarning(e, u), Ki.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xw(e, u), Xh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = ft;
        y |= hl, (e.mode & qt) !== xe && (y |= Lr), e.flags |= y;
      }
    }
    function Kw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ai;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Tf(e, t, !0);
        v = wf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && nR(e, u, a, v), yC();
      var w = e.memoizedState, N = u.state = w;
      if (Xh(e, a, u, i), N = e.memoizedState, s === a && w === N && !Lh() && !Kh()) {
        if (typeof u.componentDidMount == "function") {
          var U = ft;
          U |= hl, (e.mode & qt) !== xe && (U |= Lr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), N = e.memoizedState);
      var j = Kh() || ZC(e, t, s, a, w, N, v);
      if (j) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = ft;
          ae |= hl, (e.mode & qt) !== xe && (ae |= Lr), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = ft;
          Le |= hl, (e.mode & qt) !== xe && (Le |= Lr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function Jw(e, t, a, i, u) {
      var s = t.stateNode;
      mC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : el(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = ai;
      if (typeof g == "object" && g !== null)
        x = nr(g);
      else {
        var w = Tf(t, a, !0);
        x = wf(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && nR(t, s, i, x), yC();
      var j = t.memoizedState, ae = s.state = j;
      if (Xh(t, i, s, u), ae = t.memoizedState, f === v && j === ae && !Lh() && !Kh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ma), !1;
      typeof N == "function" && (aS(t, a, N, i), ae = t.memoizedState);
      var Le = Kh() || ZC(t, a, p, i, j, ae, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      re;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, x)), typeof s.componentDidUpdate == "function" && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ma)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ma), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = x, Le;
    }
    function qs(e, t) {
      return {
        value: e,
        source: t,
        stack: Ct(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Zw(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Zw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Pe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Pe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var e_ = typeof WeakMap == "function" ? WeakMap : Map;
    function rR(e, t, a) {
      var i = ku(Bt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qx(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = ku(Bt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          v0(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        v0(e), oS(e, t), typeof u != "function" && Yx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, ze) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Pe(e) || "Unknown"));
      }), i;
    }
    function aR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new e_(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wx.bind(null, e, t, a);
        wr && Yp(e, a), t.then(s, s);
      }
    }
    function t_(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function n_(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === xe && (a === be || a === Ne || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function iR(e) {
      var t = e;
      do {
        if (t.tag === Ce && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function lR(e, t, a, i, u) {
      if ((e.mode & lt) === xe) {
        if (e === t)
          e.flags |= Na;
        else {
          if (e.flags |= it, a.flags |= Za, a.flags &= -52805, a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Mt;
            else {
              var f = ku(Bt, ze);
              f.tag = Qh, Oo(a, f, ze);
            }
          }
          a.lanes = Ke(a.lanes, ze);
        }
        return e;
      }
      return e.flags |= Na, e.lanes = u, e;
    }
    function r_(e, t, a, i, u) {
      if (a.flags |= au, wr && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        n_(a), Ur() && a.mode & lt && KE();
        var f = iR(t);
        if (f !== null) {
          f.flags &= -257, lR(f, t, a, e, u), f.mode & lt && aR(e, s, u), t_(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            aR(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ur() && a.mode & lt) {
        KE();
        var v = iR(t);
        if (v !== null) {
          (v.flags & Na) === _e && (v.flags |= yn), lR(v, t, a, e, u), tg(qs(i, a));
          return;
        }
      }
      i = qs(i, a), Ax(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= Na;
            var x = Zn(u);
            y.lanes = Ke(y.lanes, x);
            var w = rR(y, g, x);
            mg(y, w);
            return;
          }
          case pe:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & it) === _e && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !i0(j))) {
              y.flags |= Na;
              var ae = Zn(u);
              y.lanes = Ke(y.lanes, ae);
              var Le = sS(y, N, ae);
              mg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function a_() {
      return null;
    }
    var Dp = ut.ReactCurrentOwner, tl = !1, cS, kp, fS, dS, pS, Xs, vS, Cm, Op;
    cS = {}, kp = {}, fS = {}, dS = {}, pS = {}, Xs = !1, vS = {}, Cm = {}, Op = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = sC(t, null, a, i) : t.child = Df(t, e.child, a, i);
    }
    function i_(e, t, a, i) {
      t.child = Df(t, e.child, null, i), t.child = Df(t, null, a, i);
    }
    function uR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Of(t, u), za(t);
      {
        if (Dp.current = t, ba(!0), v = Af(e, t, f, i, p, u), y = Ff(), t.mode & qe) {
          Pt(!0);
          try {
            v = Af(e, t, f, i, p, u), y = Ff();
          } finally {
            Pt(!1);
          }
        }
        ba(!1);
      }
      return El(), e !== null && !tl ? (TC(e, t, u), Ou(e, t, u)) : (Ur() && y && qy(t), t.flags |= $i, Ea(e, t, v, u), t.child);
    }
    function oR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (cb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = He, t.type = f, yS(t, s), sR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && qi(
            p,
            i,
            // Resolved props
            "prop",
            Rt(s)
          ), a.defaultProps !== void 0) {
            var v = Rt(s) || "Unknown";
            Op[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Op[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && qi(
          x,
          i,
          // Resolved props
          "prop",
          Rt(g)
        );
      }
      var w = e.child, N = TS(e, u);
      if (!N) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : ke, j(U, i) && e.ref === t.ref)
          return Ou(e, t, u);
      }
      t.flags |= $i;
      var ae = tc(w, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function sR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && qi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Rt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ke(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (tl = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & Za) !== _e && (tl = !0);
          else return t.lanes = e.lanes, Ou(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function cR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & lt) === xe) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (ea(a, ha)) {
          var x = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var w = s !== null ? s.baseLanes : a;
          zm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ha;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, zm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ke(s.baseLanes, a), t.memoizedState = null) : N = a, zm(t, N);
      }
      return Ea(e, t, u, a), t.child;
    }
    function l_(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function u_(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function o_(e, t, a) {
      {
        t.flags |= ft;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function fR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nn, t.flags |= cs);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = wf(t, p);
      }
      var v, y;
      Of(t, u), za(t);
      {
        if (Dp.current = t, ba(!0), v = Af(e, t, a, i, f, u), y = Ff(), t.mode & qe) {
          Pt(!0);
          try {
            v = Af(e, t, a, i, f, u), y = Ff();
          } finally {
            Pt(!1);
          }
        }
        ba(!1);
      }
      return El(), e !== null && !tl ? (TC(e, t, u), Ou(e, t, u)) : (Ur() && y && qy(t), t.flags |= $i, Ea(e, t, v, u), t.child);
    }
    function dR(e, t, a, i, u) {
      {
        switch (_b(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= it, t.flags |= Na;
            var y = new Error("Simulated error coming from DevTools"), g = Zn(u);
            t.lanes = Ke(t.lanes, g);
            var x = sS(t, qs(y, t), g);
            mg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && qi(
            w,
            i,
            // Resolved props
            "prop",
            Rt(a)
          );
        }
      }
      var N;
      zl(a) ? (N = !0, Nh(t)) : N = !1, Of(t, u);
      var U = t.stateNode, j;
      U === null ? (Tm(e, t), tR(t, a, i), lS(t, a, i, u), j = !0) : e === null ? j = Kw(t, a, i, u) : j = Jw(e, t, a, i, u);
      var ae = mS(e, t, a, j, N, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (Xs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Pe(t) || "a component"), Xs = !0);
      }
      return ae;
    }
    function mS(e, t, a, i, u, s) {
      fR(e, t);
      var f = (t.flags & it) !== _e;
      if (!i && !f)
        return u && WE(t, a, !1), Ou(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XC();
      else {
        za(t);
        {
          if (ba(!0), v = p.render(), t.mode & qe) {
            Pt(!0);
            try {
              p.render();
            } finally {
              Pt(!1);
            }
          }
          ba(!1);
        }
        El();
      }
      return t.flags |= $i, e !== null && f ? i_(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && WE(t, a, !0), t.child;
    }
    function pR(e) {
      var t = e.stateNode;
      t.pendingContext ? IE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && IE(e, t.context, !1), yg(e, t.containerInfo);
    }
    function s_(e, t, a) {
      if (pR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      mC(e, t), Xh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & yn) {
          var g = qs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return vR(e, t, p, a, g);
        } else if (p !== s) {
          var x = qs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return vR(e, t, p, a, x);
        } else {
          dw(t);
          var w = sC(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & -3 | zn, N = N.sibling;
        }
      } else {
        if (bf(), p === s)
          return Ou(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function vR(e, t, a, i, u) {
      return bf(), tg(u), t.flags |= yn, Ea(e, t, a, i), t.child;
    }
    function c_(e, t, a) {
      EC(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Gt), fR(e, t), Ea(e, t, f, a), t.child;
    }
    function f_(e, t) {
      return e === null && eg(t), null;
    }
    function d_(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = fb(v), g = el(v, u), x;
      switch (y) {
        case be:
          return yS(t, v), t.type = v = If(v), x = hS(null, t, v, g, i), x;
        case pe:
          return t.type = v = WS(v), x = dR(null, t, v, g, i), x;
        case Ne:
          return t.type = v = GS(v), x = uR(null, t, v, g, i), x;
        case st: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && qi(
              w,
              g,
              // Resolved for outer only
              "prop",
              Rt(v)
            );
          }
          return x = oR(
            null,
            t,
            v,
            el(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function p_(e, t, a, i, u) {
      Tm(e, t), t.tag = pe;
      var s;
      return zl(a) ? (s = !0, Nh(t)) : s = !1, Of(t, u), tR(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function v_(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = wf(t, f);
      }
      Of(t, i);
      var p, v;
      za(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Rt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & qe && Ki.recordLegacyContextWarning(t, null), ba(!0), Dp.current = t, p = Af(null, t, a, u, s, i), v = Ff(), ba(!1);
      }
      if (El(), t.flags |= $i, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Rt(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Rt(a) || "Unknown";
          kp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), kp[x] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return zl(a) ? (w = !0, Nh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), eR(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = be, t.mode & qe) {
          Pt(!0);
          try {
            p = Af(null, t, a, u, s, i), v = Ff();
          } finally {
            Pt(!1);
          }
        }
        return Ur() && v && qy(t), Ea(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Rt(t) || "Unknown";
          Op[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Op[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Rt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Rt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: An
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: a_(),
        transitions: null
      };
    }
    function h_(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function m_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Sp);
    }
    function y_(e, t) {
      return ws(e.childLanes, t);
    }
    function hR(e, t, a) {
      var i = t.pendingProps;
      xb(t) && (t.flags |= it);
      var u = Ji.current, s = !1, f = (t.flags & it) !== _e;
      if (f || m_(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Uw(u, RC)), u = Mf(u), Mo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return R_(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = g_(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, x;
        } else
          return ES(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return T_(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, ae = i.children, Le = E_(e, t, ae, j, a), Te = t.child, wt = e.child.memoizedState;
          return Te.memoizedState = wt === null ? SS(a) : h_(wt, a), Te.childLanes = y_(e, a), t.memoizedState = gS, Le;
        } else {
          var ht = i.children, k = S_(e, t, ht, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function g_(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & lt) === xe && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & gt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vo(a, u, i, null)) : (p = CS(f, u), v = Vo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return m0(e, t, V, null);
    }
    function mR(e, t) {
      return tc(e, t);
    }
    function S_(e, t, a, i) {
      var u = e.child, s = u.sibling, f = mR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === xe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= qr) : p.push(s);
      }
      return t.child = f, f;
    }
    function E_(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & lt) === xe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & gt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = mR(f, v), y.subtreeFlags = f.subtreeFlags & Un;
      var x;
      return p !== null ? x = tc(p, i) : (x = Vo(i, s, u, null), x.flags |= Mn), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function Rm(e, t, a, i) {
      i !== null && tg(i), Df(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= Mn, t.memoizedState = null, f;
    }
    function C_(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Vo(i, s, u, null);
      return v.flags |= Mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & lt) !== xe && Df(t, e.child, null, u), v;
    }
    function R_(e, t, a) {
      return (e.mode & lt) === xe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ze) : Hy(t) ? e.lanes = Jn : e.lanes = ha, null;
    }
    function T_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= -257;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= it, null;
          var H = i.children, O = i.fallback, G = C_(e, t, H, O, f), de = t.child;
          return de.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (cw(), (t.mode & lt) === xe)
          return Rm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = b1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(x, p, y);
          return Rm(e, t, f, w);
        }
        var N = ea(f, e.childLanes);
        if (tl || N) {
          var U = Nm();
          if (U !== null) {
            var j = Xc(U, f);
            if (j !== An && j !== s.retryLane) {
              s.retryLane = j;
              var ae = Bt;
              Va(e, j), gr(U, e, j, ae);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Le);
        } else if (HE(u)) {
          t.flags |= it, t.child = e.child;
          var Te = Gx.bind(null, e);
          return D1(u, Te), null;
        } else {
          pw(t, u, s.treeContext);
          var wt = i.children, ht = ES(t, wt);
          return ht.flags |= zn, ht;
        }
      }
    }
    function yR(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), fg(e.return, t, a);
    }
    function w_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var u = i.memoizedState;
          u !== null && yR(i, a, e);
        } else if (i.tag === $t)
          yR(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function __(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function x_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function b_(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function gR(e, t) {
      {
        var a = Xe(e), i = !a && typeof dn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function D_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Xe(e)) {
          for (var a = 0; a < e.length; a++)
            if (!gR(e[a], a))
              return;
        } else {
          var i = dn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!gR(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function SR(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      x_(u), b_(s, u), D_(f, u), Ea(e, t, f, a);
      var p = Ji.current, v = Eg(p, Sp);
      if (v)
        p = Cg(p, Sp), t.flags |= it;
      else {
        var y = e !== null && (e.flags & it) !== _e;
        y && w_(t, t.child, a), p = Mf(p);
      }
      if (Mo(t, p), (t.mode & lt) === xe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = __(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && em(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = w, w = N, N = j;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function k_(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Df(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var ER = !1;
    function O_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || ER || (ER = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && qi(v, s, "prop", "Context.Provider");
      }
      if (dC(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !Lh())
            return Ou(e, t, a);
        } else
          xw(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var CR = !1;
    function L_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (CR || (CR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Of(t, a);
      var f = nr(i);
      za(t);
      var p;
      return Dp.current = t, ba(!0), p = s(f), ba(!1), El(), t.flags |= $i, Ea(e, t, p, a), t.child;
    }
    function Lp() {
      tl = !0;
    }
    function Tm(e, t) {
      (t.mode & lt) === xe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Mn);
    }
    function Ou(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), $p(t.lanes), ea(a, t.childLanes) ? (ww(e, t), t.child) : null;
    }
    function M_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= qr) : s.push(e), a.flags |= Mn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function N_(e, t, a) {
      switch (t.tag) {
        case Z:
          pR(t), t.stateNode, bf();
          break;
        case ue:
          EC(t);
          break;
        case pe: {
          var i = t.type;
          zl(i) && Nh(t);
          break;
        }
        case Fe:
          yg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          dC(t, s, u);
          break;
        }
        case kt:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= ft);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mo(t, Mf(Ji.current)), t.flags |= it, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return hR(e, t, a);
            Mo(t, Mf(Ji.current));
            var x = Ou(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Mo(t, Mf(Ji.current));
          break;
        }
        case $t: {
          var w = (e.flags & it) !== _e, N = ea(a, t.childLanes);
          if (w) {
            if (N)
              return SR(e, t, a);
            t.flags |= it;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Mo(t, Ji.current), N)
            break;
          return null;
        }
        case Me:
        case At:
          return t.lanes = V, cR(e, t, a);
      }
      return Ou(e, t, a);
    }
    function RR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return M_(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          tl = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & it) === _e)
            return tl = !1, N_(e, t, a);
          (e.flags & Za) !== _e ? tl = !0 : tl = !1;
        }
      } else if (tl = !1, Ur() && aw(t)) {
        var f = t.index, p = iw();
        XE(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case Be:
          return v_(e, t, t.type, a);
        case Sn: {
          var v = t.elementType;
          return d_(e, t, v, a);
        }
        case be: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : el(y, g);
          return hS(e, t, y, x, a);
        }
        case pe: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : el(w, N);
          return dR(e, t, w, U, a);
        }
        case Z:
          return s_(e, t, a);
        case ue:
          return c_(e, t, a);
        case we:
          return f_(e, t);
        case Ce:
          return hR(e, t, a);
        case Fe:
          return k_(e, t, a);
        case Ne: {
          var j = t.type, ae = t.pendingProps, Le = t.elementType === j ? ae : el(j, ae);
          return uR(e, t, j, Le, a);
        }
        case ot:
          return l_(e, t, a);
        case Hn:
          return u_(e, t, a);
        case kt:
          return o_(e, t, a);
        case rt:
          return O_(e, t, a);
        case rn:
          return L_(e, t, a);
        case st: {
          var Te = t.type, wt = t.pendingProps, ht = el(Te, wt);
          if (t.type !== t.elementType) {
            var k = Te.propTypes;
            k && qi(
              k,
              ht,
              // Resolved for outer only
              "prop",
              Rt(Te)
            );
          }
          return ht = el(Te.type, ht), oR(e, t, Te, ht, a);
        }
        case He:
          return sR(e, t, t.type, t.pendingProps, a);
        case Mt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : el(H, O);
          return p_(e, t, H, G, a);
        }
        case $t:
          return SR(e, t, a);
        case mt:
          break;
        case Me:
          return cR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= ft;
    }
    function TR(e) {
      e.flags |= Nn, e.flags |= cs;
    }
    var wR, wS, _R, xR;
    wR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === we)
          t1(e, u.stateNode);
        else if (u.tag !== Fe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, _R = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = r1(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, xR = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Mp(e, t) {
      if (!Ur())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = _e;
      if (t) {
        if ((e.mode & gt) !== xe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & gt) !== xe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function z_(e, t, a) {
      if (gw() && (t.mode & lt) !== xe && (t.flags & it) === _e)
        return rC(t), bf(), t.flags |= yn | au | Na, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), Fr(t), (t.mode & gt) !== xe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & it) === _e && (t.memoizedState = null), t.flags |= ft, Fr(t), (t.mode & gt) !== xe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return aC(), !0;
    }
    function bR(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case Be:
        case Sn:
        case He:
        case be:
        case Ne:
        case ot:
        case Hn:
        case kt:
        case rn:
        case st:
          return Fr(t), null;
        case pe: {
          var u = t.type;
          return zl(u) && Mh(t), Fr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Lf(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== _e) && (t.flags |= Ma, aC());
            }
          }
          return wS(e, t), Fr(t), null;
        }
        case ue: {
          Sg(t);
          var v = SC(), y = t.type;
          if (e !== null && t.stateNode != null)
            _R(e, t, y, i, v), e.ref !== t.ref && TR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = gg(), x = jh(t);
            if (x)
              vw(t, v, g) && jf(t);
            else {
              var w = e1(y, i, v, g, t);
              wR(w, t, !1, !1), t.stateNode = w, n1(w, y, i, v) && jf(t);
            }
            t.ref !== null && TR(t);
          }
          return Fr(t), null;
        }
        case we: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            xR(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = SC(), ae = gg(), Le = jh(t);
            Le ? hw(t) && jf(t) : t.stateNode = a1(N, j, ae, t);
          }
          return Fr(t), null;
        }
        case Ce: {
          Nf(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var wt = z_(e, t, Te);
            if (!wt)
              return t.flags & Na ? t : null;
          }
          if ((t.flags & it) !== _e)
            return t.lanes = a, (t.mode & gt) !== xe && Gg(t), t;
          var ht = Te !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var H = t.child;
            if (H.flags |= mi, (t.mode & lt) !== xe) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(Ji.current, RC) ? Ux() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= ft), Fr(t), (t.mode & gt) !== xe && ht) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case Fe:
          return Lf(t), wS(e, t), e === null && K1(t.stateNode.containerInfo), Fr(t), null;
        case rt:
          var oe = t.type._context;
          return cg(oe, t), Fr(t), null;
        case Mt: {
          var Ae = t.type;
          return zl(Ae) && Mh(t), Fr(t), null;
        }
        case $t: {
          Nf(t);
          var We = t.memoizedState;
          if (We === null)
            return Fr(t), null;
          var Kt = (t.flags & it) !== _e, Ot = We.rendering;
          if (Ot === null)
            if (Kt)
              Mp(We, !1);
            else {
              var In = Fx() && (e === null || (e.flags & it) === _e);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = em(Lt);
                  if (jn !== null) {
                    Kt = !0, t.flags |= it, Mp(We, !1);
                    var la = jn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= ft), t.subtreeFlags = _e, _w(t, a), Mo(t, Cg(Ji.current, Sp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              We.tail !== null && Rn() > GR() && (t.flags |= it, Kt = !0, Mp(We, !1), t.lanes = jv);
            }
          else {
            if (!Kt) {
              var Br = em(Ot);
              if (Br !== null) {
                t.flags |= it, Kt = !0;
                var li = Br.updateQueue;
                if (li !== null && (t.updateQueue = li, t.flags |= ft), Mp(We, !0), We.tail === null && We.tailMode === "hidden" && !Ot.alternate && !Ur())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Rn() * 2 - We.renderingStartTime > GR() && a !== ha && (t.flags |= it, Kt = !0, Mp(We, !1), t.lanes = jv);
            }
            if (We.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var Ta = We.last;
              Ta !== null ? Ta.sibling = Ot : t.child = Ot, We.last = Ot;
            }
          }
          if (We.tail !== null) {
            var wa = We.tail;
            We.rendering = wa, We.tail = wa.sibling, We.renderingStartTime = Rn(), wa.sibling = null;
            var ua = Ji.current;
            return Kt ? ua = Cg(ua, Sp) : ua = Mf(ua), Mo(t, ua), wa;
          }
          return Fr(t), null;
        }
        case mt:
          break;
        case Me:
        case At: {
          PS(t);
          var Uu = t.memoizedState, Qf = Uu !== null;
          if (e !== null) {
            var Gp = e.memoizedState, Bl = Gp !== null;
            Bl !== Qf && (t.flags |= mi);
          }
          return !Qf || (t.mode & lt) === xe ? Fr(t) : ea(Pl, ha) && (Fr(t), t.subtreeFlags & (Mn | ft) && (t.flags |= mi)), null;
        }
        case vt:
          return null;
        case tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function U_(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type;
          zl(i) && Mh(t);
          var u = t.flags;
          return u & Na ? (t.flags = u & -65537 | it, (t.mode & gt) !== xe && Gg(t), t) : null;
        }
        case Z: {
          t.stateNode, Lf(t), Qy(t), Tg();
          var s = t.flags;
          return (s & Na) !== _e && (s & it) === _e ? (t.flags = s & -65537 | it, t) : null;
        }
        case ue:
          return Sg(t), null;
        case Ce: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Na ? (t.flags = p & -65537 | it, (t.mode & gt) !== xe && Gg(t), t) : null;
        }
        case $t:
          return Nf(t), null;
        case Fe:
          return Lf(t), null;
        case rt:
          var v = t.type._context;
          return cg(v, t), null;
        case Me:
        case At:
          return PS(t), null;
        case vt:
          return null;
        default:
          return null;
      }
    }
    function DR(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && Mh(t);
          break;
        }
        case Z: {
          t.stateNode, Lf(t), Qy(t), Tg();
          break;
        }
        case ue: {
          Sg(t);
          break;
        }
        case Fe:
          Lf(t);
          break;
        case Ce:
          Nf(t);
          break;
        case $t:
          Nf(t);
          break;
        case rt:
          var u = t.type._context;
          cg(u, t);
          break;
        case Me:
        case At:
          PS(t);
          break;
      }
    }
    var kR = null;
    kR = /* @__PURE__ */ new Set();
    var wm = !1, jr = !1, A_ = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Hf = null, Vf = null;
    function F_(e) {
      La(null, function() {
        throw e;
      }), sd();
    }
    var j_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & gt)
        try {
          Hl(), t.componentWillUnmount();
        } finally {
          jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function OR(e, t) {
      try {
        Uo(dr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        j_(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function H_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function LR(e, t) {
      try {
        NR(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if ($e && nt && e.mode & gt)
              try {
                Hl(), i = a(null);
              } finally {
                jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var MR = !1;
    function V_(e, t) {
      JT(e.containerInfo), Se = t, P_();
      var a = MR;
      return MR = !1, a;
    }
    function P_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & yl) !== _e && t !== null ? (t.return = e, Se = t) : B_();
      }
    }
    function B_() {
      for (; Se !== null; ) {
        var e = Se;
        It(e);
        try {
          $_(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function $_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ma) !== _e) {
        switch (It(e), e.tag) {
          case be:
          case Ne:
          case He:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Xs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : el(e.type, i), u);
              {
                var p = kR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Pe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              T1(v.containerInfo);
            }
            break;
          }
          case ue:
          case we:
          case Fe:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function nl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ar) !== Pa ? Cl(t) : (e & dr) !== Pa && Cd(t), (e & Ul) !== Pa && Ip(!0), _m(t, a, p), (e & Ul) !== Pa && Ip(!1), (e & Ar) !== Pa ? Tc() : (e & dr) !== Pa && io());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Uo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ar) !== Pa ? Av(t) : (e & dr) !== Pa && Fv(t);
            var f = s.create;
            (e & Ul) !== Pa && Ip(!0), s.destroy = f(), (e & Ul) !== Pa && Ip(!1), (e & Ar) !== Pa ? Ii() : (e & dr) !== Pa && wc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== _e ? v = "useLayoutEffect" : (s.tag & Ul) !== _e ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Y_(e, t) {
      if ((t.flags & ft) !== _e)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = GC(), p = t.alternate === null ? "mount" : "update";
            WC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case kt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function I_(e, t, a, i) {
      if ((a.flags & gl) !== _e)
        switch (a.tag) {
          case be:
          case Ne:
          case He: {
            if (!jr)
              if (a.mode & gt)
                try {
                  Hl(), Uo(dr | fr, a);
                } finally {
                  jl(a);
                }
              else
                Uo(dr | fr, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & ft && !jr)
              if (t === null)
                if (a.type === a.elementType && !Xs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & gt)
                  try {
                    Hl(), u.componentDidMount();
                  } finally {
                    jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : el(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Xs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & gt)
                  try {
                    Hl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Xs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), gC(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              gC(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & ft) {
              var x = a.type, w = a.memoizedProps;
              s1(g, x, w);
            }
            break;
          }
          case we:
            break;
          case Fe:
            break;
          case kt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, ae = a.stateNode.effectDuration, Le = GC(), Te = t === null ? "mount" : "update";
              WC() && (Te = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, Te, ae, Le), Bx(a);
                var wt = a.return;
                e: for (; wt !== null; ) {
                  switch (wt.tag) {
                    case Z:
                      var ht = wt.stateNode;
                      ht.effectDuration += ae;
                      break e;
                    case kt:
                      var k = wt.stateNode;
                      k.effectDuration += ae;
                      break e;
                  }
                  wt = wt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            Z_(e, a);
            break;
          }
          case $t:
          case Mt:
          case mt:
          case Me:
          case At:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      jr || a.flags & Nn && NR(a);
    }
    function Q_(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          if (e.mode & gt)
            try {
              Hl(), OR(e, e.return);
            } finally {
              jl(e);
            }
          else
            OR(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && H_(e, e.return, t), LR(e, e.return);
          break;
        }
        case ue: {
          LR(e, e.return);
          break;
        }
      }
    }
    function W_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? S1(u) : C1(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === we) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? E1(s) : R1(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === At) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function NR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & gt)
            try {
              Hl(), u = t(i);
            } finally {
              jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Pe(e)), t.current = i;
      }
    }
    function G_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function q_(e) {
      for (var t = e.return; t !== null; ) {
        if (UR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function UR(e) {
      return e.tag === ue || e.tag === Z || e.tag === Fe;
    }
    function AR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || UR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== we && t.tag !== fn; ) {
          if (t.flags & Mn || t.child === null || t.tag === Fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Mn))
          return t.stateNode;
      }
    }
    function X_(e) {
      var t = q_(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Gt && (jE(a), t.flags &= -33);
          var i = AR(e);
          bS(e, i, a);
          break;
        }
        case Z:
        case Fe: {
          var u = t.stateNode.containerInfo, s = AR(e);
          xS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ue || i === we;
      if (u) {
        var s = e.stateNode;
        t ? h1(a, s, t) : p1(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ue || i === we;
      if (u) {
        var s = e.stateNode;
        t ? v1(a, s, t) : d1(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, rl = !1;
    function K_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Hr = i.stateNode, rl = !1;
              break e;
            }
            case Z: {
              Hr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
            case Fe: {
              Hr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FR(e, t, a), Hr = null, rl = !1;
      }
      G_(a);
    }
    function Ao(e, t, a) {
      for (var i = a.child; i !== null; )
        FR(e, t, i), i = i.sibling;
    }
    function FR(e, t, a) {
      switch (ao(a), a.tag) {
        case ue:
          jr || Pf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case we: {
          {
            var i = Hr, u = rl;
            Hr = null, Ao(e, t, a), Hr = i, rl = u, Hr !== null && (rl ? y1(Hr, a.stateNode) : m1(Hr, a.stateNode));
          }
          return;
        }
        case fn: {
          Hr !== null && (rl ? g1(Hr, a.stateNode) : jy(Hr, a.stateNode));
          return;
        }
        case Fe: {
          {
            var s = Hr, f = rl;
            Hr = a.stateNode.containerInfo, rl = !0, Ao(e, t, a), Hr = s, rl = f;
          }
          return;
        }
        case be:
        case Ne:
        case st:
        case He: {
          if (!jr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, w = x.destroy, N = x.tag;
                  w !== void 0 && ((N & Ul) !== Pa ? _m(a, t, w) : (N & dr) !== Pa && (Cd(a), a.mode & gt ? (Hl(), _m(a, t, w), jl(a)) : _m(a, t, w), io())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ao(e, t, a);
          return;
        }
        case pe: {
          if (!jr) {
            Pf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && _S(a, t, U);
          }
          Ao(e, t, a);
          return;
        }
        case mt: {
          Ao(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var j = jr;
            jr = j || a.memoizedState !== null, Ao(e, t, a), jr = j;
          } else
            Ao(e, t, a);
          break;
        }
        default: {
          Ao(e, t, a);
          return;
        }
      }
    }
    function J_(e) {
      e.memoizedState;
    }
    function Z_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && F1(s);
          }
        }
      }
    }
    function jR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new A_()), t.forEach(function(i) {
          var u = qx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), wr)
              if (Hf !== null && Vf !== null)
                Yp(Vf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ex(e, t, a) {
      Hf = a, Vf = e, It(t), HR(t, e), It(t), Hf = null, Vf = null;
    }
    function al(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            K_(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = qa();
      if (t.subtreeFlags & no)
        for (var p = t.child; p !== null; )
          It(p), HR(p, e), p = p.sibling;
      It(f);
    }
    function HR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case be:
        case Ne:
        case st:
        case He: {
          if (al(t, e), Vl(e), u & ft) {
            try {
              nl(Ul | fr, e, e.return), Uo(Ul | fr, e);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
            if (e.mode & gt) {
              try {
                Hl(), nl(dr | fr, e, e.return);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
              jl(e);
            } else
              try {
                nl(dr | fr, e, e.return);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
          }
          return;
        }
        case pe: {
          al(t, e), Vl(e), u & Nn && i !== null && Pf(i, i.return);
          return;
        }
        case ue: {
          al(t, e), Vl(e), u & Nn && i !== null && Pf(i, i.return);
          {
            if (e.flags & Gt) {
              var s = e.stateNode;
              try {
                jE(s);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
            }
            if (u & ft) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    c1(f, g, y, v, p, e);
                  } catch (Ae) {
                    cn(e, e.return, Ae);
                  }
              }
            }
          }
          return;
        }
        case we: {
          if (al(t, e), Vl(e), u & ft) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              f1(x, N, w);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
          }
          return;
        }
        case Z: {
          if (al(t, e), Vl(e), u & ft && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                A1(t.containerInfo);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
          }
          return;
        }
        case Fe: {
          al(t, e), Vl(e);
          return;
        }
        case Ce: {
          al(t, e), Vl(e);
          var j = e.child;
          if (j.flags & mi) {
            var ae = j.stateNode, Le = j.memoizedState, Te = Le !== null;
            if (ae.isHidden = Te, Te) {
              var wt = j.alternate !== null && j.alternate.memoizedState !== null;
              wt || zx();
            }
          }
          if (u & ft) {
            try {
              J_(e);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
            jR(e);
          }
          return;
        }
        case Me: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var k = jr;
            jr = k || ht, al(t, e), jr = k;
          } else
            al(t, e);
          if (Vl(e), u & mi) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, de = e;
            if (H.isHidden = G, G && !ht && (de.mode & lt) !== xe) {
              Se = de;
              for (var oe = de.child; oe !== null; )
                Se = oe, nx(oe), oe = oe.sibling;
            }
            W_(de, G);
          }
          return;
        }
        case $t: {
          al(t, e), Vl(e), u & ft && jR(e);
          return;
        }
        case mt:
          return;
        default: {
          al(t, e), Vl(e);
          return;
        }
      }
    }
    function Vl(e) {
      var t = e.flags;
      if (t & Mn) {
        try {
          X_(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & zn && (e.flags &= -4097);
    }
    function tx(e, t, a) {
      Hf = a, Vf = t, Se = e, VR(e, t, a), Hf = null, Vf = null;
    }
    function VR(e, t, a) {
      for (var i = (e.mode & lt) !== xe; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Me && i) {
          var f = u.memoizedState !== null, p = f || wm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || jr, x = wm, w = jr;
            wm = p, jr = g, jr && !w && (Se = u, rx(u));
            for (var N = s; N !== null; )
              Se = N, VR(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, wm = x, jr = w, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & gl) !== _e && s !== null ? (s.return = u, Se = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & gl) !== _e) {
          var u = i.alternate;
          It(i);
          try {
            I_(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          mn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function nx(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case be:
          case Ne:
          case st:
          case He: {
            if (t.mode & gt)
              try {
                Hl(), nl(dr, t, t.return);
              } finally {
                jl(t);
              }
            else
              nl(dr, t, t.return);
            break;
          }
          case pe: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case ue: {
            Pf(t, t.return);
            break;
          }
          case Me: {
            var u = t.memoizedState !== null;
            if (u) {
              PR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : PR(e);
      }
    }
    function PR(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function rx(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            BR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : BR(e);
      }
    }
    function BR(e) {
      for (; Se !== null; ) {
        var t = Se;
        It(t);
        try {
          Q_(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (mn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ax(e, t, a, i) {
      Se = t, ix(t, e, a, i);
    }
    function ix(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & lr) !== _e && s !== null ? (s.return = u, Se = s) : lx(e, t, a, i);
      }
    }
    function lx(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & pa) !== _e) {
          It(u);
          try {
            ux(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          mn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function ux(e, t, a, i) {
      switch (t.tag) {
        case be:
        case Ne:
        case He: {
          if (t.mode & gt) {
            Wg();
            try {
              Uo(Ar | fr, t);
            } finally {
              Qg(t);
            }
          } else
            Uo(Ar | fr, t);
          break;
        }
      }
    }
    function ox(e) {
      Se = e, sx();
    }
    function sx() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & qr) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, dx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & lr) !== _e && t !== null ? (t.return = e, Se = t) : cx();
      }
    }
    function cx() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & pa) !== _e && (It(e), fx(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function fx(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          e.mode & gt ? (Wg(), nl(Ar | fr, e, e.return), Qg(e)) : nl(Ar | fr, e, e.return);
          break;
        }
      }
    }
    function dx(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        It(a), vx(a, t), mn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : px(e);
      }
    }
    function px(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (zR(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function vx(e, t) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          e.mode & gt ? (Wg(), nl(Ar, e, t), Qg(e)) : nl(Ar, e, t);
          break;
        }
      }
    }
    function hx(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          try {
            Uo(dr | fr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mx(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          try {
            Uo(Ar | fr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yx(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          try {
            nl(dr | fr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function gx(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He:
          try {
            nl(Ar | fr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var Sx = [];
    function Ex() {
      Sx.forEach(function(e) {
        return e();
      });
    }
    var Cx = ut.ReactCurrentActQueue;
    function Rx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $R() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Cx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tx = Math.ceil, kS = ut.ReactCurrentDispatcher, OS = ut.ReactCurrentOwner, Vr = ut.ReactCurrentBatchConfig, il = ut.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), YR = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), bi = (
      /*                */
      4
    ), Lu = 0, zp = 1, Ks = 2, xm = 3, Up = 4, IR = 5, LS = 6, Tt = hr, Ca = null, xn = null, mr = V, Pl = V, MS = xo(V), yr = Lu, Ap = null, bm = V, Fp = V, Dm = V, jp = null, Ba = null, NS = 0, QR = 500, WR = 1 / 0, wx = 500, Mu = null;
    function Hp() {
      WR = Rn() + wx;
    }
    function GR() {
      return WR;
    }
    var km = !1, zS = null, Bf = null, Js = !1, Fo = null, Vp = V, US = [], AS = null, _x = 50, Pp = 0, FS = null, jS = !1, Om = !1, xx = 50, $f = 0, Lm = null, Bp = Bt, Mm = V, qR = !1;
    function Nm() {
      return Ca;
    }
    function Ra() {
      return (Tt & (Pr | bi)) !== hr ? Rn() : (Bp !== Bt || (Bp = Rn()), Bp);
    }
    function jo(e) {
      var t = e.mode;
      if ((t & lt) === xe)
        return ze;
      if ((Tt & Pr) !== hr && mr !== V)
        return Zn(mr);
      var a = Cw() !== Ew;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Mm === An && (Mm = Ld()), Mm;
      }
      var u = ma();
      if (u !== An)
        return u;
      var s = i1();
      return s;
    }
    function bx(e) {
      var t = e.mode;
      return (t & lt) === xe ? ze : Yv();
    }
    function gr(e, t, a, i) {
      Kx(), qR && S("useInsertionEffect must not schedule updates."), jS && (Om = !0), fo(e, a, i), (Tt & Pr) !== V && e === Ca ? eb(t) : (wr && Qv(e, t, a), tb(t), e === Ca && ((Tt & Pr) === hr && (Fp = Ke(Fp, a)), yr === Up && Ho(e, mr)), $a(e, i), a === ze && Tt === hr && (t.mode & lt) === xe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !il.isBatchingLegacy && (Hp(), qE()));
    }
    function Dx(e, t, a) {
      var i = e.current;
      i.lanes = t, fo(e, t, a), $a(e, a);
    }
    function kx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & Pr) !== hr
      );
    }
    function $a(e, t) {
      var a = e.callbackNode;
      Pv(e, t);
      var i = Zr(e, e === Ca ? mr : V);
      if (i === V) {
        a !== null && f0(a), e.callbackNode = null, e.callbackPriority = An;
        return;
      }
      var u = du(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(il.current !== null && a !== IS)) {
        a == null && s !== ze && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && f0(a);
      var f;
      if (u === ze)
        e.tag === bo ? (il.isBatchingLegacy !== null && (il.didScheduleLegacyUpdate = !0), rw(JR.bind(null, e))) : GE(JR.bind(null, e)), il.current !== null ? il.current.push(Do) : u1(function() {
          (Tt & (Pr | bi)) === hr && Do();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case ta:
            p = Yi;
            break;
          case Ua:
            p = fs;
            break;
          case or:
            p = lu;
            break;
          case Jc:
            p = ro;
            break;
          default:
            p = lu;
            break;
        }
        f = QS(p, XR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function XR(e, t) {
      if (Ww(), Bp = Bt, Mm = V, (Tt & (Pr | bi)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = zu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Zr(e, e === Ca ? mr : V);
      if (u === V)
        return null;
      var s = !Ts(e, u) && !$v(e, u) && !t, f = s ? Hx(e, u) : Um(e, u);
      if (f !== Lu) {
        if (f === Ks) {
          var p = Yc(e);
          p !== V && (u = p, f = HS(e, p));
        }
        if (f === zp) {
          var v = Ap;
          throw Zs(e, V), Ho(e, u), $a(e, Rn()), v;
        }
        if (f === LS)
          Ho(e, u);
        else {
          var y = !Ts(e, u), g = e.current.alternate;
          if (y && !Lx(g)) {
            if (f = Um(e, u), f === Ks) {
              var x = Yc(e);
              x !== V && (u = x, f = HS(e, x));
            }
            if (f === zp) {
              var w = Ap;
              throw Zs(e, V), Ho(e, u), $a(e, Rn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ox(e, f, u);
        }
      }
      return $a(e, Rn()), e.callbackNode === a ? XR.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = jp;
      if (vu(e)) {
        var i = Zs(e, t);
        i.flags |= yn, X1(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Ks) {
        var s = Ba;
        Ba = a, s !== null && KR(s);
      }
      return u;
    }
    function KR(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function Ox(e, t, a) {
      switch (t) {
        case Lu:
        case zp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Ks: {
          ec(e, Ba, Mu);
          break;
        }
        case xm: {
          if (Ho(e, a), Ic(a) && // do not delay if we're inside an act() scope
          !d0()) {
            var i = NS + QR - Rn();
            if (i > 10) {
              var u = Zr(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!pu(s, a)) {
                Ra(), qc(e, s);
                break;
              }
              e.timeoutHandle = Ay(ec.bind(null, e, Ba, Mu), i);
              break;
            }
          }
          ec(e, Ba, Mu);
          break;
        }
        case Up: {
          if (Ho(e, a), ly(a))
            break;
          if (!d0()) {
            var f = bd(e, a), p = f, v = Rn() - p, y = Xx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(ec.bind(null, e, Ba, Mu), y);
              break;
            }
          }
          ec(e, Ba, Mu);
          break;
        }
        case IR: {
          ec(e, Ba, Mu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lx(e) {
      for (var t = e; ; ) {
        if (t.flags & Cc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ge(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Cc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ho(e, t) {
      t = ws(t, Dm), t = ws(t, Fp), Nd(e, t);
    }
    function JR(e) {
      if (Gw(), (Tt & (Pr | bi)) !== hr)
        throw new Error("Should not already be working.");
      zu();
      var t = Zr(e, V);
      if (!ea(t, ze))
        return $a(e, Rn()), null;
      var a = Um(e, t);
      if (e.tag !== bo && a === Ks) {
        var i = Yc(e);
        i !== V && (t = i, a = HS(e, i));
      }
      if (a === zp) {
        var u = Ap;
        throw Zs(e, V), Ho(e, t), $a(e, Rn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ec(e, Ba, Mu), $a(e, Rn()), null;
    }
    function Mx(e, t) {
      t !== V && (_s(e, Ke(t, ze)), $a(e, Rn()), (Tt & (Pr | bi)) === hr && (Hp(), Do()));
    }
    function VS(e, t) {
      var a = Tt;
      Tt |= YR;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !il.isBatchingLegacy && (Hp(), qE());
      }
    }
    function Nx(e, t, a, i, u) {
      var s = ma(), f = Vr.transition;
      try {
        return Vr.transition = null, $n(ta), e(t, a, i, u);
      } finally {
        $n(s), Vr.transition = f, Tt === hr && Hp();
      }
    }
    function Nu(e) {
      Fo !== null && Fo.tag === bo && (Tt & (Pr | bi)) === hr && zu();
      var t = Tt;
      Tt |= YR;
      var a = Vr.transition, i = ma();
      try {
        return Vr.transition = null, $n(ta), e ? e() : void 0;
      } finally {
        $n(i), Vr.transition = a, Tt = t, (Tt & (Pr | bi)) === hr && Do();
      }
    }
    function ZR() {
      return (Tt & (Pr | bi)) !== hr;
    }
    function zm(e, t) {
      aa(MS, Pl, e), Pl = Ke(Pl, t);
    }
    function PS(e) {
      Pl = MS.current, ra(MS, e);
    }
    function Zs(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, l1(a)), xn !== null)
        for (var i = xn.return; i !== null; ) {
          var u = i.alternate;
          DR(u, i), i = i.return;
        }
      Ca = e;
      var s = tc(e.current, null);
      return xn = s, mr = Pl = t, yr = Lu, Ap = null, bm = V, Fp = V, Dm = V, jp = null, Ba = null, Dw(), Ki.discardPendingWarnings(), s;
    }
    function e0(e, t) {
      do {
        var a = xn;
        try {
          if (Yh(), wC(), mn(), OS.current = null, a === null || a.return === null) {
            yr = zp, Ap = t, xn = null;
            return;
          }
          if ($e && a.mode & gt && Sm(a, !0), Ve)
            if (El(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ps(a, i, mr);
            } else
              Si(a, t, mr);
          r_(e, a.return, a, t, mr), a0(a);
        } catch (u) {
          t = u, xn === a && a !== null ? (a = a.return, xn = a) : a = xn;
          continue;
        }
        return;
      } while (!0);
    }
    function t0() {
      var e = kS.current;
      return kS.current = vm, e === null ? vm : e;
    }
    function n0(e) {
      kS.current = e;
    }
    function zx() {
      NS = Rn();
    }
    function $p(e) {
      bm = Ke(e, bm);
    }
    function Ux() {
      yr === Lu && (yr = xm);
    }
    function BS() {
      (yr === Lu || yr === xm || yr === Ks) && (yr = Up), Ca !== null && (_l(bm) || _l(Fp)) && Ho(Ca, mr);
    }
    function Ax(e) {
      yr !== Up && (yr = Ks), jp === null ? jp = [e] : jp.push(e);
    }
    function Fx() {
      return yr === Lu;
    }
    function Um(e, t) {
      var a = Tt;
      Tt |= Pr;
      var i = t0();
      if (Ca !== e || mr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, mr), u.clear()), zd(e, t);
        }
        Mu = Kc(), Zs(e, t);
      }
      Td(t);
      do
        try {
          jx();
          break;
        } catch (s) {
          e0(e, s);
        }
      while (!0);
      if (Yh(), Tt = a, n0(i), xn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pn(), Ca = null, mr = V, yr;
    }
    function jx() {
      for (; xn !== null; )
        r0(xn);
    }
    function Hx(e, t) {
      var a = Tt;
      Tt |= Pr;
      var i = t0();
      if (Ca !== e || mr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, mr), u.clear()), zd(e, t);
        }
        Mu = Kc(), Hp(), Zs(e, t);
      }
      Td(t);
      do
        try {
          Vx();
          break;
        } catch (s) {
          e0(e, s);
        }
      while (!0);
      return Yh(), n0(i), Tt = a, xn !== null ? (wd(), Lu) : (pn(), Ca = null, mr = V, yr);
    }
    function Vx() {
      for (; xn !== null && !hd(); )
        r0(xn);
    }
    function r0(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & gt) !== xe ? (Ig(e), a = $S(t, e, Pl), Sm(e, !0)) : a = $S(t, e, Pl), mn(), e.memoizedProps = e.pendingProps, a === null ? a0(e) : xn = a, OS.current = null;
    }
    function a0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & au) === _e) {
          It(t);
          var u = void 0;
          if ((t.mode & gt) === xe ? u = bR(a, t, Pl) : (Ig(t), u = bR(a, t, Pl), Sm(t, !1)), mn(), u !== null) {
            xn = u;
            return;
          }
        } else {
          var s = U_(a, t);
          if (s !== null) {
            s.flags &= kv, xn = s;
            return;
          }
          if ((t.mode & gt) !== xe) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= au, i.subtreeFlags = _e, i.deletions = null;
          else {
            yr = LS, xn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          xn = v;
          return;
        }
        t = i, xn = t;
      } while (t !== null);
      yr === Lu && (yr = IR);
    }
    function ec(e, t, a) {
      var i = ma(), u = Vr.transition;
      try {
        Vr.transition = null, $n(ta), Px(e, t, a, i);
      } finally {
        Vr.transition = u, $n(i);
      }
      return null;
    }
    function Px(e, t, a, i) {
      do
        zu();
      while (Fo !== null);
      if (Jx(), (Tt & (Pr | bi)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return gi(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = An;
      var f = Ke(u.lanes, u.childLanes);
      Iv(e, f), e === Ca && (Ca = null, xn = null, mr = V), ((u.subtreeFlags & lr) !== _e || (u.flags & lr) !== _e) && (Js || (Js = !0, AS = a, QS(lu, function() {
        return zu(), null;
      })));
      var p = (u.subtreeFlags & (yl | no | gl | lr)) !== _e, v = (u.flags & (yl | no | gl | lr)) !== _e;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = ma();
        $n(ta);
        var x = Tt;
        Tt |= bi, OS.current = null, V_(e, u), qC(), ex(e, u, s), ZT(e.containerInfo), e.current = u, vs(s), tx(u, e, s), ou(), Lv(), Tt = x, $n(g), Vr.transition = y;
      } else
        e.current = u, qC();
      var w = Js;
      if (Js ? (Js = !1, Fo = e, Vp = s) : ($f = 0, Lm = null), f = e.pendingLanes, f === V && (Bf = null), w || o0(e.current, !1), gd(u.stateNode, i), wr && e.memoizedUpdaters.clear(), Ex(), $a(e, Rn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], ae = j.stack, Le = j.digest;
          N(j.value, {
            componentStack: ae,
            digest: Le
          });
        }
      if (km) {
        km = !1;
        var Te = zS;
        throw zS = null, Te;
      }
      return ea(Vp, ze) && e.tag !== bo && zu(), f = e.pendingLanes, ea(f, ze) ? (Qw(), e === FS ? Pp++ : (Pp = 0, FS = e)) : Pp = 0, Do(), gi(), null;
    }
    function zu() {
      if (Fo !== null) {
        var e = Gv(Vp), t = _r(or, e), a = Vr.transition, i = ma();
        try {
          return Vr.transition = null, $n(t), $x();
        } finally {
          $n(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Bx(e) {
      US.push(e), Js || (Js = !0, QS(lu, function() {
        return zu(), null;
      }));
    }
    function $x() {
      if (Fo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Fo, a = Vp;
      if (Fo = null, Vp = V, (Tt & (Pr | bi)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Om = !1, Rd(a);
      var i = Tt;
      Tt |= bi, ox(t.current), ax(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Y_(t, f);
        }
      }
      lo(), o0(t.current, !0), Tt = i, Do(), Om ? t === Lm ? $f++ : ($f = 0, Lm = t) : $f = 0, jS = !1, Om = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function i0(e) {
      return Bf !== null && Bf.has(e);
    }
    function Yx(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function Ix(e) {
      km || (km = !0, zS = e);
    }
    var Qx = Ix;
    function l0(e, t, a) {
      var i = qs(a, t), u = rR(e, i, ze), s = Oo(e, u, ze), f = Ra();
      s !== null && (fo(s, ze, f), $a(s, f));
    }
    function cn(e, t, a) {
      if (F_(a), Ip(!1), e.tag === Z) {
        l0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          l0(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !i0(s)) {
            var f = qs(a, e), p = sS(i, f, ze), v = Oo(i, p, ze), y = Ra();
            v !== null && (fo(v, ze, y), $a(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      qc(e, a), nb(e), Ca === e && pu(mr, a) && (yr === Up || yr === xm && Ic(mr) && Rn() - NS < QR ? Zs(e, V) : Dm = Ke(Dm, a)), $a(e, u);
    }
    function u0(e, t) {
      t === An && (t = bx(e));
      var a = Ra(), i = Va(e, t);
      i !== null && (fo(i, t, a), $a(i, a));
    }
    function Gx(e) {
      var t = e.memoizedState, a = An;
      t !== null && (a = t.retryLane), u0(e, a);
    }
    function qx(e, t) {
      var a = An, i;
      switch (e.tag) {
        case Ce:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case $t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), u0(e, a);
    }
    function Xx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tx(e / 1960) * 1960;
    }
    function Kx() {
      if (Pp > _x)
        throw Pp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > xx && ($f = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jx() {
      Ki.flushLegacyContextWarning(), Ki.flushPendingUnsafeLifecycleWarnings();
    }
    function o0(e, t) {
      It(e), Am(e, Lr, yx), t && Am(e, ml, gx), Am(e, Lr, hx), t && Am(e, ml, mx), mn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Fm = null;
    function s0(e) {
      {
        if ((Tt & Pr) !== hr || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== Be && t !== Z && t !== pe && t !== be && t !== Ne && t !== st && t !== He)
          return;
        var a = Pe(e) || "ReactComponent";
        if (Fm !== null) {
          if (Fm.has(a))
            return;
          Fm.add(a);
        } else
          Fm = /* @__PURE__ */ new Set([a]);
        var i = Xn;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : mn();
        }
      }
    }
    var $S;
    {
      var Zx = null;
      $S = function(e, t, a) {
        var i = y0(Zx, t);
        try {
          return RR(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), wC(), DR(e, t), y0(t, i), t.mode & gt && Ig(t), La(null, RR, null, e, t, a), od()) {
            var u = sd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var c0 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function eb(e) {
      if (Wr && !$w())
        switch (e.tag) {
          case be:
          case Ne:
          case He: {
            var t = xn && Pe(xn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Pe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            c0 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), c0 = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (wr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qv(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = il.current;
        return a !== null ? (a.push(t), IS) : pd(e, t);
      }
    }
    function f0(e) {
      if (e !== IS)
        return vd(e);
    }
    function d0() {
      return il.current !== null;
    }
    function tb(e) {
      {
        if (e.mode & lt) {
          if (!$R())
            return;
        } else if (!Rx() || Tt !== hr || e.tag !== be && e.tag !== Ne && e.tag !== He)
          return;
        if (il.current === null) {
          var t = Xn;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Pe(e));
          } finally {
            t ? It(e) : mn();
          }
        }
      }
    }
    function nb(e) {
      e.tag !== bo && $R() && il.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ip(e) {
      qR = e;
    }
    var Di = null, Yf = null, rb = function(e) {
      Di = e;
    };
    function If(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return If(e);
    }
    function GS(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function p0(e, t) {
      {
        if (Di === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case be: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Ne: {
            (s === Y || s === Ye) && (u = !0);
            break;
          }
          case st:
          case He: {
            (s === at || s === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Di(a);
          if (f !== void 0 && f === Di(i))
            return !0;
        }
        return !1;
      }
    }
    function v0(e) {
      {
        if (Di === null || typeof WeakSet != "function")
          return;
        Yf === null && (Yf = /* @__PURE__ */ new WeakSet()), Yf.add(e);
      }
    }
    var ab = function(e, t) {
      {
        if (Di === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        zu(), Nu(function() {
          qS(e.current, i, a);
        });
      }
    }, ib = function(e, t) {
      {
        if (e.context !== ai)
          return;
        zu(), Nu(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case be:
          case He:
          case pe:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (Di === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Di(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === pe ? g = !0 : y = !0));
        }
        if (Yf !== null && (Yf.has(e) || i !== null && Yf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Va(e, ze);
          w !== null && gr(w, e, ze, Bt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var lb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case be:
          case He:
          case pe:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ub(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function ub(e, t) {
      {
        var a = ob(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case Fe:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ob(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var h0 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function sb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ii = function(e, t, a, i) {
      return new sb(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cb(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function fb(e) {
      if (typeof e == "function")
        return JS(e) ? pe : be;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return Ne;
        if (t === at)
          return st;
      }
      return Be;
    }
    function tc(e, t) {
      var a = e.alternate;
      a === null ? (a = ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Be:
        case be:
        case He:
          a.type = If(e.type);
          break;
        case pe:
          a.type = WS(e.type);
          break;
        case Ne:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function db(e, t) {
      e.flags &= Un | Mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pb(e, t, a) {
      var i;
      return e === zh ? (i = lt, t === !0 && (i |= qe, i |= qt)) : i = xe, wr && (i |= gt), ii(Z, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Be, p = e;
      if (typeof e == "function")
        JS(e) ? (f = pe, p = WS(p)) : p = If(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case Yr:
            return Vo(a.children, u, s, t);
          case oi:
            f = Hn, u |= qe, (u & lt) !== xe && (u |= qt);
            break;
          case si:
            return vb(a, u, s, t);
          case ne:
            return hb(a, u, s, t);
          case ie:
            return mb(a, u, s, t);
          case En:
            return m0(a, u, s, t);
          case nn:
          // eslint-disable-next-line no-fallthrough
          case ct:
          // eslint-disable-next-line no-fallthrough
          case on:
          // eslint-disable-next-line no-fallthrough
          case Cr:
          // eslint-disable-next-line no-fallthrough
          case Ze:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Mi:
                  f = rt;
                  break e;
                case R:
                  f = rn;
                  break e;
                case Y:
                  f = Ne, p = GS(p);
                  break e;
                case at:
                  f = st;
                  break e;
                case Ye:
                  f = Sn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Pe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ii(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function eE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Vo(e, t, a, i) {
      var u = ii(ot, e, i, t);
      return u.lanes = a, u;
    }
    function vb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ii(kt, e, i, t | gt);
      return u.elementType = si, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hb(e, t, a, i) {
      var u = ii(Ce, e, i, t);
      return u.elementType = ne, u.lanes = a, u;
    }
    function mb(e, t, a, i) {
      var u = ii($t, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function m0(e, t, a, i) {
      var u = ii(Me, e, i, t);
      u.elementType = En, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function tE(e, t, a) {
      var i = ii(we, e, null, t);
      return i.lanes = a, i;
    }
    function yb() {
      var e = ii(ue, null, null, xe);
      return e.elementType = "DELETED", e;
    }
    function gb(e) {
      var t = ii(fn, null, null, xe);
      return t.stateNode = e, t;
    }
    function nE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ii(Fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function y0(e, t) {
      return e === null && (e = ii(Be, null, null, xe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = An, this.eventTimes = Gc(V), this.expirationTimes = Gc(Bt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = Gc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case bo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function g0(e, t, a, i, u, s, f, p, v, y) {
      var g = new Sb(e, t, a, p, v), x = pb(t, s);
      g.current = x, x.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = w;
      }
      return hg(x), g;
    }
    var rE = "18.3.1";
    function Eb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return oa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: da,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var aE, iE;
    aE = !1, iE = {};
    function S0(e) {
      if (!e)
        return ai;
      var t = to(e), a = nw(t);
      if (t.tag === pe) {
        var i = t.type;
        if (zl(i))
          return QE(t, i, a);
      }
      return a;
    }
    function Cb(e, t) {
      {
        var a = to(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & qe) {
          var s = Pe(a) || "Component";
          if (!iE[s]) {
            iE[s] = !0;
            var f = Xn;
            try {
              It(u), a.mode & qe ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : mn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function E0(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return g0(e, t, v, y, a, i, u, s, f);
    }
    function C0(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = g0(a, i, g, e, u, s, f, p, v);
      x.context = S0(null);
      var w = x.current, N = Ra(), U = jo(w), j = ku(N, U);
      return j.callback = t ?? null, Oo(w, j, U), Dx(x, U, N), x;
    }
    function Qp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ra(), f = jo(u);
      _c(f);
      var p = S0(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && Xn !== null && !aE && (aE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Pe(Xn) || "Unknown"));
      var v = ku(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Oo(u, v, f);
      return y !== null && (gr(y, u, f, s), qh(y, u, f)), f;
    }
    function jm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (vu(t)) {
            var a = Bv(t);
            Mx(t, a);
          }
          break;
        }
        case Ce: {
          Nu(function() {
            var u = Va(e, ze);
            if (u !== null) {
              var s = Ra();
              gr(u, e, ze, s);
            }
          });
          var i = ze;
          lE(e, i);
          break;
        }
      }
    }
    function R0(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function lE(e, t) {
      R0(e, t);
      var a = e.alternate;
      a && R0(a, t);
    }
    function Tb(e) {
      if (e.tag === Ce) {
        var t = co, a = Va(e, t);
        if (a !== null) {
          var i = Ra();
          gr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function wb(e) {
      if (e.tag === Ce) {
        var t = jo(e), a = Va(e, t);
        if (a !== null) {
          var i = Ra();
          gr(a, e, t, i);
        }
        lE(e, t);
      }
    }
    function T0(e) {
      var t = ei(e);
      return t === null ? null : t.stateNode;
    }
    var w0 = function(e) {
      return null;
    };
    function _b(e) {
      return w0(e);
    }
    var _0 = function(e) {
      return !1;
    };
    function xb(e) {
      return _0(e);
    }
    var x0 = null, b0 = null, D0 = null, k0 = null, O0 = null, L0 = null, M0 = null, N0 = null, z0 = null;
    {
      var U0 = function(e, t, a) {
        var i = t[a], u = Xe(e) ? e.slice() : Ge({}, e);
        return a + 1 === t.length ? (Xe(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = U0(e[i], t, a + 1), u);
      }, A0 = function(e, t) {
        return U0(e, t, 0);
      }, F0 = function(e, t, a, i) {
        var u = t[i], s = Xe(e) ? e.slice() : Ge({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Xe(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = F0(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, j0 = function(e, t, a) {
        if (t.length !== a.length) {
          bt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              bt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return F0(e, t, a, 0);
      }, H0 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Xe(e) ? e.slice() : Ge({}, e);
        return s[u] = H0(e[u], t, a + 1, i), s;
      }, V0 = function(e, t, a) {
        return H0(e, t, 0, a);
      }, uE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x0 = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = V0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Va(e, ze);
          f !== null && gr(f, e, ze, Bt);
        }
      }, b0 = function(e, t, a) {
        var i = uE(e, t);
        if (i !== null) {
          var u = A0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ge({}, e.memoizedProps);
          var s = Va(e, ze);
          s !== null && gr(s, e, ze, Bt);
        }
      }, D0 = function(e, t, a, i) {
        var u = uE(e, t);
        if (u !== null) {
          var s = j0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Va(e, ze);
          f !== null && gr(f, e, ze, Bt);
        }
      }, k0 = function(e, t, a) {
        e.pendingProps = V0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, ze);
        i !== null && gr(i, e, ze, Bt);
      }, O0 = function(e, t) {
        e.pendingProps = A0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, ze);
        a !== null && gr(a, e, ze, Bt);
      }, L0 = function(e, t, a) {
        e.pendingProps = j0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, ze);
        i !== null && gr(i, e, ze, Bt);
      }, M0 = function(e) {
        var t = Va(e, ze);
        t !== null && gr(t, e, ze, Bt);
      }, N0 = function(e) {
        w0 = e;
      }, z0 = function(e) {
        _0 = e;
      };
    }
    function bb(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function Db(e) {
      return null;
    }
    function kb() {
      return Xn;
    }
    function Ob(e) {
      var t = e.findFiberByHostInstance, a = ut.ReactCurrentDispatcher;
      return md({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x0,
        overrideHookStateDeletePath: b0,
        overrideHookStateRenamePath: D0,
        overrideProps: k0,
        overridePropsDeletePath: O0,
        overridePropsRenamePath: L0,
        setErrorHandler: N0,
        setSuspenseHandler: z0,
        scheduleUpdate: M0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bb,
        findFiberByHostInstance: t || Db,
        // React Refresh
        findHostInstancesForRefresh: lb,
        scheduleRefresh: ab,
        scheduleRoot: ib,
        setRefreshHandler: rb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: rE
      });
    }
    var P0 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function oE(e) {
      this._internalRoot = e;
    }
    Hm.prototype.render = oE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Vm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = T0(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, Hm.prototype.unmount = oE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ZR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nu(function() {
          Qp(null, e, null, null);
        }), PE(t);
      }
    };
    function Lb(e, t) {
      if (!Vm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      B0(e);
      var a = !1, i = !1, u = "", s = P0;
      t != null && (t.hydrate ? bt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = E0(e, zh, null, a, i, u, s);
      bh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return Jd(p), new oE(f);
    }
    function Hm(e) {
      this._internalRoot = e;
    }
    function Mb(e) {
      e && Zv(e);
    }
    Hm.prototype.unstable_scheduleHydration = Mb;
    function Nb(e, t, a) {
      if (!Vm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      B0(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = P0;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = C0(t, null, e, zh, i, s, f, p, v);
      if (bh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          Fw(y, x);
        }
      return new Hm(y);
    }
    function Vm(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Pi || e.nodeType === qo));
    }
    function Wp(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Pi || e.nodeType === qo || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function B0(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zb = ut.ReactCurrentOwner, $0;
    $0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = T0(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = sE(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function sE(e) {
      return e ? e.nodeType === Pi ? e.documentElement : e.firstChild : null;
    }
    function Y0() {
    }
    function Ub(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = jm(f);
            s.call(w);
          };
        }
        var f = C0(
          t,
          i,
          e,
          bo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Y0
        );
        e._reactRootContainer = f, bh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return Jd(p), Nu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = jm(g);
            y.call(w);
          };
        }
        var g = E0(
          e,
          bo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Y0
        );
        e._reactRootContainer = g, bh(g.current, e);
        var x = e.nodeType === Ln ? e.parentNode : e;
        return Jd(x), Nu(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function Ab(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Pm(e, t, a, i, u) {
      $0(a), Ab(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ub(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = jm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, u);
      }
      return jm(f);
    }
    var I0 = !1;
    function Fb(e) {
      {
        I0 || (I0 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : Cb(e, "findDOMNode");
    }
    function jb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Pm(null, e, t, !0, a);
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Pm(null, e, t, !1, a);
    }
    function Vb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ru(e))
        throw new Error("parentComponent must be a valid React Component");
      return Pm(e, t, a, !1, i);
    }
    var Q0 = !1;
    function Pb(e) {
      if (Q0 || (Q0 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = sE(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nu(function() {
          Pm(null, null, e, !1, function() {
            e._reactRootContainer = null, PE(e);
          });
        }), !0;
      } else {
        {
          var u = sE(e), s = !!(u && _o(u)), f = e.nodeType === Gr && Wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    oy(Rb), Ad(Tb), sy(wb), Zc(ma), qv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), as($T), bv(VS, Nx, Nu);
    function Bb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vm(t))
        throw new Error("Target container is not a DOM element.");
      return Eb(e, t, null, a);
    }
    function $b(e, t, a, i) {
      return Vb(e, t, a, i);
    }
    var cE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, Rf, Dh, ld, Ku, VS]
    };
    function Yb(e, t) {
      return cE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lb(e, t);
    }
    function Ib(e, t, a) {
      return cE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Nb(e, t, a);
    }
    function Qb(e) {
      return ZR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nu(e);
    }
    var Wb = Ob({
      findFiberByHostInstance: Vs,
      bundleType: 1,
      version: rE,
      rendererPackageName: "react-dom"
    });
    if (!Wb && Qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var W0 = window.location.protocol;
      /^(https?|file):$/.test(W0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (W0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cE, Ia.createPortal = Bb, Ia.createRoot = Yb, Ia.findDOMNode = Fb, Ia.flushSync = Qb, Ia.hydrate = jb, Ia.hydrateRoot = Ib, Ia.render = Hb, Ia.unmountComponentAtNode = Pb, Ia.unstable_batchedUpdates = VS, Ia.unstable_renderSubtreeIntoContainer = $b, Ia.version = rE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ia;
}
var iT;
function lD() {
  if (iT) return Ym.exports;
  iT = 1;
  var K = {};
  function le() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (K.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(le);
      } catch (A) {
        console.error(A);
      }
    }
  }
  return K.NODE_ENV === "production" ? (le(), Ym.exports = aD()) : Ym.exports = iD(), Ym.exports;
}
var lT;
function uD() {
  if (lT) return Wf;
  lT = 1;
  var K = {}, le = lD();
  if (K.NODE_ENV === "production")
    Wf.createRoot = le.createRoot, Wf.hydrateRoot = le.hydrateRoot;
  else {
    var A = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Wf.createRoot = function(ut, _t) {
      A.usingClientEntryPoint = !0;
      try {
        return le.createRoot(ut, _t);
      } finally {
        A.usingClientEntryPoint = !1;
      }
    }, Wf.hydrateRoot = function(ut, _t, xt) {
      A.usingClientEntryPoint = !0;
      try {
        return le.hydrateRoot(ut, _t, xt);
      } finally {
        A.usingClientEntryPoint = !1;
      }
    };
  }
  return Wf;
}
var oD = uD();
const sD = /* @__PURE__ */ Xb(oD), cD = () => /* @__PURE__ */ Jp.jsxs(Jp.Fragment, { children: [
  /* @__PURE__ */ Jp.jsx("style", { children: `
        .azul{
          color: blue;
          font-family: Arial;
        }
      ` }),
  /* @__PURE__ */ Jp.jsx("h1", { className: "azul", children: "Este é um Web Component do React" })
] }), oT = document.createElement("div");
document.body.appendChild(oT);
sD.createRoot(oT).render(/* @__PURE__ */ Jp.jsx(cD, {}));
