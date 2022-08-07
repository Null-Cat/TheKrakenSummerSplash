// #region uiTools
!function (t, e) { 'object' == typeof exports && 'object' == typeof module ? module.exports = e() : 'function' == typeof define && define.amd ? define('uiWidgets', [], e) : 'object' == typeof exports ? exports.uiWidgets = e() : t.uiWidgets = e() }(window, (function () { return function (t) { var e = {}; function i(n) { if (e[n]) return e[n].exports; var r = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports } return i.m = t, i.c = e, i.d = function (t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function (t) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && 'object' == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t) for (var r in t) i.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, i.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return i.d(e, 'a', e), e }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = '', i(i.s = 1) }([function (t, e, i) { 'use strict'; var n = Object.prototype.hasOwnProperty, r = '~'; function o() { } function a(t, e, i) { this.fn = t, this.context = e, this.once = i || !1 } function s(t, e, i, n, o) { if ('function' != typeof i) throw new TypeError('The listener must be a function'); var s = new a(i, n || t, o), u = r ? r + e : e; return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], s] : t._events[u].push(s) : (t._events[u] = s, t._eventsCount++), t } function u(t, e) { 0 == --t._eventsCount ? t._events = new o : delete t._events[e] } function c() { this._events = new o, this._eventsCount = 0 } Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), c.prototype.eventNames = function () { var t, e, i = []; if (0 === this._eventsCount) return i; for (e in t = this._events) n.call(t, e) && i.push(r ? e.slice(1) : e); return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i }, c.prototype.listeners = function (t) { var e = r ? r + t : t, i = this._events[e]; if (!i) return []; if (i.fn) return [i.fn]; for (var n = 0, o = i.length, a = new Array(o); n < o; n++)a[n] = i[n].fn; return a }, c.prototype.listenerCount = function (t) { var e = r ? r + t : t, i = this._events[e]; return i ? i.fn ? 1 : i.length : 0 }, c.prototype.emit = function (t, e, i, n, o, a) { var s = r ? r + t : t; if (!this._events[s]) return !1; var u, c, h = this._events[s], l = arguments.length; if (h.fn) { switch (h.once && this.removeListener(t, h.fn, void 0, !0), l) { case 1: return h.fn.call(h.context), !0; case 2: return h.fn.call(h.context, e), !0; case 3: return h.fn.call(h.context, e, i), !0; case 4: return h.fn.call(h.context, e, i, n), !0; case 5: return h.fn.call(h.context, e, i, n, o), !0; case 6: return h.fn.call(h.context, e, i, n, o, a), !0 }for (c = 1, u = new Array(l - 1); c < l; c++)u[c - 1] = arguments[c]; h.fn.apply(h.context, u) } else { var f, y = h.length; for (c = 0; c < y; c++)switch (h[c].once && this.removeListener(t, h[c].fn, void 0, !0), l) { case 1: h[c].fn.call(h[c].context); break; case 2: h[c].fn.call(h[c].context, e); break; case 3: h[c].fn.call(h[c].context, e, i); break; case 4: h[c].fn.call(h[c].context, e, i, n); break; default: if (!u) for (f = 1, u = new Array(l - 1); f < l; f++)u[f - 1] = arguments[f]; h[c].fn.apply(h[c].context, u) } } return !0 }, c.prototype.on = function (t, e, i) { return s(this, t, e, i, !1) }, c.prototype.once = function (t, e, i) { return s(this, t, e, i, !0) }, c.prototype.removeListener = function (t, e, i, n) { var o = r ? r + t : t; if (!this._events[o]) return this; if (!e) return u(this, o), this; var a = this._events[o]; if (a.fn) a.fn !== e || n && !a.once || i && a.context !== i || u(this, o); else { for (var s = 0, c = [], h = a.length; s < h; s++)(a[s].fn !== e || n && !a[s].once || i && a[s].context !== i) && c.push(a[s]); c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o) } return this }, c.prototype.removeAllListeners = function (t) { var e; return t ? (e = r ? r + t : t, this._events[e] && u(this, e)) : (this._events = new o, this._eventsCount = 0), this }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t.exports = c }, function (t, e, i) { 'use strict'; function n(t) { return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function r(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function o(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function a(t, e, i) { return e && o(t.prototype, e), i && o(t, i), t } function s(t, e) { return !e || 'object' !== n(e) && 'function' != typeof e ? c(t) : e } function u(t) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function c(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function h(t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && l(t, e) } function l(t, e) { return (l = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var f; (i.r(e), void 0 === Phaser.Sprite) ? f = function (t) { function e(t, i, n, o) { var a; r(this, e), a = s(this, u(e).call(this, t, i, n, o)), t.add.existing(c(a)); var h = Phaser.Display.Align.In; return a.alignInMapping = { 0: h.TopLeft, 1: h.TopCenter, 2: h.TopRight, 3: h.LeftTop, 4: h.LeftCenter, 5: h.LeftBottom, 6: h.Center, 7: h.RightTop, 8: h.RightCenter, 9: h.RightBottom, 10: h.BottomLeft, 11: h.BottomCenter, 12: h.BottomRight }, a } return h(e, Phaser.GameObjects.Sprite), a(e, [{ key: 'sendToBack', value: function () { this.depth = -9999 } }, { key: 'alignIn', value: function (t, e) { this.alignInMapping[e](this, t, t.width) } }, { key: 'addOutEvent', value: function (t, e) { this.on('pointerout', (function (i) { t.call(e, i) })) } }, { key: 'addUpEvent', value: function (t, e) { this.on('pointerup', (function (i) { t.call(e, i) })) } }, { key: 'addDownEvent', value: function (t, e) { this.on('pointerdown', (function (i) { t.call(e, i) })) } }, { key: 'addDragEvent', value: function (t, e) { this.on('drag', (function () { t.call(e) })) } }, { key: 'maskX', get: function () { return this.x } }, { key: 'maskY', get: function () { return this.y } }]), e }() : f = function (t) { function e(t, i, n, o) { var a; return r(this, e), a = s(this, u(e).call(this, t, i, n, o)), t.add.existing(c(a)), a } return h(e, Phaser.Sprite), a(e, [{ key: 'setInteractive', value: function () { this.inputEnabled = !0 } }, { key: 'disableInteractive', value: function () { this.inputEnabled = !1 } }, { key: 'addOutEvent', value: function (t, e) { this.events.onInputOut.add(t, e) } }, { key: 'addUpEvent', value: function (t, e) { this.events.onInputUp.add(t, e) } }, { key: 'addDownEvent', value: function (t, e) { this.events.onInputDown.add(t, e) } }, { key: 'maskX', get: function () { return 0 } }, { key: 'maskY', get: function () { return 0 } }, { key: 'displayHeight', get: function () { return this.height }, set: function (t) { this.height = t } }, { key: 'displayWidth', get: function () { return this.width }, set: function (t) { this.width = t } }]), e }(); var y, p = f; function d(t) { return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function b(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function v(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function g(t, e, i) { return e && v(t.prototype, e), i && v(t, i), t } function m(t, e) { return !e || 'object' !== d(e) && 'function' != typeof e ? w(t) : e } function k(t) { return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function w(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function x(t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && O(t, e) } function O(t, e) { return (O = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } void 0 === Phaser.Button ? y = function (t) { function e(t, i, n, r, o, a, s, u, c, h) { var l; b(this, e), l = m(this, k(e).call(this, t, i, n, r)), t.add.existing(w(l)), l.game = t, l.overKey = s, l.outKey = u, l.downKey = c, l.upKey = h, l.setInteractive({ useHandCursor: !0 }); var f = a; return null == f && (f = w(l)), l.on('pointerdown', (function (t) { o.call(f, t) })), l.on('pointerover', l.onOver, w(l)), l.on('pointerout', l.onOut, w(l)), l.on('pointerdown', l.onDown, w(l)), l.on('pointerup', l.onUp, w(l)), l } return x(e, t), g(e, [{ key: 'onOver', value: function () { this.setFrame(this.overKey) } }, { key: 'onOut', value: function () { this.setFrame(this.outKey) } }, { key: 'onDown', value: function () { this.setFrame(this.downKey) } }, { key: 'onUp', value: function () { this.setFrame(this.upKey) } }, { key: 'updateDrag', value: function (t, e, i, n) { if (e.vertical) e.draggableArea.y + e.draggableArea.h >= n && e.draggableArea.y <= n && (e.y = n); else { var r = i + e.displayWidth; e.draggableArea.x + e.draggableArea.w >= r && e.draggableArea.x <= i && (e.x = i) } } }, { key: 'setDragBounds', value: function (t) { this.draggableArea = t } }, { key: 'enableDragging', value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; this.setInteractive({ useHandCursor: !0 }), this.vertical = t, this.game.input.setDraggable(this), this.game.input.on('drag', this.updateDrag) } }]), e }(p) : y = function (t) { function e(t, i, n, r, o, a, s, u, c, h) { var l; return b(this, e), l = m(this, k(e).call(this, t, i, n, r, o, a, s, u, c, h)), t.add.existing(w(l)), l } return x(e, Phaser.Button), g(e, [{ key: 'setInteractive', value: function () { this.inputEnabled = !0, this.input.useHandCursor = !0 } }, { key: 'disableInteractive', value: function () { this.inputEnabled = !1 } }, { key: 'setDragBounds', value: function (t) { this.input.boundsRect = new Phaser.Rectangle(t.x, t.y, t.w, t.h) } }, { key: 'enableDragging', value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; this.inputEnabled = !0, this.input.enableDrag(), t ? this.input.allowHorizontalDrag = !1 : this.input.allowVerticalDrag = !1 } }, { key: 'addOutEvent', value: function (t, e) { this.events.onInputOut.add(t, e) } }, { key: 'addUpEvent', value: function (t, e) { this.events.onInputUp.add(t, e) } }, { key: 'addDownEvent', value: function (t, e) { this.events.onInputDown.add(t, e) } }, { key: 'addDragEvent', value: function (t, e) { this.events.onDragUpdate.add(t, e) } }, { key: 'displayHeight', get: function () { return this.height }, set: function (t) { this.height = t } }, { key: 'displayWidth', get: function () { return this.width }, set: function (t) { this.width = t } }]), e }(); var S, P = y, _ = void 0 === Phaser.Easing ? Phaser.Math.Easing : Phaser.Easing; function j(t) { return (j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function T(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function E(t, e) { return !e || 'object' !== j(e) && 'function' != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function R(t) { return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function C(t, e) { return (C = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } void 0 === Phaser.Graphics ? S = Phaser.GameObjects.Graphics : S = function (t) { function e(t, i) { return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), E(this, R(e).call(this, t, i.x, i.y)) } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && C(t, e) }(e, Phaser.Graphics), i = e, (n = [{ key: 'fillStyle', value: function (t, e) { this.beginFill(t, e) } }, { key: 'fillRect', value: function (t, e, i, n) { this.drawRect(t, e, i, n), this.endFill() } }]) && T(i.prototype, n), r && T(i, r), e }(); var A, I = S; function D(t) { return (D = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function B(t, e) { return !e || 'object' !== D(e) && 'function' != typeof e ? M(t) : e } function z(t) { return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function M(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function H(t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && V(t, e) } function V(t, e) { return (V = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } function W(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function N(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function K(t, e, i) { return e && N(t.prototype, e), i && N(t, i), t } if (void 0 === Phaser.Group) { var G = function () { function t(e) { W(this, t), this.parent = e } return K(t, [{ key: 'x', get: function () { return this.parent.x } }, { key: 'y', get: function () { return this.parent.y } }]), t }(); A = function (t) { function e(t) { var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return W(this, e), i = B(this, z(e).call(this, t, n, r)), t.add.existing(M(i)), i.SORT_ASCENDING = -1, i.SORT_DESCENDING = 1, i.version = 3, i.alignToMapping = { 0: Phaser.Display.Align.To.TopLeft, 1: Phaser.Display.Align.To.TopCenter, 8: Phaser.Display.Align.To.RightCenter, 11: Phaser.Display.Align.To.BottomCenter }, i.worldPosition = new G(M(i)), i } return H(e, Phaser.GameObjects.Container), K(e, [{ key: 'getNodes', value: function () { return this.getAll() } }, { key: 'alignNodeToPrevious', value: function (t, e, i, n) { var r = this.getNodes(), o = r[r.length - 2]; void 0 !== o && this.alignToMapping[e](t, o, i, n) } }, { key: 'children', get: function () { return this.list } }, { key: 'realHeight', get: function () { return this.getBounds().height - this.y } }, { key: 'realWidth', get: function () { return this.getBounds().width - this.x } }]), e }() } else { A = function (t) { function e(t) { var i; return W(this, e), (i = B(this, z(e).call(this, t))).SORT_ASCENDING = -1, i.SORT_DESCENDING = 1, i } return H(e, Phaser.Group), K(e, [{ key: 'getNodes', value: function () { return this.children } }, { key: 'alignNodeToPrevious', value: function (t, e, i, n) { var r = this.getNodes(), o = r[r.length - 2]; void 0 !== o && t.alignTo(o, e, i, n) } }, { key: 'realHeight', get: function () { return this.height } }, { key: 'realWidth', get: function () { return this.width } }]), e }() } var Y, X = A; void 0 === Phaser.Rectangle ? Phaser.Geom.Rectangle : Phaser.Rectangle; function F(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function L(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function U(t, e, i) { return e && L(t.prototype, e), i && L(t, i), t } void 0 === Phaser.Tween ? Y = function () { function t(e) { F(this, t), this.game = e } return U(t, [{ key: 'add', value: function (t, e, i, n, r, o, a, s, u, c) { var h = { targets: t, duration: i, ease: n, onComplete: r, onUpdate: o, onStart: a, onCompleteScope: s, onUpdateScope: u, onStartScope: c }, l = Object.assign(h, e); this.game.tweens.add(l) } }]), t }() : Y = function () { function t(e) { F(this, t), this.game = e } return U(t, [{ key: 'add', value: function (t, e, i, n, r, o, a, s, u, c) { var h = this.game.add.tween(t).to(e, i, n, !0); o && h.onUpdateCallback(o, u), r && h.onComplete.add(r, s), a && h.onStart.add(a, c) } }]), t }(); var Q, Z = Y; function q(t) { return (q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function J(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function $(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function tt(t, e, i) { return e && $(t.prototype, e), i && $(t, i), t } function et(t, e) { return !e || 'object' !== q(e) && 'function' != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function it(t) { return (it = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function nt(t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && rt(t, e) } function rt(t, e) { return (rt = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } void 0 === Phaser.Graphics ? Q = function (t) { function e(t, i, n) { var r; return J(this, e), (r = et(this, it(e).call(this, t, { x: i, y: n }))).game = t, r.x = i, r.y = n, r } return nt(e, Phaser.GameObjects.Graphics), tt(e, [{ key: 'create', value: function (t, e, i, n) { this.fillStyle(16777215), this.beginPath(), this.fillRect(t, e, i, n); var r = this.createGeometryMask(); return r.x = r.geometryMask.x, r.y = r.geometryMask.y, r.width = i, r.height = n, r } }]), e }() : Q = function (t) { function e() { return J(this, e), et(this, it(e).apply(this, arguments)) } return nt(e, Phaser.Graphics), tt(e, [{ key: 'create', value: function (t, e, i, n) { return this.beginFill(255), this.drawRect(t, e, i, n), this.endFill(), this.geometryMask = this, this } }, { key: 'scaleX', get: function () { return this.scale.x }, set: function (t) { this.scale.x = t } }, { key: 'scaleY', get: function () { return this.scale.y }, set: function (t) { this.scale.y = t } }]), e }(); var ot = Q; function at(t) { return (at = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function st(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function ut(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function ct(t, e, i) { return e && ut(t.prototype, e), i && ut(t, i), t } function ht(t, e) { return !e || 'object' !== at(e) && 'function' != typeof e ? lt(t) : e } function lt(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function ft(t) { return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function yt(t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && pt(t, e) } function pt(t, e) { return (pt = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var dt = function (t) { function e() { return st(this, e), ht(this, ft(e).apply(this, arguments)) } return yt(e, t), ct(e, [{ key: 'setText', value: function (t, e) { return this.text && this.text.destroy(), 3 === this.version ? (this.text = this.game.add.text(0, 0, t, e), this.text.setOrigin(.5, .5)) : (this.text = this.game.add.text(this.width / 2, this.height / 2, t, e), this.text.anchor.set(.5, .5)), this.add(this.text), this } }, { key: 'setOrigin', value: function (t, e) { return this.sprite.setOrigin(t, e), this.text.x = this.sprite.width / 2, this.text.y = this.sprite.height / 2, this } }]), e }(X), bt = function (t) { function e(t, i, n, r) { var o; return st(this, e), (o = ht(this, ft(e).call(this, t))).game = t, t.add.existing(lt(o)), o.sprite = new p(t, i, n, r), o.add(o.sprite), o.width = o.sprite.width, o.height = o.sprite.height, o } return yt(e, t), e }(dt), vt = function (t) { function e(t, i, n, r, o, a, s, u, c, h) { var l; return st(this, e), (l = ht(this, ft(e).call(this, t))).game = t, t.add.existing(lt(l)), l.button = new P(t, i, n, r, o, a, s, u, c, h), l.add(l.button), l.width = l.button.width, l.height = l.button.height, l } return yt(e, t), ct(e, [{ key: 'eventTextYAdjustment', value: function (t) { var e = this, i = this.text.y; return this.button.addDownEvent((function () { e.text.y += t })), this.button.addUpEvent((function () { e.text.y = i })), this.button.addOutEvent((function () { e.text.y = i })), this } }]), e }(dt), gt = i(0); function mt(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } var kt = function () { function t(e, i, n) { !function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, t), this.game = e, this.vertical = i || !1, this.callbackContext = n, this.children = [], this.selected = null, this.idx = 0, this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP), this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN), this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT), this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT), this.upEvent = this.prevItem, this.downEvent = this.nextItem, this.emitter = new gt, this.activateGroup() } var e, i, n; return e = t, (i = [{ key: 'addNode', value: function (t) { this.children.push(t), this.selected = this.children[0], this.useBar() } }, { key: 'prevItem', value: function () { this.idx = this.idx - 1, this.idx < 0 && (this.idx = this.children.length - 1), this.selected = this.children[this.idx], this.useBar(), this.emitter.emit('previous', this, this.callbackContext) } }, { key: 'nextItem', value: function () { this.idx = (this.idx + 1) % this.children.length, this.selected = this.children[this.idx], this.useBar(), this.emitter.emit('next', this, this.callbackContext) } }, { key: 'activateGroup', value: function () { this.vertical ? (this.upKey.onDown.add(this.upEvent, this), this.downKey.onDown.add(this.downEvent, this)) : (this.leftKey.onDown.add(this.upEvent, this), this.rightKey.onDown.add(this.downEvent, this)) } }, { key: 'useBar', value: function () { this.vertical ? (this.leftKey.onDown.removeAll(), this.rightKey.onDown.removeAll(), this.leftKey.onDown.add(this.selected.upEvent, this.selected), this.rightKey.onDown.add(this.selected.downEvent, this.selected)) : (this.upKey.onDown.removeAll(), this.downKey.onDown.removeAll(), this.upKey.onDown.add(this.selected.upEvent, this.selected), this.downKey.onDown.add(this.selected.downEvent, this.selected)) } }]) && mt(e.prototype, i), n && mt(e, n), t }(), wt = {}; function xt(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function Ot(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function St(t, e, i) { return e && Ot(t.prototype, e), i && Ot(t, i), t } wt.modulo = function (t, e) { return (t % e + e) % e }, wt.operators = { '+': function (t, e) { return t + e }, '-': function (t, e) { return t - e } }; var Pt = function () { function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0; xt(this, t), this.x = e, this.y = i, this.z = n, this.sprite = r, this.position = o } return St(t, [{ key: 'getSinCosOfAngle', value: function (t) { var e = t * Math.PI / 180; return { cosine: Math.cos(e), sine: Math.sin(e) } } }, { key: 'rotateY', value: function (e) { var i = this.getSinCosOfAngle(e), n = this.z * i.cosine - this.x * i.sine; return new t(this.z * i.sine + this.x * i.cosine, this.y, n) } }, { key: 'rotateX', value: function (e) { var i = this.getSinCosOfAngle(e), n = this.y * i.cosine - this.z * i.sine, r = this.y * i.sine + this.z * i.cosine; return new t(this.x, n, r) } }, { key: 'rotateZ', value: function (e) { var i = this.getSinCosOfAngle(e); return new t(this.x * i.cosine - this.y * i.sine, this.x * i.sine + this.y * i.cosine, this.z) } }, { key: 'rotate', value: function (t, e) { var i = null; return 'x' === t ? i = this.rotateX(e) : 'y' === t ? i = this.rotateY(e) : 'z' === t && (i = this.rotateZ(e)), i } }, { key: 'project', value: function (e, i, n) { return new t(this.x * n + e, -this.y * n + i, this.z) } }]), t }(), _t = function () { function t(e, i, n, r, o, a, s, u, c) { xt(this, t), this.game = e, this.xy = i, this.sprites = n, this.firstPlace = r, this.zoom = o, this.axis = a, this.rotationAxis = s, this.visibleRange = u || null, this.tweenParams = c || { duration: 300, ease: _.Quadratic.Out }, this.emitter = new gt, this.group = new X(e) } return St(t, [{ key: 'activate', value: function () { var t, e, i, n, r, o; if (this.pointsAmount = this.sprites.length, this.totalPositions = this.pointsAmount - 1, this.rotationAmount = 360 / this.pointsAmount, null !== this.visibleRange) { for (var a = [], s = 0; s <= this.totalPositions; s++)a.push(s); var u = a.slice(0, this.visibleRange.max), c = a.slice(this.visibleRange.min); this.visiblePositions = u.concat(c) } this.moving = !1, this.direction = null, this.wheelItems = []; for (var h = 2 * Math.PI / this.pointsAmount, l = 0; l < this.pointsAmount; l++)this.sprites[l].wheelPosition = l, this.group.add(this.sprites[l]), t = h * l, e = 1 * Math.cos(t), i = 1 * Math.sin(t), 'x' === this.axis ? (n = -1, r = e, o = i) : 'y' === this.axis ? (n = e, r = -1, o = i) : 'z' === this.axis && (n = e, r = i, o = -1), this.wheelItems.push(new Pt(n, r, o, this.sprites[l], l)); this.active = this.wheelItems[this.firstPlace].sprite, this.project() } }, { key: 'moveBack', value: function () { !1 === this.moving && (this.moving = !0, this.direction = 0, 'x' === this.axis || 'z' === this.axis ? this.rotationAxis[this.axis] += this.rotationAmount : this.rotationAxis[this.axis] -= this.rotationAmount, this.updatePosition('+'), this.project(), this.resetAngle()) } }, { key: 'moveForward', value: function () { !1 === this.moving && (this.moving = !0, this.direction = 1, 'x' === this.axis || 'z' === this.axis ? this.rotationAxis[this.axis] -= this.rotationAmount : this.rotationAxis[this.axis] += this.rotationAmount, this.updatePosition('-'), this.project(), this.resetAngle()) } }, { key: 'project', value: function () { var t = this, e = ['x', 'y', 'z'], i = e.indexOf(this.axis); e.splice(i, 1); for (var n = 0; n < this.wheelItems.length; n++) { var r = this.wheelItems[n].rotate(this.axis, this.rotationAxis[this.axis]).rotate(e[0], this.rotationAxis[e[0]]).rotate(e[1], this.rotationAxis[e[1]]).project(this.xy.x, this.xy.y, this.zoom), o = this.wheelItems[n].sprite; if (o.lz = r.z, this.wheelItems[n].position === this.firstPlace) o.alpha = 1, this.active = this.wheelItems[n].sprite; else if (null !== this.visibleRange) { var a = this.visiblePositions.includes(this.wheelItems[n].position); o.alpha = a ? 1 : 0 } var s = new Z(this.game); n !== this.wheelItems.length - 1 ? s.add(o, { x: r.x, y: r.y }, this.tweenParams.duration, this.tweenParams.ease) : s.add(o, { x: r.x, y: r.y }, this.tweenParams.duration, this.tweenParams.ease, (function () { t.enableMoving(), t.dispatchOnComplete() }), null, (function () { t.dispatchOnStart() }), this, null, null) } this.group.sort('lz', X.SORT_ASCENDING) } }, { key: 'dispatchOnStart', value: function () { this.emitter.emit('start', this) } }, { key: 'dispatchOnComplete', value: function () { 0 === this.direction ? this.emitter.emit('backComplete', this) : 1 === this.direction && this.emitter.emit('forwardComplete', this), this.emitter.emit('complete', this) } }, { key: 'enableMoving', value: function () { this.moving = !1 } }, { key: 'updatePosition', value: function (t) { for (var e = 0; e < this.wheelItems.length; e++) { var i = this.wheelItems[e].position; this.wheelItems[e].position = wt.operators[t](i, 1); var n = wt.modulo(this.wheelItems[e].position, this.pointsAmount); this.wheelItems[e].position = n, this.wheelItems[e].sprite.wheelPosition = n } } }, { key: 'resetAngle', value: function () { var t = this.rotationAxis[this.axis]; 360 !== t && -360 !== t || (this.rotationAxis[this.axis] = 0) } }]), t }(); function jt(t) { return (jt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function Tt(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function Et(t) { return (Et = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function Rt(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function Ct(t, e) { return (Ct = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var At = function (t) { function e(t) { var i, n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), n = this, i = !(r = Et(e).call(this, t)) || 'object' !== jt(r) && 'function' != typeof r ? Rt(n) : r, t.add.existing(Rt(i)), i.game = t, i.x = o, i.y = a, i.vertical = s, i } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Ct(t, e) }(e, t), i = e, (n = [{ key: 'setTrackScrollAreaSize', value: function () { this.vertical ? this.trackScrollAreaSize = this.track.height - this.vslice : this.trackScrollAreaSize = this.track.width - this.hslice } }, { key: 'centerStaticAxis', value: function () { this.vertical ? this.bar.x = this.track.x + this.track.width / 2 - this.bar.displayWidth / 2 : this.bar.y = this.track.y + this.track.height / 2 - this.bar.displayHeight / 2 } }]) && Tt(i.prototype, n), r && Tt(i, r), e }(X); function It(t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } function Dt(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function Bt(t, e, i) { return e && Dt(t.prototype, e), i && Dt(t, i), t } var zt = function () { function t(e, i, n) { It(this, t), this.bar = e, this.startValue = i, this.maxValue = n, this.currentValue = i } return Bt(t, [{ key: 'getRatio', value: function () { return this.currentValue / this.maxValue } }, { key: 'getCurrentValue', value: function () { return this.currentValue } }]), t }(), Mt = function () { function t(e, i, n) { It(this, t), this.step = e, this.startValue = i, this.maxValue = n + e, this.ratio = e / n, this.ratio > 1 && (this.ratio = 1), this.currentValue = i, this.steps = []; for (var r = 0; r < this.maxValue; r += e)this.steps.push(r) } return Bt(t, [{ key: 'adjustValue', value: function (t) { this.currentValue = t } }, { key: 'getCurrentValue', value: function () { return this.currentValue } }]), t }(), Ht = function () { function t(e, i) { It(this, t), this.viewport = e, this.vertical = i, i ? (this.step = e.area.height, this.maxValue = e.realHeight) : (this.step = e.area.width, this.maxValue = e.realWidth), this.ratio = this.step / this.maxValue, this.ratio > 1 && (this.ratio = 1) } return Bt(t, [{ key: 'adjustValue', value: function (t) { this.vertical ? this.viewport.y = t + this.viewport.area.y : this.viewport.x = t + this.viewport.area.x, this.viewport.disableOutOfBounds(this.viewport.children, this, this.vertical) } }, { key: 'getCurrentValue', value: function () { return this.vertical ? this.viewport.y - this.viewport.area.y : this.viewport.x - this.viewport.area.x } }]), t }(); function Vt(t) { return (Vt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function Wt(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function Nt(t) { return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function Kt(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function Gt(t, e) { return (Gt = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var Yt = function (t) { function e(t, i, n, r, o, a, s, u) { var c, h, l; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), h = this, (c = !(l = Nt(e).call(this, t, i.x, i.y)) || 'object' !== Vt(l) && 'function' != typeof l ? Kt(h) : l).valueRange = new zt(Kt(c), n.startValue, n.maxValue), c.vertical = r || !1, c.reverse = o || !1, c.trackImage = a, c.barImage = s, c.tweenParams = u || { duration: 300, ease: _.Quadratic.Out }, c.track = new p(t, 0, 0, c.trackImage), c.track.displayOriginX = 0, c.track.displayOriginY = 0, c.add(c.track), c.bar = new p(t, 0, 0, c.barImage), c.bar.displayOriginX = 0, c.bar.displayOriginY = 0, c.add(c.bar), c.create(), c } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Gt(t, e) }(e, t), i = e, (n = [{ key: 'setMask', value: function () { null !== this.bar.mask && (this.bar.mask.destroy(), this.bar.mask = null); var t = new ot(this.game, this.maskX, this.maskY); this.bar.mask = t.create(this.bar.maskX, this.bar.maskY, this.maskW, this.maskH), void 0 === this.version && this.add(t) } }, { key: 'getBarPosition', value: function () { var t = this.valueRange.getRatio() / this.windowScrollAreaSize; return this.trackScrollAreaSize * t } }, { key: 'create', value: function () { this.centerStaticAxis(), this.maskW = this.bar.width, this.maskH = this.bar.height, void 0 === this.version ? (this.maskX = this.bar.x, this.maskY = this.bar.y) : (this.maskX = this.x, this.maskY = this.y), this.reverse && (this.vertical ? this.maskY += this.getBarFraction() : this.maskX += this.getBarFraction()), this.setMask(); var t = this.getBarSize(); this.reverse, this.vertical ? this.bar.mask.geometryMask.scaleY = t : this.bar.mask.geometryMask.scaleX = t, this.windowScrollAreaSize = this.valueRange.maxValue, this.vslice = this.track.height * this.valueRange.getRatio(), this.hslice = this.track.width * this.valueRange.getRatio(), this.setTrackScrollAreaSize() } }, { key: 'addScrollTweenMask', value: function (t, e, i) { new Z(this.game).add(this.bar.mask.geometryMask, t, e, i) } }, { key: 'adjustBar', value: function (t) { var e; this.valueRange.currentValue += t; var i, n, r = this.getBarSize(); void 0 === this.version ? (i = 0, n = 0) : (i = this.x, n = this.y), e = this.reverse ? this.vertical ? { scaleY: r, y: n + this.getBarFraction() } : { scaleX: r, x: i + this.getBarFraction() } : this.vertical ? { scaleY: r } : { scaleX: r }, this.addScrollTweenMask(e, this.tweenParams.duration, this.tweenParams.ease) } }, { key: 'getBarFraction', value: function () { return this.vertical ? this.track.height * this.valueRange.getRatio() : this.track.width * this.valueRange.getRatio() } }, { key: 'getBarSize', value: function () { return this.reverse ? 1 - this.valueRange.getRatio() : this.valueRange.getRatio() } }]) && Wt(i.prototype, n), r && Wt(i, r), e }(At); function Xt(t) { return (Xt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function Ft(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function Lt(t, e) { return !e || 'object' !== Xt(e) && 'function' != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function Ut(t) { return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function Qt(t, e) { return (Qt = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var Zt = function (t) { function e(t) { var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), (i = Lt(this, Ut(e).call(this, t, n, r))).emitter = new gt, i } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Qt(t, e) }(e, t), i = e, (n = [{ key: 'verticalTrackClick', value: function () { var t = this.game.input.mousePointer.y; t > this.bar.y + this.worldPosition.y + this.bar.displayHeight ? this.scrollDown() : t < this.bar.y + this.worldPosition.y && this.scrollUp() } }, { key: 'horizontalTrackClick', value: function () { var t = this.game.input.mousePointer.x; t > this.bar.x + this.worldPosition.x + this.bar.displayWidth ? this.scrollRight() : t < this.bar.x + this.worldPosition.x && this.scrollLeft() } }, { key: 'enableTrackClick', value: function () { var t; this.track.setInteractive(), t = this.vertical ? this.verticalTrackClick : this.horizontalTrackClick, this.track.addDownEvent(t, this) } }, { key: 'enableBarInput', value: function () { this.trackClicked = !1, this.barMoving = !1, this.bar.enableDragging(this.vertical) } }, { key: 'enableBarDrag', value: function () { var t; this.setDraggableArea(), this.bar.enableDragging(this.vertical), t = this.vertical ? this.verticalDraggableArea : this.horizontalDraggableArea, this.bar.setDragBounds(t), this.snapping && this.bar.addUpEvent(this.snapToClosestPosition, this), this.bar.addDownEvent(this.saveMousePosition, this), this.bar.addDragEvent(this.moveContent, this) } }, { key: 'saveMousePosition', value: function (t) { this.mousePointer = { x: t.x - (t.x - this.bar.x), y: t.y - (t.y - this.bar.y) } } }, { key: 'getBarPosition', value: function () { var t = this.valueRange.getCurrentValue() / this.windowScrollAreaSize; return this.trackScrollAreaSize * t } }, { key: 'getMouseDelta', value: function () { var t, e, i; if (this.trackClicked) t = { x: this.bar.x, y: this.bar.y }; else { var n = this.game.input.mousePointer; t = { x: n.x - (n.x - this.bar.x), y: n.y - (n.y - this.bar.y) } } return this.vertical ? (e = this.mousePointer.y, i = t.y) : (e = this.mousePointer.x, i = t.x), this.mousePointer = t, i < this.maxValue ? e - i : 0 } }, { key: 'addScrollTween', value: function (t) { this.mousePointer = { x: this.bar.x, y: this.bar.y }, this.trackClicked = !0, new Z(this.game).add(this.bar, t, this.tweenParams.duration, this.tweenParams.ease, this.enableBarInput, this.moveContent, null, this, this, null) } }, { key: 'scrollUp', value: function () { if (this.bar.y !== this.track.y && !this.barMoving) { var t = this.bar.y - this.vslice, e = null; this.barMoving = !0, e = t <= this.track.y ? this.minY : this.bar.y - this.vslice, this.addScrollTween({ y: e }) } } }, { key: 'scrollDown', value: function () { if (this.bar.y + this.bar.displayHeight !== this.track.y + this.track.height && !this.barMoving) { var t = this.bar.y + 2 * this.vslice, e = null; this.barMoving = !0, this.bar.disableInteractive(), e = t >= this.track.y + this.track.height ? this.maxY : this.bar.y + this.vslice, this.addScrollTween({ y: e }) } } }, { key: 'scrollLeft', value: function () { if (this.bar.x !== this.track.x && !this.barMoving) { var t = this.bar.x - this.hslice, e = null; this.barMoving = !0, this.bar.disableInteractive(), e = t <= this.track.x ? this.minX : this.bar.x - this.hslice, this.addScrollTween({ x: e }) } } }, { key: 'scrollRight', value: function () { if (this.bar.x + this.bar.displayWidth !== this.track.x + this.track.width && !this.barMoving) { var t = this.bar.x + 2 * this.hslice, e = null; this.barMoving = !0, this.bar.disableInteractive(), e = t >= this.track.x + this.track.width ? this.maxX : this.bar.x + this.hslice, this.addScrollTween({ x: e }) } } }, { key: 'moveContent', value: function () { var t = this.getGripPositionRatio() * this.windowScrollAreaSize; this.valueRange.adjustValue(t), this.emitter.emit('movement', this) } }]) && Ft(i.prototype, n), r && Ft(i, r), e }(At); function qt(t) { return (qt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function Jt(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function $t(t) { return ($t = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function te(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function ee(t, e) { return (ee = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var ie = function (t) { function e(t, i, n, r, o, a, s) { var u, c, h; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), c = this, (u = !(h = $t(e).call(this, t)) || 'object' !== qt(h) && 'function' != typeof h ? te(c) : h).content = i, u.valueRange = new Ht(i, r), u.vertical = r || !1, u.draggable = n || !1, u.trackImage = o, u.barImage = a, u.minBarSize = 44, u.tweenParams = s || { duration: 300, ease: _.Quadratic.Out }, u.trackClicked = !1, u.barMoving = !1, u.mousePointer = null, u.track = new p(t, u.x, u.y, u.trackImage), u.track.displayOriginX = 0, u.track.displayOriginY = 0, u.add(u.track), u.draggable && u.enableTrackClick(), u.bar = new P(t, u.x, u.y, u.barImage, u.moveContent, te(u), 1, 0), u.bar.displayOriginX = 0, u.bar.displayOriginY = 0, u.add(u.bar), u.resizeBar(), u.minY = u.track.y, u.maxY = u.track.y + u.track.height - u.bar.displayHeight, u.minX = u.track.x, u.maxX = u.track.x + u.track.width - u.bar.displayWidth, u.create(), u.vertical ? (u.maxValue = u.track.displayHeight + u.worldPosition.y, void 0 === u.version && (u.maxValue += u.bar.displayHeight)) : (u.maxValue = u.track.displayWidth + u.worldPosition.x, void 0 === u.version && (u.maxValue += u.bar.displayWidth)), u } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && ee(t, e) }(e, t), i = e, (n = [{ key: 'resizeBar', value: function () { var t; (t = this.vertical ? this.track.height * this.valueRange.ratio : this.track.width * this.valueRange.ratio) < this.minBarSize && (t = this.minBarSize), this.vertical ? this.bar.displayHeight = t : this.bar.displayWidth = t } }, { key: 'create', value: function () { this.centerStaticAxis(), this.draggable && this.enableBarDrag(), this.windowScrollAreaSize = this.valueRange.maxValue - this.valueRange.step, this.vslice = this.track.displayHeight * this.valueRange.ratio, this.hslice = this.track.displayWidth * this.valueRange.ratio, this.setTrackScrollAreaSize(), this.mousePointer = { x: this.bar.x, y: this.bar.y }, this.setInitialBarPosition() } }, { key: 'setDraggableArea', value: function () { var t = this.track.displayHeight; 3 === this.version && (t -= this.bar.displayHeight), this.verticalDraggableArea = { x: this.track.x - (this.bar.displayWidth - this.track.width) / 2, y: this.track.y, w: this.bar.displayWidth, h: t }, this.horizontalDraggableArea = { x: this.track.x, y: this.track.y - (this.bar.displayHeight - this.track.height) / 2, w: this.track.width, h: this.bar.displayHeight } } }, { key: 'setInitialBarPosition', value: function () { var t = this.getBarPosition(); this.vertical ? this.bar.y = t + this.track.y : this.bar.x = t + this.track.x } }, { key: 'getGripPositionRatio', value: function () { var t = this.getBarPosition() + this.getMouseDelta(); t > 0 ? t = 0 : t <= -this.trackScrollAreaSize && (t = -this.trackScrollAreaSize), this.vertical ? this.bar.y <= this.track.y ? t = 0 : this.bar.y + this.bar.displayHeight >= this.track.y + this.track.displayHeight && (t = -this.trackScrollAreaSize) : this.bar.x <= this.track.x ? t = 0 : this.bar.x + this.bar.displayWidth >= this.track.x + this.track.displayWidth && (t = -this.trackScrollAreaSize); var e = t / this.trackScrollAreaSize; return Number.isNaN(e) && (e = 0), e } }]) && Jt(i.prototype, n), r && Jt(i, r), e }(Zt); function ne(t) { return (ne = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function re(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function oe(t) { return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function ae(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function se(t, e) { return (se = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var ue = function (t) { function e(t, i, n, r, o, a, s, u) { var c, h, l; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), h = this, (c = !(l = oe(e).call(this, t, i.x, i.y)) || 'object' !== ne(l) && 'function' != typeof l ? ae(h) : l).valueRange = new Mt(n.step, n.startValue, n.maxValue), c.vertical = o || !1, c.draggable = r || !1, c.trackImage = a, c.barImage = s, c.tweenParams = u || { duration: 300, ease: _.Quadratic.Out }, c.trackClicked = !1, c.barMoving = !1, c.mousePointer = null, c.track = new p(t, 0, 0, c.trackImage), c.track.displayOriginX = 0, c.track.displayOriginY = 0, c.add(c.track), c.draggable && c.enableTrackClick(), c.bar = new P(t, c.x, c.y, c.barImage, c.moveContent, ae(c), 1, 0), c.bar.displayOriginX = 0, c.bar.displayOriginY = 0, c.bg = new I(t, { x: 0, y: 0 }), c.add(c.bg), c.sendToBack(c.bg), c.bg.fillStyle(16711680, 0), c.vertical ? c.bg.fillRect(0, 0 - c.bar.height / 2, 1, c.track.height + c.bar.height) : c.bg.fillRect(0 - c.bar.width / 2, 0, c.track.width + c.bar.width, 1), c.snapping = !0, c.add(c.bar), c.minY = c.track.y - c.bar.height / 2, c.maxY = c.track.y + c.track.height - c.bar.height / 2, c.minX = c.track.x - c.bar.width / 2, c.maxX = c.track.x + c.track.width - c.bar.width / 2, c.create(), c.vertical ? (c.upEvent = c.scrollUp, c.downEvent = c.scrollDown) : (c.upEvent = c.scrollLeft, c.downEvent = c.scrollRight), c.vertical ? (c.maxValue = c.track.displayHeight + c.worldPosition.y, void 0 === c.version && (c.maxValue += c.bar.displayHeight)) : (c.maxValue = c.track.displayWidth + c.worldPosition.x, void 0 === c.version && (c.maxValue += c.bar.displayWidth)), c } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && se(t, e) }(e, t), i = e, (n = [{ key: 'create', value: function () { this.centerStaticAxis(), this.draggable && this.enableBarDrag(), this.windowScrollAreaSize = this.valueRange.maxValue - this.valueRange.step, this.vslice = this.track.displayHeight * this.valueRange.ratio, this.hslice = this.track.displayWidth * this.valueRange.ratio, this.setTrackScrollAreaSize(), this.setInitialBarPosition(), this.mousePointer = { x: this.bar.x, y: this.bar.y } } }, { key: 'setDraggableArea', value: function () { var t = this.track.displayHeight; void 0 === this.version && (t += this.bar.displayHeight), this.verticalDraggableArea = { x: this.track.x - (this.bar.displayWidth - this.track.displayWidth) / 2, y: this.track.y - this.bar.displayHeight / 2, w: this.bar.displayWidth, h: t }, this.horizontalDraggableArea = { x: this.track.x - this.bar.displayWidth / 2, y: this.track.y - (this.bar.displayHeight - this.track.displayHeight) / 2, w: this.track.displayWidth + this.bar.displayWidth, h: this.bar.displayHeight } } }, { key: 'setTrackScrollAreaSize', value: function () { this.vertical ? this.trackScrollAreaSize = this.track.displayHeight : this.trackScrollAreaSize = this.track.displayWidth } }, { key: 'setInitialBarPosition', value: function () { var t = this.getBarPosition(); this.vertical ? this.bar.y = t + this.track.y - this.bar.displayHeight / 2 : this.bar.x = t + this.track.x - this.bar.displayWidth / 2 } }, { key: 'getClosestPosition', value: function () { for (var t = this.valueRange.getCurrentValue(), e = Math.abs(t - this.valueRange.steps[0]), i = this.valueRange.steps[0], n = 0; n < this.valueRange.steps.length; n++) { var r = Math.abs(t - this.valueRange.steps[n]); r < e && (e = r, i = this.valueRange.steps[n]) } return i } }, { key: 'snapToClosestPosition', value: function () { var t = this.getClosestPosition(); this.valueRange.adjustValue(t), this.moveContent(), this.setInitialBarPosition() } }, { key: 'addScrollTween', value: function (t) { var e = this; this.mousePointer = { x: this.bar.x, y: this.bar.y }, this.trackClicked = !0, new Z(this.game).add(this.bar, t, this.tweenParams.duration, this.tweenParams.ease, (function () { e.moveContent(), e.enableBarInput() }), null, null, this, null, null) } }, { key: 'getGripPositionRatio', value: function () { var t = this.getBarPosition() - this.getMouseDelta(); t < 0 ? t = 0 : t >= this.trackScrollAreaSize && (t = this.trackScrollAreaSize), this.vertical ? this.bar.y <= this.track.y ? t = 0 : this.bar.y + this.bar.displayHeight >= this.track.y + this.track.displayHeight && (t = this.trackScrollAreaSize) : this.bar.x <= this.track.x ? t = 0 : this.bar.x + this.bar.displayWidth >= this.track.x + this.track.displayWidth && (t = this.trackScrollAreaSize); var e = t / this.trackScrollAreaSize; return Number.isNaN(e) && (e = 0), e } }]) && re(i.prototype, n), r && re(i, r), e }(Zt), ce = { TOP_LEFT: 0, TOP_CENTER: 1, TOP_RIGHT: 2, LEFT_TOP: 3, LEFT_CENTER: 4, LEFT_BOTTOM: 5, CENTER: 6, RIGHT_TOP: 7, RIGHT_CENTER: 8, RIGHT_BOTTOM: 9, BOTTOM_LEFT: 10, BOTTOM_CENTER: 11, BOTTOM_RIGHT: 12 }; function he(t) { return (he = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function le(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function fe(t) { return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function ye(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function pe(t, e) { return (pe = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var de = function (t) { function e(t) { var i, n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), n = this, i = !(r = fe(e).call(this, t)) || 'object' !== he(r) && 'function' != typeof r ? ye(n) : r, t.add.existing(ye(i)), i.x = o, i.y = a, i.background = null, null !== s && (i.background = new p(t, 0, 0, s), t.add.existing(i.background), i.background.sendToBack(), i.background.alignIn(ye(i), ce.TOP_LEFT)), i } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && pe(t, e) }(e, t), i = e, (n = [{ key: 'addNode', value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = n || this.alignment; t instanceof X || (t.displayOriginX = 0, t.displayOriginY = 0), this.add(t), this.alignNodeToPrevious(t, r, e, i), 'enableBarDrag' in t && t.enableBarDrag() } }]) && le(i.prototype, n), r && le(i, r), e }(X); function be(t) { return (be = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function ve(t, e) { return !e || 'object' !== be(e) && 'function' != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function ge(t) { return (ge = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function me(t, e) { return (me = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var ke = function (t) { function e(t) { var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), (i = ve(this, ge(e).call(this, t, n, r, o))).alignment = ce.BOTTOM_CENTER, i } return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && me(t, e) }(e, t), e }(de); function we(t) { return (we = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function xe(t, e) { return !e || 'object' !== we(e) && 'function' != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function Oe(t) { return (Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function Se(t, e) { return (Se = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var Pe = function (t) { function e(t) { var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), (i = xe(this, Oe(e).call(this, t, n, r, o))).alignment = ce.RIGHT_CENTER, i } return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Se(t, e) }(e, t), e }(de); function _e(t) { return (_e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t })(t) } function je(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } function Te(t) { return (Te = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function Ee(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function Re(t, e) { return (Re = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } var Ce = function (t) { function e(t, i, n, r, o) { var a, s, u; !function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') }(this, e), s = this, a = !(u = Te(e).call(this, t)) || 'object' !== _e(u) && 'function' != typeof u ? Ee(s) : u, t.add.existing(Ee(a)), a.x = i, a.y = n, a.area = { x: i, y: n, width: r, height: o }; var c = new ot(t, i, n); return void 0 === a.version ? a.mask = c.create(i, n, r, o) : a.mask = c.create(0, 0, r, o), a } var i, n, r; return function (t, e) { if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function'); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Re(t, e) }(e, t), i = e, (n = [{ key: 'addNode', value: function (t) { this.add(t) } }, { key: 'disableOutOfBounds', value: function (t, e, i) { var n, r, o, a; if (void 0 !== t) for (var s = 0; s < t.length; s++)(n = t[s]).inputEnabled = !0, a = n.world || n, i ? (r = a.y, o = e.viewport.area.y) : (r = a.x, o = e.viewport.area.x), r < o && (n.inputEnabled = !1), this.disableOutOfBounds(n.children, e, i) } }]) && je(i.prototype, n), r && je(i, r), e }(X); i.d(e, 'TextSprite', (function () { return bt })), i.d(e, 'TextButton', (function () { return vt })), i.d(e, 'KeyboardGroup', (function () { return kt })), i.d(e, 'Wheel3D', (function () { return _t })), i.d(e, 'QuantityBar', (function () { return Yt })), i.d(e, 'Scrollbar', (function () { return ie })), i.d(e, 'ValueBar', (function () { return ue })), i.d(e, 'Frame', (function () { return de })), i.d(e, 'Column', (function () { return ke })), i.d(e, 'Row', (function () { return Pe })), i.d(e, 'Viewport', (function () { return Ce })), i.d(e, 'Button', (function () { return P })) }]) })); // eslint-disable-line
// #endregion

// #region Seed Random
!function (a, b, c, d, e, f, g, h, i) { function j(a) { var b, c = a.length, e = this, f = 0, g = e.i = e.j = 0, h = e.S = []; for (c || (a = [c++]); d > f;)h[f] = f++; for (f = 0; d > f; f++)h[f] = h[g = s & g + a[f % c] + (b = h[f])], h[g] = b; (e.g = function (a) { for (var b, c = 0, f = e.i, g = e.j, h = e.S; a--;)b = h[f = s & f + 1], c = c * d + h[s & (h[f] = h[g = s & g + b]) + (h[g] = b)]; return e.i = f, e.j = g, c })(d) } function k(a, b) { var c, d = [], e = typeof a; if (b && 'object' == e) for (c in a) try { d.push(k(a[c], b - 1)) } catch (f) { } return d.length ? d : 'string' == e ? a : a + '\0' } function l(a, b) { for (var c, d = a + '', e = 0; e < d.length;)b[s & e] = s & (c ^= 19 * b[s & e]) + d.charCodeAt(e++); return n(b) } function m(c) { try { return o ? n(o.randomBytes(d)) : (a.crypto.getRandomValues(c = new Uint8Array(d)), n(c)) } catch (e) { return [+new Date, a, (c = a.navigator) && c.plugins, a.screen, n(b)] } } function n(a) { return String.fromCharCode.apply(0, a) } var o, p = c.pow(d, e), q = c.pow(2, f), r = 2 * q, s = d - 1, t = c['seed' + i] = function (a, f, g) { var h = []; f = 1 == f ? { entropy: !0 } : f || {}; var o = l(k(f.entropy ? [a, n(b)] : null == a ? m() : a, 3), h), s = new j(h); return l(n(s.S), b), (f.pass || g || function (a, b, d) { return d ? (c[i] = a, b) : a })(function () { for (var a = s.g(e), b = p, c = 0; q > a;)a = (a + c) * d, b *= d, c = s.g(1); for (; a >= r;)a /= 2, b /= 2, c >>>= 1; return (a + c) / b }, o, 'global' in f ? f.global : this == c) }; if (l(c[i](), b), g && g.exports) { g.exports = t; try { o = require('crypto') } catch (u) { } } else h && h.amd && h(function () { return t }) }(this, [], Math, 256, 6, 52, 'object' == typeof module && module, 'function' == typeof define && define, 'random'); // eslint-disable-line
// #endregion

// #region Device Type
const deviceType = () => {
  const ua = navigator.userAgent
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet'
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile'
  }
  return 'desktop'
}
// #endregion

/* eslint-disable no-undef */
const config = {
  banner: {
    hidePhaser: true
  },
  type: Phaser.AUTO,
  width: 512,
  height: 512,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  },
  scale: {
    parent: 'krakenflap',
    mode: deviceType() === 'desktop' ? Phaser.Scale.NONE : Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
/* eslint-enable no-undef */

const screenCenterWidth = config.width * 0.5
const screenCenterHeight = config.height * 0.5

const game = new Phaser.Game(config) // eslint-disable-line no-undef

const assets = {
  tentacle: {
    top: 'tentacleTop',
    bottom: 'tentacleBottom'
  },
  textButton: 'textButton',
  collectibles: {
    coffee: 'coffee'
  },
  audio: {
    bgm: 'bgm',
    splash: 'splash',
    gulp: 'gulp',
    success: 'success',
    interface: {

    }
  }
}

const buttonTextStyle = {
  font: '19px kenney_mini_square_regular',
  fill: '#ffffff'
}

let player
let score = 0
let highScore = 0
let highScoreText
let scoreText

let jumping = false
let jumpTimer
let tentacleSpawnTimer

let tentaclesGroup
let gapsGroup
let coffeeGroup

let gameStarted
let gameOver
let coffeeQueued = 0

let title
let gameOverBanner
let background

let upButton
let cursors // eslint-disable-line

const deathScreenButtons = []
let deathScreenButtonsColumn
const menuScreenButtons = []
let menuScreenButtonsColumn

let bgm
let gulp
let success

function preload() {
  // #region Loading Screen
  const loadingText = this.make.text({
    x: screenCenterWidth,
    y: screenCenterHeight - 50,
    text: 'Loading...',
    style: {
      font: '20px kenney_mini_square_regular',
      fill: '#ffffff'
    }
  }).setOrigin(0.5)
  const percentText = this.make.text({
    x: screenCenterWidth,
    y: screenCenterHeight - 5,
    text: '0%',
    style: {
      font: '18px kenney_mini_square_regular',
      fill: '#ffffff'
    }
  }).setOrigin(0.5)
  const assetText = this.make.text({
    x: screenCenterWidth,
    y: screenCenterHeight + 50,
    text: '',
    style: {
      font: '18px kenney_mini_square_regular',
      fill: '#ffffff'
    }
  }).setOrigin(0.5)

  this.load.on('progress', (value) => { percentText.setText(parseInt(value * 100) + '%') })
  this.load.on('fileprogress', (file) => { assetText.setText('Loading asset: ' + file.key) })
  this.load.on('complete', () => {
    loadingText.destroy()
    percentText.destroy()
    assetText.destroy()
  })
  // #endregion

  // #region Loading Assets
  this.load.spritesheet('player', 'js/assets/player.png', { frameWidth: 80, frameHeight: 24 })
  // this.load.spritesheet(assets.textButton, 'js/assets/textButton.png', { frameWidth: 80, frameHeight: 24 }); //TODO: Add button texture
  this.load.spritesheet('blackBox', 'js/assets/blackbox.png', { frameWidth: 150, frameHeight: 50 })
  this.load.image(assets.tentacle.top, 'js/assets/tentacle.png')
  this.load.image(assets.tentacle.bottom, 'js/assets/tentacleInverse.png')
  this.load.image(assets.collectibles.coffee, 'js/assets/coffee.png')
  this.load.image('underwaterBg', 'js/assets/underwaterbg.png')
  this.load.image('title', 'js/assets/KrakenFlapWhite.png')
  this.load.image('gameOver', 'js/assets/GameOver.png')

  this.load.audio(assets.audio.bgm, 'js/assets/bgm.mp3')
  this.load.audio(assets.audio.splash, 'js/assets/splash.wav')
  this.load.audio(assets.audio.gulp, 'js/assets/gulp.wav')
  this.load.audio(assets.audio.success, 'js/assets/success.mp3')
  // #endregion
}

function create() {
  Math.seedrandom()

  bgm = this.sound.add(assets.audio.bgm, { loop: true })
  gulp = this.sound.add(assets.audio.gulp, { loop: false })
  success = this.sound.add(assets.audio.success, { loop: false })

  this.anims.create({
    key: 'swim',
    frames: this.anims.generateFrameNumbers('player', { start: 0, end: 6 }),
    frameRate: 10,
    repeat: -1
  })
  this.anims.create({
    key: 'swim stop',
    frames: [{ key: 'player', frame: 0 }],
    frameRate: 10
  })

  gapsGroup = this.physics.add.group()
  tentaclesGroup = this.physics.add.group()
  coffeeGroup = this.physics.add.group()

  title = this.add.image(screenCenterWidth, 156, 'title')
  title.setDepth(30)
  title.visible = true

  gameOverBanner = this.add.image(screenCenterWidth, 110, 'gameOver')
  gameOverBanner.setDepth(30)
  gameOverBanner.visible = false

  background = this.add.tileSprite(800, 300, 1600, 600, 'underwaterBg')

  scoreText = this.add.text(screenCenterWidth, 120, '0', {
    font: '40px kenney_mini_square_regular',
    fill: '#ffffff',
    align: 'center'
  }).setOrigin(0.5)
  scoreText.setDepth(30)
  scoreText.visible = false

  tentacleSpawnTimer = this.time.addEvent({ delay: 2000, callback: createTentacles, callbackScope: this, loop: true })
  tentacleSpawnTimer.paused = true

  bgm.play()
  prepareGame(this)

  upButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP) // eslint-disable-line
  this.input.on('pointerdown', movePlayer)

  const buttonPlay = new uiWidgets.TextButton(this, -2, 1, 'blackBox', () => { startGame(game.scene.scenes[0]) }, this, 1, 0, 1, 0).setText('Play', buttonTextStyle).setDepth(30) // eslint-disable-line no-undef
  const buttonLeaderboard = new uiWidgets.TextButton(this, -2, 1, 'blackBox', () => { }, this, 1, 0, 1, 0).setText('Leaderboard', buttonTextStyle).setDepth(30) // eslint-disable-line no-undef
  menuScreenButtons.push(buttonPlay)
  menuScreenButtons.push(buttonLeaderboard)
  menuScreenButtonsColumn = new uiWidgets.Column(this, screenCenterWidth, screenCenterHeight + 50).setDepth(30) // eslint-disable-line no-undef
  menuScreenButtonsColumn.addNode(buttonPlay, 0, 10)
  menuScreenButtonsColumn.addNode(buttonLeaderboard, 0, 10)

  const buttonRestart = new uiWidgets.TextButton(this, -2, 1, 'blackBox', () => { startGame(game.scene.scenes[0]) }, this, 1, 0, 1, 0).setText('Restart', buttonTextStyle).setDepth(30) // eslint-disable-line no-undef
  const buttonLeaderboardDeath = new uiWidgets.TextButton(this, -2, 1, 'blackBox', () => { }, this, 1, 0, 1, 0).setText('Leaderboard', buttonTextStyle).setDepth(30) // eslint-disable-line no-undef
  deathScreenButtons.push(buttonRestart)
  deathScreenButtons.push(buttonLeaderboardDeath)
  deathScreenButtons.forEach((button) => { button.visible = false })
  deathScreenButtonsColumn = new uiWidgets.Column(this, screenCenterWidth, screenCenterHeight + 100).setDepth(30) // eslint-disable-line no-undef
  deathScreenButtonsColumn.addNode(buttonRestart, 0, 10)
  deathScreenButtonsColumn.addNode(buttonLeaderboardDeath, 0, 10)

  cursors = this.input.keyboard.createCursorKeys()
}

function prepareGame(scene) {
  score = 0
  coffeeQueued = 0
  scoreText.setText(score)
  gameOver = false

  player = scene.physics.add.sprite(60, 265, 'player')
  player.setSize(25, 24, true)
  player.setCollideWorldBounds(true)
  player.anims.play('swim', true)
  player.body.allowGravity = false
  player.body.onWorldBounds = true
  scene.physics.world.on('worldbounds', onWorldBounds)

  scene.physics.add.collider(player, tentaclesGroup, playerHit, null, scene)
  scene.physics.add.overlap(player, gapsGroup, updateScore, null, scene)
  scene.physics.add.overlap(player, coffeeGroup, onCoffeePickup, null, scene)
  scene.physics.add.overlap(coffeeGroup, tentaclesGroup, (coffee, tentacle) => { coffee.destroy() }, null, scene)
}

function update() {
  if (gameOver || !gameStarted) return

  background.tilePositionX += 0.3

  if (Phaser.Input.Keyboard.JustDown(upButton) && !jumping) { // eslint-disable-line no-undef
    movePlayer()
  } else if (!jumping) {
    player.setVelocityY(150)

    if (player.angle < 90) {
      player.angle += 1
    }
  }

  tentaclesGroup.children.iterate((child) => {
    if (child === undefined) return

    if (child.x < -50) {
      child.destroy()
    } else {
      child.setVelocityX(-100)
    }
  })

  if (coffeeQueued > 0 && Math.floor(tentacleSpawnTimer.elapsed) >= Math.floor(tentacleSpawnTimer.delay * 0.2)) {
    coffeeQueued--
    createCoffee()
  }

  gapsGroup.children.iterate((child) => {
    child.body.setVelocityX(-100)
  })

  coffeeGroup.children.iterate((child) => {
    child.body.setVelocityX(-100)
  })
}

function startGame(scene) {
  gameStarted = true
  title.visible = false
  gameOverBanner.visible = false
  scoreText.visible = true
  tentacleSpawnTimer.paused = false
  menuScreenButtons.forEach((button) => { button.visible = false })
}

function restartGame() {
  tentaclesGroup.clear(true, true)
  gapsGroup.clear(true, true)
  coffeeGroup.clear(true, true)
  title.visible = true
  highScoreText.visible = false
  player.destroy()
  deathScreenButtons.forEach((button) => { button.visible = false })

  prepareGame(game.scene.scenes[0])
  game.scene.scenes[0].physics.resume()
}

function movePlayer() {
  if (gameOver) {
    restartGame()
    startGame(game.scene.scenes[0])
  }
  if (!gameStarted) return // startGame(game.scene.scenes[0])

  player.setVelocityY(-500)
  player.angle = -15
  jumping = true
  if (jumpTimer && jumpTimer.hasDispatched) jumpTimer.destroy()
  jumpTimer = game.scene.scenes[0].time.addEvent({ delay: 100, callback: () => { jumping = false }, callbackScope: this, loop: false })
  game.scene.scenes[0].sound.add(assets.audio.splash, { loop: false }).play()
}

function createTentacles(scene = game.scene.scenes[0]) {
  const tentacleTopY = Phaser.Math.Between(-10, 150) // eslint-disable-line no-undef
  const tentacleXSpawn = 600

  const gap = scene.add.line(tentacleXSpawn, tentacleTopY + 210, 0, 0, 0, 98)
  gapsGroup.add(gap)
  gap.body.allowGravity = false
  gap.visible = false

  const tentacleTop = tentaclesGroup.create(tentacleXSpawn, tentacleTopY, assets.tentacle.top)
  tentacleTop.body.allowGravity = false
  tentacleTop.setSize(tentacleTop.width - 30, tentacleTop.height, true)

  const tentacleBottom = tentaclesGroup.create(tentacleXSpawn, tentacleTopY + 420, assets.tentacle.bottom)
  tentacleBottom.body.allowGravity = false
  tentacleBottom.setSize(tentacleTop.width - 30, tentacleTop.height, true)
}

function createCoffee() {
  const coffeeXSpawn = 600
  const coffeeYSpawn = Phaser.Math.Between(-10, 200) // eslint-disable-line no-undef
  const coffee = coffeeGroup.create(coffeeXSpawn, coffeeYSpawn + 150, assets.collectibles.coffee)
  coffee.body.allowGravity = false
  coffee.setDepth(0)
}

function updateScore(_, gap) {
  score++
  scoreText.setText(score)
  tentacleSpawnTimer.delay = Phaser.Math.Clamp(tentacleSpawnTimer.delay - score * 2, 1600, 5000) // eslint-disable-line no-undef
  gap.destroy()
  success.play()
  if (Phaser.Math.Between(0, 100) >= 95) coffeeQueued++ // eslint-disable-line no-undef
}

function playerHit(player) {
  game.scene.scenes[0].physics.pause()
  gameOver = true
  gameStarted = false

  player.anims.play('swim stop')

  gameOverBanner.visible = true
  scoreText.visible = false
  if (score > highScore) {
    highScore = score
  }
  if (highScoreText) highScoreText.destroy()
  showHighScore()
  deathScreenButtons.forEach((button) => { button.visible = true })
  tentacleSpawnTimer.paused = true
}

function onCoffeePickup(player, coffee) {
  score += 10
  scoreText.setText(score)
  coffee.destroy()
  gulp.play()
}

function onWorldBounds(collider) {
  playerHit(player)
}

function showHighScore() {
  highScoreText = game.scene.scenes[0].add.text(screenCenterWidth, 230, `High Score: ${highScore}\nCurrent Score: ${score}\nGlobal Ranking: ERR`, {
    font: '32px kenney_mini_square_regular',
    fill: '#ffffff',
    align: 'center'
  }).setOrigin(0.5)
  highScoreText.setDepth(30)
  highScoreText.visible = true
  deathScreenButtons.forEach((button) => { button.visible = true })
}

// function showGlobalLeaderboard() {
//   deathScreenButtons.forEach(button => button.visible = false)
// }
