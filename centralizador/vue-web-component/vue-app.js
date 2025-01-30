var Ei = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function We(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const W = Ei.NODE_ENV !== "production" ? Object.freeze({}) : {}, mt = Ei.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, Is = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), un = (e) => e.startsWith("onUpdate:"), J = Object.assign, lo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rs = Object.prototype.hasOwnProperty, H = (e, t) => Rs.call(e, t), P = Array.isArray, Et = (e) => On(e) === "[object Map]", Ms = (e) => On(e) === "[object Set]", $ = (e) => typeof e == "function", Y = (e) => typeof e == "string", Ot = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", co = (e) => (q(e) || $(e)) && $(e.then) && $(e.catch), Fs = Object.prototype.toString, On = (e) => Fs.call(e), fo = (e) => On(e).slice(8, -1), uo = (e) => On(e) === "[object Object]", ao = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ We(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), js = /* @__PURE__ */ We(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hs = /-(\w)/g, ae = vn(
  (e) => e.replace(Hs, (t, n) => n ? n.toUpperCase() : "")
), Ls = /\B([A-Z])/g, me = vn(
  (e) => e.replace(Ls, "-$1").toLowerCase()
), Dn = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = vn(
  (e) => e ? `on${Dn(e)}` : ""
), lt = (e, t) => !Object.is(e, t), Ct = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, an = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Us = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ro = (e) => {
  const t = Y(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Mo;
const kt = () => Mo || (Mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function po(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = Y(o) ? ks(o) : po(o);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Y(e) || q(e))
    return e;
}
const Bs = /;(?![^(]*\))/g, Ws = /:([^]+)/, Ks = /\/\*[^]*?\*\//g;
function ks(e) {
  const t = {};
  return e.replace(Ks, "").split(Bs).forEach((n) => {
    if (n) {
      const o = n.split(Ws);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ho(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const o = ho(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const qs = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Gs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Js = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ys = /* @__PURE__ */ We(qs), zs = /* @__PURE__ */ We(Gs), Xs = /* @__PURE__ */ We(Js), Zs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qs = /* @__PURE__ */ We(Zs);
function bi(e) {
  return !!e || e === "";
}
var G = {};
function je(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _e;
class er {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = _e, !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    } else G.NODE_ENV !== "production" && je("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    _e = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    _e = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function tr() {
  return _e;
}
let L;
const Rn = /* @__PURE__ */ new WeakSet();
class Ni {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rn.has(this) && (Rn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Oi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fo(this), vi(this);
    const t = L, n = we;
    L = this, we = !0;
    try {
      return this.fn();
    } finally {
      G.NODE_ENV !== "production" && L !== this && je(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Di(this), L = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mo(t);
      this.deps = this.depsTail = void 0, Fo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    kn(this) && this.run();
  }
  get dirty() {
    return kn(this);
  }
}
let yi = 0, Rt, Mt;
function Oi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mt, Mt = e;
    return;
  }
  e.next = Rt, Rt = e;
}
function _o() {
  yi++;
}
function go() {
  if (--yi > 0)
    return;
  if (Mt) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rt; ) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Di(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), mo(o), nr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ht))
    return;
  e.globalVersion = Ht;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !kn(e)) {
    e.flags &= -3;
    return;
  }
  const n = L, o = we;
  L = e, we = !0;
  try {
    vi(e);
    const i = e.fn(e._value);
    (t.version === 0 || lt(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    L = n, we = o, Di(e), e.flags &= -3;
  }
}
function mo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), G.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      mo(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function nr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const xi = [];
function Ke() {
  xi.push(we), we = !1;
}
function ke() {
  const e = xi.pop();
  we = e === void 0 ? !0 : e;
}
function Fo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = L;
    L = void 0;
    try {
      t();
    } finally {
      L = n;
    }
  }
}
let Ht = 0;
class or {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vi {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, G.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!L || !we || L === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== L)
      n = this.activeLink = new or(L, this), L.deps ? (n.prevDep = L.depsTail, L.depsTail.nextDep = n, L.depsTail = n) : L.deps = L.depsTail = n, Ci(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = L.depsTail, n.nextDep = void 0, L.depsTail.nextDep = n, L.depsTail = n, L.deps === n && (L.deps = o);
    }
    return G.NODE_ENV !== "production" && L.onTrack && L.onTrack(
      J(
        {
          effect: L
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ht++, this.notify(t);
  }
  notify(t) {
    _o();
    try {
      if (G.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            J(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      go();
    }
  }
}
function Ci(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ci(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), G.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const qn = /* @__PURE__ */ new WeakMap(), ct = Symbol(
  G.NODE_ENV !== "production" ? "Object iterate" : ""
), Gn = Symbol(
  G.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Lt = Symbol(
  G.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n) {
  if (we && L) {
    let o = qn.get(e);
    o || qn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Vi()), i.map = o, i.key = n), G.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ie(e, t, n, o, i, s) {
  const r = qn.get(e);
  if (!r) {
    Ht++;
    return;
  }
  const l = (u) => {
    u && (G.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: s
    }) : u.trigger());
  };
  if (_o(), t === "clear")
    r.forEach(l);
  else {
    const u = P(e), h = u && ao(n);
    if (u && n === "length") {
      const p = Number(o);
      r.forEach((a, g) => {
        (g === "length" || g === Lt || !Ot(g) && g >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), h && l(r.get(Lt)), t) {
        case "add":
          u ? h && l(r.get("length")) : (l(r.get(ct)), Et(e) && l(r.get(Gn)));
          break;
        case "delete":
          u || (l(r.get(ct)), Et(e) && l(r.get(Gn)));
          break;
        case "set":
          Et(e) && l(r.get(ct));
          break;
      }
  }
  go();
}
function pt(e) {
  const t = R(e);
  return t === e ? t : (X(t, "iterate", Lt), Ne(e) ? t : t.map(ge));
}
function Eo(e) {
  return X(e = R(e), "iterate", Lt), e;
}
const ir = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mn(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => P(t) ? pt(t) : t)
    );
  },
  entries() {
    return Mn(this, "entries", (e) => (e[1] = ge(e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return Ue(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fn(this, "includes", e);
  },
  indexOf(...e) {
    return Fn(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return St(this, "pop");
  },
  push(...e) {
    return St(this, "push", e);
  },
  reduce(e, ...t) {
    return jo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return jo(this, "reduceRight", e, t);
  },
  shift() {
    return St(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return St(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return St(this, "unshift", e);
  },
  values() {
    return Mn(this, "values", ge);
  }
};
function Mn(e, t, n) {
  const o = Eo(e), i = o[t]();
  return o !== e && !Ne(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.value && (s.value = n(s.value)), s;
  }), i;
}
const sr = Array.prototype;
function Ue(e, t, n, o, i, s) {
  const r = Eo(e), l = r !== e && !Ne(e), u = r[t];
  if (u !== sr[t]) {
    const a = u.apply(e, s);
    return l ? ge(a) : a;
  }
  let h = n;
  r !== e && (l ? h = function(a, g) {
    return n.call(this, ge(a), g, e);
  } : n.length > 2 && (h = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = u.call(r, h, o);
  return l && i ? i(p) : p;
}
function jo(e, t, n, o) {
  const i = Eo(e);
  let s = n;
  return i !== e && (Ne(e) ? n.length > 3 && (s = function(r, l, u) {
    return n.call(this, r, l, u, e);
  }) : s = function(r, l, u) {
    return n.call(this, r, ge(l), u, e);
  }), i[t](s, ...o);
}
function Fn(e, t, n) {
  const o = R(e);
  X(o, "iterate", Lt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && dn(n[0]) ? (n[0] = R(n[0]), o[t](...n)) : i;
}
function St(e, t, n = []) {
  Ke(), _o();
  const o = R(e)[t].apply(e, n);
  return go(), ke(), o;
}
const rr = /* @__PURE__ */ We("__proto__,__v_isRef,__isVue"), Si = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ot)
);
function lr(e) {
  Ot(e) || (e = String(e));
  const t = R(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class Ti {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (i ? s ? Mi : Ri : s ? Ii : Ai).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = P(t);
    if (!i) {
      let u;
      if (r && (u = ir[n]))
        return u;
      if (n === "hasOwnProperty")
        return lr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : o
    );
    return (Ot(n) ? Si.has(n) : rr(n)) || (i || X(t, "get", n), s) ? l : Q(l) ? r && ao(n) ? l : l.value : q(l) ? i ? Fi(l) : bo(l) : l;
  }
}
class Pi extends Ti {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let s = t[n];
    if (!this._isShallow) {
      const u = tt(s);
      if (!Ne(o) && !tt(o) && (s = R(s), o = R(o)), !P(t) && Q(s) && !Q(o))
        return u ? !1 : (s.value = o, !0);
    }
    const r = P(t) && ao(n) ? Number(n) < t.length : H(t, n), l = Reflect.set(
      t,
      n,
      o,
      Q(t) ? t : i
    );
    return t === R(i) && (r ? lt(o, s) && Ie(t, "set", n, o, s) : Ie(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = H(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Ie(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ot(n) || !Si.has(n)) && X(t, "has", n), o;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      P(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class $i extends Ti {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return G.NODE_ENV !== "production" && je(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return G.NODE_ENV !== "production" && je(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const cr = /* @__PURE__ */ new Pi(), fr = /* @__PURE__ */ new $i(), ur = /* @__PURE__ */ new Pi(!0), ar = /* @__PURE__ */ new $i(!0), Jn = (e) => e, Zt = (e) => Reflect.getPrototypeOf(e);
function dr(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, s = R(i), r = Et(s), l = e === "entries" || e === Symbol.iterator && r, u = e === "keys" && r, h = i[e](...o), p = n ? Jn : t ? Yn : ge;
    return !t && X(
      s,
      "iterate",
      u ? Gn : ct
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = h.next();
        return g ? { value: a, done: g } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Qt(e) {
  return function(...t) {
    if (G.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      je(
        `${Dn(e)} operation ${n}failed: target is readonly.`,
        R(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pr(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, r = R(s), l = R(i);
      e || (lt(i, l) && X(r, "get", i), X(r, "get", l));
      const { has: u } = Zt(r), h = t ? Jn : e ? Yn : ge;
      if (u.call(r, i))
        return h(s.get(i));
      if (u.call(r, l))
        return h(s.get(l));
      s !== r && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(R(i), "iterate", ct), Reflect.get(i, "size", i);
    },
    has(i) {
      const s = this.__v_raw, r = R(s), l = R(i);
      return e || (lt(i, l) && X(r, "has", i), X(r, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const r = this, l = r.__v_raw, u = R(l), h = t ? Jn : e ? Yn : ge;
      return !e && X(u, "iterate", ct), l.forEach((p, a) => i.call(s, h(p), h(a), r));
    }
  };
  return J(
    n,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(i) {
        !t && !Ne(i) && !tt(i) && (i = R(i));
        const s = R(this);
        return Zt(s).has.call(s, i) || (s.add(i), Ie(s, "add", i, i)), this;
      },
      set(i, s) {
        !t && !Ne(s) && !tt(s) && (s = R(s));
        const r = R(this), { has: l, get: u } = Zt(r);
        let h = l.call(r, i);
        h ? G.NODE_ENV !== "production" && Ho(r, l, i) : (i = R(i), h = l.call(r, i));
        const p = u.call(r, i);
        return r.set(i, s), h ? lt(s, p) && Ie(r, "set", i, s, p) : Ie(r, "add", i, s), this;
      },
      delete(i) {
        const s = R(this), { has: r, get: l } = Zt(s);
        let u = r.call(s, i);
        u ? G.NODE_ENV !== "production" && Ho(s, r, i) : (i = R(i), u = r.call(s, i));
        const h = l ? l.call(s, i) : void 0, p = s.delete(i);
        return u && Ie(s, "delete", i, void 0, h), p;
      },
      clear() {
        const i = R(this), s = i.size !== 0, r = G.NODE_ENV !== "production" ? Et(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return s && Ie(
          i,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = dr(i, e, t);
  }), n;
}
function wn(e, t) {
  const n = pr(e, t);
  return (o, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    H(n, i) && i in o ? n : o,
    i,
    s
  );
}
const hr = {
  get: /* @__PURE__ */ wn(!1, !1)
}, _r = {
  get: /* @__PURE__ */ wn(!1, !0)
}, gr = {
  get: /* @__PURE__ */ wn(!0, !1)
}, mr = {
  get: /* @__PURE__ */ wn(!0, !0)
};
function Ho(e, t, n) {
  const o = R(n);
  if (o !== n && t.call(e, o)) {
    const i = fo(e);
    je(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap();
function Er(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function br(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Er(fo(e));
}
function bo(e) {
  return tt(e) ? e : xn(
    e,
    !1,
    cr,
    hr,
    Ai
  );
}
function Nr(e) {
  return xn(
    e,
    !1,
    ur,
    _r,
    Ii
  );
}
function Fi(e) {
  return xn(
    e,
    !0,
    fr,
    gr,
    Ri
  );
}
function Me(e) {
  return xn(
    e,
    !0,
    ar,
    mr,
    Mi
  );
}
function xn(e, t, n, o, i) {
  if (!q(e))
    return G.NODE_ENV !== "production" && je(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const r = br(e);
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return i.set(e, l), l;
}
function bt(e) {
  return tt(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function tt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function dn(e) {
  return e ? !!e.__v_raw : !1;
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function yr(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const ge = (e) => q(e) ? bo(e) : e, Yn = (e) => q(e) ? Fi(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ji(e) {
  return Q(e) ? e.value : e;
}
const Or = {
  get: (e, t, n) => t === "__v_raw" ? e : ji(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Q(i) && !Q(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Hi(e) {
  return bt(e) ? e : new Proxy(e, Or);
}
class vr {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Vi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ht - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    L !== this)
      return Oi(this, !0), !0;
  }
  get value() {
    const t = G.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return wi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : G.NODE_ENV !== "production" && je("Write operation failed: computed value is readonly");
  }
}
function Dr(e, t, n = !1) {
  let o, i;
  return $(e) ? o = e : (o = e.get, i = e.set), new vr(o, i, n);
}
const en = {}, pn = /* @__PURE__ */ new WeakMap();
let rt;
function wr(e, t = !1, n = rt) {
  if (n) {
    let o = pn.get(n);
    o || pn.set(n, o = []), o.push(e);
  } else G.NODE_ENV !== "production" && !t && je(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function xr(e, t, n = W) {
  const { immediate: o, deep: i, once: s, scheduler: r, augmentJob: l, call: u } = n, h = (C) => {
    (n.onWarn || je)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (C) => i ? C : Ne(C) || i === !1 || i === 0 ? Ze(C, 1) : Ze(C);
  let a, g, w, S, I = !1, ne = !1;
  if (Q(e) ? (g = () => e.value, I = Ne(e)) : bt(e) ? (g = () => p(e), I = !0) : P(e) ? (ne = !0, I = e.some((C) => bt(C) || Ne(C)), g = () => e.map((C) => {
    if (Q(C))
      return C.value;
    if (bt(C))
      return p(C);
    if ($(C))
      return u ? u(C, 2) : C();
    G.NODE_ENV !== "production" && h(C);
  })) : $(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (w) {
      Ke();
      try {
        w();
      } finally {
        ke();
      }
    }
    const C = rt;
    rt = a;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      rt = C;
    }
  } : (g = Z, G.NODE_ENV !== "production" && h(e)), t && i) {
    const C = g, ee = i === !0 ? 1 / 0 : i;
    g = () => Ze(C(), ee);
  }
  const K = tr(), z = () => {
    a.stop(), K && K.active && lo(K.effects, a);
  };
  if (s && t) {
    const C = t;
    t = (...ee) => {
      C(...ee), z();
    };
  }
  let U = ne ? new Array(e.length).fill(en) : en;
  const de = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const ee = a.run();
        if (i || I || (ne ? ee.some((ye, oe) => lt(ye, U[oe])) : lt(ee, U))) {
          w && w();
          const ye = rt;
          rt = a;
          try {
            const oe = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              U === en ? void 0 : ne && U[0] === en ? [] : U,
              S
            ];
            u ? u(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            ), U = ee;
          } finally {
            rt = ye;
          }
        }
      } else
        a.run();
  };
  return l && l(de), a = new Ni(g), a.scheduler = r ? () => r(de, !1) : de, S = (C) => wr(C, !1, a), w = a.onStop = () => {
    const C = pn.get(a);
    if (C) {
      if (u)
        u(C, 4);
      else
        for (const ee of C) ee();
      pn.delete(a);
    }
  }, G.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? de(!0) : U = a.run() : r ? r(de.bind(null, !0), !0) : a.run(), z.pause = a.pause.bind(a), z.resume = a.resume.bind(a), z.stop = z, z;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Q(e))
    Ze(e.value, t, n);
  else if (P(e))
    for (let o = 0; o < e.length; o++)
      Ze(e[o], t, n);
  else if (Ms(e) || Et(e))
    e.forEach((o) => {
      Ze(o, t, n);
    });
  else if (uo(e)) {
    for (const o in e)
      Ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ze(e[o], t, n);
  }
  return e;
}
var d = {};
const ft = [];
function tn(e) {
  ft.push(e);
}
function nn() {
  ft.pop();
}
let jn = !1;
function v(e, ...t) {
  if (jn) return;
  jn = !0, Ke();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Vr();
  if (o)
    vt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var r, l;
          return (l = (r = s.toString) == null ? void 0 : r.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${Pn(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...Cr(i)), console.warn(...s);
  }
  ke(), jn = !1;
}
function Vr() {
  let e = ft[ft.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Cr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Sr(n));
  }), t;
}
function Sr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Pn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [i, ...Tr(e.props), s] : [i + s];
}
function Tr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Li(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Li(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Q(t) ? (t = Li(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const No = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function vt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    qt(i, t, n);
  }
}
function He(e, t, n, o) {
  if ($(e)) {
    const i = vt(e, t, n, o);
    return i && co(i) && i.catch((s) => {
      qt(s, t, n);
    }), i;
  }
  if (P(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(He(e[s], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && v(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function qt(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || W;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = d.NODE_ENV !== "production" ? No[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Ke(), vt(s, null, 10, [
        e,
        u,
        h
      ]), ke();
      return;
    }
  }
  Pr(e, n, i, o, r);
}
function Pr(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const s = No[t];
    if (n && tn(n), v(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && nn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const le = [];
let $e = -1;
const Nt = [];
let ze = null, gt = 0;
const Ui = /* @__PURE__ */ Promise.resolve();
let hn = null;
const $r = 100;
function Bi(e) {
  const t = hn || Ui;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ar(e) {
  let t = $e + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = le[o], s = Ut(i);
    s < e || s === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Vn(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? le.push(e) : le.splice(Ar(t), 0, e), e.flags |= 1, Wi();
  }
}
function Wi() {
  hn || (hn = Ui.then(qi));
}
function Ki(e) {
  P(e) ? Nt.push(...e) : ze && e.id === -1 ? ze.splice(gt + 1, 0, e) : e.flags & 1 || (Nt.push(e), e.flags |= 1), Wi();
}
function Lo(e, t, n = $e + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && yo(t, o))
        continue;
      le.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ki(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)].sort(
      (n, o) => Ut(n) - Ut(o)
    );
    if (Nt.length = 0, ze) {
      ze.push(...t);
      return;
    }
    for (ze = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gt = 0; gt < ze.length; gt++) {
      const n = ze[gt];
      d.NODE_ENV !== "production" && yo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ze = null, gt = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qi(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => yo(e, n) : Z;
  try {
    for ($e = 0; $e < le.length; $e++) {
      const n = le[$e];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), vt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; $e < le.length; $e++) {
      const n = le[$e];
      n && (n.flags &= -2);
    }
    $e = -1, le.length = 0, ki(e), hn = null, (le.length || Nt.length) && qi(e);
  }
}
function yo(e, t) {
  const n = e.get(t) || 0;
  if (n > $r) {
    const o = t.i, i = o && Vs(o.type);
    return qt(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Fe = !1;
const on = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (kt().__VUE_HMR_RUNTIME__ = {
  createRecord: Hn(Gi),
  rerender: Hn(Mr),
  reload: Hn(Fr)
});
const at = /* @__PURE__ */ new Map();
function Ir(e) {
  const t = e.type.__hmrId;
  let n = at.get(t);
  n || (Gi(t, e.type), n = at.get(t)), n.instances.add(e);
}
function Rr(e) {
  at.get(e.type.__hmrId).instances.delete(e);
}
function Gi(e, t) {
  return at.has(e) ? !1 : (at.set(e, {
    initialDef: _n(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function _n(e) {
  return Cs(e) ? e.__vccOpts : e;
}
function Mr(e, t) {
  const n = at.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, _n(o.type).render = t), o.renderCache = [], Fe = !0, o.update(), Fe = !1;
  }));
}
function Fr(e, t) {
  const n = at.get(e);
  if (!n) return;
  t = _n(t), Uo(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const s = o[i], r = _n(s.type);
    let l = on.get(r);
    l || (r !== n.initialDef && Uo(r, t), on.set(r, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? Vn(() => {
      Fe = !0, s.parent.update(), Fe = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(r);
  }
  Ki(() => {
    on.clear();
  });
}
function Uo(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Hn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Re, $t = [], zn = !1;
function Gt(e, ...t) {
  Re ? Re.emit(e, ...t) : zn || $t.push({ event: e, args: t });
}
function Ji(e, t) {
  var n, o;
  Re = e, Re ? (Re.enabled = !0, $t.forEach(({ event: i, args: s }) => Re.emit(i, ...s)), $t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Ji(s, t);
  }), setTimeout(() => {
    Re || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, zn = !0, $t = []);
  }, 3e3)) : (zn = !0, $t = []);
}
function jr(e, t) {
  Gt("app:init", e, t, {
    Fragment: Ae,
    Text: Jt,
    Comment: xe,
    Static: ln
  });
}
function Hr(e) {
  Gt("app:unmount", e);
}
const Lr = /* @__PURE__ */ Oo(
  "component:added"
  /* COMPONENT_ADDED */
), Yi = /* @__PURE__ */ Oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ur = /* @__PURE__ */ Oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Br = (e) => {
  Re && typeof Re.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Re.cleanupBuffer(e) && Ur(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  return (t) => {
    Gt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Wr = /* @__PURE__ */ zi(
  "perf:start"
  /* PERFORMANCE_START */
), Kr = /* @__PURE__ */ zi(
  "perf:end"
  /* PERFORMANCE_END */
);
function zi(e) {
  return (t, n, o) => {
    Gt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function kr(e, t, n) {
  Gt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ee = null, Xi = null;
function gn(e) {
  const t = Ee;
  return Ee = e, Xi = e && e.type.__scopeId || null, t;
}
function qr(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && Qo(-1);
    const s = gn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      gn(s), o._d && Qo(1);
    }
    return d.NODE_ENV !== "production" && Yi(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Zi(e) {
  js(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function ot(e, t, n, o) {
  const i = e.dirs, s = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    s && (l.oldValue = s[r].value);
    let u = l.dir[o];
    u && (Ke(), He(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
const Gr = Symbol("_vte"), Jr = (e) => e.__isTeleport;
function vo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yr(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    J({ name: e.name }, t, { setup: e })
  ) : e;
}
function Qi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zr = /* @__PURE__ */ new WeakSet();
function mn(e, t, n, o, i = !1) {
  if (P(e)) {
    e.forEach(
      (S, I) => mn(
        S,
        t && (P(t) ? t[I] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Ft(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && mn(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? So(o.component) : o.el, r = i ? null : s, { i: l, r: u } = e;
  if (d.NODE_ENV !== "production" && !l) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === W ? l.refs = {} : l.refs, a = l.setupState, g = R(a), w = a === W ? () => !1 : (S) => d.NODE_ENV !== "production" && (H(g, S) && !Q(g[S]) && v(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), zr.has(g[S])) ? !1 : H(g, S);
  if (h != null && h !== u && (Y(h) ? (p[h] = null, w(h) && (a[h] = null)) : Q(h) && (h.value = null)), $(u))
    vt(u, l, 12, [r, p]);
  else {
    const S = Y(u), I = Q(u);
    if (S || I) {
      const ne = () => {
        if (e.f) {
          const K = S ? w(u) ? a[u] : p[u] : u.value;
          i ? P(K) && lo(K, s) : P(K) ? K.includes(s) || K.push(s) : S ? (p[u] = [s], w(u) && (a[u] = p[u])) : (u.value = [s], e.k && (p[e.k] = u.value));
        } else S ? (p[u] = r, w(u) && (a[u] = r)) : I ? (u.value = r, e.k && (p[e.k] = r)) : d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
      };
      r ? (ne.id = -1, he(ne, n)) : ne();
    } else d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
kt().requestIdleCallback;
kt().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Xr(e, t) {
  es(e, "a", t);
}
function Zr(e, t) {
  es(e, "da", t);
}
function es(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Cn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Do(i.parent.vnode) && Qr(o, t, n, i), i = i.parent;
  }
}
function Qr(e, t, n, o) {
  const i = Cn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ts(() => {
    lo(o[t], i);
  }, n);
}
function Cn(e, t, n = te, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
      Ke();
      const l = Yt(n), u = He(t, n, e, r);
      return l(), ke(), u;
    });
    return o ? i.unshift(s) : i.push(s), s;
  } else if (d.NODE_ENV !== "production") {
    const i = st(No[e].replace(/ hook$/, ""));
    v(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qe = (e) => (t, n = te) => {
  (!Wt || e === "sp") && Cn(e, (...o) => t(...o), n);
}, el = qe("bm"), tl = qe("m"), nl = qe(
  "bu"
), ol = qe("u"), il = qe(
  "bum"
), ts = qe("um"), sl = qe(
  "sp"
), rl = qe("rtg"), ll = qe("rtc");
function cl(e, t = te) {
  Cn("ec", e, t);
}
const fl = Symbol.for("v-ndc"), Xn = (e) => e ? ws(e) ? So(e) : Xn(e.parent) : null, ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? Me(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? Me(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? Me(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? Me(e.refs) : e.refs,
    $parent: (e) => Xn(e.parent),
    $root: (e) => Xn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => is(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bi.bind(e.proxy)),
    $watch: (e) => Bl.bind(e)
  })
), wo = (e) => e === "_" || e === "$", Ln = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), ns = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: s, accessCache: r, type: l, appContext: u } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Ln(o, t))
          return r[t] = 1, o[t];
        if (i !== W && H(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return r[t] = 3, s[t];
        if (n !== W && H(n, t))
          return r[t] = 4, n[t];
        Zn && (r[t] = 0);
      }
    }
    const p = ut[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (X(e.attrs, "get", ""), d.NODE_ENV !== "production" && Nn()) : d.NODE_ENV !== "production" && t === "$slots" && X(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== W && H(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, H(g, t)
    )
      return g[t];
    d.NODE_ENV !== "production" && Ee && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== W && wo(t[0]) && H(i, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: s } = e;
    return Ln(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && H(i, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (d.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && v(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: s }
  }, r) {
    let l;
    return !!n[r] || e !== W && H(e, r) || Ln(t, r) || (l = s[0]) && H(l, r) || H(o, r) || H(ut, r) || H(i.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (ns.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ul(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ut).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ut[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function al(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function dl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wo(o[0])) {
        v(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function Bo(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function pl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Zn = !0;
function hl(e) {
  const t = is(e), n = e.proxy, o = e.ctx;
  Zn = !1, t.beforeCreate && Wo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: r,
    watch: l,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: w,
    updated: S,
    activated: I,
    deactivated: ne,
    beforeDestroy: K,
    beforeUnmount: z,
    destroyed: U,
    unmounted: de,
    render: C,
    renderTracked: ee,
    renderTriggered: ye,
    errorCaptured: oe,
    serverPrefetch: ce,
    // public API
    expose: Le,
    inheritAttrs: Ge,
    // assets
    components: ve,
    directives: zt,
    filters: Po
  } = t, Je = d.NODE_ENV !== "production" ? pl() : null;
  if (d.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const M in F)
        Je("Props", M);
  }
  if (h && _l(h, o, Je), r)
    for (const F in r) {
      const M = r[F];
      $(M) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = M.bind(n), d.NODE_ENV !== "production" && Je("Methods", F)) : d.NODE_ENV !== "production" && v(
        `Method "${F}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !$(i) && v(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = i.call(n, n);
    if (d.NODE_ENV !== "production" && co(F) && v(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(F))
      d.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = bo(F), d.NODE_ENV !== "production")
      for (const M in F)
        Je("Data", M), wo(M[0]) || Object.defineProperty(o, M, {
          configurable: !0,
          enumerable: !0,
          get: () => F[M],
          set: Z
        });
  }
  if (Zn = !0, s)
    for (const F in s) {
      const M = s[F], Ve = $(M) ? M.bind(n, n) : $(M.get) ? M.get.bind(n, n) : Z;
      d.NODE_ENV !== "production" && Ve === Z && v(`Computed property "${F}" has no getter.`);
      const $n = !$(M) && $(M.set) ? M.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        v(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Z, Dt = gc({
        get: Ve,
        set: $n
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (dt) => Dt.value = dt
      }), d.NODE_ENV !== "production" && Je("Computed", F);
    }
  if (l)
    for (const F in l)
      os(l[F], o, n, F);
  if (u) {
    const F = $(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach((M) => {
      yl(M, F[M]);
    });
  }
  p && Wo(p, e, "c");
  function fe(F, M) {
    P(M) ? M.forEach((Ve) => F(Ve.bind(n))) : M && F(M.bind(n));
  }
  if (fe(el, a), fe(tl, g), fe(nl, w), fe(ol, S), fe(Xr, I), fe(Zr, ne), fe(cl, oe), fe(ll, ee), fe(rl, ye), fe(il, z), fe(ts, de), fe(sl, ce), P(Le))
    if (Le.length) {
      const F = e.exposed || (e.exposed = {});
      Le.forEach((M) => {
        Object.defineProperty(F, M, {
          get: () => n[M],
          set: (Ve) => n[M] = Ve
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Z && (e.render = C), Ge != null && (e.inheritAttrs = Ge), ve && (e.components = ve), zt && (e.directives = zt), ce && Qi(e);
}
function _l(e, t, n = Z) {
  P(e) && (e = Qn(e));
  for (const o in e) {
    const i = e[o];
    let s;
    q(i) ? "default" in i ? s = sn(
      i.from || o,
      i.default,
      !0
    ) : s = sn(i.from || o) : s = sn(i), Q(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (r) => s.value = r
    }) : t[o] = s, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Wo(e, t, n) {
  He(
    P(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function os(e, t, n, o) {
  let i = o.includes(".") ? ms(n, o) : () => n[o];
  if (Y(e)) {
    const s = t[e];
    $(s) ? Bn(i, s) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    Bn(i, e.bind(n));
  else if (q(e))
    if (P(e))
      e.forEach((s) => os(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? Bn(i, s, e) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else d.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function is(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (h) => En(u, h, r, !0)
  ), En(u, t, r)), q(t) && s.set(t, u), u;
}
function En(e, t, n, o = !1) {
  const { mixins: i, extends: s } = t;
  s && En(e, s, n, !0), i && i.forEach(
    (r) => En(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      d.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = gl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const gl = {
  data: Ko,
  props: ko,
  emits: ko,
  // objects
  methods: At,
  computed: At,
  // lifecycle
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  // assets
  components: At,
  directives: At,
  // watch
  watch: El,
  // provide / inject
  provide: Ko,
  inject: ml
};
function Ko(e, t) {
  return t ? e ? function() {
    return J(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ml(e, t) {
  return At(Qn(e), Qn(t));
}
function Qn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function At(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ko(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    Bo(e),
    Bo(t ?? {})
  ) : t;
}
function El(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function ss() {
  return {
    app: null,
    config: {
      isNativeTag: Is,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let bl = 0;
function Nl(e, t) {
  return function(o, i = null) {
    $(o) || (o = J({}, o)), i != null && !q(i) && (d.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), i = null);
    const s = ss(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = s.app = {
      _uid: bl++,
      _component: o,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: oi,
      get config() {
        return s.config;
      },
      set config(p) {
        d.NODE_ENV !== "production" && v(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return r.has(p) ? d.NODE_ENV !== "production" && v("Plugin has already been applied to target app.") : p && $(p.install) ? (r.add(p), p.install(h, ...a)) : $(p) ? (r.add(p), p(h, ...a)) : d.NODE_ENV !== "production" && v(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return s.mixins.includes(p) ? d.NODE_ENV !== "production" && v(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : s.mixins.push(p), h;
      },
      component(p, a) {
        return d.NODE_ENV !== "production" && io(p, s.config), a ? (d.NODE_ENV !== "production" && s.components[p] && v(`Component "${p}" has already been registered in target app.`), s.components[p] = a, h) : s.components[p];
      },
      directive(p, a) {
        return d.NODE_ENV !== "production" && Zi(p), a ? (d.NODE_ENV !== "production" && s.directives[p] && v(`Directive "${p}" has already been registered in target app.`), s.directives[p] = a, h) : s.directives[p];
      },
      mount(p, a, g) {
        if (u)
          d.NODE_ENV !== "production" && v(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && p.__vue_app__ && v(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const w = h._ceVNode || et(o, i);
          return w.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), d.NODE_ENV !== "production" && (s.reload = () => {
            e(
              nt(w),
              p,
              g
            );
          }), e(w, p, g), u = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = w.component, jr(h, oi)), So(w.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && v(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (He(
          l,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, Hr(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.NODE_ENV !== "production" && p in s.provides && v(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), s.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = yt;
        yt = h;
        try {
          return p();
        } finally {
          yt = a;
        }
      }
    };
    return h;
  };
}
let yt = null;
function yl(e, t) {
  if (!te)
    d.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function sn(e, t, n = !1) {
  const o = te || Ee;
  if (o || yt) {
    const i = yt ? yt._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const rs = {}, ls = () => Object.create(rs), cs = (e) => Object.getPrototypeOf(e) === rs;
function Ol(e, t, n, o = !1) {
  const i = {}, s = ls();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fs(e, t, i, s);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  d.NODE_ENV !== "production" && as(t || {}, i, e), n ? e.props = o ? i : Nr(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function vl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Dl(e, t, n, o) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: r }
  } = e, l = R(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && vl(e)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Sn(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (u)
          if (H(s, g))
            w !== s[g] && (s[g] = w, h = !0);
          else {
            const S = ae(g);
            i[S] = eo(
              u,
              l,
              S,
              w,
              e,
              !1
            );
          }
        else
          w !== s[g] && (s[g] = w, h = !0);
      }
    }
  } else {
    fs(e, t, i, s) && (h = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = me(a)) === a || !H(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = eo(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (s !== l)
      for (const a in s)
        (!t || !H(t, a)) && (delete s[a], h = !0);
  }
  h && Ie(e.attrs, "set", ""), d.NODE_ENV !== "production" && as(t || {}, i, e);
}
function fs(e, t, n, o) {
  const [i, s] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let u in t) {
      if (It(u))
        continue;
      const h = t[u];
      let p;
      i && H(i, p = ae(u)) ? !s || !s.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Sn(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, r = !0);
    }
  if (s) {
    const u = R(n), h = l || W;
    for (let p = 0; p < s.length; p++) {
      const a = s[p];
      n[a] = eo(
        i,
        u,
        a,
        h[a],
        e,
        !H(h, a)
      );
    }
  }
  return r;
}
function eo(e, t, n, o, i, s) {
  const r = e[n];
  if (r != null) {
    const l = H(r, "default");
    if (l && o === void 0) {
      const u = r.default;
      if (r.type !== Function && !r.skipFactory && $(u)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const p = Yt(i);
          o = h[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      i.ce && i.ce._setProp(n, o);
    }
    r[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : r[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === me(n)) && (o = !0));
  }
  return o;
}
const wl = /* @__PURE__ */ new WeakMap();
function us(e, t, n = !1) {
  const o = n ? wl : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const s = e.props, r = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [g, w] = us(a, t, !0);
      J(r, g), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !u)
    return q(e) && o.set(e, mt), mt;
  if (P(s))
    for (let p = 0; p < s.length; p++) {
      d.NODE_ENV !== "production" && !Y(s[p]) && v("props must be strings when using array syntax.", s[p]);
      const a = ae(s[p]);
      qo(a) && (r[a] = W);
    }
  else if (s) {
    d.NODE_ENV !== "production" && !q(s) && v("invalid props options", s);
    for (const p in s) {
      const a = ae(p);
      if (qo(a)) {
        const g = s[p], w = r[a] = P(g) || $(g) ? { type: g } : J({}, g), S = w.type;
        let I = !1, ne = !0;
        if (P(S))
          for (let K = 0; K < S.length; ++K) {
            const z = S[K], U = $(z) && z.name;
            if (U === "Boolean") {
              I = !0;
              break;
            } else U === "String" && (ne = !1);
          }
        else
          I = $(S) && S.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = I, w[
          1
          /* shouldCastTrue */
        ] = ne, (I || H(w, "default")) && l.push(a);
      }
    }
  }
  const h = [r, l];
  return q(e) && o.set(e, h), h;
}
function qo(e) {
  return e[0] !== "$" && !It(e) ? !0 : (d.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function xl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function as(e, t, n) {
  const o = R(t), i = n.propsOptions[0], s = Object.keys(e).map((r) => ae(r));
  for (const r in i) {
    let l = i[r];
    l != null && Vl(
      r,
      o[r],
      l,
      d.NODE_ENV !== "production" ? Me(o) : o,
      !s.includes(r)
    );
  }
}
function Vl(e, t, n, o, i) {
  const { type: s, required: r, validator: l, skipCheck: u } = n;
  if (r && i) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (s != null && s !== !0 && !u) {
      let h = !1;
      const p = P(s) ? s : [s], a = [];
      for (let g = 0; g < p.length && !h; g++) {
        const { valid: w, expectedType: S } = Sl(t, p[g]);
        a.push(S || ""), h = w;
      }
      if (!h) {
        v(Tl(e, t, a));
        return;
      }
    }
    l && !l(t, o) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Cl = /* @__PURE__ */ We(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Sl(e, t) {
  let n;
  const o = xl(t);
  if (o === "null")
    n = e === null;
  else if (Cl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Tl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Dn).join(" | ")}`;
  const i = n[0], s = fo(t), r = Go(t, i), l = Go(t, s);
  return n.length === 1 && Jo(i) && !Pl(i, s) && (o += ` with value ${r}`), o += `, got ${s} `, Jo(s) && (o += `with value ${l}.`), o;
}
function Go(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Jo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Pl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ds = (e) => e[0] === "_" || e === "$stable", xo = (e) => P(e) ? e.map(De) : [De(e)], $l = (e, t, n) => {
  if (t._n)
    return t;
  const o = qr((...i) => (d.NODE_ENV !== "production" && te && (!n || n.root === te.root) && v(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), xo(t(...i))), n);
  return o._c = !1, o;
}, ps = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (ds(i)) continue;
    const s = e[i];
    if ($(s))
      t[i] = $l(i, s, o);
    else if (s != null) {
      d.NODE_ENV !== "production" && v(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = xo(s);
      t[i] = () => r;
    }
  }
}, hs = (e, t) => {
  d.NODE_ENV !== "production" && !Do(e.vnode) && v(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = xo(t);
  e.slots.default = () => n;
}, to = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Al = (e, t, n) => {
  const o = e.slots = ls();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (to(o, t, n), n && an(o, "_", i, !0)) : ps(t, o);
  } else t && hs(e, t);
}, Il = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let s = !0, r = W;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? d.NODE_ENV !== "production" && Fe ? (to(i, t, n), Ie(e, "set", "$slots")) : n && l === 1 ? s = !1 : to(i, t, n) : (s = !t.$stable, ps(t, i)), r = t;
  } else t && (hs(e, t), r = { default: 1 });
  if (s)
    for (const l in i)
      !ds(l) && r[l] == null && delete i[l];
};
let Tt, Qe;
function ht(e, t) {
  e.appContext.config.performance && bn() && Qe.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && Wr(e, t, bn() ? Qe.now() : Date.now());
}
function _t(e, t) {
  if (e.appContext.config.performance && bn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Qe.mark(o), Qe.measure(
      `<${Pn(e, e.type)}> ${t}`,
      n,
      o
    ), Qe.clearMarks(n), Qe.clearMarks(o);
  }
  d.NODE_ENV !== "production" && Kr(e, t, bn() ? Qe.now() : Date.now());
}
function bn() {
  return Tt !== void 0 || (typeof window < "u" && window.performance ? (Tt = !0, Qe = window.performance) : Tt = !1), Tt;
}
function Rl() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const he = Yl;
function Ml(e) {
  return Fl(e);
}
function Fl(e, t) {
  Rl();
  const n = kt();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && Ji(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: s,
    createElement: r,
    createText: l,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: w = Z,
    insertStaticContent: S
  } = e, I = (c, f, _, b = null, m = null, E = null, D = void 0, O = null, y = d.NODE_ENV !== "production" && Fe ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Pt(c, f) && (b = Xt(c), Ye(c, m, E, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: N, ref: T, shapeFlag: x } = f;
    switch (N) {
      case Jt:
        ne(c, f, _, b);
        break;
      case xe:
        K(c, f, _, b);
        break;
      case ln:
        c == null ? z(f, _, b, D) : d.NODE_ENV !== "production" && U(c, f, _, D);
        break;
      case Ae:
        zt(
          c,
          f,
          _,
          b,
          m,
          E,
          D,
          O,
          y
        );
        break;
      default:
        x & 1 ? ee(
          c,
          f,
          _,
          b,
          m,
          E,
          D,
          O,
          y
        ) : x & 6 ? Po(
          c,
          f,
          _,
          b,
          m,
          E,
          D,
          O,
          y
        ) : x & 64 || x & 128 ? N.process(
          c,
          f,
          _,
          b,
          m,
          E,
          D,
          O,
          y,
          xt
        ) : d.NODE_ENV !== "production" && v("Invalid VNode type:", N, `(${typeof N})`);
    }
    T != null && m && mn(T, c && c.ref, E, f || c, !f);
  }, ne = (c, f, _, b) => {
    if (c == null)
      o(
        f.el = l(f.children),
        _,
        b
      );
    else {
      const m = f.el = c.el;
      f.children !== c.children && h(m, f.children);
    }
  }, K = (c, f, _, b) => {
    c == null ? o(
      f.el = u(f.children || ""),
      _,
      b
    ) : f.el = c.el;
  }, z = (c, f, _, b) => {
    [c.el, c.anchor] = S(
      c.children,
      f,
      _,
      b,
      c.el,
      c.anchor
    );
  }, U = (c, f, _, b) => {
    if (f.children !== c.children) {
      const m = g(c.anchor);
      C(c), [f.el, f.anchor] = S(
        f.children,
        _,
        m,
        b
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, de = ({ el: c, anchor: f }, _, b) => {
    let m;
    for (; c && c !== f; )
      m = g(c), o(c, _, b), c = m;
    o(f, _, b);
  }, C = ({ el: c, anchor: f }) => {
    let _;
    for (; c && c !== f; )
      _ = g(c), i(c), c = _;
    i(f);
  }, ee = (c, f, _, b, m, E, D, O, y) => {
    f.type === "svg" ? D = "svg" : f.type === "math" && (D = "mathml"), c == null ? ye(
      f,
      _,
      b,
      m,
      E,
      D,
      O,
      y
    ) : Le(
      c,
      f,
      m,
      E,
      D,
      O,
      y
    );
  }, ye = (c, f, _, b, m, E, D, O) => {
    let y, N;
    const { props: T, shapeFlag: x, transition: V, dirs: A } = c;
    if (y = c.el = r(
      c.type,
      E,
      T && T.is,
      T
    ), x & 8 ? p(y, c.children) : x & 16 && ce(
      c.children,
      y,
      null,
      b,
      m,
      Un(c, E),
      D,
      O
    ), A && ot(c, null, b, "created"), oe(y, c, c.scopeId, D, b), T) {
      for (const k in T)
        k !== "value" && !It(k) && s(y, k, null, T[k], E, b);
      "value" in T && s(y, "value", null, T.value, E), (N = T.onVnodeBeforeMount) && Pe(N, b, c);
    }
    d.NODE_ENV !== "production" && (an(y, "__vnode", c, !0), an(y, "__vueParentComponent", b, !0)), A && ot(c, null, b, "beforeMount");
    const j = jl(m, V);
    j && V.beforeEnter(y), o(y, f, _), ((N = T && T.onVnodeMounted) || j || A) && he(() => {
      N && Pe(N, b, c), j && V.enter(y), A && ot(c, null, b, "mounted");
    }, m);
  }, oe = (c, f, _, b, m) => {
    if (_ && w(c, _), b)
      for (let E = 0; E < b.length; E++)
        w(c, b[E]);
    if (m) {
      let E = m.subTree;
      if (d.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = Vo(E.children) || E), f === E || Ns(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const D = m.vnode;
        oe(
          c,
          D,
          D.scopeId,
          D.slotScopeIds,
          m.parent
        );
      }
    }
  }, ce = (c, f, _, b, m, E, D, O, y = 0) => {
    for (let N = y; N < c.length; N++) {
      const T = c[N] = O ? Xe(c[N]) : De(c[N]);
      I(
        null,
        T,
        f,
        _,
        b,
        m,
        E,
        D,
        O
      );
    }
  }, Le = (c, f, _, b, m, E, D) => {
    const O = f.el = c.el;
    d.NODE_ENV !== "production" && (O.__vnode = f);
    let { patchFlag: y, dynamicChildren: N, dirs: T } = f;
    y |= c.patchFlag & 16;
    const x = c.props || W, V = f.props || W;
    let A;
    if (_ && it(_, !1), (A = V.onVnodeBeforeUpdate) && Pe(A, _, f, c), T && ot(f, c, _, "beforeUpdate"), _ && it(_, !0), d.NODE_ENV !== "production" && Fe && (y = 0, D = !1, N = null), (x.innerHTML && V.innerHTML == null || x.textContent && V.textContent == null) && p(O, ""), N ? (Ge(
      c.dynamicChildren,
      N,
      O,
      _,
      b,
      Un(f, m),
      E
    ), d.NODE_ENV !== "production" && rn(c, f)) : D || Ve(
      c,
      f,
      O,
      null,
      _,
      b,
      Un(f, m),
      E,
      !1
    ), y > 0) {
      if (y & 16)
        ve(O, x, V, _, m);
      else if (y & 2 && x.class !== V.class && s(O, "class", null, V.class, m), y & 4 && s(O, "style", x.style, V.style, m), y & 8) {
        const j = f.dynamicProps;
        for (let k = 0; k < j.length; k++) {
          const B = j[k], pe = x[B], ue = V[B];
          (ue !== pe || B === "value") && s(O, B, pe, ue, m, _);
        }
      }
      y & 1 && c.children !== f.children && p(O, f.children);
    } else !D && N == null && ve(O, x, V, _, m);
    ((A = V.onVnodeUpdated) || T) && he(() => {
      A && Pe(A, _, f, c), T && ot(f, c, _, "updated");
    }, b);
  }, Ge = (c, f, _, b, m, E, D) => {
    for (let O = 0; O < f.length; O++) {
      const y = c[O], N = f[O], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(y, N) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      I(
        y,
        N,
        T,
        null,
        b,
        m,
        E,
        D,
        !0
      );
    }
  }, ve = (c, f, _, b, m) => {
    if (f !== _) {
      if (f !== W)
        for (const E in f)
          !It(E) && !(E in _) && s(
            c,
            E,
            f[E],
            null,
            m,
            b
          );
      for (const E in _) {
        if (It(E)) continue;
        const D = _[E], O = f[E];
        D !== O && E !== "value" && s(c, E, O, D, m, b);
      }
      "value" in _ && s(c, "value", f.value, _.value, m);
    }
  }, zt = (c, f, _, b, m, E, D, O, y) => {
    const N = f.el = c ? c.el : l(""), T = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: V, slotScopeIds: A } = f;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Fe || x & 2048) && (x = 0, y = !1, V = null), A && (O = O ? O.concat(A) : A), c == null ? (o(N, _, b), o(T, _, b), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      _,
      T,
      m,
      E,
      D,
      O,
      y
    )) : x > 0 && x & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Ge(
      c.dynamicChildren,
      V,
      _,
      m,
      E,
      D,
      O
    ), d.NODE_ENV !== "production" ? rn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && rn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : Ve(
      c,
      f,
      _,
      T,
      m,
      E,
      D,
      O,
      y
    );
  }, Po = (c, f, _, b, m, E, D, O, y) => {
    f.slotScopeIds = O, c == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      _,
      b,
      D,
      y
    ) : Je(
      f,
      _,
      b,
      m,
      E,
      D,
      y
    ) : fe(c, f, y);
  }, Je = (c, f, _, b, m, E, D) => {
    const O = c.component = rc(
      c,
      b,
      m
    );
    if (d.NODE_ENV !== "production" && O.type.__hmrId && Ir(O), d.NODE_ENV !== "production" && (tn(c), ht(O, "mount")), Do(c) && (O.ctx.renderer = xt), d.NODE_ENV !== "production" && ht(O, "init"), fc(O, !1, D), d.NODE_ENV !== "production" && _t(O, "init"), O.asyncDep) {
      if (d.NODE_ENV !== "production" && Fe && (c.el = null), m && m.registerDep(O, F, D), !c.el) {
        const y = O.subTree = et(xe);
        K(null, y, f, _);
      }
    } else
      F(
        O,
        c,
        f,
        _,
        m,
        E,
        D
      );
    d.NODE_ENV !== "production" && (nn(), _t(O, "mount"));
  }, fe = (c, f, _) => {
    const b = f.component = c.component;
    if (Gl(c, f, _))
      if (b.asyncDep && !b.asyncResolved) {
        d.NODE_ENV !== "production" && tn(f), M(b, f, _), d.NODE_ENV !== "production" && nn();
        return;
      } else
        b.next = f, b.update();
    else
      f.el = c.el, b.vnode = f;
  }, F = (c, f, _, b, m, E, D) => {
    const O = () => {
      if (c.isMounted) {
        let { next: x, bu: V, u: A, parent: j, vnode: k } = c;
        {
          const Se = _s(c);
          if (Se) {
            x && (x.el = k.el, M(c, x, D)), Se.asyncDep.then(() => {
              c.isUnmounted || O();
            });
            return;
          }
        }
        let B = x, pe;
        d.NODE_ENV !== "production" && tn(x || c.vnode), it(c, !1), x ? (x.el = k.el, M(c, x, D)) : x = k, V && Ct(V), (pe = x.props && x.props.onVnodeBeforeUpdate) && Pe(pe, j, x, k), it(c, !0), d.NODE_ENV !== "production" && ht(c, "render");
        const ue = zo(c);
        d.NODE_ENV !== "production" && _t(c, "render");
        const Ce = c.subTree;
        c.subTree = ue, d.NODE_ENV !== "production" && ht(c, "patch"), I(
          Ce,
          ue,
          // parent may have changed if it's in a teleport
          a(Ce.el),
          // anchor may have changed if it's in a fragment
          Xt(Ce),
          c,
          m,
          E
        ), d.NODE_ENV !== "production" && _t(c, "patch"), x.el = ue.el, B === null && Jl(c, ue.el), A && he(A, m), (pe = x.props && x.props.onVnodeUpdated) && he(
          () => Pe(pe, j, x, k),
          m
        ), d.NODE_ENV !== "production" && Yi(c), d.NODE_ENV !== "production" && nn();
      } else {
        let x;
        const { el: V, props: A } = f, { bm: j, m: k, parent: B, root: pe, type: ue } = c, Ce = Ft(f);
        it(c, !1), j && Ct(j), !Ce && (x = A && A.onVnodeBeforeMount) && Pe(x, B, f), it(c, !0);
        {
          pe.ce && pe.ce._injectChildStyle(ue), d.NODE_ENV !== "production" && ht(c, "render");
          const Se = c.subTree = zo(c);
          d.NODE_ENV !== "production" && _t(c, "render"), d.NODE_ENV !== "production" && ht(c, "patch"), I(
            null,
            Se,
            _,
            b,
            c,
            m,
            E
          ), d.NODE_ENV !== "production" && _t(c, "patch"), f.el = Se.el;
        }
        if (k && he(k, m), !Ce && (x = A && A.onVnodeMounted)) {
          const Se = f;
          he(
            () => Pe(x, B, Se),
            m
          );
        }
        (f.shapeFlag & 256 || B && Ft(B.vnode) && B.vnode.shapeFlag & 256) && c.a && he(c.a, m), c.isMounted = !0, d.NODE_ENV !== "production" && Lr(c), f = _ = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Ni(O);
    c.scope.off();
    const N = c.update = y.run.bind(y), T = c.job = y.runIfDirty.bind(y);
    T.i = c, T.id = c.uid, y.scheduler = () => Vn(T), it(c, !0), d.NODE_ENV !== "production" && (y.onTrack = c.rtc ? (x) => Ct(c.rtc, x) : void 0, y.onTrigger = c.rtg ? (x) => Ct(c.rtg, x) : void 0), N();
  }, M = (c, f, _) => {
    f.component = c;
    const b = c.vnode.props;
    c.vnode = f, c.next = null, Dl(c, f.props, b, _), Il(c, f.children, _), Ke(), Lo(c), ke();
  }, Ve = (c, f, _, b, m, E, D, O, y = !1) => {
    const N = c && c.children, T = c ? c.shapeFlag : 0, x = f.children, { patchFlag: V, shapeFlag: A } = f;
    if (V > 0) {
      if (V & 128) {
        Dt(
          N,
          x,
          _,
          b,
          m,
          E,
          D,
          O,
          y
        );
        return;
      } else if (V & 256) {
        $n(
          N,
          x,
          _,
          b,
          m,
          E,
          D,
          O,
          y
        );
        return;
      }
    }
    A & 8 ? (T & 16 && wt(N, m, E), x !== N && p(_, x)) : T & 16 ? A & 16 ? Dt(
      N,
      x,
      _,
      b,
      m,
      E,
      D,
      O,
      y
    ) : wt(N, m, E, !0) : (T & 8 && p(_, ""), A & 16 && ce(
      x,
      _,
      b,
      m,
      E,
      D,
      O,
      y
    ));
  }, $n = (c, f, _, b, m, E, D, O, y) => {
    c = c || mt, f = f || mt;
    const N = c.length, T = f.length, x = Math.min(N, T);
    let V;
    for (V = 0; V < x; V++) {
      const A = f[V] = y ? Xe(f[V]) : De(f[V]);
      I(
        c[V],
        A,
        _,
        null,
        m,
        E,
        D,
        O,
        y
      );
    }
    N > T ? wt(
      c,
      m,
      E,
      !0,
      !1,
      x
    ) : ce(
      f,
      _,
      b,
      m,
      E,
      D,
      O,
      y,
      x
    );
  }, Dt = (c, f, _, b, m, E, D, O, y) => {
    let N = 0;
    const T = f.length;
    let x = c.length - 1, V = T - 1;
    for (; N <= x && N <= V; ) {
      const A = c[N], j = f[N] = y ? Xe(f[N]) : De(f[N]);
      if (Pt(A, j))
        I(
          A,
          j,
          _,
          null,
          m,
          E,
          D,
          O,
          y
        );
      else
        break;
      N++;
    }
    for (; N <= x && N <= V; ) {
      const A = c[x], j = f[V] = y ? Xe(f[V]) : De(f[V]);
      if (Pt(A, j))
        I(
          A,
          j,
          _,
          null,
          m,
          E,
          D,
          O,
          y
        );
      else
        break;
      x--, V--;
    }
    if (N > x) {
      if (N <= V) {
        const A = V + 1, j = A < T ? f[A].el : b;
        for (; N <= V; )
          I(
            null,
            f[N] = y ? Xe(f[N]) : De(f[N]),
            _,
            j,
            m,
            E,
            D,
            O,
            y
          ), N++;
      }
    } else if (N > V)
      for (; N <= x; )
        Ye(c[N], m, E, !0), N++;
    else {
      const A = N, j = N, k = /* @__PURE__ */ new Map();
      for (N = j; N <= V; N++) {
        const se = f[N] = y ? Xe(f[N]) : De(f[N]);
        se.key != null && (d.NODE_ENV !== "production" && k.has(se.key) && v(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), k.set(se.key, N));
      }
      let B, pe = 0;
      const ue = V - j + 1;
      let Ce = !1, Se = 0;
      const Vt = new Array(ue);
      for (N = 0; N < ue; N++) Vt[N] = 0;
      for (N = A; N <= x; N++) {
        const se = c[N];
        if (pe >= ue) {
          Ye(se, m, E, !0);
          continue;
        }
        let Te;
        if (se.key != null)
          Te = k.get(se.key);
        else
          for (B = j; B <= V; B++)
            if (Vt[B - j] === 0 && Pt(se, f[B])) {
              Te = B;
              break;
            }
        Te === void 0 ? Ye(se, m, E, !0) : (Vt[Te - j] = N + 1, Te >= Se ? Se = Te : Ce = !0, I(
          se,
          f[Te],
          _,
          null,
          m,
          E,
          D,
          O,
          y
        ), pe++);
      }
      const Ao = Ce ? Hl(Vt) : mt;
      for (B = Ao.length - 1, N = ue - 1; N >= 0; N--) {
        const se = j + N, Te = f[se], Io = se + 1 < T ? f[se + 1].el : b;
        Vt[N] === 0 ? I(
          null,
          Te,
          _,
          Io,
          m,
          E,
          D,
          O,
          y
        ) : Ce && (B < 0 || N !== Ao[B] ? dt(Te, _, Io, 2) : B--);
      }
    }
  }, dt = (c, f, _, b, m = null) => {
    const { el: E, type: D, transition: O, children: y, shapeFlag: N } = c;
    if (N & 6) {
      dt(c.component.subTree, f, _, b);
      return;
    }
    if (N & 128) {
      c.suspense.move(f, _, b);
      return;
    }
    if (N & 64) {
      D.move(c, f, _, xt);
      return;
    }
    if (D === Ae) {
      o(E, f, _);
      for (let x = 0; x < y.length; x++)
        dt(y[x], f, _, b);
      o(c.anchor, f, _);
      return;
    }
    if (D === ln) {
      de(c, f, _);
      return;
    }
    if (b !== 2 && N & 1 && O)
      if (b === 0)
        O.beforeEnter(E), o(E, f, _), he(() => O.enter(E), m);
      else {
        const { leave: x, delayLeave: V, afterLeave: A } = O, j = () => o(E, f, _), k = () => {
          x(E, () => {
            j(), A && A();
          });
        };
        V ? V(E, j, k) : k();
      }
    else
      o(E, f, _);
  }, Ye = (c, f, _, b = !1, m = !1) => {
    const {
      type: E,
      props: D,
      ref: O,
      children: y,
      dynamicChildren: N,
      shapeFlag: T,
      patchFlag: x,
      dirs: V,
      cacheIndex: A
    } = c;
    if (x === -2 && (m = !1), O != null && mn(O, null, _, c, !0), A != null && (f.renderCache[A] = void 0), T & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const j = T & 1 && V, k = !Ft(c);
    let B;
    if (k && (B = D && D.onVnodeBeforeUnmount) && Pe(B, f, c), T & 6)
      As(c.component, _, b);
    else {
      if (T & 128) {
        c.suspense.unmount(_, b);
        return;
      }
      j && ot(c, null, f, "beforeUnmount"), T & 64 ? c.type.remove(
        c,
        f,
        _,
        xt,
        b
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Ae || x > 0 && x & 64) ? wt(
        N,
        f,
        _,
        !1,
        !0
      ) : (E === Ae && x & 384 || !m && T & 16) && wt(y, f, _), b && An(c);
    }
    (k && (B = D && D.onVnodeUnmounted) || j) && he(() => {
      B && Pe(B, f, c), j && ot(c, null, f, "unmounted");
    }, _);
  }, An = (c) => {
    const { type: f, el: _, anchor: b, transition: m } = c;
    if (f === Ae) {
      d.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((D) => {
        D.type === xe ? i(D.el) : An(D);
      }) : $s(_, b);
      return;
    }
    if (f === ln) {
      C(c);
      return;
    }
    const E = () => {
      i(_), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: D, delayLeave: O } = m, y = () => D(_, E);
      O ? O(c.el, E, y) : y();
    } else
      E();
  }, $s = (c, f) => {
    let _;
    for (; c !== f; )
      _ = g(c), i(c), c = _;
    i(f);
  }, As = (c, f, _) => {
    d.NODE_ENV !== "production" && c.type.__hmrId && Rr(c);
    const { bum: b, scope: m, job: E, subTree: D, um: O, m: y, a: N } = c;
    Yo(y), Yo(N), b && Ct(b), m.stop(), E && (E.flags |= 8, Ye(D, c, f, _)), O && he(O, f), he(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), d.NODE_ENV !== "production" && Br(c);
  }, wt = (c, f, _, b = !1, m = !1, E = 0) => {
    for (let D = E; D < c.length; D++)
      Ye(c[D], f, _, b, m);
  }, Xt = (c) => {
    if (c.shapeFlag & 6)
      return Xt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = g(c.anchor || c.el), _ = f && f[Gr];
    return _ ? g(_) : f;
  };
  let In = !1;
  const $o = (c, f, _) => {
    c == null ? f._vnode && Ye(f._vnode, null, null, !0) : I(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      _
    ), f._vnode = c, In || (In = !0, Lo(), ki(), In = !1);
  }, xt = {
    p: I,
    um: Ye,
    m: dt,
    r: An,
    mt: Je,
    mc: ce,
    pc: Ve,
    pbc: Ge,
    n: Xt,
    o: e
  };
  return {
    render: $o,
    hydrate: void 0,
    createApp: Nl($o)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function it({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function jl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (P(o) && P(i))
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = Xe(i[s]), l.el = r.el), !n && l.patchFlag !== -2 && rn(r, l)), l.type === Jt && (l.el = r.el), d.NODE_ENV !== "production" && l.type === xe && !l.el && (l.el = r.el);
    }
}
function Hl(e) {
  const t = e.slice(), n = [0];
  let o, i, s, r, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (s = 0, r = n.length - 1; s < r; )
        l = s + r >> 1, e[n[l]] < h ? s = l + 1 : r = l;
      h < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, r = n[s - 1]; s-- > 0; )
    n[s] = r, r = t[r];
  return n;
}
function _s(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _s(t);
}
function Yo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ll = Symbol.for("v-scx"), Ul = () => {
  {
    const e = sn(Ll);
    return e || d.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Bn(e, t, n) {
  return d.NODE_ENV !== "production" && !$(t) && v(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gs(e, t, n);
}
function gs(e, t, n = W) {
  const { immediate: o, deep: i, flush: s, once: r } = n;
  d.NODE_ENV !== "production" && !t && (o !== void 0 && v(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && v(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && v(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = J({}, n);
  d.NODE_ENV !== "production" && (l.onWarn = v);
  const u = t && o || !t && s !== "post";
  let h;
  if (Wt) {
    if (s === "sync") {
      const w = Ul();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!u) {
      const w = () => {
      };
      return w.stop = Z, w.resume = Z, w.pause = Z, w;
    }
  }
  const p = te;
  l.call = (w, S, I) => He(w, p, S, I);
  let a = !1;
  s === "post" ? l.scheduler = (w) => {
    he(w, p && p.suspense);
  } : s !== "sync" && (a = !0, l.scheduler = (w, S) => {
    S ? w() : Vn(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), a && (w.flags |= 2, p && (w.id = p.uid, w.i = p));
  };
  const g = xr(e, t, l);
  return Wt && (h ? h.push(g) : u && g()), g;
}
function Bl(e, t, n) {
  const o = this.proxy, i = Y(e) ? e.includes(".") ? ms(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const r = Yt(this), l = gs(i, s.bind(o), n);
  return r(), l;
}
function ms(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const Wl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${me(t)}Modifiers`];
function Kl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || W;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(st(ae(t)) in a)) && v(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(ae(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || v(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const s = t.startsWith("update:"), r = s && Wl(o, t.slice(7));
  if (r && (r.trim && (i = n.map((p) => Y(p) ? p.trim() : p)), r.number && (i = n.map(Us))), d.NODE_ENV !== "production" && kr(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[st(p)] && v(
      `Event "${p}" is emitted in component ${Pn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${me(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = st(t)] || // also try camelCase event handler (#2249)
  o[l = st(ae(t))];
  !u && s && (u = o[l = st(me(t))]), u && He(
    u,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, He(
      h,
      e,
      6,
      i
    );
  }
}
function Es(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let r = {}, l = !1;
  if (!$(e)) {
    const u = (h) => {
      const p = Es(h, t, !0);
      p && (l = !0, J(r, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (q(e) && o.set(e, null), null) : (P(s) ? s.forEach((u) => r[u] = null) : J(r, s), q(e) && o.set(e, r), r);
}
function Sn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, me(t)) || H(e, t));
}
let no = !1;
function Nn() {
  no = !0;
}
function zo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [s],
    slots: r,
    attrs: l,
    emit: u,
    render: h,
    renderCache: p,
    props: a,
    data: g,
    setupState: w,
    ctx: S,
    inheritAttrs: I
  } = e, ne = gn(e);
  let K, z;
  d.NODE_ENV !== "production" && (no = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = i || o, ee = d.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(C, {
        get(ye, oe, ce) {
          return v(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ye, oe, ce);
        }
      }) : C;
      K = De(
        h.call(
          ee,
          C,
          p,
          d.NODE_ENV !== "production" ? Me(a) : a,
          w,
          g,
          S
        )
      ), z = l;
    } else {
      const C = t;
      d.NODE_ENV !== "production" && l === a && Nn(), K = De(
        C.length > 1 ? C(
          d.NODE_ENV !== "production" ? Me(a) : a,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return Nn(), Me(l);
            },
            slots: r,
            emit: u
          } : { attrs: l, slots: r, emit: u }
        ) : C(
          d.NODE_ENV !== "production" ? Me(a) : a,
          null
        )
      ), z = t.props ? l : kl(l);
    }
  } catch (C) {
    jt.length = 0, qt(C, e, 1), K = et(xe);
  }
  let U = K, de;
  if (d.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([U, de] = bs(K)), z && I !== !1) {
    const C = Object.keys(z), { shapeFlag: ee } = U;
    if (C.length) {
      if (ee & 7)
        s && C.some(un) && (z = ql(
          z,
          s
        )), U = nt(U, z, !1, !0);
      else if (d.NODE_ENV !== "production" && !no && U.type !== xe) {
        const ye = Object.keys(l), oe = [], ce = [];
        for (let Le = 0, Ge = ye.length; Le < Ge; Le++) {
          const ve = ye[Le];
          Kt(ve) ? un(ve) || oe.push(ve[2].toLowerCase() + ve.slice(3)) : ce.push(ve);
        }
        ce.length && v(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && v(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !Xo(U) && v(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = nt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !Xo(U) && v(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vo(U, n.transition)), d.NODE_ENV !== "production" && de ? de(U) : K = U, gn(ne), K;
}
const bs = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Vo(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return bs(o);
  } else return [e, void 0];
  const i = t.indexOf(o), s = n ? n.indexOf(o) : -1, r = (l) => {
    t[i] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [De(o), r];
};
function Vo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Tn(i)) {
      if (i.type !== xe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Vo(n.children);
      }
    } else
      return;
  }
  return n;
}
const kl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ql = (e, t) => {
  const n = {};
  for (const o in e)
    (!un(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === xe;
function Gl(e, t, n) {
  const { props: o, children: i, component: s } = e, { props: r, children: l, patchFlag: u } = t, h = s.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || l) && Fe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Zo(o, r, h) : !!r;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (r[g] !== o[g] && !Sn(h, g))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? Zo(o, r, h) : !0 : !!r;
  return !1;
}
function Zo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    if (t[s] !== e[s] && !Sn(n, s))
      return !0;
  }
  return !1;
}
function Jl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ns = (e) => e.__isSuspense;
function Yl(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Ki(e);
}
const Ae = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), xe = Symbol.for("v-cmt"), ln = Symbol.for("v-stc"), jt = [];
let be = null;
function zl(e = !1) {
  jt.push(be = e ? null : []);
}
function Xl() {
  jt.pop(), be = jt[jt.length - 1] || null;
}
let Bt = 1;
function Qo(e, t = !1) {
  Bt += e, e < 0 && be && t && (be.hasOnce = !0);
}
function Zl(e) {
  return e.dynamicChildren = Bt > 0 ? be || mt : null, Xl(), Bt > 0 && be && be.push(e), e;
}
function Ql(e, t, n, o, i, s) {
  return Zl(
    Os(
      e,
      t,
      n,
      o,
      i,
      s,
      !0
    )
  );
}
function Tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = on.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ec = (...e) => vs(
  ...e
), ys = ({ key: e }) => e ?? null, cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || Q(e) || $(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function Os(e, t = null, n = null, o = 0, i = null, s = e === Ae ? 0 : 1, r = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ys(t),
    ref: t && cn(t),
    scopeId: Xi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return l ? (Co(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= Y(n) ? 8 : 16), d.NODE_ENV !== "production" && u.key !== u.key && v("VNode created with invalid key (NaN). VNode type:", u.type), Bt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && be.push(u), u;
}
const et = d.NODE_ENV !== "production" ? ec : vs;
function vs(e, t = null, n = null, o = 0, i = null, s = !1) {
  if ((!e || e === fl) && (d.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = xe), Tn(e)) {
    const l = nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Co(l, n), Bt > 0 && !s && be && (l.shapeFlag & 6 ? be[be.indexOf(e)] = l : be.push(l)), l.patchFlag = -2, l;
  }
  if (Cs(e) && (e = e.__vccOpts), t) {
    t = tc(t);
    let { class: l, style: u } = t;
    l && !Y(l) && (t.class = ho(l)), q(u) && (dn(u) && !P(u) && (u = J({}, u)), t.style = po(u));
  }
  const r = Y(e) ? 1 : Ns(e) ? 128 : Jr(e) ? 64 : q(e) ? 4 : $(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && r & 4 && dn(e) && (e = R(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Os(
    e,
    t,
    n,
    o,
    i,
    r,
    s,
    !0
  );
}
function tc(e) {
  return e ? dn(e) || cs(e) ? J({}, e) : e : null;
}
function nt(e, t, n = !1, o = !1) {
  const { props: i, ref: s, patchFlag: r, children: l, transition: u } = e, h = t ? oc(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ys(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? P(s) ? s.concat(cn(t)) : [s, cn(t)] : cn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && r === -1 && P(l) ? l.map(Ds) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ae ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && vo(
    p,
    u.clone(p)
  ), p;
}
function Ds(e) {
  const t = nt(e);
  return P(e.children) && (t.children = e.children.map(Ds)), t;
}
function nc(e = " ", t = 0) {
  return et(Jt, null, e, t);
}
function De(e) {
  return e == null || typeof e == "boolean" ? et(xe) : P(e) ? et(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tn(e) ? Xe(e) : et(Jt, null, String(e));
}
function Xe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function Co(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Co(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !cs(t) ? t._ctx = Ee : i === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [nc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function oc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = ho([t.class, o.class]));
      else if (i === "style")
        t.style = po([t.style, o.style]);
      else if (Kt(i)) {
        const s = t[i], r = o[i];
        r && s !== r && !(P(s) && s.includes(r)) && (t[i] = s ? [].concat(s, r) : r);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Pe(e, t, n, o = null) {
  He(e, t, 7, [
    n,
    o
  ]);
}
const ic = ss();
let sc = 0;
function rc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || ic, s = {
    uid: sc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new er(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: us(o, i),
    emitsOptions: Es(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.NODE_ENV !== "production" ? s.ctx = ul(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Kl.bind(null, s), e.ce && e.ce(s), s;
}
let te = null;
const lc = () => te || Ee;
let yn, oo;
{
  const e = kt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (s) => {
      i.length > 1 ? i.forEach((r) => r(s)) : i[0](s);
    };
  };
  yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), oo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wt = n
  );
}
const Yt = (e) => {
  const t = te;
  return yn(e), e.scope.on(), () => {
    e.scope.off(), yn(t);
  };
}, ei = () => {
  te && te.scope.off(), yn(null);
}, cc = /* @__PURE__ */ We("slot,component");
function io(e, { isNativeTag: t }) {
  (cc(e) || t(e)) && v(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ws(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function fc(e, t = !1, n = !1) {
  t && oo(t);
  const { props: o, children: i } = e.vnode, s = ws(e);
  Ol(e, o, s, t), Al(e, i, n);
  const r = s ? uc(e, t) : void 0;
  return t && oo(!1), r;
}
function uc(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && io(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let r = 0; r < s.length; r++)
        io(s[r], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let r = 0; r < s.length; r++)
        Zi(s[r]);
    }
    o.compilerOptions && ac() && v(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ns), d.NODE_ENV !== "production" && al(e);
  const { setup: i } = o;
  if (i) {
    Ke();
    const s = e.setupContext = i.length > 1 ? pc(e) : null, r = Yt(e), l = vt(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? Me(e.props) : e.props,
        s
      ]
    ), u = co(l);
    if (ke(), r(), (u || e.sp) && !Ft(e) && Qi(e), u) {
      if (l.then(ei, ei), t)
        return l.then((h) => {
          ti(e, h, t);
        }).catch((h) => {
          qt(h, e, 0);
        });
      if (e.asyncDep = l, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ti(e, l, t);
  } else
    xs(e, t);
}
function ti(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (d.NODE_ENV !== "production" && Tn(t) && v(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Hi(t), d.NODE_ENV !== "production" && dl(e)) : d.NODE_ENV !== "production" && t !== void 0 && v(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), xs(e, n);
}
const ac = () => !0;
function xs(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Z);
  {
    const i = Yt(e);
    Ke();
    try {
      hl(e);
    } finally {
      ke(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : v("Component is missing template or render function: ", o));
}
const ni = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return Nn(), X(e, "get", ""), e[t];
  },
  set() {
    return v("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return v("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function dc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function pc(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (P(n) ? o = "array" : Q(n) && (o = "ref")), o !== "object" && v(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ni));
      },
      get slots() {
        return o || (o = dc(e));
      },
      get emit() {
        return (i, ...s) => e.emit(i, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ni),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function So(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hi(yr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ut)
        return ut[n](e);
    },
    has(t, n) {
      return n in t || n in ut;
    }
  })) : e.proxy;
}
const hc = /(?:^|[-_])(\w)/g, _c = (e) => e.replace(hc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vs(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let o = Vs(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (s) => {
      for (const r in s)
        if (s[r] === t)
          return r;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? _c(o) : n ? "App" : "Anonymous";
}
function Cs(e) {
  return $(e) && "__vccOpts" in e;
}
const gc = (e, t) => {
  const n = Dr(e, t, Wt);
  if (d.NODE_ENV !== "production") {
    const o = lc();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function mc() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return q(a) ? a.__isVue ? ["div", e, "VueInstance"] : Q(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : bt(a) ? [
        "div",
        {},
        ["span", e, Ne(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${tt(a) ? " (readonly)" : ""}`
      ] : tt(a) ? [
        "div",
        {},
        ["span", e, Ne(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const g = [];
    a.type.props && a.props && g.push(r("props", R(a.props))), a.setupState !== W && g.push(r("setup", a.setupState)), a.data !== W && g.push(r("data", R(a.data)));
    const w = u(a, "computed");
    w && g.push(r("computed", w));
    const S = u(a, "inject");
    return S && g.push(r("injected", S)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function r(a, g) {
    return g = J({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          l(g[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : q(a) ? ["object", { object: g ? R(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const w = a.type;
    if ($(w))
      return;
    const S = {};
    for (const I in a.ctx)
      h(w, I, g) && (S[I] = a.ctx[I]);
    return S;
  }
  function h(a, g, w) {
    const S = a[w];
    if (P(S) && S.includes(g) || q(S) && g in S || a.extends && h(a.extends, g, w) || a.mixins && a.mixins.some((I) => h(I, g, w)))
      return !0;
  }
  function p(a) {
    return Ne(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const oi = "3.5.13", Oe = d.NODE_ENV !== "production" ? v : Z;
var ie = {};
let so;
const ii = typeof window < "u" && window.trustedTypes;
if (ii)
  try {
    so = /* @__PURE__ */ ii.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ie.NODE_ENV !== "production" && Oe(`Error creating trusted types policy: ${e}`);
  }
const Ss = so ? (e) => so.createHTML(e) : (e) => e, Ec = "http://www.w3.org/2000/svg", bc = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, si = Be && /* @__PURE__ */ Be.createElement("template"), Nc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Be.createElementNS(Ec, e) : t === "mathml" ? Be.createElementNS(bc, e) : n ? Be.createElement(e, { is: n }) : Be.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Be.createTextNode(e),
  createComment: (e) => Be.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Be.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, s) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      si.innerHTML = Ss(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = si.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, yc = Symbol("_vtc");
function Oc(e, t, n) {
  const o = e[yc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ri = Symbol("_vod"), vc = Symbol("_vsh"), Dc = Symbol(ie.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), wc = /(^|;)\s*display\s*:/;
function xc(e, t, n) {
  const o = e.style, i = Y(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Y(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && fn(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && fn(o, r, "");
    for (const r in n)
      r === "display" && (s = !0), fn(o, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = o[Dc];
      r && (n += ";" + r), o.cssText = n, s = wc.test(n);
    }
  } else t && e.removeAttribute("style");
  ri in e && (e[ri] = s ? o.display : "", e[vc] && (o.display = "none"));
}
const Vc = /[^\\];\s*$/, li = /\s*!important$/;
function fn(e, t, n) {
  if (P(n))
    n.forEach((o) => fn(e, t, o));
  else if (n == null && (n = ""), ie.NODE_ENV !== "production" && Vc.test(n) && Oe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Cc(e, t);
    li.test(n) ? e.setProperty(
      me(o),
      n.replace(li, ""),
      "important"
    ) : e[o] = n;
  }
}
const ci = ["Webkit", "Moz", "ms"], Wn = {};
function Cc(e, t) {
  const n = Wn[t];
  if (n)
    return n;
  let o = ae(t);
  if (o !== "filter" && o in e)
    return Wn[t] = o;
  o = Dn(o);
  for (let i = 0; i < ci.length; i++) {
    const s = ci[i] + o;
    if (s in e)
      return Wn[t] = s;
  }
  return t;
}
const fi = "http://www.w3.org/1999/xlink";
function ui(e, t, n, o, i, s = Qs(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fi, t.slice(6, t.length)) : e.setAttributeNS(fi, t, n) : n == null || s && !bi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Ot(n) ? String(n) : n
  );
}
function ai(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ss(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = bi(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ie.NODE_ENV !== "production" && !r && Oe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(i || t);
}
function Sc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Tc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const di = Symbol("_vei");
function Pc(e, t, n, o, i = null) {
  const s = e[di] || (e[di] = {}), r = s[t];
  if (o && r)
    r.value = ie.NODE_ENV !== "production" ? hi(o, t) : o;
  else {
    const [l, u] = $c(t);
    if (o) {
      const h = s[t] = Rc(
        ie.NODE_ENV !== "production" ? hi(o, t) : o,
        i
      );
      Sc(e, l, h, u);
    } else r && (Tc(e, l, r, u), s[t] = void 0);
  }
}
const pi = /(?:Once|Passive|Capture)$/;
function $c(e) {
  let t;
  if (pi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(pi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : me(e.slice(2)), t];
}
let Kn = 0;
const Ac = /* @__PURE__ */ Promise.resolve(), Ic = () => Kn || (Ac.then(() => Kn = 0), Kn = Date.now());
function Rc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    He(
      Mc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Ic(), n;
}
function hi(e, t) {
  return $(e) || P(e) ? e : (Oe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Z);
}
function Mc(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const _i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fc = (e, t, n, o, i, s) => {
  const r = i === "svg";
  t === "class" ? Oc(e, o, r) : t === "style" ? xc(e, n, o) : Kt(t) ? un(t) || Pc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jc(e, t, o, r)) ? (ai(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ui(e, t, o, r, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Y(o)) ? ai(e, ae(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ui(e, t, o, r));
};
function jc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _i(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return _i(t) && Y(n) ? !1 : t in e;
}
const gi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hc(e, t, n) {
  const o = /* @__PURE__ */ Yr(e, t);
  uo(o) && J(o, t);
  class i extends To {
    constructor(r) {
      super(o, r, n);
    }
  }
  return i.def = o, i;
}
const Lc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class To extends Lc {
  constructor(t, n = {}, o = ro) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== ro ? this._root = this.shadowRoot : (ie.NODE_ENV !== "production" && this.shadowRoot && Oe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof To) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Bi(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const i of o)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: r } = o;
      let l;
      if (s && !P(s))
        for (const u in s) {
          const h = s[u];
          (h === Number || h && h.type === Number) && (u in this._props && (this._props[u] = Ro(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[ae(u)] = !0);
        }
      this._numberProps = l, i && this._resolveProps(o), this.shadowRoot ? this._applyStyles(r) : ie.NODE_ENV !== "production" && r && Oe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (o) => t(this._def = o, !0)
    ) : t(this._def);
  }
  _mount(t) {
    ie.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        H(this, o) ? ie.NODE_ENV !== "production" && Oe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ji(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = P(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i]);
    for (const i of o.map(ae))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(s) {
          this._setProp(i, s, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : gi;
    const i = ae(t);
    n && this._numberProps && this._numberProps[i] && (o = Ro(o)), this._setProp(i, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, i = !1) {
    if (n !== this._props[t] && (n === gi ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(me(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(me(t), n + "") : n || this.removeAttribute(me(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Bc(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = et(this._def, J(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ie.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const i = (s, r) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            uo(r[0]) ? J({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      o.emit = (s, ...r) => {
        i(s, r), me(s) !== s && i(me(s), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (o && s.setAttribute("nonce", o), s.textContent = t[i], this.shadowRoot.prepend(s), ie.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(s);
          }
        } else
          (this._styles || (this._styles = [])).push(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const i = t[o], s = i.getAttribute("name") || "default", r = this._slots[s], l = i.parentNode;
      if (r)
        for (const u of r) {
          if (n && u.nodeType === 1) {
            const h = n + "-s", p = document.createTreeWalker(u, 1);
            u.setAttribute(h, "");
            let a;
            for (; a = p.nextNode(); )
              a.setAttribute(h, "");
          }
          l.insertBefore(u, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (ie.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const Uc = /* @__PURE__ */ J({ patchProp: Fc }, Nc);
let mi;
function Ts() {
  return mi || (mi = Ml(Uc));
}
const Bc = (...e) => {
  Ts().render(...e);
}, ro = (...e) => {
  const t = Ts().createApp(...e);
  ie.NODE_ENV !== "production" && (Kc(t), kc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = qc(o);
    if (!i) return;
    const s = t._component;
    !$(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Wc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function Wc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Kc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ys(t) || zs(t) || Xs(t),
    writable: !1
  });
}
function kc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Oe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Oe(o), n;
      },
      set() {
        Oe(o);
      }
    });
  }
}
function qc(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return ie.NODE_ENV !== "production" && !t && Oe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ie.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Oe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Gc = {};
function Jc() {
  mc();
}
Gc.NODE_ENV !== "production" && Jc();
const Yc = {
  name: "App"
}, zc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Xc = { style: { color: "green" } };
function Zc(e, t, n, o, i, s) {
  return zl(), Ql("h1", Xc, "Este é um Web Component do Vue");
}
const Ps = /* @__PURE__ */ zc(Yc, [["render", Zc]]), Qc = /* @__PURE__ */ Hc(Ps);
customElements.define("vue-app", Qc);
ro(Ps).mount("#app");
