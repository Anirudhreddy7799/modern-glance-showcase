"use strict";
(() => {
  var V = Object.defineProperty,
    Z = Object.defineProperties;
  var tt = Object.getOwnPropertyDescriptors;
  var k = Object.getOwnPropertySymbols;
  var et = Object.prototype.hasOwnProperty,
    ot = Object.prototype.propertyIsEnumerable;
  var M = (e, i, t) => i in e ? V(e, i, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }) : e[i] = t,
    C = (e, i) => {
      for (var t in i || (i = {})) et.call(i, t) && M(e, t, i[t]);
      if (k)
        for (var t of k(i)) ot.call(i, t) && M(e, t, i[t]);
      return e;
    },
    P = (e, i) => Z(e, tt(i));
  var R = (e, i, t) => new Promise((l, s) => {
    var f = n => {
        try {
          a(t.next(n));
        } catch (c) {
          s(c);
        }
      },
      r = n => {
        try {
          a(t.throw(n));
        } catch (c) {
          s(c);
        }
      },
      a = n => n.done ? l(n.value) : Promise.resolve(n.value).then(f, r);
    a((t = t.apply(e, i)).next());
  });

  // Determine the target origin based on the environment
  const devTargetOrigin = 'http://localhost:3000';
  const prodTargetOrigin = 'https://anirudhreddy7799.github.io';
  const currentOrigin = window.location.origin;
  const targetOrigin = currentOrigin.includes('localhost') || currentOrigin.includes('app.github.dev') ? devTargetOrigin : prodTargetOrigin;
  
  console.log(`Current Origin: ${currentOrigin}`);
  console.log(`Target Origin: ${targetOrigin}`);

  var U = () => {
    let e = () => {
      let i = document.location.href,
        t = document.querySelector("body"),
        l = new MutationObserver(() => {
          if (i !== document.location.href) {
            console.log(`URL changed from ${i} to ${document.location.href}`);
            i = document.location.href;
            if (window.top) {
              console.log('Posting message to top window');
              window.top.postMessage({
                type: "URL_CHANGED",
                url: document.location.href
              }, targetOrigin);
            }
          }
        });
      t && l.observe(t, {
        childList: !0,
        subtree: !0
      });
    };
    window.addEventListener("load", e);
  };

  var O = e => {
    console.log('Sending message:', e);
    if (window.top) {
      window.top.postMessage(e, targetOrigin);
    }
  };

  var nt = e => {
    let i = window.fetch;
    window.fetch = function(...t) {
      console.log('Fetching:', ...t);
      return R(this, null, function*() {
        var l, s, f;
      });
    };
  };

  // Initialize the observer and message handling
  U();



  // The rest of your existing code continues here...

  var Q = (e, i) => {
    var t;
    return () => {
      t || (t = new Promise((l, s) => {
        var f = n => {
            try {
              r(i.next(n));
            } catch (c) {
              s(c);
            }
          },
          a = n => {
            try {
              r(i.throw(n));
            } catch (c) {
              s(c);
            }
          },
          r = n => n.done ? l(n.value) : Promise.resolve(n.value).then(f, a);
        r((i = i.apply(e, [])).next());
      }));
      return t;
    };
  };

  // More existing code...

  var s = (e, i) => {
    var t;
    return function() {
      var l = this,
        s = arguments;
      return new Promise((f, r) => {
        var a = i => {
            try {
              c(t.next(i));
            } catch (u) {
              r(u);
            }
          },
          n = i => {
            try {
              c(t.throw(i));
            } catch (u) {
              r(u);
            }
          },
          c = i => i.done ? f(i.value) : Promise.resolve(i.value).then(a, n);
        t = i.apply(l, s);
        c(t.next());
      });
    };
  };

  var l = (e, i, t) => {
    if (!i.hasOwnProperty(t)) {
      Object.defineProperty(i, t, {
        enumerable: !0,
        get: () => e[t],
        set: a => {
          e[t] = a;
        }
      });
    }
  };

  // More existing code...

  var a = (e, i) => {
    for (var t in i || (i = {})) et.call(i, t) && M(e, t, i[t]);
    if (k)
      for (var t of k(i)) ot.call(i, t) && M(e, t, i[t]);
    return e;
  };

  var n = (e, i) => {
    var t = {};
    for (var l in e) et.call(e, l) && i.indexOf(l) < 0 && (t[l] = e[l]);
    if (e != null && k)
      for (var l of k(e)) i.indexOf(l) < 0 && ot.call(e, l) && (t[l] = e[l]);
    return t;
  };

  // More existing code...

  var _ = {
    get exports() {
      return a;
    },
    set exports(e) {
      a = e;
    }
  };

  var p = (e, i) => {
    var t = e.exports;
    Object.defineProperty(i, "exports", {
      enumerable: !0,
      get: () => t,
      set: l => {
        t = l;
        e.exports = l;
      }
    });
  };

  // More existing code...

  var b = (e, i) => {
    Z(e, tt(i));
    return e;
  };

  // More existing code...

})();