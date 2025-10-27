(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
var Cr = { exports: {} },
  ol = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tp;
function O1() {
  if (tp) return ol;
  tp = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(r, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var y in c) y !== "key" && (d[y] = c[y]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: i, type: r, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (ol.Fragment = l), (ol.jsx = u), (ol.jsxs = u), ol;
}
var ep;
function R1() {
  return ep || ((ep = 1), (Cr.exports = O1())), Cr.exports;
}
var U = R1(),
  zr = { exports: {} },
  at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np;
function V1() {
  if (np) return at;
  np = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    S = Symbol.for("react.activity"),
    A = Symbol.iterator;
  function N(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (A && x[A]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    X = {};
  function w(x, j, Y) {
    (this.props = x),
      (this.context = j),
      (this.refs = X),
      (this.updater = Y || B);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (x, j) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, j, "setState");
    }),
    (w.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function Z() {}
  Z.prototype = w.prototype;
  function q(x, j, Y) {
    (this.props = x),
      (this.context = j),
      (this.refs = X),
      (this.updater = Y || B);
  }
  var et = (q.prototype = new Z());
  (et.constructor = q), H(et, w.prototype), (et.isPureReactComponent = !0);
  var W = Array.isArray;
  function I() {}
  var G = { H: null, A: null, T: null, S: null },
    P = Object.prototype.hasOwnProperty;
  function St(x, j, Y) {
    var J = Y.ref;
    return {
      $$typeof: i,
      type: x,
      key: j,
      ref: J !== void 0 ? J : null,
      props: Y,
    };
  }
  function Vt(x, j) {
    return St(x.type, j, x.props);
  }
  function Qt(x) {
    return typeof x == "object" && x !== null && x.$$typeof === i;
  }
  function kt(x) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (Y) {
        return j[Y];
      })
    );
  }
  var Pe = /\/+/g;
  function Me(x, j) {
    return typeof x == "object" && x !== null && x.key != null
      ? kt("" + x.key)
      : j.toString(36);
  }
  function se(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(I, I)
            : ((x.status = "pending"),
              x.then(
                function (j) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = j));
                },
                function (j) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = j));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function R(x, j, Y, J, it) {
    var ut = typeof x;
    (ut === "undefined" || ut === "boolean") && (x = null);
    var vt = !1;
    if (x === null) vt = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case i:
            case l:
              vt = !0;
              break;
            case v:
              return (vt = x._init), R(vt(x._payload), j, Y, J, it);
          }
      }
    if (vt)
      return (
        (it = it(x)),
        (vt = J === "" ? "." + Me(x, 0) : J),
        W(it)
          ? ((Y = ""),
            vt != null && (Y = vt.replace(Pe, "$&/") + "/"),
            R(it, j, Y, "", function (pi) {
              return pi;
            }))
          : it != null &&
            (Qt(it) &&
              (it = Vt(
                it,
                Y +
                  (it.key == null || (x && x.key === it.key)
                    ? ""
                    : ("" + it.key).replace(Pe, "$&/") + "/") +
                  vt
              )),
            j.push(it)),
        1
      );
    vt = 0;
    var ae = J === "" ? "." : J + ":";
    if (W(x))
      for (var Ut = 0; Ut < x.length; Ut++)
        (J = x[Ut]), (ut = ae + Me(J, Ut)), (vt += R(J, j, Y, ut, it));
    else if (((Ut = N(x)), typeof Ut == "function"))
      for (x = Ut.call(x), Ut = 0; !(J = x.next()).done; )
        (J = J.value), (ut = ae + Me(J, Ut++)), (vt += R(J, j, Y, ut, it));
    else if (ut === "object") {
      if (typeof x.then == "function") return R(se(x), j, Y, J, it);
      throw (
        ((j = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return vt;
  }
  function L(x, j, Y) {
    if (x == null) return x;
    var J = [],
      it = 0;
    return (
      R(x, J, "", "", function (ut) {
        return j.call(Y, ut, it++);
      }),
      J
    );
  }
  function k(x) {
    if (x._status === -1) {
      var j = x._result;
      (j = j()),
        j.then(
          function (Y) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = Y));
          },
          function (Y) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = Y));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = j));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ct =
      typeof reportError == "function"
        ? reportError
        : function (x) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == "object" &&
                  x !== null &&
                  typeof x.message == "string"
                    ? String(x.message)
                    : String(x),
                error: x,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", x);
              return;
            }
            console.error(x);
          },
    mt = {
      map: L,
      forEach: function (x, j, Y) {
        L(
          x,
          function () {
            j.apply(this, arguments);
          },
          Y
        );
      },
      count: function (x) {
        var j = 0;
        return (
          L(x, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (x) {
        return (
          L(x, function (j) {
            return j;
          }) || []
        );
      },
      only: function (x) {
        if (!Qt(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    };
  return (
    (at.Activity = S),
    (at.Children = mt),
    (at.Component = w),
    (at.Fragment = u),
    (at.Profiler = c),
    (at.PureComponent = q),
    (at.StrictMode = r),
    (at.Suspense = g),
    (at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (at.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return G.H.useMemoCache(x);
      },
    }),
    (at.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (at.cacheSignal = function () {
      return null;
    }),
    (at.cloneElement = function (x, j, Y) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var J = H({}, x.props),
        it = x.key;
      if (j != null)
        for (ut in (j.key !== void 0 && (it = "" + j.key), j))
          !P.call(j, ut) ||
            ut === "key" ||
            ut === "__self" ||
            ut === "__source" ||
            (ut === "ref" && j.ref === void 0) ||
            (J[ut] = j[ut]);
      var ut = arguments.length - 2;
      if (ut === 1) J.children = Y;
      else if (1 < ut) {
        for (var vt = Array(ut), ae = 0; ae < ut; ae++)
          vt[ae] = arguments[ae + 2];
        J.children = vt;
      }
      return St(x.type, it, J);
    }),
    (at.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: d, _context: x }),
        x
      );
    }),
    (at.createElement = function (x, j, Y) {
      var J,
        it = {},
        ut = null;
      if (j != null)
        for (J in (j.key !== void 0 && (ut = "" + j.key), j))
          P.call(j, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (it[J] = j[J]);
      var vt = arguments.length - 2;
      if (vt === 1) it.children = Y;
      else if (1 < vt) {
        for (var ae = Array(vt), Ut = 0; Ut < vt; Ut++)
          ae[Ut] = arguments[Ut + 2];
        it.children = ae;
      }
      if (x && x.defaultProps)
        for (J in ((vt = x.defaultProps), vt))
          it[J] === void 0 && (it[J] = vt[J]);
      return St(x, ut, it);
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (x) {
      return { $$typeof: y, render: x };
    }),
    (at.isValidElement = Qt),
    (at.lazy = function (x) {
      return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: k };
    }),
    (at.memo = function (x, j) {
      return { $$typeof: m, type: x, compare: j === void 0 ? null : j };
    }),
    (at.startTransition = function (x) {
      var j = G.T,
        Y = {};
      G.T = Y;
      try {
        var J = x(),
          it = G.S;
        it !== null && it(Y, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(I, ct);
      } catch (ut) {
        ct(ut);
      } finally {
        j !== null && Y.types !== null && (j.types = Y.types), (G.T = j);
      }
    }),
    (at.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (at.use = function (x) {
      return G.H.use(x);
    }),
    (at.useActionState = function (x, j, Y) {
      return G.H.useActionState(x, j, Y);
    }),
    (at.useCallback = function (x, j) {
      return G.H.useCallback(x, j);
    }),
    (at.useContext = function (x) {
      return G.H.useContext(x);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (x, j) {
      return G.H.useDeferredValue(x, j);
    }),
    (at.useEffect = function (x, j) {
      return G.H.useEffect(x, j);
    }),
    (at.useEffectEvent = function (x) {
      return G.H.useEffectEvent(x);
    }),
    (at.useId = function () {
      return G.H.useId();
    }),
    (at.useImperativeHandle = function (x, j, Y) {
      return G.H.useImperativeHandle(x, j, Y);
    }),
    (at.useInsertionEffect = function (x, j) {
      return G.H.useInsertionEffect(x, j);
    }),
    (at.useLayoutEffect = function (x, j) {
      return G.H.useLayoutEffect(x, j);
    }),
    (at.useMemo = function (x, j) {
      return G.H.useMemo(x, j);
    }),
    (at.useOptimistic = function (x, j) {
      return G.H.useOptimistic(x, j);
    }),
    (at.useReducer = function (x, j, Y) {
      return G.H.useReducer(x, j, Y);
    }),
    (at.useRef = function (x) {
      return G.H.useRef(x);
    }),
    (at.useState = function (x) {
      return G.H.useState(x);
    }),
    (at.useSyncExternalStore = function (x, j, Y) {
      return G.H.useSyncExternalStore(x, j, Y);
    }),
    (at.useTransition = function () {
      return G.H.useTransition();
    }),
    (at.version = "19.2.0"),
    at
  );
}
var ap;
function gc() {
  return ap || ((ap = 1), (zr.exports = V1())), zr.exports;
}
var Q = gc(),
  Or = { exports: {} },
  rl = {},
  Rr = { exports: {} },
  Vr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip;
function N1() {
  return (
    ip ||
      ((ip = 1),
      (function (i) {
        function l(R, L) {
          var k = R.length;
          R.push(L);
          t: for (; 0 < k; ) {
            var ct = (k - 1) >>> 1,
              mt = R[ct];
            if (0 < c(mt, L)) (R[ct] = L), (R[k] = mt), (k = ct);
            else break t;
          }
        }
        function u(R) {
          return R.length === 0 ? null : R[0];
        }
        function r(R) {
          if (R.length === 0) return null;
          var L = R[0],
            k = R.pop();
          if (k !== L) {
            R[0] = k;
            t: for (var ct = 0, mt = R.length, x = mt >>> 1; ct < x; ) {
              var j = 2 * (ct + 1) - 1,
                Y = R[j],
                J = j + 1,
                it = R[J];
              if (0 > c(Y, k))
                J < mt && 0 > c(it, Y)
                  ? ((R[ct] = it), (R[J] = k), (ct = J))
                  : ((R[ct] = Y), (R[j] = k), (ct = j));
              else if (J < mt && 0 > c(it, k))
                (R[ct] = it), (R[J] = k), (ct = J);
              else break t;
            }
          }
          return L;
        }
        function c(R, L) {
          var k = R.sortIndex - L.sortIndex;
          return k !== 0 ? k : R.id - L.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            y = h.now();
          i.unstable_now = function () {
            return h.now() - y;
          };
        }
        var g = [],
          m = [],
          v = 1,
          S = null,
          A = 3,
          N = !1,
          B = !1,
          H = !1,
          X = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          Z = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function et(R) {
          for (var L = u(m); L !== null; ) {
            if (L.callback === null) r(m);
            else if (L.startTime <= R)
              r(m), (L.sortIndex = L.expirationTime), l(g, L);
            else break;
            L = u(m);
          }
        }
        function W(R) {
          if (((H = !1), et(R), !B))
            if (u(g) !== null) (B = !0), I || ((I = !0), kt());
            else {
              var L = u(m);
              L !== null && se(W, L.startTime - R);
            }
        }
        var I = !1,
          G = -1,
          P = 5,
          St = -1;
        function Vt() {
          return X ? !0 : !(i.unstable_now() - St < P);
        }
        function Qt() {
          if (((X = !1), I)) {
            var R = i.unstable_now();
            St = R;
            var L = !0;
            try {
              t: {
                (B = !1), H && ((H = !1), Z(G), (G = -1)), (N = !0);
                var k = A;
                try {
                  e: {
                    for (
                      et(R), S = u(g);
                      S !== null && !(S.expirationTime > R && Vt());

                    ) {
                      var ct = S.callback;
                      if (typeof ct == "function") {
                        (S.callback = null), (A = S.priorityLevel);
                        var mt = ct(S.expirationTime <= R);
                        if (((R = i.unstable_now()), typeof mt == "function")) {
                          (S.callback = mt), et(R), (L = !0);
                          break e;
                        }
                        S === u(g) && r(g), et(R);
                      } else r(g);
                      S = u(g);
                    }
                    if (S !== null) L = !0;
                    else {
                      var x = u(m);
                      x !== null && se(W, x.startTime - R), (L = !1);
                    }
                  }
                  break t;
                } finally {
                  (S = null), (A = k), (N = !1);
                }
                L = void 0;
              }
            } finally {
              L ? kt() : (I = !1);
            }
          }
        }
        var kt;
        if (typeof q == "function")
          kt = function () {
            q(Qt);
          };
        else if (typeof MessageChannel < "u") {
          var Pe = new MessageChannel(),
            Me = Pe.port2;
          (Pe.port1.onmessage = Qt),
            (kt = function () {
              Me.postMessage(null);
            });
        } else
          kt = function () {
            w(Qt, 0);
          };
        function se(R, L) {
          G = w(function () {
            R(i.unstable_now());
          }, L);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (i.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (i.unstable_next = function (R) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = A;
            }
            var k = A;
            A = L;
            try {
              return R();
            } finally {
              A = k;
            }
          }),
          (i.unstable_requestPaint = function () {
            X = !0;
          }),
          (i.unstable_runWithPriority = function (R, L) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var k = A;
            A = R;
            try {
              return L();
            } finally {
              A = k;
            }
          }),
          (i.unstable_scheduleCallback = function (R, L, k) {
            var ct = i.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? ct + k : ct))
                : (k = ct),
              R)
            ) {
              case 1:
                var mt = -1;
                break;
              case 2:
                mt = 250;
                break;
              case 5:
                mt = 1073741823;
                break;
              case 4:
                mt = 1e4;
                break;
              default:
                mt = 5e3;
            }
            return (
              (mt = k + mt),
              (R = {
                id: v++,
                callback: L,
                priorityLevel: R,
                startTime: k,
                expirationTime: mt,
                sortIndex: -1,
              }),
              k > ct
                ? ((R.sortIndex = k),
                  l(m, R),
                  u(g) === null &&
                    R === u(m) &&
                    (H ? (Z(G), (G = -1)) : (H = !0), se(W, k - ct)))
                : ((R.sortIndex = mt),
                  l(g, R),
                  B || N || ((B = !0), I || ((I = !0), kt()))),
              R
            );
          }),
          (i.unstable_shouldYield = Vt),
          (i.unstable_wrapCallback = function (R) {
            var L = A;
            return function () {
              var k = A;
              A = L;
              try {
                return R.apply(this, arguments);
              } finally {
                A = k;
              }
            };
          });
      })(Vr)),
    Vr
  );
}
var lp;
function _1() {
  return lp || ((lp = 1), (Rr.exports = N1())), Rr.exports;
}
var Nr = { exports: {} },
  ee = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp;
