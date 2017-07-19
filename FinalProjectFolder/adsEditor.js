! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.p = 'https://ton.twimg.com/macaw-campaigns/', e(0);
}({
    0: function(t, e, n) {
        var r;
        r = function() {
            'use strict';
            var t = n(1);
            n(167), n(828);
            var e = t('#PowerEditorUploader'),
                r = t('.PowerEditorDownloader');
            n(1039).attachTo(t('.PowerEditorTabs')), n(1040).attachTo(e), n(1036).attachTo(r), n(1037).attachTo(r), n(1038).attachTo(r), n(1034).attachTo(e), n(1031).attachTo(e), n(1032).attachTo(r), n(1033).attachTo(r), n(318), n(319), n(317);
            var i = t('body'),
                o = n(34),
                a = i.find('.VideoTutorial--sheet');
            a.find('.Sheet-body').append(i.find('.VideoTutorial--bodyContent'));
            var s = new o({
                $wrapper: a,
                hasFooter: !0
            });
            i.find('.VideoTutorial--view').click(function(t) {
                s.show(), t.preventDefault();
            });
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    1: function(t, e, n) {
        var r, i;
        ! function(e, n) {
            'object' == typeof t && 'object' == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                if (!t.document) throw new Error('jQuery requires a window with a document');
                return n(t);
            } : n(e);
        }('undefined' != typeof window ? window : this, function(n, o) {
            function a(t) {
                var e = 'length' in t && t.length,
                    n = it.type(t);
                return 'function' !== n && !it.isWindow(t) && (!(1 !== t.nodeType || !e) || ('array' === n || 0 === e || 'number' == typeof e && e > 0 && e - 1 in t));
            }

            function s(t, e, n) {
                if (it.isFunction(e)) return it.grep(t, function(t, r) {
                    return !!e.call(t, r, t) !== n;
                });
                if (e.nodeType) return it.grep(t, function(t) {
                    return t === e !== n;
                });
                if ('string' == typeof e) {
                    if (pt.test(e)) return it.filter(e, t, n);
                    e = it.filter(e, t);
                }
                return it.grep(t, function(t) {
                    return J.call(e, t) >= 0 !== n;
                });
            }

            function c(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t;
            }

            function u(t) {
                var e = bt[t] = {};
                return it.each(t.match(yt) || [], function(_, t) {
                    e[t] = !0;
                }), e;
            }

            function l() {
                nt.removeEventListener('DOMContentLoaded', l, !1), n.removeEventListener('load', l, !1), it.ready();
            }

            function f() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {};
                    }
                }), this.expando = it.expando + f.uid++;
            }

            function p(t, e, n) {
                var r;
                if (void 0 === n && 1 === t.nodeType)
                    if (r = 'data-' + e.replace(Et, '-$1').toLowerCase(), n = t.getAttribute(r), 'string' == typeof n) {
                        try {
                            n = 'true' === n || 'false' !== n && ('null' === n ? null : +n + '' === n ? +n : Tt.test(n) ? it.parseJSON(n) : n);
                        } catch (t) {}
                        St.set(t, e, n);
                    } else n = void 0;
                return n;
            }

            function h() {
                return !0;
            }

            function d() {
                return !1;
            }

            function g() {
                try {
                    return nt.activeElement;
                } catch (t) {}
            }

            function m(t, e) {
                return it.nodeName(t, 'table') && it.nodeName(11 !== e.nodeType ? e : e.firstChild, 'tr') ? t.getElementsByTagName('tbody')[0] || t.appendChild(t.ownerDocument.createElement('tbody')) : t;
            }

            function v(t) {
                return t.type = (null !== t.getAttribute('type')) + '/' + t.type, t;
            }

            function y(t) {
                var e = Ht.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute('type'), t;
            }

            function b(t, e) {
                for (var n = 0, r = t.length; n < r; n++) Ct.set(t[n], 'globalEval', !e || Ct.get(e[n], 'globalEval'));
            }

            function w(t, e) {
                var n, r, i, o, a, s, c, u;
                if (1 === e.nodeType) {
                    if (Ct.hasData(t) && (o = Ct.access(t), a = Ct.set(e, o), u = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in u)
                            for (n = 0, r = u[i].length; n < r; n++) it.event.add(e, i, u[i][n]);
                    }
                    St.hasData(t) && (s = St.access(t), c = it.extend({}, s), St.set(e, c));
                }
            }

            function x(t, e) {
                var n = t.getElementsByTagName ? t.getElementsByTagName(e || '*') : t.querySelectorAll ? t.querySelectorAll(e || '*') : [];
                return void 0 === e || e && it.nodeName(t, e) ? it.merge([t], n) : n;
            }

            function C(t, e) {
                var n = e.nodeName.toLowerCase();
                'input' === n && _t.test(t.type) ? e.checked = t.checked : 'input' !== n && 'textarea' !== n || (e.defaultValue = t.defaultValue);
            }

            function S(t, e) {
                var r, i = it(e.createElement(t)).appendTo(e.body),
                    o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], 'display');
                return i.detach(), o;
            }

            function T(t) {
                var e = nt,
                    n = zt[t];
                return n || (n = S(t, e), 'none' !== n && n || (Wt = (Wt || it('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(e.documentElement), e = Wt[0].contentDocument, e.write(), e.close(), n = S(t, e), Wt.detach()), zt[t] = n), n;
            }

            function E(t, e, n) {
                var r, i, o, a, s = t.style;
                return n = n || Vt(t), n && (a = n.getPropertyValue(e) || n[e]), n && ('' !== a || it.contains(t.ownerDocument, t) || (a = it.style(t, e)), Gt.test(a) && Xt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + '' : a;
            }

            function D(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments);
                    }
                };
            }

            function A(t, e) {
                if (e in t) return e;
                for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = te.length; i--;)
                    if (e = te[i] + n, e in t) return e;
                return r;
            }

            function k(t, e, n) {
                var r = Kt.exec(e);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : e;
            }

            function N(t, e, n, r, i) {
                for (var o = n === (r ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0, a = 0; o < 4; o += 2) 'margin' === n && (a += it.css(t, n + At[o], !0, i)), r ? ('content' === n && (a -= it.css(t, 'padding' + At[o], !0, i)), 'margin' !== n && (a -= it.css(t, 'border' + At[o] + 'Width', !0, i))) : (a += it.css(t, 'padding' + At[o], !0, i), 'padding' !== n && (a += it.css(t, 'border' + At[o] + 'Width', !0, i)));
                return a;
            }

            function F(t, e, n) {
                var r = !0,
                    i = 'width' === e ? t.offsetWidth : t.offsetHeight,
                    o = Vt(t),
                    a = 'border-box' === it.css(t, 'boxSizing', !1, o);
                if (i <= 0 || null == i) {
                    if (i = E(t, e, o), (i < 0 || null == i) && (i = t.style[e]), Gt.test(i)) return i;
                    r = a && (et.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0;
                }
                return i + N(t, e, n || (a ? 'border' : 'content'), r, o) + 'px';
            }

            function O(t, e) {
                for (var n, r, i, o = [], a = 0, s = t.length; a < s; a++) r = t[a], r.style && (o[a] = Ct.get(r, 'olddisplay'), n = r.style.display, e ? (o[a] || 'none' !== n || (r.style.display = ''), '' === r.style.display && kt(r) && (o[a] = Ct.access(r, 'olddisplay', T(r.nodeName)))) : (i = kt(r), 'none' === n && i || Ct.set(r, 'olddisplay', i ? n : it.css(r, 'display'))));
                for (a = 0; a < s; a++) r = t[a], r.style && (e && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = e ? o[a] || '' : 'none'));
                return t;
            }

            function j(t, e, n, r, i) {
                return new j.prototype.init(t, e, n, r, i);
            }

            function P() {
                return setTimeout(function() {
                    ee = void 0;
                }), ee = it.now();
            }

            function I(t, e) {
                var n, r = 0,
                    i = {
                        height: t
                    };
                for (e = e ? 1 : 0; r < 4; r += 2 - e) n = At[r], i['margin' + n] = i['padding' + n] = t;
                return e && (i.opacity = i.width = t), i;
            }

            function R(t, e, n) {
                for (var r, i = (se[e] || []).concat(se['*']), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, e, t)) return r;
            }

            function M(t, e, n) {
                var r, i, o, a, s, c, u, l, f = this,
                    p = {},
                    h = t.style,
                    d = t.nodeType && kt(t),
                    g = Ct.get(t, 'fxshow');
                n.queue || (s = it._queueHooks(t, 'fx'), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || c();
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, it.queue(t, 'fx').length || s.empty.fire();
                    });
                })), 1 === t.nodeType && ('height' in e || 'width' in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = it.css(t, 'display'), l = 'none' === u ? Ct.get(t, 'olddisplay') || T(t.nodeName) : u, 'inline' === l && 'none' === it.css(t, 'float') && (h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                }));
                for (r in e)
                    if (i = e[r], re.exec(i)) {
                        if (delete e[r], o = o || 'toggle' === i, i === (d ? 'hide' : 'show')) {
                            if ('show' !== i || !g || void 0 === g[r]) continue;
                            d = !0;
                        }
                        p[r] = g && g[r] || it.style(t, r);
                    } else u = void 0;
                if (it.isEmptyObject(p)) 'inline' === ('none' === u ? T(t.nodeName) : u) && (h.display = u);
                else {
                    g ? 'hidden' in g && (d = g.hidden) : g = Ct.access(t, 'fxshow', {}), o && (g.hidden = !d), d ? it(t).show() : f.done(function() {
                        it(t).hide();
                    }), f.done(function() {
                        var e;
                        Ct.remove(t, 'fxshow');
                        for (e in p) it.style(t, e, p[e]);
                    });
                    for (r in p) a = R(d ? g[r] : 0, r, f), r in g || (g[r] = a.start, d && (a.end = a.start, a.start = 'width' === r || 'height' === r ? 1 : 0));
                }
            }

            function L(t, e) {
                var n, r, i, o, a;
                for (n in t)
                    if (r = it.camelCase(n), i = e[r], o = t[n], it.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = it.cssHooks[r], a && 'expand' in a) {
                        o = a.expand(o), delete t[r];
                        for (n in o) n in t || (t[n] = o[n], e[n] = i);
                    } else e[r] = i;
            }

            function $(t, e, n) {
                var r, i, o = 0,
                    a = ae.length,
                    s = it.Deferred().always(function() {
                        delete c.elem;
                    }),
                    c = function() {
                        if (i) return !1;
                        for (var e = ee || P(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, c = u.tweens.length; a < c; a++) u.tweens[a].run(o);
                        return s.notifyWith(t, [u, o, n]), o < 1 && c ? n : (s.resolveWith(t, [u]), !1);
                    },
                    u = s.promise({
                        elem: t,
                        props: it.extend({}, e),
                        opts: it.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: ee || P(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var r = it.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                            return u.tweens.push(r), r;
                        },
                        stop: function(e) {
                            var n = 0,
                                r = e ? u.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) u.tweens[n].run(1);
                            return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this;
                        }
                    }),
                    l = u.props;
                for (L(l, u.opts.specialEasing); o < a; o++)
                    if (r = ae[o].call(u, t, l, u.opts)) return r;
                return it.map(l, R, u), it.isFunction(u.opts.start) && u.opts.start.call(t, u), it.fx.timer(it.extend(c, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
            }

            function B(t) {
                return function(e, n) {
                    'string' != typeof e && (n = e, e = '*');
                    var r, i = 0,
                        o = e.toLowerCase().match(yt) || [];
                    if (it.isFunction(n))
                        for (; r = o[i++];) '+' === r[0] ? (r = r.slice(1) || '*', (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n);
                };
            }

            function H(t, e, n, r) {
                function i(s) {
                    var c;
                    return o[s] = !0, it.each(t[s] || [], function(_, t) {
                        var s = t(e, n, r);
                        return 'string' != typeof s || a || o[s] ? a ? !(c = s) : void 0 : (e.dataTypes.unshift(s), i(s), !1);
                    }), c;
                }
                var o = {},
                    a = t === Te;
                return i(e.dataTypes[0]) || !o['*'] && i('*');
            }

            function q(t, e) {
                var n, r, i = it.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                return r && it.extend(!0, t, r), t;
            }

            function U(t, e, n) {
                for (var r, i, o, a, s = t.contents, c = t.dataTypes;
                    '*' === c[0];) c.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader('Content-Type'));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            c.unshift(i);
                            break;
                        }
                if (c[0] in n) o = c[0];
                else {
                    for (i in n) {
                        if (!c[0] || t.converters[i + ' ' + c[0]]) {
                            o = i;
                            break;
                        }
                        a || (a = i);
                    }
                    o = o || a;
                }
                if (o) return o !== c[0] && c.unshift(o), n[o];
            }

            function W(t, e, n, r) {
                var i, o, a, s, c, u = {},
                    l = t.dataTypes.slice();
                if (l[1])
                    for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                for (o = l.shift(); o;)
                    if (t.responseFields[o] && (n[t.responseFields[o]] = e), !c && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = o, o = l.shift())
                        if ('*' === o) o = c;
                        else if ('*' !== c && c !== o) {
                    if (a = u[c + ' ' + o] || u['* ' + o], !a)
                        for (i in u)
                            if (s = i.split(' '), s[1] === o && (a = u[c + ' ' + s[0]] || u['* ' + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], l.unshift(s[1]));
                                break;
                            }
                    if (a !== !0)
                        if (a && t.throws) e = a(e);
                        else try {
                            e = a(e);
                        } catch (t) {
                            return {
                                state: 'parsererror',
                                error: a ? t : 'No conversion from ' + c + ' to ' + o
                            };
                        }
                }
                return {
                    state: 'success',
                    data: e
                };
            }

            function z(t, e, n, r) {
                var i;
                if (it.isArray(e)) it.each(e, function(e, i) {
                    n || _e.test(t) ? r(t, i) : z(t + '[' + ('object' == typeof i ? e : '') + ']', i, n, r);
                });
                else if (n || 'object' !== it.type(e)) r(t, e);
                else
                    for (i in e) z(t + '[' + i + ']', e[i], n, r);
            }

            function X(t) {
                return it.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
            }
            var G = [],
                V = G.slice,
                Y = G.concat,
                K = G.push,
                J = G.indexOf,
                Q = {},
                Z = Q.toString,
                tt = Q.hasOwnProperty,
                et = {},
                nt = n.document,
                rt = '2.1.4',
                it = function(t, e) {
                    return new it.fn.init(t, e);
                },
                ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                at = /^-ms-/,
                st = /-([\da-z])/gi,
                ct = function(t, e) {
                    return e.toUpperCase();
                };
            it.fn = it.prototype = {
                jquery: rt,
                constructor: it,
                selector: '',
                length: 0,
                toArray: function() {
                    return V.call(this);
                },
                get: function(t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : V.call(this);
                },
                pushStack: function(t) {
                    var e = it.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e;
                },
                each: function(t, e) {
                    return it.each(this, t, e);
                },
                map: function(t) {
                    return this.pushStack(it.map(this, function(e, n) {
                        return t.call(e, n, e);
                    }));
                },
                slice: function() {
                    return this.pushStack(V.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor(null);
                },
                push: K,
                sort: G.sort,
                splice: G.splice
            }, it.extend = it.fn.extend = function() {
                var t, e, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    u = !1;
                for ('boolean' == typeof a && (u = a, a = arguments[s] || {}, s++), 'object' == typeof a || it.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                    if (null != (t = arguments[s]))
                        for (e in t) n = a[e], r = t[e], a !== r && (u && r && (it.isPlainObject(r) || (i = it.isArray(r))) ? (i ? (i = !1, o = n && it.isArray(n) ? n : []) : o = n && it.isPlainObject(n) ? n : {}, a[e] = it.extend(u, o, r)) : void 0 !== r && (a[e] = r));
                return a;
            }, it.extend({
                expando: 'jQuery' + (rt + Math.random()).replace(/\D/g, ''),
                isReady: !0,
                error: function(t) {
                    throw new Error(t);
                },
                noop: function() {},
                isFunction: function(t) {
                    return 'function' === it.type(t);
                },
                isArray: Array.isArray,
                isWindow: function(t) {
                    return null != t && t === t.window;
                },
                isNumeric: function(t) {
                    return !it.isArray(t) && t - parseFloat(t) + 1 >= 0;
                },
                isPlainObject: function(t) {
                    return 'object' === it.type(t) && !t.nodeType && !it.isWindow(t) && !(t.constructor && !tt.call(t.constructor.prototype, 'isPrototypeOf'));
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0;
                },
                type: function(t) {
                    return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? Q[Z.call(t)] || 'object' : typeof t;
                },
                globalEval: function(t) {
                    var e, n = eval;
                    t = it.trim(t), t && (1 === t.indexOf('use strict') ? (e = nt.createElement('script'), e.text = t, nt.head.appendChild(e).parentNode.removeChild(e)) : n(t));
                },
                camelCase: function(t) {
                    return t.replace(at, 'ms-').replace(st, ct);
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                },
                each: function(t, e, n) {
                    var r, i = 0,
                        o = t.length,
                        s = a(t);
                    if (n) {
                        if (s)
                            for (; i < o && (r = e.apply(t[i], n), r !== !1); i++);
                        else
                            for (i in t)
                                if (r = e.apply(t[i], n), r === !1) break;
                    } else if (s)
                        for (; i < o && (r = e.call(t[i], i, t[i]), r !== !1); i++);
                    else
                        for (i in t)
                            if (r = e.call(t[i], i, t[i]), r === !1) break;
                    return t;
                },
                trim: function(t) {
                    return null == t ? '' : (t + '').replace(ot, '');
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (a(Object(t)) ? it.merge(n, 'string' == typeof t ? [t] : t) : K.call(n, t)), n;
                },
                inArray: function(t, e, n) {
                    return null == e ? -1 : J.call(e, t, n);
                },
                merge: function(t, e) {
                    for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                    return t.length = i, t;
                },
                grep: function(t, e, n) {
                    for (var r, i = [], o = 0, a = t.length, s = !n; o < a; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
                    return i;
                },
                map: function(t, e, n) {
                    var r, i = 0,
                        o = t.length,
                        s = a(t),
                        c = [];
                    if (s)
                        for (; i < o; i++) r = e(t[i], i, n), null != r && c.push(r);
                    else
                        for (i in t) r = e(t[i], i, n), null != r && c.push(r);
                    return Y.apply([], c);
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, r, i;
                    if ('string' == typeof e && (n = t[e], e = t, t = n), it.isFunction(t)) return r = V.call(arguments, 2), i = function() {
                        return t.apply(e || this, r.concat(V.call(arguments)));
                    }, i.guid = t.guid = t.guid || it.guid++, i;
                },
                now: Date.now,
                support: et
            }), it.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function(t, e) {
                Q['[object ' + e + ']'] = e.toLowerCase();
            });
            var ut = function(t) {
                function e(t, e, n, r) {
                    var i, o, a, s, c, u, f, h, d, g;
                    if ((e ? e.ownerDocument || e : H) !== j && O(e), e = e || j, n = n || [], s = e.nodeType, 'string' != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && I) {
                        if (11 !== s && (i = bt.exec(t)))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = e.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n;
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && $(e, o) && o.id === a) return n.push(o), n;
                            } else {
                                if (i[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                                if ((a = i[3]) && x.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n;
                            }
                        if (x.qsa && (!R || !R.test(t))) {
                            if (h = f = B, d = e, g = 1 !== s && t, 1 === s && 'object' !== e.nodeName.toLowerCase()) {
                                for (u = E(t), (f = e.getAttribute('id')) ? h = f.replace(xt, '\\$&') : e.setAttribute('id', h), h = '[id=\'' + h + '\'] ', c = u.length; c--;) u[c] = h + p(u[c]);
                                d = wt.test(t) && l(e.parentNode) || e, g = u.join(',');
                            }
                            if (g) try {
                                return Z.apply(n, d.querySelectorAll(g)), n;
                            } catch (t) {} finally {
                                f || e.removeAttribute('id');
                            }
                        }
                    }
                    return A(t.replace(ut, '$1'), e, n, r);
                }

                function n() {
                    function t(n, r) {
                        return e.push(n + ' ') > C.cacheLength && delete t[e.shift()], t[n + ' '] = r;
                    }
                    var e = [];
                    return t;
                }

                function r(t) {
                    return t[B] = !0, t;
                }

                function i(t) {
                    var e = j.createElement('div');
                    try {
                        return !!t(e);
                    } catch (t) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null;
                    }
                }

                function o(t, e) {
                    for (var n = t.split('|'), r = t.length; r--;) C.attrHandle[n[r]] = e;
                }

                function a(t, e) {
                    var n = e && t,
                        r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1;
                }

                function s(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return 'input' === n && e.type === t;
                    };
                }

                function c(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ('input' === n || 'button' === n) && e.type === t;
                    };
                }

                function u(t) {
                    return r(function(e) {
                        return e = +e, r(function(n, r) {
                            for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                        });
                    });
                }

                function l(t) {
                    return t && 'undefined' != typeof t.getElementsByTagName && t;
                }

                function f() {}

                function p(t) {
                    for (var e = 0, n = t.length, r = ''; e < n; e++) r += t[e].value;
                    return r;
                }

                function h(t, e, n) {
                    var r = e.dir,
                        i = n && 'parentNode' === r,
                        o = U++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[r];)
                            if (1 === e.nodeType || i) return t(e, n, o);
                    } : function(e, n, a) {
                        var s, c, u = [q, o];
                        if (a) {
                            for (; e = e[r];)
                                if ((1 === e.nodeType || i) && t(e, n, a)) return !0;
                        } else
                            for (; e = e[r];)
                                if (1 === e.nodeType || i) {
                                    if (c = e[B] || (e[B] = {}), (s = c[r]) && s[0] === q && s[1] === o) return u[2] = s[2];
                                    if (c[r] = u, u[2] = t(e, n, a)) return !0;
                                }
                    };
                }

                function d(t) {
                    return t.length > 1 ? function(e, n, r) {
                        for (var i = t.length; i--;)
                            if (!t[i](e, n, r)) return !1;
                        return !0;
                    } : t[0];
                }

                function g(t, n, r) {
                    for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
                    return r;
                }

                function m(t, e, n, r, i) {
                    for (var o, a = [], s = 0, c = t.length, u = null != e; s < c; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), u && e.push(s)));
                    return a;
                }

                function v(t, e, n, i, o, a) {
                    return i && !i[B] && (i = v(i)), o && !o[B] && (o = v(o, a)), r(function(r, a, s, c) {
                        var u, l, f, p = [],
                            h = [],
                            d = a.length,
                            v = r || g(e || '*', s.nodeType ? [s] : s, []),
                            y = !t || !r && e ? v : m(v, p, t, s, c),
                            b = n ? o || (r ? t : d || i) ? [] : a : y;
                        if (n && n(y, b, s, c), i)
                            for (u = m(b, h), i(u, [], s, c), l = u.length; l--;)(f = u[l]) && (b[h[l]] = !(y[h[l]] = f));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], l = b.length; l--;)(f = b[l]) && u.push(y[l] = f);
                                    o(null, b = [], u, c);
                                }
                                for (l = b.length; l--;)(f = b[l]) && (u = o ? et(r, f) : p[l]) > -1 && (r[u] = !(a[u] = f));
                            }
                        } else b = m(b === a ? b.splice(d, b.length) : b), o ? o(null, a, b, c) : Z.apply(a, b);
                    });
                }

                function y(t) {
                    for (var e, n, r, i = t.length, o = C.relative[t[0].type], a = o || C.relative[' '], s = o ? 1 : 0, c = h(function(t) {
                            return t === e;
                        }, a, !0), u = h(function(t) {
                            return et(e, t) > -1;
                        }, a, !0), l = [function(t, n, r) {
                            var i = !o && (r || n !== k) || ((e = n).nodeType ? c(t, n, r) : u(t, n, r));
                            return e = null, i;
                        }]; s < i; s++)
                        if (n = C.relative[t[s].type]) l = [h(d(l), n)];
                        else {
                            if (n = C.filter[t[s].type].apply(null, t[s].matches), n[B]) {
                                for (r = ++s; r < i && !C.relative[t[r].type]; r++);
                                return v(s > 1 && d(l), s > 1 && p(t.slice(0, s - 1).concat({
                                    value: ' ' === t[s - 2].type ? '*' : ''
                                })).replace(ut, '$1'), n, s < r && y(t.slice(s, r)), r < i && y(t = t.slice(r)), r < i && p(t));
                            }
                            l.push(n);
                        }
                    return d(l);
                }

                function b(t, n) {
                    var i = n.length > 0,
                        o = t.length > 0,
                        a = function(r, a, s, c, u) {
                            var l, f, p, h = 0,
                                d = '0',
                                g = r && [],
                                v = [],
                                y = k,
                                b = r || o && C.find.TAG('*', u),
                                w = q += null == y ? 1 : Math.random() || 0.1,
                                x = b.length;
                            for (u && (k = a !== j && a); d !== x && null != (l = b[d]); d++) {
                                if (o && l) {
                                    for (f = 0; p = t[f++];)
                                        if (p(l, a, s)) {
                                            c.push(l);
                                            break;
                                        }
                                    u && (q = w);
                                }
                                i && ((l = !p && l) && h--, r && g.push(l));
                            }
                            if (h += d, i && d !== h) {
                                for (f = 0; p = n[f++];) p(g, v, a, s);
                                if (r) {
                                    if (h > 0)
                                        for (; d--;) g[d] || v[d] || (v[d] = J.call(c));
                                    v = m(v);
                                }
                                Z.apply(c, v), u && !r && v.length > 0 && h + n.length > 1 && e.uniqueSort(c);
                            }
                            return u && (q = w, k = y), g;
                        };
                    return i ? r(a) : a;
                }
                var w, x, C, S, T, E, D, A, k, N, F, O, j, P, I, R, M, L, $, B = 'sizzle' + 1 * new Date(),
                    H = t.document,
                    q = 0,
                    U = 0,
                    W = n(),
                    z = n(),
                    X = n(),
                    G = function(t, e) {
                        return t === e && (F = !0), 0;
                    },
                    V = 1 << 31,
                    Y = {}.hasOwnProperty,
                    K = [],
                    J = K.pop,
                    Q = K.push,
                    Z = K.push,
                    tt = K.slice,
                    et = function(t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (t[n] === e) return n;
                        return -1;
                    },
                    nt = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                    rt = '[\\x20\\t\\r\\n\\f]',
                    it = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
                    ot = it.replace('w', 'w#'),
                    at = '\\[' + rt + '*(' + it + ')(?:' + rt + '*([*^$|!~]?=)' + rt + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + ot + '))|)' + rt + '*\\]',
                    st = ':(' + it + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + at + ')*)|.*)\\)|)',
                    ct = new RegExp(rt + '+', 'g'),
                    ut = new RegExp('^' + rt + '+|((?:^|[^\\\\])(?:\\\\.)*)' + rt + '+$', 'g'),
                    lt = new RegExp('^' + rt + '*,' + rt + '*'),
                    ft = new RegExp('^' + rt + '*([>+~]|' + rt + ')' + rt + '*'),
                    pt = new RegExp('=' + rt + '*([^\\]\'"]*?)' + rt + '*\\]', 'g'),
                    ht = new RegExp(st),
                    dt = new RegExp('^' + ot + '$'),
                    gt = {
                        ID: new RegExp('^#(' + it + ')'),
                        CLASS: new RegExp('^\\.(' + it + ')'),
                        TAG: new RegExp('^(' + it.replace('w', 'w*') + ')'),
                        ATTR: new RegExp('^' + at),
                        PSEUDO: new RegExp('^' + st),
                        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + rt + '*(even|odd|(([+-]|)(\\d*)n|)' + rt + '*(?:([+-]|)' + rt + '*(\\d+)|))' + rt + '*\\)|)', 'i'),
                        bool: new RegExp('^(?:' + nt + ')$', 'i'),
                        needsContext: new RegExp('^' + rt + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + rt + '*((?:-\\d)?\\d*)' + rt + '*\\)|)(?=[^-]|$)', 'i')
                    },
                    mt = /^(?:input|select|textarea|button)$/i,
                    vt = /^h\d$/i,
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    wt = /[+~]/,
                    xt = /'|\\/g,
                    Ct = new RegExp('\\\\([\\da-f]{1,6}' + rt + '?|(' + rt + ')|.)', 'ig'),
                    St = function(_, t, e) {
                        var n = '0x' + t - 65536;
                        return n !== n || e ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
                    },
                    Tt = function() {
                        O();
                    };
                try {
                    Z.apply(K = tt.call(H.childNodes), H.childNodes), K[H.childNodes.length].nodeType;
                } catch (t) {
                    Z = {
                        apply: K.length ? function(t, e) {
                            Q.apply(t, tt.call(e));
                        } : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];);
                            t.length = n - 1;
                        }
                    };
                }
                x = e.support = {}, T = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && 'HTML' !== e.nodeName;
                }, O = e.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : H;
                    return r !== j && 9 === r.nodeType && r.documentElement ? (j = r, P = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener('unload', Tt, !1) : n.attachEvent && n.attachEvent('onunload', Tt)), I = !T(r), x.attributes = i(function(t) {
                        return t.className = 'i', !t.getAttribute('className');
                    }), x.getElementsByTagName = i(function(t) {
                        return t.appendChild(r.createComment('')), !t.getElementsByTagName('*').length;
                    }), x.getElementsByClassName = yt.test(r.getElementsByClassName), x.getById = i(function(t) {
                        return P.appendChild(t).id = B, !r.getElementsByName || !r.getElementsByName(B).length;
                    }), x.getById ? (C.find.ID = function(t, e) {
                        if ('undefined' != typeof e.getElementById && I) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : [];
                        }
                    }, C.filter.ID = function(t) {
                        var e = t.replace(Ct, St);
                        return function(t) {
                            return t.getAttribute('id') === e;
                        };
                    }) : (delete C.find.ID, C.filter.ID = function(t) {
                        var e = t.replace(Ct, St);
                        return function(t) {
                            var n = 'undefined' != typeof t.getAttributeNode && t.getAttributeNode('id');
                            return n && n.value === e;
                        };
                    }), C.find.TAG = x.getElementsByTagName ? function(t, e) {
                        return 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0;
                    } : function(t, e) {
                        var n, r = [],
                            i = 0,
                            o = e.getElementsByTagName(t);
                        if ('*' === t) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, C.find.CLASS = x.getElementsByClassName && function(t, e) {
                        if (I) return e.getElementsByClassName(t);
                    }, M = [], R = [], (x.qsa = yt.test(r.querySelectorAll)) && (i(function(t) {
                        P.appendChild(t).innerHTML = '<a id=\'' + B + '\'></a><select id=\'' + B + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>', t.querySelectorAll('[msallowcapture^=\'\']').length && R.push('[*^$]=' + rt + '*(?:\'\'|"")'), t.querySelectorAll('[selected]').length || R.push('\\[' + rt + '*(?:value|' + nt + ')'), t.querySelectorAll('[id~=' + B + '-]').length || R.push('~='), t.querySelectorAll(':checked').length || R.push(':checked'), t.querySelectorAll('a#' + B + '+*').length || R.push('.#.+[+~]');
                    }), i(function(t) {
                        var e = r.createElement('input');
                        e.setAttribute('type', 'hidden'), t.appendChild(e).setAttribute('name', 'D'), t.querySelectorAll('[name=d]').length && R.push('name' + rt + '*[*^$|!~]?='), t.querySelectorAll(':enabled').length || R.push(':enabled', ':disabled'), t.querySelectorAll('*,:x'), R.push(',.*:');
                    })), (x.matchesSelector = yt.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(t) {
                        x.disconnectedMatch = L.call(t, 'div'), L.call(t, '[s!=\'\']:x'), M.push('!=', st);
                    }), R = R.length && new RegExp(R.join('|')), M = M.length && new RegExp(M.join('|')), e = yt.test(P.compareDocumentPosition), $ = e || yt.test(P.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1;
                    }, G = e ? function(t, e) {
                        if (t === e) return F = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === H && $(H, t) ? -1 : e === r || e.ownerDocument === H && $(H, e) ? 1 : N ? et(N, t) - et(N, e) : 0 : 4 & n ? -1 : 1);
                    } : function(t, e) {
                        if (t === e) return F = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            c = [t],
                            u = [e];
                        if (!o || !s) return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : N ? et(N, t) - et(N, e) : 0;
                        if (o === s) return a(t, e);
                        for (n = t; n = n.parentNode;) c.unshift(n);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (; c[i] === u[i];) i++;
                        return i ? a(c[i], u[i]) : c[i] === H ? -1 : u[i] === H ? 1 : 0;
                    }, r) : j;
                }, e.matches = function(t, n) {
                    return e(t, null, null, n);
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== j && O(t), n = n.replace(pt, '=\'$1\']'), x.matchesSelector && I && (!M || !M.test(n)) && (!R || !R.test(n))) try {
                        var r = L.call(t, n);
                        if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r;
                    } catch (t) {}
                    return e(n, j, null, [t]).length > 0;
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== j && O(t), $(t, e);
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== j && O(t);
                    var n = C.attrHandle[e.toLowerCase()],
                        r = n && Y.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                    return void 0 !== r ? r : x.attributes || !I ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
                }, e.error = function(t) {
                    throw new Error('Syntax error, unrecognized expression: ' + t);
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        r = 0,
                        i = 0;
                    if (F = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(G), F) {
                        for (; e = t[i++];) e === t[i] && (r = n.push(i));
                        for (; r--;) t.splice(n[r], 1);
                    }
                    return N = null, t;
                }, S = e.getText = function(t) {
                    var e, n = '',
                        r = 0,
                        i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ('string' == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += S(t);
                        } else if (3 === i || 4 === i) return t.nodeValue;
                    } else
                        for (; e = t[r++];) n += S(e);
                    return n;
                }, C = e.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: gt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        '>': {
                            dir: 'parentNode',
                            first: !0
                        },
                        ' ': {
                            dir: 'parentNode'
                        },
                        '+': {
                            dir: 'previousSibling',
                            first: !0
                        },
                        '~': {
                            dir: 'previousSibling'
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Ct, St), t[3] = (t[3] || t[4] || t[5] || '').replace(Ct, St), '~=' === t[2] && (t[3] = ' ' + t[3] + ' '), t.slice(0, 4);
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), 'nth' === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3])), t[5] = +(t[7] + t[8] || 'odd' === t[3])) : t[3] && e.error(t[0]), t;
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return gt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || '' : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(')', n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Ct, St).toLowerCase();
                            return '*' === t ? function() {
                                return !0;
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e;
                            };
                        },
                        CLASS: function(t) {
                            var e = W[t + ' '];
                            return e || (e = new RegExp('(^|' + rt + ')' + t + '(' + rt + '|$)')) && W(t, function(t) {
                                return e.test('string' == typeof t.className && t.className || 'undefined' != typeof t.getAttribute && t.getAttribute('class') || '');
                            });
                        },
                        ATTR: function(t, n, r) {
                            return function(i) {
                                var o = e.attr(i, t);
                                return null == o ? '!=' === n : !n || (o += '', '=' === n ? o === r : '!=' === n ? o !== r : '^=' === n ? r && 0 === o.indexOf(r) : '*=' === n ? r && o.indexOf(r) > -1 : '$=' === n ? r && o.slice(-r.length) === r : '~=' === n ? (' ' + o.replace(ct, ' ') + ' ').indexOf(r) > -1 : '|=' === n && (o === r || o.slice(0, r.length + 1) === r + '-'));
                            };
                        },
                        CHILD: function(t, e, n, r, i) {
                            var o = 'nth' !== t.slice(0, 3),
                                a = 'last' !== t.slice(-4),
                                s = 'of-type' === e;
                            return 1 === r && 0 === i ? function(t) {
                                return !!t.parentNode;
                            } : function(e, n, c) {
                                var u, l, f, p, h, d, g = o !== a ? 'nextSibling' : 'previousSibling',
                                    m = e.parentNode,
                                    v = s && e.nodeName.toLowerCase(),
                                    y = !c && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = e; f = f[g];)
                                                if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            d = g = 'only' === t && !d && 'nextSibling';
                                        }
                                        return !0;
                                    }
                                    if (d = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (l = m[B] || (m[B] = {}), u = l[t] || [], h = u[0] === q && u[1], p = u[0] === q && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();)
                                            if (1 === f.nodeType && ++p && f === e) {
                                                l[t] = [q, h, p];
                                                break;
                                            }
                                    } else if (y && (u = (e[B] || (e[B] = {}))[t]) && u[0] === q) p = u[1];
                                    else
                                        for (;
                                            (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[B] || (f[B] = {}))[t] = [q, p]), f !== e)););
                                    return p -= i, p === r || p % r === 0 && p / r >= 0;
                                }
                            };
                        },
                        PSEUDO: function(t, n) {
                            var i, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error('unsupported pseudo: ' + t);
                            return o[B] ? o(n) : o.length > 1 ? (i = [t, t, '', n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                                for (var r, i = o(t, n), a = i.length; a--;) r = et(t, i[a]), t[r] = !(e[r] = i[a]);
                            }) : function(t) {
                                return o(t, 0, i);
                            }) : o;
                        }
                    },
                    pseudos: {
                        not: r(function(t) {
                            var e = [],
                                n = [],
                                i = D(t.replace(ut, '$1'));
                            return i[B] ? r(function(t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o));
                            }) : function(t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop();
                            };
                        }),
                        has: r(function(t) {
                            return function(n) {
                                return e(t, n).length > 0;
                            };
                        }),
                        contains: r(function(t) {
                            return t = t.replace(Ct, St),
                                function(e) {
                                    return (e.textContent || e.innerText || S(e)).indexOf(t) > -1;
                                };
                        }),
                        lang: r(function(t) {
                            return dt.test(t || '') || e.error('unsupported lang: ' + t), t = t.replace(Ct, St).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = I ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + '-'); while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                };
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id;
                        },
                        root: function(t) {
                            return t === P;
                        },
                        focus: function(t) {
                            return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                        },
                        enabled: function(t) {
                            return t.disabled === !1;
                        },
                        disabled: function(t) {
                            return t.disabled === !0;
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return 'input' === e && !!t.checked || 'option' === e && !!t.selected;
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(t) {
                            return !C.pseudos.empty(t);
                        },
                        header: function(t) {
                            return vt.test(t.nodeName);
                        },
                        input: function(t) {
                            return mt.test(t.nodeName);
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return 'input' === e && 'button' === t.type || 'button' === e;
                        },
                        text: function(t) {
                            var e;
                            return 'input' === t.nodeName.toLowerCase() && 'text' === t.type && (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase());
                        },
                        first: u(function() {
                            return [0];
                        }),
                        last: u(function(t, e) {
                            return [e - 1];
                        }),
                        eq: u(function(t, e, n) {
                            return [n < 0 ? n + e : n];
                        }),
                        even: u(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t;
                        }),
                        odd: u(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t;
                        }),
                        lt: u(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                            return t;
                        }),
                        gt: u(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                            return t;
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) C.pseudos[w] = s(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) C.pseudos[w] = c(w);
                return f.prototype = C.filters = C.pseudos, C.setFilters = new f(), E = e.tokenize = function(t, n) {
                    var r, i, o, a, s, c, u, l = z[t + ' '];
                    if (l) return n ? 0 : l.slice(0);
                    for (s = t, c = [], u = C.preFilter; s;) {
                        r && !(i = lt.exec(s)) || (i && (s = s.slice(i[0].length) || s), c.push(o = [])), r = !1, (i = ft.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(ut, ' ')
                        }), s = s.slice(r.length));
                        for (a in C.filter) !(i = gt[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break;
                    }
                    return n ? s.length : s ? e.error(t) : z(t, c).slice(0);
                }, D = e.compile = function(t, e) {
                    var n, r = [],
                        i = [],
                        o = X[t + ' '];
                    if (!o) {
                        for (e || (e = E(t)), n = e.length; n--;) o = y(e[n]), o[B] ? r.push(o) : i.push(o);
                        o = X(t, b(i, r)), o.selector = t;
                    }
                    return o;
                }, A = e.select = function(t, e, n, r) {
                    var i, o, a, s, c, u = 'function' == typeof t && t,
                        f = !r && E(t = u.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && 'ID' === (a = o[0]).type && x.getById && 9 === e.nodeType && I && C.relative[o[1].type]) {
                            if (e = (C.find.ID(a.matches[0].replace(Ct, St), e) || [])[0], !e) return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length);
                        }
                        for (i = gt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
                            if ((c = C.find[s]) && (r = c(a.matches[0].replace(Ct, St), wt.test(o[0].type) && l(e.parentNode) || e))) {
                                if (o.splice(i, 1), t = r.length && p(o), !t) return Z.apply(n, r), n;
                                break;
                            }
                    }
                    return (u || D(t, f))(r, e, !I, n, wt.test(t) && l(e.parentNode) || e), n;
                }, x.sortStable = B.split('').sort(G).join('') === B, x.detectDuplicates = !!F, O(), x.sortDetached = i(function(t) {
                    return 1 & t.compareDocumentPosition(j.createElement('div'));
                }), i(function(t) {
                    return t.innerHTML = '<a href=\'#\'></a>', '#' === t.firstChild.getAttribute('href');
                }) || o('type|href|height|width', function(t, e, n) {
                    if (!n) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
                }), x.attributes && i(function(t) {
                    return t.innerHTML = '<input/>', t.firstChild.setAttribute('value', ''), '' === t.firstChild.getAttribute('value');
                }) || o('value', function(t, e, n) {
                    if (!n && 'input' === t.nodeName.toLowerCase()) return t.defaultValue;
                }), i(function(t) {
                    return null == t.getAttribute('disabled');
                }) || o(nt, function(t, e, n) {
                    var r;
                    if (!n) return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
                }), e;
            }(n);
            it.find = ut, it.expr = ut.selectors, it.expr[':'] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
            var lt = it.expr.match.needsContext,
                ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                pt = /^.[^:#\[\.,]*$/;
            it.filter = function(t, e, n) {
                var r = e[0];
                return n && (t = ':not(' + t + ')'), 1 === e.length && 1 === r.nodeType ? it.find.matchesSelector(r, t) ? [r] : [] : it.find.matches(t, it.grep(e, function(t) {
                    return 1 === t.nodeType;
                }));
            }, it.fn.extend({
                find: function(t) {
                    var e, n = this.length,
                        r = [],
                        i = this;
                    if ('string' != typeof t) return this.pushStack(it(t).filter(function() {
                        for (e = 0; e < n; e++)
                            if (it.contains(i[e], this)) return !0;
                    }));
                    for (e = 0; e < n; e++) it.find(t, i[e], r);
                    return r = this.pushStack(n > 1 ? it.unique(r) : r), r.selector = this.selector ? this.selector + ' ' + t : t, r;
                },
                filter: function(t) {
                    return this.pushStack(s(this, t || [], !1));
                },
                not: function(t) {
                    return this.pushStack(s(this, t || [], !0));
                },
                is: function(t) {
                    return !!s(this, 'string' == typeof t && lt.test(t) ? it(t) : t || [], !1).length;
                }
            });
            var ht, dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                gt = it.fn.init = function(t, e) {
                    var n, r;
                    if (!t) return this;
                    if ('string' == typeof t) {
                        if (n = '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3 ? [null, t, null] : dt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                        if (n[1]) {
                            if (e = e instanceof it ? e[0] : e, it.merge(this, it.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), ft.test(n[1]) && it.isPlainObject(e))
                                for (n in e) it.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                            return this;
                        }
                        return r = nt.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = nt, this.selector = t, this;
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : it.isFunction(t) ? 'undefined' != typeof ht.ready ? ht.ready(t) : t(it) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), it.makeArray(t, this));
                };
            gt.prototype = it.fn, ht = it(nt);
            var mt = /^(?:parents|prev(?:Until|All))/,
                vt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            it.extend({
                dir: function(t, e, n) {
                    for (var r = [], i = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (i && it(t).is(n)) break;
                            r.push(t);
                        }
                    return r;
                },
                sibling: function(t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n;
                }
            }), it.fn.extend({
                has: function(t) {
                    var e = it(t, this),
                        n = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < n; t++)
                            if (it.contains(this, e[t])) return !0;
                    });
                },
                closest: function(t, e) {
                    for (var n, r = 0, i = this.length, o = [], a = lt.test(t) || 'string' != typeof t ? it(t, e || this.context) : 0; r < i; r++)
                        for (n = this[r]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, t))) {
                                o.push(n);
                                break;
                            }
                    return this.pushStack(o.length > 1 ? it.unique(o) : o);
                },
                index: function(t) {
                    return t ? 'string' == typeof t ? J.call(it(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(t, e) {
                    return this.pushStack(it.unique(it.merge(this.get(), it(t, e))));
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                }
            }), it.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function(t) {
                    return it.dir(t, 'parentNode');
                },
                parentsUntil: function(t, e, n) {
                    return it.dir(t, 'parentNode', n);
                },
                next: function(t) {
                    return c(t, 'nextSibling');
                },
                prev: function(t) {
                    return c(t, 'previousSibling');
                },
                nextAll: function(t) {
                    return it.dir(t, 'nextSibling');
                },
                prevAll: function(t) {
                    return it.dir(t, 'previousSibling');
                },
                nextUntil: function(t, e, n) {
                    return it.dir(t, 'nextSibling', n);
                },
                prevUntil: function(t, e, n) {
                    return it.dir(t, 'previousSibling', n);
                },
                siblings: function(t) {
                    return it.sibling((t.parentNode || {}).firstChild, t);
                },
                children: function(t) {
                    return it.sibling(t.firstChild);
                },
                contents: function(t) {
                    return t.contentDocument || it.merge([], t.childNodes);
                }
            }, function(t, e) {
                it.fn[t] = function(n, r) {
                    var i = it.map(this, e, n);
                    return 'Until' !== t.slice(-5) && (r = n), r && 'string' == typeof r && (i = it.filter(r, i)), this.length > 1 && (vt[t] || it.unique(i), mt.test(t) && i.reverse()), this.pushStack(i);
                };
            });
            var yt = /\S+/g,
                bt = {};
            it.Callbacks = function(t) {
                t = 'string' == typeof t ? bt[t] || u(t) : it.extend({}, t);
                var e, n, r, i, o, a, s = [],
                    c = !t.once && [],
                    l = function(u) {
                        for (e = t.memory && u, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++)
                            if (s[a].apply(u[0], u[1]) === !1 && t.stopOnFalse) {
                                e = !1;
                                break;
                            }
                        r = !1, s && (c ? c.length && l(c.shift()) : e ? s = [] : f.disable());
                    },
                    f = {
                        add: function() {
                            if (s) {
                                var n = s.length;
                                ! function e(n) {
                                    it.each(n, function(_, n) {
                                        var r = it.type(n);
                                        'function' === r ? t.unique && f.has(n) || s.push(n) : n && n.length && 'string' !== r && e(n);
                                    });
                                }(arguments), r ? o = s.length : e && (i = n, l(e));
                            }
                            return this;
                        },
                        remove: function() {
                            return s && it.each(arguments, function(_, t) {
                                for (var e;
                                    (e = it.inArray(t, s, e)) > -1;) s.splice(e, 1), r && (e <= o && o--, e <= a && a--);
                            }), this;
                        },
                        has: function(t) {
                            return t ? it.inArray(t, s) > -1 : !(!s || !s.length);
                        },
                        empty: function() {
                            return s = [], o = 0, this;
                        },
                        disable: function() {
                            return s = c = e = void 0, this;
                        },
                        disabled: function() {
                            return !s;
                        },
                        lock: function() {
                            return c = void 0, e || f.disable(), this;
                        },
                        locked: function() {
                            return !c;
                        },
                        fireWith: function(t, e) {
                            return !s || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this;
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this;
                        },
                        fired: function() {
                            return !!n;
                        }
                    };
                return f;
            }, it.extend({
                Deferred: function(t) {
                    var e = [
                            ['resolve', 'done', it.Callbacks('once memory'), 'resolved'],
                            ['reject', 'fail', it.Callbacks('once memory'), 'rejected'],
                            ['notify', 'progress', it.Callbacks('memory')]
                        ],
                        n = 'pending',
                        r = {
                            state: function() {
                                return n;
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this;
                            },
                            then: function() {
                                var t = arguments;
                                return it.Deferred(function(n) {
                                    it.each(e, function(e, o) {
                                        var a = it.isFunction(t[e]) && t[e];
                                        i[o[1]](function() {
                                            var t = a && a.apply(this, arguments);
                                            t && it.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + 'With'](this === r ? n.promise() : this, a ? [t] : arguments);
                                        });
                                    }), t = null;
                                }).promise();
                            },
                            promise: function(t) {
                                return null != t ? it.extend(t, r) : r;
                            }
                        },
                        i = {};
                    return r.pipe = r.then, it.each(e, function(t, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s;
                        }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + 'With'](this === i ? r : this, arguments), this;
                        }, i[o[0] + 'With'] = a.fireWith;
                    }), r.promise(i), t && t.call(i, i), i;
                },
                when: function(t) {
                    var e, n, r, i = 0,
                        o = V.call(arguments),
                        a = o.length,
                        s = 1 !== a || t && it.isFunction(t.promise) ? a : 0,
                        c = 1 === s ? t : it.Deferred(),
                        u = function(t, n, r) {
                            return function(i) {
                                n[t] = this, r[t] = arguments.length > 1 ? V.call(arguments) : i, r === e ? c.notifyWith(n, r) : --s || c.resolveWith(n, r);
                            };
                        };
                    if (a > 1)
                        for (e = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(c.reject).progress(u(i, n, e)) : --s;
                    return s || c.resolveWith(r, o), c.promise();
                }
            });
            var wt;
            it.fn.ready = function(t) {
                return it.ready.promise().done(t), this;
            }, it.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? it.readyWait++ : it.ready(!0);
                },
                ready: function(t) {
                    (t === !0 ? --it.readyWait : it.isReady) || (it.isReady = !0, t !== !0 && --it.readyWait > 0 || (wt.resolveWith(nt, [it]), it.fn.triggerHandler && (it(nt).triggerHandler('ready'), it(nt).off('ready'))));
                }
            }), it.ready.promise = function(t) {
                return wt || (wt = it.Deferred(), 'complete' === nt.readyState ? setTimeout(it.ready) : (nt.addEventListener('DOMContentLoaded', l, !1), n.addEventListener('load', l, !1))), wt.promise(t);
            }, it.ready.promise();
            var xt = it.access = function(t, e, n, r, i, o, a) {
                var s = 0,
                    c = t.length,
                    u = null == n;
                if ('object' === it.type(n)) {
                    i = !0;
                    for (s in n) it.access(t, e, s, n[s], !0, o, a);
                } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(it(t), n);
                    })), e))
                    for (; s < c; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                return i ? t : u ? e.call(t) : c ? e(t[0], n) : o;
            };
            it.acceptData = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            }, f.uid = 1, f.accepts = it.acceptData, f.prototype = {
                key: function(t) {
                    if (!f.accepts(t)) return 0;
                    var e = {},
                        n = t[this.expando];
                    if (!n) {
                        n = f.uid++;
                        try {
                            e[this.expando] = {
                                value: n
                            }, Object.defineProperties(t, e);
                        } catch (r) {
                            e[this.expando] = n, it.extend(t, e);
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n;
                },
                set: function(t, e, n) {
                    var r, i = this.key(t),
                        o = this.cache[i];
                    if ('string' == typeof e) o[e] = n;
                    else if (it.isEmptyObject(o)) it.extend(this.cache[i], e);
                    else
                        for (r in e) o[r] = e[r];
                    return o;
                },
                get: function(t, e) {
                    var n = this.cache[this.key(t)];
                    return void 0 === e ? n : n[e];
                },
                access: function(t, e, n) {
                    var r;
                    return void 0 === e || e && 'string' == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, it.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e);
                },
                remove: function(t, e) {
                    var n, r, i, o = this.key(t),
                        a = this.cache[o];
                    if (void 0 === e) this.cache[o] = {};
                    else {
                        it.isArray(e) ? r = e.concat(e.map(it.camelCase)) : (i = it.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(yt) || [])), n = r.length;
                        for (; n--;) delete a[r[n]];
                    }
                },
                hasData: function(t) {
                    return !it.isEmptyObject(this.cache[t[this.expando]] || {});
                },
                discard: function(t) {
                    t[this.expando] && delete this.cache[t[this.expando]];
                }
            };
            var Ct = new f(),
                St = new f(),
                Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Et = /([A-Z])/g;
            it.extend({
                hasData: function(t) {
                    return St.hasData(t) || Ct.hasData(t);
                },
                data: function(t, e, n) {
                    return St.access(t, e, n);
                },
                removeData: function(t, e) {
                    St.remove(t, e);
                },
                _data: function(t, e, n) {
                    return Ct.access(t, e, n);
                },
                _removeData: function(t, e) {
                    Ct.remove(t, e);
                }
            }), it.fn.extend({
                data: function(t, e) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (i = St.get(o), 1 === o.nodeType && !Ct.get(o, 'hasDataAttrs'))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf('data-') && (r = it.camelCase(r.slice(5)), p(o, r, i[r])));
                            Ct.set(o, 'hasDataAttrs', !0);
                        }
                        return i;
                    }
                    return 'object' == typeof t ? this.each(function() {
                        St.set(this, t);
                    }) : xt(this, function(e) {
                        var n, r = it.camelCase(t);
                        if (o && void 0 === e) {
                            if (n = St.get(o, t), void 0 !== n) return n;
                            if (n = St.get(o, r), void 0 !== n) return n;
                            if (n = p(o, r, void 0), void 0 !== n) return n;
                        } else this.each(function() {
                            var n = St.get(this, r);
                            St.set(this, r, e), t.indexOf('-') !== -1 && void 0 !== n && St.set(this, t, e);
                        });
                    }, null, e, arguments.length > 1, null, !0);
                },
                removeData: function(t) {
                    return this.each(function() {
                        St.remove(this, t);
                    });
                }
            }), it.extend({
                queue: function(t, e, n) {
                    var r;
                    if (t) return e = (e || 'fx') + 'queue', r = Ct.get(t, e), n && (!r || it.isArray(n) ? r = Ct.access(t, e, it.makeArray(n)) : r.push(n)), r || [];
                },
                dequeue: function(t, e) {
                    e = e || 'fx';
                    var n = it.queue(t, e),
                        r = n.length,
                        i = n.shift(),
                        o = it._queueHooks(t, e),
                        a = function() {
                            it.dequeue(t, e);
                        };
                    'inprogress' === i && (i = n.shift(), r--), i && ('fx' === e && n.unshift('inprogress'), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire();
                },
                _queueHooks: function(t, e) {
                    var n = e + 'queueHooks';
                    return Ct.get(t, n) || Ct.access(t, n, {
                        empty: it.Callbacks('once memory').add(function() {
                            Ct.remove(t, [e + 'queue', n]);
                        })
                    });
                }
            }), it.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return 'string' != typeof t && (e = t, t = 'fx', n--), arguments.length < n ? it.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = it.queue(this, t, e);
                        it._queueHooks(this, t), 'fx' === t && 'inprogress' !== n[0] && it.dequeue(this, t);
                    });
                },
                dequeue: function(t) {
                    return this.each(function() {
                        it.dequeue(this, t);
                    });
                },
                clearQueue: function(t) {
                    return this.queue(t || 'fx', []);
                },
                promise: function(t, e) {
                    var n, r = 1,
                        i = it.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o]);
                        };
                    for ('string' != typeof t && (e = t, t = void 0), t = t || 'fx'; a--;) n = Ct.get(o[a], t + 'queueHooks'), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(e);
                }
            });
            var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                At = ['Top', 'Right', 'Bottom', 'Left'],
                kt = function(t, e) {
                    return t = e || t, 'none' === it.css(t, 'display') || !it.contains(t.ownerDocument, t);
                },
                _t = /^(?:checkbox|radio)$/i;
            ! function() {
                var t = nt.createDocumentFragment(),
                    e = t.appendChild(nt.createElement('div')),
                    n = nt.createElement('input');
                n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), e.appendChild(n), et.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = '<textarea>x</textarea>', et.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
            }();
            var Nt = 'undefined';
            et.focusinBubbles = 'onfocusin' in n;
            var Ft = /^key/,
                Ot = /^(?:mouse|pointer|contextmenu)|click/,
                jt = /^(?:focusinfocus|focusoutblur)$/,
                Pt = /^([^.]*)(?:\.(.+)|)$/;
            it.event = {
                global: {},
                add: function(t, e, n, r, i) {
                    var o, a, s, c, u, l, f, p, h, d, g, m = Ct.get(t);
                    if (m)
                        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = it.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                                return typeof it !== Nt && it.event.triggered !== e.type ? it.event.dispatch.apply(t, arguments) : void 0;
                            }), e = (e || '').match(yt) || [''], u = e.length; u--;) s = Pt.exec(e[u]) || [], h = g = s[1], d = (s[2] || '').split('.').sort(), h && (f = it.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = it.event.special[h] || {}, l = it.extend({
                            type: h,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && it.expr.match.needsContext.test(i),
                            namespace: d.join('.')
                        }, o), (p = c[h]) || (p = c[h] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(h, a, !1)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), it.event.global[h] = !0);
                },
                remove: function(t, e, n, r, i) {
                    var o, a, s, c, u, l, f, p, h, d, g, m = Ct.hasData(t) && Ct.get(t);
                    if (m && (c = m.events)) {
                        for (e = (e || '').match(yt) || [''], u = e.length; u--;)
                            if (s = Pt.exec(e[u]) || [], h = g = s[1], d = (s[2] || '').split('.').sort(), h) {
                                for (f = it.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = c[h] || [], s = s[2] && new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ('**' !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(t, l));
                                a && !p.length && (f.teardown && f.teardown.call(t, d, m.handle) !== !1 || it.removeEvent(t, h, m.handle), delete c[h]);
                            } else
                                for (h in c) it.event.remove(t, h + e[u], n, r, !0);
                        it.isEmptyObject(c) && (delete m.handle, Ct.remove(t, 'events'));
                    }
                },
                trigger: function(t, e, r, i) {
                    var o, a, s, c, u, l, f, p = [r || nt],
                        h = tt.call(t, 'type') ? t.type : t,
                        d = tt.call(t, 'namespace') ? t.namespace.split('.') : [];
                    if (a = s = r = r || nt, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(h + it.event.triggered) && (h.indexOf('.') >= 0 && (d = h.split('.'), h = d.shift(), d.sort()), u = h.indexOf(':') < 0 && 'on' + h, t = t[it.expando] ? t : new it.Event(h, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = d.join('.'), t.namespace_re = t.namespace ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : it.makeArray(e, [t]), f = it.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, e) !== !1)) {
                        if (!i && !f.noBubble && !it.isWindow(r)) {
                            for (c = f.delegateType || h, jt.test(c + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || nt) && p.push(s.defaultView || s.parentWindow || n);
                        }
                        for (o = 0;
                            (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? c : f.bindType || h, l = (Ct.get(a, 'events') || {})[t.type] && Ct.get(a, 'handle'), l && l.apply(a, e), l = u && a[u], l && l.apply && it.acceptData(a) && (t.result = l.apply(a, e), t.result === !1 && t.preventDefault());
                        return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), e) !== !1 || !it.acceptData(r) || u && it.isFunction(r[h]) && !it.isWindow(r) && (s = r[u], s && (r[u] = null), it.event.triggered = h, r[h](), it.event.triggered = void 0, s && (r[u] = s)), t.result;
                    }
                },
                dispatch: function(t) {
                    t = it.event.fix(t);
                    var e, n, r, i, o, a = [],
                        s = V.call(arguments),
                        c = (Ct.get(this, 'events') || {})[t.type] || [],
                        u = it.event.special[t.type] || {};
                    if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                        for (a = it.event.handlers.call(this, t, c), e = 0;
                            (i = a[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((it.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result;
                    }
                },
                handlers: function(t, e) {
                    var n, r, i, o, a = [],
                        s = e.delegateCount,
                        c = t.target;
                    if (s && c.nodeType && (!t.button || 'click' !== t.type))
                        for (; c !== this; c = c.parentNode || this)
                            if (c.disabled !== !0 || 'click' !== t.type) {
                                for (r = [], n = 0; n < s; n++) o = e[n], i = o.selector + ' ', void 0 === r[i] && (r[i] = o.needsContext ? it(i, this).index(c) >= 0 : it.find(i, this, null, [c]).length), r[i] && r.push(o);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                });
                            }
                    return s < e.length && a.push({
                        elem: this,
                        handlers: e.slice(s)
                    }), a;
                },
                props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
                fixHooks: {},
                keyHooks: {
                    props: 'char charCode key keyCode'.split(' '),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
                    }
                },
                mouseHooks: {
                    props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
                    filter: function(t, e) {
                        var n, r, i, o = e.button;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t;
                    }
                },
                fix: function(t) {
                    if (t[it.expando]) return t;
                    var e, n, r, i = t.type,
                        o = t,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = Ot.test(i) ? this.mouseHooks : Ft.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new it.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
                    return t.target || (t.target = nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t;
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== g() && this.focus) return this.focus(), !1;
                        },
                        delegateType: 'focusin'
                    },
                    blur: {
                        trigger: function() {
                            if (this === g() && this.blur) return this.blur(), !1;
                        },
                        delegateType: 'focusout'
                    },
                    click: {
                        trigger: function() {
                            if ('checkbox' === this.type && this.click && it.nodeName(this, 'input')) return this.click(), !1;
                        },
                        _default: function(t) {
                            return it.nodeName(t.target, 'a');
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                        }
                    }
                },
                simulate: function(t, e, n, r) {
                    var i = it.extend(new it.Event(), n, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? it.event.trigger(i, null, e) : it.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault();
                }
            }, it.removeEvent = function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1);
            }, it.Event = function(t, e) {
                return this instanceof it.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : d) : this.type = t, e && it.extend(this, e), this.timeStamp = t && t.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(t, e);
            }, it.Event.prototype = {
                isDefaultPrevented: d,
                isPropagationStopped: d,
                isImmediatePropagationStopped: d,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault();
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
                }
            }, it.each({
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout'
            }, function(t, e) {
                it.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, r = this,
                            i = t.relatedTarget,
                            o = t.handleObj;
                        return i && (i === r || it.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n;
                    }
                };
            }), et.focusinBubbles || it.each({
                focus: 'focusin',
                blur: 'focusout'
            }, function(t, e) {
                var n = function(t) {
                    it.event.simulate(e, t.target, it.event.fix(t), !0);
                };
                it.event.special[e] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = Ct.access(r, e);
                        i || r.addEventListener(t, n, !0), Ct.access(r, e, (i || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = Ct.access(r, e) - 1;
                        i ? Ct.access(r, e, i) : (r.removeEventListener(t, n, !0), Ct.remove(r, e));
                    }
                };
            }), it.fn.extend({
                on: function(t, e, n, r, i) {
                    var o, a;
                    if ('object' == typeof t) {
                        'string' != typeof e && (n = n || e, e = void 0);
                        for (a in t) this.on(a, e, n, t[a], i);
                        return this;
                    }
                    if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ('string' == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = d;
                    else if (!r) return this;
                    return 1 === i && (o = r, r = function(t) {
                        return it().off(t), o.apply(this, arguments);
                    }, r.guid = o.guid || (o.guid = it.guid++)), this.each(function() {
                        it.event.add(this, t, r, n, e);
                    });
                },
                one: function(t, e, n, r) {
                    return this.on(t, e, n, r, 1);
                },
                off: function(t, e, n) {
                    var r, i;
                    if (t && t.preventDefault && t.handleObj) return r = t.handleObj, it(t.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
                    if ('object' == typeof t) {
                        for (i in t) this.off(i, e, t[i]);
                        return this;
                    }
                    return e !== !1 && 'function' != typeof e || (n = e, e = void 0), n === !1 && (n = d), this.each(function() {
                        it.event.remove(this, t, n, e);
                    });
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        it.event.trigger(t, e, this);
                    });
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    if (n) return it.event.trigger(t, e, n, !0);
                }
            });
            var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Rt = /<([\w:]+)/,
                Mt = /<|&#?\w+;/,
                Lt = /<(?:script|style|link)/i,
                $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Bt = /^$|\/(?:java|ecma)script/i,
                Ht = /^true\/(.*)/,
                qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Ut = {
                    option: [1, '<select multiple=\'multiple\'>', '</select>'],
                    thead: [1, '<table>', '</table>'],
                    col: [2, '<table><colgroup>', '</colgroup></table>'],
                    tr: [2, '<table><tbody>', '</tbody></table>'],
                    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                    _default: [0, '', '']
                };
            Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td, it.extend({
                clone: function(t, e, n) {
                    var r, i, o, a, s = t.cloneNode(!0),
                        c = it.contains(t.ownerDocument, t);
                    if (!(et.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || it.isXMLDoc(t)))
                        for (a = x(s), o = x(t), r = 0, i = o.length; r < i; r++) C(o[r], a[r]);
                    if (e)
                        if (n)
                            for (o = o || x(t), a = a || x(s), r = 0, i = o.length; r < i; r++) w(o[r], a[r]);
                        else w(t, s);
                    return a = x(s, 'script'), a.length > 0 && b(a, !c && x(t, 'script')), s;
                },
                buildFragment: function(t, e, n, r) {
                    for (var i, o, a, s, c, u, l = e.createDocumentFragment(), f = [], p = 0, h = t.length; p < h; p++)
                        if (i = t[p], i || 0 === i)
                            if ('object' === it.type(i)) it.merge(f, i.nodeType ? [i] : i);
                            else if (Mt.test(i)) {
                        for (o = o || l.appendChild(e.createElement('div')), a = (Rt.exec(i) || ['', ''])[1].toLowerCase(), s = Ut[a] || Ut._default, o.innerHTML = s[1] + i.replace(It, '<$1></$2>') + s[2], u = s[0]; u--;) o = o.lastChild;
                        it.merge(f, o.childNodes), o = l.firstChild, o.textContent = '';
                    } else f.push(e.createTextNode(i));
                    for (l.textContent = '', p = 0; i = f[p++];)
                        if ((!r || it.inArray(i, r) === -1) && (c = it.contains(i.ownerDocument, i), o = x(l.appendChild(i), 'script'), c && b(o), n))
                            for (u = 0; i = o[u++];) Bt.test(i.type || '') && n.push(i);
                    return l;
                },
                cleanData: function(t) {
                    for (var e, n, r, i, o = it.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                        if (it.acceptData(n) && (i = n[Ct.expando], i && (e = Ct.cache[i]))) {
                            if (e.events)
                                for (r in e.events) o[r] ? it.event.remove(n, r) : it.removeEvent(n, r, e.handle);
                            Ct.cache[i] && delete Ct.cache[i];
                        }
                        delete St.cache[n[St.expando]];
                    }
                }
            }), it.fn.extend({
                text: function(t) {
                    return xt(this, function(t) {
                        return void 0 === t ? it.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                        });
                    }, null, t, arguments.length);
                },
                append: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = m(this, t);
                            e.appendChild(t);
                        }
                    });
                },
                prepend: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = m(this, t);
                            e.insertBefore(t, e.firstChild);
                        }
                    });
                },
                before: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this);
                    });
                },
                after: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                remove: function(t, e) {
                    for (var n, r = t ? it.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || it.cleanData(x(n)), n.parentNode && (e && it.contains(n.ownerDocument, n) && b(x(n, 'script')), n.parentNode.removeChild(n));
                    return this;
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (it.cleanData(x(t, !1)), t.textContent = '');
                    return this;
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return it.clone(this, t, e);
                    });
                },
                html: function(t) {
                    return xt(this, function(t) {
                        var e = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ('string' == typeof t && !Lt.test(t) && !Ut[(Rt.exec(t) || ['', ''])[1].toLowerCase()]) {
                            t = t.replace(It, '<$1></$2>');
                            try {
                                for (; n < r; n++) e = this[n] || {}, 1 === e.nodeType && (it.cleanData(x(e, !1)), e.innerHTML = t);
                                e = 0;
                            } catch (t) {}
                        }
                        e && this.empty().append(t);
                    }, null, t, arguments.length);
                },
                replaceWith: function() {
                    var t = arguments[0];
                    return this.domManip(arguments, function(e) {
                        t = this.parentNode, it.cleanData(x(this)), t && t.replaceChild(e, this);
                    }), t && (t.length || t.nodeType) ? this : this.remove();
                },
                detach: function(t) {
                    return this.remove(t, !0);
                },
                domManip: function(t, e) {
                    t = Y.apply([], t);
                    var n, r, i, o, a, s, c = 0,
                        u = this.length,
                        l = this,
                        f = u - 1,
                        p = t[0],
                        h = it.isFunction(p);
                    if (h || u > 1 && 'string' == typeof p && !et.checkClone && $t.test(p)) return this.each(function(n) {
                        var r = l.eq(n);
                        h && (t[0] = p.call(this, n, r.html())), r.domManip(t, e);
                    });
                    if (u && (n = it.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (i = it.map(x(n, 'script'), v), o = i.length; c < u; c++) a = n, c !== f && (a = it.clone(a, !0, !0), o && it.merge(i, x(a, 'script'))), e.call(this[c], a, c);
                        if (o)
                            for (s = i[i.length - 1].ownerDocument, it.map(i, y), c = 0; c < o; c++) a = i[c], Bt.test(a.type || '') && !Ct.access(a, 'globalEval') && it.contains(s, a) && (a.src ? it._evalUrl && it._evalUrl(a.src) : it.globalEval(a.textContent.replace(qt, '')));
                    }
                    return this;
                }
            }), it.each({
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith'
            }, function(t, e) {
                it.fn[t] = function(t) {
                    for (var n, r = [], i = it(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), it(i[a])[e](n), K.apply(r, n.get());
                    return this.pushStack(r);
                };
            });
            var Wt, zt = {},
                Xt = /^margin/,
                Gt = new RegExp('^(' + Dt + ')(?!px)[a-z%]+$', 'i'),
                Vt = function(t) {
                    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null);
                };
            ! function() {
                function t() {
                    a.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', a.innerHTML = '', i.appendChild(o);
                    var t = n.getComputedStyle(a, null);
                    e = '1%' !== t.top, r = '4px' === t.width, i.removeChild(o);
                }
                var e, r, i = nt.documentElement,
                    o = nt.createElement('div'),
                    a = nt.createElement('div');
                a.style && (a.style.backgroundClip = 'content-box', a.cloneNode(!0).style.backgroundClip = '', et.clearCloneStyle = 'content-box' === a.style.backgroundClip, o.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', o.appendChild(a), n.getComputedStyle && it.extend(et, {
                    pixelPosition: function() {
                        return t(), e;
                    },
                    boxSizingReliable: function() {
                        return null == r && t(), r;
                    },
                    reliableMarginRight: function() {
                        var t, e = a.appendChild(nt.createElement('div'));
                        return e.style.cssText = a.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', e.style.marginRight = e.style.width = '0', a.style.width = '1px', i.appendChild(o), t = !parseFloat(n.getComputedStyle(e, null).marginRight), i.removeChild(o), a.removeChild(e), t;
                    }
                }));
            }(), it.swap = function(t, e, n, r) {
                var i, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                i = n.apply(t, r || []);
                for (o in e) t.style[o] = a[o];
                return i;
            };
            var Yt = /^(none|table(?!-c[ea]).+)/,
                Kt = new RegExp('^(' + Dt + ')(.*)$', 'i'),
                Jt = new RegExp('^([+-])=(' + Dt + ')', 'i'),
                Qt = {
                    position: 'absolute',
                    visibility: 'hidden',
                    display: 'block'
                },
                Zt = {
                    letterSpacing: '0',
                    fontWeight: '400'
                },
                te = ['Webkit', 'O', 'Moz', 'ms'];
            it.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = E(t, 'opacity');
                                return '' === n ? '1' : n;
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: 'cssFloat'
                },
                style: function(t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, o, a, s = it.camelCase(e),
                            c = t.style;
                        return e = it.cssProps[s] || (it.cssProps[s] = A(c, s)), a = it.cssHooks[e] || it.cssHooks[s], void 0 === n ? a && 'get' in a && void 0 !== (i = a.get(t, !1, r)) ? i : c[e] : (o = typeof n, 'string' === o && (i = Jt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(t, e)), o = 'number'), null != n && n === n && ('number' !== o || it.cssNumber[s] || (n += 'px'), et.clearCloneStyle || '' !== n || 0 !== e.indexOf('background') || (c[e] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(t, n, r)) || (c[e] = n)), void 0);
                    }
                },
                css: function(t, e, n, r) {
                    var i, o, a, s = it.camelCase(e);
                    return e = it.cssProps[s] || (it.cssProps[s] = A(t.style, s)), a = it.cssHooks[e] || it.cssHooks[s], a && 'get' in a && (i = a.get(t, !0, n)), void 0 === i && (i = E(t, e, r)), 'normal' === i && e in Zt && (i = Zt[e]), '' === n || n ? (o = parseFloat(i), n === !0 || it.isNumeric(o) ? o || 0 : i) : i;
                }
            }), it.each(['height', 'width'], function(t, e) {
                it.cssHooks[e] = {
                    get: function(t, n, r) {
                        if (n) return Yt.test(it.css(t, 'display')) && 0 === t.offsetWidth ? it.swap(t, Qt, function() {
                            return F(t, e, r);
                        }) : F(t, e, r);
                    },
                    set: function(t, n, r) {
                        var i = r && Vt(t);
                        return k(t, n, r ? N(t, e, r, 'border-box' === it.css(t, 'boxSizing', !1, i), i) : 0);
                    }
                };
            }), it.cssHooks.marginRight = D(et.reliableMarginRight, function(t, e) {
                if (e) return it.swap(t, {
                    display: 'inline-block'
                }, E, [t, 'marginRight']);
            }), it.each({
                margin: '',
                padding: '',
                border: 'Width'
            }, function(t, e) {
                it.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++) i[t + At[r] + e] = o[r] || o[r - 2] || o[0];
                        return i;
                    }
                }, Xt.test(t) || (it.cssHooks[t + e].set = k);
            }), it.fn.extend({
                css: function(t, e) {
                    return xt(this, function(t, e, n) {
                        var r, i, o = {},
                            a = 0;
                        if (it.isArray(e)) {
                            for (r = Vt(t), i = e.length; a < i; a++) o[e[a]] = it.css(t, e[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? it.style(t, e, n) : it.css(t, e);
                    }, t, e, arguments.length > 1);
                },
                show: function() {
                    return O(this, !0);
                },
                hide: function() {
                    return O(this);
                },
                toggle: function(t) {
                    return 'boolean' == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        kt(this) ? it(this).show() : it(this).hide();
                    });
                }
            }), it.Tween = j, j.prototype = {
                constructor: j,
                init: function(t, e, n, r, i, o) {
                    this.elem = t, this.prop = n, this.easing = i || 'swing', this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? '' : 'px');
                },
                cur: function() {
                    var t = j.propHooks[this.prop];
                    return t && t.get ? t.get(this) : j.propHooks._default.get(this);
                },
                run: function(t) {
                    var e, n = j.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = it.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this;
                }
            }, j.prototype.init.prototype = j.prototype, j.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = it.css(t.elem, t.prop, ''), e && 'auto' !== e ? e : 0) : t.elem[t.prop];
                    },
                    set: function(t) {
                        it.fx.step[t.prop] ? it.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[it.cssProps[t.prop]] || it.cssHooks[t.prop]) ? it.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
                    }
                }
            }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                }
            }, it.easing = {
                linear: function(t) {
                    return t;
                },
                swing: function(t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                }
            }, it.fx = j.prototype.init, it.fx.step = {};
            var ee, ne, re = /^(?:toggle|show|hide)$/,
                ie = new RegExp('^(?:([+-])=|)(' + Dt + ')([a-z%]*)$', 'i'),
                oe = /queueHooks$/,
                ae = [M],
                se = {
                    '*': [function(t, e) {
                        var n = this.createTween(t, e),
                            r = n.cur(),
                            i = ie.exec(e),
                            o = i && i[3] || (it.cssNumber[t] ? '' : 'px'),
                            a = (it.cssNumber[t] || 'px' !== o && +r) && ie.exec(it.css(n.elem, t)),
                            s = 1,
                            c = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do s = s || '.5', a /= s, it.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --c);
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
                    }]
                };
            it.Animation = it.extend($, {
                    tweener: function(t, e) {
                        it.isFunction(t) ? (e = t, t = ['*']) : t = t.split(' ');
                        for (var n, r = 0, i = t.length; r < i; r++) n = t[r], se[n] = se[n] || [], se[n].unshift(e);
                    },
                    prefilter: function(t, e) {
                        e ? ae.unshift(t) : ae.push(t);
                    }
                }), it.speed = function(t, e, n) {
                    var r = t && 'object' == typeof t ? it.extend({}, t) : {
                        complete: n || !n && e || it.isFunction(t) && t,
                        duration: t,
                        easing: n && e || e && !it.isFunction(e) && e
                    };
                    return r.duration = it.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = 'fx'), r.old = r.complete, r.complete = function() {
                        it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue);
                    }, r;
                }, it.fn.extend({
                    fadeTo: function(t, e, n, r) {
                        return this.filter(kt).css('opacity', 0).show().end().animate({
                            opacity: e
                        }, t, n, r);
                    },
                    animate: function(t, e, n, r) {
                        var i = it.isEmptyObject(t),
                            o = it.speed(e, n, r),
                            a = function() {
                                var e = $(this, it.extend({}, t), o);
                                (i || Ct.get(this, 'finish')) && e.stop(!0);
                            };
                        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
                    },
                    stop: function(t, e, n) {
                        var r = function(t) {
                            var e = t.stop;
                            delete t.stop, e(n);
                        };
                        return 'string' != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || 'fx', []), this.each(function() {
                            var e = !0,
                                i = null != t && t + 'queueHooks',
                                o = it.timers,
                                a = Ct.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && oe.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                            !e && n || it.dequeue(this, t);
                        });
                    },
                    finish: function(t) {
                        return t !== !1 && (t = t || 'fx'), this.each(function() {
                            var e, n = Ct.get(this),
                                r = n[t + 'queue'],
                                i = n[t + 'queueHooks'],
                                o = it.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, it.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                            for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                            delete n.finish;
                        });
                    }
                }), it.each(['toggle', 'show', 'hide'], function(t, e) {
                    var n = it.fn[e];
                    it.fn[e] = function(t, r, i) {
                        return null == t || 'boolean' == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, r, i);
                    };
                }), it.each({
                    slideDown: I('show'),
                    slideUp: I('hide'),
                    slideToggle: I('toggle'),
                    fadeIn: {
                        opacity: 'show'
                    },
                    fadeOut: {
                        opacity: 'hide'
                    },
                    fadeToggle: {
                        opacity: 'toggle'
                    }
                }, function(t, e) {
                    it.fn[t] = function(t, n, r) {
                        return this.animate(e, t, n, r);
                    };
                }), it.timers = [], it.fx.tick = function() {
                    var t, e = 0,
                        n = it.timers;
                    for (ee = it.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                    n.length || it.fx.stop(), ee = void 0;
                }, it.fx.timer = function(t) {
                    it.timers.push(t), t() ? it.fx.start() : it.timers.pop();
                }, it.fx.interval = 13, it.fx.start = function() {
                    ne || (ne = setInterval(it.fx.tick, it.fx.interval));
                }, it.fx.stop = function() {
                    clearInterval(ne), ne = null;
                }, it.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, it.fn.delay = function(t, e) {
                    return t = it.fx ? it.fx.speeds[t] || t : t, e = e || 'fx', this.queue(e, function(e, n) {
                        var r = setTimeout(e, t);
                        n.stop = function() {
                            clearTimeout(r);
                        };
                    });
                },
                function() {
                    var t = nt.createElement('input'),
                        e = nt.createElement('select'),
                        n = e.appendChild(nt.createElement('option'));
                    t.type = 'checkbox', et.checkOn = '' !== t.value, et.optSelected = n.selected, e.disabled = !0, et.optDisabled = !n.disabled, t = nt.createElement('input'), t.value = 't', t.type = 'radio', et.radioValue = 't' === t.value;
                }();
            var ce, ue, le = it.expr.attrHandle;
            it.fn.extend({
                attr: function(t, e) {
                    return xt(this, it.attr, t, e, arguments.length > 1);
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        it.removeAttr(this, t);
                    });
                }
            }), it.extend({
                attr: function(t, e, n) {
                    var r, i, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Nt ? it.prop(t, e, n) : (1 === o && it.isXMLDoc(t) || (e = e.toLowerCase(), r = it.attrHooks[e] || (it.expr.match.bool.test(e) ? ue : ce)), void 0 === n ? r && 'get' in r && null !== (i = r.get(t, e)) ? i : (i = it.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && 'set' in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ''), n) : void it.removeAttr(t, e));
                },
                removeAttr: function(t, e) {
                    var n, r, i = 0,
                        o = e && e.match(yt);
                    if (o && 1 === t.nodeType)
                        for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n);
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!et.radioValue && 'radio' === e && it.nodeName(t, 'input')) {
                                var n = t.value;
                                return t.setAttribute('type', e), n && (t.value = n), e;
                            }
                        }
                    }
                }
            }), ue = {
                set: function(t, e, n) {
                    return e === !1 ? it.removeAttr(t, n) : t.setAttribute(n, n), n;
                }
            }, it.each(it.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = le[e] || it.find.attr;
                le[e] = function(t, e, r) {
                    var i, o;
                    return r || (o = le[e], le[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, le[e] = o), i;
                };
            });
            var fe = /^(?:input|select|textarea|button)$/i;
            it.fn.extend({
                prop: function(t, e) {
                    return xt(this, it.prop, t, e, arguments.length > 1);
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[it.propFix[t] || t];
                    });
                }
            }), it.extend({
                propFix: {
                    for: 'htmlFor',
                    class: 'className'
                },
                prop: function(t, e, n) {
                    var r, i, o, a = t.nodeType;
                    if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !it.isXMLDoc(t), o && (e = it.propFix[e] || e, i = it.propHooks[e]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && 'get' in i && null !== (r = i.get(t, e)) ? r : t[e];
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            return t.hasAttribute('tabindex') || fe.test(t.nodeName) || t.href ? t.tabIndex : -1;
                        }
                    }
                }
            }), et.optSelected || (it.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                }
            }), it.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function() {
                it.propFix[this.toLowerCase()] = this;
            });
            var pe = /[\t\r\n\f]/g;
            it.fn.extend({
                addClass: function(t) {
                    var e, n, r, i, o, a, s = 'string' == typeof t && t,
                        c = 0,
                        u = this.length;
                    if (it.isFunction(t)) return this.each(function(e) {
                        it(this).addClass(t.call(this, e, this.className));
                    });
                    if (s)
                        for (e = (t || '').match(yt) || []; c < u; c++)
                            if (n = this[c], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(pe, ' ') : ' ')) {
                                for (o = 0; i = e[o++];) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
                                a = it.trim(r), n.className !== a && (n.className = a);
                            }
                    return this;
                },
                removeClass: function(t) {
                    var e, n, r, i, o, a, s = 0 === arguments.length || 'string' == typeof t && t,
                        c = 0,
                        u = this.length;
                    if (it.isFunction(t)) return this.each(function(e) {
                        it(this).removeClass(t.call(this, e, this.className));
                    });
                    if (s)
                        for (e = (t || '').match(yt) || []; c < u; c++)
                            if (n = this[c], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(pe, ' ') : '')) {
                                for (o = 0; i = e[o++];)
                                    for (; r.indexOf(' ' + i + ' ') >= 0;) r = r.replace(' ' + i + ' ', ' ');
                                a = t ? it.trim(r) : '', n.className !== a && (n.className = a);
                            }
                    return this;
                },
                toggleClass: function(t, e) {
                    var n = typeof t;
                    return 'boolean' == typeof e && 'string' === n ? e ? this.addClass(t) : this.removeClass(t) : it.isFunction(t) ? this.each(function(n) {
                        it(this).toggleClass(t.call(this, n, this.className, e), e);
                    }) : this.each(function() {
                        if ('string' === n)
                            for (var e, r = 0, i = it(this), o = t.match(yt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                        else n !== Nt && 'boolean' !== n || (this.className && Ct.set(this, '__className__', this.className), this.className = this.className || t === !1 ? '' : Ct.get(this, '__className__') || '');
                    });
                },
                hasClass: function(t) {
                    for (var e = ' ' + t + ' ', n = 0, r = this.length; n < r; n++)
                        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(pe, ' ').indexOf(e) >= 0) return !0;
                    return !1;
                }
            });
            var he = /\r/g;
            it.fn.extend({
                val: function(t) {
                    var e, n, r, i = this[0]; {
                        if (arguments.length) return r = it.isFunction(t), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? t.call(this, n, it(this).val()) : t, null == i ? i = '' : 'number' == typeof i ? i += '' : it.isArray(i) && (i = it.map(i, function(t) {
                                return null == t ? '' : t + '';
                            })), e = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], e && 'set' in e && void 0 !== e.set(this, i, 'value') || (this.value = i));
                        });
                        if (i) return e = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], e && 'get' in e && void 0 !== (n = e.get(i, 'value')) ? n : (n = i.value, 'string' == typeof n ? n.replace(he, '') : null == n ? '' : n);
                    }
                }
            }), it.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = it.find.attr(t, 'value');
                            return null != e ? e : it.trim(it.text(t));
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, r = t.options, i = t.selectedIndex, o = 'select-one' === t.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, c = i < 0 ? s : o ? i : 0; c < s; c++)
                                if (n = r[c], (n.selected || c === i) && (et.optDisabled ? !n.disabled : null === n.getAttribute('disabled')) && (!n.parentNode.disabled || !it.nodeName(n.parentNode, 'optgroup'))) {
                                    if (e = it(n).val(), o) return e;
                                    a.push(e);
                                }
                            return a;
                        },
                        set: function(t, e) {
                            for (var n, r, i = t.options, o = it.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = it.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (t.selectedIndex = -1), o;
                        }
                    }
                }
            }), it.each(['radio', 'checkbox'], function() {
                it.valHooks[this] = {
                    set: function(t, e) {
                        if (it.isArray(e)) return t.checked = it.inArray(it(t).val(), e) >= 0;
                    }
                }, et.checkOn || (it.valHooks[this].get = function(t) {
                    return null === t.getAttribute('value') ? 'on' : t.value;
                });
            }), it.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function(t, e) {
                it.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
                };
            }), it.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t);
                },
                bind: function(t, e, n) {
                    return this.on(t, null, e, n);
                },
                unbind: function(t, e) {
                    return this.off(t, null, e);
                },
                delegate: function(t, e, n, r) {
                    return this.on(e, t, n, r);
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, '**') : this.off(e, t || '**', n);
                }
            });
            var de = it.now(),
                ge = /\?/;
            it.parseJSON = function(t) {
                return JSON.parse(t + '');
            }, it.parseXML = function(t) {
                var e, n;
                if (!t || 'string' != typeof t) return null;
                try {
                    n = new DOMParser(), e = n.parseFromString(t, 'text/xml');
                } catch (t) {
                    e = void 0;
                }
                return e && !e.getElementsByTagName('parsererror').length || it.error('Invalid XML: ' + t), e;
            };
            var me = /#.*$/,
                ve = /([?&])_=[^&]*/,
                ye = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                we = /^(?:GET|HEAD)$/,
                xe = /^\/\//,
                Ce = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Se = {},
                Te = {},
                Ee = '*/'.concat('*'),
                De = n.location.href,
                Ae = Ce.exec(De.toLowerCase()) || [];
            it.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: De,
                    type: 'GET',
                    isLocal: be.test(Ae[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    accepts: {
                        '*': Ee,
                        text: 'text/plain',
                        html: 'text/html',
                        xml: 'application/xml, text/xml',
                        json: 'application/json, text/javascript'
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: 'responseXML',
                        text: 'responseText',
                        json: 'responseJSON'
                    },
                    converters: {
                        '* text': String,
                        'text html': !0,
                        'text json': it.parseJSON,
                        'text xml': it.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? q(q(t, it.ajaxSettings), e) : q(it.ajaxSettings, t);
                },
                ajaxPrefilter: B(Se),
                ajaxTransport: B(Te),
                ajax: function(t, e) {
                    function n(t, e, n, a) {
                        var c, l, v, y, w, C = e;
                        2 !== b && (b = 2, s && clearTimeout(s), r = void 0, o = a || '', x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (y = U(f, x, n)), y = W(f, y, x, c), c ? (f.ifModified && (w = x.getResponseHeader('Last-Modified'), w && (it.lastModified[i] = w), w = x.getResponseHeader('etag'), w && (it.etag[i] = w)), 204 === t || 'HEAD' === f.type ? C = 'nocontent' : 304 === t ? C = 'notmodified' : (C = y.state, l = y.data, v = y.error, c = !v)) : (v = C, !t && C || (C = 'error', t < 0 && (t = 0))), x.status = t, x.statusText = (e || C) + '', c ? d.resolveWith(p, [l, C, x]) : d.rejectWith(p, [x, C, v]), x.statusCode(m), m = void 0, u && h.trigger(c ? 'ajaxSuccess' : 'ajaxError', [x, f, c ? l : v]), g.fireWith(p, [x, C]), u && (h.trigger('ajaxComplete', [x, f]), --it.active || it.event.trigger('ajaxStop')));
                    }
                    'object' == typeof t && (e = t, t = void 0), e = e || {};
                    var r, i, o, a, s, c, u, l, f = it.ajaxSetup({}, e),
                        p = f.context || f,
                        h = f.context && (p.nodeType || p.jquery) ? it(p) : it.event,
                        d = it.Deferred(),
                        g = it.Callbacks('once memory'),
                        m = f.statusCode || {},
                        v = {},
                        y = {},
                        b = 0,
                        w = 'canceled',
                        x = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === b) {
                                    if (!a)
                                        for (a = {}; e = ye.exec(o);) a[e[1].toLowerCase()] = e[2];
                                    e = a[t.toLowerCase()];
                                }
                                return null == e ? null : e;
                            },
                            getAllResponseHeaders: function() {
                                return 2 === b ? o : null;
                            },
                            setRequestHeader: function(t, e) {
                                var n = t.toLowerCase();
                                return b || (t = y[n] = y[n] || t, v[t] = e), this;
                            },
                            overrideMimeType: function(t) {
                                return b || (f.mimeType = t), this;
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (b < 2)
                                        for (e in t) m[e] = [m[e], t[e]];
                                    else x.always(t[x.status]);
                                return this;
                            },
                            abort: function(t) {
                                var e = t || w;
                                return r && r.abort(e), n(0, e), this;
                            }
                        };
                    if (d.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || De) + '').replace(me, '').replace(xe, Ae[1] + '//'), f.type = e.method || e.type || f.method || f.type, f.dataTypes = it.trim(f.dataType || '*').toLowerCase().match(yt) || [''], null == f.crossDomain && (c = Ce.exec(f.url.toLowerCase()), f.crossDomain = !(!c || c[1] === Ae[1] && c[2] === Ae[2] && (c[3] || ('http:' === c[1] ? '80' : '443')) === (Ae[3] || ('http:' === Ae[1] ? '80' : '443')))), f.data && f.processData && 'string' != typeof f.data && (f.data = it.param(f.data, f.traditional)), H(Se, f, e, x), 2 === b) return x;
                    u = it.event && f.global, u && 0 === it.active++ && it.event.trigger('ajaxStart'), f.type = f.type.toUpperCase(), f.hasContent = !we.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ge.test(i) ? '&' : '?') + f.data, delete f.data), f.cache === !1 && (f.url = ve.test(i) ? i.replace(ve, '$1_=' + de++) : i + (ge.test(i) ? '&' : '?') + '_=' + de++)), f.ifModified && (it.lastModified[i] && x.setRequestHeader('If-Modified-Since', it.lastModified[i]), it.etag[i] && x.setRequestHeader('If-None-Match', it.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && x.setRequestHeader('Content-Type', f.contentType), x.setRequestHeader('Accept', f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ('*' !== f.dataTypes[0] ? ', ' + Ee + '; q=0.01' : '') : f.accepts['*']);
                    for (l in f.headers) x.setRequestHeader(l, f.headers[l]);
                    if (f.beforeSend && (f.beforeSend.call(p, x, f) === !1 || 2 === b)) return x.abort();
                    w = 'abort';
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[l](f[l]);
                    if (r = H(Te, f, e, x)) {
                        x.readyState = 1, u && h.trigger('ajaxSend', [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                            x.abort('timeout');
                        }, f.timeout));
                        try {
                            b = 1, r.send(v, n);
                        } catch (t) {
                            if (!(b < 2)) throw t;
                            n(-1, t);
                        }
                    } else n(-1, 'No Transport');
                    return x;
                },
                getJSON: function(t, e, n) {
                    return it.get(t, e, n, 'json');
                },
                getScript: function(t, e) {
                    return it.get(t, void 0, e, 'script');
                }
            }), it.each(['get', 'post'], function(t, e) {
                it[e] = function(t, n, r, i) {
                    return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                        url: t,
                        type: e,
                        dataType: i,
                        data: n,
                        success: r
                    });
                };
            }), it._evalUrl = function(t) {
                return it.ajax({
                    url: t,
                    type: 'GET',
                    dataType: 'script',
                    async: !1,
                    global: !1,
                    throws: !0
                });
            }, it.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return it.isFunction(t) ? this.each(function(e) {
                        it(this).wrapAll(t.call(this, e));
                    }) : (this[0] && (e = it(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t;
                    }).append(this)), this);
                },
                wrapInner: function(t) {
                    return it.isFunction(t) ? this.each(function(e) {
                        it(this).wrapInner(t.call(this, e));
                    }) : this.each(function() {
                        var e = it(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t);
                    });
                },
                wrap: function(t) {
                    var e = it.isFunction(t);
                    return this.each(function(n) {
                        it(this).wrapAll(e ? t.call(this, n) : t);
                    });
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        it.nodeName(this, 'body') || it(this).replaceWith(this.childNodes);
                    }).end();
                }
            }), it.expr.filters.hidden = function(t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0;
            }, it.expr.filters.visible = function(t) {
                return !it.expr.filters.hidden(t);
            };
            var ke = /%20/g,
                _e = /\[\]$/,
                Ne = /\r?\n/g,
                Fe = /^(?:submit|button|image|reset|file)$/i,
                Oe = /^(?:input|select|textarea|keygen)/i;
            it.param = function(t, e) {
                var n, r = [],
                    i = function(t, e) {
                        e = it.isFunction(e) ? e() : null == e ? '' : e, r[r.length] = encodeURIComponent(t) + '=' + encodeURIComponent(e);
                    };
                if (void 0 === e && (e = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(t) || t.jquery && !it.isPlainObject(t)) it.each(t, function() {
                    i(this.name, this.value);
                });
                else
                    for (n in t) z(n, t[n], e, i);
                return r.join('&').replace(ke, '+');
            }, it.fn.extend({
                serialize: function() {
                    return it.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = it.prop(this, 'elements');
                        return t ? it.makeArray(t) : this;
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !it(this).is(':disabled') && Oe.test(this.nodeName) && !Fe.test(t) && (this.checked || !_t.test(t));
                    }).map(function(t, e) {
                        var n = it(this).val();
                        return null == n ? null : it.isArray(n) ? it.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Ne, '\r\n')
                            };
                        }) : {
                            name: e.name,
                            value: n.replace(Ne, '\r\n')
                        };
                    }).get();
                }
            }), it.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest();
                } catch (t) {}
            };
            var je = 0,
                Pe = {},
                Ie = {
                    0: 200,
                    1223: 204
                },
                Re = it.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent('onunload', function() {
                for (var t in Pe) Pe[t]();
            }), et.cors = !!Re && 'withCredentials' in Re, et.ajax = Re = !!Re, it.ajaxTransport(function(t) {
                var e;
                if (et.cors || Re && !t.crossDomain) return {
                    send: function(n, r) {
                        var i, o = t.xhr(),
                            a = ++je;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (i in t.xhrFields) o[i] = t.xhrFields[i];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest');
                        for (i in n) o.setRequestHeader(i, n[i]);
                        e = function(t) {
                            return function() {
                                e && (delete Pe[a], e = o.onload = o.onerror = null, 'abort' === t ? o.abort() : 'error' === t ? r(o.status, o.statusText) : r(Ie[o.status] || o.status, o.statusText, 'string' == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()));
                            };
                        }, o.onload = e(), o.onerror = e('error'), e = Pe[a] = e('abort');
                        try {
                            o.send(t.hasContent && t.data || null);
                        } catch (t) {
                            if (e) throw t;
                        }
                    },
                    abort: function() {
                        e && e();
                    }
                };
            }), it.ajaxSetup({
                accepts: {
                    script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    'text script': function(t) {
                        return it.globalEval(t), t;
                    }
                }
            }), it.ajaxPrefilter('script', function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET');
            }), it.ajaxTransport('script', function(t) {
                if (t.crossDomain) {
                    var e, n;
                    return {
                        send: function(_, r) {
                            e = it('<script>').prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on('load error', n = function(t) {
                                e.remove(), n = null, t && r('error' === t.type ? 404 : 200, t.type);
                            }), nt.head.appendChild(e[0]);
                        },
                        abort: function() {
                            n && n();
                        }
                    };
                }
            });
            var Me = [],
                Le = /(=)\?(?=&|$)|\?\?/;
            it.ajaxSetup({
                jsonp: 'callback',
                jsonpCallback: function() {
                    var t = Me.pop() || it.expando + '_' + de++;
                    return this[t] = !0, t;
                }
            }), it.ajaxPrefilter('json jsonp', function(t, e, r) {
                var i, o, a, s = t.jsonp !== !1 && (Le.test(t.url) ? 'url' : 'string' == typeof t.data && !(t.contentType || '').indexOf('application/x-www-form-urlencoded') && Le.test(t.data) && 'data');
                if (s || 'jsonp' === t.dataTypes[0]) return i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Le, '$1' + i) : t.jsonp !== !1 && (t.url += (ge.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function() {
                    return a || it.error(i + ' was not called'), a[0];
                }, t.dataTypes[0] = 'json', o = n[i], n[i] = function() {
                    a = arguments;
                }, r.always(function() {
                    n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Me.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0;
                }), 'script';
            }), it.parseHTML = function(t, e, n) {
                if (!t || 'string' != typeof t) return null;
                'boolean' == typeof e && (n = e, e = !1), e = e || nt;
                var r = ft.exec(t),
                    i = !n && [];
                return r ? [e.createElement(r[1])] : (r = it.buildFragment([t], e, i), i && i.length && it(i).remove(), it.merge([], r.childNodes));
            };
            var $e = it.fn.load;
            it.fn.load = function(t, e, n) {
                if ('string' != typeof t && $e) return $e.apply(this, arguments);
                var r, i, o, a = this,
                    s = t.indexOf(' ');
                return s >= 0 && (r = it.trim(t.slice(s)), t = t.slice(0, s)), it.isFunction(e) ? (n = e, e = void 0) : e && 'object' == typeof e && (i = 'POST'), a.length > 0 && it.ajax({
                    url: t,
                    type: i,
                    dataType: 'html',
                    data: e
                }).done(function(t) {
                    o = arguments, a.html(r ? it('<div>').append(it.parseHTML(t)).find(r) : t);
                }).complete(n && function(t, e) {
                    a.each(n, o || [t.responseText, e, t]);
                }), this;
            }, it.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(t, e) {
                it.fn[e] = function(t) {
                    return this.on(e, t);
                };
            }), it.expr.filters.animated = function(t) {
                return it.grep(it.timers, function(e) {
                    return t === e.elem;
                }).length;
            };
            var Be = n.document.documentElement;
            it.offset = {
                setOffset: function(t, e, n) {
                    var r, i, o, a, s, c, u, l = it.css(t, 'position'),
                        f = it(t),
                        p = {};
                    'static' === l && (t.style.position = 'relative'), s = f.offset(), o = it.css(t, 'top'), c = it.css(t, 'left'), u = ('absolute' === l || 'fixed' === l) && (o + c).indexOf('auto') > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(c) || 0), it.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), 'using' in e ? e.using.call(t, p) : f.css(p);
                }
            }, it.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        it.offset.setOffset(this, t, e);
                    });
                    var e, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = r && r.ownerDocument;
                    if (o) return e = o.documentElement, it.contains(e, r) ? (typeof r.getBoundingClientRect !== Nt && (i = r.getBoundingClientRect()), n = X(o), {
                        top: i.top + n.pageYOffset - e.clientTop,
                        left: i.left + n.pageXOffset - e.clientLeft
                    }) : i;
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return 'fixed' === it.css(n, 'position') ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), it.nodeName(t[0], 'html') || (r = t.offset()), r.top += it.css(t[0], 'borderTopWidth', !0), r.left += it.css(t[0], 'borderLeftWidth', !0)), {
                            top: e.top - r.top - it.css(n, 'marginTop', !0),
                            left: e.left - r.left - it.css(n, 'marginLeft', !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || Be; t && !it.nodeName(t, 'html') && 'static' === it.css(t, 'position');) t = t.offsetParent;
                        return t || Be;
                    });
                }
            }), it.each({
                scrollLeft: 'pageXOffset',
                scrollTop: 'pageYOffset'
            }, function(t, e) {
                var r = 'pageYOffset' === e;
                it.fn[t] = function(i) {
                    return xt(this, function(t, i, o) {
                        var a = X(t);
                        return void 0 === o ? a ? a[e] : t[i] : void(a ? a.scrollTo(r ? n.pageXOffset : o, r ? o : n.pageYOffset) : t[i] = o);
                    }, t, i, arguments.length, null);
                };
            }), it.each(['top', 'left'], function(t, e) {
                it.cssHooks[e] = D(et.pixelPosition, function(t, n) {
                    if (n) return n = E(t, e), Gt.test(n) ? it(t).position()[e] + 'px' : n;
                });
            }), it.each({
                Height: 'height',
                Width: 'width'
            }, function(t, e) {
                it.each({
                    padding: 'inner' + t,
                    content: e,
                    '': 'outer' + t
                }, function(n, r) {
                    it.fn[r] = function(r, i) {
                        var o = arguments.length && (n || 'boolean' != typeof r),
                            a = n || (r === !0 || i === !0 ? 'margin' : 'border');
                        return xt(this, function(e, n, r) {
                            var i;
                            return it.isWindow(e) ? e.document.documentElement['client' + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body['scroll' + t], i['scroll' + t], e.body['offset' + t], i['offset' + t], i['client' + t])) : void 0 === r ? it.css(e, n, a) : it.style(e, n, r, a);
                        }, e, o ? r : void 0, o, null);
                    };
                });
            }), it.fn.size = function() {
                return this.length;
            }, it.fn.andSelf = it.fn.addBack, r = [], i = function() {
                return it;
            }.apply(e, r), !(void 0 !== i && (t.exports = i));
            var He = n.jQuery,
                qe = n.$;
            return it.noConflict = function(t) {
                return n.$ === it && (n.$ = qe), t && n.jQuery === it && (n.jQuery = He), it;
            }, typeof o === Nt && (n.jQuery = n.$ = it), it;
        });
    },
    2: function(t, e, n) {
        var r = n(42);
        r.Template = n(43).Template, r.template = r.Template, t.exports = r;
    },
    5: function(t, e, n) {
        var r, i;
        r = [n(21), n(25), n(22), n(11), n(18), n(12), n(7)], i = function(t, e, n, r, i, o, a) {
            'use strict';
            return {
                advice: t,
                component: e,
                compose: n,
                debug: r,
                logger: i,
                registry: o,
                utils: a
            };
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
    },
    7: function(t, e, n) {
        var r, i;
        (function(o) {
            r = [n(11)], i = function(t) {
                'use strict';

                function e() {
                    var e = t.enabled && !Object.propertyIsEnumerable('getOwnPropertyDescriptor');
                    if (e) try {
                        Object.getOwnPropertyDescriptor(Object, 'keys');
                    } catch (t) {
                        return !1;
                    }
                    return e;
                }
                var n = 100,
                    r = {
                        isDomObj: function(t) {
                            return !(!t.nodeType && t !== window);
                        },
                        toArray: function(t, e) {
                            e = e || 0;
                            for (var n = t.length, r = new Array(n - e), i = e; i < n; i++) r[i - e] = t[i];
                            return r;
                        },
                        merge: function() {
                            var t = arguments.length,
                                e = new Array(t + 1);
                            if (0 === t) return {};
                            for (var n = 0; n < t; n++) e[n + 1] = arguments[n];
                            return e[0] = {}, e[e.length - 1] === !0 && (e.pop(), e.unshift(!0)), o.extend.apply(void 0, e);
                        },
                        push: function(t, e, n) {
                            return t && Object.keys(e || {}).forEach(function(r) {
                                if (t[r] && n) throw new Error('utils.push attempted to overwrite "' + r + '" while running in protected mode');
                                'object' == typeof t[r] && 'object' == typeof e[r] ? this.push(t[r], e[r]) : t[r] = e[r];
                            }, this), t;
                        },
                        getEnumerableProperty: function(t, e) {
                            return t.propertyIsEnumerable(e) ? t[e] : void 0;
                        },
                        compose: function() {
                            var t = arguments;
                            return function() {
                                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                                return e[0];
                            };
                        },
                        uniqueArray: function(t) {
                            for (var e = {}, n = [], r = 0, i = t.length; r < i; ++r) e.hasOwnProperty(t[r]) || (n.push(t[r]), e[t[r]] = 1);
                            return n;
                        },
                        debounce: function(t, e, r) {
                            'number' != typeof e && (e = n);
                            var i, o;
                            return function() {
                                var n = this,
                                    a = arguments,
                                    s = function() {
                                        i = null, r || (o = t.apply(n, a));
                                    },
                                    c = r && !i;
                                return i && clearTimeout(i), i = setTimeout(s, e), c && (o = t.apply(n, a)), o;
                            };
                        },
                        throttle: function(t, e) {
                            'number' != typeof e && (e = n);
                            var r, i, o, a, s, c, u = this.debounce(function() {
                                s = a = !1;
                            }, e);
                            return function() {
                                r = this, i = arguments;
                                var n = function() {
                                    o = null, s && (c = t.apply(r, i)), u();
                                };
                                return o || (o = setTimeout(n, e)), a ? s = !0 : (a = !0, c = t.apply(r, i)), u(), c;
                            };
                        },
                        countThen: function(t, e) {
                            return function() {
                                if (!--t) return e.apply(this, arguments);
                            };
                        },
                        delegate: function(t) {
                            return function(e, n) {
                                var r, i = o(e.target);
                                Object.keys(t).forEach(function(o) {
                                    if (!e.isPropagationStopped() && (r = i.closest(o)).length) return n = n || {}, e.currentTarget = n.el = r[0], t[o].apply(this, [e, n]);
                                }, this);
                            };
                        },
                        once: function(t) {
                            var e, n;
                            return function() {
                                return e ? n : (e = !0, n = t.apply(this, arguments));
                            };
                        },
                        propertyWritability: function(t, n, r) {
                            e() && t.hasOwnProperty(n) && Object.defineProperty(t, n, {
                                writable: r
                            });
                        },
                        mutateProperty: function(t, n, r) {
                            var i;
                            return e() && t.hasOwnProperty(n) ? (i = Object.getOwnPropertyDescriptor(t, n).writable, Object.defineProperty(t, n, {
                                writable: !0
                            }), r.call(t), void Object.defineProperty(t, n, {
                                writable: i
                            })) : void r.call(t);
                        }
                    };
                return r;
            }.apply(e, r), !(void 0 !== i && (t.exports = i));
        }.call(e, n(1)));
    },
    8: function(t, e) {
        function n(t, e) {
            return e && (t = Object.keys(e).reduce(function(t, n) {
                var r = String(e[n]).replace(/\$/g, '$$$$');
                return t.replace(new RegExp('\\%\\{' + n + '\\}', 'gi'), r);
            }, t)), t;
        }
        t.exports = n;
    },
    11: function(t, e, n) {
        var r, i;
        r = [n(12)], i = function(t) {
            'use strict';

            function e(t, n, r) {
                r = r || {};
                var i = r.obj || window,
                    o = r.path || (i == window ? 'window' : ''),
                    a = Object.keys(i);
                a.forEach(function(r) {
                    (g[t] || t)(n, i, r) && console.log([o, '.', r].join(''), '->', ['(', typeof i[r], ')'].join(''), i[r]), '[object Object]' == Object.prototype.toString.call(i[r]) && i[r] != i && o.split('.').indexOf(r) == -1 && e(t, n, {
                        obj: i[r],
                        path: [o, r].join('.')
                    });
                });
            }

            function n(t, n, r, i) {
                n && typeof r != n ? console.error([r, 'must be', n].join(' ')) : e(t, r, i);
            }

            function r(t, e) {
                n('name', 'string', t, e);
            }

            function i(t, e) {
                n('nameContains', 'string', t, e);
            }

            function o(t, e) {
                n('type', 'function', t, e);
            }

            function a(t, e) {
                n('value', null, t, e);
            }

            function s(t, e) {
                n('valueCoerced', null, t, e);
            }

            function c(t, n) {
                e(t, null, n);
            }

            function u() {
                var t = [].slice.call(arguments);
                v.eventNames.length || (v.eventNames = m), v.actions = t.length ? t : m, h();
            }

            function l() {
                var t = [].slice.call(arguments);
                v.actions.length || (v.actions = m), v.eventNames = t.length ? t : m, h();
            }

            function f() {
                v.actions = [], v.eventNames = [], h();
            }

            function p() {
                v.actions = m, v.eventNames = m, h();
            }

            function h() {
                try {
                    window.localStorage && (localStorage.setItem('logFilter_eventNames', v.eventNames), localStorage.setItem('logFilter_actions', v.actions));
                } catch (t) {}
            }

            function d() {
                var t, e;
                try {
                    t = window.localStorage && localStorage.getItem('logFilter_eventNames'), e = window.localStorage && localStorage.getItem('logFilter_actions');
                } catch (t) {
                    return;
                }
                t && (v.eventNames = t), e && (v.actions = e), Object.keys(v).forEach(function(t) {
                    var e = v[t];
                    'string' == typeof e && e !== m && (v[t] = e ? e.split(',') : []);
                });
            }
            var g = {
                    name: function(t, e, n) {
                        return t == n;
                    },
                    nameContains: function(t, e, n) {
                        return n.indexOf(t) > -1;
                    },
                    type: function(t, e, n) {
                        return e[n] instanceof t;
                    },
                    value: function(t, e, n) {
                        return e[n] === t;
                    },
                    valueCoerced: function(t, e, n) {
                        return e[n] == t;
                    }
                },
                m = 'all',
                v = {
                    eventNames: [],
                    actions: []
                };
            return {
                enable: function(t) {
                    this.enabled = !!t, t && window.console && (console.info('Booting in DEBUG mode'), console.info('You can configure event logging with DEBUG.events.logAll()/logNone()/logByName()/logByAction()')), d(), window.DEBUG = this;
                },
                warn: function(t) {
                    if (window.console) {
                        var e = console.warn || console.log;
                        e.call(console, this.toString() + ': ' + t);
                    }
                },
                registry: t,
                find: {
                    byName: r,
                    byNameContains: i,
                    byType: o,
                    byValue: a,
                    byValueCoerced: s,
                    custom: c
                },
                events: {
                    logFilter: v,
                    logByAction: u,
                    logByName: l,
                    logAll: p,
                    logNone: f
                }
            };
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
    },
    12: function(t, e, n) {
        var r, i;
        r = [], i = function() {
            'use strict';

            function t(t, e) {
                var n, r, i, o = e.length;
                return 'function' == typeof e[o - 1] && (o -= 1, i = e[o]), 'object' == typeof e[o - 1] && (o -= 1), 2 == o ? (n = e[0], r = e[1]) : (n = t.node, r = e[0]), {
                    element: n,
                    type: r,
                    callback: i
                };
            }

            function e(t, e) {
                return t.element == e.element && t.type == e.type && (null == e.callback || t.callback == e.callback);
            }

            function n() {
                function n(t) {
                    this.component = t, this.attachedTo = [], this.instances = {}, this.addInstance = function(t) {
                        var e = new r(t);
                        return this.instances[t.identity] = e, this.attachedTo.push(t.node), e;
                    }, this.removeInstance = function(t) {
                        delete this.instances[t.identity];
                        var e = this.attachedTo.indexOf(t.node);
                        e > -1 && this.attachedTo.splice(e, 1), Object.keys(this.instances).length || i.removeComponentInfo(this);
                    }, this.isAttachedTo = function(t) {
                        return this.attachedTo.indexOf(t) > -1;
                    };
                }

                function r(t) {
                    this.instance = t, this.events = [], this.addBind = function(t) {
                        this.events.push(t), i.events.push(t);
                    }, this.removeBind = function(t) {
                        for (var n, r = 0; n = this.events[r]; r++) e(n, t) && this.events.splice(r, 1);
                    };
                }
                var i = this;
                (this.reset = function() {
                    this.components = [], this.allInstances = {}, this.events = [];
                }).call(this), this.addInstance = function(t) {
                    var e = this.findComponentInfo(t);
                    e || (e = new n(t.constructor), this.components.push(e));
                    var r = e.addInstance(t);
                    return this.allInstances[t.identity] = r, e;
                }, this.removeInstance = function(t) {
                    var e = this.findComponentInfo(t);
                    e && e.removeInstance(t), delete this.allInstances[t.identity];
                }, this.removeComponentInfo = function(t) {
                    var e = this.components.indexOf(t);
                    e > -1 && this.components.splice(e, 1);
                }, this.findComponentInfo = function(t) {
                    for (var e, n = t.attachTo ? t : t.constructor, r = 0; e = this.components[r]; r++)
                        if (e.component === n) return e;
                    return null;
                }, this.findInstanceInfo = function(t) {
                    return this.allInstances[t.identity] || null;
                }, this.getBoundEventNames = function(t) {
                    return this.findInstanceInfo(t).events.map(function(t) {
                        return t.type;
                    });
                }, this.findInstanceInfoByNode = function(t) {
                    var e = [];
                    return Object.keys(this.allInstances).forEach(function(n) {
                        var r = this.allInstances[n];
                        r.instance.node === t && e.push(r);
                    }, this), e;
                }, this.on = function(e) {
                    for (var n, r = i.findInstanceInfo(this), o = arguments.length, a = 1, s = new Array(o - 1); a < o; a++) s[a - 1] = arguments[a];
                    if (r) {
                        n = e.apply(null, s), n && (s[s.length - 1] = n);
                        var c = t(this, s);
                        r.addBind(c);
                    }
                }, this.off = function() {
                    var n = t(this, arguments),
                        r = i.findInstanceInfo(this);
                    r && r.removeBind(n);
                    for (var o, a = 0; o = i.events[a]; a++) e(o, n) && i.events.splice(a, 1);
                }, i.trigger = function() {}, this.teardown = function() {
                    i.removeInstance(this);
                }, this.withRegistration = function() {
                    this.after('initialize', function() {
                        i.addInstance(this);
                    }), this.around('on', i.on), this.after('off', i.off), window.DEBUG && (!1).enabled && this.after('trigger', i.trigger), this.after('teardown', {
                        obj: i,
                        fnName: 'teardown'
                    });
                };
            }
            return new n();
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
    },
    14: function(t, e, n) {
        var r;
        r = function(t) {
            'use strict';

            function e() {
                this.initialState = function(t) {
                    this._stateDef = r.merge(this._stateDef || {}, t);
                }, this.replaceState = function(t) {
                    if (t && 'object' == typeof t) return this.state = t, this.stateChanged(this.state), this.state;
                }, this.mergeState = function(t) {
                    return this.replaceState(r.merge(this.state, t));
                }, this.fromState = function(t) {
                    return function() {
                        return this.state[t];
                    };
                }, this.toState = function(t) {
                    return function(e) {
                        var n = {};
                        n[t] = e, this.mergeState(n);
                    };
                }, this.fromAttr = function(t) {
                    return function(e) {
                        return this.attr[t];
                    };
                }, this.stateChanged = function() {}, this.after('initialize', function() {
                    var t = this._stateDef || {},
                        e = this,
                        n = Object.keys(t).reduce(function(n, r) {
                            var i = t[r];
                            return n[r] = 'function' == typeof i ? i.call(e) : i, n;
                        }, {});
                    this.replaceState(n);
                });
            }
            var r = n(7);
            return e;
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    15: function(t, e, n) {
        var r;
        r = function() {
            'use strict';

            function t() {
                var t = this.attrDef ? this.attributes : this.defaultAttrs;
                t.call(this, {
                    teardownOn: ''
                }), this.after('initialize', function() {
                    if (this.attr.teardownOn) {
                        if (this.attr.teardownOn === this.childTeardownEvent) throw new Error('Component initialized to listen for its own teardown event.');
                        this.on(document, this.attr.teardownOn, function() {
                            this.teardown();
                        });
                    }
                });
            }

            function e() {
                this.before('initialize', function() {
                    this.childTeardownEvent = this.childTeardownEvent || e.nextTeardownEvent();
                }), this.before('teardown', function() {
                    this.trigger(this.childTeardownEvent);
                }), this.attachChild = function(e, n, r) {
                    r = r || {}, r.teardownOn || (r.teardownOn = this.childTeardownEvent);
                    var i = e.prototype.mixedIn || [],
                        o = i.indexOf(t) > -1;
                    (o ? e : e.mixin(t)).attachTo(n, r);
                };
            }
            var n = 0;
            return e.nextTeardownEvent = function() {
                return n += 1, '_teardownEvent' + n;
            }, e.withBoundLifecycle = t, e;
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    18: function(t, e, n) {
        var r, i;
        r = [n(7)], i = function(t) {
            'use strict';

            function e(t) {
                var e = t.tagName ? t.tagName.toLowerCase() : t.toString(),
                    n = t.className ? '.' + t.className : '',
                    r = e + n;
                return t.tagName ? ['\'', '\''].join(r) : r;
            }

            function n(t, n, r) {
                if (window.DEBUG && window.DEBUG.enabled) {
                    var o, a, s, c, u, l, f, p, h, d;
                    'function' == typeof r[r.length - 1] && (c = r.pop(), c = c.unbound || c), 1 == r.length ? (s = n.$node[0], a = r[0]) : 2 != r.length || 'object' != typeof r[1] || r[1].type ? (s = r[0], a = r[1], 'trigger' == t && (u = r[2])) : (s = n.$node[0], a = r[0], 'trigger' == t && (u = r[1])), o = 'object' == typeof a ? a.type : a, l = (!1).events.logFilter, p = 'all' == l.actions || l.actions.indexOf(t) > -1, f = function(t) {
                        return t.test ? t : new RegExp('^' + t.replace(/\*/g, '.*') + '$');
                    }, h = 'all' == l.eventNames || l.eventNames.some(function(t) {
                        return f(t).test(o);
                    }), p && h && (d = [i[t], t, '[' + o + ']'], u && d.push(u), d.push(e(s)), d.push(n.constructor.describe.split(' ').slice(0, 3).join(' ')), console.groupCollapsed && 'trigger' == t && console.groupCollapsed(t, o), Function.prototype.apply.call(console.info, console, d));
                }
            }

            function r() {
                this.before('trigger', function() {
                    n('trigger', this, t.toArray(arguments));
                }), console.groupCollapsed && this.after('trigger', function() {
                    console.groupEnd();
                }), this.before('on', function() {
                    n('on', this, t.toArray(arguments));
                }), this.before('off', function() {
                    n('off', this, t.toArray(arguments));
                });
            }
            var i = {
                on: '<-',
                trigger: '->',
                off: 'x '
            };
            return r;
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
    },
    21: function(t, e, n) {
        var r, i;
        r = [n(7)], i = function(t) {
            'use strict';
            var e = {
                around: function(t, e) {
                    return function() {
                        var n = 0,
                            r = arguments.length,
                            i = new Array(r + 1);
                        for (i[0] = t.bind(this); n < r; n++) i[n + 1] = arguments[n];
                        return e.apply(this, i);
                    };
                },
                before: function(t, e) {
                    var n = 'function' == typeof e ? e : e.obj[e.fnName];
                    return function() {
                        return n.apply(this, arguments), t.apply(this, arguments);
                    };
                },
                after: function(t, e) {
                    var n = 'function' == typeof e ? e : e.obj[e.fnName];
                    return function() {
                        var e = (t.unbound || t).apply(this, arguments);
                        return n.apply(this, arguments), e;
                    };
                },
                withAdvice: function() {
                    ['before', 'after', 'around'].forEach(function(n) {
                        this[n] = function(r, i) {
                            var o = r.trim().split(' ');
                            o.forEach(function(r) {
                                t.mutateProperty(this, r, function() {
                                    return 'function' == typeof this[r] ? this[r] = e[n](this[r], i) : this[r] = i, this[r];
                                });
                            }, this);
                        };
                    }, this);
                }
            };
            return e;
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
    },
    22: function(t, e, n) {
        var r, i;
        r = [n(7)], i = function(t) {
            'use strict';

            function e(e, n) {
                Object.keys(e).forEach(function(i) {
                    r.indexOf(i) < 0 && t.propertyWritability(e, i, n);
                });
            }

            function n(t, n) {
                t.mixedIn = Object.prototype.hasOwnProperty.call(t, 'mixedIn') ? t.mixedIn : [];
                for (var r = 0; r < n.length; r++) t.mixedIn.indexOf(n[r]) == -1 && (e(t, !1), n[r].call(t), t.mixedIn.push(n[r]));
                e(t, !0);
            }
            var r = ['mixedIn', 'attrDef'];
            return {
                mixin: n
            };
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
    },
    25: function(t, e, n) {
        var r, i;
        (function(o) {
            r = [n(21), n(7), n(22), n(36), n(12), n(18), n(11)], i = function(t, e, n, r, i, a, s) {
                'use strict';

                function c() {
                    var t = i.findComponentInfo(this);
                    t && Object.keys(t.instances).forEach(function(e) {
                        var n = t.instances[e];
                        n && n.instance && n.instance.teardown();
                    });
                }

                function u(t) {
                    for (var n = arguments.length, r = new Array(n - 1), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    if (!t) throw new Error('Component needs to be attachTo\'d a jQuery object, native node or selector string');
                    var s = e.merge.apply(e, r),
                        c = i.findComponentInfo(this);
                    o(t).each(function(t, e) {
                        c && c.isAttachedTo(e) || new this().initialize(e, s);
                    }.bind(this));
                }

                function l() {
                    var t = this.mixedIn || this.prototype.mixedIn || [];
                    return t.map(function(t) {
                        if (null == t.name) {
                            var e = t.toString().match(p);
                            return e && e[1] ? e[1] : '';
                        }
                        return h[t.name] ? '' : t.name;
                    }).filter(Boolean).join(', ');
                }

                function f() {
                    for (var o = arguments.length, p = new Array(o), h = 0; h < o; h++) p[h] = arguments[h];
                    var d = function() {};
                    return d.toString = d.prototype.toString = l, s.enabled && (d.describe = d.prototype.describe = d.toString()), d.attachTo = u, d.mixin = function() {
                        var t = f(),
                            r = Object.create(d.prototype);
                        return r.mixedIn = [].concat(d.prototype.mixedIn), r.defaults = e.merge(d.prototype.defaults), r.attrDef = d.prototype.attrDef, n.mixin(r, arguments), t.prototype = r, t.prototype.constructor = t, t;
                    }, d.teardownAll = c, s.enabled && p.unshift(a), p.unshift(r, t.withAdvice, i.withRegistration), n.mixin(d.prototype, p), d;
                }
                var p = /function (.*?)\s?\(/,
                    h = {
                        withBase: !0,
                        withLogging: !0
                    };
                return f.teardownAll = function() {
                    i.components.slice().forEach(function(t) {
                        t.component.teardownAll();
                    }), i.reset();
                }, f;
            }.apply(e, r), !(void 0 !== i && (t.exports = i));
        }.call(e, n(1)));
    },
    26: function(t, e, n) {
        function r() {
            var t = null,
                e = null;
            this.ajax = function(n) {
                null != t && t.abort(), e = n;
                var r = function(e) {
                        t === e && (t = null);
                    },
                    o = function(t, e, i) {
                        r.bind(this).apply(i), Boolean(n.success) && n.success(t, e, i);
                    },
                    a = function(t, e, i) {
                        r.bind(this).apply(t), Boolean(n.error) && n.error(t, e, i);
                    },
                    s = i.extend({}, n, {
                        success: o.bind(this),
                        error: a.bind(this)
                    });
                return t = i.ajax(s);
            }, this.retryLastAjax = function() {
                Boolean(e) && this.ajax(e);
            };
        }
        var i = n(1);
        t.exports = r;
    },
    34: function(t, e, n) {
        t.exports = function(t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
            }
            var n = {};
            return e.m = t, e.c = n, e.i = function(t) {
                return t;
            }, e.d = function(t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                });
            }, e.n = function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default;
                } : function() {
                    return t;
                };
                return e.d(n, 'a', n), n;
            }, e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }, e.p = '', e(e.s = 3);
        }([function(t, e, n) {
            'use strict';
            e.__esModule = !0, e.default = {
                A: 65,
                ARROW_DOWN: 40,
                ARROW_LEFT: 37,
                ARROW_RIGHT: 39,
                ARROW_UP: 38,
                BACKSPACE: 8,
                DELETE: 46,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                SPACE: 32,
                TAB: 9
            };
        }, function(t, e, n) {
            'use strict';

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            }

            function o(t) {
                this.name = 'FeatherFocusTrapError', this.message = t, this.stack = new Error().stack;
            }
            e.__esModule = !0, e.FocusTrapError = e.focusTrap = void 0;
            var a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e;
                    };
                }(),
                s = n(0),
                c = r(s),
                u = n(4),
                l = r(u),
                f = function() {
                    function t() {
                        var e = this;
                        i(this, t), this._handleFocusCapture = function(t) {
                            e._inFocusableContainer(t.target) || (t.target.blur && t.target.blur(), t.preventDefault(), t.stopImmediatePropagation());
                        }, this._handleClickCapture = function(t) {
                            e._inFocusableContainer(t.target) || (t.preventDefault(), t.stopImmediatePropagation());
                        }, this._handleKeyDownCapture = function(t) {
                            t.which === c.default.TAB && (t.preventDefault(), e.focusNext(t.shiftKey));
                        }, this._traps = [], this._focusableNodes = [];
                    }
                    return t.prototype._bindEventListeners = function() {
                        document.addEventListener('focus', this._handleFocusCapture, !0), document.addEventListener('click', this._handleClickCapture, !0), document.addEventListener('keydown', this._handleKeyDownCapture, !0);
                    }, t.prototype._removeEventListeners = function() {
                        document.removeEventListener('focus', this._handleFocusCapture, !0), document.removeEventListener('click', this._handleClickCapture, !0), document.removeEventListener('keydown', this._handleKeyDownCapture, !0);
                    }, t.prototype._inFocusableContainer = function(t) {
                        return this._activeTrap.focusContainers.some(function(e) {
                            return e.contains(t);
                        });
                    }, t.prototype.focusNext = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this._updateFocusableNodes(), !(this._focusableNodes.length <= 0)) {
                            var e = this._focusableNodes.indexOf(document.activeElement),
                                n = void 0;
                            t ? (n = e - 1, n < 0 && (n = this._focusableNodes.length - 1)) : n = (e + 1) % this._focusableNodes.length, this._focusableNodes[n].focus();
                        }
                    }, t.prototype._updateFocusableNodes = function() {
                        var t = this;
                        this._focusableNodes = [], this._activeTrap.focusContainers.forEach(function(e) {
                            t._focusableNodes = t._focusableNodes.concat((0, l.default)(e));
                        });
                    }, t.prototype.activate = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.initialFocusTarget;
                        this._traps.push({
                            focusedNodeBeforeActivation: document.activeElement,
                            focusContainers: [t]
                        }), this._bindEventListeners(), n && this._inFocusableContainer(n) ? n.focus() : this.focusNext();
                    }, t.prototype.deactivate = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!this.isActive) throw new o('Cannot deactivate focusTrap when inactive.');
                        var e = t.restoreFocus,
                            n = this._traps.pop(),
                            r = n.focusedNodeBeforeActivation;
                        this.isActive || this._removeEventListeners(), e && r && r.focus && r.focus();
                    }, t.prototype.pause = function() {
                        this.isActive && this._removeEventListeners();
                    }, t.prototype.unpause = function() {
                        this.isActive && this._bindEventListeners();
                    }, t.prototype.addScope = function(t) {
                        if (this.isActive) {
                            var e = this._activeTrap.focusContainers,
                                n = e.indexOf(t) !== -1;
                            n || e.push(t);
                        }
                    }, t.prototype.removeScope = function(t) {
                        if (this.isActive) {
                            var e = this._activeTrap.focusContainers,
                                n = e.indexOf(t);
                            n !== -1 && e.splice(n, 1);
                        }
                    }, a(t, [{
                        key: 'isActive',
                        get: function() {
                            return this._traps.length > 0;
                        }
                    }, {
                        key: '_activeTrap',
                        get: function() {
                            return this._traps[this._traps.length - 1];
                        }
                    }]), t;
                }();
            o.prototype = Object.create(Error.prototype), window.Feather = window.Feather || {};
            var p = window,
                h = p.Feather,
                d = h._focusTrap;
            d || (e.focusTrap = d = new f(), h._focusTrap = d), e.default = h._focusTrap, e.focusTrap = d, e.FocusTrapError = o;
        }, function(t, e) {
            t.exports = n(1);
        }, function(t, e, n) {
            'use strict';

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }

            function i(t) {
                this.options = s.extend({}, this.defaultOptions, t), this._verifyConfig(), this._render();
            }
            var o = n(0),
                a = r(o),
                s = window.$ || n(2),
                c = n(1),
                u = c.focusTrap;
            s.extend(i.prototype, {
                defaultOptions: {
                    delayForShowingInMs: 10,
                    baseAnimationTimeInMs: 200,
                    footerAnimationTimeInMs: 100,
                    sheetClasses: [],
                    bodyClasses: [],
                    anchoredToBottom: !0,
                    hasFooter: !1,
                    dismissOverlayOnClick: !0,
                    showCloseX: !0,
                    dismissSheetOnEsc: !0,
                    templateRenderer: null,
                    $wrapper: null,
                    $content: null
                },
                $: function(t) {
                    return this.$el.find(t);
                },
                on: function(t, e) {
                    this.$el.on(t, e);
                },
                off: function(t) {
                    this.$el.off(t);
                },
                trigger: function(t, e) {
                    this.$el.trigger(t, e);
                },
                _verifyConfig: function() {
                    if (!this.options.templateRenderer && !this.options.$wrapper) throw new TypeError('Missing $wrapper, which must be jQuery element or HTML string');
                    if (!Array.isArray(this.options.sheetClasses)) throw new TypeError('sheetClasses must be an array');
                    if (!Array.isArray(this.options.bodyClasses)) throw new TypeError('bodyClasses must be an array');
                },
                _render: function() {
                    var t = this.options.sheetClasses.concat(['Sheet']).join(' ');
                    this.options.templateRenderer ? (this.$el = s('<div>'), this.$el.html(this.options.templateRenderer(this.options))) : this.$el = this.options.$wrapper, this.$overlay = this.$('.Sheet-overlay'), this.$headerWrapper = this.$('.Sheet-headerWrapper'), this.$wrapper = this.$('.Sheet-containerWrapper'), this.$container = this.$('.Sheet-container'), this.$content = this.$('.Sheet-content'), this.$headerContainer = this.$('.Sheet-headerContainer'), this.$title = this.$('.Sheet-title'), this.$body = this.$('.Sheet-body'), this.$footerContainer = this.$('.Sheet-footerContainer'), this.$footerWrapper = this.$('.Sheet-footerWrapper'), this.$footer = this.$('.Sheet-footer'), this.$closeBtn = this.$('.Sheet-close'), this.$dismissOverlayOnClickTargets = this.$overlay.add(this.$wrapper).add(this.$footerContainer), this.$el.addClass(t).toggleClass(i.classNames.BOTTOM_ANCHORED, !!this.options.anchoredToBottom).toggleClass(i.classNames.HAS_FIXED_FOOTER, !!this.options.anchoredToBottom && !!this.options.hasFooter);
                },
                _renderOnPage: function() {
                    this.$el.appendTo(document.body), this.options.$content && this.renderBody(this.options.$content), this.$body.addClass(this.options.bodyClasses.join(' ')), this.options.showCloseX || this.$closeBtn.hide(), this._moveFooter(this.options.anchoredToBottom);
                },
                _teardown: function() {
                    this.$el.detach(), this.hideTimeout && window.clearTimeout(this.hideTimeout), this.showTimeout && window.clearTimeout(this.showTimeout);
                },
                renderBody: function(t) {
                    this.$body.empty().append(t), this._calibrateContainerScrolling();
                },
                renderFooter: function(t) {
                    this.$footer.empty().append(t);
                },
                renderTitle: function(t) {
                    this.$title.text(t);
                },
                _handleKeyup: function(t) {
                    t.keyCode === a.default.ESCAPE && this.hide();
                },
                _handleMousedown: function(t) {
                    this._lastMousedownTarget = t.target;
                },
                _handleMouseup: function(t) {
                    var e = this.$dismissOverlayOnClickTargets;
                    e.is(this._lastMousedownTarget) && e.is(t.target) && this.hide();
                },
                _setupFixedHeaderWhenScrolling: function() {
                    this.$wrapper.scroll(function() {
                        var t = window.parseInt(this.$container.css('margin-top'), 10),
                            e = this.$wrapper.scrollTop() >= t && 0 !== t;
                        this.trigger('scroll'), this._moveHeader(e);
                    }.bind(this));
                },
                _attachEventHandlers: function() {
                    s(window).on(i.events.RESIZE, this._calibrateContainerScrolling.bind(this)), this.options.dismissSheetOnEsc && s(document).on(i.events.KEYUP, this._handleKeyup.bind(this)), this.options.showCloseX && this.$closeBtn.click(this.hide.bind(this)), this.options.dismissOverlayOnClick && this._attachDismissOverlayOnClickHandlers(), this._setupFixedHeaderWhenScrolling();
                },
                _attachDismissOverlayOnClickHandlers: function() {
                    this.$el.mousedown(this._handleMousedown.bind(this)).mouseup(this._handleMouseup.bind(this));
                },
                _removeEventHandlers: function() {
                    s(window).off(i.events.RESIZE), s(document).off(i.events.KEYUP), this.$el.off('mousedown mouseup');
                },
                _togglePageScrolling: function(t) {
                    s('html,body').css('overflow', t ? 'auto' : 'hidden');
                },
                _calibrateContainerScrolling: function(t) {
                    if (this.trigger('scroll'), t === !1) this.$wrapper.removeClass(i.classNames.SCROLLABLE);
                    else if (t === !0) this.$wrapper.addClass(i.classNames.SCROLLABLE);
                    else {
                        var e = i.getWindowHeight() * i.MAX_VIEWPORT_HEIGHT_RATIO;
                        this.$wrapper.toggleClass(i.classNames.SCROLLABLE, this.$container.height() > e);
                    }
                },
                _moveHeader: function(t) {
                    this.$el.toggleClass(i.classNames.HAS_FIXED_HEADER, t), this.$body.css('padding-top', t ? this.$headerContainer.height() : 0), t ? this.$headerContainer.appendTo(this.$headerWrapper) : this.$headerContainer.prependTo(this.$content);
                },
                _moveFooter: function(t) {
                    this.$el.toggleClass(i.classNames.HAS_FIXED_FOOTER, t), this.$body.css('padding-bottom', t ? this.$headerContainer.height() : 0), this.$footerContainer.appendTo(t ? this.$footerWrapper : this.$container);
                },
                _performShow: function() {
                    this.options.anchoredToBottom ? (this.$el.show(), this.options.hasFooter && this.$footerWrapper.fadeIn(this.options.footerAnimationTimeInMs)) : this.$el.fadeIn(this.options.baseAnimationTimeInMs), this.options.hasFooter || this.$footer.hide(), this.$wrapper.addClass(i.classNames.OPEN), this.$overlay.fadeIn(this.options.baseAnimationTimeInMs), this._trapFocus();
                },
                _performHide: function() {
                    this.$wrapper.removeClass(i.classNames.OPEN), this.$overlay.fadeOut(this.options.footerFadeOut || this.options.baseAnimationTimeInMs), this.options.anchoredToBottom && this.options.hasFooter && this.$footerWrapper.fadeOut(this.options.footerAnimationTimeInMs), this.options.anchoredToBottom || this.$el.fadeOut(this.options.baseAnimationTimeInMs), this._untrapFocus();
                },
                _trapFocus: function() {
                    u.activate(this.$el.get(0), {
                        initialFocusTarget: this.$wrapper.get(0)
                    });
                },
                _untrapFocus: function() {
                    u.isActive && u.deactivate();
                },
                show: function() {
                    this.trigger(i.events.BEFORE_SHOW), this._renderOnPage(), this._attachEventHandlers(), this._togglePageScrolling(!1), this.showTimeout = window.setTimeout(function() {
                        this._performShow(), this._calibrateContainerScrolling(), this.trigger(i.events.AFTER_SHOW);
                    }.bind(this), this.options.delayForShowingInMs);
                },
                hide: function() {
                    this.trigger(i.events.BEFORE_HIDE), this._removeEventHandlers(), this._togglePageScrolling(!0), this._moveHeader(!1), this._performHide(), this.hideTimeout = window.setTimeout(function() {
                        this.trigger(i.events.AFTER_HIDE), this._teardown();
                    }.bind(this), this.options.baseAnimationTimeInMs);
                }
            }), s.extend(i, {
                events: {
                    KEYUP: 'keyup.sheet',
                    RESIZE: 'resize.sheet',
                    BEFORE_SHOW: 'beforeShow',
                    AFTER_SHOW: 'afterShow',
                    BEFORE_HIDE: 'beforeHide',
                    AFTER_HIDE: 'afterHide'
                },
                classNames: {
                    OPEN: 'is-open',
                    SCROLLABLE: 'is-withScroll',
                    BOTTOM_ANCHORED: 'is-bottomAnchored',
                    HAS_FIXED_HEADER: 'is-withFixedHeader',
                    HAS_FIXED_FOOTER: 'is-withFixedFooter'
                },
                MAX_VIEWPORT_HEIGHT_RATIO: 0.85,
                getWindowHeight: function() {
                    return s(window).height();
                }
            }), t.exports = i;
        }, function(t, e) {
            function n() {
                function t(n, r) {
                    if (n === document.documentElement) return !1;
                    for (var i = 0, o = e.length; i < o; i++)
                        if (e[i][0] === n) return e[i][1];
                    r = r || window.getComputedStyle(n);
                    var a = !1;
                    return 'none' === r.display ? a = !0 : n.parentNode && (a = t(n.parentNode)), e.push([n, a]), a;
                }
                var e = [];
                return function(e) {
                    if (e === document.documentElement) return !1;
                    var n = window.getComputedStyle(e);
                    return !!t(e, n) || 'hidden' === n.visibility;
                };
            }
            t.exports = function(t) {
                for (var e, r, i = [], o = [], a = n(), s = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'], c = t.querySelectorAll(s), u = 0, l = c.length; u < l; u++) e = c[u], r = e.tabIndex, r < 0 || 'INPUT' === e.tagName && 'hidden' === e.type || e.disabled || a(e) || (0 === r ? i.push(e) : o.push({
                    tabIndex: r,
                    node: e
                }));
                var f = o.sort(function(t, e) {
                    return t.tabIndex - e.tabIndex;
                }).map(function(t) {
                    return t.node;
                });
                return Array.prototype.push.apply(f, i), f;
            };
        }]);
    },
    36: function(t, e, n) {
        var r, i;
        (function(o) {
            r = [n(7), n(12), n(11)], i = function(t, e, n) {
                'use strict';

                function r(t) {
                    t.events.slice().forEach(function(t) {
                        var e = [t.type];
                        t.element && e.unshift(t.element), 'function' == typeof t.callback && e.push(t.callback), this.off.apply(this, e);
                    }, t.instance);
                }

                function i(t, e) {
                    try {
                        window.postMessage(e, '*');
                    } catch (e) {
                        n.warn.call(this, ['Event "', t, '" was triggered with non-serializable data. ', 'Flight recommends you avoid passing non-serializable data in events.'].join(''));
                    }
                }

                function a(t) {
                    n.warn.call(this, ['Attribute "', t, '" defaults to an array or object. ', 'Enclose this in a function to avoid sharing between component instances.'].join(''));
                }

                function s(t) {
                    var e, r = [];
                    if (this.attr = new this.attrDef(), n.enabled && window.console) {
                        for (var i in this.attrDef.prototype) r.push(i);
                        e = Object.keys(t);
                        for (var o = e.length - 1; o >= 0; o--)
                            if (r.indexOf(e[o]) == -1) {
                                n.warn.call(this, 'Passed unused attribute "' + e[o] + '".');
                                break;
                            }
                    }
                    for (var i in this.attrDef.prototype) {
                        if ('undefined' == typeof t[i]) {
                            if (null === this.attr[i]) throw new Error('Required attribute "' + i + '" not specified in attachTo for component "' + this.toString() + '".');
                            n.enabled && 'object' == typeof this.attr[i] && a.call(this, i);
                        } else this.attr[i] = t[i];
                        'function' == typeof this.attr[i] && (this.attr[i] = this.attr[i].call(this));
                    }
                }

                function c(t) {
                    var e = Object.create(t);
                    for (var r in this.defaults) t.hasOwnProperty(r) || (e[r] = this.defaults[r], n.enabled && 'object' == typeof this.defaults[r] && a.call(this, r));
                    this.attr = e, Object.keys(this.defaults || {}).forEach(function(t) {
                        if (null === this.defaults[t] && null === this.attr[t]) throw new Error('Required attribute "' + t + '" not specified in attachTo for component "' + this.toString() + '".');
                    }, this);
                }

                function u(t) {
                    return function(e, n) {
                        o(e.target).trigger(t, n);
                    };
                }

                function l() {
                    this.trigger = function() {
                        var t, e, r, a, s, c = arguments.length - 1,
                            u = arguments[c];
                        return 'string' == typeof u || u && u.defaultBehavior || (c--, r = u), 1 == c ? (t = o(arguments[0]), a = arguments[1]) : (t = this.$node, a = arguments[0]), a.defaultBehavior && (s = a.defaultBehavior, a = o.Event(a.type)), e = a.type || a, n.enabled && window.postMessage && i.call(this, e, r), 'object' == typeof this.attr.eventData && (r = o.extend(!0, {}, this.attr.eventData, r)), t.trigger(a || e, r), s && !a.isDefaultPrevented() && (this[s] || s).call(this, a, r), t;
                    }, this.on = function() {
                        var e, n, r, i, a = arguments.length - 1,
                            s = arguments[a];
                        if (i = 'object' == typeof s ? t.delegate(this.resolveDelegateRules(s)) : 'string' == typeof s ? u(s) : s, 2 == a ? (e = o(arguments[0]), n = arguments[1]) : (e = this.$node, n = arguments[0]), 'function' != typeof i && 'object' != typeof i) throw new Error('Unable to bind to "' + n + '" because the given callback is not a function or an object');
                        return r = i.bind(this), r.target = i, r.context = this, e.on(n, r), i.bound || (i.bound = []), i.bound.push(r), r;
                    }, this.off = function() {
                        var t, n, r, i = arguments.length - 1;
                        if ('function' == typeof arguments[i] && (r = arguments[i], i -= 1), 1 == i ? (t = o(arguments[0]), n = arguments[1]) : (t = this.$node, n = arguments[0]), r) {
                            var a = r.target ? r.target.bound : r.bound || [];
                            a && a.some(function(t, e, n) {
                                if (t.context && this.identity == t.context.identity) return n.splice(e, 1), r = t, !0;
                            }, this), t.off(n, r);
                        } else e.findInstanceInfo(this).events.forEach(function(e) {
                            n == e.type && t.off(n, e.callback);
                        });
                        return t;
                    }, this.resolveDelegateRules = function(t) {
                        var e = {};
                        return Object.keys(t).forEach(function(n) {
                            if (!(n in this.attr)) throw new Error('Component "' + this.toString() + '" wants to listen on "' + n + '" but no such attribute was defined.');
                            e[this.attr[n]] = 'string' == typeof t[n] ? u(t[n]) : t[n];
                        }, this), e;
                    }, this.select = function(t) {
                        return this.$node.find(this.attr[t]);
                    }, this.attributes = function(t) {
                        var e = function() {};
                        this.attrDef && (e.prototype = new this.attrDef());
                        for (var n in t) e.prototype[n] = t[n];
                        this.attrDef = e;
                    }, this.defaultAttrs = function(e) {
                        t.push(this.defaults, e, !0) || (this.defaults = e);
                    }, this.initialize = function(t, e) {
                        if (e = e || {}, this.identity || (this.identity = f++), !t) throw new Error('Component needs a node');
                        return t.jquery ? (this.node = t[0], this.$node = t) : (this.node = t, this.$node = o(t)), this.attrDef ? s.call(this, e) : c.call(this, e), this;
                    }, this.teardown = function() {
                        r(e.findInstanceInfo(this));
                    };
                }
                var f = 0;
                return l;
            }.apply(e, r), !(void 0 !== i && (t.exports = i));
        }.call(e, n(1)));
    },
    42: function(t, e, n) {
        ! function(t) {
            function e(t) {
                '}' === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1));
            }

            function n(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, '');
            }

            function r(t, e, n) {
                if (e.charAt(n) != t.charAt(0)) return !1;
                for (var r = 1, i = t.length; r < i; r++)
                    if (e.charAt(n + r) != t.charAt(r)) return !1;
                return !0;
            }

            function i(e, n, r, s) {
                var c = [],
                    u = null,
                    l = null,
                    f = null;
                for (l = r[r.length - 1]; e.length > 0;) {
                    if (f = e.shift(), l && '<' == l.tag && !(f.tag in x)) throw new Error('Illegal content in < super tag.');
                    if (t.tags[f.tag] <= t.tags.$ || o(f, s)) r.push(f), f.nodes = i(e, f.tag, r, s);
                    else {
                        if ('/' == f.tag) {
                            if (0 === r.length) throw new Error('Closing tag without opener: /' + f.n);
                            if (u = r.pop(), f.n != u.n && !a(f.n, u.n, s)) throw new Error('Nesting error: ' + u.n + ' vs. ' + f.n);
                            return u.end = f.i, c;
                        }
                        '\n' == f.tag && (f.last = 0 == e.length || '\n' == e[0].tag);
                    }
                    c.push(f);
                }
                if (r.length > 0) throw new Error('missing closing tag: ' + r.pop().n);
                return c;
            }

            function o(t, e) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n].o == t.n) return t.tag = '#', !0;
            }

            function a(t, e, n) {
                for (var r = 0, i = n.length; r < i; r++)
                    if (n[r].c == t && n[r].o == e) return !0;
            }

            function s(t) {
                var e = [];
                for (var n in t) e.push('"' + u(n) + '": function(c,p,t,i) {' + t[n] + '}');
                return '{ ' + e.join(',') + ' }';
            }

            function c(t) {
                var e = [];
                for (var n in t.partials) e.push('"' + u(n) + '":{name:"' + u(t.partials[n].name) + '", ' + c(t.partials[n]) + '}');
                return 'partials: {' + e.join(',') + '}, subs: ' + s(t.subs);
            }

            function u(t) {
                return t.replace(y, '\\\\').replace(g, '\\"').replace(m, '\\n').replace(v, '\\r').replace(b, '\\u2028').replace(w, '\\u2029');
            }

            function l(t) {
                return ~t.indexOf('.') ? 'd' : 'f';
            }

            function f(t, e) {
                var n = '<' + (e.prefix || ''),
                    r = n + t.n + C++;
                return e.partials[r] = {
                    name: t.n,
                    partials: {}
                }, e.code += 't.b(t.rp("' + u(r) + '",c,p,"' + (t.indent || '') + '"));', r;
            }

            function p(t, e) {
                e.code += 't.b(t.t(t.' + l(t.n) + '("' + u(t.n) + '",c,p,0)));';
            }

            function h(t) {
                return 't.b(' + t + ');';
            }
            var d = /\S/,
                g = /\"/g,
                m = /\n/g,
                v = /\r/g,
                y = /\\/g,
                b = /\u2028/,
                w = /\u2029/;
            t.tags = {
                '#': 1,
                '^': 2,
                '<': 3,
                $: 4,
                '/': 5,
                '!': 6,
                '>': 7,
                '=': 8,
                _v: 9,
                '{': 10,
                '&': 11,
                _t: 12
            }, t.scan = function(i, o) {
                function a() {
                    y.length > 0 && (b.push({
                        tag: '_t',
                        text: new String(y)
                    }), y = '');
                }

                function s() {
                    for (var e = !0, n = C; n < b.length; n++)
                        if (e = t.tags[b[n].tag] < t.tags._v || '_t' == b[n].tag && null === b[n].text.match(d), !e) return !1;
                    return e;
                }

                function c(t, e) {
                    if (a(), t && s())
                        for (var n, r = C; r < b.length; r++) b[r].text && ((n = b[r + 1]) && '>' == n.tag && (n.indent = b[r].text.toString()), b.splice(r, 1));
                    else e || b.push({
                        tag: '\n'
                    });
                    w = !1, C = b.length;
                }

                function u(t, e) {
                    var r = '=' + T,
                        i = t.indexOf(r, e),
                        o = n(t.substring(t.indexOf('=', e) + 1, i)).split(' ');
                    return S = o[0], T = o[o.length - 1], i + r.length - 1;
                }
                var l = i.length,
                    f = 0,
                    p = 1,
                    h = 2,
                    g = f,
                    m = null,
                    v = null,
                    y = '',
                    b = [],
                    w = !1,
                    x = 0,
                    C = 0,
                    S = '{{',
                    T = '}}';
                for (o && (o = o.split(' '), S = o[0], T = o[1]), x = 0; x < l; x++) g == f ? r(S, i, x) ? (--x, a(), g = p) : '\n' == i.charAt(x) ? c(w) : y += i.charAt(x) : g == p ? (x += S.length - 1, v = t.tags[i.charAt(x + 1)], m = v ? i.charAt(x + 1) : '_v', '=' == m ? (x = u(i, x), g = f) : (v && x++, g = h), w = x) : r(T, i, x) ? (b.push({
                    tag: m,
                    n: n(y),
                    otag: S,
                    ctag: T,
                    i: '/' == m ? w - S.length : x + T.length
                }), y = '', x += T.length - 1, g = f, '{' == m && ('}}' == T ? x++ : e(b[b.length - 1]))) : y += i.charAt(x);
                return c(w, !0), b;
            };
            var x = {
                _t: !0,
                '\n': !0,
                $: !0,
                '/': !0
            };
            t.stringify = function(e, n, r) {
                return '{code: function (c,p,i) { ' + t.wrapMain(e.code) + ' },' + c(e) + '}';
            };
            var C = 0;
            t.generate = function(e, n, r) {
                C = 0;
                var i = {
                    code: '',
                    subs: {},
                    partials: {}
                };
                return t.walk(e, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r);
            }, t.wrapMain = function(t) {
                return 'var t=this;t.b(i=i||"");' + t + 'return t.fl();';
            }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
                var r = this.makePartials(t);
                return r.code = new Function('c', 'p', 'i', this.wrapMain(t.code)), new this.template(r, e, this, n);
            }, t.makePartials = function(t) {
                var e, n = {
                    subs: {},
                    partials: t.partials,
                    name: t.name
                };
                for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
                for (e in t.subs) n.subs[e] = new Function('c', 'p', 't', 'i', t.subs[e]);
                return n;
            }, t.codegen = {
                '#': function(e, n) {
                    n.code += 'if(t.s(t.' + l(e.n) + '("' + u(e.n) + '",c,p,1),c,p,0,' + e.i + ',' + e.end + ',"' + e.otag + ' ' + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += '});c.pop();}';
                },
                '^': function(e, n) {
                    n.code += 'if(!t.s(t.' + l(e.n) + '("' + u(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += '};';
                },
                '>': f,
                '<': function(e, n) {
                    var r = {
                        partials: {},
                        code: '',
                        subs: {},
                        inPartial: !0
                    };
                    t.walk(e.nodes, r);
                    var i = n.partials[f(e, n)];
                    i.subs = r.subs, i.partials = r.partials;
                },
                $: function(e, n) {
                    var r = {
                        subs: {},
                        code: '',
                        partials: n.partials,
                        prefix: e.n
                    };
                    t.walk(e.nodes, r), n.subs[e.n] = r.code, n.inPartial || (n.code += 't.sub("' + u(e.n) + '",c,p,i);');
                },
                '\n': function(t, e) {
                    e.code += h('"\\n"' + (t.last ? '' : ' + i'));
                },
                _v: function(t, e) {
                    e.code += 't.b(t.v(t.' + l(t.n) + '("' + u(t.n) + '",c,p,0)));';
                },
                _t: function(t, e) {
                    e.code += h('"' + u(t.text) + '"');
                },
                '{': p,
                '&': p
            }, t.walk = function(e, n) {
                for (var r, i = 0, o = e.length; i < o; i++) r = t.codegen[e[i].tag], r && r(e[i], n);
                return n;
            }, t.parse = function(t, e, n) {
                return n = n || {}, i(t, '', [], n.sectionTags || []);
            }, t.cache = {}, t.cacheKey = function(t, e) {
                return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join('||');
            }, t.compile = function(e, n) {
                n = n || {};
                var r = t.cacheKey(e, n),
                    i = this.cache[r];
                if (i) {
                    var o = i.partials;
                    for (var a in o) delete o[a].instance;
                    return i;
                }
                return i = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[r] = i;
            };
        }(e);
    },
    43: function(t, e, n) {
        ! function(t) {
            function e(t, e, n) {
                var r;
                return e && 'object' == typeof e && (void 0 !== e[t] ? r = e[t] : n && e.get && 'function' == typeof e.get && (r = e.get(t))), r;
            }

            function n(t, e, n, r, i, o) {
                function a() {}

                function s() {}
                a.prototype = t, s.prototype = t.subs;
                var c, u = new a();
                u.subs = new s(), u.subsText = {}, u.buf = '', r = r || {}, u.stackSubs = r, u.subsText = o;
                for (c in e) r[c] || (r[c] = e[c]);
                for (c in r) u.subs[c] = r[c];
                i = i || {}, u.stackPartials = i;
                for (c in n) i[c] || (i[c] = n[c]);
                for (c in i) u.partials[c] = i[c];
                return u;
            }

            function r(t) {
                return String(null === t || void 0 === t ? '' : t);
            }

            function i(t) {
                return t = r(t), l.test(t) ? t.replace(o, '&amp;').replace(a, '&lt;').replace(s, '&gt;').replace(c, '&#39;').replace(u, '&quot;') : t;
            }
            t.Template = function(t, e, n, r) {
                t = t || {}, this.r = t.code || this.r, this.c = n, this.options = r || {}, this.text = e || '', this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = '';
            }, t.Template.prototype = {
                r: function(t, e, n) {
                    return '';
                },
                v: i,
                t: r,
                render: function(t, e, n) {
                    return this.ri([t], e || {}, n);
                },
                ri: function(t, e, n) {
                    return this.r(t, e, n);
                },
                ep: function(t, e) {
                    var r = this.partials[t],
                        i = e[r.name];
                    if (r.instance && r.base == i) return r.instance;
                    if ('string' == typeof i) {
                        if (!this.c) throw new Error('No compiler available.');
                        i = this.c.compile(i, this.options);
                    }
                    if (!i) return null;
                    if (this.partials[t].base = i, r.subs) {
                        e.stackText || (e.stackText = {});
                        for (key in r.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                        i = n(i, r.subs, r.partials, this.stackSubs, this.stackPartials, e.stackText);
                    }
                    return this.partials[t].instance = i, i;
                },
                rp: function(t, e, n, r) {
                    var i = this.ep(t, n);
                    return i ? i.ri(e, n, r) : '';
                },
                rs: function(t, e, n) {
                    var r = t[t.length - 1];
                    if (!f(r)) return void n(t, e, this);
                    for (var i = 0; i < r.length; i++) t.push(r[i]), n(t, e, this), t.pop();
                },
                s: function(t, e, n, r, i, o, a) {
                    var s;
                    return (!f(t) || 0 !== t.length) && ('function' == typeof t && (t = this.ms(t, e, n, r, i, o, a)), s = !!t, !r && s && e && e.push('object' == typeof t ? t : e[e.length - 1]), s);
                },
                d: function(t, n, r, i) {
                    var o, a = t.split('.'),
                        s = this.f(a[0], n, r, i),
                        c = this.options.modelGet,
                        u = null;
                    if ('.' === t && f(n[n.length - 2])) s = n[n.length - 1];
                    else
                        for (var l = 1; l < a.length; l++) o = e(a[l], s, c), void 0 !== o ? (u = s, s = o) : s = '';
                    return !(i && !s) && (i || 'function' != typeof s || (n.push(u), s = this.mv(s, n, r), n.pop()), s);
                },
                f: function(t, n, r, i) {
                    for (var o = !1, a = null, s = !1, c = this.options.modelGet, u = n.length - 1; u >= 0; u--)
                        if (a = n[u], o = e(t, a, c), void 0 !== o) {
                            s = !0;
                            break;
                        }
                    return s ? (i || 'function' != typeof o || (o = this.mv(o, n, r)), o) : !i && '';
                },
                ls: function(t, e, n, i, o) {
                    var a = this.options.delimiters;
                    return this.options.delimiters = o, this.b(this.ct(r(t.call(e, i)), e, n)), this.options.delimiters = a, !1;
                },
                ct: function(t, e, n) {
                    if (this.options.disableLambda) throw new Error('Lambda features disabled.');
                    return this.c.compile(t, this.options).render(e, n);
                },
                b: function(t) {
                    this.buf += t;
                },
                fl: function() {
                    var t = this.buf;
                    return this.buf = '', t;
                },
                ms: function(t, e, n, r, i, o, a) {
                    var s, c = e[e.length - 1],
                        u = t.call(c);
                    return 'function' == typeof u ? !!r || (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(u, c, n, s.substring(i, o), a)) : u;
                },
                mv: function(t, e, n) {
                    var i = e[e.length - 1],
                        o = t.call(i);
                    return 'function' == typeof o ? this.ct(r(o.call(i)), i, n) : o;
                },
                sub: function(t, e, n, r) {
                    var i = this.subs[t];
                    i && (this.activeSub = t, i(e, n, this, r), this.activeSub = !1);
                }
            };
            var o = /&/g,
                a = /</g,
                s = />/g,
                c = /\'/g,
                u = /\"/g,
                l = /[&<>\"\']/,
                f = Array.isArray || function(t) {
                    return '[object Array]' === Object.prototype.toString.call(t);
                };
        }(e);
    },
    130: function(t, e) {
        t.exports = {
            ACCEPT: 'accept',
            REJECT: 'reject',
            VALIDATE: 'validate'
        };
    },
    166: function(t, e, n) {
        function r() {
            this.attributes({
                dropdownLabelSelector: '.Button .current',
                dropdownItemsSelector: 'ul.Menu-dropdown li a',
                dropdownChangedEvent: 'uiDropdownChanged'
            }), this.initialState({
                value: null
            }), this.after('initialize', function() {
                this.on(this.select('dropdownItemsSelector'), 'click', this.onClick), this.initialValue();
            }), this.initialValue = function() {
                var t = this.$node.find(this.attr.dropdownLabelSelector);
                this.mergeState({
                    value: t.attr('data-value')
                });
            }, this.onClick = function(t) {
                var e = i(t.target),
                    n = e.attr('data-value');
                if (n !== this.state.value) {
                    var r = e.text(),
                        o = {
                            value: n,
                            text: r
                        };
                    this.setLabel(r, n), this.mergeState({
                        value: n
                    }), this.trigger(this.attr.dropdownChangedEvent, o);
                }
            }, this.setLabel = function(t, e) {
                var n = this.select('dropdownLabelSelector');
                n.text(t), n.attr('data-value', e);
            };
        }
        var i = n(1),
            o = n(5),
            a = n(14);
        t.exports = o.component(a, r);
    },
    167: function(t, e, n) {
        var r = n(1); + function(t) {
            'use strict';

            function e(e) {
                t(r).remove(), t(i).each(function() {
                    var r = n(t(this)),
                        i = {
                            relatedTarget: this
                        };
                    r.hasClass('open') && (r.trigger(e = t.Event('hide.bs.dropdown', i)), e.isDefaultPrevented() || r.removeClass('open').trigger('hidden.bs.dropdown', i));
                });
            }

            function n(e) {
                var n = e.attr('data-target');
                n || (n = e.attr('href'), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ''));
                var r = n && t(n);
                return r && r.length ? r : e.parent();
            }
            var r = '.dropdown-backdrop',
                i = '[data-toggle=dropdown]',
                o = function(e) {
                    t(e).on('click.bs.dropdown', this.toggle);
                };
            o.prototype.toggle = function(r) {
                var i = t(this);
                if (!i.is('.disabled, :disabled')) {
                    var o = n(i),
                        a = o.hasClass('open');
                    if (e(), !a) {
                        'ontouchstart' in document.documentElement && !o.closest('.navbar-nav').length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on('click', e);
                        var s = {
                            relatedTarget: this
                        };
                        if (o.trigger(r = t.Event('show.bs.dropdown', s)), r.isDefaultPrevented()) return;
                        o.toggleClass('open').trigger('shown.bs.dropdown', s), i.focus();
                    }
                    return !1;
                }
            }, o.prototype.keydown = function(e) {
                if (/(38|40|27)/.test(e.keyCode)) {
                    var r = t(this);
                    if (e.preventDefault(), e.stopPropagation(), !r.is('.disabled, :disabled')) {
                        var o = n(r),
                            a = o.hasClass('open');
                        if (!a || a && 27 == e.keyCode) return 27 == e.which && o.find(i).focus(), r.click();
                        var s = ' li:not(.divider):visible a',
                            c = o.find('[role=menu]' + s + ', [role=listbox]' + s);
                        if (c.length) {
                            var u = c.index(c.filter(':focus'));
                            38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < c.length - 1 && u++, ~u || (u = 0), c.eq(u).focus();
                        }
                    }
                }
            };
            var a = t.fn.dropdown;
            t.fn.dropdown = function(e) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data('bs.dropdown');
                    r || n.data('bs.dropdown', r = new o(this)), 'string' == typeof e && r[e].call(n);
                });
            }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
                return t.fn.dropdown = a, this;
            }, t(document).on('click.bs.dropdown.data-api', e).on('click.bs.dropdown.data-api', '.dropdown form', function(t) {
                t.stopPropagation();
            }).on('click.bs.dropdown.data-api', i, o.prototype.toggle).on('keydown.bs.dropdown.data-api', i + ', [role=menu], [role=listbox]', o.prototype.keydown);
        }(r);
    },
    309: function(t, e, n) {
        var r;
        r = function() {
            var t = n(466);
            return {
                getTransactionHeader: function(e) {
                    if (t.isFunction(e.getResponseHeader)) return e.getResponseHeader('x-transaction-id') || e.getResponseHeader('x-transaction');
                }
            };
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    317: function(t, e) {
        ! function(t, e, n, r, i, o, a, s, c, u) {
            'use strict';
            var l = t.__,
                f = function(e, n) {
                    return 'en-US' === t.get('lang') ? e : n;
                },
                p = function(t) {
                    return t.toISOString().split('T')[0];
                },
                h = t.create('div.{0}>p.{0}-header>a[{1}]*2+span[{2} {1}].{0}-caption^table[{2}].{0}-days>thead>(tr>th[{1}]*7)^(tbody.{0}-body*2>tr*6>td*7)', ['' + e + '-calendar', 'unselectable=on', 'aria-hidden=true']),
                d = t.create('span[aria-hidden=true].{0}-value', [e]),
                g = function(t) {
                    return ['min', 'max'].map(function(e) {
                        return new Date(t.get(e) || '');
                    });
                },
                m = function(t, e) {
                    return ((2 === e ? '0' : '00') + t).slice(-e);
                };
            t.extend('input[type=date]', u, {
                constructor: function() {
                    var n = this,
                        r = h.clone(!0),
                        i = d.clone(!0),
                        o = this.css('color');
                    this.css('color', document.addEventListener ? 'transparent' : this.css('background-color')).on('keydown', ['which', 'shiftKey'], this._keydownCalendar.bind(this, r)).on(['focus', 'click'], this._focusCalendar.bind(this, r)).on('blur', this._blurCalendar.bind(this, r)).on('change', this._formatValue.bind(this, i)).before(r.hide(), i), i.on('click', function() {
                        n.fire('focus');
                    }).css(this.css(['width', 'font', 'padding-left', 'padding-right', 'text-align', 'border-width', 'box-sizing']));
                    var a = r.findAll('.' + e + '-calendar-body'),
                        s = r.find('.' + e + '-calendar-caption'),
                        c = this._changeValue.bind(this, s, a, r);
                    a[1].hide().remove(), this.closest('form').on('reset', this._resetForm.bind(this)), this.watch('value', c), c(this.value()), r.on('mousedown', ['target'], this._clickCalendar.bind(this, r)), t.requestFrame(function() {
                        var t = n.offset(),
                            e = i.offset();
                        i.css({
                            color: o,
                            'line-height': t.height + 'px',
                            'margin-left': t.left - e.left,
                            'margin-top': t.top - e.top
                        }), r.css({
                            'margin-left': t.left - e.left,
                            'margin-top': t.bottom - e.top,
                            'z-index': 1 + (0 | n.css('z-index'))
                        }), n.matches(':focus') && n.fire('focus');
                    });
                },
                _changeValue: function(t, n, r, i, o) {
                    var a, s, u, p;
                    i = new Date(i), i.getTime() || (i = new Date()), s = i.getUTCMonth(), u = i.getUTCDate(), a = i.getUTCFullYear(), t.set(l(c.MONTHS[s]).toHTMLString() + ' ' + a), p = new Date(Date.UTC(a, s, 0)), p.setUTCDate(p.getUTCDate() - p.getUTCDay() - f(1, 0)), o = new Date(o);
                    var h = i.getUTCMonth() - o.getUTCMonth() + 100 * (i.getUTCFullYear() - o.getUTCFullYear()),
                        d = n[r.contains(n[0]) ? 0 : 1],
                        m = h ? n[n[0] === d ? 1 : 0] : d,
                        v = g(this);
                    m.findAll('td').forEach(function(t) {
                        p.setUTCDate(p.getUTCDate() + 1);
                        var n = s - p.getUTCMonth(),
                            r = '' + e + '-calendar-';
                        a !== p.getUTCFullYear() && (n *= -1), p < v[0] || p > v[1] ? r += 'out' : n > 0 ? r += 'past' : n < 0 ? r += 'future' : u === p.getUTCDate() ? r += 'today' : r = '', t.set({
                            _ts: p.getTime(),
                            className: r,
                            textContent: p.getUTCDate()
                        });
                    }), h && (d[h > 0 ? 'after' : 'before'](m), d.hide(function() {
                        d.remove();
                    }), m.show()), this.fire('change');
                },
                _formatValue: function(e) {
                    var n = new Date(this.get()),
                        r = '';
                    if (n.getTime()) {
                        var i = this.get('data-format');
                        i || (i = 'E, dd MMM yyyy');
                        var o = n.getUTCDay(),
                            a = n.getUTCDate(),
                            s = n.getUTCMonth(),
                            u = n.getUTCFullYear();
                        i = i.replace(/'([^']+)'/g, '->$1<-').replace(/\w+/g, '{$&}').replace(/->{(.*?)}<-/g, function(_, t) {
                            return t.replace(/}|{/g, '');
                        }), r = t.format(i, {
                            E: l(c.DAYS[o].slice(0, 2)).toHTMLString(),
                            EE: l(c.DAYS[o]).toHTMLString(),
                            d: a,
                            dd: m(a, 2),
                            D: c.getDayInYear(n),
                            DD: m(c.getDayInYear(n), 3),
                            w: c.getWeekInYear(n),
                            ww: m(c.getWeekInYear(n), 2),
                            W: c.getWeekInMonth(n),
                            M: s + 1,
                            MM: m(s + 1, 2),
                            MMM: l(c.MONTHS[s].substr(0, 3) + '.').toHTMLString(),
                            MMMM: l(c.MONTHS[s]).toHTMLString(),
                            y: u % 100,
                            yy: m(u % 100, 2),
                            yyyy: u,
                            u: o || 7,
                            F: c.getWeekCountInMonth(n)
                        });
                    }
                    e.value(r);
                },
                _clickCalendar: function(t, e) {
                    var n;
                    if (e.matches('a') ? (n = new Date(this.get()), n.getTime() || (n = new Date()), n.setUTCMonth(n.getUTCMonth() + (e.next('a')[0] ? -1 : 1))) : e.matches('td') && (n = e.get('_ts'), n && (n = new Date(n), t.hide())), null != n) {
                        var r = g(this);
                        n < r[0] ? n = r[0] : n > r[1] && (n = r[1]), this.value(p(n));
                    }
                    return !1;
                },
                _keydownCalendar: function(t, e, c) {
                    var u, l;
                    if (t.matches(':hidden') && e === i) return !0;
                    if (e === n) t.toggle();
                    else if (e === o || e === r || e === i) t.hide();
                    else if (e === a || e === s) this.empty();
                    else if (l = new Date(this.get()), l.getTime() || (l = new Date()), 74 === e || 40 === e ? u = 7 : 75 === e || 38 === e ? u = -7 : 76 === e || 39 === e ? u = 1 : 72 !== e && 37 !== e || (u = -1), u) {
                        !c || 40 !== e && 38 !== e ? !c || 37 !== e && 39 !== e ? l.setUTCDate(l.getUTCDate() + u) : l.setUTCMonth(l.getUTCMonth() + (u > 0 ? 1 : -1)) : l.setUTCFullYear(l.getUTCFullYear() + (u > 0 ? 1 : -1));
                        var f = g(this);
                        l < f[0] || l > f[1] || this.value(p(l));
                    }
                    return e === r;
                },
                _blurCalendar: function(t) {
                    t.hide();
                },
                _focusCalendar: function(t) {
                    var e = this;
                    t.findAll('th').forEach(function(t, e) {
                        t.l10n(c.DAYS[f(e, ++e % 7)].slice(0, 2));
                    }), t.show(), setTimeout(function() {
                        var t = e[0];
                        if ('selectionStart' in t) t.selectionStart = 0, t.selectionEnd = 0;
                        else {
                            var n = t.createTextRange();
                            n.moveStart('character', 0), n.collapse(), n.moveEnd('character', 0), n.select();
                        }
                    }, 0);
                },
                _resetForm: function() {
                    this.value(this.get('defaultValue'));
                }
            }), t.importStrings('en', c.MONTHS.reduce(function(t, e) {
                var n = e.slice(0, 3);
                return t[n + '.'] = n, t;
            }, {}));
        }(window.DOM, 'btr-dateinput', 32, 9, 13, 27, 8, 46, {
            DAYS: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
            MONTHS: 'January February March April May June July August September October November December'.split(' '),
            getWeekInYear: function(t) {
                t = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())), t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
                var e = Date.UTC(t.getUTCFullYear(), 0, 1);
                return Math.ceil((1 + (t - e) / 86400000) / 7);
            },
            getWeekInMonth: function(t) {
                var e = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), 1)).getUTCDay(),
                    n = t.getUTCDate() + e - 1;
                return 1 + Math.floor(n / 7);
            },
            getWeekCountInMonth: function(t) {
                return Math.ceil(t.getUTCDate() / 7);
            },
            getDayInYear: function(t) {
                var e = Date.UTC(t.getUTCFullYear(), 0, 1),
                    n = t.getTime() - e;
                return Math.floor(1 + n / 86400000);
            }
        }, function(t) {
            var e = t.get('_native'),
                n = 'orientation' in window ? 'mobile' : 'desktop';
            return e && e !== n ? (t.set('type', 'text'), !0) : 'date' !== t[0].type;
        }), DOM.importStyles('@media screen', '.btr-dateinput-value{position:absolute;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-style:none solid;border-color:transparent;pointer-events:none}.btr-dateinput-calendar{position:absolute;visibility:hidden;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#FFF;border-bottom:1px solid #CCC;overflow:hidden;border-radius:3px;-webkit-box-shadow:0 .25em .5em rgba(0,0,0,.2);box-shadow:0 .25em .5em rgba(0,0,0,.2);font-family:Helvetica Neue,Helvetica,Arial,sans-serif;text-align:center;opacity:1;-webkit-transform:scale(1,1) translate3d(0,0,0);transform:scale(1,1) translate3d(0,0,0);-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:.1s ease-out;transition:.1s ease-out;width:15em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.btr-dateinput-calendar[aria-hidden=true]{opacity:0;-webkit-transform:scale(.75,.75) translate3d(0,0,0);transform:scale(.75,.75) translate3d(0,0,0)}.btr-dateinput-calendar-header{position:relative;margin:0;height:2.5em;line-height:2.5em;font-weight:700;white-space:nowrap;background:#2da4d6;text-shadow:0 1px 0 #555;border-bottom:1px solid #207fb1}.btr-dateinput-calendar-header>a{width:2.5em;height:2.5em;position:absolute;left:0;top:0;color:inherit}.btr-dateinput-calendar-header>a:before{content:\'\\25C4\'}.btr-dateinput-calendar-header>a::before{font-size:.85em}.btr-dateinput-calendar-header>a+a{left:auto;right:0}.btr-dateinput-calendar-header>a+a:before{content:\'\\25BA\'}.btr-dateinput-calendar-days{width:100%;table-layout:fixed;border-spacing:0;border-collapse:collapse;color:#555;background:#FFF;border-radius:3px;border:1px solid #CCC;border-bottom:0}.btr-dateinput-calendar-days>thead{border-top:1px solid #EEE;border-bottom:1px solid #CCC;font-size:.75em;background:#DDD;font-weight:700;text-shadow:0 1px 0 #f3f3f3}.btr-dateinput-calendar-body{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transition:-webkit-transform .1s linear;transition:transform .1s linear}.btr-dateinput-calendar-body[aria-hidden=true]{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}.btr-dateinput-calendar-body+.btr-dateinput-calendar-body{position:absolute;bottom:0}.btr-dateinput-calendar-body+.btr-dateinput-calendar-body[aria-hidden=true]{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}.btr-dateinput-calendar-days td,.btr-dateinput-calendar-days th{width:2em;height:2em;line-height:2;padding:0;text-align:center}.btr-dateinput-calendar-past,.btr-dateinput-calendar-future{color:#DDD}.btr-dateinput-calendar-out{color:#CCC;text-shadow:0 1px 0 #FFF}.btr-dateinput-calendar-today{color:#FFF;background-color:#2da4d6;text-shadow:0 1px 0 #555;font-weight:700}.btr-dateinput-calendar-out,.btr-dateinput-calendar-days td:hover{background-color:#f3f3f3;background-color:rgba(0,0,0,.05)}.btr-dateinput-calendar-header>a:hover,td.btr-dateinput-calendar-today:hover{background-color:#207fb1;text-decoration:none}.btr-dateinput-value+input::-moz-placeholder{color:initial}');
    },
    318: function(t, e) {
        ! function() {
            'use strict';

            function t() {}

            function e(n) {
                return this instanceof e ? void(n && (n.__2001004__ = this, this[0] = n, this._ = {
                    handler2001004: [],
                    watcher2001004: {},
                    extension2001004: [],
                    context2001004: {}
                })) : n ? n.__2001004__ || new e(n) : new t();
            }

            function n(t) {
                return e.call(this, t.documentElement);
            }

            function r(t) {
                return 9 > _ ? t.currentStyle : t.ownerDocument.defaultView.getComputedStyle(t);
            }

            function i(t) {
                return t && 1 === t.nodeType ? t.ownerDocument.getElementsByTagName('head')[0].appendChild(t) : void 0;
            }

            function o(t, e, n, r) {
                'string' == typeof e && (e = t[e]);
                try {
                    return e.call(t, n, r);
                } catch (t) {
                    return h.setTimeout(function() {
                        throw t;
                    }, 1), !1;
                }
            }

            function a(r, i, o) {
                var a = o ? e.prototype : n.prototype;
                null == i && (i = function(t, e) {
                    return e;
                }), P(r).forEach(function(e) {
                    var n = [e].concat(r[e]);
                    a[e] = i.apply(null, n), o && (t.prototype[e] = o.apply(null, n));
                });
            }

            function s(t, e) {
                var n = arguments[2];
                void 0 === n && (n = '$Element');
                var r = 'http://chemerisuk.github.io/better-dom/' + n + '.html#' + t,
                    i = 'invalid call `' + n + ('DOM' === n ? '.' : '#') + t + '(';
                i += F.call(e, String).join(', ') + ')`. ', this.message = i + 'Check ' + r + ' to verify the arguments';
            }

            function c(t, e) {
                s.call(this, t, e, 'DOM');
            }

            function u(t, e) {
                s.call(this, t, e, '$Document');
            }

            function l(t, n, r, i, o, a) {
                if ('number' == typeof t) {
                    var s = n.__2001004__;
                    return s ? s[t] : void 0;
                }
                if (9 > _) {
                    var c = i.ownerDocument.documentElement;
                    switch (t) {
                        case 'which':
                            return n.keyCode;
                        case 'button':
                            var u = n.button;
                            return 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0;
                        case 'pageX':
                            return n.clientX + c.scrollLeft - c.clientLeft;
                        case 'pageY':
                            return n.clientY + c.scrollTop - c.clientTop;
                        case 'preventDefault':
                            return function() {
                                return n.returnValue = !1;
                            };
                        case 'stopPropagation':
                            return function() {
                                return n.cancelBubble = !0;
                            };
                    }
                }
                switch (t) {
                    case 'type':
                        return r;
                    case 'defaultPrevented':
                        return 'defaultPrevented' in n ? n.defaultPrevented : n.returnValue === !1;
                    case 'target':
                        return e(o);
                    case 'currentTarget':
                        return e(a);
                    case 'relatedTarget':
                        return e(n.relatedTarget || n[(n.toElement === i ? 'from' : 'to') + 'Element']);
                }
                var l = n[t];
                return 'function' == typeof l ? function() {
                    return l.apply(n, arguments);
                } : l;
            }

            function f(t, e, n, r, i, o) {
                var a = i[0],
                    s = pt[t],
                    c = Q(e, a),
                    u = function(e) {
                        if (e = e || h.event, f.skip !== t && (u._type !== m || e.srcUrn === t)) {
                            var s = e.target || e.srcElement || a.ownerDocument.documentElement,
                                p = c ? c(s) : a,
                                d = r || [];
                            p && (o && i.off(t, n), d = r ? d.map(function(n) {
                                return l(n, e, t, a, s, p);
                            }) : O.call(e.__2001004__ || [0], 1), n.apply(i, d) === !1 && (9 > _ ? e.returnValue = !1 : e.preventDefault()));
                        }
                    };
                return s && (u = s(u, t) || u), 9 > _ && !('on' + (u._type || t) in a) && (u._type = m), u.type = t, u.callback = n, u.selector = e, u;
            }
            var p = Array.prototype.slice;
            e.prototype = {
                toString: function() {
                    return '<' + this[0].tagName.toLowerCase() + '>';
                },
                version: '2.1.4'
            }, t.prototype = new e(), t.prototype.toString = function() {
                return '';
            }, n.prototype = new e(), n.prototype.toString = function() {
                return '#document';
            };
            var h = window,
                d = document,
                g = d.documentElement,
                m = 'dataavailable',
                v = function() {
                    return this;
                },
                y = function() {
                    return !0;
                },
                b = function() {
                    return !1;
                },
                w = ['Webkit', 'O', 'Moz', 'ms'],
                x = h.navigator.userAgent,
                C = h.ScriptEngineMajorVersion,
                _ = C && C(),
                S = ~x.indexOf('Android') && x.indexOf('Chrome') < 0,
                T = h.WebKitAnimationEvent ? '-webkit-' : '',
                E = new n(d),
                D = Array.prototype,
                A = D.every,
                k = D.forEach,
                N = D.filter,
                F = D.map,
                O = D.slice,
                j = Array.isArray,
                P = Object.keys;
            s.prototype = new TypeError(), c.prototype = new TypeError(), u.prototype = new TypeError();
            var I = {
                    '(': 1,
                    ')': 2,
                    '^': 3,
                    '>': 4,
                    '+': 5,
                    '*': 6,
                    '`': 7,
                    '[': 8,
                    '.': 8,
                    '#': 8
                },
                R = /`[^`]*`|\[[^\]]*\]|\.[^()>^+*`[#]+|[^()>^+*`[#.]+|\^+|./g,
                M = /\s*([\w\-]+)(?:=((?:`([^`]*)`)|[^\s]*))?/g,
                L = /(\$+)(?:@(-)?(\d+)?)?/g,
                $ = /\./g,
                B = /\$/g,
                H = {
                    '': ''
                },
                q = function(t, e, n, r) {
                    var i = n && n.indexOf('"') >= 0 ? '\'' : '"';
                    return 'string' == typeof r ? n = r : 'string' != typeof n && (n = e), ' ' + e + '=' + i + n + i;
                },
                U = function(t, e) {
                    return function(n) {
                        var r = e ? n.lastIndexOf('<') : n.indexOf('>');
                        return n.slice(0, r) + t + n.slice(r);
                    };
                },
                W = function(t) {
                    return H[t] || (H[t] = '<' + t + '></' + t + '>');
                },
                z = function(t, e) {
                    var n, r = Array(t);
                    for (n = 0; t > n; ++n) r[n] = e.replace(L, function(e, r, i, o) {
                        var a = (i ? t - n - 1 : n) + (o ? +o : 1);
                        return (r + a).slice(-r.length).replace(B, '0');
                    });
                    return r;
                },
                X = /[&<>"']/g,
                G = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    '\'': '&#039;'
                };
            'area base br col hr img input link meta param command keygen source'.split(' ').forEach(function(t) {
                H[t] = '<' + t + '>';
            }), E.emmet = function(t, e) {
                var n, r, i;
                if ('string' != typeof t) throw new c('emmet', arguments);
                if (e && (t = E.format(t, e)), t in H) return H[t];
                var o = [],
                    a = [];
                i = t.match(R), n = 0, r = i.length;
                for (var s; r > n;) {
                    s = i[n++];
                    var u = s[0],
                        l = I[u];
                    if (l) {
                        if ('(' !== s)
                            for (var f = 0, p = '^' === u ? s.length : 1; p > f; ++f)
                                for (; o[0] !== u && I[o[0]] >= l;) {
                                    var h = o.shift();
                                    if (a.push(h), '^' === u && '>' === h) break;
                                }
                        ')' === s ? o.shift() : (('[' === u || '`' === u) && a.push(s.slice(1, -1)), '.' === u && a.push(s.slice(1).replace($, ' ')), o.unshift(u));
                    } else a.push(s);
                }
                n = r = i = void 0, a = a.concat(o), o = [], n = 0, r = a.length;
                for (var d; r > n;) {
                    if (d = a[n++], d in I) {
                        var g = o.shift(),
                            m = o.shift();
                        switch ('string' == typeof m && (m = [W(m)]), d) {
                            case '.':
                                g = U(' class="' + g + '"');
                                break;
                            case '#':
                                g = U(' id="' + g + '"');
                                break;
                            case '[':
                                g = U(g.replace(M, q));
                                break;
                            case '*':
                                m = z(+g, m.join(''));
                                break;
                            case '`':
                                o.unshift(m), m = [g.replace(X, function(t) {
                                    return G[t];
                                })];
                                break;
                            default:
                                g = 'string' == typeof g ? W(g) : g.join(''), '>' === d ? g = U(g, !0) : m.push(g);
                        }
                        d = 'function' == typeof g ? m.map(g) : m;
                    }
                    o.unshift(d);
                }
                return n = r = void 0, a = 1 === a.length ? W(o[0]) : o[0].join('');
            };
            var V = H;
            a({
                create: '',
                createAll: 'All'
            }, function(t, n) {
                return function(t, r) {
                    var i = this[0].ownerDocument,
                        o = this._.sandbox2001004;
                    o || (o = i.createElement('div'), this._.sandbox2001004 = o);
                    var a, s;
                    if (t && t in V) a = i.createElement(t), n && (a = [new e(a)]);
                    else
                        for (t = t.trim(), t = '<' === t[0] && '>' === t[t.length - 1] ? r ? E.format(t, r) : t : E.emmet(t, r), o.innerHTML = t, a = n ? [] : null; s = o.firstChild;)
                            if (o.removeChild(s), 1 === s.nodeType) {
                                if (!n) {
                                    a = s;
                                    break;
                                }
                                a.push(new e(s));
                            } return n ? a : e(a);
                };
            });
            var Y, K = /^(\w*)(?:#([\w\-]+))?(?:\[([\w\-\=]+)\])?(?:\.([\w\-]+))?$/,
                J = w.concat(null).map(function(t) {
                    return (t ? t.toLowerCase() + 'M' : 'm') + 'atchesSelector';
                }).reduceRight(function(t, e) {
                    return t || e in g && e;
                }, null),
                Q = function(t, e) {
                    if ('string' != typeof t) return null;
                    var n = K.exec(t);
                    return n && (n[1] && (n[1] = n[1].toLowerCase()), n[3] && (n[3] = n[3].split('=')), n[4] && (n[4] = ' ' + n[4] + ' ')),
                        function(r) {
                            var i, o, a, s;
                            for (n || J || (s = (e || r.ownerDocument).querySelectorAll(t)); r && 1 === r.nodeType; r = r.parentNode) {
                                if (n) a = !(n[1] && r.nodeName.toLowerCase() !== n[1] || n[2] && r.id !== n[2] || n[3] && (n[3][1] ? r.getAttribute(n[3][0]) !== n[3][1] : !r.hasAttribute(n[3][0])) || n[4] && !((' ' + r.className + ' ').indexOf(n[4]) >= 0));
                                else if (J) a = r[J](t);
                                else {
                                    i = 0, o = s.length;
                                    for (var c; o > i;)
                                        if (c = s[i++], c === r) return c;
                                    i = o = void 0;
                                }
                                if (a || !e || r === e) break;
                            }
                            return a && r;
                        };
                },
                Z = /^(?:on|do)[A-Z]/,
                tt = function(t, n, r, i) {
                    var a = r.hasOwnProperty('constructor') && r.constructor,
                        s = Q(t);
                    return function(t, c) {
                        var u = e(t);
                        if (!~u._.extension2001004.indexOf(i) && s(t) && (u._.extension2001004.push(i), c === !0 || n(u) !== !1)) {
                            var l = Object.keys(r).filter(function(t) {
                                var e = r[t];
                                return Z.exec(t) ? (u[t] = function() {
                                    return e.apply(u, arguments);
                                }, !c) : 'constructor' !== t ? (u[t] = e, !c && '_' === t[0]) : void 0;
                            });
                            a && o(u, a), l.forEach(function(t) {
                                delete u[t];
                            });
                        }
                    };
                };
            if (10 > _) {
                var et = N.call(d.scripts, function(t) {
                    return t.src.indexOf('better-dom-legacy.js') >= 0;
                });
                if (et.length < 1) throw new Error('In order to use live extensions in IE < 10 you have to include extra files. See https://github.com/chemerisuk/better-dom#notes-about-old-ies for details.');
                Y = '-ms-behavior:url(' + et[0].src.replace('.js', '.htc') + ') !important';
            } else Y = T + 'animation-name:DOM2001004 !important;', Y += T + 'animation-duration:1ms !important';
            a({
                extend: function(t, e, n) {
                    var r = this;
                    if (1 === arguments.length) return a(t);
                    if ('*' === t) return a(e, null, function() {
                        return v;
                    });
                    if (2 === arguments.length && (n = e, e = !0), 'boolean' == typeof e && (e = e ? y : b), 'function' == typeof n && (n = {
                            constructor: n
                        }), !n || 'object' != typeof n || 'function' != typeof e) throw new u('extend', arguments);
                    var i = this[0],
                        o = this._.mappings2001004;
                    o || (this._.mappings2001004 = o = [], 10 > _ ? i.attachEvent('on' + m, function() {
                        var t = h.event;
                        t.srcUrn === m && o.forEach(function(e) {
                            e(t.srcElement);
                        });
                    }) : (this.importStyles('@' + T + 'keyframes DOM2001004', 'from {opacity:.99} to {opacity:1}'), i.addEventListener(T ? 'webkitAnimationStart' : 'animationstart', function(t) {
                        'DOM2001004' === t.animationName && (o.forEach(function(e) {
                            e(t.target);
                        }), t.stopImmediatePropagation());
                    }, !0)));
                    var s = tt(t, e, n, o.length);
                    o.push(s), h.setTimeout(function() {
                        k.call(i.ownerDocument.querySelectorAll(t), s), r.importStyles(t, Y);
                    }, 0);
                }
            }), a({
                importScripts: function() {
                    var t = p.call(arguments, 0),
                        e = this[0].ownerDocument,
                        n = function() {
                            var r, o = t.shift(),
                                a = typeof o;
                            if ('string' === a) r = e.createElement('script'), r.src = o, r.onload = n, r.async = !0, i(r);
                            else if ('function' === a) o();
                            else if (o) throw new u('importScripts', arguments);
                        };
                    n();
                }
            }), a({
                importStyles: function(t, e) {
                    var n = this._.styles2001004;
                    if (!n) {
                        var r = this[0].ownerDocument,
                            o = i(r.createElement('style'));
                        n = o.sheet || o.styleSheet, this._.styles2001004 = n;
                    }
                    if ('string' != typeof t || 'string' != typeof e) throw new u('importStyles', arguments);
                    t.split(',').forEach(function(t) {
                        try {
                            n.cssRules ? n.insertRule(t + '{' + e + '}', n.cssRules.length) : '@' !== t[0] ? n.addRule(t, e) : n.cssText += t + '{' + e + '}';
                        } catch (t) {}
                    });
                }
            }), a({
                mock: function(e, n) {
                    if (!e) return new t();
                    var r = this.create(e, n),
                        i = this._.mappings2001004,
                        o = function(t) {
                            i.forEach(function(e) {
                                e(t, !0);
                            }), k.call(t.children, o);
                        };
                    return i && i.length && o(r[0]), r;
                }
            }), a({
                child: !1,
                children: !0
            }, function(t, n) {
                return function(r) {
                    if (n) {
                        if (r && 'string' != typeof r) throw new s(t, arguments);
                    } else if (r && 'number' != typeof r) throw new s(t, arguments);
                    var i = this[0],
                        o = Q(r),
                        a = i.children;
                    return 9 > _ && (a = N.call(a, function(t) {
                        return 1 === t.nodeType;
                    })), n ? (o && (a = N.call(a, o)), F.call(a, e)) : (0 > r && (r = a.length + r), e(a[r]));
                };
            }, function(e, n) {
                return function() {
                    return n ? [] : new t();
                };
            });
            var nt = /[\n\t\r]/g;
            a({
                hasClass: [b, 'contains', function(t, e) {
                    return (' ' + t[0].className + ' ').replace(nt, ' ').indexOf(' ' + e + ' ') >= 0;
                }],
                addClass: [v, 'add', function(t, e) {
                    t.hasClass(e) || (t[0].className += ' ' + e);
                }],
                removeClass: [v, 'remove', function(t, e) {
                    t[0].className = (' ' + t[0].className + ' ').replace(nt, ' ').replace(' ' + e + ' ', ' ').trim();
                }],
                toggleClass: [b, 'toggle', function(t, e) {
                    var n = t.hasClass(e);
                    return n ? t.removeClass(e) : t[0].className += ' ' + e, !n;
                }]
            }, function(t, e, n, r) {
                return g.classList && (r = function(t, e) {
                    return t[0].classList[n](e);
                }), e === b ? function(e, i) {
                    if ('boolean' == typeof i && 'toggle' === n) return this[i ? 'addClass' : 'removeClass'](e), i;
                    if ('string' != typeof e) throw new s(t, arguments);
                    return r(this, e);
                } : function() {
                    var e, n, i = arguments;
                    e = 0, n = i.length;
                    for (var o; n > e;) {
                        if (o = i[e++], 'string' != typeof o) throw new s(t, arguments);
                        r(this, o);
                    }
                    return e = n = void 0, this;
                };
            }, function(t, e) {
                return e;
            }), a({
                clone: function(t) {
                    if ('boolean' != typeof t) throw new s('clone', arguments);
                    var n, r = this[0];
                    return 9 > _ ? (n = E.create(r.outerHTML), t || n.set('')) : n = new e(r.cloneNode(t)), n;
                }
            }, null, function() {
                return function() {
                    return new t();
                };
            }), a({
                contains: function(t) {
                    var n = this[0];
                    if (t instanceof e) {
                        var r = t[0];
                        return r === n || (n.contains ? n.contains(r) : 16 & n.compareDocumentPosition(r));
                    }
                    throw new s('contains', arguments);
                }
            }, null, function() {
                return b;
            });
            var rt = /\-./g,
                it = {
                    get: {},
                    set: {},
                    find: function(t, e) {
                        var n = t.replace(rt, function(t) {
                            return t[1].toUpperCase();
                        });
                        return n in e || (n = w.map(function(t) {
                            return t + n[0].toUpperCase() + n.slice(1);
                        }).filter(function(t) {
                            return t in e;
                        })[0]), this.get[t] = this.set[t] = n;
                    }
                },
                ot = ['Top', 'Right', 'Bottom', 'Left'],
                at = {
                    font: ['fontStyle', 'fontSize', '/', 'lineHeight', 'fontFamily'],
                    padding: ot.map(function(t) {
                        return 'padding' + t;
                    }),
                    margin: ot.map(function(t) {
                        return 'margin' + t;
                    }),
                    'border-width': ot.map(function(t) {
                        return 'border' + t + 'Width';
                    }),
                    'border-style': ot.map(function(t) {
                        return 'border' + t + 'Style';
                    })
                };
            'float fill-opacity font-weight line-height opacity orphans widows z-index zoom'.split(' ').forEach(function(t) {
                var e = t.replace(rt, function(t) {
                    return t[1].toUpperCase();
                });
                'float' === t ? (e = 'cssFloat' in g.style ? 'cssFloat' : 'styleFloat', it.get[t] = it.set[t] = e) : (it.get[t] = e, it.set[t] = function(t, n) {
                    n[e] = t.toString();
                });
            }), P(at).forEach(function(t) {
                var e = at[t];
                it.get[t] = function(t) {
                    var n = [],
                        r = function(e, r) {
                            return n.push('/' === e ? e : t[e]), !n[r];
                        };
                    return e.some(r) ? '' : n.join(' ');
                }, it.set[t] = function(n, r) {
                    n && 'cssText' in r ? r.cssText += ';' + t + ':' + n : e.forEach(function(t) {
                        return r[t] = 'number' == typeof n ? n + 'px' : n.toString();
                    });
                };
            });
            var st = it;
            a({
                css: function(t, e) {
                    var n, i = this,
                        o = arguments.length,
                        a = this[0],
                        c = a.style;
                    if (1 === o && ('string' == typeof t || j(t))) {
                        var u = function(t) {
                            var e = st.get[t] || st.find(t, c),
                                i = 'function' == typeof e ? e(c) : c[e];
                            return i || (n || (n = r(a)), i = 'function' == typeof e ? e(n) : n[e]), i;
                        };
                        return 'string' == typeof t ? u(t) : t.map(u).reduce(function(e, n, r) {
                            return e[t[r]] = n, e;
                        }, {});
                    }
                    if (2 === o && 'string' == typeof t) {
                        var l = st.set[t] || st.find(t, c);
                        'function' == typeof e && (e = e(this)), null == e && (e = ''), 'function' == typeof l ? l(e, c) : c[l] = 'number' == typeof e ? e + 'px' : e.toString();
                    } else {
                        if (1 !== o || !t || 'object' != typeof t) throw new s('css', arguments);
                        P(t).forEach(function(e) {
                            i.css(e, t[e]);
                        });
                    }
                    return this;
                }
            }, null, function() {
                return function(t) {
                    return 1 === arguments.length && j(t) ? {} : 1 !== arguments.length || 'string' != typeof t ? this : void 0;
                };
            });
            var ct = 9 > _ ? 'toUpperCase' : 'toLowerCase';
            a({
                define: function(t, e, n) {
                    var r = this,
                        i = this[0];
                    if ('string' != typeof t || 'function' != typeof e || 'function' != typeof n) throw new s('define', arguments);
                    var o = t[ct](),
                        a = i.setAttribute,
                        c = i.removeAttribute;
                    if (9 > _) {
                        var u = i.getAttribute(t);
                        null !== u && (i[o] = u);
                    }
                    return Object.defineProperty(i, t, {
                        get: function() {
                            var t = i.getAttribute(o, 1);
                            return e.call(r, t);
                        },
                        set: function(t) {
                            var e = n.call(r, t);
                            null == e ? c.call(i, o, 1) : a.call(i, o, e, 1);
                        }
                    }), i.setAttribute = function(t, n, s) {
                        o === t[ct]() ? i[t] = e.call(r, n) : a.call(i, t, n, s);
                    }, i.removeAttribute = function(t, n) {
                        o === t[ct]() ? i[t] = e.call(r, null) : c.call(i, t, n);
                    }, this;
                }
            }, null, function() {
                return v;
            }), a({
                empty: function() {
                    return this.set('');
                }
            }, null, function() {
                return v;
            });
            var ut = d.getElementsByClassName ? /^(?:(\w+)|\.([\w\-]+))$/ : /^(?:(\w+))$/,
                lt = /'|\\/g;
            a({
                find: '',
                findAll: 'All'
            }, function(t, n) {
                return function(r) {
                    if ('string' != typeof r) throw new s(t, arguments);
                    var i, a, c, u, l = this[0],
                        f = ut.exec(r);
                    return f ? (i = f[1] ? l.getElementsByTagName(r) : l.getElementsByClassName(f[2]), i && !n && (i = i[0])) : (a = !0, u = l, l !== l.ownerDocument.documentElement && ((a = l.getAttribute('id')) ? c = a.replace(lt, '\\$&') : (c = 'DOM2001004', l.setAttribute('id', c)), c = '[id=\'' + c + '\'] ', r = c + r.split(',').join(',' + c)), i = o(u, 'querySelector' + n, r), a || l.removeAttribute('id')), n ? F.call(i, e) : e(i);
                };
            }, function(e, n) {
                return function() {
                    return n ? [] : new t();
                };
            });
            var ft = {};
            'onfocusin' in d.documentElement ? (ft.focus = function(t) {
                t._type = 'focusin';
            }, ft.blur = function(t) {
                t._type = 'focusout';
            }) : ft.focus = ft.blur = function(t) {
                t.capturing = !0;
            }, d.createElement('input').validity && (ft.invalid = function(t) {
                t.capturing = !0;
            }), 9 > _ && ['submit', 'change', 'reset'].forEach(function(t) {
                ft[t] = function(t) {
                    t._type = '_';
                };
            });
            var pt = ft,
                ht = f;
            a({
                fire: function(t) {
                    var e, n, r, i = this[0];
                    if ('string' != typeof t) throw new s('fire', arguments);
                    var a = pt[t],
                        c = {};
                    return a && (c = a(c) || c), n = c._type || t, 9 > _ ? (e = i.ownerDocument.createEventObject(), e.__2001004__ = arguments, 'on' + n in i || (n = m), n === m && (e.srcUrn = t), i.fireEvent('on' + n, e), r = e.returnValue !== !1) : (e = i.ownerDocument.createEvent('HTMLEvents'), e.__2001004__ = arguments, e.initEvent(n, !0, !0), r = i.dispatchEvent(e)), r && i[t] && (ht.skip = t, o(i, t), ht.skip = null), r;
                }
            }, null, function() {
                return y;
            });
            var dt = {
                get: {},
                set: {}
            };
            'tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable'.split(' ').forEach(function(t) {
                dt.get[t.toLowerCase()] = function(e) {
                    return e[t];
                };
            }), dt.get.style = function(t) {
                return t.style.cssText;
            }, dt.set.style = function(t, e) {
                t.style.cssText = e;
            }, dt.get.title = function(t) {
                var e = t.ownerDocument;
                return (t === e.documentElement ? e : t).title;
            }, dt.set.title = function(t, e) {
                var n = t.ownerDocument;
                (t === n.documentElement ? n : t).title = e;
            }, dt.get.type = function(t) {
                return t.getAttribute('type') || t.type;
            }, 9 > _ && (dt.get.textContent = function(t) {
                return t.innerText;
            }, dt.set.textContent = function(t, e) {
                t.innerText = e;
            }, dt.set.innerHTML = function(t, e) {
                try {
                    t.innerHTML = e;
                } catch (i) {
                    var n, r = t.ownerDocument.createElement('div');
                    for (t.innerText = '', r.innerHTML = e; n = r.firstChild;) t.appendChild(n);
                }
            });
            var gt = dt,
                mt = /[A-Z]/g,
                vt = function(t, e) {
                    e = e.replace(mt, function(t) {
                        return '-' + t.toLowerCase();
                    });
                    var n = t.getAttribute('data-' + e);
                    if (null != n && '{' === n[0] && '}' === n[n.length - 1]) try {
                        n = JSON.parse(n);
                    } catch (t) {}
                    return n;
                };
            a({
                get: function(t) {
                    var e = this,
                        n = this[0],
                        r = gt.get[t];
                    if (r) return r(n, t);
                    if ('string' == typeof t) {
                        if (t in n) return n[t];
                        if ('_' !== t[0]) return n.getAttribute(t);
                        var i = t.slice(1),
                            o = this._;
                        return i in o || (o[i] = vt(n, i)), o[i];
                    }
                    if (j(t)) return t.reduce(function(t, n) {
                        return t[n] = e.get(n), t;
                    }, {});
                    if (void 0 === t) return this.value();
                    throw new s('get', arguments);
                }
            }, null, function() {
                return function() {};
            }), a({
                after: ['afterend', !0, function(t, e) {
                    t.parentNode.insertBefore(e, t.nextSibling);
                }],
                before: ['beforebegin', !0, function(t, e) {
                    t.parentNode.insertBefore(e, t);
                }],
                prepend: ['afterbegin', !1, function(t, e) {
                    t.insertBefore(e, t.firstChild);
                }],
                append: ['beforeend', !1, function(t, e) {
                    t.appendChild(e);
                }],
                replace: ['', !0, function(t, e) {
                    t.parentNode.replaceChild(e, t);
                }],
                remove: ['', !0, function(t) {
                    t.parentNode.removeChild(t);
                }]
            }, function(t, n, r, i) {
                return function() {
                    var t = p.call(arguments, 0),
                        o = this,
                        a = this[0];
                    if (r && !a.parentNode) return this;
                    var s = n ? '' : a.ownerDocument.createDocumentFragment();
                    return t.forEach(function(t) {
                        'function' == typeof t && (t = t(o)), 'string' == typeof t ? 'string' == typeof s ? s += t.trim() : t = E.createAll(t) : t instanceof e && (t = [t]), j(t) && ('string' == typeof s && (t = E.createAll(s).concat(t), s = a.ownerDocument.createDocumentFragment()), t.forEach(function(t) {
                            s.appendChild(t[0]);
                        }));
                    }), 'string' == typeof s ? a.insertAdjacentHTML(n, s) : i(a, s), this;
                };
            }, function() {
                return v;
            }), a({
                map: function(t, e) {
                    if ('function' != typeof t) throw new s('map', arguments);
                    return [t.call(e, this)];
                }
            }, null, function() {
                return function() {
                    return [];
                };
            });
            var yt = function(t) {
                    var e = r(t);
                    return 'hidden' === e.visibility || 'none' === e.display;
                },
                bt = {
                    ':focus': function(t) {
                        return t === t.ownerDocument.activeElement;
                    },
                    ':visible': function(t) {
                        return !yt(t);
                    },
                    ':hidden': yt
                };
            a({
                matches: function(t) {
                    if (!t || 'string' != typeof t) throw new s('matches', arguments);
                    var e = bt[t] || Q(t);
                    return !!e(this[0]);
                }
            }, null, function() {
                return b;
            }), a({
                off: function(t, e, n) {
                    if ('string' != typeof t) throw new s('off', arguments);
                    void 0 === n && (n = e, e = void 0);
                    var r = this[0];
                    return this._.handler2001004 = this._.handler2001004.filter(function(i) {
                        var o = t !== i.type;
                        return o = o || e && e !== i.selector, !!(o = o || n && n !== i.callback) || (t = i._type || i.type, void(9 > _ ? r.detachEvent('on' + t, i) : r.removeEventListener(t, i, !!i.capturing)));
                    }), this;
                }
            }, null, function() {
                return v;
            }), a({
                offset: function() {
                    var t = this[0],
                        e = t.ownerDocument.documentElement,
                        n = e.clientTop,
                        r = e.clientLeft,
                        i = h.pageYOffset || e.scrollTop,
                        o = h.pageXOffset || e.scrollLeft,
                        a = t.getBoundingClientRect();
                    return {
                        top: a.top + i - n,
                        left: a.left + o - r,
                        right: a.right + o - r,
                        bottom: a.bottom + i - n,
                        width: a.right - a.left,
                        height: a.bottom - a.top
                    };
                }
            }, null, function() {
                return function() {
                    return {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: 0,
                        height: 0
                    };
                };
            }), a({
                on: !1,
                once: !0
            }, function(t, e) {
                return function(n, r, i, o) {
                    var a = this;
                    if ('string' == typeof n) {
                        if ('function' == typeof i && (o = i, 'string' == typeof r ? i = null : (i = r, r = null)), 'function' == typeof r && (o = r, r = null, i = null), 'function' != typeof o) throw new s(t, arguments);
                        var c = this[0],
                            u = ht(n, r, o, i, this, e);
                        9 > _ ? c.attachEvent('on' + (u._type || n), u) : c.addEventListener(u._type || n, u, !!u.capturing), this._.handler2001004.push(u);
                    } else {
                        if ('object' != typeof n) throw new s(t, arguments);
                        j(n) ? n.forEach(function(e) {
                            a[t](e, r, i, o);
                        }) : P(n).forEach(function(e) {
                            a[t](e, n[e]);
                        });
                    }
                    return this;
                };
            }, function() {
                return v;
            }), a({
                set: function(t, e) {
                    var n, r = this,
                        i = this[0],
                        a = gt.set[t],
                        c = this._.watcher2001004[t];
                    if (c && (n = this.get(t)), 1 === arguments.length && 'object' != typeof t) return this.value(t);
                    if ('string' == typeof t) '_' === t[0] ? this._[t.slice(1)] = e : ('function' == typeof e && (e = e(this)), a ? a(i, e) : null == e ? i.removeAttribute(t) : t in i ? i[t] = e : i.setAttribute(t, e), (9 > _ || S) && (i.className = i.className));
                    else if (j(t)) t.forEach(function(t) {
                        r.set(t, e);
                    });
                    else {
                        if ('object' != typeof t) throw new s('set', arguments);
                        P(t).forEach(function(e) {
                            r.set(e, t[e]);
                        });
                    }
                    return c && n !== e && c.forEach(function(t) {
                        o(r, t, e, n);
                    }), this;
                }
            }, null, function() {
                return v;
            }), a({
                next: 'nextSibling',
                prev: 'previousSibling',
                nextAll: 'nextSibling',
                prevAll: 'previousSibling',
                closest: 'parentNode'
            }, function(t, n) {
                return function(r) {
                    if (r && 'string' != typeof r) throw new s(t, arguments);
                    var i = 'All' === t.slice(-3),
                        o = Q(r),
                        a = i ? [] : null,
                        c = this[0];
                    for (o && 'closest' === t || (c = c[n]); c; c = c[n])
                        if (1 === c.nodeType && (!o || o(c))) {
                            if (!i) break;
                            a.push(c);
                        }
                    return i ? F.call(a, e) : e(c);
                };
            }, function(e) {
                return function() {
                    return 'All' === e.slice(-3) ? [] : new t();
                };
            }), a({
                value: function(t) {
                    var n, r = this[0];
                    if (void 0 === t) {
                        switch (r.tagName) {
                            case 'SELECT':
                                return ~r.selectedIndex ? r.options[r.selectedIndex].value : '';
                            case 'OPTION':
                                n = r.hasAttribute('value') ? 'value' : 'text';
                                break;
                            default:
                                n = r.type && 'value' in r ? 'value' : 'innerHTML';
                        }
                        return r[n];
                    }
                    if (t instanceof e || Array.isArray(t)) return this.set('').append(t);
                    switch ('function' == typeof t && (t = t(this)), 'string' != typeof t && (t = null == t ? '' : String(t)), r.tagName) {
                        case 'INPUT':
                        case 'OPTION':
                            n = 'value';
                            break;
                        case 'SELECT':
                            return A.call(r.options, function(e) {
                                return !(e.selected = e.value === t);
                            }) && (r.selectedIndex = -1), this;
                        case 'TEXTAREA':
                            n = 9 > _ ? 'innerText' : 'value';
                            break;
                        default:
                            n = 'innerHTML';
                    }
                    return this.set(n, t);
                }
            }, null, function() {
                return function() {
                    return arguments.length ? this : void 0;
                };
            });
            var wt = ['timing-function', 'property', 'duration', 'delay'].map(function(t) {
                    return 'transition-' + t;
                }),
                xt = function(t) {
                    var e = parseFloat(t) || 0;
                    return e && 'ms' !== t.slice(-2) ? 1000 * e : e;
                },
                Ct = function(t) {
                    var e = t[3],
                        n = t[2];
                    return Math.max.apply(Math, n.map(function(t, n) {
                        return xt(t) + (xt(e[n]) || 0);
                    }));
                };
            wt.concat('animation-duration').forEach(function(t) {
                st.find(t, g.style);
            });
            var St = function(t, e, n, r, i) {
                    var o, a;
                    if (S || 10 > _) return null;
                    if (n) {
                        if (a = xt(e[st.get['animation-duration']]), !a) return;
                        o = [T + 'animation-direction:' + (r ? 'normal' : 'reverse'), T + 'animation-name:' + n, 'visibility:inherit'];
                    } else {
                        var s = wt.map(function(t, n) {
                            return e[st.get[t]].split(n ? ', ' : /, (?!\d)/);
                        });
                        if (a = Ct(s), !a) return;
                        if (s[1].indexOf('all') < 0) {
                            var c = s[1].indexOf('visibility');
                            0 > c && (c = s[2].indexOf('0s')), 0 > c && (c = s[1].length), s[0][c] = 'linear', s[1][c] = 'visibility', s[r ? 2 : 3][c] = '0s', s[r ? 3 : 2][c] = a + 'ms';
                        }
                        o = s.map(function(t, e) {
                            for (var n = 0, r = t.length; r > n; ++n) t[n] = t[n] || t[n - 1] || 'initial';
                            return T + wt[e] + ':' + t.join(', ');
                        }), o.push('visibility:' + (r ? 'hidden' : 'inherit'), 'will-change:' + s[1].join(', '));
                    }
                    return {
                        cssText: o.join(';'),
                        initialCssText: t.style.cssText,
                        handleEvent: function(e) {
                            if (e.target === t) {
                                if (n) {
                                    if (e.animationName !== n) return;
                                } else if ('visibility' !== e.propertyName) return;
                                e.stopPropagation(), i();
                            }
                        }
                    };
                },
                Tt = T ? 'webkitTransitionEnd' : 'transitionend',
                Et = T ? 'webkitAnimationEnd' : 'animationend';
            a({
                show: !1,
                hide: !0,
                toggle: null
            }, function(t, e) {
                return function(n, i) {
                    var o = this;
                    if ('string' != typeof n && (i = n, n = null), i && 'function' != typeof i) throw new s(t, arguments);
                    var a = this[0],
                        c = a.style,
                        u = r(a),
                        l = e,
                        f = this._.frame2001004,
                        p = function() {
                            h ? (a.removeEventListener(d, h, !0), c.cssText = h.initialCssText) : o.set('aria-hidden', String(l)), c.visibility = l ? 'hidden' : 'inherit', o._.frame2001004 = null, i && i(o);
                        };
                    if ('boolean' != typeof l && (l = 'hidden' !== u.visibility), f && E.cancelFrame(f), a.ownerDocument.documentElement.contains(a)) {
                        var h = St(a, u, n, l, p),
                            d = n ? Et : Tt;
                        this._.frame2001004 = E.requestFrame(h ? function() {
                            a.addEventListener(d, h, !0), c.cssText = h.initialCssText + h.cssText, o.set('aria-hidden', String(l));
                        } : p);
                    } else p();
                    return this;
                };
            }, function() {
                return v;
            }), a({
                watch: function(t, e) {
                    var n = this._.watcher2001004;
                    return n[t] || (n[t] = []), n[t].push(e), this;
                },
                unwatch: function(t, e) {
                    var n = this._.watcher2001004;
                    return n[t] && (n[t] = n[t].filter(function(t) {
                        return t !== e;
                    })), this;
                }
            }, null, function() {
                return v;
            }), E.constructor = function(t) {
                var r = t && t.nodeType,
                    i = 9 === r ? n : e;
                return i(1 === r || 9 === r ? t : null);
            };
            var Dt = /\{([\w\-]+)\}/g;
            E.format = function(t, e) {
                return 'string' != typeof t && (t = String(t)), e && 'object' == typeof e || (e = {}), t.replace(Dt, function(t, n, r) {
                    return n in e && (t = e[n], 'function' == typeof t && (t = t(r)), t = String(t)), t;
                });
            };
            var At = h.requestAnimationFrame,
                kt = h.cancelAnimationFrame,
                _t = 0;
            At && kt || w.forEach(function(t) {
                t = t.toLowerCase(), At = At || h[t + 'RequestAnimationFrame'], kt = kt || h[t + 'CancelAnimationFrame'];
            }), E.requestFrame = function(t) {
                if (At) return At.call(h, t);
                var e = Date.now(),
                    n = Math.max(0, 16 - (e - _t));
                return _t = e + n, h.setTimeout(function() {
                    t(e + n);
                }, n);
            }, E.cancelFrame = function(t) {
                kt ? kt.call(h, t) : h.clearTimeout(t);
            };
            var Nt = h.DOM;
            E.noConflict = function() {
                return h.DOM === E && (h.DOM = Nt), E;
            }, h.DOM = E;
        }();
    },
    319: function(t, e) {
        ! function(t) {
            'use strict';

            function e(e, i) {
                var o = this;
                r.forEach(function(r, a) {
                    var s = n[a][e];
                    s && (i && (s = t.format(s, i)), o[r] = s);
                }), this._ = i ? t.format(e, i) : e;
            }
            var n = [],
                r = [];
            t.importStrings = function(e, i, o) {
                if ('string' != typeof e) throw new TypeError('lang argument must be a string');
                var a = r.indexOf(e),
                    s = n[a];
                a === -1 && (a = r.push(e) - 1, n[a] = s = {}, t.importStyles('[data-l10n="' + e + '"]', 'display:none'), t.importStyles(':lang(' + e + (') > [data-l10n="' + e) + '"]', 'display:inline !important'), t.importStyles(':lang(' + e + (') > [data-l10n="' + e) + '"] ~ [data-l10n]', 'display:none')), 'string' == typeof i ? s[i] = o : Object.keys(i).forEach(function(t) {
                    s[t] = i[t];
                });
            }, t.extend('*', {
                l10n: function(t, n) {
                    return this.set(new e(t, n).toHTMLString().slice(6, -7));
                }
            }), t.__ = function(t, n) {
                return Array.isArray(t) ? t.map(function(t) {
                    return new e(t, n);
                }) : new e(t, n);
            }, e.prototype = new String(), e.prototype.constructor = e, e.prototype.toString = e.prototype.valueOf = function() {
                return this[t.get('lang')] || this._;
            }, e.prototype.toLocaleString = function(t) {
                return t ? this[t] || this._ : this.toString();
            }, e.prototype.toHTMLString = function() {
                var e = this,
                    n = Object.keys(this).sort(function(t) {
                        return '_' === t ? 1 : -1;
                    });
                return t.emmet('span>' + n.map(function(t) {
                    return 'span[data-l10n=`' + t + '`]>`' + e[t] + '`';
                }).join('^'));
            };
        }(window.DOM);
    },
    439: function(t, e, n) {
        var r = n(2);
        t.exports = function() {
            return new r.Template({
                code: function(c, p, i) {
                    var t = this;
                    t.b(i = i || "");
                    t.b("<div class=\"Callout Callout--danger\" data-error-count=\"");
                    t.b(t.v(t.f("errorCount", c, p, 0)));
                    t.b("\">");
                    t.b("\n" + i);
                    if (t.s(t.f("errorCount", c, p, 1), c, p, 0, 120, 401, "{{ }}")) {
                        t.rs(c, p, function(c, p, t) {
                            t.b("    <h4>");
                            t.b("\n" + i);
                            t.b("      ");
                            if (t.s(t.f("errorCount_one", c, p, 1), c, p, 0, 155, 175, "{{ }}")) {
                                t.rs(c, p, function(c, p, t) {
                                    t.b(t.v(t.f("errorCount", c, p, 0)));
                                    t.b(" error");
                                });
                                c.pop();
                            }
                            if (t.s(t.f("errorCount_other", c, p, 1), c, p, 0, 215, 236, "{{ }}")) {
                                t.rs(c, p, function(c, p, t) {
                                    t.b(t.v(t.f("errorCount", c, p, 0)));
                                    t.b(" errors");
                                });
                                c.pop();
                            }
                            t.b("\n" + i);
                            t.b("    </h4>");
                            t.b("\n" + i);
                            t.b("    <p>This file has errors; see the list below. Please fix these in your spreadsheet, then re-upload and preview to validate.</p>");
                            t.b("\n" + i);
                        });
                        c.pop();
                    }
                    if (!t.s(t.f("errorCount", c, p, 1), c, p, 1, 0, 0, "")) {
                        t.b("    <h4>Something went wrong</h4>");
                        t.b("\n" + i);
                        t.b("    <p>");
                        t.b("\n" + i);
                        t.b("      ");
                        t.b("\n" + i);
                        t.b("        An unexpected error has occurred.");
                        t.b("\n" + i);
                        if (t.s(t.f("unexpectedErrorCount", c, p, 1), c, p, 0, 559, 734, "{{ }}")) {
                            t.rs(c, p, function(c, p, t) {
                                t.b("          Affected rows:");
                                t.b("\n" + i);
                                t.b("          <ul>");
                                t.b("\n" + i);
                                if (t.s(t.f("unexpectedErrors", c, p, 1), c, p, 0, 631, 688, "{{ }}")) {
                                    t.rs(c, p, function(c, p, t) {
                                        t.b("            <li>");
                                        t.b(t.v(t.f("firstRow", c, p, 0)));
                                        t.b("—");
                                        t.b(t.v(t.f("lastRow", c, p, 0)));
                                        t.b("</li>");
                                        t.b("\n" + i);
                                    });
                                    c.pop();
                                }
                                t.b("          </ul>");
                                t.b("\n" + i);
                            });
                            c.pop();
                        }
                        t.b("      ");
                        t.b("\n" + i);
                        t.b("    </p>");
                        t.b("\n" + i);
                        t.b("    <p>");
                        t.b("\n" + i);
                        t.b("      Please <a href=\".\">refresh the page</a> to see whether your changes went through.");
                        t.b("\n" + i);
                        t.b("    </p>");
                        t.b("\n" + i);
                    };
                    t.b("  <a class=\"PowerEditorUploader-technicalDetailsCTA\" href=\"#\">Technical Details</a>");
                    t.b("\n" + i);
                    t.b("  <p class=\"PowerEditorUploader-technicalDetailsMessage hidden\"><b>Error IDs:</b> ");
                    t.b("\n" + i);
                    t.b("    <span class=\"PowerEditorUploader-transactionIds\"></span>");
                    t.b("\n" + i);
                    t.b("  </p>");
                    t.b("\n" + i);
                    t.b("</div>");
                    return t.fl();
                },
                partials: {},
                subs: {}
            }, "<div class=\"Callout Callout--danger\" data-error-count=\"{{errorCount}}\">\n  {{! TODO(REVCM-7613) i18n }}\n  {{#errorCount}}\n    <h4>\n      {{#errorCount_one}}{{errorCount}} error{{/errorCount_one}}{{#errorCount_other}}{{errorCount}} errors{{/errorCount_other}}\n    </h4>\n    <p>This file has errors; see the list below. Please fix these in your spreadsheet, then re-upload and preview to validate.</p>\n  {{/errorCount}}\n  {{^errorCount}}\n    <h4>Something went wrong</h4>\n    <p>\n      \n        An unexpected error has occurred.\n        {{#unexpectedErrorCount}}\n          Affected rows:\n          <ul>\n          {{#unexpectedErrors}}\n            <li>{{firstRow}}—{{lastRow}}</li>\n          {{/unexpectedErrors}}\n          </ul>\n        {{/unexpectedErrorCount}}\n      \n    </p>\n    <p>\n      Please <a href=\".\">refresh the page</a> to see whether your changes went through.\n    </p>\n  {{/errorCount}}\n  <a class=\"PowerEditorUploader-technicalDetailsCTA\" href=\"#\">Technical Details</a>\n  <p class=\"PowerEditorUploader-technicalDetailsMessage hidden\"><b>Error IDs:</b> \n    <span class=\"PowerEditorUploader-transactionIds\"></span>\n  </p>\n</div>", r);
        }();
    },
    440: function(t, e, n) {
        var r = n(2);
        t.exports = function() {
            return new r.Template({
                code: function(c, p, i) {
                    var t = this;
                    t.b(i = i || "");
                    t.b("<div class=\"PowerEditorUploader-statusPending\">");
                    t.b("\n" + i);
                    t.b("  <span class=\"Icon Icon--loadingMedium\"></span>");
                    t.b("\n" + i);
                    if (t.s(t.f("statusMessage", c, p, 1), c, p, 0, 117, 177, "{{ }}")) {
                        t.rs(c, p, function(c, p, t) {
                            t.b("    <span class=\"statusMessage\">");
                            t.b(t.v(t.f("statusMessage", c, p, 0)));
                            t.b("</span>");
                            t.b("\n" + i);
                        });
                        c.pop();
                    }
                    t.b("</div>");
                    return t.fl();
                },
                partials: {},
                subs: {}
            }, "<div class=\"PowerEditorUploader-statusPending\">\n  <span class=\"Icon Icon--loadingMedium\"></span>\n  {{#statusMessage}}\n    <span class=\"statusMessage\">{{statusMessage}}</span>\n  {{/statusMessage}}\n</div>", r);
        }();
    },
    466: function(t, e, n) {
        var r;
        r = function() {
            return {
                isFunction: function(t) {
                    return !!(t && t.constructor && t.call && t.apply);
                }
            };
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    675: function(t, e, n) {
        (function(e) {
            function r() {
                this.attributes({
                    applyChangesRequest: 'PowerEditor-applyChangesRequest',
                    applyChangesFailure: 'PowerEditor-applyChangesFailure',
                    applyChangesSuccess: 'PowerEditor-applyChangesSuccess',
                    defaultAction: o.ACCEPT
                }), this.onApplyChangesFailure = function(t, e, n, r) {
                    var o = i.getTransactionHeader(e);
                    o && t.push(o), this.trigger(this.attr.applyChangesFailure, {
                        transactionIds: t,
                        textStatus: n,
                        errorThrown: r
                    });
                }, this.handlePollResponse = function(t, n, r, o) {
                    var a = this,
                        s = i.getTransactionHeader(o);
                    s && t.push(s), n = this.parseData(n), n && n.status ? 'pending' === n.status && n.pendingUrl ? setTimeout(function() {
                        e.ajax({
                            method: 'GET',
                            url: n.pendingUrl,
                            data: {
                                spreadsheet_action: a.attr.defaultAction
                            },
                            success: a.handlePollResponse.bind(a, t),
                            error: a.onApplyChangesFailure.bind(a, t)
                        });
                    }, 3000) : 'success' === n.status ? this.trigger(this.attr.applyChangesSuccess, {
                        data: n,
                        textStatus: r,
                        transactionIds: t
                    }) : 'error' === n.status && a.trigger(a.attr.applyChangesFailure, {
                        html: n.html,
                        textStatus: r,
                        transactionIds: t
                    }) : a.trigger(a.attr.applyChangesFailure, {
                        html: n.html,
                        textStatus: r,
                        transactionIds: t
                    });
                }, this.parseData = function(t) {
                    return t;
                };
            }
            var i = n(309),
                o = n(130);
            t.exports = r;
        }.call(e, n(1)));
    },
    676: function(t, e, n) {
        var r;
        (function(i) {
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        dismissAllSelector: '.Recommendations-dismissAll',
                        acceptAllSelector: '.Recommendations-acceptAll',
                        buttonGroupSelector: '.ButtonGroup',
                        numDismissedSelector: '.count-dismissed',
                        numAcceptedSelector: '.count-accepted',
                        expandableToggleSelector: '.CampaignDelta-expandableToggle',
                        deltaSelector: '.CampaignDelta',
                        hideAllSelector: '.CampaignDeltas-hideall',
                        showAllSelector: '.CampaignDeltas-showall',
                        campaignGroupSelector: '.CampaignGroup',
                        submitButtonSelector: '.Recommendations-submit',
                        campaignCountSelector: '.num-campaigns',
                        submitDeltas: 'Recommmendations-submitDeltas',
                        expandedClass: 'is-expanded',
                        selectedClass: 'is-selected',
                        showClass: 'show'
                    }), this.after('initialize', function() {
                        this.setInfo(), this.on(document, 'click', {
                            dismissAllSelector: this.markAllDismissed,
                            acceptAllSelector: this.markAllAccepted,
                            hideAllSelector: this.hideAllDetails,
                            showAllSelector: this.showAllDetails
                        }), this.select('deltaSelector').on('click', {
                            component: this
                        }, this.toggleShow), this.select('buttonGroupSelector').on('click', this.marked.bind(this)), this.select('submitButtonSelector').on('click', this.submitDeltas.bind(this));
                    }), this.setInfo = function() {
                        var t = this.select('campaignCountSelector').html();
                        i(this.attr.campaignCountSelector).html(t);
                    }, this.toggleShow = function(t) {
                        var e = t.data.component,
                            n = i(this),
                            r = n.find(e.attr.expandableToggleSelector),
                            o = n.closest(e.attr.campaignGroupSelector).find(e.attr.deltaSelector),
                            a = r.hasClass(e.attr.expandedClass);
                        r.toggleClass(e.attr.expandedClass, !a), r.closest(e.attr.campaignGroupSelector).toggleClass(e.attr.showClass, !a), o.toggleClass(e.attr.expandedClass, !a), a ? e.select('showAllSelector').toggleClass('disabled', !1) : e.select('hideAllSelector').toggleClass('disabled', !1);
                    }, this.markAllDismissed = function(t, e) {
                        var n = this;
                        this.select('buttonGroupSelector').find('button').removeClass(n.attr.selectedClass), this.select('buttonGroupSelector').find('button:eq(0)').addClass(n.attr.selectedClass), this.updateSelections();
                    }, this.markAllAccepted = function(t, e) {
                        var n = this;
                        this.select('buttonGroupSelector').find('button').removeClass(n.attr.selectedClass), this.select('buttonGroupSelector').find('button:eq(1)').addClass(n.attr.selectedClass), this.updateSelections();
                    }, this.marked = function(t, e) {
                        var n = i(t.target);
                        n.siblings('.Button').removeClass('is-selected'), n.addClass('is-selected'), event.stopPropagation(), this.updateSelections();
                    }, this.hideAllDetails = function(t, e) {
                        this.toggleAllDetails(!1);
                    }, this.showAllDetails = function(t, e) {
                        this.toggleAllDetails(!0);
                    }, this.toggleAllDetails = function(t) {
                        this.select('expandableToggleSelector').toggleClass(this.attr.expandedClass, t), this.select('campaignGroupSelector').toggleClass(this.attr.showClass, t), this.select('campaignGroupSelector').find(this.attr.deltaSelector).toggleClass(this.attr.expandedClass, t), i(this.attr.showAllSelector).toggleClass('disabled', t), i(this.attr.hideAllSelector).toggleClass('disabled', !t);
                    }, this.updateSelections = function() {
                        var t = this.validateSelections();
                        this.select('submitButtonSelector').prop('disabled', !t);
                    }, this.submitDeltas = function(t) {
                        if (t.preventDefault(), this.validateSelections()) {
                            var e = this.select('buttonGroupSelector').find('.Button.accepted.is-selected'),
                                n = e.map(function() {
                                    return i(this).data('id');
                                });
                            this.trigger(this.attr.submitDeltas, {
                                selected_ids: i.makeArray(n)
                            });
                        }
                    }, this.validateSelections = function() {
                        var t = this.select('buttonGroupSelector').length,
                            e = this.select('buttonGroupSelector').find('.Button.accepted.is-selected').length,
                            n = this.select('buttonGroupSelector').find('.Button.dismissed.is-selected').length;
                        return this.select('numDismissedSelector').html(n), this.select('numAcceptedSelector').html(e), n + e === t;
                    };
                }
                var e = n(5);
                return e.component(t);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    677: function(t, e, n) {
        var r;
        (function(i) {
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        updateStatusBox: 'updateStatusBox',
                        updateStatusBoxWithSpinner: 'updateStatusBoxWithSpinner',
                        technicalDetailsCTASelector: '.PowerEditorUploader-technicalDetailsCTA',
                        technicalDetailsMessageSelector: '.PowerEditorUploader-technicalDetailsMessage',
                        technicalDetailsTransactionIds: '.PowerEditorUploader-transactionIds'
                    }), this.after('initialize', function() {
                        this.on(document, this.attr.updateStatusBox, this.updateStatusBox), this.on(document, this.attr.updateStatusBoxWithSpinner, this.updateStatusBoxWithSpinner);
                    }), this.updateStatusBox = function(t, e) {
                        function n(t) {
                            var n = e.transactionIds;
                            Array.isArray(n) || (n = []);
                            var r = t.find(a.attr.technicalDetailsMessageSelector),
                                i = r.find(a.attr.technicalDetailsTransactionIds);
                            i.html(n.join(' ')), t.find(a.attr.technicalDetailsCTASelector).on('click', function() {
                                return r.hasClass('hidden') ? r.removeClass('hidden') : r.addClass('hidden'), !1;
                            });
                        }
                        var r = this.$node,
                            a = this;
                        if (e && e.html) {
                            r.html(e.html), o.teardownAll(), o.attachTo(i('.CampaignGroupContainer'));
                            var s = r.find('.Callout--danger');
                            '0' === s.attr('data-error-count') && n(s);
                        }
                    }, this.updateStatusBoxWithSpinner = function(t, e) {
                        this.$node.html(r.render(e));
                    };
                }
                var e = n(5),
                    r = (n(439), n(440)),
                    o = n(676);
                return e.component(t);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    828: function(t, e) {},
    1031: function(t, e, n) {
        var r;
        (function(i) {
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        applyChangesRequest: 'PowerEditor-applyChangesRequest',
                        applyChangesFailure: 'PowerEditor-applyChangesFailure',
                        applyChangesSuccess: 'PowerEditor-applyChangesSuccess'
                    }), this.after('initialize', function() {
                        this.on(this.attr.applyChangesRequest, this.handleApplyChangesRequest);
                    }), this.handleApplyChangesRequest = function(t, e) {
                        var n = i.extend({
                            spreadsheet_action: 'accept'
                        }, e.payload);
                        i.ajax({
                            type: 'POST',
                            url: e.url,
                            data: n,
                            success: this.handlePollResponse.bind(this, []),
                            error: this.onApplyChangesFailure.bind(this, [])
                        });
                    };
                }
                var e = n(5),
                    r = n(675);
                return e.component(t, r);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    1032: function(t, e, n) {
        var r;
        r = function() {
            'use strict';

            function t() {
                this.attributes({
                    previewFetchRequest: 'previewFetchRequest',
                    previewFetchFailure: 'previewFetchFailure',
                    renderCampaignPreview: 'renderCampaignPreviewBox'
                }), this.after('initialize', function() {
                    this.on(this.attr.previewFetchRequest, this.previewFetchRequest);
                }), this.previewFetchRequest = function(t, e) {
                    this.ajax({
                        type: 'GET',
                        url: e.url,
                        data: e.formData,
                        success: this.onFetchSuccess.bind(this),
                        error: this.onFetchError.bind(this)
                    });
                }, this.onFetchSuccess = function(t, e, n) {
                    t.state = 'success', this.trigger(this.attr.renderCampaignPreview, t);
                }, this.onFetchError = function(t, e, n) {
                    var r = {};
                    0 != t.readyState && 0 != t.status && (this.trigger(this.attr.previewFetchFailure, {
                        data: r,
                        textStatus: e,
                        errorThrown: n
                    }), r.state = 'error', this.trigger(this.attr.renderCampaignPreview, r));
                };
            }
            var e = n(5),
                r = n(26);
            return e.component(r, t);
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    1033: function(t, e, n) {
        var r;
        (function(i) {
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        startExportRequest: 'PowerEditor--startExport',
                        exportSuccessEvent: 'PowerEditor--exportSuccess',
                        exportErrorEvent: 'PowerEditor--exportError'
                    }), this.after('initialize', function() {
                        this.on(this.attr.startExportRequest, this.handleStartExportRequest);
                    }), this.handleStartExportRequest = function(t, e) {
                        e && e.startExportUrl ? i.ajax({
                            type: 'POST',
                            url: e.startExportUrl,
                            data: e.formData,
                            success: this.onExportSuccess.bind(this),
                            error: this.onExportFailure.bind(this)
                        }) : this.onExportFailure();
                    }, this.onExportSuccess = function(t, e, n) {
                        var r = this;
                        t ? 'pending' === t.status && t.pendingUrl ? setTimeout(function() {
                            i.ajax({
                                type: 'GET',
                                url: t.pendingUrl,
                                success: r.onExportSuccess.bind(r),
                                error: r.onExportFailure.bind(r)
                            });
                        }, 3000) : 'success' === t.status && t.downloadUrl ? r.trigger(this.attr.exportSuccessEvent, {
                            downloadUrl: t.downloadUrl
                        }) : r.trigger(this.attr.exportErrorEvent, {}) : r.trigger(this.attr.exportErrorEvent, {});
                    }, this.onExportFailure = function(t, e, n) {
                        this.trigger(this.attr.exportErrorEvent, {});
                    };
                }
                var e = n(5);
                return e.component(t);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    1034: function(t, e, n) {
        var r;
        (function(i) {
            var _ = n(8);
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        updateStatusBoxWithSpinner: 'updateStatusBoxWithSpinner',
                        spreadsheetUploadRequest: 'spreadsheetUploadRequest',
                        spreadsheetUploadSuccess: 'spreadsheetUploadSuccess',
                        spreadsheetUploadFailure: 'spreadsheetUploadFailure'
                    }), this.after('initialize', function() {
                        this.on(this.attr.spreadsheetUploadRequest, this.handlSpreadsheetUploadRequest);
                    }), this.handlSpreadsheetUploadRequest = function(t, e) {
                        var n = e.url,
                            r = e.formData;
                        i.ajax({
                            type: 'POST',
                            url: n,
                            data: r,
                            cache: !1,
                            contentType: !1,
                            processData: !1,
                            success: this.handlePollResponse.bind(this, []),
                            error: this.onUploadError.bind(this, [])
                        });
                    }, this.handlePollResponse = function(t, e, n, a) {
                        var s = this,
                            c = r.getTransactionHeader(a);
                        if (c && t.push(c), e && e.status)
                            if ('pending' === e.status && e.pendingUrl) {
                                var u = {};
                                (e.percentageComplete || 0 === e.percentageComplete) && (u = {
                                    statusMessage: _('%{percentageComplete}% complete', {
                                        percentageComplete: (100 * e.percentageComplete).toFixed()
                                    })
                                }), this.trigger(this.attr.updateStatusBoxWithSpinner, u), setTimeout(function() {
                                    i.ajax({
                                        method: 'GET',
                                        url: e.pendingUrl,
                                        success: s.handlePollResponse.bind(s, t),
                                        error: s.onUploadError.bind(s, t)
                                    });
                                }, o);
                            } else 'success' === e.status ? this.trigger(this.attr.spreadsheetUploadSuccess, e) : 'error' === e.status && s.trigger(s.attr.spreadsheetUploadFailure, {
                                html: e.html,
                                textStatus: n,
                                transactionIds: t
                            });
                        else s.trigger(s.attr.spreadsheetUploadFailure, {
                            html: e.html,
                            textStatus: n,
                            transactionIds: t
                        });
                    }, this.onUploadError = function(t, e, n, i) {
                        var o = r.getTransactionHeader(e);
                        o && t.push(o), this.trigger(this.attr.spreadsheetUploadFailure, {
                            textStatus: n,
                            errorThrown: i,
                            transactionIds: t
                        });
                    };
                }
                var e = n(5),
                    r = n(309),
                    o = 3000;
                return e.component(t);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    1035: function(t, e, n) {
        var r;
        (function(i) {
            var _ = n(8);
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        applyChangesRequest: 'PowerEditor-applyChangesRequest',
                        applyChangesFailure: 'PowerEditor-applyChangesFailure',
                        applyChangesSuccess: 'PowerEditor-applyChangesSuccess',
                        updateStatusBox: 'updateStatusBox',
                        updateStatusBoxWithSpinner: 'updateStatusBoxWithSpinner',
                        formSelector: '.PowerEditorUploader-applyChangesForm',
                        recommendationFormSelector: '.RecommendationEmailForm',
                        buttonSelector: '#PowerEditorUploader-applySubmit'
                    }), this.after('initialize', function() {
                        this.on(document, this.attr.applyChangesFailure, this.applyChangesFailure), this.on(document, this.attr.applyChangesSuccess, this.applyChangesSuccess), this.on('click', {
                            buttonSelector: this.requestApplyChanges
                        });
                    }), this.requestApplyChanges = function(t) {
                        t.preventDefault(), this.disableApplyChanges();
                        var e = {};
                        this.$node.find('input').each(function() {
                            var t = i(this);
                            e[t.attr('name')] = t.val();
                        }), i(this.attr.recommendationFormSelector).find('input,textarea').each(function() {
                            var t = i(this);
                            e[t.attr('name')] = t.val();
                        }), this.trigger(this.attr.applyChangesRequest, {
                            url: this.select('formSelector').attr('data-url'),
                            payload: e
                        }), this.trigger(this.attr.updateStatusBoxWithSpinner, {
                            statusMessage: _('Preparing to apply changes...')
                        });
                    }, this.disableApplyChanges = function() {
                        var t = this.select('buttonSelector');
                        t.prop('disabled', !0);
                    }, this.applyChangesFailure = function(t, e) {
                        this.disableApplyChanges(), this.trigger(this.attr.updateStatusBox, {
                            html: e.html,
                            error: !0,
                            transactionIds: e.transactionIds
                        });
                    }, this.applyChangesSuccess = function(t, e) {
                        this.disableApplyChanges(), this.trigger(this.attr.updateStatusBox, {
                            html: e.data.html,
                            transactionIds: e.transactionIds
                        });
                    };
                }
                var e = n(5),
                    r = n(18);
                return e.component(t, r);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    1036: function(t, e, n) {
        function r() {
            this.attributes({
                updateCampaignPreview: 'updateCampaignPreview',
                changedEvent: 'triggerFilteringChanged',
                objectiveChangedEvent: 'uiObjectiveChanged',
                downloaderFormSelector: '.PowerEditorDownloader-form',
                startDateSelector: 'input[name=start_date]',
                endDateSelector: 'input[name=end_date]',
                objectiveFormSelector: 'input[name=objectives]',
                nameFilterFormSelector: 'input[name=name_filter]',
                objectiveFilterSelector: '.select-objective .Menu',
                currentObjectiveFilterSelector: '.select-objective .Menu .current'
            }), this.after('initialize', function() {
                this.attachChild(i, this.attr.objectiveFilterSelector, {
                    dropdownChangedEvent: this.attr.objectiveChangedEvent
                }), this.on(this.attr.startDateSelector, 'change input', this.updateCampaignPreview), this.on(this.attr.endDateSelector, 'change input', this.updateCampaignPreview), this.on(this.attr.nameFilterFormSelector, 'change input', this.updateCampaignPreviewDebounced), this.on(this.attr.objectiveChangedEvent, this.updateCampaignPreview), o(document).ready(this.loadDefaultValues.bind(this));
            }), this.updateCampaignPreview = function(t, e) {
                var n = this.select('currentObjectiveFilterSelector').attr('data-value');
                this.select('objectiveFormSelector').val(n);
                var r = this.select('downloaderFormSelector').serializeArray();
                this.trigger(this.attr.updateCampaignPreview, {
                    formData: o.param(r)
                });
            }, this.updateCampaignPreviewDebounced = s.debounce(this.updateCampaignPreview, 250), this.loadDefaultValues = function() {
                var t = new Date(),
                    e = new Date();
                t.setMonth(t.getMonth() - 1), this.select('startDateSelector')[0].valueAsDate = t, this.select('endDateSelector')[0].valueAsDate = e, this.updateCampaignPreview();
            };
        }
        var i = n(166),
            o = n(1),
            a = n(5),
            s = n(7),
            c = n(15);
        t.exports = a.component(r, c);
    },
    1037: function(t, e, n) {
        var r;
        r = function() {
            'use strict';

            function t() {
                this.attributes({
                    previewFetchRequest: 'previewFetchRequest',
                    renderCampaignPreview: 'renderCampaignPreviewBox',
                    updateCampaignPreview: 'updateCampaignPreview',
                    updateCampaignCountRequest: 'updateCampaignCountRequest',
                    downloaderFormSelector: '.PowerEditorDownloader-form',
                    previewSelector: '.PowerEditorDownloader-preview',
                    previewBoxSelector: '.PowerEditorDownloader-previewBox',
                    previewErrorSelector: '.PowerEditorDownloader-previewError',
                    previewLoadingSelector: '.PowerEditorDownloader--loadingContainer',
                    previewAjaxSelector: '.PowerToolsCampaignPreview'
                }), this.after('initialize', function() {
                    this.on(this.attr.updateCampaignPreview, this.updateCampaignPreview), this.on(this.attr.renderCampaignPreview, this.renderCampaignPreview);
                }), this.updateCampaignPreview = function(t, e) {
                    this.select('previewBoxSelector').html(''), this.select('previewLoadingSelector').removeClass('hidden'), this.trigger('previewFetchRequest', {
                        url: this.select('previewSelector').attr('data-url'),
                        formData: e.formData
                    });
                }, this.renderCampaignPreview = function(t, e) {
                    if (this.select('previewLoadingSelector').addClass('hidden'), e.html && 'success' === e.state) {
                        this.select('previewErrorSelector').addClass('hidden'), this.select('previewBoxSelector').html(e.html);
                        var n = this.select('previewAjaxSelector').attr('data-campaign-count');
                        this.trigger('updateCampaignCountRequest', {
                            campaignCount: n
                        });
                    } else this.select('previewErrorSelector').removeClass('hidden'), this.select('previewBoxSelector').html('');
                };
            }
            var e = n(5);
            return e.component(t);
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    1038: function(t, e, n) {
        var r;
        (function(i) {
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        exportButtonSelector: '.PowerEditorDownloader-ExportButton input',
                        exportStatusIconSelector: '.PowerEditorDownloader-exportStatusIcon',
                        downloaderFormSelector: '.PowerEditorDownloader-form',
                        startExportRequest: 'PowerEditor--startExport',
                        exportSuccessEvent: 'PowerEditor--exportSuccess',
                        exportErrorEvent: 'PowerEditor--exportError'
                    }), this.after('initialize', function() {
                        this.on('click', {
                            exportButtonSelector: this.onRequestExport.bind(this)
                        }), this.on(this.attr.exportSuccessEvent, this.onExportSuccess), this.on(this.attr.exportErrorEvent, this.onExportError), this.on(document, 'updateCampaignCountRequest', this.onUpdateCampaignCountRequest);
                    }), this.setExportStatusIcon = function(t) {
                        var e = this.select('exportStatusIconSelector');
                        e.attr('class').toString().split(' ').forEach(function(t) {
                            0 != t.indexOf('Icon') && 0 != t.indexOf('exportStatus') || e.removeClass(t);
                        }), t === !1 ? e.addClass('hidden') : (e.removeClass('hidden'), e.addClass(t), e.addClass('Icon'));
                    }, this.onExportSuccess = function(t, e) {
                        var n = this.select('exportButtonSelector');
                        n.removeAttr('disabled'), window.location = r(e.downloadUrl);
                        var i = this;
                        i.setExportStatusIcon('Icon--check Icon--medium exportStatusGreen'), setTimeout(function() {
                            i.setExportStatusIcon(!1);
                        }, 3000);
                    }, this.onExportError = function(t, e) {
                        var n = this.select('exportButtonSelector');
                        n.removeAttr('disabled');
                        var r = this;
                        r.setExportStatusIcon('Icon--featherFail Icon--medium exportStatusRed'), setTimeout(function() {
                            r.setExportStatusIcon(!1);
                        }, 3000);
                    }, this.onRequestExport = function(t, e) {
                        t.preventDefault();
                        var n = this.select('exportButtonSelector');
                        n.attr('disabled', 'disabled');
                        var r = this.select('downloaderFormSelector'),
                            o = i.param(r.serializeArray());
                        this.trigger(this.attr.startExportRequest, {
                            startExportUrl: r.attr('action'),
                            formData: o
                        }), this.setExportStatusIcon('Icon--loadingMedium');
                    }, this.onUpdateCampaignCountRequest = function(t, e) {
                        var n = '1' === e.campaignCount ? _('Export 1 campaign') : _('Export %{campaignCount} campaigns', {
                            campaignCount: e.campaignCount
                        });
                        this.select('exportButtonSelector').val(n);
                    };
                }
                var e = n(5),
                    _ = n(8),
                    r = n(1047).appendVpnTokenToUrlWithParams;
                return e.component(t);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    1039: function(t, e, n) {
        var r;
        (function(i) {
            r = function() {
                'use strict';

                function t() {
                    this.attributes({
                        selectedTabSelector: '.Tab.is-selected',
                        tabSelector: '.Tab',
                        selectedClass: 'is-selected'
                    }), this.after('initialize', function() {
                        this.on('click', {
                            tabSelector: this.onTabSelect
                        });
                    }), this.onTabSelect = function(t, e) {
                        var n = i(t.target).closest('.Tab');
                        if (!n.hasClass(this.attr.selectedClass)) {
                            var r = this.select('selectedTabSelector');
                            r.removeClass(this.attr.selectedClass), n.addClass(this.attr.selectedClass);
                            var o = i('.' + r.attr('data-tab-container-class')),
                                a = i('.' + n.attr('data-tab-container-class'));
                            o.addClass('hidden'), a.removeClass('hidden');
                        }
                    };
                }
                var e = n(5);
                return e.component(t);
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
        }.call(e, n(1)));
    },
    1040: function(t, e, n) {
        var r;
        r = function() {
            'use strict';

            function t() {
                this.attributes({
                    validatorSelector: '#PowerEditorUploader-validator',
                    applyChangesSelector: '#PowerEditorUploader-applyChanges',
                    applySubmitButtonSelector: '#PowerEditorUploader-applySubmit',
                    previewButtonSelector: '#PowerEditorUploader-previewSubmit',
                    cancelRecommendationButtonSelector: '#PowerEditorUploader-applyCancel',
                    fileSelectContainerSelector: '.PowerEditorUploader-fileSelectContainer',
                    statusSelector: '.PowerEditorUploader-status',
                    recommendationFormSelector: '.RecommendationEmailForm',
                    spreadsheetUploadSuccess: 'spreadsheetUploadSuccess',
                    applyChangesSuccess: 'PowerEditor-applyChangesSuccess'
                }), this.after('initialize', function() {
                    this.attachChild(i, this.select('validatorSelector')), this.attachChild(a, this.select('statusSelector')), this.attachChild(o, this.select('applyChangesSelector')), this.on(document, this.attr.spreadsheetUploadSuccess, this.initApplyChanges), this.on('click', {
                        cancelRecommendationButtonSelector: this.resetRecommendation
                    }), this.on(document, this.attr.applyChangesSuccess, this.resetRecommendation);
                }), this.initApplyChanges = function(t, e) {
                    var n = this.select('applyChangesSelector');
                    n.html(e.applyChangesHtml);
                    var r = e.recommendation;
                    r && (this.showFileSelector(!1), this.showRecommendationEmail(!0));
                }, this.resetRecommendation = function(t) {
                    t.preventDefault(), this.showFileSelector(!0), this.clearRecommendationEmail(), this.showRecommendationEmail(!1), this.select('cancelRecommendationButtonSelector').toggleClass('hidden', !0), this.select('applySubmitButtonSelector').prop('disabled', !0);
                }, this.showFileSelector = function(t) {
                    this.select('fileSelectContainerSelector').toggleClass('hidden', !t), this.select('previewButtonSelector').toggleClass('hidden', !t);
                }, this.showRecommendationEmail = function(t) {
                    this.select('recommendationFormSelector').toggleClass('hidden', !t);
                }, this.clearRecommendationEmail = function() {
                    this.select('recommendationFormSelector').find('input,textarea').val('');
                };
            }
            var e = n(5),
                r = n(15),
                i = n(1041),
                o = n(1035),
                a = n(677),
                s = n(18);
            return e.component(t, r, s);
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    1041: function(t, e, n) {
        var r, _ = n(8);
        r = function() {
            'use strict';

            function t() {
                this.attributes({
                    spreadsheetUploadRequest: 'spreadsheetUploadRequest',
                    spreadsheetUploadSuccess: 'spreadsheetUploadSuccess',
                    spreadsheetUploadFailure: 'spreadsheetUploadFailure',
                    updateStatusBoxWithSpinner: 'updateStatusBoxWithSpinner',
                    updateStatusBox: 'updateStatusBox',
                    fileSelectSelector: '#PowerEditorUploader-fileSelect',
                    submitSelector: '#PowerEditorUploader-previewSubmit',
                    applyChangesSubmitSelector: '#PowerEditorUploader-applySubmit',
                    fileNameSelector: '.PowerEditorUploader-fileName'
                }), this.after('initialize', function() {
                    this.on('click', {
                        submitSelector: this.onUpload,
                        fileSelectSelector: this.clearStatusBox
                    }), this.on(document, this.attr.spreadsheetUploadFailure, this.onUploadFailure), this.on(document, this.attr.spreadsheetUploadSuccess, this.onUploadSuccess), this.on('change', {
                        fileSelectSelector: this.toggleAvailability
                    });
                }), this.clearStatusBox = function() {
                    this.trigger(this.attr.updateStatusBox, {
                        html: ''
                    });
                }, this.toggleAvailability = function(t) {
                    var e = this.select('submitSelector'),
                        n = this.select('fileSelectSelector'),
                        r = n[0].files,
                        i = this.select('fileNameSelector');
                    r.length > 0 ? (e.removeAttr('disabled'), i.text(r[0].name)) : (e.attr('disabled', 'disabled'), i.text('')), this.select('applyChangesSubmitSelector').prop('disabled', !0);
                }, this.enableButton = function(t) {
                    var e = this.select('submitSelector');
                    t ? e.removeAttr('disabled', 'disabled') : (e.prop('disabled', !0), this.select('applyChangesSubmitSelector').prop('disabled', !0));
                }, this.onUpload = function(t) {
                    t.preventDefault();
                    for (var e = this.select('fileSelectSelector')[0].files, n = new FormData(), r = 0; r < e.length; r++) n.append('spreadsheet', e[r], e[r].name);
                    var i = this.$node,
                        o = i.attr('data-spy-user'),
                        a = i.attr('data-spy-account');
                    o && a && (n.append('user', o), n.append('account', a)), this.trigger(this.attr.spreadsheetUploadRequest, {
                        url: i.attr('data-url'),
                        formData: n
                    }), this.trigger(this.attr.updateStatusBoxWithSpinner, {
                        statusMessage: _('Preparing to validate changes...')
                    }), this.enableButton(!1);
                }, this.onUploadFailure = function(t, e) {
                    this.enableButton(!0), this.trigger(this.attr.updateStatusBox, {
                        html: e.html,
                        error: !0,
                        transactionIds: e.transactionIds
                    });
                }, this.onUploadSuccess = function(t, e) {
                    this.enableButton(!0), this.trigger(this.attr.updateStatusBox, {
                        html: e.html,
                        transactionIds: e.transactionIds
                    });
                };
            }
            var e = n(5),
                r = n(18);
            return e.component(t, r);
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    },
    1047: function(t, e) {
        function n() {
            const t = window.location.pathname.match(/,DanaInfo(.*)\+/);
            return t && 'vpn.twttr.com' === window.location.hostname ? t[0] : '';
        }

        function r(t) {
            return '' != n() ? t + '&' + n() : t;
        }
        t.exports = {
            vpnToken: n,
            appendVpnTokenToUrlWithParams: r
        };
    }
});