function j1() {
  if (sp) return ee;
  sp = 1;
  var i = gc();
  function l(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(g, m, v) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: m,
      implementation: v,
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ee.createPortal = function (g, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(l(299));
      return d(g, m, null, v);
    }),
    (ee.flushSync = function (g) {
      var m = h.T,
        v = r.p;
      try {
        if (((h.T = null), (r.p = 2), g)) return g();
      } finally {
        (h.T = m), (r.p = v), r.d.f();
      }
    }),
    (ee.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(g, m));
    }),
    (ee.prefetchDNS = function (g) {
      typeof g == "string" && r.d.D(g);
    }),
    (ee.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var v = m.as,
          S = y(v, m.crossOrigin),
          A = typeof m.integrity == "string" ? m.integrity : void 0,
          N = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? r.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: N,
            })
          : v === "script" &&
            r.d.X(g, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: N,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ee.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = y(m.as, m.crossOrigin);
            r.d.M(g, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(g);
    }),
    (ee.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var v = m.as,
          S = y(v, m.crossOrigin);
        r.d.L(g, v, {
          crossOrigin: S,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ee.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var v = y(m.as, m.crossOrigin);
          r.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(g);
    }),
    (ee.requestFormReset = function (g) {
      r.d.r(g);
    }),
    (ee.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (ee.useFormState = function (g, m, v) {
      return h.H.useFormState(g, m, v);
    }),
    (ee.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ee.version = "19.2.0"),
    ee
  );
}
var up;
function U1() {
  if (up) return Nr.exports;
  up = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (Nr.exports = j1()), Nr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op;
function B1() {
  if (op) return rl;
  op = 1;
  var i = _1(),
    l = gc(),
    u = U1();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return g(s), t;
          if (o === a) return g(s), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) (n = s), (a = o);
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            (f = !0), (n = s), (a = o);
            break;
          }
          if (p === a) {
            (f = !0), (a = s), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = o.child; p; ) {
            if (p === n) {
              (f = !0), (n = o), (a = s);
              break;
            }
            if (p === a) {
              (f = !0), (a = o), (n = s);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign,
    A = Symbol.for("react.element"),
    N = Symbol.for("react.transitional.element"),
    B = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    et = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    G = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    St = Symbol.for("react.activity"),
    Vt = Symbol.for("react.memo_cache_sentinel"),
    Qt = Symbol.iterator;
  function kt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Qt && t[Qt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Pe = Symbol.for("react.client.reference");
  function Me(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Pe ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case w:
        return "Profiler";
      case X:
        return "StrictMode";
      case W:
        return "Suspense";
      case I:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case B:
          return "Portal";
        case q:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case et:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case G:
          return (
            (e = t.displayName || null), e !== null ? e : Me(t.type) || "Memo"
          );
        case P:
          (e = t._payload), (t = t._init);
          try {
            return Me(t(e));
          } catch {}
      }
    return null;
  }
  var se = Array.isArray,
    R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    ct = [],
    mt = -1;
  function x(t) {
    return { current: t };
  }
  function j(t) {
    0 > mt || ((t.current = ct[mt]), (ct[mt] = null), mt--);
  }
  function Y(t, e) {
    mt++, (ct[mt] = t.current), (t.current = e);
  }
  var J = x(null),
    it = x(null),
    ut = x(null),
    vt = x(null);
  function ae(t, e) {
    switch ((Y(ut, e), Y(it, t), Y(J, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Am(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Am(e)), (t = Em(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    j(J), Y(J, t);
  }
  function Ut() {
    j(J), j(it), j(ut);
  }
  function pi(t) {
    t.memoizedState !== null && Y(vt, t);
    var e = J.current,
      n = Em(e, t.type);
    e !== n && (Y(it, t), Y(J, n));
  }
  function Cl(t) {
    it.current === t && (j(J), j(it)),
      vt.current === t && (j(vt), (il._currentValue = k));
  }
  var ou, $c;
  function kn(t) {
    if (ou === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (ou = (e && e[1]) || ""),
          ($c =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ou +
      t +
      $c
    );
  }
  var ru = !1;
  function cu(t, e) {
    if (!t || ru) return "";
    ru = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (z) {
                  var C = z;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (z) {
                  C = z;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                C = z;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (z) {
            if (z && C && typeof z.stack == "string") return [z.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = a.DetermineComponentFrameRoot(),
        f = o[0],
        p = o[1];
      if (f && p) {
        var b = f.split(`
`),
          D = p.split(`
`);
        for (
          s = a = 0;
          a < b.length && !b[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === b.length || s === D.length)
          for (
            a = b.length - 1, s = D.length - 1;
            1 <= a && 0 <= s && b[a] !== D[s];

          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (b[a] !== D[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || b[a] !== D[s])) {
                  var O =
                    `
` + b[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (ru = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? kn(n) : "";
  }
  function sg(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kn(t.type);
      case 16:
        return kn("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? kn("Suspense Fallback")
          : kn("Suspense");
      case 19:
        return kn("SuspenseList");
      case 0:
      case 15:
        return cu(t.type, !1);
      case 11:
        return cu(t.type.render, !1);
      case 1:
        return cu(t.type, !0);
      case 31:
        return kn("Activity");
      default:
        return "";
    }
  }
  function Ic(t) {
    try {
      var e = "",
        n = null;
      do (e += sg(t, n)), (n = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var fu = Object.prototype.hasOwnProperty,
    hu = i.unstable_scheduleCallback,
    du = i.unstable_cancelCallback,
    ug = i.unstable_shouldYield,
    og = i.unstable_requestPaint,
    pe = i.unstable_now,
    rg = i.unstable_getCurrentPriorityLevel,
    tf = i.unstable_ImmediatePriority,
    ef = i.unstable_UserBlockingPriority,
    zl = i.unstable_NormalPriority,
    cg = i.unstable_LowPriority,
    nf = i.unstable_IdlePriority,
    fg = i.log,
    hg = i.unstable_setDisableYieldValue,
    yi = null,
    ye = null;
  function Sn(t) {
    if (
      (typeof fg == "function" && hg(t),
      ye && typeof ye.setStrictMode == "function")
    )
      try {
        ye.setStrictMode(yi, t);
      } catch {}
  }
  var ge = Math.clz32 ? Math.clz32 : pg,
    dg = Math.log,
    mg = Math.LN2;
  function pg(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((dg(t) / mg) | 0)) | 0;
  }
  var Ol = 256,
    Rl = 262144,
    Vl = 4194304;
  function Fn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Nl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      o = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return (
      p !== 0
        ? ((a = p & ~o),
          a !== 0
            ? (s = Fn(a))
            : ((f &= p),
              f !== 0
                ? (s = Fn(f))
                : n || ((n = p & ~t), n !== 0 && (s = Fn(n)))))
        : ((p = a & ~o),
          p !== 0
            ? (s = Fn(p))
            : f !== 0
            ? (s = Fn(f))
            : n || ((n = a & ~t), n !== 0 && (s = Fn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & o) === 0 &&
          ((o = s & -s),
          (n = e & -e),
          o >= n || (o === 32 && (n & 4194048) !== 0))
        ? e
        : s
    );
  }
  function gi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function yg(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function af() {
    var t = Vl;
    return (Vl <<= 1), (Vl & 62914560) === 0 && (Vl = 4194304), t;
  }
  function mu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function vi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function gg(t, e, n, a, s, o) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var p = t.entanglements,
      b = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var O = 31 - ge(n),
        _ = 1 << O;
      (p[O] = 0), (b[O] = -1);
      var C = D[O];
      if (C !== null)
        for (D[O] = null, O = 0; O < C.length; O++) {
          var z = C[O];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~_;
    }
    a !== 0 && lf(t, a, 0),
      o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function lf(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ge(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930));
  }
  function sf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - ge(n),
        s = 1 << a;
      (s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s);
    }
  }
  function uf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : pu(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function pu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function yu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function of() {
    var t = L.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Jm(t.type));
  }
  function rf(t, e) {
    var n = L.p;
    try {
      return (L.p = t), e();
    } finally {
      L.p = n;
    }
  }
  var bn = Math.random().toString(36).slice(2),
    Ft = "__reactFiber$" + bn,
    ue = "__reactProps$" + bn,
    Sa = "__reactContainer$" + bn,
    gu = "__reactEvents$" + bn,
    vg = "__reactListeners$" + bn,
    Sg = "__reactHandles$" + bn,
    cf = "__reactResources$" + bn,
    Si = "__reactMarker$" + bn;
  function vu(t) {
    delete t[Ft], delete t[ue], delete t[gu], delete t[vg], delete t[Sg];
  }
  function ba(t) {
    var e = t[Ft];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Sa] || n[Ft])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Vm(t); t !== null; ) {
            if ((n = t[Ft])) return n;
            t = Vm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ta(t) {
    if ((t = t[Ft] || t[Sa])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function bi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function xa(t) {
    var e = t[cf];
    return (
      e ||
        (e = t[cf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Kt(t) {
    t[Si] = !0;
  }
  var ff = new Set(),
    hf = {};
  function Wn(t, e) {
    Aa(t, e), Aa(t + "Capture", e);
  }
  function Aa(t, e) {
    for (hf[t] = e, t = 0; t < e.length; t++) ff.add(e[t]);
  }
  var bg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    df = {},
    mf = {};
  function Tg(t) {
    return fu.call(mf, t)
      ? !0
      : fu.call(df, t)
      ? !1
      : bg.test(t)
      ? (mf[t] = !0)
      : ((df[t] = !0), !1);
  }
  function _l(t, e, n) {
    if (Tg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function jl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function $e(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function De(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function pf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function xg(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        o = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (n = "" + f), o.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Su(t) {
    if (!t._valueTracker) {
      var e = pf(t) ? "checked" : "value";
      t._valueTracker = xg(t, e, "" + t[e]);
    }
  }
  function yf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = pf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Ul(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ag = /[\n"\\]/g;
  function Ce(t) {
    return t.replace(Ag, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function bu(t, e, n, a, s, o, f, p) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + De(e))
          : t.value !== "" + De(e) && (t.value = "" + De(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Tu(t, f, De(e))
        : n != null
        ? Tu(t, f, De(n))
        : a != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (t.name = "" + De(p))
        : t.removeAttribute("name");
  }
  function gf(t, e, n, a, s, o, f, p) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        Su(t);
        return;
      }
      (n = n != null ? "" + De(n) : ""),
        (e = e != null ? "" + De(e) : n),
        p || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = p ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      Su(t);
  }
  function Tu(t, e, n) {
    (e === "number" && Ul(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ea(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + De(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function vf(t, e, n) {
    if (
      e != null &&
      ((e = "" + De(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + De(n) : "";
  }
  function Sf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (se(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = De(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      Su(t);
  }
  function Ma(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Eg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Eg.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Tf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var s in e)
        (a = e[s]), e.hasOwnProperty(s) && n[s] !== a && bf(t, s, a);
    } else for (var o in e) e.hasOwnProperty(o) && bf(t, o, e[o]);
  }
  function xu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Mg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Dg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bl(t) {
    return Dg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ie() {}
  var Au = null;
  function Eu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Da = null,
    Ca = null;
  function xf(t) {
    var e = Ta(t);
    if (e && (t = e.stateNode)) {
      var n = t[ue] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (bu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ce("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[ue] || null;
                if (!s) throw Error(r(90));
                bu(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && yf(a);
          }
          break t;
        case "textarea":
          vf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ea(t, !!n.multiple, e, !1);
      }
    }
  }
  var Mu = !1;
  function Af(t, e, n) {
    if (Mu) return t(e, n);
    Mu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Mu = !1),
        (Da !== null || Ca !== null) &&
          (As(), Da && ((e = Da), (t = Ca), (Ca = Da = null), xf(e), t)))
      )
        for (e = 0; e < t.length; e++) xf(t[e]);
    }
  }
  function Ti(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ue] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
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
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Du = !1;
  if (tn)
    try {
      var xi = {};
      Object.defineProperty(xi, "passive", {
        get: function () {
          Du = !0;
        },
      }),
        window.addEventListener("test", xi, xi),
        window.removeEventListener("test", xi, xi);
    } catch {
      Du = !1;
    }
  var Tn = null,
    Cu = null,
    Ll = null;
  function Ef() {
    if (Ll) return Ll;
    var t,
      e = Cu,
      n = e.length,
      a,
      s = "value" in Tn ? Tn.value : Tn.textContent,
      o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[o - a]; a++);
    return (Ll = s.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Hl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function wl() {
    return !0;
  }
  function Mf() {
    return !1;
  }
  function oe(t) {
    function e(n, a, s, o, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in t)
        t.hasOwnProperty(p) && ((n = t[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? wl
          : Mf),
        (this.isPropagationStopped = Mf),
        this
      );
    }
    return (
      S(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = wl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = wl));
        },
        persist: function () {},
        isPersistent: wl,
      }),
      e
    );
  }
  var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = oe(Pn),
    Ai = S({}, Pn, { view: 0, detail: 0 }),
    Cg = oe(Ai),
    zu,
    Ou,
    Ei,
    Yl = S({}, Ai, {
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
      getModifierState: Vu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ei &&
              (Ei && t.type === "mousemove"
                ? ((zu = t.screenX - Ei.screenX), (Ou = t.screenY - Ei.screenY))
                : (Ou = zu = 0),
              (Ei = t)),
            zu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ou;
      },
    }),
    Df = oe(Yl),
    zg = S({}, Yl, { dataTransfer: 0 }),
    Og = oe(zg),
    Rg = S({}, Ai, { relatedTarget: 0 }),
    Ru = oe(Rg),
    Vg = S({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ng = oe(Vg),
    _g = S({}, Pn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    jg = oe(_g),
    Ug = S({}, Pn, { data: 0 }),
    Cf = oe(Ug),
    Bg = {
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
      MozPrintableKey: "Unidentified",
    },
    Lg = {
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
      224: "Meta",
    },
    Hg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wg(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Hg[t])
      ? !!e[t]
      : !1;
  }
  function Vu() {
    return wg;
  }
  var qg = S({}, Ai, {
      key: function (t) {
        if (t.key) {
          var e = Bg[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Hl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Lg[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Vu,
      charCode: function (t) {
        return t.type === "keypress" ? Hl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Hl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Yg = oe(qg),
    Gg = S({}, Yl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zf = oe(Gg),
    Xg = S({}, Ai, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vu,
    }),
    Qg = oe(Xg),
    Zg = S({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kg = oe(Zg),
    Jg = S({}, Yl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    kg = oe(Jg),
    Fg = S({}, Pn, { newState: 0, oldState: 0 }),
    Wg = oe(Fg),
    Pg = [9, 13, 27, 32],
    Nu = tn && "CompositionEvent" in window,
    Mi = null;
  tn && "documentMode" in document && (Mi = document.documentMode);
  var $g = tn && "TextEvent" in window && !Mi,
    Of = tn && (!Nu || (Mi && 8 < Mi && 11 >= Mi)),
    Rf = " ",
    Vf = !1;
  function Nf(t, e) {
    switch (t) {
      case "keyup":
        return Pg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _f(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var za = !1;
  function Ig(t, e) {
    switch (t) {
      case "compositionend":
        return _f(e);
      case "keypress":
        return e.which !== 32 ? null : ((Vf = !0), Rf);
      case "textInput":
        return (t = e.data), t === Rf && Vf ? null : t;
      default:
        return null;
    }
  }
  function tv(t, e) {
    if (za)
      return t === "compositionend" || (!Nu && Nf(t, e))
        ? ((t = Ef()), (Ll = Cu = Tn = null), (za = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Of && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ev = {
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
    week: !0,
  };
  function jf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ev[t.type] : e === "textarea";
  }
  function Uf(t, e, n, a) {
    Da ? (Ca ? Ca.push(a) : (Ca = [a])) : (Da = a),
      (e = Rs(e, "onChange")),
      0 < e.length &&
        ((n = new ql("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var Di = null,
    Ci = null;
  function nv(t) {
    gm(t, 0);
  }
  function Gl(t) {
    var e = bi(t);
    if (yf(e)) return t;
  }
  function Bf(t, e) {
    if (t === "change") return e;
  }
  var Lf = !1;
  if (tn) {
    var _u;
    if (tn) {
      var ju = "oninput" in document;
      if (!ju) {
        var Hf = document.createElement("div");
        Hf.setAttribute("oninput", "return;"),
          (ju = typeof Hf.oninput == "function");
      }
      _u = ju;
    } else _u = !1;
    Lf = _u && (!document.documentMode || 9 < document.documentMode);
  }
  function wf() {
    Di && (Di.detachEvent("onpropertychange", qf), (Ci = Di = null));
  }
  function qf(t) {
    if (t.propertyName === "value" && Gl(Ci)) {
      var e = [];
      Uf(e, Ci, t, Eu(t)), Af(nv, e);
    }
  }
  function av(t, e, n) {
    t === "focusin"
      ? (wf(), (Di = e), (Ci = n), Di.attachEvent("onpropertychange", qf))
      : t === "focusout" && wf();
  }
  function iv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gl(Ci);
  }
  function lv(t, e) {
    if (t === "click") return Gl(e);
  }
  function sv(t, e) {
    if (t === "input" || t === "change") return Gl(e);
  }
  function uv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ve = typeof Object.is == "function" ? Object.is : uv;
  function zi(t, e) {
    if (ve(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!fu.call(e, s) || !ve(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Yf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gf(t, e) {
    var n = Yf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Yf(n);
    }
  }
  function Xf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Xf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Qf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ul(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ul(t.document);
    }
    return e;
  }
  function Uu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var ov = tn && "documentMode" in document && 11 >= document.documentMode,
    Oa = null,
    Bu = null,
    Oi = null,
    Lu = !1;
  function Zf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Lu ||
      Oa == null ||
      Oa !== Ul(a) ||
      ((a = Oa),
      "selectionStart" in a && Uu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Oi && zi(Oi, a)) ||
        ((Oi = a),
        (a = Rs(Bu, "onSelect")),
        0 < a.length &&
          ((e = new ql("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = Oa))));
  }
  function $n(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ra = {
      animationend: $n("Animation", "AnimationEnd"),
      animationiteration: $n("Animation", "AnimationIteration"),
      animationstart: $n("Animation", "AnimationStart"),
      transitionrun: $n("Transition", "TransitionRun"),
      transitionstart: $n("Transition", "TransitionStart"),
      transitioncancel: $n("Transition", "TransitionCancel"),
      transitionend: $n("Transition", "TransitionEnd"),
    },
    Hu = {},
    Kf = {};
  tn &&
    ((Kf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ra.animationend.animation,
      delete Ra.animationiteration.animation,
      delete Ra.animationstart.animation),
    "TransitionEvent" in window || delete Ra.transitionend.transition);
  function In(t) {
    if (Hu[t]) return Hu[t];
    if (!Ra[t]) return t;
    var e = Ra[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Kf) return (Hu[t] = e[n]);
    return t;
  }
  var Jf = In("animationend"),
    kf = In("animationiteration"),
    Ff = In("animationstart"),
    rv = In("transitionrun"),
    cv = In("transitionstart"),
    fv = In("transitioncancel"),
    Wf = In("transitionend"),
    Pf = new Map(),
    wu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  wu.push("scrollEnd");
  function qe(t, e) {
    Pf.set(t, e), Wn(e, [t]);
  }
  var Xl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ze = [],
    Va = 0,
    qu = 0;
  function Ql() {
    for (var t = Va, e = (qu = Va = 0); e < t; ) {
      var n = ze[e];
      ze[e++] = null;
      var a = ze[e];
      ze[e++] = null;
      var s = ze[e];
      ze[e++] = null;
      var o = ze[e];
      if (((ze[e++] = null), a !== null && s !== null)) {
        var f = a.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (a.pending = s);
      }
      o !== 0 && $f(n, s, o);
    }
  }
  function Zl(t, e, n, a) {
    (ze[Va++] = t),
      (ze[Va++] = e),
      (ze[Va++] = n),
      (ze[Va++] = a),
      (qu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Yu(t, e, n, a) {
    return Zl(t, e, n, a), Kl(t);
  }
  function ta(t, e) {
    return Zl(t, null, null, e), Kl(t);
  }
  function $f(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return);
    return t.tag === 3
      ? ((o = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - ge(n)),
          (t = o.hiddenUpdates),
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function Kl(t) {
    if (50 < Pi) throw ((Pi = 0), (Po = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Na = {};
  function hv(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Se(t, e, n, a) {
    return new hv(t, e, n, a);
  }
  function Gu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function en(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Se(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function If(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Jl(t, e, n, a, s, o) {
    var f = 0;
    if (((a = t), typeof t == "function")) Gu(t) && (f = 1);
    else if (typeof t == "string")
      f = g1(t, n, J.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case St:
          return (t = Se(31, n, e, s)), (t.elementType = St), (t.lanes = o), t;
        case H:
          return ea(n.children, s, o, e);
        case X:
          (f = 8), (s |= 24);
          break;
        case w:
          return (
            (t = Se(12, n, e, s | 2)), (t.elementType = w), (t.lanes = o), t
          );
        case W:
          return (t = Se(13, n, e, s)), (t.elementType = W), (t.lanes = o), t;
        case I:
          return (t = Se(19, n, e, s)), (t.elementType = I), (t.lanes = o), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
                f = 10;
                break t;
              case Z:
                f = 9;
                break t;
              case et:
                f = 11;
                break t;
              case G:
                f = 14;
                break t;
              case P:
                (f = 16), (a = null);
                break t;
            }
          (f = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = Se(f, n, e, s)), (e.elementType = t), (e.type = a), (e.lanes = o), e
    );
  }
  function ea(t, e, n, a) {
    return (t = Se(7, t, a, e)), (t.lanes = n), t;
  }
  function Xu(t, e, n) {
    return (t = Se(6, t, null, e)), (t.lanes = n), t;
  }
  function th(t) {
    var e = Se(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Qu(t, e, n) {
    return (
      (e = Se(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var eh = new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = eh.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Ic(e) }), eh.set(t, e), e);
    }
    return { value: t, source: e, stack: Ic(e) };
  }
  var _a = [],
    ja = 0,
    kl = null,
    Ri = 0,
    Re = [],
    Ve = 0,
    xn = null,
    Ze = 1,
    Ke = "";
  function nn(t, e) {
    (_a[ja++] = Ri), (_a[ja++] = kl), (kl = t), (Ri = e);
  }
  function nh(t, e, n) {
    (Re[Ve++] = Ze), (Re[Ve++] = Ke), (Re[Ve++] = xn), (xn = t);
    var a = Ze;
    t = Ke;
    var s = 32 - ge(a) - 1;
    (a &= ~(1 << s)), (n += 1);
    var o = 32 - ge(e) + s;
    if (30 < o) {
      var f = s - (s % 5);
      (o = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (s -= f),
        (Ze = (1 << (32 - ge(e) + s)) | (n << s) | a),
        (Ke = o + t);
    } else (Ze = (1 << o) | (n << s) | a), (Ke = t);
  }
  function Zu(t) {
    t.return !== null && (nn(t, 1), nh(t, 1, 0));
  }
  function Ku(t) {
    for (; t === kl; )
      (kl = _a[--ja]), (_a[ja] = null), (Ri = _a[--ja]), (_a[ja] = null);
    for (; t === xn; )
      (xn = Re[--Ve]),
        (Re[Ve] = null),
        (Ke = Re[--Ve]),
        (Re[Ve] = null),
        (Ze = Re[--Ve]),
        (Re[Ve] = null);
  }
  function ah(t, e) {
    (Re[Ve++] = Ze),
      (Re[Ve++] = Ke),
      (Re[Ve++] = xn),
      (Ze = e.id),
      (Ke = e.overflow),
      (xn = t);
  }
  var Wt = null,
    Dt = null,
    dt = !1,
    An = null,
    Ne = !1,
    Ju = Error(r(519));
  function En(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Vi(Oe(e, t)), Ju);
  }
  function ih(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Ft] = t), (e[ue] = a), n)) {
      case "dialog":
        rt("cancel", e), rt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        rt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ii.length; n++) rt(Ii[n], e);
        break;
      case "source":
        rt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        rt("error", e), rt("load", e);
        break;
      case "details":
        rt("toggle", e);
        break;
      case "input":
        rt("invalid", e),
          gf(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        rt("invalid", e);
        break;
      case "textarea":
        rt("invalid", e), Sf(e, a.value, a.defaultValue, a.children);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Tm(e.textContent, n)
        ? (a.popover != null && (rt("beforetoggle", e), rt("toggle", e)),
          a.onScroll != null && rt("scroll", e),
          a.onScrollEnd != null && rt("scrollend", e),
          a.onClick != null && (e.onclick = Ie),
          (e = !0))
        : (e = !1),
      e || En(t, !0);
  }
  function lh(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 31:
        case 13:
          Ne = !1;
          return;
        case 27:
        case 3:
          Ne = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function Ua(t) {
    if (t !== Wt) return !1;
    if (!dt) return lh(t), (dt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || hr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Dt && En(t),
      lh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Dt = Rm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Dt = Rm(t);
    } else
      e === 27
        ? ((e = Dt), Hn(t.type) ? ((t = gr), (gr = null), (Dt = t)) : (Dt = e))
        : (Dt = Wt ? je(t.stateNode.nextSibling) : null);
    return !0;
  }
  function na() {
    (Dt = Wt = null), (dt = !1);
  }
  function ku() {
    var t = An;
    return (
      t !== null &&
        (he === null ? (he = t) : he.push.apply(he, t), (An = null)),
      t
    );
  }
  function Vi(t) {
    An === null ? (An = [t]) : An.push(t);
  }
  var Fu = x(null),
    aa = null,
    an = null;
  function Mn(t, e, n) {
    Y(Fu, e._currentValue), (e._currentValue = n);
  }
  function ln(t) {
    (t._currentValue = Fu.current), j(Fu);
  }
  function Wu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Pu(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var p = o;
          o = s;
          for (var b = 0; b < e.length; b++)
            if (p.context === e[b]) {
              (o.lanes |= n),
                (p = o.alternate),
                p !== null && (p.lanes |= n),
                Wu(o.return, n, t),
                a || (f = null);
              break t;
            }
          o = p.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(r(341));
        (f.lanes |= n),
          (o = f.alternate),
          o !== null && (o.lanes |= n),
          Wu(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ba(t, e, n, a) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var p = s.type;
          ve(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(p) : (t = [p]));
        }
      } else if (s === vt.current) {
        if (((f = s.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(il) : (t = [il]));
      }
      s = s.return;
    }
    t !== null && Pu(e, t, n, a), (e.flags |= 262144);
  }
  function Fl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ia(t) {
    (aa = t),
      (an = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Pt(t) {
    return sh(aa, t);
  }
  function Wl(t, e) {
    return aa === null && ia(t), sh(t, e);
  }
  function sh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), an === null)) {
      if (t === null) throw Error(r(308));
      (an = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else an = an.next = e;
    return n;
  }
  var dv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    mv = i.unstable_scheduleCallback,
    pv = i.unstable_NormalPriority,
    wt = {
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function $u() {
    return { controller: new dv(), data: new Map(), refCount: 0 };
  }
  function Ni(t) {
    t.refCount--,
      t.refCount === 0 &&
        mv(pv, function () {
          t.controller.abort();
        });
  }
  var _i = null,
    Iu = 0,
    La = 0,
    Ha = null;
  function yv(t, e) {
    if (_i === null) {
      var n = (_i = []);
      (Iu = 0),
        (La = ar()),
        (Ha = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return Iu++, e.then(uh, uh), e;
  }
  function uh() {
    if (--Iu === 0 && _i !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var t = _i;
      (_i = null), (La = 0), (Ha = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function gv(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      a
    );
  }
  var oh = R.S;
  R.S = function (t, e) {
    (Zd = pe()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        yv(t, e),
      oh !== null && oh(t, e);
  };
  var la = x(null);
  function to() {
    var t = la.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function Pl(t, e) {
    e === null ? Y(la, la.current) : Y(la, e.pool);
  }
  function rh() {
    var t = to();
    return t === null ? null : { parent: wt._currentValue, pool: t };
  }
  var wa = Error(r(460)),
    eo = Error(r(474)),
    $l = Error(r(542)),
    Il = { then: function () {} };
  function ch(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Ie, Ie), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), dh(t), t);
      default:
        if (typeof e.status == "string") e.then(Ie, Ie);
        else {
          if (((t = Mt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), dh(t), t);
        }
        throw ((ua = e), wa);
    }
  }
  function sa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((ua = n), wa)
        : n;
    }
  }
  var ua = null;
  function hh() {
    if (ua === null) throw Error(r(459));
    var t = ua;
    return (ua = null), t;
  }
  function dh(t) {
    if (t === wa || t === $l) throw Error(r(483));
  }
  var qa = null,
    ji = 0;
  function ts(t) {
    var e = ji;
    return (ji += 1), qa === null && (qa = []), fh(qa, t, e);
  }
  function Ui(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function es(t, e) {
    throw e.$$typeof === A
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function mh(t) {
    function e(E, T) {
      if (t) {
        var M = E.deletions;
        M === null ? ((E.deletions = [T]), (E.flags |= 16)) : M.push(T);
      }
    }
    function n(E, T) {
      if (!t) return null;
      for (; T !== null; ) e(E, T), (T = T.sibling);
      return null;
    }
    function a(E) {
      for (var T = new Map(); E !== null; )
        E.key !== null ? T.set(E.key, E) : T.set(E.index, E), (E = E.sibling);
      return T;
    }
    function s(E, T) {
      return (E = en(E, T)), (E.index = 0), (E.sibling = null), E;
    }
    function o(E, T, M) {
      return (
        (E.index = M),
        t
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < T ? ((E.flags |= 67108866), T) : M)
              : ((E.flags |= 67108866), T))
          : ((E.flags |= 1048576), T)
      );
    }
    function f(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function p(E, T, M, V) {
      return T === null || T.tag !== 6
        ? ((T = Xu(M, E.mode, V)), (T.return = E), T)
        : ((T = s(T, M)), (T.return = E), T);
    }
    function b(E, T, M, V) {
      var $ = M.type;
      return $ === H
        ? O(E, T, M.props.children, V, M.key)
        : T !== null &&
          (T.elementType === $ ||
            (typeof $ == "object" &&
              $ !== null &&
              $.$$typeof === P &&
              sa($) === T.type))
        ? ((T = s(T, M.props)), Ui(T, M), (T.return = E), T)
        : ((T = Jl(M.type, M.key, M.props, null, E.mode, V)),
          Ui(T, M),
          (T.return = E),
          T);
    }
    function D(E, T, M, V) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== M.containerInfo ||
        T.stateNode.implementation !== M.implementation
        ? ((T = Qu(M, E.mode, V)), (T.return = E), T)
        : ((T = s(T, M.children || [])), (T.return = E), T);
    }
    function O(E, T, M, V, $) {
      return T === null || T.tag !== 7
        ? ((T = ea(M, E.mode, V, $)), (T.return = E), T)
        : ((T = s(T, M)), (T.return = E), T);
    }
    function _(E, T, M) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = Xu("" + T, E.mode, M)), (T.return = E), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case N:
            return (
              (M = Jl(T.type, T.key, T.props, null, E.mode, M)),
              Ui(M, T),
              (M.return = E),
              M
            );
          case B:
            return (T = Qu(T, E.mode, M)), (T.return = E), T;
          case P:
            return (T = sa(T)), _(E, T, M);
        }
        if (se(T) || kt(T))
          return (T = ea(T, E.mode, M, null)), (T.return = E), T;
        if (typeof T.then == "function") return _(E, ts(T), M);
        if (T.$$typeof === q) return _(E, Wl(E, T), M);
        es(E, T);
      }
      return null;
    }
    function C(E, T, M, V) {
      var $ = T !== null ? T.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return $ !== null ? null : p(E, T, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case N:
            return M.key === $ ? b(E, T, M, V) : null;
          case B:
            return M.key === $ ? D(E, T, M, V) : null;
          case P:
            return (M = sa(M)), C(E, T, M, V);
        }
        if (se(M) || kt(M)) return $ !== null ? null : O(E, T, M, V, null);
        if (typeof M.then == "function") return C(E, T, ts(M), V);
        if (M.$$typeof === q) return C(E, T, Wl(E, M), V);
        es(E, M);
      }
      return null;
    }
    function z(E, T, M, V, $) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return (E = E.get(M) || null), p(T, E, "" + V, $);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case N:
            return (
              (E = E.get(V.key === null ? M : V.key) || null), b(T, E, V, $)
            );
          case B:
            return (
              (E = E.get(V.key === null ? M : V.key) || null), D(T, E, V, $)
            );
          case P:
            return (V = sa(V)), z(E, T, M, V, $);
        }
        if (se(V) || kt(V)) return (E = E.get(M) || null), O(T, E, V, $, null);
        if (typeof V.then == "function") return z(E, T, M, ts(V), $);
        if (V.$$typeof === q) return z(E, T, M, Wl(T, V), $);
        es(T, V);
      }
      return null;
    }
    function K(E, T, M, V) {
      for (
        var $ = null, pt = null, F = T, st = (T = 0), ht = null;
        F !== null && st < M.length;
        st++
      ) {
        F.index > st ? ((ht = F), (F = null)) : (ht = F.sibling);
        var yt = C(E, F, M[st], V);
        if (yt === null) {
          F === null && (F = ht);
          break;
        }
        t && F && yt.alternate === null && e(E, F),
          (T = o(yt, T, st)),
          pt === null ? ($ = yt) : (pt.sibling = yt),
          (pt = yt),
          (F = ht);
      }
      if (st === M.length) return n(E, F), dt && nn(E, st), $;
      if (F === null) {
        for (; st < M.length; st++)
          (F = _(E, M[st], V)),
            F !== null &&
              ((T = o(F, T, st)),
              pt === null ? ($ = F) : (pt.sibling = F),
              (pt = F));
        return dt && nn(E, st), $;
      }
      for (F = a(F); st < M.length; st++)
        (ht = z(F, E, st, M[st], V)),
          ht !== null &&
            (t &&
              ht.alternate !== null &&
              F.delete(ht.key === null ? st : ht.key),
            (T = o(ht, T, st)),
            pt === null ? ($ = ht) : (pt.sibling = ht),
            (pt = ht));
      return (
        t &&
          F.forEach(function (Xn) {
            return e(E, Xn);
          }),
        dt && nn(E, st),
        $
      );
    }
    function tt(E, T, M, V) {
      if (M == null) throw Error(r(151));
      for (
        var $ = null, pt = null, F = T, st = (T = 0), ht = null, yt = M.next();
        F !== null && !yt.done;
        st++, yt = M.next()
      ) {
        F.index > st ? ((ht = F), (F = null)) : (ht = F.sibling);
        var Xn = C(E, F, yt.value, V);
        if (Xn === null) {
          F === null && (F = ht);
          break;
        }
        t && F && Xn.alternate === null && e(E, F),
          (T = o(Xn, T, st)),
          pt === null ? ($ = Xn) : (pt.sibling = Xn),
          (pt = Xn),
          (F = ht);
      }
      if (yt.done) return n(E, F), dt && nn(E, st), $;
      if (F === null) {
        for (; !yt.done; st++, yt = M.next())
          (yt = _(E, yt.value, V)),
            yt !== null &&
              ((T = o(yt, T, st)),
              pt === null ? ($ = yt) : (pt.sibling = yt),
              (pt = yt));
        return dt && nn(E, st), $;
      }
      for (F = a(F); !yt.done; st++, yt = M.next())
        (yt = z(F, E, st, yt.value, V)),
          yt !== null &&
            (t &&
              yt.alternate !== null &&
              F.delete(yt.key === null ? st : yt.key),
            (T = o(yt, T, st)),
            pt === null ? ($ = yt) : (pt.sibling = yt),
            (pt = yt));
      return (
        t &&
          F.forEach(function (z1) {
            return e(E, z1);
          }),
        dt && nn(E, st),
        $
      );
    }
    function Et(E, T, M, V) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === H &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case N:
            t: {
              for (var $ = M.key; T !== null; ) {
                if (T.key === $) {
                  if ((($ = M.type), $ === H)) {
                    if (T.tag === 7) {
                      n(E, T.sibling),
                        (V = s(T, M.props.children)),
                        (V.return = E),
                        (E = V);
                      break t;
                    }
                  } else if (
                    T.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === P &&
                      sa($) === T.type)
                  ) {
                    n(E, T.sibling),
                      (V = s(T, M.props)),
                      Ui(V, M),
                      (V.return = E),
                      (E = V);
                    break t;
                  }
                  n(E, T);
                  break;
                } else e(E, T);
                T = T.sibling;
              }
              M.type === H
                ? ((V = ea(M.props.children, E.mode, V, M.key)),
                  (V.return = E),
                  (E = V))
                : ((V = Jl(M.type, M.key, M.props, null, E.mode, V)),
                  Ui(V, M),
                  (V.return = E),
                  (E = V));
            }
            return f(E);
          case B:
            t: {
              for ($ = M.key; T !== null; ) {
                if (T.key === $)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === M.containerInfo &&
                    T.stateNode.implementation === M.implementation
                  ) {
                    n(E, T.sibling),
                      (V = s(T, M.children || [])),
                      (V.return = E),
                      (E = V);
                    break t;
                  } else {
                    n(E, T);
                    break;
                  }
                else e(E, T);
                T = T.sibling;
              }
              (V = Qu(M, E.mode, V)), (V.return = E), (E = V);
            }
            return f(E);
          case P:
            return (M = sa(M)), Et(E, T, M, V);
        }
        if (se(M)) return K(E, T, M, V);
        if (kt(M)) {
          if ((($ = kt(M)), typeof $ != "function")) throw Error(r(150));
          return (M = $.call(M)), tt(E, T, M, V);
        }
        if (typeof M.then == "function") return Et(E, T, ts(M), V);
        if (M.$$typeof === q) return Et(E, T, Wl(E, M), V);
        es(E, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          T !== null && T.tag === 6
            ? (n(E, T.sibling), (V = s(T, M)), (V.return = E), (E = V))
            : (n(E, T), (V = Xu(M, E.mode, V)), (V.return = E), (E = V)),
          f(E))
        : n(E, T);
    }
    return function (E, T, M, V) {
      try {
        ji = 0;
        var $ = Et(E, T, M, V);
        return (qa = null), $;
      } catch (F) {
        if (F === wa || F === $l) throw F;
        var pt = Se(29, F, null, E.mode);
        return (pt.lanes = V), (pt.return = E), pt;
      } finally {
      }
    };
  }
  var oa = mh(!0),
    ph = mh(!1),
    Dn = !1;
  function no(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ao(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (gt & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = Kl(t)),
        $f(t, null, n),
        e
      );
    }
    return Zl(t, a, e, n), Kl(t);
  }
  function Bi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), sf(t, n);
    }
  }
  function io(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = f) : (o = o.next = f), (n = n.next);
        } while (n !== null);
        o === null ? (s = o = e) : (o = o.next = e);
      } else s = o = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var lo = !1;
  function Li() {
    if (lo) {
      var t = Ha;
      if (t !== null) throw t;
    }
  }
  function Hi(t, e, n, a) {
    lo = !1;
    var s = t.updateQueue;
    Dn = !1;
    var o = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var b = p,
        D = b.next;
      (b.next = null), f === null ? (o = D) : (f.next = D), (f = b);
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (p = O.lastBaseUpdate),
        p !== f &&
          (p === null ? (O.firstBaseUpdate = D) : (p.next = D),
          (O.lastBaseUpdate = b)));
    }
    if (o !== null) {
      var _ = s.baseState;
      (f = 0), (O = D = b = null), (p = o);
      do {
        var C = p.lane & -536870913,
          z = C !== p.lane;
        if (z ? (ft & C) === C : (a & C) === C) {
          C !== 0 && C === La && (lo = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var K = t,
              tt = p;
            C = e;
            var Et = n;
            switch (tt.tag) {
              case 1:
                if (((K = tt.payload), typeof K == "function")) {
                  _ = K.call(Et, _, C);
                  break t;
                }
                _ = K;
                break t;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = tt.payload),
                  (C = typeof K == "function" ? K.call(Et, _, C) : K),
                  C == null)
                )
                  break t;
                _ = S({}, _, C);
                break t;
              case 2:
                Dn = !0;
            }
          }
          (C = p.callback),
            C !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = s.callbacks),
              z === null ? (s.callbacks = [C]) : z.push(C));
        } else
          (z = {
            lane: C,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            O === null ? ((D = O = z), (b = _)) : (O = O.next = z),
            (f |= C);
        if (((p = p.next), p === null)) {
          if (((p = s.shared.pending), p === null)) break;
          (z = p),
            (p = z.next),
            (z.next = null),
            (s.lastBaseUpdate = z),
            (s.shared.pending = null);
        }
      } while (!0);
      O === null && (b = _),
        (s.baseState = b),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = O),
        o === null && (s.shared.lanes = 0),
        (_n |= f),
        (t.lanes = f),
        (t.memoizedState = _);
    }
  }
  function yh(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function gh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) yh(n[t], e);
  }
  var Ya = x(null),
    ns = x(0);
  function vh(t, e) {
    (t = mn), Y(ns, t), Y(Ya, e), (mn = t | e.baseLanes);
  }
  function so() {
    Y(ns, mn), Y(Ya, Ya.current);
  }
  function uo() {
    (mn = ns.current), j(Ya), j(ns);
  }
  var be = x(null),
    _e = null;
  function On(t) {
    var e = t.alternate;
    Y(Bt, Bt.current & 1),
      Y(be, t),
      _e === null &&
        (e === null || Ya.current !== null || e.memoizedState !== null) &&
        (_e = t);
  }
  function oo(t) {
    Y(Bt, Bt.current), Y(be, t), _e === null && (_e = t);
  }
  function Sh(t) {
    t.tag === 22
      ? (Y(Bt, Bt.current), Y(be, t), _e === null && (_e = t))
      : Rn();
  }
  function Rn() {
    Y(Bt, Bt.current), Y(be, be.current);
  }
  function Te(t) {
    j(be), _e === t && (_e = null), j(Bt);
  }
  var Bt = x(0);
  function as(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || pr(n) || yr(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var sn = 0,
    lt = null,
    xt = null,
    qt = null,
    is = !1,
    Ga = !1,
    ra = !1,
    ls = 0,
    wi = 0,
    Xa = null,
    vv = 0;
  function Nt() {
    throw Error(r(321));
  }
  function ro(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ve(t[n], e[n])) return !1;
    return !0;
  }
  function co(t, e, n, a, s, o) {
    return (
      (sn = o),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? nd : Do),
      (ra = !1),
      (o = n(a, s)),
      (ra = !1),
      Ga && (o = Th(e, n, a, s)),
      bh(t),
      o
    );
  }
  function bh(t) {
    R.H = Gi;
    var e = xt !== null && xt.next !== null;
    if (((sn = 0), (qt = xt = lt = null), (is = !1), (wi = 0), (Xa = null), e))
      throw Error(r(300));
    t === null ||
      Yt ||
      ((t = t.dependencies), t !== null && Fl(t) && (Yt = !0));
  }
  function Th(t, e, n, a) {
    lt = t;
    var s = 0;
    do {
      if ((Ga && (Xa = null), (wi = 0), (Ga = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (qt = xt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (R.H = ad), (o = e(n, a));
    } while (Ga);
    return o;
  }
  function Sv() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? qi(e) : e),
      (t = t.useState()[0]),
      (xt !== null ? xt.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function fo() {
    var t = ls !== 0;
    return (ls = 0), t;
  }
  function ho(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function mo(t) {
    if (is) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      is = !1;
    }
    (sn = 0), (qt = xt = lt = null), (Ga = !1), (wi = ls = 0), (Xa = null);
  }
  function ie() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qt === null ? (lt.memoizedState = qt = t) : (qt = qt.next = t), qt;
  }
  function Lt() {
    if (xt === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = xt.next;
    var e = qt === null ? lt.memoizedState : qt.next;
    if (e !== null) (qt = e), (xt = t);
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      (xt = t),
        (t = {
          memoizedState: xt.memoizedState,
          baseState: xt.baseState,
          baseQueue: xt.baseQueue,
          queue: xt.queue,
          next: null,
        }),
        qt === null ? (lt.memoizedState = qt = t) : (qt = qt.next = t);
    }
    return qt;
  }
  function ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function qi(t) {
    var e = wi;
    return (
      (wi += 1),
      Xa === null && (Xa = []),
      (t = fh(Xa, t, e)),
      (e = lt),
      (qt === null ? e.memoizedState : qt.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? nd : Do)),
      t
    );
  }
  function us(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return qi(t);
      if (t.$$typeof === q) return Pt(t);
    }
    throw Error(r(438, String(t)));
  }
  function po(t) {
    var e = null,
      n = lt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = lt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ss()), (lt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = Vt;
    return e.index++, n;
  }
  function un(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function os(t) {
    var e = Lt();
    return yo(e, xt, t);
  }
  function yo(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = o.next), (o.next = f);
      }
      (e.baseQueue = s = o), (a.pending = null);
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      e = s.next;
      var p = (f = null),
        b = null,
        D = e,
        O = !1;
      do {
        var _ = D.lane & -536870913;
        if (_ !== D.lane ? (ft & _) === _ : (sn & _) === _) {
          var C = D.revertLane;
          if (C === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              _ === La && (O = !0);
          else if ((sn & C) === C) {
            (D = D.next), C === La && (O = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              b === null ? ((p = b = _), (f = o)) : (b = b.next = _),
              (lt.lanes |= C),
              (_n |= C);
          (_ = D.action),
            ra && n(o, _),
            (o = D.hasEagerState ? D.eagerState : n(o, _));
        } else
          (C = {
            lane: _,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            b === null ? ((p = b = C), (f = o)) : (b = b.next = C),
            (lt.lanes |= _),
            (_n |= _);
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (b === null ? (f = o) : (b.next = p),
        !ve(o, t.memoizedState) && ((Yt = !0), O && ((n = Ha), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = f),
        (t.baseQueue = b),
        (a.lastRenderedState = o);
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function go(t) {
    var e = Lt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      s = n.pending,
      o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (o = t(o, f.action)), (f = f.next);
      while (f !== s);
      ve(o, e.memoizedState) || (Yt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, a];
  }
  function xh(t, e, n) {
    var a = lt,
      s = Lt(),
      o = dt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !ve((xt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Yt = !0)),
      (s = s.queue),
      bo(Mh.bind(null, a, s, t), [t]),
      s.getSnapshot !== e || f || (qt !== null && qt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Qa(9, { destroy: void 0 }, Eh.bind(null, a, s, n, e), null),
        Mt === null)
      )
        throw Error(r(349));
      o || (sn & 127) !== 0 || Ah(a, e, n);
    }
    return n;
  }
  function Ah(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = lt.updateQueue),
      e === null
        ? ((e = ss()), (lt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Eh(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Dh(e) && Ch(t);
  }
  function Mh(t, e, n) {
    return n(function () {
      Dh(e) && Ch(t);
    });
  }
  function Dh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ve(t, n);
    } catch {
      return !0;
    }
  }
  function Ch(t) {
    var e = ta(t, 2);
    e !== null && de(e, t, 2);
  }
  function vo(t) {
    var e = ie();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ra)) {
        Sn(!0);
        try {
          n();
        } finally {
          Sn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: t,
      }),
      e
    );
  }
  function zh(t, e, n, a) {
    return (t.baseState = n), yo(t, xt, typeof a == "function" ? a : un);
  }
  function bv(t, e, n, a, s) {
    if (fs(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          o.listeners.push(f);
        },
      };
      R.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Oh(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function Oh(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var o = R.T,
        f = {};
      R.T = f;
      try {
        var p = n(s, a),
          b = R.S;
        b !== null && b(f, p), Rh(t, e, p);
      } catch (D) {
        So(t, e, D);
      } finally {
        o !== null && f.types !== null && (o.types = f.types), (R.T = o);
      }
    } else
      try {
        (o = n(s, a)), Rh(t, e, o);
      } catch (D) {
        So(t, e, D);
      }
  }
  function Rh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Vh(t, e, a);
          },
          function (a) {
            return So(t, e, a);
          }
        )
      : Vh(t, e, n);
  }
  function Vh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Nh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Oh(t, n)));
  }
  function So(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), Nh(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Nh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function _h(t, e) {
    return e;
  }
  function jh(t, e) {
    if (dt) {
      var n = Mt.formState;
      if (n !== null) {
        t: {
          var a = lt;
          if (dt) {
            if (Dt) {
              e: {
                for (var s = Dt, o = Ne; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (((s = je(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (Dt = je(s.nextSibling)), (a = s.data === "F!");
                break t;
              }
            }
            En(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ie()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _h,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Ih.bind(null, lt, a)),
      (a.dispatch = n),
      (a = vo(!1)),
      (o = Mo.bind(null, lt, !1, a.queue)),
      (a = ie()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (n = bv.bind(null, lt, s, o, n)),
      (s.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function Uh(t) {
    var e = Lt();
    return Bh(e, xt, t);
  }
  function Bh(t, e, n) {
    if (
      ((e = yo(t, e, _h)[0]),
      (t = os(un)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = qi(e);
      } catch (f) {
        throw f === wa ? $l : f;
      }
    else a = e;
    e = Lt();
    var s = e.queue,
      o = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((lt.flags |= 2048),
        Qa(9, { destroy: void 0 }, Tv.bind(null, s, n), null)),
      [a, o, t]
    );
  }
  function Tv(t, e) {
    t.action = e;
  }
  function Lh(t) {
    var e = Lt(),
      n = xt;
    if (n !== null) return Bh(e, n, t);
    Lt(), (e = e.memoizedState), (n = Lt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function Qa(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = ss()), (lt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Hh() {
    return Lt().memoizedState;
  }
  function rs(t, e, n, a) {
    var s = ie();
    (lt.flags |= t),
      (s.memoizedState = Qa(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a
      ));
  }
  function cs(t, e, n, a) {
    var s = Lt();
    a = a === void 0 ? null : a;
    var o = s.memoizedState.inst;
    xt !== null && a !== null && ro(a, xt.memoizedState.deps)
      ? (s.memoizedState = Qa(e, o, n, a))
      : ((lt.flags |= t), (s.memoizedState = Qa(1 | e, o, n, a)));
  }
  function wh(t, e) {
    rs(8390656, 8, t, e);
  }
  function bo(t, e) {
    cs(2048, 8, t, e);
  }
  function xv(t) {
    lt.flags |= 4;
    var e = lt.updateQueue;
    if (e === null) (e = ss()), (lt.updateQueue = e), (e.events = [t]);
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function qh(t) {
    var e = Lt().memoizedState;
    return (
      xv({ ref: e, nextImpl: t }),
      function () {
        if ((gt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Yh(t, e) {
    return cs(4, 2, t, e);
  }
  function Gh(t, e) {
    return cs(4, 4, t, e);
  }
  function Xh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Qh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), cs(4, 4, Xh.bind(null, e, t), n);
  }
  function To() {}
  function Zh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && ro(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Kh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && ro(e, a[1])) return a[0];
    if (((a = t()), ra)) {
      Sn(!0);
      try {
        t();
      } finally {
        Sn(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function xo(t, e, n) {
    return n === void 0 || ((sn & 1073741824) !== 0 && (ft & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Jd()), (lt.lanes |= t), (_n |= t), n);
  }
  function Jh(t, e, n, a) {
    return ve(n, e)
      ? n
      : Ya.current !== null
      ? ((t = xo(t, n, a)), ve(t, e) || (Yt = !0), t)
      : (sn & 42) === 0 || ((sn & 1073741824) !== 0 && (ft & 261930) === 0)
      ? ((Yt = !0), (t.memoizedState = n))
      : ((t = Jd()), (lt.lanes |= t), (_n |= t), e);
  }
  function kh(t, e, n, a, s) {
    var o = L.p;
    L.p = o !== 0 && 8 > o ? o : 8;
    var f = R.T,
      p = {};
    (R.T = p), Mo(t, !1, e, n);
    try {
      var b = s(),
        D = R.S;
      if (
        (D !== null && D(p, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var O = gv(b, a);
        Yi(t, e, O, Ee(t));
      } else Yi(t, e, a, Ee(t));
    } catch (_) {
      Yi(t, e, { then: function () {}, status: "rejected", reason: _ }, Ee());
    } finally {
      (L.p = o),
        f !== null && p.types !== null && (f.types = p.types),
        (R.T = f);
    }
  }
  function Av() {}
  function Ao(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Fh(t).queue;
    kh(
      t,
      s,
      e,
      k,
      n === null
        ? Av
        : function () {
            return Wh(t), n(a);
          }
    );
  }
  function Fh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: k,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Wh(t) {
    var e = Fh(t);
    e.next === null && (e = t.alternate.memoizedState),
      Yi(t, e.next.queue, {}, Ee());
  }
  function Eo() {
    return Pt(il);
  }
  function Ph() {
    return Lt().memoizedState;
  }
  function $h() {
    return Lt().memoizedState;
  }
  function Ev(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ee();
          t = Cn(n);
          var a = zn(e, t, n);
          a !== null && (de(a, e, n), Bi(a, e, n)),
            (e = { cache: $u() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Mv(t, e, n) {
    var a = Ee();
    (n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fs(t)
        ? td(e, n)
        : ((n = Yu(t, e, n, a)), n !== null && (de(n, t, a), ed(n, e, a)));
  }
  function Ih(t, e, n) {
    var a = Ee();
    Yi(t, e, n, a);
  }
  function Yi(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fs(t)) td(e, s);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var f = e.lastRenderedState,
            p = o(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = p), ve(p, f)))
            return Zl(t, e, s, 0), Mt === null && Ql(), !1;
        } catch {
        } finally {
        }
      if (((n = Yu(t, e, s, a)), n !== null))
        return de(n, t, a), ed(n, e, a), !0;
    }
    return !1;
  }
  function Mo(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ar(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fs(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Yu(t, n, a, 2)), e !== null && de(e, t, 2);
  }
  function fs(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function td(t, e) {
    Ga = is = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function ed(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), sf(t, n);
    }
  }
  var Gi = {
    readContext: Pt,
    use: us,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useLayoutEffect: Nt,
    useInsertionEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    useHostTransitionStatus: Nt,
    useFormState: Nt,
    useActionState: Nt,
    useOptimistic: Nt,
    useMemoCache: Nt,
    useCacheRefresh: Nt,
  };
  Gi.useEffectEvent = Nt;
  var nd = {
      readContext: Pt,
      use: us,
      useCallback: function (t, e) {
        return (ie().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Pt,
      useEffect: wh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          rs(4194308, 4, Xh.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return rs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        rs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ie();
        e = e === void 0 ? null : e;
        var a = t();
        if (ra) {
          Sn(!0);
          try {
            t();
          } finally {
            Sn(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = ie();
        if (n !== void 0) {
          var s = n(e);
          if (ra) {
            Sn(!0);
            try {
              n(e);
            } finally {
              Sn(!1);
            }
          }
        } else s = e;
        return (
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = Mv.bind(null, lt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ie();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = vo(t);
        var e = t.queue,
          n = Ih.bind(null, lt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: To,
      useDeferredValue: function (t, e) {
        var n = ie();
        return xo(n, t, e);
      },
      useTransition: function () {
        var t = vo(!1);
        return (
          (t = kh.bind(null, lt, t.queue, !0, !1)),
          (ie().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = lt,
          s = ie();
        if (dt) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), Mt === null)) throw Error(r(349));
          (ft & 127) !== 0 || Ah(a, e, n);
        }
        s.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (s.queue = o),
          wh(Mh.bind(null, a, o, t), [t]),
          (a.flags |= 2048),
          Qa(9, { destroy: void 0 }, Eh.bind(null, a, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ie(),
          e = Mt.identifierPrefix;
        if (dt) {
          var n = Ke,
            a = Ze;
          (n = (a & ~(1 << (32 - ge(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ls++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_");
        } else (n = vv++), (e = "_" + e + "r_" + n.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Eo,
      useFormState: jh,
      useActionState: jh,
      useOptimistic: function (t) {
        var e = ie();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Mo.bind(null, lt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: po,
      useCacheRefresh: function () {
        return (ie().memoizedState = Ev.bind(null, lt));
      },
      useEffectEvent: function (t) {
        var e = ie(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((gt & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Do = {
      readContext: Pt,
      use: us,
      useCallback: Zh,
      useContext: Pt,
      useEffect: bo,
      useImperativeHandle: Qh,
      useInsertionEffect: Yh,
      useLayoutEffect: Gh,
      useMemo: Kh,
      useReducer: os,
      useRef: Hh,
      useState: function () {
        return os(un);
      },
      useDebugValue: To,
      useDeferredValue: function (t, e) {
        var n = Lt();
        return Jh(n, xt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = os(un)[0],
          e = Lt().memoizedState;
        return [typeof t == "boolean" ? t : qi(t), e];
      },
      useSyncExternalStore: xh,
      useId: Ph,
      useHostTransitionStatus: Eo,
      useFormState: Uh,
      useActionState: Uh,
      useOptimistic: function (t, e) {
        var n = Lt();
        return zh(n, xt, t, e);
      },
      useMemoCache: po,
      useCacheRefresh: $h,
    };
  Do.useEffectEvent = qh;
  var ad = {
    readContext: Pt,
    use: us,
    useCallback: Zh,
    useContext: Pt,
    useEffect: bo,
    useImperativeHandle: Qh,
    useInsertionEffect: Yh,
    useLayoutEffect: Gh,
    useMemo: Kh,
    useReducer: go,
    useRef: Hh,
    useState: function () {
      return go(un);
    },
    useDebugValue: To,
    useDeferredValue: function (t, e) {
      var n = Lt();
      return xt === null ? xo(n, t, e) : Jh(n, xt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = go(un)[0],
        e = Lt().memoizedState;
      return [typeof t == "boolean" ? t : qi(t), e];
    },
    useSyncExternalStore: xh,
    useId: Ph,
    useHostTransitionStatus: Eo,
    useFormState: Lh,
    useActionState: Lh,
    useOptimistic: function (t, e) {
      var n = Lt();
      return xt !== null
        ? zh(n, xt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: po,
    useCacheRefresh: $h,
  };
  ad.useEffectEvent = qh;
  function Co(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : S({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var zo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Ee(),
        s = Cn(a);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = zn(t, s, a)),
        e !== null && (de(e, t, a), Bi(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Ee(),
        s = Cn(a);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = zn(t, s, a)),
        e !== null && (de(e, t, a), Bi(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ee(),
        a = Cn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = zn(t, a, n)),
        e !== null && (de(e, t, n), Bi(e, t, n));
    },
  };
  function id(t, e, n, a, s, o, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, o, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !zi(n, a) || !zi(s, o)
        : !0
    );
  }
  function ld(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && zo.enqueueReplaceState(e, e.state, null);
  }
  function ca(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = S({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function sd(t) {
    Xl(t);
  }
  function ud(t) {
    console.error(t);
  }
  function od(t) {
    Xl(t);
  }
  function hs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function rd(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Oo(t, e, n) {
    return (
      (n = Cn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        hs(t, e);
      }),
      n
    );
  }
  function cd(t) {
    return (t = Cn(t)), (t.tag = 3), t;
  }
  function fd(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = a.value;
      (t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          rd(e, n, a);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        rd(e, n, a),
          typeof s != "function" &&
            (jn === null ? (jn = new Set([this])) : jn.add(this));
        var p = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function Dv(t, e, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ba(e, n, s, !0),
        (n = be.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              _e === null ? Es() : n.alternate === null && _t === 0 && (_t = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              a === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  tr(t, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Il
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  tr(t, a, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return tr(t, a, s), Es(), !1;
    }
    if (dt)
      return (
        (e = be.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== Ju && ((t = Error(r(422), { cause: a })), Vi(Oe(t, n))))
          : (a !== Ju && ((e = Error(r(423), { cause: a })), Vi(Oe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = Oe(a, n)),
            (s = Oo(t.stateNode, a, s)),
            io(t, s),
            _t !== 4 && (_t = 2)),
        !1
      );
    var o = Error(r(520), { cause: a });
    if (
      ((o = Oe(o, n)),
      Wi === null ? (Wi = [o]) : Wi.push(o),
      _t !== 4 && (_t = 2),
      e === null)
    )
      return !0;
    (a = Oe(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Oo(n.stateNode, a, t)),
            io(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (jn === null || !jn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = cd(s)),
              fd(s, t, n, a),
              io(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ro = Error(r(461)),
    Yt = !1;
  function $t(t, e, n, a) {
    e.child = t === null ? ph(e, null, n, a) : oa(e, t.child, n, a);
  }
  function hd(t, e, n, a, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a) p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return (
      ia(e),
      (a = co(t, e, n, f, o, s)),
      (p = fo()),
      t !== null && !Yt
        ? (ho(t, e, s), on(t, e, s))
        : (dt && p && Zu(e), (e.flags |= 1), $t(t, e, a, s), e.child)
    );
  }
  function dd(t, e, n, a, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Gu(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), md(t, e, o, a, s))
        : ((t = Jl(n.type, null, a, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !Ho(t, s))) {
      var f = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : zi), n(f, a) && t.ref === e.ref)
      )
        return on(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = en(o, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function md(t, e, n, a, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (zi(o, a) && t.ref === e.ref)
        if (((Yt = !1), (e.pendingProps = a = o), Ho(t, s)))
          (t.flags & 131072) !== 0 && (Yt = !0);
        else return (e.lanes = t.lanes), on(t, e, s);
    }
    return Vo(t, e, n, a, s);
  }
  function pd(t, e, n, a) {
    var s = a.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, s = 0; a !== null; )
            (s = s | a.lanes | a.childLanes), (a = a.sibling);
          a = s & ~o;
        } else (a = 0), (e.child = null);
        return yd(t, e, o, n, a);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Pl(e, o !== null ? o.cachePool : null),
          o !== null ? vh(e, o) : so(),
          Sh(e);
      else
        return (
          (a = e.lanes = 536870912),
          yd(t, e, o !== null ? o.baseLanes | n : n, n, a)
        );
    } else
      o !== null
        ? (Pl(e, o.cachePool), vh(e, o), Rn(), (e.memoizedState = null))
        : (t !== null && Pl(e, null), so(), Rn());
    return $t(t, e, s, n), e.child;
  }
  function Xi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function yd(t, e, n, a, s) {
    var o = to();
    return (
      (o = o === null ? null : { parent: wt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: n, cachePool: o }),
      t !== null && Pl(e, null),
      so(),
      Sh(e),
      t !== null && Ba(t, e, a, !0),
      (e.childLanes = s),
      null
    );
  }
  function ds(t, e) {
    return (
      (e = ps({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function gd(t, e, n) {
    return (
      oa(e, t.child, null, n),
      (t = ds(e, e.pendingProps)),
      (t.flags |= 2),
      Te(e),
      (e.memoizedState = null),
      t
    );
  }
  function Cv(t, e, n) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (dt) {
        if (a.mode === "hidden")
          return (t = ds(e, a)), (e.lanes = 536870912), Xi(null, t);
        if (
          (oo(e),
          (t = Dt)
            ? ((t = Om(t, Ne)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: xn !== null ? { id: Ze, overflow: Ke } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = th(t)),
                (n.return = e),
                (e.child = n),
                (Wt = e),
                (Dt = null)))
            : (t = null),
          t === null)
        )
          throw En(e);
        return (e.lanes = 536870912), null;
      }
      return ds(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var f = o.dehydrated;
      if ((oo(e), s))
        if (e.flags & 256) (e.flags &= -257), (e = gd(t, e, n));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(r(558));
      else if (
        (Yt || Ba(t, e, n, !1), (s = (n & t.childLanes) !== 0), Yt || s)
      ) {
        if (
          ((a = Mt),
          a !== null && ((f = uf(a, n)), f !== 0 && f !== o.retryLane))
        )
          throw ((o.retryLane = f), ta(t, f), de(a, t, f), Ro);
        Es(), (e = gd(t, e, n));
      } else
        (t = o.treeContext),
          (Dt = je(f.nextSibling)),
          (Wt = e),
          (dt = !0),
          (An = null),
          (Ne = !1),
          t !== null && ah(e, t),
          (e = ds(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = en(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ms(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Vo(t, e, n, a, s) {
    return (
      ia(e),
      (n = co(t, e, n, a, void 0, s)),
      (a = fo()),
      t !== null && !Yt
        ? (ho(t, e, s), on(t, e, s))
        : (dt && a && Zu(e), (e.flags |= 1), $t(t, e, n, s), e.child)
    );
  }
  function vd(t, e, n, a, s, o) {
    return (
      ia(e),
      (e.updateQueue = null),
      (n = Th(e, a, n, s)),
      bh(t),
      (a = fo()),
      t !== null && !Yt
        ? (ho(t, e, o), on(t, e, o))
        : (dt && a && Zu(e), (e.flags |= 1), $t(t, e, n, o), e.child)
    );
  }
  function Sd(t, e, n, a, s) {
    if ((ia(e), e.stateNode === null)) {
      var o = Na,
        f = n.contextType;
      typeof f == "object" && f !== null && (o = Pt(f)),
        (o = new n(a, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = zo),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = a),
        (o.state = e.memoizedState),
        (o.refs = {}),
        no(e),
        (f = n.contextType),
        (o.context = typeof f == "object" && f !== null ? Pt(f) : Na),
        (o.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Co(e, n, f, a), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((f = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          f !== o.state && zo.enqueueReplaceState(o, o.state, null),
          Hi(e, a, o, s),
          Li(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      o = e.stateNode;
      var p = e.memoizedProps,
        b = ca(n, p);
      o.props = b;
      var D = o.context,
        O = n.contextType;
      (f = Na), typeof O == "object" && O !== null && (f = Pt(O));
      var _ = n.getDerivedStateFromProps;
      (O =
        typeof _ == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (p = e.pendingProps !== p),
        O ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((p || D !== f) && ld(e, o, a, f)),
        (Dn = !1);
      var C = e.memoizedState;
      (o.state = C),
        Hi(e, a, o, s),
        Li(),
        (D = e.memoizedState),
        p || C !== D || Dn
          ? (typeof _ == "function" && (Co(e, n, _, a), (D = e.memoizedState)),
            (b = Dn || id(e, n, b, a, C, D, f))
              ? (O ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = D)),
            (o.props = a),
            (o.state = D),
            (o.context = f),
            (a = b))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (o = e.stateNode),
        ao(t, e),
        (f = e.memoizedProps),
        (O = ca(n, f)),
        (o.props = O),
        (_ = e.pendingProps),
        (C = o.context),
        (D = n.contextType),
        (b = Na),
        typeof D == "object" && D !== null && (b = Pt(D)),
        (p = n.getDerivedStateFromProps),
        (D =
          typeof p == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((f !== _ || C !== b) && ld(e, o, a, b)),
        (Dn = !1),
        (C = e.memoizedState),
        (o.state = C),
        Hi(e, a, o, s),
        Li();
      var z = e.memoizedState;
      f !== _ ||
      C !== z ||
      Dn ||
      (t !== null && t.dependencies !== null && Fl(t.dependencies))
        ? (typeof p == "function" && (Co(e, n, p, a), (z = e.memoizedState)),
          (O =
            Dn ||
            id(e, n, O, a, C, z, b) ||
            (t !== null && t.dependencies !== null && Fl(t.dependencies)))
            ? (D ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, z, b),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, z, b)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = z)),
          (o.props = a),
          (o.state = z),
          (o.context = b),
          (a = O))
        : (typeof o.componentDidUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      ms(t, e),
      (a = (e.flags & 128) !== 0),
      o || a
        ? ((o = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = oa(e, t.child, null, s)),
              (e.child = oa(e, null, n, s)))
            : $t(t, e, n, s),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = on(t, e, s)),
      t
    );
  }
  function bd(t, e, n, a) {
    return na(), (e.flags |= 256), $t(t, e, n, a), e.child;
  }
  var No = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function _o(t) {
    return { baseLanes: t, cachePool: rh() };
  }
  function jo(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ae), t;
  }
  function Td(t, e, n) {
    var a = e.pendingProps,
      s = !1,
      o = (e.flags & 128) !== 0,
      f;
    if (
      ((f = o) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (Bt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (dt) {
        if (
          (s ? On(e) : Rn(),
          (t = Dt)
            ? ((t = Om(t, Ne)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: xn !== null ? { id: Ze, overflow: Ke } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = th(t)),
                (n.return = e),
                (e.child = n),
                (Wt = e),
                (Dt = null)))
            : (t = null),
          t === null)
        )
          throw En(e);
        return yr(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var p = a.children;
      return (
        (a = a.fallback),
        s
          ? (Rn(),
            (s = e.mode),
            (p = ps({ mode: "hidden", children: p }, s)),
            (a = ea(a, s, n, null)),
            (p.return = e),
            (a.return = e),
            (p.sibling = a),
            (e.child = p),
            (a = e.child),
            (a.memoizedState = _o(n)),
            (a.childLanes = jo(t, f, n)),
            (e.memoizedState = No),
            Xi(null, a))
          : (On(e), Uo(e, p))
      );
    }
    var b = t.memoizedState;
    if (b !== null && ((p = b.dehydrated), p !== null)) {
      if (o)
        e.flags & 256
          ? (On(e), (e.flags &= -257), (e = Bo(t, e, n)))
          : e.memoizedState !== null
          ? (Rn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Rn(),
            (p = a.fallback),
            (s = e.mode),
            (a = ps({ mode: "visible", children: a.children }, s)),
            (p = ea(p, s, n, null)),
            (p.flags |= 2),
            (a.return = e),
            (p.return = e),
            (a.sibling = p),
            (e.child = a),
            oa(e, t.child, null, n),
            (a = e.child),
            (a.memoizedState = _o(n)),
            (a.childLanes = jo(t, f, n)),
            (e.memoizedState = No),
            (e = Xi(null, a)));
      else if ((On(e), yr(p))) {
        if (((f = p.nextSibling && p.nextSibling.dataset), f)) var D = f.dgst;
        (f = D),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = f),
          Vi({ value: a, source: null, stack: null }),
          (e = Bo(t, e, n));
      } else if (
        (Yt || Ba(t, e, n, !1), (f = (n & t.childLanes) !== 0), Yt || f)
      ) {
        if (
          ((f = Mt),
          f !== null && ((a = uf(f, n)), a !== 0 && a !== b.retryLane))
        )
          throw ((b.retryLane = a), ta(t, a), de(f, t, a), Ro);
        pr(p) || Es(), (e = Bo(t, e, n));
      } else
        pr(p)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = b.treeContext),
            (Dt = je(p.nextSibling)),
            (Wt = e),
            (dt = !0),
            (An = null),
            (Ne = !1),
            t !== null && ah(e, t),
            (e = Uo(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Rn(),
        (p = a.fallback),
        (s = e.mode),
        (b = t.child),
        (D = b.sibling),
        (a = en(b, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = b.subtreeFlags & 65011712),
        D !== null ? (p = en(D, p)) : ((p = ea(p, s, n, null)), (p.flags |= 2)),
        (p.return = e),
        (a.return = e),
        (a.sibling = p),
        (e.child = a),
        Xi(null, a),
        (a = e.child),
        (p = t.child.memoizedState),
        p === null
          ? (p = _o(n))
          : ((s = p.cachePool),
            s !== null
              ? ((b = wt._currentValue),
                (s = s.parent !== b ? { parent: b, pool: b } : s))
              : (s = rh()),
            (p = { baseLanes: p.baseLanes | n, cachePool: s })),
        (a.memoizedState = p),
        (a.childLanes = jo(t, f, n)),
        (e.memoizedState = No),
        Xi(t.child, a))
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = en(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Uo(t, e) {
    return (
      (e = ps({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ps(t, e) {
    return (t = Se(22, t, null, e)), (t.lanes = 0), t;
  }
  function Bo(t, e, n) {
    return (
      oa(e, t.child, null, n),
      (t = Uo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function xd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Wu(t.return, e, n);
  }
  function Lo(t, e, n, a, s, o) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: o,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = o));
  }
  function Ad(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      o = a.tail;
    a = a.children;
    var f = Bt.current,
      p = (f & 2) !== 0;
    if (
      (p ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      Y(Bt, f),
      $t(t, e, a, n),
      (a = dt ? Ri : 0),
      !p && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && xd(t, n, e);
        else if (t.tag === 19) xd(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && as(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Lo(e, !1, s, n, o, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && as(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        Lo(e, !0, n, null, o, a);
        break;
      case "together":
        Lo(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function on(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_n |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ba(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = en(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Ho(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Fl(t)));
  }
  function zv(t, e, n) {
    switch (e.tag) {
      case 3:
        ae(e, e.stateNode.containerInfo),
          Mn(e, wt, t.memoizedState.cache),
          na();
        break;
      case 27:
      case 5:
        pi(e);
        break;
      case 4:
        ae(e, e.stateNode.containerInfo);
        break;
      case 10:
        Mn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), oo(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Td(t, e, n)
            : (On(e), (t = on(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (Ba(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return Ad(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Y(Bt, Bt.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), pd(t, e, n, e.pendingProps);
      case 24:
        Mn(e, wt, t.memoizedState.cache);
    }
    return on(t, e, n);
  }
  function Ed(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Yt = !0;
      else {
        if (!Ho(t, n) && (e.flags & 128) === 0) return (Yt = !1), zv(t, e, n);
        Yt = (t.flags & 131072) !== 0;
      }
    else (Yt = !1), dt && (e.flags & 1048576) !== 0 && nh(e, Ri, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = sa(e.elementType)), (e.type = t), typeof t == "function"))
            Gu(t)
              ? ((a = ca(t, a)), (e.tag = 1), (e = Sd(null, e, t, a, n)))
              : ((e.tag = 0), (e = Vo(null, e, t, a, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === et) {
                (e.tag = 11), (e = hd(null, e, t, a, n));
                break t;
              } else if (s === G) {
                (e.tag = 14), (e = dd(null, e, t, a, n));
                break t;
              }
            }
            throw ((e = Me(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Vo(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (s = ca(a, e.pendingProps)), Sd(t, e, a, s, n);
      case 3:
        t: {
          if ((ae(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          (s = o.element), ao(t, e), Hi(e, a, null, n);
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            Mn(e, wt, a),
            a !== o.cache && Pu(e, [wt], n, !0),
            Li(),
            (a = f.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = bd(t, e, a, n);
              break t;
            } else if (a !== s) {
              (s = Oe(Error(r(424)), e)), Vi(s), (e = bd(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Dt = je(t.firstChild),
                  Wt = e,
                  dt = !0,
                  An = null,
                  Ne = !0,
                  n = ph(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((na(), a === s)) {
              e = on(t, e, n);
              break t;
            }
            $t(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ms(t, e),
          t === null
            ? (n = Um(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : dt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Vs(ut.current).createElement(n)),
                (a[Ft] = e),
                (a[ue] = t),
                It(a, n, t),
                Kt(a),
                (e.stateNode = a))
            : (e.memoizedState = Um(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          pi(e),
          t === null &&
            dt &&
            ((a = e.stateNode = Nm(e.type, e.pendingProps, ut.current)),
            (Wt = e),
            (Ne = !0),
            (s = Dt),
            Hn(e.type) ? ((gr = s), (Dt = je(a.firstChild))) : (Dt = s)),
          $t(t, e, e.pendingProps.children, n),
          ms(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            dt &&
            ((s = a = Dt) &&
              ((a = i1(a, e.type, e.pendingProps, Ne)),
              a !== null
                ? ((e.stateNode = a),
                  (Wt = e),
                  (Dt = je(a.firstChild)),
                  (Ne = !1),
                  (s = !0))
                : (s = !1)),
            s || En(e)),
          pi(e),
          (s = e.type),
          (o = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = o.children),
          hr(s, o) ? (a = null) : f !== null && hr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = co(t, e, Sv, null, null, n)), (il._currentValue = s)),
          ms(t, e),
          $t(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            dt &&
            ((t = n = Dt) &&
              ((n = l1(n, e.pendingProps, Ne)),
              n !== null
                ? ((e.stateNode = n), (Wt = e), (Dt = null), (t = !0))
                : (t = !1)),
            t || En(e)),
          null
        );
      case 13:
        return Td(t, e, n);
      case 4:
        return (
          ae(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = oa(e, null, a, n)) : $t(t, e, a, n),
          e.child
        );
      case 11:
        return hd(t, e, e.type, e.pendingProps, n);
      case 7:
        return $t(t, e, e.pendingProps, n), e.child;
      case 8:
        return $t(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return $t(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Mn(e, e.type, a.value),
          $t(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          ia(e),
          (s = Pt(s)),
          (a = a(s)),
          (e.flags |= 1),
          $t(t, e, a, n),
          e.child
        );
      case 14:
        return dd(t, e, e.type, e.pendingProps, n);
      case 15:
        return md(t, e, e.type, e.pendingProps, n);
      case 19:
        return Ad(t, e, n);
      case 31:
        return Cv(t, e, n);
      case 22:
        return pd(t, e, n, e.pendingProps);
      case 24:
        return (
          ia(e),
          (a = Pt(wt)),
          t === null
            ? ((s = to()),
              s === null &&
                ((s = Mt),
                (o = $u()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (e.memoizedState = { parent: a, cache: s }),
              no(e),
              Mn(e, wt, s))
            : ((t.lanes & n) !== 0 && (ao(t, e), Hi(e, null, null, n), Li()),
              (s = t.memoizedState),
              (o = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Mn(e, wt, a))
                : ((a = o.cache),
                  Mn(e, wt, a),
                  a !== s.cache && Pu(e, [wt], n, !0))),
          $t(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function rn(t) {
    t.flags |= 4;
  }
  function wo(t, e, n, a, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Pd()) t.flags |= 8192;
        else throw ((ua = Il), eo);
    } else t.flags &= -16777217;
  }
  function Md(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !qm(e)))
      if (Pd()) t.flags |= 8192;
      else throw ((ua = Il), eo);
  }
  function ys(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? af() : 536870912), (t.lanes |= e), (ka |= e));
  }
  function Qi(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function Ov(t, e, n) {
    var a = e.pendingProps;
    switch ((Ku(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ct(e), null;
      case 1:
        return Ct(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          ln(wt),
          Ut(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ua(e)
              ? rn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ku())),
          Ct(e),
          null
        );
      case 26:
        var s = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (rn(e),
              o !== null ? (Ct(e), Md(e, o)) : (Ct(e), wo(e, s, null, a, n)))
            : o
            ? o !== t.memoizedState
              ? (rn(e), Ct(e), Md(e, o))
              : (Ct(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && rn(e),
              Ct(e),
              wo(e, s, t, a, n)),
          null
        );
      case 27:
        if (
          (Cl(e),
          (n = ut.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && rn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          (t = J.current),
            Ua(e) ? ih(e) : ((t = Nm(s, a, n)), (e.stateNode = t), rn(e));
        }
        return Ct(e), null;
      case 5:
        if ((Cl(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && rn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          if (((o = J.current), Ua(e))) ih(e);
          else {
            var f = Vs(ut.current);
            switch (o) {
              case 1:
                o = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                o = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    o = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    o = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (o = f.createElement("div")),
                      (o.innerHTML = "<script></script>"),
                      (o = o.removeChild(o.firstChild));
                    break;
                  case "select":
                    (o =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (o.multiple = !0)
                        : a.size && (o.size = a.size);
                    break;
                  default:
                    o =
                      typeof a.is == "string"
                        ? f.createElement(s, { is: a.is })
                        : f.createElement(s);
                }
            }
            (o[Ft] = e), (o[ue] = a);
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) o.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = o;
            t: switch ((It(o, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && rn(e);
          }
        }
        return (
          Ct(e),
          wo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && rn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = ut.current), Ua(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (s = Wt),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            (t[Ft] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Tm(t.nodeValue, n)
              )),
              t || En(e, !0);
          } else (t = Vs(t).createTextNode(a)), (t[Ft] = e), (e.stateNode = t);
        }
        return Ct(e), null;
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = Ua(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(r(557));
              t[Ft] = e;
            } else
              na(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ct(e), (t = !1);
          } else
            (n = ku()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0);
          if (!t) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return Ct(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ua(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[Ft] = e;
            } else
              na(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ct(e), (s = !1);
          } else
            (s = ku()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
        }
        return (
          Te(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (o = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (o = a.memoizedState.cachePool.pool),
                o !== s && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ys(e, e.updateQueue),
              Ct(e),
              null)
        );
      case 4:
        return Ut(), t === null && ur(e.stateNode.containerInfo), Ct(e), null;
      case 10:
        return ln(e.type), Ct(e), null;
      case 19:
        if ((j(Bt), (a = e.memoizedState), a === null)) return Ct(e), null;
        if (((s = (e.flags & 128) !== 0), (o = a.rendering), o === null))
          if (s) Qi(a, !1);
          else {
            if (_t !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = as(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Qi(a, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      ys(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    If(n, t), (n = n.sibling);
                  return (
                    Y(Bt, (Bt.current & 1) | 2),
                    dt && nn(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              pe() > Ts &&
              ((e.flags |= 128), (s = !0), Qi(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = as(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ys(e, t),
                Qi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !o.alternate &&
                  !dt)
              )
                return Ct(e), null;
            } else
              2 * pe() - a.renderingStartTime > Ts &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Qi(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = a.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (a.last = o));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = pe()),
            (t.sibling = null),
            (n = Bt.current),
            Y(Bt, s ? (n & 1) | 2 : n & 1),
            dt && nn(e, a.treeForkCount),
            t)
          : (Ct(e), null);
      case 22:
      case 23:
        return (
          Te(e),
          uo(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ct(e),
          (n = e.updateQueue),
          n !== null && ys(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && j(la),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          ln(wt),
          Ct(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Rv(t, e) {
    switch ((Ku(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          ln(wt),
          Ut(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Cl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Te(e), e.alternate === null)) throw Error(r(340));
          na();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Te(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          na();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return j(Bt), null;
      case 4:
        return Ut(), null;
      case 10:
        return ln(e.type), null;
      case 22:
      case 23:
        return (
          Te(e),
          uo(),
          t !== null && j(la),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return ln(wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dd(t, e) {
    switch ((Ku(e), e.tag)) {
      case 3:
        ln(wt), Ut();
        break;
      case 26:
      case 27:
      case 5:
        Cl(e);
        break;
      case 4:
        Ut();
        break;
      case 31:
        e.memoizedState !== null && Te(e);
        break;
      case 13:
        Te(e);
        break;
      case 19:
        j(Bt);
        break;
      case 10:
        ln(e.type);
        break;
      case 22:
      case 23:
        Te(e), uo(), t !== null && j(la);
        break;
      case 24:
        ln(wt);
    }
  }
  function Zi(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create,
              f = n.inst;
            (a = o()), (f.destroy = a);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      Tt(e, e.return, p);
    }
  }
  function Vn(t, e, n) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              p = f.destroy;
            if (p !== void 0) {
              (f.destroy = void 0), (s = e);
              var b = n,
                D = p;
              try {
                D();
              } catch (O) {
                Tt(s, b, O);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (O) {
      Tt(e, e.return, O);
    }
  }
  function Cd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        gh(e, n);
      } catch (a) {
        Tt(t, t.return, a);
      }
    }
  }
  function zd(t, e, n) {
    (n.props = ca(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Tt(t, e, a);
    }
  }
  function Ki(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      Tt(t, e, s);
    }
  }
  function Je(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Tt(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Tt(t, e, s);
        }
      else n.current = null;
  }
  function Od(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function qo(t, e, n) {
    try {
      var a = t.stateNode;
      $v(a, t.type, n, e), (a[ue] = e);
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function Rd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Hn(t.type)) ||
      t.tag === 4
    );
  }
  function Yo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Hn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Go(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ie));
    else if (
      a !== 4 &&
      (a === 27 && Hn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Go(t, e, n), t = t.sibling; t !== null; )
        Go(t, e, n), (t = t.sibling);
  }
  function gs(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Hn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (gs(t, e, n), t = t.sibling; t !== null; )
        gs(t, e, n), (t = t.sibling);
  }
  function Vd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      It(e, a, n), (e[Ft] = t), (e[ue] = n);
    } catch (o) {
      Tt(t, t.return, o);
    }
  }
  var cn = !1,
    Gt = !1,
    Xo = !1,
    Nd = typeof WeakSet == "function" ? WeakSet : Set,
    Jt = null;
  function Vv(t, e) {
    if (((t = t.containerInfo), (cr = Hs), (t = Qf(t)), Uu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              p = -1,
              b = -1,
              D = 0,
              O = 0,
              _ = t,
              C = null;
            e: for (;;) {
              for (
                var z;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (p = f + s),
                  _ !== o || (a !== 0 && _.nodeType !== 3) || (b = f + a),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (z = _.firstChild) !== null;

              )
                (C = _), (_ = z);
              for (;;) {
                if (_ === t) break e;
                if (
                  (C === n && ++D === s && (p = f),
                  C === o && ++O === a && (b = f),
                  (z = _.nextSibling) !== null)
                )
                  break;
                (_ = C), (C = _.parentNode);
              }
              _ = z;
            }
            n = p === -1 || b === -1 ? null : { start: p, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      fr = { focusedElem: t, selectionRange: n }, Hs = !1, Jt = e;
      Jt !== null;

    )
      if (
        ((e = Jt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Jt = t);
      else
        for (; Jt !== null; ) {
          switch (((e = Jt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  (s = t[n]), (s.ref.impl = s.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode);
                try {
                  var K = ca(n.type, s);
                  (t = a.getSnapshotBeforeUpdate(K, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (tt) {
                  Tt(n, n.return, tt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  mr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Jt = t);
            break;
          }
          Jt = e.return;
        }
  }
  function _d(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(t, n), a & 4 && Zi(5, n);
        break;
      case 1:
        if ((hn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Tt(n, n.return, f);
            }
          else {
            var s = ca(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Tt(n, n.return, f);
            }
          }
        a & 64 && Cd(n), a & 512 && Ki(n, n.return);
        break;
      case 3:
        if ((hn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            gh(t, e);
          } catch (f) {
            Tt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Vd(n);
      case 26:
      case 5:
        hn(t, n), e === null && a & 4 && Od(n), a & 512 && Ki(n, n.return);
        break;
      case 12:
        hn(t, n);
        break;
      case 31:
        hn(t, n), a & 4 && Bd(t, n);
        break;
      case 13:
        hn(t, n),
          a & 4 && Ld(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = qv.bind(null, n)), s1(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || cn), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Gt), (s = cn);
          var o = Gt;
          (cn = a),
            (Gt = e) && !o ? dn(t, n, (n.subtreeFlags & 8772) !== 0) : hn(t, n),
            (cn = s),
            (Gt = o);
        }
        break;
      case 30:
        break;
      default:
        hn(t, n);
    }
  }
  function jd(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), jd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && vu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var zt = null,
    re = !1;
  function fn(t, e, n) {
    for (n = n.child; n !== null; ) Ud(t, e, n), (n = n.sibling);
  }
  function Ud(t, e, n) {
    if (ye && typeof ye.onCommitFiberUnmount == "function")
      try {
        ye.onCommitFiberUnmount(yi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Gt || Je(n, e),
          fn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || Je(n, e);
        var a = zt,
          s = re;
        Hn(n.type) && ((zt = n.stateNode), (re = !1)),
          fn(t, e, n),
          el(n.stateNode),
          (zt = a),
          (re = s);
        break;
      case 5:
        Gt || Je(n, e);
      case 6:
        if (
          ((a = zt),
          (s = re),
          (zt = null),
          fn(t, e, n),
          (zt = a),
          (re = s),
          zt !== null)
        )
          if (re)
            try {
              (zt.nodeType === 9
                ? zt.body
                : zt.nodeName === "HTML"
                ? zt.ownerDocument.body
                : zt
              ).removeChild(n.stateNode);
            } catch (o) {
              Tt(n, e, o);
            }
          else
            try {
              zt.removeChild(n.stateNode);
            } catch (o) {
              Tt(n, e, o);
            }
        break;
      case 18:
        zt !== null &&
          (re
            ? ((t = zt),
              Cm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              ni(t))
            : Cm(zt, n.stateNode));
        break;
      case 4:
        (a = zt),
          (s = re),
          (zt = n.stateNode.containerInfo),
          (re = !0),
          fn(t, e, n),
          (zt = a),
          (re = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vn(2, n, e), Gt || Vn(4, n, e), fn(t, e, n);
        break;
      case 1:
        Gt ||
          (Je(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && zd(n, e, a)),
          fn(t, e, n);
        break;
      case 21:
        fn(t, e, n);
        break;
      case 22:
        (Gt = (a = Gt) || n.memoizedState !== null), fn(t, e, n), (Gt = a);
        break;
      default:
        fn(t, e, n);
    }
  }
  function Bd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ni(t);
      } catch (n) {
        Tt(e, e.return, n);
      }
    }
  }
  function Ld(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ni(t);
      } catch (n) {
        Tt(e, e.return, n);
      }
  }
  function Nv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Nd()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Nd()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function vs(t, e) {
    var n = Nv(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = Yv.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function ce(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          o = t,
          f = e,
          p = f;
        t: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Hn(p.type)) {
                (zt = p.stateNode), (re = !1);
                break t;
              }
              break;
            case 5:
              (zt = p.stateNode), (re = !1);
              break t;
            case 3:
            case 4:
              (zt = p.stateNode.containerInfo), (re = !0);
              break t;
          }
          p = p.return;
        }
        if (zt === null) throw Error(r(160));
        Ud(o, f, s),
          (zt = null),
          (re = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Hd(e, t), (e = e.sibling);
  }
  var Ye = null;
  function Hd(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ce(e, t),
          fe(t),
          a & 4 && (Vn(3, t, t.return), Zi(3, t), Vn(5, t, t.return));
        break;
      case 1:
        ce(e, t),
          fe(t),
          a & 512 && (Gt || n === null || Je(n, n.return)),
          a & 64 &&
            cn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var s = Ye;
        if (
          (ce(e, t),
          fe(t),
          a & 512 && (Gt || n === null || Je(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (a) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Si] ||
                          o[Ft] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(a)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        It(o, a, n),
                        (o[Ft] = t),
                        Kt(o),
                        (a = o);
                      break t;
                    case "link":
                      var f = Hm("link", "href", s).get(a + (n.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (
                            ((o = f[p]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(a)),
                        It(o, a, n),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (f = Hm("meta", "content", s).get(
                          a + (n.content || "")
                        ))
                      ) {
                        for (p = 0; p < f.length; p++)
                          if (
                            ((o = f[p]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(a)),
                        It(o, a, n),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (o[Ft] = t), Kt(o), (a = o);
                }
                t.stateNode = a;
              } else wm(s, t.type, t.stateNode);
            else t.stateNode = Lm(s, a, t.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? wm(s, t.type, t.stateNode)
                  : Lm(s, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                qo(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ce(e, t),
          fe(t),
          a & 512 && (Gt || n === null || Je(n, n.return)),
          n !== null && a & 4 && qo(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ce(e, t),
          fe(t),
          a & 512 && (Gt || n === null || Je(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Ma(s, "");
          } catch (K) {
            Tt(t, t.return, K);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), qo(t, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (Xo = !0);
        break;
      case 6:
        if ((ce(e, t), fe(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (K) {
            Tt(t, t.return, K);
          }
        }
        break;
      case 3:
        if (
          ((js = null),
          (s = Ye),
          (Ye = Ns(e.containerInfo)),
          ce(e, t),
          (Ye = s),
          fe(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ni(e.containerInfo);
          } catch (K) {
            Tt(t, t.return, K);
          }
        Xo && ((Xo = !1), wd(t));
        break;
      case 4:
        (a = Ye),
          (Ye = Ns(t.stateNode.containerInfo)),
          ce(e, t),
          fe(t),
          (Ye = a);
        break;
      case 12:
        ce(e, t), fe(t);
        break;
      case 31:
        ce(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), vs(t, a)));
        break;
      case 13:
        ce(e, t),
          fe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (bs = pe()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), vs(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null,
          D = cn,
          O = Gt;
        if (
          ((cn = D || s),
          (Gt = O || b),
          ce(e, t),
          (Gt = O),
          (cn = D),
          fe(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || b || cn || Gt || fa(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                b = n = e;
                try {
                  if (((o = b.stateNode), s))
                    (f = o.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    p = b.stateNode;
                    var _ = b.memoizedProps.style,
                      C =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    p.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (K) {
                  Tt(b, b.return, K);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = s ? "" : b.memoizedProps;
                } catch (K) {
                  Tt(b, b.return, K);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                b = e;
                try {
                  var z = b.stateNode;
                  s ? zm(z, !0) : zm(b.stateNode, !1);
                } catch (K) {
                  Tt(b, b.return, K);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), vs(t, n))));
        break;
      case 19:
        ce(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), vs(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ce(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Rd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              o = Yo(t);
            gs(t, o, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ma(f, ""), (n.flags &= -33));
            var p = Yo(t);
            gs(t, p, f);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo,
              D = Yo(t);
            Go(t, D, b);
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        Tt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function wd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        wd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) _d(t, e.alternate, e), (e = e.sibling);
  }
  function fa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vn(4, e, e.return), fa(e);
          break;
        case 1:
          Je(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && zd(e, e.return, n),
            fa(e);
          break;
        case 27:
          el(e.stateNode);
        case 26:
        case 5:
          Je(e, e.return), fa(e);
          break;
        case 22:
          e.memoizedState === null && fa(e);
          break;
        case 30:
          fa(e);
          break;
        default:
          fa(e);
      }
      t = t.sibling;
    }
  }
  function dn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        s = t,
        o = e,
        f = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          dn(s, o, n), Zi(4, o);
          break;
        case 1:
          if (
            (dn(s, o, n),
            (a = o),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (D) {
              Tt(a, a.return, D);
            }
          if (((a = o), (s = a.updateQueue), s !== null)) {
            var p = a.stateNode;
            try {
              var b = s.shared.hiddenCallbacks;
              if (b !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < b.length; s++)
                  yh(b[s], p);
            } catch (D) {
              Tt(a, a.return, D);
            }
          }
          n && f & 64 && Cd(o), Ki(o, o.return);
          break;
        case 27:
          Vd(o);
        case 26:
        case 5:
          dn(s, o, n), n && a === null && f & 4 && Od(o), Ki(o, o.return);
          break;
        case 12:
          dn(s, o, n);
          break;
        case 31:
          dn(s, o, n), n && f & 4 && Bd(s, o);
          break;
        case 13:
          dn(s, o, n), n && f & 4 && Ld(s, o);
          break;
        case 22:
          o.memoizedState === null && dn(s, o, n), Ki(o, o.return);
          break;
        case 30:
          break;
        default:
          dn(s, o, n);
      }
      e = e.sibling;
    }
  }
  function Qo(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ni(n));
  }
  function Zo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ni(t));
  }
  function Ge(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) qd(t, e, n, a), (e = e.sibling);
  }
  function qd(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ge(t, e, n, a), s & 2048 && Zi(9, e);
        break;
      case 1:
        Ge(t, e, n, a);
        break;
      case 3:
        Ge(t, e, n, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ni(t)));
        break;
      case 12:
        if (s & 2048) {
          Ge(t, e, n, a), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              f = o.id,
              p = o.onPostCommit;
            typeof p == "function" &&
              p(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (b) {
            Tt(e, e.return, b);
          }
        } else Ge(t, e, n, a);
        break;
      case 31:
        Ge(t, e, n, a);
        break;
      case 13:
        Ge(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ge(t, e, n, a)
              : Ji(t, e)
            : o._visibility & 2
            ? Ge(t, e, n, a)
            : ((o._visibility |= 2),
              Za(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Qo(f, e);
        break;
      case 24:
        Ge(t, e, n, a), s & 2048 && Zo(e.alternate, e);
        break;
      default:
        Ge(t, e, n, a);
    }
  }
  function Za(t, e, n, a, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var o = t,
        f = e,
        p = n,
        b = a,
        D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Za(o, f, p, b, s), Zi(8, f);
          break;
        case 23:
          break;
        case 22:
          var O = f.stateNode;
          f.memoizedState !== null
            ? O._visibility & 2
              ? Za(o, f, p, b, s)
              : Ji(o, f)
            : ((O._visibility |= 2), Za(o, f, p, b, s)),
            s && D & 2048 && Qo(f.alternate, f);
          break;
        case 24:
          Za(o, f, p, b, s), s && D & 2048 && Zo(f.alternate, f);
          break;
        default:
          Za(o, f, p, b, s);
      }
      e = e.sibling;
    }
  }
  function Ji(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            Ji(n, a), s & 2048 && Qo(a.alternate, a);
            break;
          case 24:
            Ji(n, a), s & 2048 && Zo(a.alternate, a);
            break;
          default:
            Ji(n, a);
        }
        e = e.sibling;
      }
  }
  var ki = 8192;
  function Ka(t, e, n) {
    if (t.subtreeFlags & ki)
      for (t = t.child; t !== null; ) Yd(t, e, n), (t = t.sibling);
  }
  function Yd(t, e, n) {
    switch (t.tag) {
      case 26:
        Ka(t, e, n),
          t.flags & ki &&
            t.memoizedState !== null &&
            v1(n, Ye, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ka(t, e, n);
        break;
      case 3:
      case 4:
        var a = Ye;
        (Ye = Ns(t.stateNode.containerInfo)), Ka(t, e, n), (Ye = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ki), (ki = 16777216), Ka(t, e, n), (ki = a))
            : Ka(t, e, n));
        break;
      default:
        Ka(t, e, n);
    }
  }
  function Gd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Fi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Jt = a), Qd(a, t);
        }
      Gd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Xd(t), (t = t.sibling);
  }
  function Xd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fi(t), t.flags & 2048 && Vn(9, t, t.return);
        break;
      case 3:
        Fi(t);
        break;
      case 12:
        Fi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ss(t))
          : Fi(t);
        break;
      default:
        Fi(t);
    }
  }
  function Ss(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Jt = a), Qd(a, t);
        }
      Gd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Vn(8, e, e.return), Ss(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Ss(e));
          break;
        default:
          Ss(e);
      }
      t = t.sibling;
    }
  }
  function Qd(t, e) {
    for (; Jt !== null; ) {
      var n = Jt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ni(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (Jt = a);
      else
        t: for (n = t; Jt !== null; ) {
          a = Jt;
          var s = a.sibling,
            o = a.return;
          if ((jd(a), a === n)) {
            Jt = null;
            break t;
          }
          if (s !== null) {
            (s.return = o), (Jt = s);
            break t;
          }
          Jt = o;
        }
    }
  }
  var _v = {
      getCacheForType: function (t) {
        var e = Pt(wt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
      cacheSignal: function () {
        return Pt(wt).controller.signal;
      },
    },
    jv = typeof WeakMap == "function" ? WeakMap : Map,
    gt = 0,
    Mt = null,
    ot = null,
    ft = 0,
    bt = 0,
    xe = null,
    Nn = !1,
    Ja = !1,
    Ko = !1,
    mn = 0,
    _t = 0,
    _n = 0,
    ha = 0,
    Jo = 0,
    Ae = 0,
    ka = 0,
    Wi = null,
    he = null,
    ko = !1,
    bs = 0,
    Zd = 0,
    Ts = 1 / 0,
    xs = null,
    jn = null,
    Zt = 0,
    Un = null,
    Fa = null,
    pn = 0,
    Fo = 0,
    Wo = null,
    Kd = null,
    Pi = 0,
    Po = null;
  function Ee() {
    return (gt & 2) !== 0 && ft !== 0 ? ft & -ft : R.T !== null ? ar() : of();
  }
  function Jd() {
    if (Ae === 0)
      if ((ft & 536870912) === 0 || dt) {
        var t = Rl;
        (Rl <<= 1), (Rl & 3932160) === 0 && (Rl = 262144), (Ae = t);
      } else Ae = 536870912;
    return (t = be.current), t !== null && (t.flags |= 32), Ae;
  }
  function de(t, e, n) {
    ((t === Mt && (bt === 2 || bt === 9)) || t.cancelPendingCommit !== null) &&
      (Wa(t, 0), Bn(t, ft, Ae, !1)),
      vi(t, n),
      ((gt & 2) === 0 || t !== Mt) &&
        (t === Mt &&
          ((gt & 2) === 0 && (ha |= n), _t === 4 && Bn(t, ft, Ae, !1)),
        ke(t));
  }
  function kd(t, e, n) {
    if ((gt & 6) !== 0) throw Error(r(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || gi(t, e),
      s = a ? Lv(t, e) : Io(t, e, !0),
      o = a;
    do {
      if (s === 0) {
        Ja && !a && Bn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !Uv(n))) {
          (s = Io(t, e, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Wi;
              var b = p.current.memoizedState.isDehydrated;
              if ((b && (Wa(p, f).flags |= 256), (f = Io(p, f, !1)), f !== 2)) {
                if (Ko && !b) {
                  (p.errorRecoveryDisabledLanes |= o), (ha |= o), (s = 4);
                  break t;
                }
                (o = he),
                  (he = s),
                  o !== null && (he === null ? (he = o) : he.push.apply(he, o));
              }
              s = f;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Wa(t, 0), Bn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (o = s), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Bn(a, e, Ae, !Nn);
              break t;
            case 2:
              he = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = bs + 300 - pe()), 10 < s)) {
            if ((Bn(a, e, Ae, !Nn), Nl(a, 0, !0) !== 0)) break t;
            (pn = e),
              (a.timeoutHandle = Mm(
                Fd.bind(
                  null,
                  a,
                  n,
                  he,
                  xs,
                  ko,
                  e,
                  Ae,
                  ha,
                  ka,
                  Nn,
                  o,
                  "Throttled",
                  -0,
                  0
                ),
                s
              ));
            break t;
          }
          Fd(a, n, he, xs, ko, e, Ae, ha, ka, Nn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ke(t);
  }
  function Fd(t, e, n, a, s, o, f, p, b, D, O, _, C, z) {
    if (
      ((t.timeoutHandle = -1),
      (_ = e.subtreeFlags),
      _ & 8192 || (_ & 16785408) === 16785408)
    ) {
      (_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ie,
      }),
        Yd(e, o, _);
      var K =
        (o & 62914560) === o ? bs - pe() : (o & 4194048) === o ? Zd - pe() : 0;
      if (((K = S1(_, K)), K !== null)) {
        (pn = o),
          (t.cancelPendingCommit = K(
            am.bind(null, t, e, o, n, a, s, f, p, b, O, _, null, C, z)
          )),
          Bn(t, o, f, !D);
        return;
      }
    }
    am(t, e, o, n, a, s, f, p, b);
  }
  function Uv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!ve(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Bn(t, e, n, a) {
    (e &= ~Jo),
      (e &= ~ha),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var o = 31 - ge(s),
        f = 1 << o;
      (a[o] = -1), (s &= ~f);
    }
    n !== 0 && lf(t, n, e);
  }
  function As() {
    return (gt & 6) === 0 ? ($i(0), !1) : !0;
  }
  function $o() {
    if (ot !== null) {
      if (bt === 0) var t = ot.return;
      else (t = ot), (an = aa = null), mo(t), (qa = null), (ji = 0), (t = ot);
      for (; t !== null; ) Dd(t.alternate, t), (t = t.return);
      ot = null;
    }
  }
  function Wa(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), e1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (pn = 0),
      $o(),
      (Mt = t),
      (ot = n = en(t.current, null)),
      (ft = e),
      (bt = 0),
      (xe = null),
      (Nn = !1),
      (Ja = gi(t, e)),
      (Ko = !1),
      (ka = Ae = Jo = ha = _n = _t = 0),
      (he = Wi = null),
      (ko = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - ge(a),
          o = 1 << s;
        (e |= t[s]), (a &= ~o);
      }
    return (mn = e), Ql(), n;
  }
  function Wd(t, e) {
    (lt = null),
      (R.H = Gi),
      e === wa || e === $l
        ? ((e = hh()), (bt = 3))
        : e === eo
        ? ((e = hh()), (bt = 4))
        : (bt =
            e === Ro
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (xe = e),
      ot === null && ((_t = 1), hs(t, Oe(e, t.current)));
  }
  function Pd() {
    var t = be.current;
    return t === null
      ? !0
      : (ft & 4194048) === ft
      ? _e === null
      : (ft & 62914560) === ft || (ft & 536870912) !== 0
      ? t === _e
      : !1;
  }
  function $d() {
    var t = R.H;
    return (R.H = Gi), t === null ? Gi : t;
  }
  function Id() {
    var t = R.A;
    return (R.A = _v), t;
  }
  function Es() {
    (_t = 4),
      Nn || ((ft & 4194048) !== ft && be.current !== null) || (Ja = !0),
      ((_n & 134217727) === 0 && (ha & 134217727) === 0) ||
        Mt === null ||
        Bn(Mt, ft, Ae, !1);
  }
  function Io(t, e, n) {
    var a = gt;
    gt |= 2;
    var s = $d(),
      o = Id();
    (Mt !== t || ft !== e) && ((xs = null), Wa(t, e)), (e = !1);
    var f = _t;
    t: do
      try {
        if (bt !== 0 && ot !== null) {
          var p = ot,
            b = xe;
          switch (bt) {
            case 8:
              $o(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var D = bt;
              if (((bt = 0), (xe = null), Pa(t, p, b, D), n && Ja)) {
                f = 0;
                break t;
              }
              break;
            default:
              (D = bt), (bt = 0), (xe = null), Pa(t, p, b, D);
          }
        }
        Bv(), (f = _t);
        break;
      } catch (O) {
        Wd(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (an = aa = null),
      (gt = a),
      (R.H = s),
      (R.A = o),
      ot === null && ((Mt = null), (ft = 0), Ql()),
      f
    );
  }
  function Bv() {
    for (; ot !== null; ) tm(ot);
  }
  function Lv(t, e) {
    var n = gt;
    gt |= 2;
    var a = $d(),
      s = Id();
    Mt !== t || ft !== e
      ? ((xs = null), (Ts = pe() + 500), Wa(t, e))
      : (Ja = gi(t, e));
    t: do
      try {
        if (bt !== 0 && ot !== null) {
          e = ot;
          var o = xe;
          e: switch (bt) {
            case 1:
              (bt = 0), (xe = null), Pa(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (ch(o)) {
                (bt = 0), (xe = null), em(e);
                break;
              }
              (e = function () {
                (bt !== 2 && bt !== 9) || Mt !== t || (bt = 7), ke(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              bt = 7;
              break t;
            case 4:
              bt = 5;
              break t;
            case 7:
              ch(o)
                ? ((bt = 0), (xe = null), em(e))
                : ((bt = 0), (xe = null), Pa(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (ot.tag) {
                case 26:
                  f = ot.memoizedState;
                case 5:
                case 27:
                  var p = ot;
                  if (f ? qm(f) : p.stateNode.complete) {
                    (bt = 0), (xe = null);
                    var b = p.sibling;
                    if (b !== null) ot = b;
                    else {
                      var D = p.return;
                      D !== null ? ((ot = D), Ms(D)) : (ot = null);
                    }
                    break e;
                  }
              }
              (bt = 0), (xe = null), Pa(t, e, o, 5);
              break;
            case 6:
              (bt = 0), (xe = null), Pa(t, e, o, 6);
              break;
            case 8:
              $o(), (_t = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        Hv();
        break;
      } catch (O) {
        Wd(t, O);
      }
    while (!0);
    return (
      (an = aa = null),
      (R.H = a),
      (R.A = s),
      (gt = n),
      ot !== null ? 0 : ((Mt = null), (ft = 0), Ql(), _t)
    );
  }
  function Hv() {
    for (; ot !== null && !ug(); ) tm(ot);
  }
  function tm(t) {
    var e = Ed(t.alternate, t, mn);
    (t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (ot = e);
  }
  function em(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = vd(n, e, e.pendingProps, e.type, void 0, ft);
        break;
      case 11:
        e = vd(n, e, e.pendingProps, e.type.render, e.ref, ft);
        break;
      case 5:
        mo(e);
      default:
        Dd(n, e), (e = ot = If(e, mn)), (e = Ed(n, e, mn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Ms(t) : (ot = e);
  }
  function Pa(t, e, n, a) {
    (an = aa = null), mo(e), (qa = null), (ji = 0);
    var s = e.return;
    try {
      if (Dv(t, s, e, n, ft)) {
        (_t = 1), hs(t, Oe(n, t.current)), (ot = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((ot = s), o);
      (_t = 1), hs(t, Oe(n, t.current)), (ot = null);
      return;
    }
    e.flags & 32768
      ? (dt || a === 1
          ? (t = !0)
          : Ja || (ft & 536870912) !== 0
          ? (t = !1)
          : ((Nn = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = be.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        nm(e, t))
      : Ms(e);
  }
  function Ms(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        nm(e, Nn);
        return;
      }
      t = e.return;
      var n = Ov(e.alternate, e, mn);
      if (n !== null) {
        ot = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ot = e;
        return;
      }
      ot = e = t;
    } while (e !== null);
    _t === 0 && (_t = 5);
  }
  function nm(t, e) {
    do {
      var n = Rv(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ot = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ot = t;
        return;
      }
      ot = t = n;
    } while (t !== null);
    (_t = 6), (ot = null);
  }
  function am(t, e, n, a, s, o, f, p, b) {
    t.cancelPendingCommit = null;
    do Ds();
    while (Zt !== 0);
    if ((gt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= qu),
        gg(t, n, o, f, p, b),
        t === Mt && ((ot = Mt = null), (ft = 0)),
        (Fa = e),
        (Un = t),
        (pn = n),
        (Fo = o),
        (Wo = s),
        (Kd = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Gv(zl, function () {
              return om(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = R.T), (R.T = null), (s = L.p), (L.p = 2), (f = gt), (gt |= 4);
        try {
          Vv(t, e, n);
        } finally {
          (gt = f), (L.p = s), (R.T = a);
        }
      }
      (Zt = 1), im(), lm(), sm();
    }
  }
  function im() {
    if (Zt === 1) {
      Zt = 0;
      var t = Un,
        e = Fa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = R.T), (R.T = null);
        var a = L.p;
        L.p = 2;
        var s = gt;
        gt |= 4;
        try {
          Hd(e, t);
          var o = fr,
            f = Qf(t.containerInfo),
            p = o.focusedElem,
            b = o.selectionRange;
          if (
            f !== p &&
            p &&
            p.ownerDocument &&
            Xf(p.ownerDocument.documentElement, p)
          ) {
            if (b !== null && Uu(p)) {
              var D = b.start,
                O = b.end;
              if ((O === void 0 && (O = D), "selectionStart" in p))
                (p.selectionStart = D),
                  (p.selectionEnd = Math.min(O, p.value.length));
              else {
                var _ = p.ownerDocument || document,
                  C = (_ && _.defaultView) || window;
                if (C.getSelection) {
                  var z = C.getSelection(),
                    K = p.textContent.length,
                    tt = Math.min(b.start, K),
                    Et = b.end === void 0 ? tt : Math.min(b.end, K);
                  !z.extend && tt > Et && ((f = Et), (Et = tt), (tt = f));
                  var E = Gf(p, tt),
                    T = Gf(p, Et);
                  if (
                    E &&
                    T &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== E.node ||
                      z.anchorOffset !== E.offset ||
                      z.focusNode !== T.node ||
                      z.focusOffset !== T.offset)
                  ) {
                    var M = _.createRange();
                    M.setStart(E.node, E.offset),
                      z.removeAllRanges(),
                      tt > Et
                        ? (z.addRange(M), z.extend(T.node, T.offset))
                        : (M.setEnd(T.node, T.offset), z.addRange(M));
                  }
                }
              }
            }
            for (_ = [], z = p; (z = z.parentNode); )
              z.nodeType === 1 &&
                _.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < _.length;
              p++
            ) {
              var V = _[p];
              (V.element.scrollLeft = V.left), (V.element.scrollTop = V.top);
            }
          }
          (Hs = !!cr), (fr = cr = null);
        } finally {
          (gt = s), (L.p = a), (R.T = n);
        }
      }
      (t.current = e), (Zt = 2);
    }
  }
  function lm() {
    if (Zt === 2) {
      Zt = 0;
      var t = Un,
        e = Fa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = R.T), (R.T = null);
        var a = L.p;
        L.p = 2;
        var s = gt;
        gt |= 4;
        try {
          _d(t, e.alternate, e);
        } finally {
          (gt = s), (L.p = a), (R.T = n);
        }
      }
      Zt = 3;
    }
  }
  function sm() {
    if (Zt === 4 || Zt === 3) {
      (Zt = 0), og();
      var t = Un,
        e = Fa,
        n = pn,
        a = Kd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Zt = 5)
        : ((Zt = 0), (Fa = Un = null), um(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (jn = null),
        yu(n),
        (e = e.stateNode),
        ye && typeof ye.onCommitFiberRoot == "function")
      )
        try {
          ye.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = R.T), (s = L.p), (L.p = 2), (R.T = null);
        try {
          for (var o = t.onRecoverableError, f = 0; f < a.length; f++) {
            var p = a[f];
            o(p.value, { componentStack: p.stack });
          }
        } finally {
          (R.T = e), (L.p = s);
        }
      }
      (pn & 3) !== 0 && Ds(),
        ke(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === Po
            ? Pi++
            : ((Pi = 0), (Po = t))
          : (Pi = 0),
        $i(0);
    }
  }
  function um(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ni(e)));
  }
  function Ds() {
    return im(), lm(), sm(), om();
  }
  function om() {
    if (Zt !== 5) return !1;
    var t = Un,
      e = Fo;
    Fo = 0;
    var n = yu(pn),
      a = R.T,
      s = L.p;
    try {
      (L.p = 32 > n ? 32 : n), (R.T = null), (n = Wo), (Wo = null);
      var o = Un,
        f = pn;
      if (((Zt = 0), (Fa = Un = null), (pn = 0), (gt & 6) !== 0))
        throw Error(r(331));
      var p = gt;
      if (
        ((gt |= 4),
        Xd(o.current),
        qd(o, o.current, f, n),
        (gt = p),
        $i(0, !1),
        ye && typeof ye.onPostCommitFiberRoot == "function")
      )
        try {
          ye.onPostCommitFiberRoot(yi, o);
        } catch {}
      return !0;
    } finally {
      (L.p = s), (R.T = a), um(t, e);
    }
  }
  function rm(t, e, n) {
    (e = Oe(n, e)),
      (e = Oo(t.stateNode, e, 2)),
      (t = zn(t, e, 2)),
      t !== null && (vi(t, 2), ke(t));
  }
  function Tt(t, e, n) {
    if (t.tag === 3) rm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          rm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (jn === null || !jn.has(a)))
          ) {
            (t = Oe(n, t)),
              (n = cd(2)),
              (a = zn(e, n, 2)),
              a !== null && (fd(n, a, e, t), vi(a, 2), ke(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function tr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new jv();
      var s = new Set();
      a.set(e, s);
    } else (s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s));
    s.has(n) ||
      ((Ko = !0), s.add(n), (t = wv.bind(null, t, e, n)), e.then(t, t));
  }
  function wv(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Mt === t &&
        (ft & n) === n &&
        (_t === 4 || (_t === 3 && (ft & 62914560) === ft && 300 > pe() - bs)
          ? (gt & 2) === 0 && Wa(t, 0)
          : (Jo |= n),
        ka === ft && (ka = 0)),
      ke(t);
  }
  function cm(t, e) {
    e === 0 && (e = af()), (t = ta(t, e)), t !== null && (vi(t, e), ke(t));
  }
  function qv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), cm(t, n);
  }
  function Yv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), cm(t, n);
  }
  function Gv(t, e) {
    return hu(t, e);
  }
  var Cs = null,
    $a = null,
    er = !1,
    zs = !1,
    nr = !1,
    Ln = 0;
  function ke(t) {
    t !== $a &&
      t.next === null &&
      ($a === null ? (Cs = $a = t) : ($a = $a.next = t)),
      (zs = !0),
      er || ((er = !0), Qv());
  }
  function $i(t, e) {
    if (!nr && zs) {
      nr = !0;
      do
        for (var n = !1, a = Cs; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = a.suspendedLanes,
                p = a.pingedLanes;
              (o = (1 << (31 - ge(42 | t) + 1)) - 1),
                (o &= s & ~(f & ~p)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), mm(a, o));
          } else
            (o = ft),
              (o = Nl(
                a,
                a === Mt ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (o & 3) === 0 || gi(a, o) || ((n = !0), mm(a, o));
          a = a.next;
        }
      while (n);
      nr = !1;
    }
  }
  function Xv() {
    fm();
  }
  function fm() {
    zs = er = !1;
    var t = 0;
    Ln !== 0 && t1() && (t = Ln);
    for (var e = pe(), n = null, a = Cs; a !== null; ) {
      var s = a.next,
        o = hm(a, e);
      o === 0
        ? ((a.next = null),
          n === null ? (Cs = s) : (n.next = s),
          s === null && ($a = n))
        : ((n = a), (t !== 0 || (o & 3) !== 0) && (zs = !0)),
        (a = s);
    }
    (Zt !== 0 && Zt !== 5) || $i(t), Ln !== 0 && (Ln = 0);
  }
  function hm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var f = 31 - ge(o),
        p = 1 << f,
        b = s[f];
      b === -1
        ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = yg(p, e))
        : b <= e && (t.expiredLanes |= p),
        (o &= ~p);
    }
    if (
      ((e = Mt),
      (n = ft),
      (n = Nl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (bt === 2 || bt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && du(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || gi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && du(a), yu(n))) {
        case 2:
        case 8:
          n = ef;
          break;
        case 32:
          n = zl;
          break;
        case 268435456:
          n = nf;
          break;
        default:
          n = zl;
      }
      return (
        (a = dm.bind(null, t)),
        (n = hu(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && du(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function dm(t, e) {
    if (Zt !== 0 && Zt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Ds() && t.callbackNode !== n) return null;
    var a = ft;
    return (
      (a = Nl(
        t,
        t === Mt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (kd(t, a, e),
          hm(t, pe()),
          t.callbackNode != null && t.callbackNode === n
            ? dm.bind(null, t)
            : null)
    );
  }
  function mm(t, e) {
    if (Ds()) return null;
    kd(t, e, !0);
  }
  function Qv() {
    n1(function () {
      (gt & 6) !== 0 ? hu(tf, Xv) : fm();
    });
  }
  function ar() {
    if (Ln === 0) {
      var t = La;
      t === 0 && ((t = Ol), (Ol <<= 1), (Ol & 261888) === 0 && (Ol = 256)),
        (Ln = t);
    }
    return Ln;
  }
  function pm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Bl("" + t);
  }
  function ym(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Zv(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = pm((s[ue] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[ue] || null)
          ? pm(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((o = e), (f = null)));
      var p = new ql("action", "action", null, a, s);
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ln !== 0) {
                  var b = f ? ym(s, f) : new FormData(s);
                  Ao(
                    n,
                    { pending: !0, data: b, method: s.method, action: o },
                    null,
                    b
                  );
                }
              } else
                typeof o == "function" &&
                  (p.preventDefault(),
                  (b = f ? ym(s, f) : new FormData(s)),
                  Ao(
                    n,
                    { pending: !0, data: b, method: s.method, action: o },
                    o,
                    b
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var ir = 0; ir < wu.length; ir++) {
    var lr = wu[ir],
      Kv = lr.toLowerCase(),
      Jv = lr[0].toUpperCase() + lr.slice(1);
    qe(Kv, "on" + Jv);
  }
  qe(Jf, "onAnimationEnd"),
    qe(kf, "onAnimationIteration"),
    qe(Ff, "onAnimationStart"),
    qe("dblclick", "onDoubleClick"),
    qe("focusin", "onFocus"),
    qe("focusout", "onBlur"),
    qe(rv, "onTransitionRun"),
    qe(cv, "onTransitionStart"),
    qe(fv, "onTransitionCancel"),
    qe(Wf, "onTransitionEnd"),
    Aa("onMouseEnter", ["mouseout", "mouseover"]),
    Aa("onMouseLeave", ["mouseout", "mouseover"]),
    Aa("onPointerEnter", ["pointerout", "pointerover"]),
    Aa("onPointerLeave", ["pointerout", "pointerover"]),
    Wn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Wn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Wn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Wn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Wn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ii =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    kv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ii)
    );
  function gm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f],
              b = p.instance,
              D = p.currentTarget;
            if (((p = p.listener), b !== o && s.isPropagationStopped()))
              break t;
            (o = p), (s.currentTarget = D);
            try {
              o(s);
            } catch (O) {
              Xl(O);
            }
            (s.currentTarget = null), (o = b);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((p = a[f]),
              (b = p.instance),
              (D = p.currentTarget),
              (p = p.listener),
              b !== o && s.isPropagationStopped())
            )
              break t;
            (o = p), (s.currentTarget = D);
            try {
              o(s);
            } catch (O) {
              Xl(O);
            }
            (s.currentTarget = null), (o = b);
          }
      }
    }
  }
  function rt(t, e) {
    var n = e[gu];
    n === void 0 && (n = e[gu] = new Set());
    var a = t + "__bubble";
    n.has(a) || (vm(e, t, 2, !1), n.add(a));
  }
  function sr(t, e, n) {
    var a = 0;
    e && (a |= 4), vm(n, t, a, e);
  }
  var Os = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(t) {
    if (!t[Os]) {
      (t[Os] = !0),
        ff.forEach(function (n) {
          n !== "selectionchange" && (kv.has(n) || sr(n, !1, t), sr(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Os] || ((e[Os] = !0), sr("selectionchange", !1, e));
    }
  }
  function vm(t, e, n, a) {
    switch (Jm(e)) {
      case 2:
        var s = x1;
        break;
      case 8:
        s = A1;
        break;
      default:
        s = xr;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !Du ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function or(t, e, n, a, s) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var p = a.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = ba(p)), f === null)) return;
            if (((b = f.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              a = o = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    Af(function () {
      var D = o,
        O = Eu(n),
        _ = [];
      t: {
        var C = Pf.get(t);
        if (C !== void 0) {
          var z = ql,
            K = t;
          switch (t) {
            case "keypress":
              if (Hl(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = Yg;
              break;
            case "focusin":
              (K = "focus"), (z = Ru);
              break;
            case "focusout":
              (K = "blur"), (z = Ru);
              break;
            case "beforeblur":
            case "afterblur":
              z = Ru;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Df;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Og;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Qg;
              break;
            case Jf:
            case kf:
            case Ff:
              z = Ng;
              break;
            case Wf:
              z = Kg;
              break;
            case "scroll":
            case "scrollend":
              z = Cg;
              break;
            case "wheel":
              z = kg;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = jg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = zf;
              break;
            case "toggle":
            case "beforetoggle":
              z = Wg;
          }
          var tt = (e & 4) !== 0,
            Et = !tt && (t === "scroll" || t === "scrollend"),
            E = tt ? (C !== null ? C + "Capture" : null) : C;
          tt = [];
          for (var T = D, M; T !== null; ) {
            var V = T;
            if (
              ((M = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                M === null ||
                E === null ||
                ((V = Ti(T, E)), V != null && tt.push(tl(T, V, M))),
              Et)
            )
              break;
            T = T.return;
          }
          0 < tt.length &&
            ((C = new z(C, K, null, n, O)),
            _.push({ event: C, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            C &&
              n !== Au &&
              (K = n.relatedTarget || n.fromElement) &&
              (ba(K) || K[Sa]))
          )
            break t;
          if (
            (z || C) &&
            ((C =
              O.window === O
                ? O
                : (C = O.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            z
              ? ((K = n.relatedTarget || n.toElement),
                (z = D),
                (K = K ? ba(K) : null),
                K !== null &&
                  ((Et = d(K)),
                  (tt = K.tag),
                  K !== Et || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (K = null))
              : ((z = null), (K = D)),
            z !== K)
          ) {
            if (
              ((tt = Df),
              (V = "onMouseLeave"),
              (E = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = zf),
                (V = "onPointerLeave"),
                (E = "onPointerEnter"),
                (T = "pointer")),
              (Et = z == null ? C : bi(z)),
              (M = K == null ? C : bi(K)),
              (C = new tt(V, T + "leave", z, n, O)),
              (C.target = Et),
              (C.relatedTarget = M),
              (V = null),
              ba(O) === D &&
                ((tt = new tt(E, T + "enter", K, n, O)),
                (tt.target = M),
                (tt.relatedTarget = Et),
                (V = tt)),
              (Et = V),
              z && K)
            )
              e: {
                for (tt = Fv, E = z, T = K, M = 0, V = E; V; V = tt(V)) M++;
                V = 0;
                for (var $ = T; $; $ = tt($)) V++;
                for (; 0 < M - V; ) (E = tt(E)), M--;
                for (; 0 < V - M; ) (T = tt(T)), V--;
                for (; M--; ) {
                  if (E === T || (T !== null && E === T.alternate)) {
                    tt = E;
                    break e;
                  }
                  (E = tt(E)), (T = tt(T));
                }
                tt = null;
              }
            else tt = null;
            z !== null && Sm(_, C, z, tt, !1),
              K !== null && Et !== null && Sm(_, Et, K, tt, !0);
          }
        }
        t: {
          if (
            ((C = D ? bi(D) : window),
            (z = C.nodeName && C.nodeName.toLowerCase()),
            z === "select" || (z === "input" && C.type === "file"))
          )
            var pt = Bf;
          else if (jf(C))
            if (Lf) pt = sv;
            else {
              pt = iv;
              var F = av;
            }
          else
            (z = C.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? D && xu(D.elementType) && (pt = Bf)
                : (pt = lv);
          if (pt && (pt = pt(t, D))) {
            Uf(_, pt, n, O);
            break t;
          }
          F && F(t, C, D),
            t === "focusout" &&
              D &&
              C.type === "number" &&
              D.memoizedProps.value != null &&
              Tu(C, "number", C.value);
        }
        switch (((F = D ? bi(D) : window), t)) {
          case "focusin":
            (jf(F) || F.contentEditable === "true") &&
              ((Oa = F), (Bu = D), (Oi = null));
            break;
          case "focusout":
            Oi = Bu = Oa = null;
            break;
          case "mousedown":
            Lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Lu = !1), Zf(_, n, O);
            break;
          case "selectionchange":
            if (ov) break;
          case "keydown":
          case "keyup":
            Zf(_, n, O);
        }
        var st;
        if (Nu)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          za
            ? Nf(t, n) && (ht = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (ht = "onCompositionStart");
        ht &&
          (Of &&
            n.locale !== "ko" &&
            (za || ht !== "onCompositionStart"
              ? ht === "onCompositionEnd" && za && (st = Ef())
              : ((Tn = O),
                (Cu = "value" in Tn ? Tn.value : Tn.textContent),
                (za = !0))),
          (F = Rs(D, ht)),
          0 < F.length &&
            ((ht = new Cf(ht, t, null, n, O)),
            _.push({ event: ht, listeners: F }),
            st
              ? (ht.data = st)
              : ((st = _f(n)), st !== null && (ht.data = st)))),
          (st = $g ? Ig(t, n) : tv(t, n)) &&
            ((ht = Rs(D, "onBeforeInput")),
            0 < ht.length &&
              ((F = new Cf("onBeforeInput", "beforeinput", null, n, O)),
              _.push({ event: F, listeners: ht }),
              (F.data = st))),
          Zv(_, t, D, n, O);
      }
      gm(_, e);
    });
  }
  function tl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Rs(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = Ti(t, n)),
          s != null && a.unshift(tl(t, s, o)),
          (s = Ti(t, e)),
          s != null && a.push(tl(t, s, o))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Fv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sm(t, e, n, a, s) {
    for (var o = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n,
        b = p.alternate,
        D = p.stateNode;
      if (((p = p.tag), b !== null && b === a)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        D === null ||
        ((b = D),
        s
          ? ((D = Ti(n, o)), D != null && f.unshift(tl(n, D, b)))
          : s || ((D = Ti(n, o)), D != null && f.push(tl(n, D, b)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Wv = /\r\n?/g,
    Pv = /\u0000|\uFFFD/g;
  function bm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Wv,
        `
`
      )
      .replace(Pv, "");
  }
  function Tm(t, e) {
    return (e = bm(e)), bm(t) === e;
  }
  function At(t, e, n, a, s, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Ma(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Ma(t, "" + a);
        break;
      case "className":
        jl(t, "class", a);
        break;
      case "tabIndex":
        jl(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jl(t, n, a);
        break;
      case "style":
        Tf(t, a, o);
        break;
      case "data":
        if (e !== "object") {
          jl(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = Bl("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && At(t, e, "name", s.name, s, null),
                At(t, e, "formEncType", s.formEncType, s, null),
                At(t, e, "formMethod", s.formMethod, s, null),
                At(t, e, "formTarget", s.formTarget, s, null))
              : (At(t, e, "encType", s.encType, s, null),
                At(t, e, "method", s.method, s, null),
                At(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = Bl("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
        break;
      case "onScroll":
        a != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && rt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Bl("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        rt("beforetoggle", t), rt("toggle", t), _l(t, "popover", a);
        break;
      case "xlinkActuate":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        $e(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        $e(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        _l(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Mg.get(n) || n), _l(t, n, a));
    }
  }
  function rr(t, e, n, a, s, o) {
    switch (n) {
      case "style":
        Tf(t, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ma(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Ma(t, "" + a);
        break;
      case "onScroll":
        a != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && rt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (o = t[ue] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, s),
              typeof a == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, s);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
              ? t.setAttribute(n, "")
              : _l(t, n, a);
          }
    }
  }
  function It(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        rt("error", t), rt("load", t);
        var a = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  At(t, e, o, f, n, null);
              }
          }
        s && At(t, e, "srcSet", n.srcSet, n, null),
          a && At(t, e, "src", n.src, n, null);
        return;
      case "input":
        rt("invalid", t);
        var p = (o = f = s = null),
          b = null,
          D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var O = n[a];
            if (O != null)
              switch (a) {
                case "name":
                  s = O;
                  break;
                case "type":
                  f = O;
                  break;
                case "checked":
                  b = O;
                  break;
                case "defaultChecked":
                  D = O;
                  break;
                case "value":
                  o = O;
                  break;
                case "defaultValue":
                  p = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(r(137, e));
                  break;
                default:
                  At(t, e, a, O, n, null);
              }
          }
        gf(t, o, p, b, D, f, s, !1);
        return;
      case "select":
        rt("invalid", t), (a = f = o = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((p = n[s]), p != null))
            switch (s) {
              case "value":
                o = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                a = p;
              default:
                At(t, e, s, p, n, null);
            }
        (e = o),
          (n = f),
          (t.multiple = !!a),
          e != null ? Ea(t, !!a, e, !1) : n != null && Ea(t, !!a, n, !0);
        return;
      case "textarea":
        rt("invalid", t), (o = s = a = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((p = n[f]), p != null))
            switch (f) {
              case "value":
                a = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                o = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                At(t, e, f, p, n, null);
            }
        Sf(t, a, s, o);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && ((a = n[b]), a != null))
            switch (b) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                At(t, e, b, a, n, null);
            }
        return;
      case "dialog":
        rt("beforetoggle", t), rt("toggle", t), rt("cancel", t), rt("close", t);
        break;
      case "iframe":
      case "object":
        rt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ii.length; a++) rt(Ii[a], t);
        break;
      case "image":
        rt("error", t), rt("load", t);
        break;
      case "details":
        rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        rt("error", t), rt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((a = n[D]), a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                At(t, e, D, a, n, null);
            }
        return;
      default:
        if (xu(e)) {
          for (O in n)
            n.hasOwnProperty(O) &&
              ((a = n[O]), a !== void 0 && rr(t, e, O, a, n, void 0));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((a = n[p]), a != null && At(t, e, p, a, n, null));
  }
  function $v(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          f = null,
          p = null,
          b = null,
          D = null,
          O = null;
        for (z in n) {
          var _ = n[z];
          if (n.hasOwnProperty(z) && _ != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = _;
              default:
                a.hasOwnProperty(z) || At(t, e, z, null, a, _);
            }
        }
        for (var C in a) {
          var z = a[C];
          if (((_ = n[C]), a.hasOwnProperty(C) && (z != null || _ != null)))
            switch (C) {
              case "type":
                o = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                D = z;
                break;
              case "defaultChecked":
                O = z;
                break;
              case "value":
                f = z;
                break;
              case "defaultValue":
                p = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== _ && At(t, e, C, z, a, _);
            }
        }
        bu(t, f, p, b, D, O, o, s);
        return;
      case "select":
        z = f = p = C = null;
        for (o in n)
          if (((b = n[o]), n.hasOwnProperty(o) && b != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                z = b;
              default:
                a.hasOwnProperty(o) || At(t, e, o, null, a, b);
            }
        for (s in a)
          if (
            ((o = a[s]),
            (b = n[s]),
            a.hasOwnProperty(s) && (o != null || b != null))
          )
            switch (s) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                p = o;
                break;
              case "multiple":
                f = o;
              default:
                o !== b && At(t, e, s, o, a, b);
            }
        (e = p),
          (n = f),
          (a = z),
          C != null
            ? Ea(t, !!n, C, !1)
            : !!a != !!n &&
              (e != null ? Ea(t, !!n, e, !0) : Ea(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = C = null;
        for (p in n)
          if (
            ((s = n[p]),
            n.hasOwnProperty(p) && s != null && !a.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                At(t, e, p, null, a, s);
            }
        for (f in a)
          if (
            ((s = a[f]),
            (o = n[f]),
            a.hasOwnProperty(f) && (s != null || o != null))
          )
            switch (f) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== o && At(t, e, f, s, a, o);
            }
        vf(t, C, z);
        return;
      case "option":
        for (var K in n)
          if (
            ((C = n[K]),
            n.hasOwnProperty(K) && C != null && !a.hasOwnProperty(K))
          )
            switch (K) {
              case "selected":
                t.selected = !1;
                break;
              default:
                At(t, e, K, null, a, C);
            }
        for (b in a)
          if (
            ((C = a[b]),
            (z = n[b]),
            a.hasOwnProperty(b) && C !== z && (C != null || z != null))
          )
            switch (b) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                At(t, e, b, C, a, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in n)
          (C = n[tt]),
            n.hasOwnProperty(tt) &&
              C != null &&
              !a.hasOwnProperty(tt) &&
              At(t, e, tt, null, a, C);
        for (D in a)
          if (
            ((C = a[D]),
            (z = n[D]),
            a.hasOwnProperty(D) && C !== z && (C != null || z != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(r(137, e));
                break;
              default:
                At(t, e, D, C, a, z);
            }
        return;
      default:
        if (xu(e)) {
          for (var Et in n)
            (C = n[Et]),
              n.hasOwnProperty(Et) &&
                C !== void 0 &&
                !a.hasOwnProperty(Et) &&
                rr(t, e, Et, void 0, a, C);
          for (O in a)
            (C = a[O]),
              (z = n[O]),
              !a.hasOwnProperty(O) ||
                C === z ||
                (C === void 0 && z === void 0) ||
                rr(t, e, O, C, a, z);
          return;
        }
    }
    for (var E in n)
      (C = n[E]),
        n.hasOwnProperty(E) &&
          C != null &&
          !a.hasOwnProperty(E) &&
          At(t, e, E, null, a, C);
    for (_ in a)
      (C = a[_]),
        (z = n[_]),
        !a.hasOwnProperty(_) ||
          C === z ||
          (C == null && z == null) ||
          At(t, e, _, C, a, z);
  }
  function xm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Iv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          o = s.transferSize,
          f = s.initiatorType,
          p = s.duration;
        if (o && p && xm(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var b = n[a],
              D = b.startTime;
            if (D > p) break;
            var O = b.transferSize,
              _ = b.initiatorType;
            O &&
              xm(_) &&
              ((b = b.responseEnd), (f += O * (b < p ? 1 : (p - D) / (b - D))));
          }
          if ((--a, (e += (8 * (o + f)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var cr = null,
    fr = null;
  function Vs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Am(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Em(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function hr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var dr = null;
  function t1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === dr
        ? !1
        : ((dr = t), !0)
      : ((dr = null), !1);
  }
  var Mm = typeof setTimeout == "function" ? setTimeout : void 0,
    e1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Dm = typeof Promise == "function" ? Promise : void 0,
    n1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Dm < "u"
        ? function (t) {
            return Dm.resolve(null).then(t).catch(a1);
          }
        : Mm;
  function a1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function Cm(t, e) {
    var n = e,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            t.removeChild(s), ni(e);
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") el(t.ownerDocument.documentElement);
        else if (n === "head") {
          (n = t.ownerDocument.head), el(n);
          for (var o = n.firstChild; o; ) {
            var f = o.nextSibling,
              p = o.nodeName;
            o[Si] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = f);
          }
        } else n === "body" && el(t.ownerDocument.body);
      n = s;
    } while (n);
    ni(e);
  }
  function zm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function mr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mr(n), vu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function i1(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Si])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = je(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function l1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Om(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function yr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function s1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var gr = null;
  function Rm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return je(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Vm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Nm(t, e, n) {
    switch (((e = Vs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function el(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    vu(t);
  }
  var Ue = new Map(),
    _m = new Set();
  function Ns(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var yn = L.d;
  L.d = { f: u1, r: o1, D: r1, C: c1, L: f1, m: h1, X: m1, S: d1, M: p1 };
  function u1() {
    var t = yn.f(),
      e = As();
    return t || e;
  }
  function o1(t) {
    var e = Ta(t);
    e !== null && e.tag === 5 && e.type === "form" ? Wh(e) : yn.r(t);
  }
  var Ia = typeof document > "u" ? null : document;
  function jm(t, e, n) {
    var a = Ia;
    if (a && typeof e == "string" && e) {
      var s = Ce(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        _m.has(s) ||
          (_m.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")),
            It(e, "link", t),
            Kt(e),
            a.head.appendChild(e)));
    }
  }
  function r1(t) {
    yn.D(t), jm("dns-prefetch", t, null);
  }
  function c1(t, e) {
    yn.C(t, e), jm("preconnect", t, e);
  }
  function f1(t, e, n) {
    yn.L(t, e, n);
    var a = Ia;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Ce(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Ce(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Ce(n.imageSizes) + '"]'))
        : (s += '[href="' + Ce(t) + '"]');
      var o = s;
      switch (e) {
        case "style":
          o = ti(t);
          break;
        case "script":
          o = ei(t);
      }
      Ue.has(o) ||
        ((t = S(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ue.set(o, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(nl(o))) ||
          (e === "script" && a.querySelector(al(o))) ||
          ((e = a.createElement("link")),
          It(e, "link", t),
          Kt(e),
          a.head.appendChild(e)));
    }
  }
  function h1(t, e) {
    yn.m(t, e);
    var n = Ia;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ce(a) + '"][href="' + Ce(t) + '"]',
        o = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ei(t);
      }
      if (
        !Ue.has(o) &&
        ((t = S({ rel: "modulepreload", href: t }, e)),
        Ue.set(o, t),
        n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(al(o))) return;
        }
        (a = n.createElement("link")),
          It(a, "link", t),
          Kt(a),
          n.head.appendChild(a);
      }
    }
  }
  function d1(t, e, n) {
    yn.S(t, e, n);
    var a = Ia;
    if (a && t) {
      var s = xa(a).hoistableStyles,
        o = ti(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var p = { loading: 0, preload: null };
        if ((f = a.querySelector(nl(o)))) p.loading = 5;
        else {
          (t = S({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ue.get(o)) && vr(t, n);
          var b = (f = a.createElement("link"));
          Kt(b),
            It(b, "link", t),
            (b._p = new Promise(function (D, O) {
              (b.onload = D), (b.onerror = O);
            })),
            b.addEventListener("load", function () {
              p.loading |= 1;
            }),
            b.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            _s(f, e, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: p }),
          s.set(o, f);
      }
    }
  }
  function m1(t, e) {
    yn.X(t, e);
    var n = Ia;
    if (n && t) {
      var a = xa(n).hoistableScripts,
        s = ei(t),
        o = a.get(s);
      o ||
        ((o = n.querySelector(al(s))),
        o ||
          ((t = S({ src: t, async: !0 }, e)),
          (e = Ue.get(s)) && Sr(t, e),
          (o = n.createElement("script")),
          Kt(o),
          It(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(s, o));
    }
  }
  function p1(t, e) {
    yn.M(t, e);
    var n = Ia;
    if (n && t) {
      var a = xa(n).hoistableScripts,
        s = ei(t),
        o = a.get(s);
      o ||
        ((o = n.querySelector(al(s))),
        o ||
          ((t = S({ src: t, async: !0, type: "module" }, e)),
          (e = Ue.get(s)) && Sr(t, e),
          (o = n.createElement("script")),
          Kt(o),
          It(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(s, o));
    }
  }
  function Um(t, e, n, a) {
    var s = (s = ut.current) ? Ns(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ti(n.href)),
            (n = xa(s).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ti(n.href);
          var o = xa(s).hoistableStyles,
            f = o.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, f),
              (o = s.querySelector(nl(t))) &&
                !o._p &&
                ((f.instance = o), (f.state.loading = 5)),
              Ue.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ue.set(t, n),
                o || y1(s, t, n, f.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ei(n)),
              (n = xa(s).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function ti(t) {
    return 'href="' + Ce(t) + '"';
  }
  function nl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Bm(t) {
    return S({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function y1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        It(e, "link", n),
        Kt(e),
        t.head.appendChild(e));
  }
  function ei(t) {
    return '[src="' + Ce(t) + '"]';
  }
  function al(t) {
    return "script[async]" + t;
  }
  function Lm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ce(n.href) + '"]');
          if (a) return (e.instance = a), Kt(a), a;
          var s = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Kt(a),
            It(a, "style", s),
            _s(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = ti(n.href);
          var o = t.querySelector(nl(s));
          if (o) return (e.state.loading |= 4), (e.instance = o), Kt(o), o;
          (a = Bm(n)),
            (s = Ue.get(s)) && vr(a, s),
            (o = (t.ownerDocument || t).createElement("link")),
            Kt(o);
          var f = o;
          return (
            (f._p = new Promise(function (p, b) {
              (f.onload = p), (f.onerror = b);
            })),
            It(o, "link", a),
            (e.state.loading |= 4),
            _s(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = ei(n.src)),
            (s = t.querySelector(al(o)))
              ? ((e.instance = s), Kt(s), s)
              : ((a = n),
                (s = Ue.get(o)) && ((a = S({}, n)), Sr(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Kt(s),
                It(s, "link", a),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), _s(a, n.precedence, t));
    return e.instance;
  }
  function _s(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = a.length ? a[a.length - 1] : null,
        o = s,
        f = 0;
      f < a.length;
      f++
    ) {
      var p = a[f];
      if (p.dataset.precedence === e) o = p;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function vr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Sr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var js = null;
  function Hm(t, e, n) {
    if (js === null) {
      var a = new Map(),
        s = (js = new Map());
      s.set(n, a);
    } else (s = js), (a = s.get(n)), a || ((a = new Map()), s.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[Si] ||
          o[Ft] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(o) : a.set(f, [o]);
      }
    }
    return a;
  }
  function wm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function g1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function qm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function v1(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = ti(a.href),
          o = e.querySelector(nl(s));
        if (o) {
          (e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Us.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = o),
            Kt(o);
          return;
        }
        (o = e.ownerDocument || e),
          (a = Bm(a)),
          (s = Ue.get(s)) && vr(a, s),
          (o = o.createElement("link")),
          Kt(o);
        var f = o;
        (f._p = new Promise(function (p, b) {
          (f.onload = p), (f.onerror = b);
        })),
          It(o, "link", a),
          (n.instance = o);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Us.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  var br = 0;
  function S1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Ls(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Ls(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, 6e4 + e);
            0 < t.imgBytes && br === 0 && (br = 62500 * Iv());
            var s = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Ls(t, t.stylesheets), t.unsuspend))
              ) {
                var o = t.unsuspend;
                (t.unsuspend = null), o();
              }
            }, (t.imgBytes > br ? 50 : 800) + e);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Us() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ls(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Bs = null;
  function Ls(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Bs = new Map()),
        e.forEach(b1, t),
        (Bs = null),
        Us.call(t));
  }
  function b1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Bs.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), Bs.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (o = n.get(f) || a),
        o === a && n.set(null, s),
        n.set(f, s),
        this.count++,
        (a = Us.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var il = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function T1(t, e, n, a, s, o, f, p, b) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = mu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mu(0)),
      (this.hiddenUpdates = mu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Ym(t, e, n, a, s, o, f, p, b, D, O, _) {
    return (
      (t = new T1(t, e, n, f, b, D, O, _, p)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Se(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = $u()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: e }),
      no(o),
      t
    );
  }
  function Gm(t) {
    return t ? ((t = Na), t) : Na;
  }
  function Xm(t, e, n, a, s, o) {
    (s = Gm(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = Cn(e)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = zn(t, a, e)),
      n !== null && (de(n, t, e), Bi(n, t, e));
  }
  function Qm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Tr(t, e) {
    Qm(t, e), (t = t.alternate) && Qm(t, e);
  }
  function Zm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ta(t, 67108864);
      e !== null && de(e, t, 67108864), Tr(t, 67108864);
    }
  }
  function Km(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ee();
      e = pu(e);
      var n = ta(t, e);
      n !== null && de(n, t, e), Tr(t, e);
    }
  }
  var Hs = !0;
  function x1(t, e, n, a) {
    var s = R.T;
    R.T = null;
    var o = L.p;
    try {
      (L.p = 2), xr(t, e, n, a);
    } finally {
      (L.p = o), (R.T = s);
    }
  }
  function A1(t, e, n, a) {
    var s = R.T;
    R.T = null;
    var o = L.p;
    try {
      (L.p = 8), xr(t, e, n, a);
    } finally {
      (L.p = o), (R.T = s);
    }
  }
  function xr(t, e, n, a) {
    if (Hs) {
      var s = Ar(a);
      if (s === null) or(t, e, a, ws, n), km(t, a);
      else if (M1(s, t, e, n, a)) a.stopPropagation();
      else if ((km(t, a), e & 4 && -1 < E1.indexOf(t))) {
        for (; s !== null; ) {
          var o = Ta(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var f = Fn(o.pendingLanes);
                  if (f !== 0) {
                    var p = o;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var b = 1 << (31 - ge(f));
                      (p.entanglements[1] |= b), (f &= ~b);
                    }
                    ke(o), (gt & 6) === 0 && ((Ts = pe() + 500), $i(0));
                  }
                }
                break;
              case 31:
              case 13:
                (p = ta(o, 2)), p !== null && de(p, o, 2), As(), Tr(o, 2);
            }
          if (((o = Ar(a)), o === null && or(t, e, a, ws, n), o === s)) break;
          s = o;
        }
        s !== null && a.stopPropagation();
      } else or(t, e, a, null, n);
    }
  }
  function Ar(t) {
    return (t = Eu(t)), Er(t);
  }
  var ws = null;
  function Er(t) {
    if (((ws = null), (t = ba(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (ws = t), null;
  }
  function Jm(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (rg()) {
          case tf:
            return 2;
          case ef:
            return 8;
          case zl:
          case cg:
            return 32;
          case nf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mr = !1,
    wn = null,
    qn = null,
    Yn = null,
    ll = new Map(),
    sl = new Map(),
    Gn = [],
    E1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function km(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Yn = null;
        break;
      case "pointerover":
      case "pointerout":
        ll.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sl.delete(e.pointerId);
    }
  }
  function ul(t, e, n, a, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [s],
        }),
        e !== null && ((e = Ta(e)), e !== null && Zm(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function M1(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return (wn = ul(wn, t, e, n, a, s)), !0;
      case "dragenter":
        return (qn = ul(qn, t, e, n, a, s)), !0;
      case "mouseover":
        return (Yn = ul(Yn, t, e, n, a, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return ll.set(o, ul(ll.get(o) || null, t, e, n, a, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), sl.set(o, ul(sl.get(o) || null, t, e, n, a, s)), !0
        );
    }
    return !1;
  }
  function Fm(t) {
    var e = ba(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              rf(t.priority, function () {
                Km(n);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = y(n)), e !== null)) {
            (t.blockedOn = e),
              rf(t.priority, function () {
                Km(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ar(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Au = a), n.target.dispatchEvent(a), (Au = null);
      } else return (e = Ta(n)), e !== null && Zm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Wm(t, e, n) {
    qs(t) && n.delete(e);
  }
  function D1() {
    (Mr = !1),
      wn !== null && qs(wn) && (wn = null),
      qn !== null && qs(qn) && (qn = null),
      Yn !== null && qs(Yn) && (Yn = null),
      ll.forEach(Wm),
      sl.forEach(Wm);
  }
  function Ys(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Mr ||
        ((Mr = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, D1)));
  }
  var Gs = null;
  function Pm(t) {
    Gs !== t &&
      ((Gs = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Gs === t && (Gs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (Er(a || n) === null) continue;
            break;
          }
          var o = Ta(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ao(o, { pending: !0, data: s, method: n.method, action: a }, a, s));
        }
      }));
  }
  function ni(t) {
    function e(b) {
      return Ys(b, t);
    }
    wn !== null && Ys(wn, t),
      qn !== null && Ys(qn, t),
      Yn !== null && Ys(Yn, t),
      ll.forEach(e),
      sl.forEach(e);
    for (var n = 0; n < Gn.length; n++) {
      var a = Gn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Gn.length && ((n = Gn[0]), n.blockedOn === null); )
      Fm(n), n.blockedOn === null && Gn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          o = n[a + 1],
          f = s[ue] || null;
        if (typeof o == "function") f || Pm(n);
        else if (f) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (f = o[ue] || null))) p = f.formAction;
            else if (Er(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? (n[a + 1] = p) : (n.splice(a, 3), (a -= 3)),
            Pm(n);
        }
      }
  }
  function $m() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      s !== null && (s(), (s = null)), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null));
        }
      );
    }
  }
  function Dr(t) {
    this._internalRoot = t;
  }
  (Xs.prototype.render = Dr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        a = Ee();
      Xm(n, a, t, e, null, null);
    }),
    (Xs.prototype.unmount = Dr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Xm(t.current, 2, null, t, null, null), As(), (e[Sa] = null);
        }
      });
  function Xs(t) {
    this._internalRoot = t;
  }
  Xs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = of();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Gn.length && e !== 0 && e < Gn[n].priority; n++);
      Gn.splice(n, 0, t), n === 0 && Fm(t);
    }
  };
  var Im = l.version;
  if (Im !== "19.2.0") throw Error(r(527, Im, "19.2.0"));
  L.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = m(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var C1 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber)
      try {
        (yi = Qs.inject(C1)), (ye = Qs);
      } catch {}
  }
  return (
    (rl.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        a = "",
        s = sd,
        o = ud,
        f = od;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = Ym(t, 1, !1, null, null, n, a, null, s, o, f, $m)),
        (t[Sa] = e.current),
        ur(t),
        new Dr(e)
      );
    }),
    (rl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var a = !1,
        s = "",
        o = sd,
        f = ud,
        p = od,
        b = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.formState !== void 0 && (b = n.formState)),
        (e = Ym(t, 1, !0, e, n ?? null, a, s, b, o, f, p, $m)),
        (e.context = Gm(null)),
        (n = e.current),
        (a = Ee()),
        (a = pu(a)),
        (s = Cn(a)),
        (s.callback = null),
        zn(n, s, a),
        (n = a),
        (e.current.lanes = n),
        vi(e, n),
        ke(e),
        (t[Sa] = e.current),
        ur(t),
        new Xs(e)
      );
    }),
    (rl.version = "19.2.0"),
    rl
  );
}
var rp;
function L1() {
  if (rp) return Or.exports;
  rp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (Or.exports = B1()), Or.exports;
}
var H1 = L1();
const vc = Q.createContext({});
function Sc(i) {
  const l = Q.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const bc = typeof window < "u",
  Cy = bc ? Q.useLayoutEffect : Q.useEffect,
  iu = Q.createContext(null);
function Tc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function xc(i, l) {
  const u = i.indexOf(l);
  u > -1 && i.splice(u, 1);
}
const gn = (i, l, u) => (u > l ? l : u < i ? i : u);
let Ac = () => {};
const vn = {},
  zy = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function Oy(i) {
  return typeof i == "object" && i !== null;
}
const Ry = (i) => /^0[^.\s]+$/u.test(i);
function Ec(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const we = (i) => i,
  w1 = (i, l) => (u) => l(i(u)),
  Al = (...i) => i.reduce(w1),
  gl = (i, l, u) => {
    const r = l - i;
    return r === 0 ? 1 : (u - i) / r;
  };
class Mc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Tc(this.subscriptions, l), () => xc(this.subscriptions, l);
  }
  notify(l, u, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Fe = (i) => i * 1e3,
  He = (i) => i / 1e3;
function Vy(i, l) {
  return l ? i * (1e3 / l) : 0;
}
const Ny = (i, l, u) =>
    (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i,
  q1 = 1e-7,
  Y1 = 12;
function G1(i, l, u, r, c) {
  let d,
    h,
    y = 0;
  do (h = l + (u - l) / 2), (d = Ny(h, r, c) - i), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > q1 && ++y < Y1);
  return h;
}
function El(i, l, u, r) {
  if (i === l && u === r) return we;
  const c = (d) => G1(d, 0, 1, i, u);
  return (d) => (d === 0 || d === 1 ? d : Ny(c(d), l, r));
}
const _y = (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2,
  jy = (i) => (l) => 1 - i(1 - l),
  Uy = El(0.33, 1.53, 0.69, 0.99),
  Dc = jy(Uy),
  By = _y(Dc),
  Ly = (i) =>
    (i *= 2) < 1 ? 0.5 * Dc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  Cc = (i) => 1 - Math.sin(Math.acos(i)),
  Hy = jy(Cc),
  wy = _y(Cc),
  X1 = El(0.42, 0, 1, 1),
  Q1 = El(0, 0, 0.58, 1),
  qy = El(0.42, 0, 0.58, 1),
  Z1 = (i) => Array.isArray(i) && typeof i[0] != "number",
  Yy = (i) => Array.isArray(i) && typeof i[0] == "number",
  K1 = {
    linear: we,
    easeIn: X1,
    easeInOut: qy,
    easeOut: Q1,
    circIn: Cc,
    circInOut: wy,
    circOut: Hy,
    backIn: Dc,
    backInOut: By,
    backOut: Uy,
    anticipate: Ly,
  },
  J1 = (i) => typeof i == "string",
  cp = (i) => {
    if (Yy(i)) {
      Ac(i.length === 4);
      const [l, u, r, c] = i;
      return El(l, u, r, c);
    } else if (J1(i)) return K1[i];
    return i;
  },
  Zs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function k1(i, l) {
  let u = new Set(),
    r = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let y = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    h.has(v) && (m.schedule(v), i()), v(y);
  }
  const m = {
    schedule: (v, S = !1, A = !1) => {
      const B = A && c ? u : r;
      return S && h.add(v), B.has(v) || B.add(v), v;
    },
    cancel: (v) => {
      r.delete(v), h.delete(v);
    },
    process: (v) => {
      if (((y = v), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, r] = [r, u]),
        u.forEach(g),
        u.clear(),
        (c = !1),
        d && ((d = !1), m.process(v));
    },
  };
  return m;
}
const F1 = 40;
function Gy(i, l) {
  let u = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = Zs.reduce((q, et) => ((q[et] = k1(d)), q), {}),
    {
      setup: y,
      read: g,
      resolveKeyframes: m,
      preUpdate: v,
      update: S,
      preRender: A,
      render: N,
      postRender: B,
    } = h,
    H = () => {
      const q = vn.useManualTiming ? c.timestamp : performance.now();
      (u = !1),
        vn.useManualTiming ||
          (c.delta = r ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, F1), 1)),
        (c.timestamp = q),
        (c.isProcessing = !0),
        y.process(c),
        g.process(c),
        m.process(c),
        v.process(c),
        S.process(c),
        A.process(c),
        N.process(c),
        B.process(c),
        (c.isProcessing = !1),
        u && l && ((r = !1), i(H));
    },
    X = () => {
      (u = !0), (r = !0), c.isProcessing || i(H);
    };
  return {
    schedule: Zs.reduce((q, et) => {
      const W = h[et];
      return (
        (q[et] = (I, G = !1, P = !1) => (u || X(), W.schedule(I, G, P))), q
      );
    }, {}),
    cancel: (q) => {
      for (let et = 0; et < Zs.length; et++) h[Zs[et]].cancel(q);
    },
    state: c,
    steps: h,
  };
}
const {
  schedule: Ot,
  cancel: Zn,
  state: te,
  steps: _r,
} = Gy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : we, !0);
let Fs;
function W1() {
  Fs = void 0;
}
const me = {
    now: () => (
      Fs === void 0 &&
        me.set(
          te.isProcessing || vn.useManualTiming
            ? te.timestamp
            : performance.now()
        ),
      Fs
    ),
    set: (i) => {
      (Fs = i), queueMicrotask(W1);
    },
  },
  Xy = (i) => (l) => typeof l == "string" && l.startsWith(i),
  zc = Xy("--"),
  P1 = Xy("var(--"),
  Oc = (i) => (P1(i) ? $1.test(i.split("/*")[0].trim()) : !1),
  $1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  hi = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  vl = { ...hi, transform: (i) => gn(0, 1, i) },
  Ks = { ...hi, default: 1 },
  hl = (i) => Math.round(i * 1e5) / 1e5,
  Rc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function I1(i) {
  return i == null;
}
const tS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Vc = (i, l) => (u) =>
    !!(
      (typeof u == "string" && tS.test(u) && u.startsWith(i)) ||
      (l && !I1(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  Qy = (i, l, u) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, h, y] = r.match(Rc);
    return {
      [i]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: y !== void 0 ? parseFloat(y) : 1,
    };
  },
  eS = (i) => gn(0, 255, i),
  jr = { ...hi, transform: (i) => Math.round(eS(i)) },
  pa = {
    test: Vc("rgb", "red"),
    parse: Qy("red", "green", "blue"),
    transform: ({ red: i, green: l, blue: u, alpha: r = 1 }) =>
      "rgba(" +
      jr.transform(i) +
      ", " +
      jr.transform(l) +
      ", " +
      jr.transform(u) +
      ", " +
      hl(vl.transform(r)) +
      ")",
  };
function nS(i) {
  let l = "",
    u = "",
    r = "",
    c = "";
  return (
    i.length > 5
      ? ((l = i.substring(1, 3)),
        (u = i.substring(3, 5)),
        (r = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((l = i.substring(1, 2)),
        (u = i.substring(2, 3)),
        (r = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (l += l),
        (u += u),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Wr = { test: Vc("#"), parse: nS, transform: pa.transform },
  Ml = (i) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${i}`,
  }),
  Qn = Ml("deg"),
  We = Ml("%"),
  nt = Ml("px"),
  aS = Ml("vh"),
  iS = Ml("vw"),
  fp = {
    ...We,
    parse: (i) => We.parse(i) / 100,
    transform: (i) => We.transform(i * 100),
  },
  ii = {
    test: Vc("hsl", "hue"),
    parse: Qy("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: l, lightness: u, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      We.transform(hl(l)) +
      ", " +
      We.transform(hl(u)) +
      ", " +
      hl(vl.transform(r)) +
      ")",
  },
  Xt = {
    test: (i) => pa.test(i) || Wr.test(i) || ii.test(i),
    parse: (i) =>
      pa.test(i) ? pa.parse(i) : ii.test(i) ? ii.parse(i) : Wr.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
        ? pa.transform(i)
        : ii.transform(i),
    getAnimatableNone: (i) => {
      const l = Xt.parse(i);
      return (l.alpha = 0), Xt.transform(l);
    },
  },
  lS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function sS(i) {
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (i.match(Rc)?.length || 0) + (i.match(lS)?.length || 0) > 0
  );
}
const Zy = "number",
  Ky = "color",
  uS = "var",
  oS = "var(",
  hp = "${}",
  rS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Sl(i) {
  const l = i.toString(),
    u = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const y = l
    .replace(
      rS,
      (g) => (
        Xt.test(g)
          ? (r.color.push(d), c.push(Ky), u.push(Xt.parse(g)))
          : g.startsWith(oS)
          ? (r.var.push(d), c.push(uS), u.push(g))
          : (r.number.push(d), c.push(Zy), u.push(parseFloat(g))),
        ++d,
        hp
      )
    )
    .split(hp);
  return { values: u, split: y, indexes: r, types: c };
}
function Jy(i) {
  return Sl(i).values;
}
function ky(i) {
  const { split: l, types: u } = Sl(i),
    r = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < r; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const y = u[h];
        y === Zy
          ? (d += hl(c[h]))
          : y === Ky
          ? (d += Xt.transform(c[h]))
          : (d += c[h]);
      }
    return d;
  };
}
const cS = (i) =>
  typeof i == "number" ? 0 : Xt.test(i) ? Xt.getAnimatableNone(i) : i;
function fS(i) {
  const l = Jy(i);
  return ky(i)(l.map(cS));
}
const Kn = {
  test: sS,
  parse: Jy,
  createTransformer: ky,
  getAnimatableNone: fS,
};
function Ur(i, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? i + (l - i) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? i + (l - i) * (2 / 3 - u) * 6
      : i
  );
}
function hS({ hue: i, saturation: l, lightness: u, alpha: r }) {
  (i /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const y = u < 0.5 ? u * (1 + l) : u + l - u * l,
      g = 2 * u - y;
    (c = Ur(g, y, i + 1 / 3)), (d = Ur(g, y, i)), (h = Ur(g, y, i - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r,
  };
}
function Is(i, l) {
  return (u) => (u > 0 ? l : i);
}
const Rt = (i, l, u) => i + (l - i) * u,
  Br = (i, l, u) => {
    const r = i * i,
      c = u * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  dS = [Wr, pa, ii],
  mS = (i) => dS.find((l) => l.test(i));
function dp(i) {
  const l = mS(i);
  if (!l) return !1;
  let u = l.parse(i);
  return l === ii && (u = hS(u)), u;
}
const mp = (i, l) => {
    const u = dp(i),
      r = dp(l);
    if (!u || !r) return Is(i, l);
    const c = { ...u };
    return (d) => (
      (c.red = Br(u.red, r.red, d)),
      (c.green = Br(u.green, r.green, d)),
      (c.blue = Br(u.blue, r.blue, d)),
      (c.alpha = Rt(u.alpha, r.alpha, d)),
      pa.transform(c)
    );
  },
  Pr = new Set(["none", "hidden"]);
function pS(i, l) {
  return Pr.has(i) ? (u) => (u <= 0 ? i : l) : (u) => (u >= 1 ? l : i);
}
function yS(i, l) {
  return (u) => Rt(i, l, u);
}
function Nc(i) {
  return typeof i == "number"
    ? yS
    : typeof i == "string"
    ? Oc(i)
      ? Is
      : Xt.test(i)
      ? mp
      : SS
    : Array.isArray(i)
    ? Fy
    : typeof i == "object"
    ? Xt.test(i)
      ? mp
      : gS
    : Is;
}
function Fy(i, l) {
  const u = [...i],
    r = u.length,
    c = i.map((d, h) => Nc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++) u[h] = c[h](d);
    return u;
  };
}
function gS(i, l) {
  const u = { ...i, ...l },
    r = {};
  for (const c in u)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = Nc(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in r) u[d] = r[d](c);
    return u;
  };
}
function vS(i, l) {
  const u = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      h = i.indexes[d][r[d]],
      y = i.values[h] ?? 0;
    (u[c] = y), r[d]++;
  }
  return u;
}
const SS = (i, l) => {
  const u = Kn.createTransformer(l),
    r = Sl(i),
    c = Sl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (Pr.has(i) && !c.values.length) || (Pr.has(l) && !r.values.length)
      ? pS(i, l)
      : Al(Fy(vS(r, c), c.values), u)
    : Is(i, l);
};
function Wy(i, l, u) {
  return typeof i == "number" && typeof l == "number" && typeof u == "number"
    ? Rt(i, l, u)
    : Nc(i)(i, l);
}
const bS = (i) => {
    const l = ({ timestamp: u }) => i(u);
    return {
      start: (u = !0) => Ot.update(l, u),
      stop: () => Zn(l),
      now: () => (te.isProcessing ? te.timestamp : me.now()),
    };
  },
  Py = (i, l, u = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++)
      r += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  tu = 2e4;
function _c(i) {
  let l = 0;
  const u = 50;
  let r = i.next(l);
  for (; !r.done && l < tu; ) (l += u), (r = i.next(l));
  return l >= tu ? 1 / 0 : l;
}
function TS(i, l = 100, u) {
  const r = u({ ...i, keyframes: [0, l] }),
    c = Math.min(_c(r), tu);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: He(c),
  };
}
const xS = 5;
function $y(i, l, u) {
  const r = Math.max(l - xS, 0);
  return Vy(u - i(r), l - r);
}
const jt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Lr = 0.001;
function AS({
  duration: i = jt.duration,
  bounce: l = jt.bounce,
  velocity: u = jt.velocity,
  mass: r = jt.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = gn(jt.minDamping, jt.maxDamping, h)),
    (i = gn(jt.minDuration, jt.maxDuration, He(i))),
    h < 1
      ? ((c = (m) => {
          const v = m * h,
            S = v * i,
            A = v - u,
            N = $r(m, h),
            B = Math.exp(-S);
          return Lr - (A / N) * B;
        }),
        (d = (m) => {
          const S = m * h * i,
            A = S * u + u,
            N = Math.pow(h, 2) * Math.pow(m, 2) * i,
            B = Math.exp(-S),
            H = $r(Math.pow(m, 2), h);
          return ((-c(m) + Lr > 0 ? -1 : 1) * ((A - N) * B)) / H;
        }))
      : ((c = (m) => {
          const v = Math.exp(-m * i),
            S = (m - u) * i + 1;
          return -Lr + v * S;
        }),
        (d = (m) => {
          const v = Math.exp(-m * i),
            S = (u - m) * (i * i);
          return v * S;
        }));
  const y = 5 / i,
    g = MS(c, d, y);
  if (((i = Fe(i)), isNaN(g)))
    return { stiffness: jt.stiffness, damping: jt.damping, duration: i };
  {
    const m = Math.pow(g, 2) * r;
    return { stiffness: m, damping: h * 2 * Math.sqrt(r * m), duration: i };
  }
}
const ES = 12;
function MS(i, l, u) {
  let r = u;
  for (let c = 1; c < ES; c++) r = r - i(r) / l(r);
  return r;
}
function $r(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const DS = ["duration", "bounce"],
  CS = ["stiffness", "damping", "mass"];
function pp(i, l) {
  return l.some((u) => i[u] !== void 0);
}
function zS(i) {
  let l = {
    velocity: jt.velocity,
    stiffness: jt.stiffness,
    damping: jt.damping,
    mass: jt.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!pp(i, CS) && pp(i, DS))
    if (i.visualDuration) {
      const u = i.visualDuration,
        r = (2 * Math.PI) / (u * 1.2),
        c = r * r,
        d = 2 * gn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: jt.mass, stiffness: c, damping: d };
    } else {
      const u = AS(i);
      (l = { ...l, ...u, mass: jt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function eu(i = jt.visualDuration, l = jt.bounce) {
  const u =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: l }
      : i;
  let { restSpeed: r, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    y = { done: !1, value: d },
    {
      stiffness: g,
      damping: m,
      mass: v,
      duration: S,
      velocity: A,
      isResolvedFromDuration: N,
    } = zS({ ...u, velocity: -He(u.velocity || 0) }),
    B = A || 0,
    H = m / (2 * Math.sqrt(g * v)),
    X = h - d,
    w = He(Math.sqrt(g / v)),
    Z = Math.abs(X) < 5;
  r || (r = Z ? jt.restSpeed.granular : jt.restSpeed.default),
    c || (c = Z ? jt.restDelta.granular : jt.restDelta.default);
  let q;
  if (H < 1) {
    const W = $r(w, H);
    q = (I) => {
      const G = Math.exp(-H * w * I);
      return (
        h - G * (((B + H * w * X) / W) * Math.sin(W * I) + X * Math.cos(W * I))
      );
    };
  } else if (H === 1) q = (W) => h - Math.exp(-w * W) * (X + (B + w * X) * W);
  else {
    const W = w * Math.sqrt(H * H - 1);
    q = (I) => {
      const G = Math.exp(-H * w * I),
        P = Math.min(W * I, 300);
      return (
        h - (G * ((B + H * w * X) * Math.sinh(P) + W * X * Math.cosh(P))) / W
      );
    };
  }
  const et = {
    calculatedDuration: (N && S) || null,
    next: (W) => {
      const I = q(W);
      if (N) y.done = W >= S;
      else {
        let G = W === 0 ? B : 0;
        H < 1 && (G = W === 0 ? Fe(B) : $y(q, W, I));
        const P = Math.abs(G) <= r,
          St = Math.abs(h - I) <= c;
        y.done = P && St;
      }
      return (y.value = y.done ? h : I), y;
    },
    toString: () => {
      const W = Math.min(_c(et), tu),
        I = Py((G) => et.next(W * G).value, W, 30);
      return W + "ms " + I;
    },
    toTransition: () => {},
  };
  return et;
}
eu.applyToOptions = (i) => {
  const l = TS(i, 100, eu);
  return (
    (i.ease = l.ease), (i.duration = Fe(l.duration)), (i.type = "keyframes"), i
  );
};
function Ir({
  keyframes: i,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: y,
  max: g,
  restDelta: m = 0.5,
  restSpeed: v,
}) {
  const S = i[0],
    A = { done: !1, value: S },
    N = (P) => (y !== void 0 && P < y) || (g !== void 0 && P > g),
    B = (P) =>
      y === void 0
        ? g
        : g === void 0 || Math.abs(y - P) < Math.abs(g - P)
        ? y
        : g;
  let H = u * l;
  const X = S + H,
    w = h === void 0 ? X : h(X);
  w !== X && (H = w - S);
  const Z = (P) => -H * Math.exp(-P / r),
    q = (P) => w + Z(P),
    et = (P) => {
      const St = Z(P),
        Vt = q(P);
      (A.done = Math.abs(St) <= m), (A.value = A.done ? w : Vt);
    };
  let W, I;
  const G = (P) => {
    N(A.value) &&
      ((W = P),
      (I = eu({
        keyframes: [A.value, B(A.value)],
        velocity: $y(q, P, A.value),
        damping: c,
        stiffness: d,
        restDelta: m,
        restSpeed: v,
      })));
  };
  return (
    G(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let St = !1;
        return (
          !I && W === void 0 && ((St = !0), et(P), G(P)),
          W !== void 0 && P >= W ? I.next(P - W) : (!St && et(P), A)
        );
      },
    }
  );
}
function OS(i, l, u) {
  const r = [],
    c = u || vn.mix || Wy,
    d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let y = c(i[h], i[h + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[h] || we : l;
      y = Al(g, y);
    }
    r.push(y);
  }
  return r;
}
function RS(i, l, { clamp: u = !0, ease: r, mixer: c } = {}) {
  const d = i.length;
  if ((Ac(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && ((i = [...i].reverse()), (l = [...l].reverse()));
  const y = OS(l, r, c),
    g = y.length,
    m = (v) => {
      if (h && v < i[0]) return l[0];
      let S = 0;
      if (g > 1) for (; S < i.length - 2 && !(v < i[S + 1]); S++);
      const A = gl(i[S], i[S + 1], v);
      return y[S](A);
    };
  return u ? (v) => m(gn(i[0], i[d - 1], v)) : m;
}
function VS(i, l) {
  const u = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = gl(0, l, r);
    i.push(Rt(u, 1, c));
  }
}
function NS(i) {
  const l = [0];
  return VS(l, i.length - 1), l;
}
function _S(i, l) {
  return i.map((u) => u * l);
}
function jS(i, l) {
  return i.map(() => l || qy).splice(0, i.length - 1);
}
function dl({
  duration: i = 300,
  keyframes: l,
  times: u,
  ease: r = "easeInOut",
}) {
  const c = Z1(r) ? r.map(cp) : cp(r),
    d = { done: !1, value: l[0] },
    h = _S(u && u.length === l.length ? u : NS(l), i),
    y = RS(h, l, { ease: Array.isArray(c) ? c : jS(l, c) });
  return {
    calculatedDuration: i,
    next: (g) => ((d.value = y(g)), (d.done = g >= i), d),
  };
}
const US = (i) => i !== null;
function jc(i, { repeat: l, repeatType: u = "loop" }, r, c = 1) {
  const d = i.filter(US),
    y = c < 0 || (l && u !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
  return !y || r === void 0 ? d[y] : r;
}
const BS = { decay: Ir, inertia: Ir, tween: dl, keyframes: dl, spring: eu };
function Iy(i) {
  typeof i.type == "string" && (i.type = BS[i.type]);
}
class Uc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
}
const LS = (i) => i / 100;
class Bc extends Uc {
  constructor(l) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: u } = this.options;
        u && u.updatedAt !== me.now() && this.tick(me.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Iy(l);
    const {
      type: u = dl,
      repeat: r = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: h = 0,
    } = l;
    let { keyframes: y } = l;
    const g = u || dl;
    g !== dl &&
      typeof y[0] != "number" &&
      ((this.mixKeyframes = Al(LS, Wy(y[0], y[1]))), (y = [0, 100]));
    const m = g({ ...l, keyframes: y });
    d === "mirror" &&
      (this.mirroredGenerator = g({
        ...l,
        keyframes: [...y].reverse(),
        velocity: -h,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = _c(m));
    const { calculatedDuration: v } = m;
    (this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (r + 1) - c),
      (this.generator = m);
  }
  updateTime(l) {
    const u = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = u);
  }
  tick(l, u = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: h,
      resolvedDuration: y,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: v,
      repeat: S,
      repeatType: A,
      repeatDelay: N,
      type: B,
      onUpdate: H,
      finalKeyframe: X,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      u ? (this.currentTime = l) : this.updateTime(l);
    const w = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      Z = this.playbackSpeed >= 0 ? w < 0 : w > c;
    (this.currentTime = Math.max(w, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let q = this.currentTime,
      et = r;
    if (S) {
      const P = Math.min(this.currentTime, c) / y;
      let St = Math.floor(P),
        Vt = P % 1;
      !Vt && P >= 1 && (Vt = 1),
        Vt === 1 && St--,
        (St = Math.min(St, S + 1)),
        !!(St % 2) &&
          (A === "reverse"
            ? ((Vt = 1 - Vt), N && (Vt -= N / y))
            : A === "mirror" && (et = h)),
        (q = gn(0, 1, Vt) * y);
    }
    const W = Z ? { done: !1, value: v[0] } : et.next(q);
    d && (W.value = d(W.value));
    let { done: I } = W;
    !Z &&
      g !== null &&
      (I =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const G =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && I));
    return (
      G && B !== Ir && (W.value = jc(v, this.options, X, this.speed)),
      H && H(W.value),
      G && this.finish(),
      W
    );
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
  get duration() {
    return He(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + He(l);
  }
  get time() {
    return He(this.currentTime);
  }
  set time(l) {
    (l = Fe(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    this.updateTime(me.now());
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = He(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: l = bS, startTime: u } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))),
      this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = u ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(me.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.();
  }
  cancel() {
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  attachTimeline(l) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      l.observe(this)
    );
  }
}
function HS(i) {
  for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1]);
}
const ya = (i) => (i * 180) / Math.PI,
  tc = (i) => {
    const l = ya(Math.atan2(i[1], i[0]));
    return ec(l);
  },
  wS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: tc,
    rotateZ: tc,
    skewX: (i) => ya(Math.atan(i[1])),
    skewY: (i) => ya(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  ec = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  yp = tc,
  gp = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  vp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  qS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: gp,
    scaleY: vp,
    scale: (i) => (gp(i) + vp(i)) / 2,
    rotateX: (i) => ec(ya(Math.atan2(i[6], i[5]))),
    rotateY: (i) => ec(ya(Math.atan2(-i[2], i[0]))),
    rotateZ: yp,
    rotate: yp,
    skewX: (i) => ya(Math.atan(i[4])),
    skewY: (i) => ya(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function nc(i) {
  return i.includes("scale") ? 1 : 0;
}
function ac(i, l) {
  if (!i || i === "none") return nc(l);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (u) (r = qS), (c = u);
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = wS), (c = y);
  }
  if (!c) return nc(l);
  const d = r[l],
    h = c[1].split(",").map(GS);
  return typeof d == "function" ? d(h) : h[d];
}
const YS = (i, l) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return ac(u, l);
};
function GS(i) {
  return parseFloat(i.trim());
}
const di = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  mi = new Set(di),
  Sp = (i) => i === hi || i === nt,
  XS = new Set(["x", "y", "z"]),
  QS = di.filter((i) => !XS.has(i));
function ZS(i) {
  const l = [];
  return (
    QS.forEach((u) => {
      const r = i.getValue(u);
      r !== void 0 &&
        (l.push([u, r.get()]), r.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const ga = {
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(u),
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(u),
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  x: (i, { transform: l }) => ac(l, "x"),
  y: (i, { transform: l }) => ac(l, "y"),
};
ga.translateX = ga.x;
ga.translateY = ga.y;
const va = new Set();
let ic = !1,
  lc = !1,
  sc = !1;
function t0() {
  if (lc) {
    const i = Array.from(va).filter((r) => r.needsMeasurement),
      l = new Set(i.map((r) => r.element)),
      u = new Map();
    l.forEach((r) => {
      const c = ZS(r);
      c.length && (u.set(r, c), r.render());
    }),
      i.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = u.get(r);
        c &&
          c.forEach(([d, h]) => {
            r.getValue(d)?.set(h);
          });
      }),
      i.forEach((r) => r.measureEndState()),
      i.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (lc = !1), (ic = !1), va.forEach((i) => i.complete(sc)), va.clear();
}
function e0() {
  va.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (lc = !0);
  });
}
function KS() {
  (sc = !0), e0(), t0(), (sc = !1);
}
class Lc {
  constructor(l, u, r, c, d, h = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (va.add(this),
          ic || ((ic = !0), Ot.read(e0), Ot.resolveKeyframes(t0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: r,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const d = c?.get(),
        h = l[l.length - 1];
      if (d !== void 0) l[0] = d;
      else if (r && u) {
        const y = r.readValue(u, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
    }
    HS(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      va.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (va.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const JS = (i) => i.startsWith("--");
function kS(i, l, u) {
  JS(l) ? i.style.setProperty(l, u) : (i.style[l] = u);
}
const FS = Ec(() => window.ScrollTimeline !== void 0),
  WS = {};
function PS(i, l) {
  const u = Ec(i);
  return () => WS[l] ?? u();
}
const n0 = PS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  fl = ([i, l, u, r]) => `cubic-bezier(${i}, ${l}, ${u}, ${r})`,
  bp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fl([0, 0.65, 0.55, 1]),
    circOut: fl([0.55, 0, 1, 0.45]),
    backIn: fl([0.31, 0.01, 0.66, -0.59]),
    backOut: fl([0.33, 1.53, 0.69, 0.99]),
  };
function a0(i, l) {
  if (i)
    return typeof i == "function"
      ? n0()
        ? Py(i, l)
        : "ease-out"
      : Yy(i)
      ? fl(i)
      : Array.isArray(i)
      ? i.map((u) => a0(u, l) || bp.easeOut)
      : bp[i];
}
function $S(
  i,
  l,
  u,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: y = "easeOut",
    times: g,
  } = {},
  m = void 0
) {
  const v = { [l]: u };
  g && (v.offset = g);
  const S = a0(y, c);
  Array.isArray(S) && (v.easing = S);
  const A = {
    delay: r,
    duration: c,
    easing: Array.isArray(S) ? "linear" : S,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal",
  };
  return m && (A.pseudoElement = m), i.animate(v, A);
}
function i0(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function IS({ type: i, ...l }) {
  return i0(i) && n0()
    ? i.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class tb extends Uc {
  constructor(l) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !l))
      return;
    const {
      element: u,
      name: r,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: h = !1,
      finalKeyframe: y,
      onComplete: g,
    } = l;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = h),
      (this.options = l),
      Ac(typeof l.type != "string");
    const m = IS(l);
    (this.animation = $S(u, r, c, m, d)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const v = jc(c, this.options, y, this.speed);
          this.updateMotionValue ? this.updateMotionValue(v) : kS(u, r, v),
            this.animation.cancel();
        }
        g?.(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return He(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + He(l);
  }
  get time() {
    return He(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    (this.finishedTime = null), (this.animation.currentTime = Fe(l));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(l) {
    this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, observe: u }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      l && FS() ? ((this.animation.timeline = l), we) : u(this)
    );
  }
}
const l0 = { anticipate: Ly, backInOut: By, circInOut: wy };
function eb(i) {
  return i in l0;
}
function nb(i) {
  typeof i.ease == "string" && eb(i.ease) && (i.ease = l0[i.ease]);
}
const Tp = 10;
class ab extends tb {
  constructor(l) {
    nb(l),
      Iy(l),
      super(l),
      l.startTime && (this.startTime = l.startTime),
      (this.options = l);
  }
  updateMotionValue(l) {
    const {
      motionValue: u,
      onUpdate: r,
      onComplete: c,
      element: d,
      ...h
    } = this.options;
    if (!u) return;
    if (l !== void 0) {
      u.set(l);
      return;
    }
    const y = new Bc({ ...h, autoplay: !1 }),
      g = Fe(this.finishedTime ?? this.time);
    u.setWithVelocity(y.sample(g - Tp).value, y.sample(g).value, Tp), y.stop();
  }
}
const xp = (i, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (Kn.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function ib(i) {
  const l = i[0];
  if (i.length === 1) return !0;
  for (let u = 0; u < i.length; u++) if (i[u] !== l) return !0;
}
function lb(i, l, u, r) {
  const c = i[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = i[i.length - 1],
    h = xp(c, l),
    y = xp(d, l);
  return !h || !y ? !1 : ib(i) || ((u === "spring" || i0(u)) && r);
}
function uc(i) {
  (i.duration = 0), (i.type = "keyframes");
}
const sb = new Set(["opacity", "clipPath", "filter", "transform"]),
  ub = Ec(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ob(i) {
  const {
    motionValue: l,
    name: u,
    repeatDelay: r,
    repeatType: c,
    damping: d,
    type: h,
  } = i;
  if (!(l?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: g, transformTemplate: m } = l.owner.getProps();
  return (
    ub() &&
    u &&
    sb.has(u) &&
    (u !== "transform" || !m) &&
    !g &&
    !r &&
    c !== "mirror" &&
    d !== 0 &&
    h !== "inertia"
  );
}
const rb = 40;
class cb extends Uc {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    keyframes: y,
    name: g,
    motionValue: m,
    element: v,
    ...S
  }) {
    super(),
      (this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel();
      }),
      (this.createdAt = me.now());
    const A = {
        autoplay: l,
        delay: u,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        name: g,
        motionValue: m,
        element: v,
        ...S,
      },
      N = v?.KeyframeResolver || Lc;
    (this.keyframeResolver = new N(
      y,
      (B, H, X) => this.onKeyframesResolved(B, H, A, !X),
      g,
      m,
      v
    )),
      this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, u, r, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: h,
      velocity: y,
      delay: g,
      isHandoff: m,
      onUpdate: v,
    } = r;
    (this.resolvedAt = me.now()),
      lb(l, d, h, y) ||
        ((vn.instantAnimations || !g) && v?.(jc(l, r, u)),
        (l[0] = l[l.length - 1]),
        uc(r),
        (r.repeat = 0));
    const A = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > rb
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: u,
        ...r,
        keyframes: l,
      },
      N =
        !m && ob(A)
          ? new ab({ ...A, element: A.motionValue.owner.current })
          : new Bc(A);
    N.finished.then(() => this.notifyFinished()).catch(we),
      this.pendingTimeline &&
        ((this.stopTimeline = N.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = N);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, u) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), KS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const fb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hb(i) {
  const l = fb.exec(i);
  if (!l) return [,];
  const [, u, r, c] = l;
  return [`--${u ?? r}`, c];
}
function s0(i, l, u = 1) {
  const [r, c] = hb(i);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return zy(h) ? parseFloat(h) : h;
  }
  return Oc(c) ? s0(c, l, u + 1) : c;
}
function Hc(i, l) {
  return i?.[l] ?? i?.default ?? i;
}
const u0 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...di,
  ]),
  db = { test: (i) => i === "auto", parse: (i) => i },
  o0 = (i) => (l) => l.test(i),
  r0 = [hi, nt, We, Qn, iS, aS, db],
  Ap = (i) => r0.find(o0(i));
function mb(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
    ? i === "none" || i === "0" || Ry(i)
    : !0;
}
const pb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function yb(i) {
  const [l, u] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [r] = u.match(Rc) || [];
  if (!r) return i;
  const c = u.replace(r, "");
  let d = pb.has(l) ? 1 : 0;
  return r !== u && (d *= 100), l + "(" + d + c + ")";
}
const gb = /\b([a-z-]*)\(.*?\)/gu,
  oc = {
    ...Kn,
    getAnimatableNone: (i) => {
      const l = i.match(gb);
      return l ? l.map(yb).join(" ") : i;
    },
  },
  Ep = { ...hi, transform: Math.round },
  vb = {
    rotate: Qn,
    rotateX: Qn,
    rotateY: Qn,
    rotateZ: Qn,
    scale: Ks,
    scaleX: Ks,
    scaleY: Ks,
    scaleZ: Ks,
    skew: Qn,
    skewX: Qn,
    skewY: Qn,
    distance: nt,
    translateX: nt,
    translateY: nt,
    translateZ: nt,
    x: nt,
    y: nt,
    z: nt,
    perspective: nt,
    transformPerspective: nt,
    opacity: vl,
    originX: fp,
    originY: fp,
    originZ: nt,
  },
  wc = {
    borderWidth: nt,
    borderTopWidth: nt,
    borderRightWidth: nt,
    borderBottomWidth: nt,
    borderLeftWidth: nt,
    borderRadius: nt,
    radius: nt,
    borderTopLeftRadius: nt,
    borderTopRightRadius: nt,
    borderBottomRightRadius: nt,
    borderBottomLeftRadius: nt,
    width: nt,
    maxWidth: nt,
    height: nt,
    maxHeight: nt,
    top: nt,
    right: nt,
    bottom: nt,
    left: nt,
    padding: nt,
    paddingTop: nt,
    paddingRight: nt,
    paddingBottom: nt,
    paddingLeft: nt,
    margin: nt,
    marginTop: nt,
    marginRight: nt,
    marginBottom: nt,
    marginLeft: nt,
    backgroundPositionX: nt,
    backgroundPositionY: nt,
    ...vb,
    zIndex: Ep,
    fillOpacity: vl,
    strokeOpacity: vl,
    numOctaves: Ep,
  },
  Sb = {
    ...wc,
    color: Xt,
    backgroundColor: Xt,
    outlineColor: Xt,
    fill: Xt,
    stroke: Xt,
    borderColor: Xt,
    borderTopColor: Xt,
    borderRightColor: Xt,
    borderBottomColor: Xt,
    borderLeftColor: Xt,
    filter: oc,
    WebkitFilter: oc,
  },
  c0 = (i) => Sb[i];
function f0(i, l) {
  let u = c0(i);
  return (
    u !== oc && (u = Kn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const bb = new Set(["auto", "none", "0"]);
function Tb(i, l, u) {
  let r = 0,
    c;
  for (; r < i.length && !c; ) {
    const d = i[r];
    typeof d == "string" && !bb.has(d) && Sl(d).values.length && (c = i[r]),
      r++;
  }
  if (c && u) for (const d of l) i[d] = f0(u, c);
}
class xb extends Lc {
  constructor(l, u, r, c, d) {
    super(l, u, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: r } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let m = l[g];
      if (typeof m == "string" && ((m = m.trim()), Oc(m))) {
        const v = s0(m, u.current);
        v !== void 0 && (l[g] = v),
          g === l.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !u0.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      h = Ap(c),
      y = Ap(d);
    if (h !== y)
      if (Sp(h) && Sp(y))
        for (let g = 0; g < l.length; g++) {
          const m = l[g];
          typeof m == "string" && (l[g] = parseFloat(m));
        }
      else ga[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      r = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || mb(l[c])) && r.push(c);
    r.length && Tb(l, r, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ga[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: u, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1,
      h = r[d];
    (r[d] = ga[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([y, g]) => {
          l.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ab(i, l, u) {
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    let r = document;
    const c = u?.[i] ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i);
}
const h0 = (i, l) => (l && typeof i == "number" ? l.transform(i) : i);
function d0(i) {
  return Oy(i) && "offsetHeight" in i;
}
const Mp = 30,
  Eb = (i) => !isNaN(parseFloat(i));
class Mb {
  constructor(l, u = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const c = me.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = me.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = Eb(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new Mc());
    const r = this.events[l].add(u);
    return l === "change"
      ? () => {
          r(),
            Ot.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, u, r) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = me.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Mp
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Mp);
    return Vy(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ci(i, l) {
  return new Mb(i, l);
}
const { schedule: qc } = Gy(queueMicrotask, !1),
  Xe = { x: !1, y: !1 };
function m0() {
  return Xe.x || Xe.y;
}
function Db(i) {
  return i === "x" || i === "y"
    ? Xe[i]
      ? null
      : ((Xe[i] = !0),
        () => {
          Xe[i] = !1;
        })
    : Xe.x || Xe.y
    ? null
    : ((Xe.x = Xe.y = !0),
      () => {
        Xe.x = Xe.y = !1;
      });
}
function p0(i, l) {
  const u = Ab(i),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [u, c, () => r.abort()];
}
function Dp(i) {
  return !(i.pointerType === "touch" || m0());
}
function Cb(i, l, u = {}) {
  const [r, c, d] = p0(i, u),
    h = (y) => {
      if (!Dp(y)) return;
      const { target: g } = y,
        m = l(g, y);
      if (typeof m != "function" || !g) return;
      const v = (S) => {
        Dp(S) && (m(S), g.removeEventListener("pointerleave", v));
      };
      g.addEventListener("pointerleave", v, c);
    };
  return (
    r.forEach((y) => {
      y.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
const y0 = (i, l) => (l ? (i === l ? !0 : y0(i, l.parentElement)) : !1),
  Yc = (i) =>
    i.pointerType === "mouse"
      ? typeof i.button != "number" || i.button <= 0
      : i.isPrimary !== !1,
  zb = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Ob(i) {
  return zb.has(i.tagName) || i.tabIndex !== -1;
}
const Ws = new WeakSet();
function Cp(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Hr(i, l) {
  i.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const Rb = (i, l) => {
  const u = i.currentTarget;
  if (!u) return;
  const r = Cp(() => {
    if (Ws.has(u)) return;
    Hr(u, "down");
    const c = Cp(() => {
        Hr(u, "up");
      }),
      d = () => Hr(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", r, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", r), l);
};
function zp(i) {
  return Yc(i) && !m0();
}
function Vb(i, l, u = {}) {
  const [r, c, d] = p0(i, u),
    h = (y) => {
      const g = y.currentTarget;
      if (!zp(y)) return;
      Ws.add(g);
      const m = l(g, y),
        v = (N, B) => {
          window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", A),
            Ws.has(g) && Ws.delete(g),
            zp(N) && typeof m == "function" && m(N, { success: B });
        },
        S = (N) => {
          v(
            N,
            g === window ||
              g === document ||
              u.useGlobalTarget ||
              y0(g, N.target)
          );
        },
        A = (N) => {
          v(N, !1);
        };
      window.addEventListener("pointerup", S, c),
        window.addEventListener("pointercancel", A, c);
    };
  return (
    r.forEach((y) => {
      (u.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c),
        d0(y) &&
          (y.addEventListener("focus", (m) => Rb(m, c)),
          !Ob(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
    }),
    d
  );
}
function g0(i) {
  return Oy(i) && "ownerSVGElement" in i;
}
function Nb(i) {
  return g0(i) && i.tagName === "svg";
}
const ne = (i) => !!(i && i.getVelocity),
  _b = [...r0, Xt, Kn],
  jb = (i) => _b.find(o0(i)),
  Gc = Q.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function Op(i, l) {
  if (typeof i == "function") return i(l);
  i != null && (i.current = l);
}
function Ub(...i) {
  return (l) => {
    let u = !1;
    const r = i.map((c) => {
      const d = Op(c, l);
      return !u && typeof d == "function" && (u = !0), d;
    });
    if (u)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : Op(i[c], null);
        }
      };
  };
}
function Bb(...i) {
  return Q.useCallback(Ub(...i), i);
}
class Lb extends Q.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (u && l.isPresent && !this.props.isPresent) {
      const r = u.offsetParent,
        c = (d0(r) && r.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = u.offsetHeight || 0),
        (d.width = u.offsetWidth || 0),
        (d.top = u.offsetTop),
        (d.left = u.offsetLeft),
        (d.right = c - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Hb({ children: i, isPresent: l, anchorX: u, root: r }) {
  const c = Q.useId(),
    d = Q.useRef(null),
    h = Q.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: y } = Q.useContext(Gc),
    g = Bb(d, i?.ref);
  return (
    Q.useInsertionEffect(() => {
      const { width: m, height: v, top: S, left: A, right: N } = h.current;
      if (l || !d.current || !m || !v) return;
      const B = u === "left" ? `left: ${A}` : `right: ${N}`;
      d.current.dataset.motionPopId = c;
      const H = document.createElement("style");
      y && (H.nonce = y);
      const X = r ?? document.head;
      return (
        X.appendChild(H),
        H.sheet &&
          H.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${v}px !important;
            ${B}px !important;
            top: ${S}px !important;
          }
        `),
        () => {
          X.contains(H) && X.removeChild(H);
        }
      );
    }, [l]),
    U.jsx(Lb, {
      isPresent: l,
      childRef: d,
      sizeRef: h,
      children: Q.cloneElement(i, { ref: g }),
    })
  );
}
const wb = ({
  children: i,
  initial: l,
  isPresent: u,
  onExitComplete: r,
  custom: c,
  presenceAffectsLayout: d,
  mode: h,
  anchorX: y,
  root: g,
}) => {
  const m = Sc(qb),
    v = Q.useId();
  let S = !0,
    A = Q.useMemo(
      () => (
        (S = !1),
        {
          id: v,
          initial: l,
          isPresent: u,
          custom: c,
          onExitComplete: (N) => {
            m.set(N, !0);
            for (const B of m.values()) if (!B) return;
            r && r();
          },
          register: (N) => (m.set(N, !1), () => m.delete(N)),
        }
      ),
      [u, m, r]
    );
  return (
    d && S && (A = { ...A }),
    Q.useMemo(() => {
      m.forEach((N, B) => m.set(B, !1));
    }, [u]),
    Q.useEffect(() => {
      !u && !m.size && r && r();
    }, [u]),
    h === "popLayout" &&
      (i = U.jsx(Hb, { isPresent: u, anchorX: y, root: g, children: i })),
    U.jsx(iu.Provider, { value: A, children: i })
  );
};
function qb() {
  return new Map();
}
function v0(i = !0) {
  const l = Q.useContext(iu);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: r, register: c } = l,
    d = Q.useId();
  Q.useEffect(() => {
    if (i) return c(d);
  }, [i]);
  const h = Q.useCallback(() => i && r && r(d), [d, r, i]);
  return !u && r ? [!1, h] : [!0];
}
const Js = (i) => i.key || "";
function Rp(i) {
  const l = [];
  return (
    Q.Children.forEach(i, (u) => {
      Q.isValidElement(u) && l.push(u);
    }),
    l
  );
}
const Yb = ({
    children: i,
    custom: l,
    initial: u = !0,
    onExitComplete: r,
    presenceAffectsLayout: c = !0,
    mode: d = "sync",
    propagate: h = !1,
    anchorX: y = "left",
    root: g,
  }) => {
    const [m, v] = v0(h),
      S = Q.useMemo(() => Rp(i), [i]),
      A = h && !m ? [] : S.map(Js),
      N = Q.useRef(!0),
      B = Q.useRef(S),
      H = Sc(() => new Map()),
      [X, w] = Q.useState(S),
      [Z, q] = Q.useState(S);
    Cy(() => {
      (N.current = !1), (B.current = S);
      for (let I = 0; I < Z.length; I++) {
        const G = Js(Z[I]);
        A.includes(G) ? H.delete(G) : H.get(G) !== !0 && H.set(G, !1);
      }
    }, [Z, A.length, A.join("-")]);
    const et = [];
    if (S !== X) {
      let I = [...S];
      for (let G = 0; G < Z.length; G++) {
        const P = Z[G],
          St = Js(P);
        A.includes(St) || (I.splice(G, 0, P), et.push(P));
      }
      return d === "wait" && et.length && (I = et), q(Rp(I)), w(S), null;
    }
    const { forceRender: W } = Q.useContext(vc);
    return U.jsx(U.Fragment, {
      children: Z.map((I) => {
        const G = Js(I),
          P = h && !m ? !1 : S === Z || A.includes(G),
          St = () => {
            if (H.has(G)) H.set(G, !0);
            else return;
            let Vt = !0;
            H.forEach((Qt) => {
              Qt || (Vt = !1);
            }),
              Vt && (W?.(), q(B.current), h && v?.(), r && r());
          };
        return U.jsx(
          wb,
          {
            isPresent: P,
            initial: !N.current || u ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: d,
            root: g,
            onExitComplete: P ? void 0 : St,
            anchorX: y,
            children: I,
          },
          G
        );
      }),
    });
  },
  S0 = Q.createContext({ strict: !1 }),
  Vp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  fi = {};
for (const i in Vp) fi[i] = { isEnabled: (l) => Vp[i].some((u) => !!l[u]) };
function Gb(i) {
  for (const l in i) fi[l] = { ...fi[l], ...i[l] };
}
const Xb = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function nu(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    Xb.has(i)
  );
}
let b0 = (i) => !nu(i);
function Qb(i) {
  typeof i == "function" && (b0 = (l) => (l.startsWith("on") ? !nu(l) : i(l)));
}
try {
  Qb(require("@emotion/is-prop-valid").default);
} catch {}
function Zb(i, l, u) {
  const r = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ((b0(c) ||
        (u === !0 && nu(c)) ||
        (!l && !nu(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (r[c] = i[c]));
  return r;
}
const lu = Q.createContext({});
function su(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function bl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Xc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qc = ["initial", ...Xc];
function uu(i) {
  return su(i.animate) || Qc.some((l) => bl(i[l]));
}
function T0(i) {
  return !!(uu(i) || i.variants);
}
function Kb(i, l) {
  if (uu(i)) {
    const { initial: u, animate: r } = i;
    return {
      initial: u === !1 || bl(u) ? u : void 0,
      animate: bl(r) ? r : void 0,
    };
  }
  return i.inherit !== !1 ? l : {};
}
function Jb(i) {
  const { initial: l, animate: u } = Kb(i, Q.useContext(lu));
  return Q.useMemo(() => ({ initial: l, animate: u }), [Np(l), Np(u)]);
}
function Np(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Tl = {};
function kb(i) {
  for (const l in i) (Tl[l] = i[l]), zc(l) && (Tl[l].isCSSVariable = !0);
}
function x0(i, { layout: l, layoutId: u }) {
  return (
    mi.has(i) ||
    i.startsWith("origin") ||
    ((l || u !== void 0) && (!!Tl[i] || i === "opacity"))
  );
}
const Fb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Wb = di.length;
function Pb(i, l, u) {
  let r = "",
    c = !0;
  for (let d = 0; d < Wb; d++) {
    const h = di[d],
      y = i[h];
    if (y === void 0) continue;
    let g = !0;
    if (
      (typeof y == "number"
        ? (g = y === (h.startsWith("scale") ? 1 : 0))
        : (g = parseFloat(y) === 0),
      !g || u)
    ) {
      const m = h0(y, wc[h]);
      if (!g) {
        c = !1;
        const v = Fb[h] || h;
        r += `${v}(${m}) `;
      }
      u && (l[h] = m);
    }
  }
  return (r = r.trim()), u ? (r = u(l, c ? "" : r)) : c && (r = "none"), r;
}
function Zc(i, l, u) {
  const { style: r, vars: c, transformOrigin: d } = i;
  let h = !1,
    y = !1;
  for (const g in l) {
    const m = l[g];
    if (mi.has(g)) {
      h = !0;
      continue;
    } else if (zc(g)) {
      c[g] = m;
      continue;
    } else {
      const v = h0(m, wc[g]);
      g.startsWith("origin") ? ((y = !0), (d[g] = v)) : (r[g] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (r.transform = Pb(l, i.transform, u))
        : r.transform && (r.transform = "none")),
    y)
  ) {
    const { originX: g = "50%", originY: m = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${g} ${m} ${v}`;
  }
}
const Kc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function A0(i, l, u) {
  for (const r in l) !ne(l[r]) && !x0(r, u) && (i[r] = l[r]);
}
function $b({ transformTemplate: i }, l) {
  return Q.useMemo(() => {
    const u = Kc();
    return Zc(u, l, i), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function Ib(i, l) {
  const u = i.style || {},
    r = {};
  return A0(r, u, i), Object.assign(r, $b(i, l)), r;
}
function tT(i, l) {
  const u = {},
    r = Ib(i, l);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((u.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (u.tabIndex = 0),
    (u.style = r),
    u
  );
}
const eT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  nT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function aT(i, l, u = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? eT : nT;
  i[d.offset] = nt.transform(-r);
  const h = nt.transform(l),
    y = nt.transform(u);
  i[d.array] = `${h} ${y}`;
}
function E0(
  i,
  {
    attrX: l,
    attrY: u,
    attrScale: r,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: h = 0,
    ...y
  },
  g,
  m,
  v
) {
  if ((Zc(i, y, m), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  (i.attrs = i.style), (i.style = {});
  const { attrs: S, style: A } = i;
  S.transform && ((A.transform = S.transform), delete S.transform),
    (A.transform || S.transformOrigin) &&
      ((A.transformOrigin = S.transformOrigin ?? "50% 50%"),
      delete S.transformOrigin),
    A.transform &&
      ((A.transformBox = v?.transformBox ?? "fill-box"), delete S.transformBox),
    l !== void 0 && (S.x = l),
    u !== void 0 && (S.y = u),
    r !== void 0 && (S.scale = r),
    c !== void 0 && aT(S, c, d, h, !1);
}
const M0 = () => ({ ...Kc(), attrs: {} }),
  D0 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function iT(i, l, u, r) {
  const c = Q.useMemo(() => {
    const d = M0();
    return (
      E0(d, l, D0(r), i.transformTemplate, i.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (i.style) {
    const d = {};
    A0(d, i.style, i), (c.style = { ...d, ...c.style });
  }
  return c;
}
const lT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Jc(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(lT.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function sT(i, l, u, { latestValues: r }, c, d = !1) {
  const y = (Jc(i) ? iT : tT)(l, r, c, i),
    g = Zb(l, typeof i == "string", d),
    m = i !== Q.Fragment ? { ...g, ...y, ref: u } : {},
    { children: v } = l,
    S = Q.useMemo(() => (ne(v) ? v.get() : v), [v]);
  return Q.createElement(i, { ...m, children: S });
}
function _p(i) {
  const l = [{}, {}];
  return (
    i?.values.forEach((u, r) => {
      (l[0][r] = u.get()), (l[1][r] = u.getVelocity());
    }),
    l
  );
}
function kc(i, l, u, r) {
  if (typeof l == "function") {
    const [c, d] = _p(r);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = i.variants && i.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = _p(r);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  return l;
}
function Ps(i) {
  return ne(i) ? i.get() : i;
}
function uT({ scrapeMotionValuesFromProps: i, createRenderState: l }, u, r, c) {
  return { latestValues: oT(u, r, c, i), renderState: l() };
}
function oT(i, l, u, r) {
  const c = {},
    d = r(i, {});
  for (const A in d) c[A] = Ps(d[A]);
  let { initial: h, animate: y } = i;
  const g = uu(i),
    m = T0(i);
  l &&
    m &&
    !g &&
    i.inherit !== !1 &&
    (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const S = v ? y : h;
  if (S && typeof S != "boolean" && !su(S)) {
    const A = Array.isArray(S) ? S : [S];
    for (let N = 0; N < A.length; N++) {
      const B = kc(i, A[N]);
      if (B) {
        const { transitionEnd: H, transition: X, ...w } = B;
        for (const Z in w) {
          let q = w[Z];
          if (Array.isArray(q)) {
            const et = v ? q.length - 1 : 0;
            q = q[et];
          }
          q !== null && (c[Z] = q);
        }
        for (const Z in H) c[Z] = H[Z];
      }
    }
  }
  return c;
}
const C0 = (i) => (l, u) => {
  const r = Q.useContext(lu),
    c = Q.useContext(iu),
    d = () => uT(i, l, r, c);
  return u ? d() : Sc(d);
};
function Fc(i, l, u) {
  const { style: r } = i,
    c = {};
  for (const d in r)
    (ne(r[d]) ||
      (l.style && ne(l.style[d])) ||
      x0(d, i) ||
      u?.getValue(d)?.liveStyle !== void 0) &&
      (c[d] = r[d]);
  return c;
}
const rT = C0({ scrapeMotionValuesFromProps: Fc, createRenderState: Kc });
function z0(i, l, u) {
  const r = Fc(i, l, u);
  for (const c in i)
    if (ne(i[c]) || ne(l[c])) {
      const d =
        di.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = i[c];
    }
  return r;
}
const cT = C0({ scrapeMotionValuesFromProps: z0, createRenderState: M0 }),
  fT = Symbol.for("motionComponentSymbol");
function li(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function hT(i, l, u) {
  return Q.useCallback(
    (r) => {
      r && i.onMount && i.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        u && (typeof u == "function" ? u(r) : li(u) && (u.current = r));
    },
    [l]
  );
}
const Wc = (i) => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  dT = "framerAppearId",
  O0 = "data-" + Wc(dT),
  R0 = Q.createContext({});
function mT(i, l, u, r, c) {
  const { visualElement: d } = Q.useContext(lu),
    h = Q.useContext(S0),
    y = Q.useContext(iu),
    g = Q.useContext(Gc).reducedMotion,
    m = Q.useRef(null);
  (r = r || h.renderer),
    !m.current &&
      r &&
      (m.current = r(i, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const v = m.current,
    S = Q.useContext(R0);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    pT(m.current, u, c, S);
  const A = Q.useRef(!1);
  Q.useInsertionEffect(() => {
    v && A.current && v.update(u, y);
  });
  const N = u[O0],
    B = Q.useRef(
      !!N &&
        !window.MotionHandoffIsComplete?.(N) &&
        window.MotionHasOptimisedAnimation?.(N)
    );
  return (
    Cy(() => {
      v &&
        ((A.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        B.current && v.animationState && v.animationState.animateChanges());
    }),
    Q.useEffect(() => {
      v &&
        (!B.current && v.animationState && v.animationState.animateChanges(),
        B.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(N);
          }),
          (B.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function pT(i, l, u, r) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: y,
    layoutScroll: g,
    layoutRoot: m,
    layoutCrossfade: v,
  } = l;
  (i.projection = new u(
    i.latestValues,
    l["data-framer-portal-id"] ? void 0 : V0(i.parent)
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (y && li(y)),
      visualElement: i,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      crossfade: v,
      layoutScroll: g,
      layoutRoot: m,
    });
}
function V0(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : V0(i.parent);
}
function wr(i, { forwardMotionProps: l = !1 } = {}, u, r) {
  u && Gb(u);
  const c = Jc(i) ? cT : rT;
  function d(y, g) {
    let m;
    const v = { ...Q.useContext(Gc), ...y, layoutId: yT(y) },
      { isStatic: S } = v,
      A = Jb(y),
      N = c(y, S);
    if (!S && bc) {
      gT();
      const B = vT(v);
      (m = B.MeasureLayout),
        (A.visualElement = mT(i, N, v, r, B.ProjectionNode));
    }
    return U.jsxs(lu.Provider, {
      value: A,
      children: [
        m && A.visualElement
          ? U.jsx(m, { visualElement: A.visualElement, ...v })
          : null,
        sT(i, y, hT(N, A.visualElement, g), N, S, l),
      ],
    });
  }
  d.displayName = `motion.${
    typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`
  }`;
  const h = Q.forwardRef(d);
  return (h[fT] = i), h;
}
function yT({ layoutId: i }) {
  const l = Q.useContext(vc).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function gT(i, l) {
  Q.useContext(S0).strict;
}
function vT(i) {
  const { drag: l, layout: u } = fi;
  if (!l && !u) return {};
  const r = { ...l, ...u };
  return {
    MeasureLayout:
      l?.isEnabled(i) || u?.isEnabled(i) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function ST(i, l) {
  if (typeof Proxy > "u") return wr;
  const u = new Map(),
    r = (d, h) => wr(d, h, i, l),
    c = (d, h) => r(d, h);
  return new Proxy(c, {
    get: (d, h) =>
      h === "create"
        ? r
        : (u.has(h) || u.set(h, wr(h, void 0, i, l)), u.get(h)),
  });
}
function N0({ top: i, left: l, right: u, bottom: r }) {
  return { x: { min: l, max: u }, y: { min: i, max: r } };
}
function bT({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function TT(i, l) {
  if (!l) return i;
  const u = l({ x: i.left, y: i.top }),
    r = l({ x: i.right, y: i.bottom });
  return { top: u.y, left: u.x, bottom: r.y, right: r.x };
}
function qr(i) {
  return i === void 0 || i === 1;
}
function rc({ scale: i, scaleX: l, scaleY: u }) {
  return !qr(i) || !qr(l) || !qr(u);
}
function ma(i) {
  return (
    rc(i) ||
    _0(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function _0(i) {
  return jp(i.x) || jp(i.y);
}
function jp(i) {
  return i && i !== "0%";
}
function au(i, l, u) {
  const r = i - u,
    c = l * r;
  return u + c;
}
function Up(i, l, u, r, c) {
  return c !== void 0 && (i = au(i, c, r)), au(i, u, r) + l;
}
function cc(i, l = 0, u = 1, r, c) {
  (i.min = Up(i.min, l, u, r, c)), (i.max = Up(i.max, l, u, r, c));
}
function j0(i, { x: l, y: u }) {
  cc(i.x, l.translate, l.scale, l.originPoint),
    cc(i.y, u.translate, u.scale, u.originPoint);
}
const Bp = 0.999999999999,
  Lp = 1.0000000000001;
function xT(i, l, u, r = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let y = 0; y < c; y++) {
    (d = u[y]), (h = d.projectionDelta);
    const { visualElement: g } = d.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        ui(i, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), j0(i, h)),
      r && ma(d.latestValues) && ui(i, d.latestValues));
  }
  l.x < Lp && l.x > Bp && (l.x = 1), l.y < Lp && l.y > Bp && (l.y = 1);
}
function si(i, l) {
  (i.min = i.min + l), (i.max = i.max + l);
}
function Hp(i, l, u, r, c = 0.5) {
  const d = Rt(i.min, i.max, c);
  cc(i, l, u, d, r);
}
function ui(i, l) {
  Hp(i.x, l.x, l.scaleX, l.scale, l.originX),
    Hp(i.y, l.y, l.scaleY, l.scale, l.originY);
}
function U0(i, l) {
  return N0(TT(i.getBoundingClientRect(), l));
}
function AT(i, l, u) {
  const r = U0(i, u),
    { scroll: c } = l;
  return c && (si(r.x, c.offset.x), si(r.y, c.offset.y)), r;
}
const wp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  oi = () => ({ x: wp(), y: wp() }),
  qp = () => ({ min: 0, max: 0 }),
  Ht = () => ({ x: qp(), y: qp() }),
  fc = { current: null },
  B0 = { current: !1 };
function ET() {
  if (((B0.current = !0), !!bc))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (fc.current = i.matches);
      i.addEventListener("change", l), l();
    } else fc.current = !1;
}
const MT = new WeakMap();
function DT(i, l, u) {
  for (const r in l) {
    const c = l[r],
      d = u[r];
    if (ne(c)) i.addValue(r, c);
    else if (ne(d)) i.addValue(r, ci(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(r)) {
        const h = i.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = i.getStaticValue(r);
        i.addValue(r, ci(h !== void 0 ? h : c, { owner: i }));
      }
  }
  for (const r in u) l[r] === void 0 && i.removeValue(r);
  return l;
}
const Yp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class CT {
  scrapeMotionValuesFromProps(l, u, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    y = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Lc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const A = me.now();
        this.renderScheduledAt < A &&
          ((this.renderScheduledAt = A), Ot.render(this.render, !1, !0));
      });
    const { latestValues: g, renderState: m } = h;
    (this.latestValues = g),
      (this.baseTarget = { ...g }),
      (this.initialValues = u.initial ? { ...g } : {}),
      (this.renderState = m),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = y),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = uu(u)),
      (this.isVariantNode = T0(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: v, ...S } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const A in S) {
      const N = S[A];
      g[A] !== void 0 && ne(N) && N.set(g[A]);
    }
  }
  mount(l) {
    (this.current = l),
      MT.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, r) => this.bindToMotionValue(r, u)),
      B0.current || ET(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : fc.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Zn(this.notifyUpdate),
      Zn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = mi.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (h) => {
      (this.latestValues[l] = h),
        this.props.onUpdate && Ot.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d && d(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in fi) {
      const u = fi[l];
      if (!u) continue;
      const { isEnabled: r, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ht();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let r = 0; r < Yp.length; r++) {
      const c = Yp[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = DT(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const r = this.values.get(l);
    u !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        u !== void 0 &&
        ((r = ci(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, u) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      r != null &&
        (typeof r == "string" && (zy(r) || Ry(r))
          ? (r = parseFloat(r))
          : !jb(r) && Kn.test(u) && (r = f0(l, u)),
        this.setBaseTarget(l, ne(r) ? r.get() : r)),
      ne(r) ? r.get() : r
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    const { initial: u } = this.props;
    let r;
    if (typeof u == "string" || typeof u == "object") {
      const d = kc(this.props, u, this.presenceContext?.custom);
      d && (r = d[l]);
    }
    if (u && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ne(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new Mc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
  scheduleRenderMicrotask() {
    qc.render(this.render);
  }
}
class L0 extends CT {
  constructor() {
    super(...arguments), (this.KeyframeResolver = xb);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: r }) {
    delete u[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ne(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function H0(i, { style: l, vars: u }, r, c) {
  const d = i.style;
  let h;
  for (h in l) d[h] = l[h];
  c?.applyProjectionStyles(d, r);
  for (h in u) d.setProperty(h, u[h]);
}
function zT(i) {
  return window.getComputedStyle(i);
}
class OT extends L0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = H0);
  }
  readValueFromInstance(l, u) {
    if (mi.has(u)) return this.projection?.isProjecting ? nc(u) : YS(l, u);
    {
      const r = zT(l),
        c = (zc(u) ? r.getPropertyValue(u) : r[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return U0(l, u);
  }
  build(l, u, r) {
    Zc(l, u, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return Fc(l, u, r);
  }
}
const w0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function RT(i, l, u, r) {
  H0(i, l, void 0, r);
  for (const c in l.attrs) i.setAttribute(w0.has(c) ? c : Wc(c), l.attrs[c]);
}
class VT extends L0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ht);
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (mi.has(u)) {
      const r = c0(u);
      return (r && r.default) || 0;
    }
    return (u = w0.has(u) ? u : Wc(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return z0(l, u, r);
  }
  build(l, u, r) {
    E0(l, u, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, u, r, c) {
    RT(l, u, r, c);
  }
  mount(l) {
    (this.isSVGTag = D0(l.tagName)), super.mount(l);
  }
}
const NT = (i, l) =>
  Jc(i) ? new VT(l) : new OT(l, { allowProjection: i !== Q.Fragment });
function ri(i, l, u) {
  const r = i.getProps();
  return kc(r, l, u !== void 0 ? u : r.custom, i);
}
const hc = (i) => Array.isArray(i);
function _T(i, l, u) {
  i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, ci(u));
}
function jT(i) {
  return hc(i) ? i[i.length - 1] || 0 : i;
}
function UT(i, l) {
  const u = ri(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...r };
  for (const h in d) {
    const y = jT(d[h]);
    _T(i, h, y);
  }
}
function BT(i) {
  return !!(ne(i) && i.add);
}
function dc(i, l) {
  const u = i.getValue("willChange");
  if (BT(u)) return u.add(l);
  if (!u && vn.WillChange) {
    const r = new vn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function q0(i) {
  return i.props[O0];
}
const LT = (i) => i !== null;
function HT(i, { repeat: l, repeatType: u = "loop" }, r) {
  const c = i.filter(LT),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const wT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  qT = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  YT = { type: "keyframes", duration: 0.8 },
  GT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  XT = (i, { keyframes: l }) =>
    l.length > 2
      ? YT
      : mi.has(i)
      ? i.startsWith("scale")
        ? qT(l[1])
        : wT
      : GT;
function QT({
  when: i,
  delay: l,
  delayChildren: u,
  staggerChildren: r,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: y,
  from: g,
  elapsed: m,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Pc =
  (i, l, u, r = {}, c, d) =>
  (h) => {
    const y = Hc(r, i) || {},
      g = y.delay || r.delay || 0;
    let { elapsed: m = 0 } = r;
    m = m - Fe(g);
    const v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...y,
      delay: -m,
      onUpdate: (A) => {
        l.set(A), y.onUpdate && y.onUpdate(A);
      },
      onComplete: () => {
        h(), y.onComplete && y.onComplete();
      },
      name: i,
      motionValue: l,
      element: d ? void 0 : c,
    };
    QT(y) || Object.assign(v, XT(i, v)),
      v.duration && (v.duration = Fe(v.duration)),
      v.repeatDelay && (v.repeatDelay = Fe(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let S = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (uc(v), v.delay === 0 && (S = !0)),
      (vn.instantAnimations || vn.skipAnimations) &&
        ((S = !0), uc(v), (v.delay = 0)),
      (v.allowFlatten = !y.type && !y.ease),
      S && !d && l.get() !== void 0)
    ) {
      const A = HT(v.keyframes, y);
      if (A !== void 0) {
        Ot.update(() => {
          v.onUpdate(A), v.onComplete();
        });
        return;
      }
    }
    return y.isSync ? new Bc(v) : new cb(v);
  };
function ZT({ protectedKeys: i, needsAnimating: l }, u) {
  const r = i.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), r;
}
function Y0(i, l, { delay: u = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d = i.getDefaultTransition(), transitionEnd: h, ...y } = l;
  r && (d = r);
  const g = [],
    m = c && i.animationState && i.animationState.getState()[c];
  for (const v in y) {
    const S = i.getValue(v, i.latestValues[v] ?? null),
      A = y[v];
    if (A === void 0 || (m && ZT(m, v))) continue;
    const N = { delay: u, ...Hc(d || {}, v) },
      B = S.get();
    if (
      B !== void 0 &&
      !S.isAnimating &&
      !Array.isArray(A) &&
      A === B &&
      !N.velocity
    )
      continue;
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const w = q0(i);
      if (w) {
        const Z = window.MotionHandoffAnimation(w, v, Ot);
        Z !== null && ((N.startTime = Z), (H = !0));
      }
    }
    dc(i, v),
      S.start(
        Pc(v, S, A, i.shouldReduceMotion && u0.has(v) ? { type: !1 } : N, i, H)
      );
    const X = S.animation;
    X && g.push(X);
  }
  return (
    h &&
      Promise.all(g).then(() => {
        Ot.update(() => {
          h && UT(i, h);
        });
      }),
    g
  );
}
function G0(i, l, u, r = 0, c = 1) {
  const d = Array.from(i)
      .sort((m, v) => m.sortNodePosition(v))
      .indexOf(l),
    h = i.size,
    y = (h - 1) * r;
  return typeof u == "function" ? u(d, h) : c === 1 ? d * r : y - d * r;
}
function mc(i, l, u = {}) {
  const r = ri(i, l, u.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = r || {};
  u.transitionOverride && (c = u.transitionOverride);
  const d = r ? () => Promise.all(Y0(i, r, u)) : () => Promise.resolve(),
    h =
      i.variantChildren && i.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: v,
              staggerDirection: S,
            } = c;
            return KT(i, l, g, m, v, S, u);
          }
        : () => Promise.resolve(),
    { when: y } = c;
  if (y) {
    const [g, m] = y === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => m());
  } else return Promise.all([d(), h(u.delay)]);
}
function KT(i, l, u = 0, r = 0, c = 0, d = 1, h) {
  const y = [];
  for (const g of i.variantChildren)
    g.notify("AnimationStart", l),
      y.push(
        mc(g, l, {
          ...h,
          delay:
            u +
            (typeof r == "function" ? 0 : r) +
            G0(i.variantChildren, g, r, c, d),
        }).then(() => g.notify("AnimationComplete", l))
      );
  return Promise.all(y);
}
function JT(i, l, u = {}) {
  i.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => mc(i, d, u));
    r = Promise.all(c);
  } else if (typeof l == "string") r = mc(i, l, u);
  else {
    const c = typeof l == "function" ? ri(i, l, u.custom) : l;
    r = Promise.all(Y0(i, c, u));
  }
  return r.then(() => {
    i.notify("AnimationComplete", l);
  });
}
function X0(i, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== i.length) return !1;
  for (let r = 0; r < u; r++) if (l[r] !== i[r]) return !1;
  return !0;
}
const kT = Qc.length;
function Q0(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const u = i.parent ? Q0(i.parent) || {} : {};
    return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < kT; u++) {
    const r = Qc[u],
      c = i.props[r];
    (bl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const FT = [...Xc].reverse(),
  WT = Xc.length;
function PT(i) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: r }) => JT(i, u, r)));
}
function $T(i) {
  let l = PT(i),
    u = Gp(),
    r = !0;
  const c = (g) => (m, v) => {
    const S = ri(i, v, g === "exit" ? i.presenceContext?.custom : void 0);
    if (S) {
      const { transition: A, transitionEnd: N, ...B } = S;
      m = { ...m, ...B, ...N };
    }
    return m;
  };
  function d(g) {
    l = g(i);
  }
  function h(g) {
    const { props: m } = i,
      v = Q0(i.parent) || {},
      S = [],
      A = new Set();
    let N = {},
      B = 1 / 0;
    for (let X = 0; X < WT; X++) {
      const w = FT[X],
        Z = u[w],
        q = m[w] !== void 0 ? m[w] : v[w],
        et = bl(q),
        W = w === g ? Z.isActive : null;
      W === !1 && (B = X);
      let I = q === v[w] && q !== m[w] && et;
      if (
        (I && r && i.manuallyAnimateOnMount && (I = !1),
        (Z.protectedKeys = { ...N }),
        (!Z.isActive && W === null) ||
          (!q && !Z.prevProp) ||
          su(q) ||
          typeof q == "boolean")
      )
        continue;
      const G = IT(Z.prevProp, q);
      let P = G || (w === g && Z.isActive && !I && et) || (X > B && et),
        St = !1;
      const Vt = Array.isArray(q) ? q : [q];
      let Qt = Vt.reduce(c(w), {});
      W === !1 && (Qt = {});
      const { prevResolvedValues: kt = {} } = Z,
        Pe = { ...kt, ...Qt },
        Me = (L) => {
          (P = !0),
            A.has(L) && ((St = !0), A.delete(L)),
            (Z.needsAnimating[L] = !0);
          const k = i.getValue(L);
          k && (k.liveStyle = !1);
        };
      for (const L in Pe) {
        const k = Qt[L],
          ct = kt[L];
        if (N.hasOwnProperty(L)) continue;
        let mt = !1;
        hc(k) && hc(ct) ? (mt = !X0(k, ct)) : (mt = k !== ct),
          mt
            ? k != null
              ? Me(L)
              : A.add(L)
            : k !== void 0 && A.has(L)
            ? Me(L)
            : (Z.protectedKeys[L] = !0);
      }
      (Z.prevProp = q),
        (Z.prevResolvedValues = Qt),
        Z.isActive && (N = { ...N, ...Qt }),
        r && i.blockInitialAnimation && (P = !1);
      const se = I && G;
      P &&
        (!se || St) &&
        S.push(
          ...Vt.map((L) => {
            const k = { type: w };
            if (
              typeof L == "string" &&
              r &&
              !se &&
              i.manuallyAnimateOnMount &&
              i.parent
            ) {
              const { parent: ct } = i,
                mt = ri(ct, L);
              if (ct.enteringChildren && mt) {
                const { delayChildren: x } = mt.transition || {};
                k.delay = G0(ct.enteringChildren, i, x);
              }
            }
            return { animation: L, options: k };
          })
        );
    }
    if (A.size) {
      const X = {};
      if (typeof m.initial != "boolean") {
        const w = ri(i, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        w && w.transition && (X.transition = w.transition);
      }
      A.forEach((w) => {
        const Z = i.getBaseTarget(w),
          q = i.getValue(w);
        q && (q.liveStyle = !0), (X[w] = Z ?? null);
      }),
        S.push({ animation: X });
    }
    let H = !!S.length;
    return (
      r &&
        (m.initial === !1 || m.initial === m.animate) &&
        !i.manuallyAnimateOnMount &&
        (H = !1),
      (r = !1),
      H ? l(S) : Promise.resolve()
    );
  }
  function y(g, m) {
    if (u[g].isActive === m) return Promise.resolve();
    i.variantChildren?.forEach((S) => S.animationState?.setActive(g, m)),
      (u[g].isActive = m);
    const v = h(g);
    for (const S in u) u[S].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: y,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      u = Gp();
    },
  };
}
function IT(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !X0(l, i) : !1;
}
function da(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Gp() {
  return {
    animate: da(!0),
    whileInView: da(),
    whileHover: da(),
    whileTap: da(),
    whileDrag: da(),
    whileFocus: da(),
    exit: da(),
  };
}
class Jn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class t2 extends Jn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = $T(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    su(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let e2 = 0;
class n2 extends Jn {
  constructor() {
    super(...arguments), (this.id = e2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const a2 = { animation: { Feature: t2 }, exit: { Feature: n2 } };
function xl(i, l, u, r = { passive: !0 }) {
  return i.addEventListener(l, u, r), () => i.removeEventListener(l, u);
}
function Dl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const i2 = (i) => (l) => Yc(l) && i(l, Dl(l));
function ml(i, l, u, r) {
  return xl(i, l, i2(u), r);
}
const Z0 = 1e-4,
  l2 = 1 - Z0,
  s2 = 1 + Z0,
  K0 = 0.01,
  u2 = 0 - K0,
  o2 = 0 + K0;
function le(i) {
  return i.max - i.min;
}
function r2(i, l, u) {
  return Math.abs(i - l) <= u;
}
function Xp(i, l, u, r = 0.5) {
  (i.origin = r),
    (i.originPoint = Rt(l.min, l.max, i.origin)),
    (i.scale = le(u) / le(l)),
    (i.translate = Rt(u.min, u.max, i.origin) - i.originPoint),
    ((i.scale >= l2 && i.scale <= s2) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= u2 && i.translate <= o2) || isNaN(i.translate)) &&
      (i.translate = 0);
}
function pl(i, l, u, r) {
  Xp(i.x, l.x, u.x, r ? r.originX : void 0),
    Xp(i.y, l.y, u.y, r ? r.originY : void 0);
}
function Qp(i, l, u) {
  (i.min = u.min + l.min), (i.max = i.min + le(l));
}
function c2(i, l, u) {
  Qp(i.x, l.x, u.x), Qp(i.y, l.y, u.y);
}
function Zp(i, l, u) {
  (i.min = l.min - u.min), (i.max = i.min + le(l));
}
function yl(i, l, u) {
  Zp(i.x, l.x, u.x), Zp(i.y, l.y, u.y);
}
function Le(i) {
  return [i("x"), i("y")];
}
const J0 = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  Kp = (i, l) => Math.abs(i - l);
function f2(i, l) {
  const u = Kp(i.x, l.x),
    r = Kp(i.y, l.y);
  return Math.sqrt(u ** 2 + r ** 2);
}
class k0 {
  constructor(
    l,
    u,
    {
      transformPagePoint: r,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: h = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const A = Gr(this.lastMoveEventInfo, this.history),
          N = this.startEvent !== null,
          B = f2(A.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!N && !B) return;
        const { point: H } = A,
          { timestamp: X } = te;
        this.history.push({ ...H, timestamp: X });
        const { onStart: w, onMove: Z } = this.handlers;
        N ||
          (w && w(this.lastMoveEvent, A),
          (this.startEvent = this.lastMoveEvent)),
          Z && Z(this.lastMoveEvent, A);
      }),
      (this.handlePointerMove = (A, N) => {
        (this.lastMoveEvent = A),
          (this.lastMoveEventInfo = Yr(N, this.transformPagePoint)),
          Ot.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (A, N) => {
        this.end();
        const { onEnd: B, onSessionEnd: H, resumeAnimation: X } = this.handlers;
        if (
          (this.dragSnapToOrigin && X && X(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Gr(
          A.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Yr(N, this.transformPagePoint),
          this.history
        );
        this.startEvent && B && B(A, w), H && H(A, w);
      }),
      !Yc(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = u),
      (this.transformPagePoint = r),
      (this.distanceThreshold = h),
      (this.contextWindow = c || window);
    const y = Dl(l),
      g = Yr(y, this.transformPagePoint),
      { point: m } = g,
      { timestamp: v } = te;
    this.history = [{ ...m, timestamp: v }];
    const { onSessionStart: S } = u;
    S && S(l, Gr(g, this.history)),
      (this.removeListeners = Al(
        ml(this.contextWindow, "pointermove", this.handlePointerMove),
        ml(this.contextWindow, "pointerup", this.handlePointerUp),
        ml(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Zn(this.updatePoint);
  }
}
function Yr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function Jp(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Gr({ point: i }, l) {
  return {
    point: i,
    delta: Jp(i, F0(l)),
    offset: Jp(i, h2(l)),
    velocity: d2(l, 0.1),
  };
}
function h2(i) {
  return i[0];
}
function F0(i) {
  return i[i.length - 1];
}
function d2(i, l) {
  if (i.length < 2) return { x: 0, y: 0 };
  let u = i.length - 1,
    r = null;
  const c = F0(i);
  for (; u >= 0 && ((r = i[u]), !(c.timestamp - r.timestamp > Fe(l))); ) u--;
  if (!r) return { x: 0, y: 0 };
  const d = He(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function m2(i, { min: l, max: u }, r) {
  return (
    l !== void 0 && i < l
      ? (i = r ? Rt(l, i, r.min) : Math.max(i, l))
      : u !== void 0 && i > u && (i = r ? Rt(u, i, r.max) : Math.min(i, u)),
    i
  );
}
function kp(i, l, u) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0,
  };
}
function p2(i, { top: l, left: u, bottom: r, right: c }) {
  return { x: kp(i.x, u, c), y: kp(i.y, l, r) };
}
function Fp(i, l) {
  let u = l.min - i.min,
    r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([u, r] = [r, u]), { min: u, max: r };
}
function y2(i, l) {
  return { x: Fp(i.x, l.x), y: Fp(i.y, l.y) };
}
function g2(i, l) {
  let u = 0.5;
  const r = le(i),
    c = le(l);
  return (
    c > r
      ? (u = gl(l.min, l.max - r, i.min))
      : r > c && (u = gl(i.min, i.max - c, l.min)),
    gn(0, 1, u)
  );
}
function v2(i, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - i.min),
    l.max !== void 0 && (u.max = l.max - i.min),
    u
  );
}
const pc = 0.35;
function S2(i = pc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = pc),
    { x: Wp(i, "left", "right"), y: Wp(i, "top", "bottom") }
  );
}
function Wp(i, l, u) {
  return { min: Pp(i, l), max: Pp(i, u) };
}
function Pp(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const b2 = new WeakMap();
class T2 {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ht()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (S) => {
        const { dragSnapToOrigin: A } = this.getProps();
        A ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(Dl(S).point);
      },
      h = (S, A) => {
        const { drag: N, dragPropagation: B, onDragStart: H } = this.getProps();
        if (
          N &&
          !B &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Db(N)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = S),
          (this.latestPanInfo = A),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Le((w) => {
            let Z = this.getAxisMotionValue(w).get() || 0;
            if (We.test(Z)) {
              const { projection: q } = this.visualElement;
              if (q && q.layout) {
                const et = q.layout.layoutBox[w];
                et && (Z = le(et) * (parseFloat(Z) / 100));
              }
            }
            this.originPoint[w] = Z;
          }),
          H && Ot.postRender(() => H(S, A)),
          dc(this.visualElement, "transform");
        const { animationState: X } = this.visualElement;
        X && X.setActive("whileDrag", !0);
      },
      y = (S, A) => {
        (this.latestPointerEvent = S), (this.latestPanInfo = A);
        const {
          dragPropagation: N,
          dragDirectionLock: B,
          onDirectionLock: H,
          onDrag: X,
        } = this.getProps();
        if (!N && !this.openDragLock) return;
        const { offset: w } = A;
        if (B && this.currentDirection === null) {
          (this.currentDirection = x2(w)),
            this.currentDirection !== null && H && H(this.currentDirection);
          return;
        }
        this.updateAxis("x", A.point, w),
          this.updateAxis("y", A.point, w),
          this.visualElement.render(),
          X && X(S, A);
      },
      g = (S, A) => {
        (this.latestPointerEvent = S),
          (this.latestPanInfo = A),
          this.stop(S, A),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      m = () =>
        Le(
          (S) =>
            this.getAnimationState(S) === "paused" &&
            this.getAxisMotionValue(S).animation?.play()
        ),
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new k0(
      l,
      {
        onSessionStart: d,
        onStart: h,
        onMove: y,
        onSessionEnd: g,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: r,
        contextWindow: J0(this.visualElement),
      }
    );
  }
  stop(l, u) {
    const r = l || this.latestPointerEvent,
      c = u || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !r)) return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: y } = this.getProps();
    y && Ot.postRender(() => y(r, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, r) {
    const { drag: c } = this.getProps();
    if (!r || !ks(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (h = m2(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: u } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    l && li(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
      ? (this.constraints = p2(r.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = S2(u)),
      c !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Le((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = v2(r.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !li(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = AT(r, c.root, this.visualElement.getTransformPagePoint());
    let h = y2(c.layout.layoutBox, d);
    if (u) {
      const y = u(bT(h));
      (this.hasMutatedConstraints = !!y), y && (h = N0(y));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: y,
      } = this.getProps(),
      g = this.constraints || {},
      m = Le((v) => {
        if (!ks(v, u, this.currentDirection)) return;
        let S = (g && g[v]) || {};
        h && (S = { min: 0, max: 0 });
        const A = c ? 200 : 1e6,
          N = c ? 40 : 1e7,
          B = {
            type: "inertia",
            velocity: r ? l[v] : 0,
            bounceStiffness: A,
            bounceDamping: N,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...S,
          };
        return this.startAxisValueAnimation(v, B);
      });
    return Promise.all(m).then(y);
  }
  startAxisValueAnimation(l, u) {
    const r = this.getAxisMotionValue(l);
    return (
      dc(this.visualElement, l), r.start(Pc(l, r, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Le((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Le((l) => this.getAxisMotionValue(l).animation?.pause());
  }
  getAnimationState(l) {
    return this.getAxisMotionValue(l).animation?.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[u];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Le((u) => {
      const { drag: r } = this.getProps();
      if (!ks(u, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: y } = c.layout.layoutBox[u];
        d.set(l[u] - Rt(h, y, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!li(u) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Le((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const g = y.get();
        c[h] = g2({ min: g, max: g }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Le((h) => {
        if (!ks(h, l, null)) return;
        const y = this.getAxisMotionValue(h),
          { min: g, max: m } = this.constraints[h];
        y.set(Rt(g, m, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    b2.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = ml(l, "pointerdown", (g) => {
        const { drag: m, dragListener: v = !0 } = this.getProps();
        m && v && this.start(g);
      }),
      r = () => {
        const { dragConstraints: g } = this.getProps();
        li(g) && g.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Ot.read(r);
    const h = xl(window, "resize", () => this.scalePositionWithinConstraints()),
      y = c.addEventListener(
        "didUpdate",
        ({ delta: g, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (Le((v) => {
              const S = this.getAxisMotionValue(v);
              S &&
                ((this.originPoint[v] += g[v].translate),
                S.set(S.get() + g[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), y && y();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = pc,
        dragMomentum: y = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: y,
    };
  }
}
function ks(i, l, u) {
  return (l === !0 || l === i) && (u === null || u === i);
}
function x2(i, l = 10) {
  let u = null;
  return Math.abs(i.y) > l ? (u = "y") : Math.abs(i.x) > l && (u = "x"), u;
}
class A2 extends Jn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = we),
      (this.removeListeners = we),
      (this.controls = new T2(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || we);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $p = (i) => (l, u) => {
  i && Ot.postRender(() => i(l, u));
};
class E2 extends Jn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = we);
  }
  onPointerDown(l) {
    this.session = new k0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: J0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: $p(l),
      onStart: $p(u),
      onMove: r,
      onEnd: (d, h) => {
        delete this.session, c && Ot.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ml(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ip(i, l) {
  return l.max === l.min ? 0 : (i / (l.max - l.min)) * 100;
}
const cl = {
    correct: (i, l) => {
      if (!l.target) return i;
      if (typeof i == "string")
        if (nt.test(i)) i = parseFloat(i);
        else return i;
      const u = Ip(i, l.target.x),
        r = Ip(i, l.target.y);
      return `${u}% ${r}%`;
    },
  },
  M2 = {
    correct: (i, { treeScale: l, projectionDelta: u }) => {
      const r = i,
        c = Kn.parse(i);
      if (c.length > 5) return r;
      const d = Kn.createTransformer(i),
        h = typeof c[0] != "number" ? 1 : 0,
        y = u.x.scale * l.x,
        g = u.y.scale * l.y;
      (c[0 + h] /= y), (c[1 + h] /= g);
      const m = Rt(y, g, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= m),
        typeof c[3 + h] == "number" && (c[3 + h] /= m),
        d(c)
      );
    },
  };
let Xr = !1;
class D2 extends Q.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    kb(C2),
      d &&
        (u.group && u.group.add(d),
        r && r.register && c && r.register(d),
        Xr && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($s.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: h } = r;
    return (
      h &&
        ((h.isPresent = d),
        (Xr = !0),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              Ot.postRender(() => {
                const y = h.getStack();
                (!y || !y.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      qc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    (Xr = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function W0(i) {
  const [l, u] = v0(),
    r = Q.useContext(vc);
  return U.jsx(D2, {
    ...i,
    layoutGroup: r,
    switchLayoutGroup: Q.useContext(R0),
    isPresent: l,
    safeToRemove: u,
  });
}
const C2 = {
  borderRadius: {
    ...cl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: cl,
  borderTopRightRadius: cl,
  borderBottomLeftRadius: cl,
  borderBottomRightRadius: cl,
  boxShadow: M2,
};
function z2(i, l, u) {
  const r = ne(i) ? i : ci(i);
  return r.start(Pc("", r, l, u)), r.animation;
}
const O2 = (i, l) => i.depth - l.depth;
class R2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Tc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    xc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(O2),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function V2(i, l) {
  const u = me.now(),
    r = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (Zn(r), i(d - l));
    };
  return Ot.setup(r, !0), () => Zn(r);
}
const P0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  N2 = P0.length,
  ty = (i) => (typeof i == "string" ? parseFloat(i) : i),
  ey = (i) => typeof i == "number" || nt.test(i);
function _2(i, l, u, r, c, d) {
  c
    ? ((i.opacity = Rt(0, u.opacity ?? 1, j2(r))),
      (i.opacityExit = Rt(l.opacity ?? 1, 0, U2(r))))
    : d && (i.opacity = Rt(l.opacity ?? 1, u.opacity ?? 1, r));
  for (let h = 0; h < N2; h++) {
    const y = `border${P0[h]}Radius`;
    let g = ny(l, y),
      m = ny(u, y);
    if (g === void 0 && m === void 0) continue;
    g || (g = 0),
      m || (m = 0),
      g === 0 || m === 0 || ey(g) === ey(m)
        ? ((i[y] = Math.max(Rt(ty(g), ty(m), r), 0)),
          (We.test(m) || We.test(g)) && (i[y] += "%"))
        : (i[y] = m);
  }
  (l.rotate || u.rotate) && (i.rotate = Rt(l.rotate || 0, u.rotate || 0, r));
}
function ny(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const j2 = $0(0, 0.5, Hy),
  U2 = $0(0.5, 0.95, we);
function $0(i, l, u) {
  return (r) => (r < i ? 0 : r > l ? 1 : u(gl(i, l, r)));
}
function ay(i, l) {
  (i.min = l.min), (i.max = l.max);
}
function Be(i, l) {
  ay(i.x, l.x), ay(i.y, l.y);
}
function iy(i, l) {
  (i.translate = l.translate),
    (i.scale = l.scale),
    (i.originPoint = l.originPoint),
    (i.origin = l.origin);
}
function ly(i, l, u, r, c) {
  return (
    (i -= l), (i = au(i, 1 / u, r)), c !== void 0 && (i = au(i, 1 / c, r)), i
  );
}
function B2(i, l = 0, u = 1, r = 0.5, c, d = i, h = i) {
  if (
    (We.test(l) &&
      ((l = parseFloat(l)), (l = Rt(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let y = Rt(d.min, d.max, r);
  i === d && (y -= l),
    (i.min = ly(i.min, l, u, y, c)),
    (i.max = ly(i.max, l, u, y, c));
}
function sy(i, l, [u, r, c], d, h) {
  B2(i, l[u], l[r], l[c], l.scale, d, h);
}
const L2 = ["x", "scaleX", "originX"],
  H2 = ["y", "scaleY", "originY"];
function uy(i, l, u, r) {
  sy(i.x, l, L2, u ? u.x : void 0, r ? r.x : void 0),
    sy(i.y, l, H2, u ? u.y : void 0, r ? r.y : void 0);
}
function oy(i) {
  return i.translate === 0 && i.scale === 1;
}
function I0(i) {
  return oy(i.x) && oy(i.y);
}
function ry(i, l) {
  return i.min === l.min && i.max === l.max;
}
function w2(i, l) {
  return ry(i.x, l.x) && ry(i.y, l.y);
}
function cy(i, l) {
  return (
    Math.round(i.min) === Math.round(l.min) &&
    Math.round(i.max) === Math.round(l.max)
  );
}
function tg(i, l) {
  return cy(i.x, l.x) && cy(i.y, l.y);
}
function fy(i) {
  return le(i.x) / le(i.y);
}
function hy(i, l) {
  return (
    i.translate === l.translate &&
    i.scale === l.scale &&
    i.originPoint === l.originPoint
  );
}
class q2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Tc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (xc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let r;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, u) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        u && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: r } = l;
      u.onExitComplete && u.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Y2(i, l, u) {
  let r = "";
  const c = i.x.translate / l.x,
    d = i.y.translate / l.y,
    h = u?.z || 0;
  if (
    ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: m,
      rotate: v,
      rotateX: S,
      rotateY: A,
      skewX: N,
      skewY: B,
    } = u;
    m && (r = `perspective(${m}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      S && (r += `rotateX(${S}deg) `),
      A && (r += `rotateY(${A}deg) `),
      N && (r += `skewX(${N}deg) `),
      B && (r += `skewY(${B}deg) `);
  }
  const y = i.x.scale * l.x,
    g = i.y.scale * l.y;
  return (y !== 1 || g !== 1) && (r += `scale(${y}, ${g})`), r || "none";
}
const Qr = ["", "X", "Y", "Z"],
  G2 = 1e3;
let X2 = 0;
function Zr(i, l, u, r) {
  const { latestValues: c } = l;
  c[i] && ((u[i] = c[i]), l.setStaticValue(i, 0), r && (r[i] = 0));
}
function eg(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: l } = i.options;
  if (!l) return;
  const u = q0(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Ot, !(c || d));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && eg(r);
}
function ng({
  attachResizeListener: i,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, y = l?.()) {
      (this.id = X2++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(K2),
            this.nodes.forEach(W2),
            this.nodes.forEach(P2),
            this.nodes.forEach(J2);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = y ? y.root || y : this),
        (this.path = y ? [...y.path, y] : []),
        (this.parent = y),
        (this.depth = y ? y.depth + 1 : 0);
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new R2());
    }
    addEventListener(h, y) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new Mc()),
        this.eventHandlers.get(h).add(y)
      );
    }
    notifyListeners(h, ...y) {
      const g = this.eventHandlers.get(h);
      g && g.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h) {
      if (this.instance) return;
      (this.isSVG = g0(h) && !Nb(h)), (this.instance = h);
      const { layoutId: y, layout: g, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0),
        i)
      ) {
        let v,
          S = 0;
        const A = () => (this.root.updateBlockedByResize = !1);
        Ot.read(() => {
          S = window.innerWidth;
        }),
          i(h, () => {
            const N = window.innerWidth;
            N !== S &&
              ((S = N),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = V2(A, 250)),
              $s.hasAnimatedSinceResize &&
                (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(py)));
          });
      }
      y && this.root.registerSharedNode(y, this),
        this.options.animate !== !1 &&
          m &&
          (y || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: S,
              hasRelativeLayoutChanged: A,
              layout: N,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const B =
                  this.options.transition || m.getDefaultTransition() || nx,
                { onLayoutAnimationStart: H, onLayoutAnimationComplete: X } =
                  m.getProps(),
                w = !this.targetLayout || !tg(this.targetLayout, N),
                Z = !S && A;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                Z ||
                (S && (w || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const q = { ...Hc(B, "layout"), onPlay: H, onComplete: X };
                (m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((q.delay = 0), (q.type = !1)),
                  this.startAnimation(q),
                  this.setAnimationOrigin(v, Z);
              } else
                S || py(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = N;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Zn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach($2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          eg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        (S.shouldResetTransform = !0),
          S.updateScroll("snapshot"),
          S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: y, layout: g } = this.options;
      if (y === void 0 && !g) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(dy);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(my);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(F2),
            this.nodes.forEach(Q2),
            this.nodes.forEach(Z2))
          : this.nodes.forEach(my),
        this.clearAllSnapshots();
      const y = me.now();
      (te.delta = gn(0, 1e3 / 60, y - te.timestamp)),
        (te.timestamp = y),
        (te.isProcessing = !0),
        _r.update.process(te),
        _r.preRender.process(te),
        _r.render.process(te),
        (te.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), qc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(k2), this.sharedNodes.forEach(I2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ot.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ot.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !le(this.snapshot.measuredBox.x) &&
          !le(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ht()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y &&
        y.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (y = !1),
        y && this.instance)
      ) {
        const g = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: g,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        y = this.projectionDelta && !I0(this.projectionDelta),
        g = this.getTransformTemplate(),
        m = g ? g(this.latestValues, "") : void 0,
        v = m !== this.prevTransformTemplateValue;
      h &&
        this.instance &&
        (y || ma(this.latestValues) || v) &&
        (c(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let g = this.removeElementScroll(y);
      return (
        h && (g = this.removeTransform(g)),
        ax(g),
        {
          animationId: this.root.animationId,
          measuredBox: y,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h) return Ht();
      const y = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ix))) {
        const { scroll: m } = this.root;
        m && (si(y.x, m.offset.x), si(y.y, m.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      const y = Ht();
      if ((Be(y, h), this.scroll?.wasRoot)) return y;
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g],
          { scroll: v, options: S } = m;
        m !== this.root &&
          v &&
          S.layoutScroll &&
          (v.wasRoot && Be(y, h), si(y.x, v.offset.x), si(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(h, y = !1) {
      const g = Ht();
      Be(g, h);
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        !y &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          ui(g, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          ma(v.latestValues) && ui(g, v.latestValues);
      }
      return ma(this.latestValues) && ui(g, this.latestValues), g;
    }
    removeTransform(h) {
      const y = Ht();
      Be(y, h);
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        if (!m.instance || !ma(m.latestValues)) continue;
        rc(m.latestValues) && m.updateSnapshot();
        const v = Ht(),
          S = m.measurePageBox();
        Be(v, S),
          uy(y, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v);
      }
      return ma(this.latestValues) && uy(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== te.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== y;
      if (
        !(
          h ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: S } = this.options;
      if (!(!this.layout || !(v || S))) {
        if (
          ((this.resolvedRelativeTargetAt = te.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const A = this.getClosestProjectingParent();
          A && A.layout && this.animationProgress !== 1
            ? ((this.relativeParent = A),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ht()),
              (this.relativeTargetOrigin = Ht()),
              yl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                A.layout.layoutBox
              ),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ht()), (this.targetWithTransforms = Ht())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              c2(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Be(this.target, this.layout.layoutBox),
              j0(this.target, this.targetDelta))
            : Be(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const A = this.getClosestProjectingParent();
          A &&
          !!A.resumingFrom == !!this.resumingFrom &&
          !A.options.layoutScroll &&
          A.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = A),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ht()),
              (this.relativeTargetOrigin = Ht()),
              yl(this.relativeTargetOrigin, this.target, A.target),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          rc(this.parent.latestValues) ||
          _0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const h = this.getLead(),
        y = !!this.resumingFrom || this !== h;
      let g = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1),
        y &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === te.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: m, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || v))
      )
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        A = this.treeScale.y;
      xT(this.layoutCorrected, this.treeScale, this.path, y),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = Ht()));
      const { target: N } = h;
      if (!N) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (iy(this.prevProjectionDelta.x, this.projectionDelta.x),
          iy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        pl(this.projectionDelta, this.layoutCorrected, N, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== A ||
          !hy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", N));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if ((this.options.visualElement?.scheduleRender(), h)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = oi()),
        (this.projectionDelta = oi()),
        (this.projectionDeltaWithTransform = oi());
    }
    setAnimationOrigin(h, y = !1) {
      const g = this.snapshot,
        m = g ? g.latestValues : {},
        v = { ...this.latestValues },
        S = oi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !y);
      const A = Ht(),
        N = g ? g.source : void 0,
        B = this.layout ? this.layout.source : void 0,
        H = N !== B,
        X = this.getStack(),
        w = !X || X.members.length <= 1,
        Z = !!(H && !w && this.options.crossfade === !0 && !this.path.some(ex));
      this.animationProgress = 0;
      let q;
      (this.mixTargetDelta = (et) => {
        const W = et / 1e3;
        yy(S.x, h.x, W),
          yy(S.y, h.y, W),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (yl(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            tx(this.relativeTarget, this.relativeTargetOrigin, A, W),
            q && w2(this.relativeTarget, q) && (this.isProjectionDirty = !1),
            q || (q = Ht()),
            Be(q, this.relativeTarget)),
          H &&
            ((this.animationValues = v), _2(v, m, this.latestValues, W, Z, w)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = W);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Zn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ot.update(() => {
          ($s.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ci(0)),
            (this.currentAnimation = z2(this.motionValue, [0, 1e3], {
              ...h,
              velocity: 0,
              isSync: !0,
              onUpdate: (y) => {
                this.mixTargetDelta(y), h.onUpdate && h.onUpdate(y);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(G2),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: y,
        target: g,
        layout: m,
        latestValues: v,
      } = h;
      if (!(!y || !g || !m)) {
        if (
          this !== h &&
          this.layout &&
          m &&
          ag(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          g = this.target || Ht();
          const S = le(this.layout.layoutBox.x);
          (g.x.min = h.target.x.min), (g.x.max = g.x.min + S);
          const A = le(this.layout.layoutBox.y);
          (g.y.min = h.target.y.min), (g.y.max = g.y.min + A);
        }
        Be(y, g),
          ui(y, v),
          pl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new q2()),
        this.sharedNodes.get(h).add(y);
      const m = y.options.initialPromotionConfig;
      y.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(y)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: g } = {}) {
      const m = this.getStack();
      m && m.promote(this, g),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let y = !1;
      const { latestValues: g } = h;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (y = !0),
        !y)
      )
        return;
      const m = {};
      g.z && Zr("z", h, m, this.animationValues);
      for (let v = 0; v < Qr.length; v++)
        Zr(`rotate${Qr[v]}`, h, m, this.animationValues),
          Zr(`skew${Qr[v]}`, h, m, this.animationValues);
      h.render();
      for (const v in m)
        h.setStaticValue(v, m[v]),
          this.animationValues && (this.animationValues[v] = m[v]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (h.visibility = ""),
          (h.opacity = ""),
          (h.pointerEvents = Ps(y?.pointerEvents) || ""),
          (h.transform = g ? g(this.latestValues, "") : "none");
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId &&
          ((h.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (h.pointerEvents = Ps(y?.pointerEvents) || "")),
          this.hasProjected &&
            !ma(this.latestValues) &&
            ((h.transform = g ? g({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      h.visibility = "";
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let S = Y2(this.projectionDeltaWithTransform, this.treeScale, v);
      g && (S = g(v, S)), (h.transform = S);
      const { x: A, y: N } = this.projectionDelta;
      (h.transformOrigin = `${A.origin * 100}% ${N.origin * 100}% 0`),
        m.animationValues
          ? (h.opacity =
              m === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (h.opacity =
              m === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const B in Tl) {
        if (v[B] === void 0) continue;
        const { correct: H, applyTo: X, isCSSVariable: w } = Tl[B],
          Z = S === "none" ? v[B] : H(v[B], m);
        if (X) {
          const q = X.length;
          for (let et = 0; et < q; et++) h[X[et]] = Z;
        } else
          w ? (this.options.visualElement.renderState.vars[B] = Z) : (h[B] = Z);
      }
      this.options.layoutId &&
        (h.pointerEvents = m === this ? Ps(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()),
        this.root.nodes.forEach(dy),
        this.root.sharedNodes.clear();
    }
  };
}
function Q2(i) {
  i.updateLayout();
}
function Z2(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: r } = i.layout,
      { animationType: c } = i.options,
      d = l.source !== i.layout.source;
    c === "size"
      ? Le((v) => {
          const S = d ? l.measuredBox[v] : l.layoutBox[v],
            A = le(S);
          (S.min = u[v].min), (S.max = S.min + A);
        })
      : ag(c, l.layoutBox, u) &&
        Le((v) => {
          const S = d ? l.measuredBox[v] : l.layoutBox[v],
            A = le(u[v]);
          (S.max = S.min + A),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[v].max = i.relativeTarget[v].min + A));
        });
    const h = oi();
    pl(h, u, l.layoutBox);
    const y = oi();
    d ? pl(y, i.applyTransform(r, !0), l.measuredBox) : pl(y, u, l.layoutBox);
    const g = !I0(h);
    let m = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: S, layout: A } = v;
        if (S && A) {
          const N = Ht();
          yl(N, l.layoutBox, S.layoutBox);
          const B = Ht();
          yl(B, u, A.layoutBox),
            tg(N, B) || (m = !0),
            v.options.layoutRoot &&
              ((i.relativeTarget = B),
              (i.relativeTargetOrigin = N),
              (i.relativeParent = v));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: y,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: m,
    });
  } else if (i.isLead()) {
    const { onExitComplete: u } = i.options;
    u && u();
  }
  i.options.transition = void 0;
}
function K2(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function J2(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function k2(i) {
  i.clearSnapshot();
}
function dy(i) {
  i.clearMeasurements();
}
function my(i) {
  i.isLayoutDirty = !1;
}
function F2(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    i.resetTransform();
}
function py(i) {
  i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0);
}
function W2(i) {
  i.resolveTargetDelta();
}
function P2(i) {
  i.calcProjection();
}
function $2(i) {
  i.resetSkewAndRotation();
}
function I2(i) {
  i.removeLeadSnapshot();
}
function yy(i, l, u) {
  (i.translate = Rt(l.translate, 0, u)),
    (i.scale = Rt(l.scale, 1, u)),
    (i.origin = l.origin),
    (i.originPoint = l.originPoint);
}
function gy(i, l, u, r) {
  (i.min = Rt(l.min, u.min, r)), (i.max = Rt(l.max, u.max, r));
}
function tx(i, l, u, r) {
  gy(i.x, l.x, u.x, r), gy(i.y, l.y, u.y, r);
}
function ex(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const nx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  vy = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  Sy = vy("applewebkit/") && !vy("chrome/") ? Math.round : we;
function by(i) {
  (i.min = Sy(i.min)), (i.max = Sy(i.max));
}
function ax(i) {
  by(i.x), by(i.y);
}
function ag(i, l, u) {
  return (
    i === "position" || (i === "preserve-aspect" && !r2(fy(l), fy(u), 0.2))
  );
}
function ix(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const lx = ng({
    attachResizeListener: (i, l) => xl(i, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Kr = { current: void 0 },
  ig = ng({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!Kr.current) {
        const i = new lx({});
        i.mount(window), i.setOptions({ layoutScroll: !0 }), (Kr.current = i);
      }
      return Kr.current;
    },
    resetTransform: (i, l) => {
      i.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  sx = {
    pan: { Feature: E2 },
    drag: { Feature: A2, ProjectionNode: ig, MeasureLayout: W0 },
  };
function Ty(i, l, u) {
  const { props: r } = i;
  i.animationState &&
    r.whileHover &&
    i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = r[c];
  d && Ot.postRender(() => d(l, Dl(l)));
}
class ux extends Jn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = Cb(
        l,
        (u, r) => (Ty(this.node, r, "Start"), (c) => Ty(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class ox extends Jn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Al(
      xl(this.node.current, "focus", () => this.onFocus()),
      xl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function xy(i, l, u) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    r.whileTap &&
    i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = r[c];
  d && Ot.postRender(() => d(l, Dl(l)));
}
class rx extends Jn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = Vb(
        l,
        (u, r) => (
          xy(this.node, r, "Start"),
          (c, { success: d }) => xy(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const yc = new WeakMap(),
  Jr = new WeakMap(),
  cx = (i) => {
    const l = yc.get(i.target);
    l && l(i);
  },
  fx = (i) => {
    i.forEach(cx);
  };
function hx({ root: i, ...l }) {
  const u = i || document;
  Jr.has(u) || Jr.set(u, {});
  const r = Jr.get(u),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(fx, { root: i, ...l })), r[c];
}
function dx(i, l, u) {
  const r = hx(l);
  return (
    yc.set(i, u),
    r.observe(i),
    () => {
      yc.delete(i), r.unobserve(i);
    }
  );
}
const mx = { some: 0, all: 1 };
class px extends Jn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: r, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : mx[c],
      },
      y = (g) => {
        const { isIntersecting: m } = g;
        if (
          this.isInView === m ||
          ((this.isInView = m), d && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: v, onViewportLeave: S } = this.node.getProps(),
          A = m ? v : S;
        A && A(g);
      };
    return dx(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(yx(l, u)) && this.startObserver();
  }
  unmount() {}
}
function yx({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (u) => i[u] !== l[u];
}
const gx = {
    inView: { Feature: px },
    tap: { Feature: rx },
    focus: { Feature: ox },
    hover: { Feature: ux },
  },
  vx = { layout: { ProjectionNode: ig, MeasureLayout: W0 } },
  Sx = { ...a2, ...gx, ...sx, ...vx },
  ai = ST(Sx, NT);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bx = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Tx = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, r) =>
      r ? r.toUpperCase() : u.toLowerCase()
    ),
  Ay = (i) => {
    const l = Tx(i);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  lg = (...i) =>
    i
      .filter((l, u, r) => !!l && l.trim() !== "" && r.indexOf(l) === u)
      .join(" ")
      .trim(),
  xx = (i) => {
    for (const l in i)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ax = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = Q.forwardRef(
  (
    {
      color: i = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: r,
      className: c = "",
      children: d,
      iconNode: h,
      ...y
    },
    g
  ) =>
    Q.createElement(
      "svg",
      {
        ref: g,
        ...Ax,
        width: l,
        height: l,
        stroke: i,
        strokeWidth: r ? (Number(u) * 24) / Number(l) : u,
        className: lg("lucide", c),
        ...(!d && !xx(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...h.map(([m, v]) => Q.createElement(m, v)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qe = (i, l) => {
  const u = Q.forwardRef(({ className: r, ...c }, d) =>
    Q.createElement(Ex, {
      ref: d,
      iconNode: l,
      className: lg(`lucide-${bx(Ay(i))}`, `lucide-${i}`, r),
      ...c,
    })
  );
  return (u.displayName = Ay(i)), u;
};
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mx = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Dx = Qe("arrow-right", Mx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  kr = Qe("check", Cx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zx = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  Ox = Qe("clock", zx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Vx = Qe("menu", Rx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nx = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  _x = Qe("message-circle", Nx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = [
    ["path", { d: "M13 21h8", key: "1jsn5i" }],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  Ux = Qe("pen-line", jx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bx = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Ey = Qe("shield", Bx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  Hx = Qe("sparkles", Lx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wx = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Fr = Qe("star", wx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Yx = Qe("x", qx);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gx = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  My = Qe("zap", Gx),
  Dy = [
    { href: "#features", label: "Funcionalidades" },
    { href: "#testmonials", label: "Clientes" },
    { href: "#pricing", label: "Planos" },
    { href: "#faq", label: "Dúvidas" },
  ];
function Xx() {
  const [i, l] = Q.useState(!1);
  return U.jsxs("div", {
    className: "bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30",
    children: [
      U.jsxs("header", {
        className: "sticky top-0 z-40 border-b border-white/5 bg-slate-950",
        children: [
          U.jsxs("div", {
            className:
              "mx-auto max-w-6xl px-4 py-4 flex items-center justify-between",
            children: [
              U.jsx("a", {
                href: "#home",
                className: "flex items-center gap-2",
                children: U.jsx("span", {
                  className:
                    "font-extrabold tracking-tight tracking-widest text-fuchsia-400",
                  children: "Brandify",
                }),
              }),
              U.jsx("nav", {
                className: "hidden md:flex items-center gap-6 text-sm",
                children: Dy.map((u) =>
                  U.jsx(
                    "a",
                    {
                      href: u.href,
                      className: "hover:text-fuchsia-300 transition",
                      children: u.label,
                    },
                    u.href
                  )
                ),
              }),
              U.jsx("button", {
                className: "md:hidden p-2 rounded-lg transition",
                onClick: () => l(!0),
                children: U.jsx(Vx, { className: "size-6" }),
              }),
            ],
          }),
          U.jsx(Yb, {
            children:
              i &&
              U.jsx(ai.div, {
                className:
                  "md:hidden fixed inset-0 bg-black/60 flex justify-end",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => l(!1),
                children: U.jsxs(ai.div, {
                  className:
                    "h-full w-60 bg-slate-900 border-l border-white/10 p-6",
                  initial: { x: 300 },
                  animate: { x: 0 },
                  exit: { x: 300 },
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                  onClick: (u) => u.stopPropagation(),
                  children: [
                    U.jsxs("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [
                        U.jsx("span", {
                          className:
                            "tracking-widest font-extrabold text-fuchsia-400",
                          children: "Brandify",
                        }),
                        U.jsx("button", {
                          className: "p-2 rounded-lg transition",
                          onClick: () => l(!1),
                          children: U.jsx(Yx, { className: "size-6" }),
                        }),
                      ],
                    }),
                    U.jsx("div", {
                      className: "flex flex-col gap-4",
                      children: Dy.map((u) =>
                        U.jsx(
                          "a",
                          {
                            href: u.href,
                            className: "text-slate-200",
                            onClick: () => l(!1),
                            children: u.label,
                          },
                          u.href
                        )
                      ),
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
      U.jsx("section", {
        className: "relative overflow-hidden",
        id: "home",
        children: U.jsxs("div", {
          className: "mx-auto max-w-6xl px-4 py-20 relative",
          children: [
            U.jsxs(ai.h1, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1 },
              className: "text-6xl font-extrabold",
              children: [
                "Acelere sua presença online com uma landing page",
                U.jsxs("span", {
                  className:
                    "bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-fuchsia-700",
                  children: [" ", "simples e eficaz"],
                }),
              ],
            }),
            U.jsx(ai.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
              className: "mt-4 text-slate-400 max-w-2xl",
              children:
                "Crie uma presença digital autêntica, com design elegante, performance otimizada e resultados que realmente fazem diferença.",
            }),
            U.jsxs(ai.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "mt-8 flex flex-row gap-3",
              children: [
                U.jsxs("a", {
                  href: "#",
                  className: `inline-flex items-center justify-center gap-2
               rounded-2xl bg-fuchsia-600 px-6 py-3
                font-medium hover:bg-fuchsia-800 transition`,
                  children: [
                    "Comece Agora ",
                    U.jsx(Dx, { className: "size-4" }),
                  ],
                }),
                U.jsx("a", {
                  href: "#",
                  className: `inline-flex items-center justify-center gap-2
              rounded-2xl px-6 py-3 font-medium border 
              border-white/10 hover:bg-white/5 transition`,
                  children: "Ver Recursos",
                }),
              ],
            }),
            U.jsx("div", {
              className:
                "mt-14 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4",
              children: [
                {
                  label: "Velocidade",
                  desc: "Carregamento instantâneo e navegação fluida em qualquer dispositivo.",
                },
                {
                  label: "Segurança",
                  desc: "Seu site protegido com criptografia e práticas modernas de proteção.",
                },
                {
                  label: "Conversão",
                  desc: "Layouts estratégicos que aumentam cliques e resultados de vendas.",
                },
              ].map((u, r) =>
                U.jsxs(
                  ai.div,
                  {
                    className:
                      "rounded-2xl border flex flex-col border-white/10 bg-white/[0.02] p-6",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1, delay: r * 0.5 },
                    children: [
                      U.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          r == 0 &&
                            U.jsx(My, { className: "size-5 text-emerald-400" }),
                          r == 1 &&
                            U.jsx(Ey, { className: "size-5 text-sky-400" }),
                          r == 2 &&
                            U.jsx(Fr, { className: "size-5 text-amber-400" }),
                          U.jsx("div", {
                            className: "font-semibold",
                            children: u.label,
                          }),
                        ],
                      }),
                      U.jsx("p", {
                        className: "text-sm text-slate-400 mt-2",
                        children: u.desc,
                      }),
                    ],
                  },
                  u.label
                )
              ),
            }),
          ],
        }),
      }),
      U.jsxs("section", {
        id: "features",
        className: "mx-auto max-w-6xl px-4 py-8",
        children: [
          U.jsx("h2", {
            className: "text-3xl font-bold",
            children: "Tudo o que você precisa em um só lugar",
          }),
          U.jsx("p", {
            className: "text-slate-300 mt-2 max-w-2xl",
            children:
              "Recursos pensados para ajudar você a construir páginas incríveis, rápidas e totalmente personalizáveis, sem complicações.",
          }),
          U.jsx("div", {
            className:
              "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [
              {
                title: "Design Responsivo",
                desc: "Seu site se adapta perfeitamente a qualquer dispositivo, do celular ao desktop.",
                icon: U.jsx(Hx, { className: "size-5 text-fuchsia-400" }),
              },
              {
                title: "Performance Otimizada",
                desc: "Carregamento rápido com boas práticas de código e otimização de assets.",
                icon: U.jsx(My, { className: "size-5 text-emerald-400" }),
              },
              {
                title: "Segurança Garantida",
                desc: "Proteção de dados e conexões seguras com HTTPS e criptografia.",
                icon: U.jsx(Ey, { className: "size-5 text-sky-400" }),
              },
              {
                title: "SEO Integrado",
                desc: "Apareça nos resultados do Google com técnicas modernas de otimização.",
                icon: U.jsx(Fr, { className: "size-5 text-amber-400" }),
              },
              {
                title: "Fácil Personalização",
                desc: "Edite cores, textos e imagens sem precisar alterar o código-fonte.",
                icon: U.jsx(Ux, { className: "size-5 text-red-400" }),
              },
              {
                title: "Suporte Dedicado",
                desc: "Conte com uma equipe pronta pra te ajudar em cada etapa do projeto.",
                icon: U.jsx(_x, { className: "size-5 text-pink-400" }),
              },
            ].map((u, r) =>
              U.jsxs(
                "div",
                {
                  className:
                    "rounded-2xl border border-white/10 bg-white/[0.02] p-6",
                  children: [
                    U.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        u.icon,
                        U.jsx("p", {
                          className: "font-semibold",
                          children: u.title,
                        }),
                      ],
                    }),
                    U.jsx("p", {
                      className: "text-sm font-slate-400 mt-2",
                      children: u.desc,
                    }),
                  ],
                },
                `${u.title}-${r}`
              )
            ),
          }),
        ],
      }),
      U.jsxs("section", {
        id: "testmonials",
        className: "mx-auto max-w-6xl px-4 py-8",
        children: [
          U.jsx("h2", {
            className: "text-3xl font-bold",
            children: "Quem usou, Aprovou",
          }),
          U.jsx("div", {
            className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
              {
                coment:
                  "A interface ficou incrível! O site carrega rápido e o design é exatamente o que eu queria.",
                person: " — Lucas Ferreira, Desenvolvedor Front-end",
              },
              {
                coment:
                  "Depois que lancei meu site com essa plataforma, as conversões aumentaram em 30%!",
                person: "— Ana Smith, Empreendedora Digital",
              },
              {
                coment:
                  "Fiquei impressionado com a praticidade. Em menos de uma hora, minha landing page estava pronta e otimizada para SEO.",
                person: "— Rodrigo Martins, Desenvolvedor FullStack",
              },
            ].map((u, r) =>
              U.jsxs(
                "blockquote",
                {
                  className: "rounded-2xl border border-white/10 p-6",
                  children: [
                    U.jsx("div", {
                      className: "flex items-center gap-2 text-amber-400",
                      children: Array.from({ length: 5 }).map((c, d) =>
                        U.jsx(Fr, { className: "size-4 fill-current" }, d)
                      ),
                    }),
                    U.jsx("p", {
                      className: "mt-3 text-slate-300",
                      children: u.coment,
                    }),
                    U.jsx("footer", {
                      className: "mt-3 text-sm text-slate-300",
                      children: u.person,
                    }),
                  ],
                },
                `testimonial-${r}`
              )
            ),
          }),
        ],
      }),
      U.jsx("section", {
        id: "pricing",
        className: "mx-auto max-w-6xl px-4 py-8 mb-5",
        children: U.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-center",
          children: [
            U.jsxs("div", {
              children: [
                U.jsx("h2", {
                  className: "text-3xl font-bold",
                  children: "Preço único, Sem Complicação",
                }),
                U.jsx("p", {
                  className: "text-slate-300 mt-6 max-w-2xl",
                  children:
                    "Pague apenas uma vez e tenha acesso a todos os recursos que precisa para lançar, gerenciar e evoluir seu site com facilidade.",
                }),
                U.jsxs("ul", {
                  className: "mt-4 space-y-2 text-sm text-slate-300",
                  children: [
                    U.jsxs("li", {
                      className: "flex items-center gap-2",
                      children: [
                        U.jsx(kr, { className: "size-4 text-emerald-400" }),
                        " Acesso vitalício às atualizações",
                      ],
                    }),
                    U.jsxs("li", {
                      className: "flex items-center gap-2",
                      children: [
                        U.jsx(kr, { className: "size-4 text-emerald-400" }),
                        " Suporte técnico sempre disponível",
                      ],
                    }),
                    U.jsxs("li", {
                      className: "flex items-center gap-2",
                      children: [
                        U.jsx(kr, { className: "size-4 text-emerald-400" }),
                        " Painel simples e intuitivo para gerenciar tudo",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            U.jsxs("div", {
              className:
                "rounded-3xl border border-white/10 bg-white/[0.02] p-8",
              children: [
                U.jsx("div", {
                  className: "text-sm text-slate-400",
                  children: "A partir de",
                }),
                U.jsx("div", {
                  className: "text-5xl font-extrabold mt-2",
                  children: "R$ 199,90",
                }),
                U.jsxs("div", {
                  className:
                    "flex text-sm text-slate-300 mt-4 gap-2 items-center",
                  children: [
                    " ",
                    U.jsx(Ox, { className: "size-4 text-fuchsia-400" }),
                    " Somente Hoje!",
                  ],
                }),
                U.jsx("button", {
                  className:
                    "mt-6 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-700 px-6 py-3 font-medium cursor-pointer transition",
                  children: "Comprar",
                }),
              ],
            }),
          ],
        }),
      }),
      U.jsxs("section", {
        id: "faq",
        className: "mx-auto max-w-6xl px-4 py-8",
        children: [
          U.jsx("h2", {
            className: "text-3xl font-bold",
            children: "Profissional e direto",
          }),
          U.jsx("div", {
            className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
              {
                question:
                  "Preciso saber programar para usar o site da Brandify?",
                response:
                  "Não! A plataforma foi desenvolvida para ser totalmente intuitiva. Você pode personalizar textos, cores e imagens facilmente, sem precisar escrever uma única linha de código.",
              },
              {
                question: "O site é otimizado para dispositivos móveis?",
                response:
                  "Sim. Todos os layouts são responsivos e se adaptam automaticamente a qualquer tamanho de tela, seja celular, tablet ou computador.",
              },
              {
                question: "Terei suporte caso precise de ajuda?",
                response:
                  "Claro! Oferecemos suporte dedicado via chat e e-mail, pronto para te auxiliar em cada etapa da sua jornada digital.",
              },
            ].map((u, r) =>
              U.jsxs(
                "blockquote",
                {
                  className: "rounded-2xl border border-white/10 p-6",
                  children: [
                    U.jsx("h2", {
                      className: "mt-3 text-slate-300 font-extrabold text-2xl",
                      children: u.question,
                    }),
                    U.jsx("p", {
                      className: "mt-3 text-sm text-slate-400",
                      children: u.response,
                    }),
                  ],
                },
                `faq-${r}`
              )
            ),
          }),
        ],
      }),
      U.jsx("footer", {
        className: "border-t border-white/5",
        children: U.jsxs("div", {
          className:
            "mx-auto max-w-6xl px-4 py-8 flex flex-wrap items-center justify-center lg:justify-between md:justify-between gap-4",
          children: [
            U.jsxs("div", {
              children: [
                U.jsx("span", {
                  className: "tracking-widest font-extrabold text-fuchsia-400",
                  children: "Brandify",
                }),
                " ",
                "@ ",
                new Date().getFullYear(),
              ],
            }),
            U.jsxs("div", {
              className:
                "flex flex-wrap gap-4 justify-center items-center lg:justify-between md:justify-between",
              children: [
                U.jsx("a", {
                  href: "#",
                  className: "text-slate-300 hover:text-fuchsia-300 transition",
                  children: "Política de privacidade",
                }),
                U.jsx("a", {
                  href: "#",
                  className: "text-slate-300 hover:text-fuchsia-300 transition",
                  children: "Contato",
                }),
                U.jsx("a", {
                  href: "#",
                  className: "text-slate-300 hover:text-fuchsia-300 transition",
                  children: "Ajuda",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
H1.createRoot(document.getElementById("root")).render(
  U.jsx(Q.StrictMode, { children: U.jsx(Xx, {}) })
);
