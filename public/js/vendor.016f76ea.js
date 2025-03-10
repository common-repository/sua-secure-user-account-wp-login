if (function (a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document)throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        function c(a) {
            var b = a.length, c = eb.type(a);
            return "function" === c || eb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (eb.isFunction(b))return eb.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType)return eb.grep(a, function (a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (mb.test(b))return eb.filter(b, a, c);
                b = eb.filter(b, a)
            }
            return eb.grep(a, function (a) {
                return eb.inArray(a, b) >= 0 !== c
            })
        }

        function e(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function f(a) {
            var b = ub[a] = {};
            return eb.each(a.match(tb) || [], function (a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            ob.addEventListener ? (ob.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (ob.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
        }

        function h() {
            (ob.addEventListener || "load" === event.type || "complete" === ob.readyState) && (g(), eb.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(zb, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : yb.test(c) ? eb.parseJSON(c) : c
                    } catch (e) {
                    }
                    eb.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)if (("data" !== b || !eb.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (eb.acceptData(a)) {
                var e, f, g = eb.expando, h = a.nodeType, i = h ? eb.cache : a, j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)return j || (j = h ? a[g] = W.pop() || eb.guid++ : g), i[j] || (i[j] = h ? {} : {toJSON: eb.noop}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = eb.extend(i[j], b) : i[j].data = eb.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[eb.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[eb.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (eb.acceptData(a)) {
                var d, e, f = a.nodeType, g = f ? eb.cache : a, h = f ? a[eb.expando] : eb.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        eb.isArray(b) ? b = b.concat(eb.map(b, eb.camelCase)) : b in d ? b = [b] : (b = eb.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;)delete d[b[e]];
                        if (c ? !j(d) : !eb.isEmptyObject(d))return
                    }
                    (c || (delete g[h].data, j(g[h]))) && (f ? eb.cleanData([a], !0) : cb.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function n() {
            return !1
        }

        function o() {
            try {
                return ob.activeElement
            } catch (a) {
            }
        }

        function p(a) {
            var b = Kb.split("|"), c = a.createDocumentFragment();
            if (c.createElement)for (; b.length;)c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0, f = typeof a.getElementsByTagName !== xb ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xb ? a.querySelectorAll(b || "*") : void 0;
            if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || eb.nodeName(d, b) ? f.push(d) : eb.merge(f, q(d, b));
            return void 0 === b || b && eb.nodeName(a, b) ? eb.merge([a], f) : f
        }

        function r(a) {
            Eb.test(a.type) && (a.defaultChecked = a.checked)
        }

        function s(a, b) {
            return eb.nodeName(a, "table") && eb.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function t(a) {
            return a.type = (null !== eb.find.attr(a, "type")) + "/" + a.type, a
        }

        function u(a) {
            var b = Vb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function v(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++)eb._data(c, "globalEval", !b || eb._data(b[d], "globalEval"))
        }

        function w(a, b) {
            if (1 === b.nodeType && eb.hasData(a)) {
                var c, d, e, f = eb._data(a), g = eb._data(b, f), h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)for (d = 0, e = h[c].length; e > d; d++)eb.event.add(b, c, h[c][d])
                }
                g.data && (g.data = eb.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !cb.noCloneEvent && b[eb.expando]) {
                    e = eb._data(b);
                    for (d in e.events)eb.removeEvent(b, d, e.handle);
                    b.removeAttribute(eb.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), cb.html5Clone && a.innerHTML && !eb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Eb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d, e = eb(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : eb.css(e[0], "display");
            return e.detach(), f
        }

        function z(a) {
            var b = ob, c = _b[a];
            return c || (c = y(a, b), "none" !== c && c || ($b = ($b || eb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($b[0].contentWindow || $b[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $b.detach()), _b[a] = c), c
        }

        function A(a, b) {
            return {
                get: function () {
                    var c = a();
                    if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function B(a, b) {
            if (b in a)return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mc.length; e--;)if (b = mc[e] + c, b in a)return b;
            return d
        }

        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = eb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Cb(d) && (f[g] = eb._data(d, "olddisplay", z(d.nodeName)))) : (e = Cb(d), (c && "none" !== c || !e) && eb._data(d, "olddisplay", e ? c : eb.css(d, "display"))));
            for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function D(a, b, c) {
            var d = ic.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += eb.css(a, c + Bb[f], !0, e)), d ? ("content" === c && (g -= eb.css(a, "padding" + Bb[f], !0, e)), "margin" !== c && (g -= eb.css(a, "border" + Bb[f] + "Width", !0, e))) : (g += eb.css(a, "padding" + Bb[f], !0, e), "padding" !== c && (g += eb.css(a, "border" + Bb[f] + "Width", !0, e)));
            return g
        }

        function F(a, b, c) {
            var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = ac(a), g = cb.boxSizing && "border-box" === eb.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = bc(a, b, f), (0 > e || null == e) && (e = a.style[b]), dc.test(e))return e;
                d = g && (cb.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) {
            return new G.prototype.init(a, b, c, d, e)
        }

        function H() {
            return setTimeout(function () {
                nc = void 0
            }), nc = eb.now()
        }

        function I(a, b) {
            var c, d = {height: a}, e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = Bb[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (tc[b] || []).concat(tc["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Cb(a), p = eb._data(a, "fxshow");
            c.queue || (h = eb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                h.unqueued || i()
            }), h.unqueued++, l.always(function () {
                l.always(function () {
                    h.unqueued--, eb.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = eb.css(a, "display"), k = "none" === j ? eb._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === eb.css(a, "float") && (cb.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", cb.shrinkWrapBlocks() || l.always(function () {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)if (e = b[d], pc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])continue;
                    o = !0
                }
                m[d] = p && p[d] || eb.style(a, d)
            } else j = void 0;
            if (eb.isEmptyObject(m))"inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j); else {
                p ? "hidden"in p && (o = p.hidden) : p = eb._data(a, "fxshow", {}), f && (p.hidden = !o), o ? eb(a).show() : l.done(function () {
                    eb(a).hide()
                }), l.done(function () {
                    var b;
                    eb._removeData(a, "fxshow");
                    for (b in m)eb.style(a, b, m[b])
                });
                for (d in m)g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)if (d = eb.camelCase(c), e = b[d], f = a[c], eb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = eb.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0, g = sc.length, h = eb.Deferred().always(function () {
                delete i.elem
            }), i = function () {
                if (e)return !1;
                for (var b = nc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: eb.extend({}, b),
                opts: eb.extend(!0, {specialEasing: {}}, c),
                originalProperties: b,
                originalOptions: c,
                startTime: nc || H(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = eb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)return this;
                    for (e = !0; d > c; c++)j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }), k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)if (d = sc[f].call(j, a, k, j.opts))return d;
            return eb.map(k, J, j), eb.isFunction(j.opts.start) && j.opts.start.call(a, j), eb.fx.timer(eb.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function (b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0, f = b.toLowerCase().match(tb) || [];
                if (eb.isFunction(c))for (; d = f[e++];)"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, eb.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }

            var f = {}, g = a === Rc;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) {
            var c, d, e = eb.ajaxSettings.flatOptions || {};
            for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && eb.extend(!0, a, c), a
        }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)for (g in h)if (h[g] && h[g].test(e)) {
                i.unshift(g);
                break
            }
            if (i[0]in c)f = i[0]; else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                    break
                }
                if (g !== !0)if (g && a["throws"])b = g(b); else try {
                    b = g(b)
                } catch (l) {
                    return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                }
            }
            return {state: "success", data: b}
        }

        function S(a, b, c, d) {
            var e;
            if (eb.isArray(b))eb.each(b, function (b, e) {
                c || Vc.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            }); else if (c || "object" !== eb.type(b))d(a, b); else for (e in b)S(a + "[" + e + "]", b[e], c, d)
        }

        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {
            }
        }

        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {
            }
        }

        function V(a) {
            return eb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }

        var W = [], X = W.slice, Y = W.concat, Z = W.push, $ = W.indexOf, _ = {}, ab = _.toString, bb = _.hasOwnProperty, cb = {}, db = "1.11.2", eb = function (a, b) {
            return new eb.fn.init(a, b)
        }, fb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, gb = /^-ms-/, hb = /-([\da-z])/gi, ib = function (a, b) {
            return b.toUpperCase()
        };
        eb.fn = eb.prototype = {
            jquery: db, constructor: eb, selector: "", length: 0, toArray: function () {
                return X.call(this)
            }, get: function (a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            }, pushStack: function (a) {
                var b = eb.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            }, each: function (a, b) {
                return eb.each(this, a, b)
            }, map: function (a) {
                return this.pushStack(eb.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, slice: function () {
                return this.pushStack(X.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (a) {
                var b = this.length, c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: Z, sort: W.sort, splice: W.splice
        }, eb.extend = eb.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || eb.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (eb.isPlainObject(c) || (b = eb.isArray(c))) ? (b ? (b = !1, f = a && eb.isArray(a) ? a : []) : f = a && eb.isPlainObject(a) ? a : {}, g[d] = eb.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, eb.extend({
            expando: "jQuery" + (db + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                throw new Error(a)
            }, noop: function () {
            }, isFunction: function (a) {
                return "function" === eb.type(a)
            }, isArray: Array.isArray || function (a) {
                return "array" === eb.type(a)
            }, isWindow: function (a) {
                return null != a && a == a.window
            }, isNumeric: function (a) {
                return !eb.isArray(a) && a - parseFloat(a) + 1 >= 0
            }, isEmptyObject: function (a) {
                var b;
                for (b in a)return !1;
                return !0
            }, isPlainObject: function (a) {
                var b;
                if (!a || "object" !== eb.type(a) || a.nodeType || eb.isWindow(a))return !1;
                try {
                    if (a.constructor && !bb.call(a, "constructor") && !bb.call(a.constructor.prototype, "isPrototypeOf"))return !1
                } catch (c) {
                    return !1
                }
                if (cb.ownLast)for (b in a)return bb.call(a, b);
                for (b in a);
                return void 0 === b || bb.call(a, b)
            }, type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[ab.call(a)] || "object" : typeof a
            }, globalEval: function (b) {
                b && eb.trim(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(gb, "ms-").replace(hb, ib)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            }, each: function (a, b, d) {
                var e, f = 0, g = a.length, h = c(a);
                if (d) {
                    if (h)for (; g > f && (e = b.apply(a[f], d), e !== !1); f++); else for (f in a)if (e = b.apply(a[f], d), e === !1)break
                } else if (h)for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++); else for (f in a)if (e = b.call(a[f], f, a[f]), e === !1)break;
                return a
            }, trim: function (a) {
                return null == a ? "" : (a + "").replace(fb, "")
            }, makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? eb.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if ($)return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
                }
                return -1
            }, merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;)a[e++] = b[d++];
                if (c !== c)for (; void 0 !== b[d];)a[e++] = b[d++];
                return a.length = e, a
            }, grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            }, map: function (a, b, d) {
                var e, f = 0, g = a.length, h = c(a), i = [];
                if (h)for (; g > f; f++)e = b(a[f], f, d), null != e && i.push(e); else for (f in a)e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            }, guid: 1, proxy: function (a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b], b = a, a = e), eb.isFunction(a) ? (c = X.call(arguments, 2), d = function () {
                    return a.apply(b || this, c.concat(X.call(arguments)))
                }, d.guid = a.guid = a.guid || eb.guid++, d) : void 0
            }, now: function () {
                return +new Date
            }, support: cb
        }), eb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
        var jb = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)return c;
                if (!d && I) {
                    if (11 !== h && (e = sb.exec(a)))if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)return c;
                            if (f.id === g)return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)return c.push(f), c
                    } else {
                        if (e[2])return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName)return $.apply(c, b.getElementsByClassName(g)), c
                    }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;)j[i] = n + m(j[i]);
                            o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p)try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        } finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ib, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }

                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;)w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d)return d;
                if (c)for (; c = c.nextSibling;)if (c === b)return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function (b) {
                    return b = +b, d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {
            }

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir, e = c && "parentNode" === d, f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
                    } else for (; b = b[d];)if (1 === b.nodeType || e) {
                        if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)return j[2] = h[2];
                        if (i[d] = j, j[2] = a(b, c, g))return !0
                    }
                }
            }

            function o(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++)b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return ab(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)if (c = w.relative[a[h].type])k = [n(o(k), c)]; else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                    var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];)m(p, r, g, h);
                        if (d) {
                            if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
                return e ? d(g) : g
            }

            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, ab = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
                return -1
            }, bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cb = "[\\x20\\t\\r\\n\\f]", db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", eb = db.replace("w", "w#"), fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]", gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)", hb = new RegExp(cb + "+", "g"), ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"), jb = new RegExp("^" + cb + "*," + cb + "*"), kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"), lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"), mb = new RegExp(gb), nb = new RegExp("^" + eb + "$"), ob = {
                ID: new RegExp("^#(" + db + ")"),
                CLASS: new RegExp("^\\.(" + db + ")"),
                TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fb),
                PSEUDO: new RegExp("^" + gb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + bb + ")$", "i"),
                needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")
            }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"), wb = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xb = function () {
                F()
            };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (yb) {
                $ = {
                    apply: X.length ? function (a, b) {
                        Z.apply(a, _.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function (a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), I = !y(d), v.attributes = e(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function (a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function (a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function (a) {
                    var b = a.replace(vb, wb);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function (a) {
                    var b = a.replace(vb, wb);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];)1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function (a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function (a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", gb)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)for (; b = b.parentNode;)if (b === a)return !0;
                    return !1
                }, U = b ? function (a, b) {
                    if (a === b)return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1)
                } : function (a, b) {
                    if (a === b)return E = !0, 0;
                    var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                    if (!f || !h)return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                    if (f === h)return g(a, b);
                    for (c = a; c = c.parentNode;)i.unshift(c);
                    for (c = b; c = c.parentNode;)j.unshift(c);
                    for (; i[e] === j[e];)e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function (a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function (a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
                } catch (e) {
                }
                return b(c, G, null, [a]).length > 0
            }, b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function (a) {
                var b, c = [], d = 0, e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];)b === a[e] && (d = c.push(e));
                    for (; d--;)a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function (a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)c += x(a)
                    } else if (3 === e || 4 === e)return a.nodeValue
                } else for (; b = a[d++];)c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: ob,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    }, CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    }, PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(vb, wb).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    }, CLASS: function (a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                            })
                    }, ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    }, CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    }, PSEUDO: function (a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;)d = ab(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [], c = [], e = A(a.replace(ib, "$1"));
                        return e[N] ? d(function (a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }), has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0
                        }
                    }), contains: d(function (a) {
                        return a = a.replace(vb, wb), function (b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                    }), lang: d(function (a) {
                        return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), function (b) {
                            var c;
                            do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }), target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    }, root: function (a) {
                        return a === H
                    }, focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    }, enabled: function (a) {
                        return a.disabled === !1
                    }, disabled: function (a) {
                        return a.disabled === !0
                    }, checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    }, selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    }, empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                        return !0
                    }, parent: function (a) {
                        return !w.pseudos.empty(a)
                    }, header: function (a) {
                        return qb.test(a.nodeName)
                    }, input: function (a) {
                        return pb.test(a.nodeName)
                    }, button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    }, text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    }, first: j(function () {
                        return [0]
                    }), last: j(function (a, b) {
                        return [b - 1]
                    }), eq: j(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }), even: j(function (a, b) {
                        for (var c = 0; b > c; c += 2)a.push(c);
                        return a
                    }), odd: j(function (a, b) {
                        for (var c = 1; b > c; c += 2)a.push(c);
                        return a
                    }), lt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                        return a
                    }), gt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[u] = h(u);
            for (u in{submit: !0, reset: !0})w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ib, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter)!(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d)break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function (a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function (a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b)return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a)return $.apply(c, d), c;
                        break
                    }
                }
                return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function (a) {
                return null == a.getAttribute("disabled")
            }) || f(bb, function (a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        eb.find = jb, eb.expr = jb.selectors, eb.expr[":"] = eb.expr.pseudos, eb.unique = jb.uniqueSort, eb.text = jb.getText, eb.isXMLDoc = jb.isXML, eb.contains = jb.contains;
        var kb = eb.expr.match.needsContext, lb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, mb = /^.[^:#\[\.,]*$/;
        eb.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? eb.find.matchesSelector(d, a) ? [d] : [] : eb.find.matches(a, eb.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, eb.fn.extend({
            find: function (a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)return this.pushStack(eb(a).filter(function () {
                    for (b = 0; e > b; b++)if (eb.contains(d[b], this))return !0
                }));
                for (b = 0; e > b; b++)eb.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? eb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            }, filter: function (a) {
                return this.pushStack(d(this, a || [], !1))
            }, not: function (a) {
                return this.pushStack(d(this, a || [], !0))
            }, is: function (a) {
                return !!d(this, "string" == typeof a && kb.test(a) ? eb(a) : a || [], !1).length
            }
        });
        var nb, ob = a.document, pb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qb = eb.fn.init = function (a, b) {
            var c, d;
            if (!a)return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pb.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || nb).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof eb ? b[0] : b, eb.merge(this, eb.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : ob, !0)), lb.test(c[1]) && eb.isPlainObject(b))for (c in b)eb.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = ob.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2])return nb.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = ob, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : eb.isFunction(a) ? "undefined" != typeof nb.ready ? nb.ready(a) : a(eb) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), eb.makeArray(a, this))
        };
        qb.prototype = eb.fn, nb = eb(ob);
        var rb = /^(?:parents|prev(?:Until|All))/, sb = {children: !0, contents: !0, next: !0, prev: !0};
        eb.extend({
            dir: function (a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !eb(e).is(c));)1 === e.nodeType && d.push(e), e = e[b];
                return d
            }, sibling: function (a, b) {
                for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), eb.fn.extend({
            has: function (a) {
                var b, c = eb(a, this), d = c.length;
                return this.filter(function () {
                    for (b = 0; d > b; b++)if (eb.contains(this, c[b]))return !0
                })
            }, closest: function (a, b) {
                for (var c, d = 0, e = this.length, f = [], g = kb.test(a) || "string" != typeof a ? eb(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && eb.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
                return this.pushStack(f.length > 1 ? eb.unique(f) : f)
            }, index: function (a) {
                return a ? "string" == typeof a ? eb.inArray(this[0], eb(a)) : eb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (a, b) {
                return this.pushStack(eb.unique(eb.merge(this.get(), eb(a, b))))
            }, addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), eb.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            }, parents: function (a) {
                return eb.dir(a, "parentNode")
            }, parentsUntil: function (a, b, c) {
                return eb.dir(a, "parentNode", c)
            }, next: function (a) {
                return e(a, "nextSibling")
            }, prev: function (a) {
                return e(a, "previousSibling")
            }, nextAll: function (a) {
                return eb.dir(a, "nextSibling")
            }, prevAll: function (a) {
                return eb.dir(a, "previousSibling")
            }, nextUntil: function (a, b, c) {
                return eb.dir(a, "nextSibling", c)
            }, prevUntil: function (a, b, c) {
                return eb.dir(a, "previousSibling", c)
            }, siblings: function (a) {
                return eb.sibling((a.parentNode || {}).firstChild, a)
            }, children: function (a) {
                return eb.sibling(a.firstChild)
            }, contents: function (a) {
                return eb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : eb.merge([], a.childNodes)
            }
        }, function (a, b) {
            eb.fn[a] = function (c, d) {
                var e = eb.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = eb.filter(d, e)), this.length > 1 && (sb[a] || (e = eb.unique(e)), rb.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var tb = /\S+/g, ub = {};
        eb.Callbacks = function (a) {
            a = "string" == typeof a ? ub[a] || f(a) : eb.extend({}, a);
            var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
                for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
                b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            }, l = {
                add: function () {
                    if (i) {
                        var d = i.length;
                        !function f(b) {
                            eb.each(b, function (b, c) {
                                var d = eb.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = i.length : c && (h = d, k(c))
                    }
                    return this
                }, remove: function () {
                    return i && eb.each(arguments, function (a, c) {
                        for (var d; (d = eb.inArray(c, i, d)) > -1;)i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                    }), this
                }, has: function (a) {
                    return a ? eb.inArray(a, i) > -1 : !(!i || !i.length)
                }, empty: function () {
                    return i = [], e = 0, this
                }, disable: function () {
                    return i = j = c = void 0, this
                }, disabled: function () {
                    return !i
                }, lock: function () {
                    return j = void 0, c || l.disable(), this
                }, locked: function () {
                    return !j
                }, fireWith: function (a, c) {
                    return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                }, fire: function () {
                    return l.fireWith(this, arguments), this
                }, fired: function () {
                    return !!d
                }
            };
            return l
        }, eb.extend({
            Deferred: function (a) {
                var b = [["resolve", "done", eb.Callbacks("once memory"), "resolved"], ["reject", "fail", eb.Callbacks("once memory"), "rejected"], ["notify", "progress", eb.Callbacks("memory")]], c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return eb.Deferred(function (c) {
                            eb.each(b, function (b, f) {
                                var g = eb.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && eb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? eb.extend(a, d) : d
                    }
                }, e = {};
                return d.pipe = d.then, eb.each(b, function (a, f) {
                    var g = f[2], h = f[3];
                    d[f[1]] = g.add, h && g.add(function () {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            }, when: function (a) {
                var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && eb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : eb.Deferred(), j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
                if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && eb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var vb;
        eb.fn.ready = function (a) {
            return eb.ready.promise().done(a), this
        }, eb.extend({
            isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? eb.readyWait++ : eb.ready(!0)
            }, ready: function (a) {
                if (a === !0 ? !--eb.readyWait : !eb.isReady) {
                    if (!ob.body)return setTimeout(eb.ready);
                    eb.isReady = !0, a !== !0 && --eb.readyWait > 0 || (vb.resolveWith(ob, [eb]), eb.fn.triggerHandler && (eb(ob).triggerHandler("ready"), eb(ob).off("ready")))
                }
            }
        }), eb.ready.promise = function (b) {
            if (!vb)if (vb = eb.Deferred(), "complete" === ob.readyState)setTimeout(eb.ready); else if (ob.addEventListener)ob.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1); else {
                ob.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && ob.documentElement
                } catch (d) {
                }
                c && c.doScroll && !function e() {
                    if (!eb.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        g(), eb.ready()
                    }
                }()
            }
            return vb.promise(b)
        };
        var wb, xb = "undefined";
        for (wb in eb(cb))break;
        cb.ownLast = "0" !== wb, cb.inlineBlockNeedsLayout = !1, eb(function () {
            var a, b, c, d;
            c = ob.getElementsByTagName("body")[0], c && c.style && (b = ob.createElement("div"), d = ob.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xb && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", cb.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }), function () {
            var a = ob.createElement("div");
            if (null == cb.deleteExpando) {
                cb.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    cb.deleteExpando = !1
                }
            }
            a = null
        }(), eb.acceptData = function (a) {
            var b = eb.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
        var yb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, zb = /([A-Z])/g;
        eb.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (a) {
                return a = a.nodeType ? eb.cache[a[eb.expando]] : a[eb.expando], !!a && !j(a)
            },
            data: function (a, b, c) {
                return k(a, b, c)
            },
            removeData: function (a, b) {
                return l(a, b)
            },
            _data: function (a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return l(a, b, !0)
            }
        }), eb.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = eb.data(f), 1 === f.nodeType && !eb._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = eb.camelCase(d.slice(5)), i(f, d, e[d])));
                        eb._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    eb.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    eb.data(this, a, b)
                }) : f ? i(f, a, eb.data(f, a)) : void 0
            }, removeData: function (a) {
                return this.each(function () {
                    eb.removeData(this, a)
                })
            }
        }), eb.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = eb._data(a, b), c && (!d || eb.isArray(c) ? d = eb._data(a, b, eb.makeArray(c)) : d.push(c)), d || []) : void 0
            }, dequeue: function (a, b) {
                b = b || "fx";
                var c = eb.queue(a, b), d = c.length, e = c.shift(), f = eb._queueHooks(a, b), g = function () {
                    eb.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            }, _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return eb._data(a, c) || eb._data(a, c, {
                        empty: eb.Callbacks("once memory").add(function () {
                            eb._removeData(a, b + "queue"), eb._removeData(a, c)
                        })
                    })
            }
        }), eb.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? eb.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = eb.queue(this, a, b);
                    eb._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && eb.dequeue(this, a)
                })
            }, dequeue: function (a) {
                return this.each(function () {
                    eb.dequeue(this, a)
                })
            }, clearQueue: function (a) {
                return this.queue(a || "fx", [])
            }, promise: function (a, b) {
                var c, d = 1, e = eb.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f])
                };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = eb._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Ab = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Bb = ["Top", "Right", "Bottom", "Left"], Cb = function (a, b) {
            return a = b || a, "none" === eb.css(a, "display") || !eb.contains(a.ownerDocument, a)
        }, Db = eb.access = function (a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = null == c;
            if ("object" === eb.type(c)) {
                e = !0;
                for (h in c)eb.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, eb.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(eb(a), c)
                })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }, Eb = /^(?:checkbox|radio)$/i;
        !function () {
            var a = ob.createElement("input"), b = ob.createElement("div"), c = ob.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", cb.leadingWhitespace = 3 === b.firstChild.nodeType, cb.tbody = !b.getElementsByTagName("tbody").length, cb.htmlSerialize = !!b.getElementsByTagName("link").length, cb.html5Clone = "<:nav></:nav>" !== ob.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), cb.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", cb.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", cb.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, cb.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                    cb.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == cb.deleteExpando) {
                cb.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    cb.deleteExpando = !1
                }
            }
        }(), function () {
            var b, c, d = ob.createElement("div");
            for (b in{
                submit: !0,
                change: !0,
                focusin: !0
            })c = "on" + b, (cb[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), cb[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Fb = /^(?:input|select|textarea)$/i, Gb = /^key/, Hb = /^(?:mouse|pointer|contextmenu)|click/, Ib = /^(?:focusinfocus|focusoutblur)$/, Jb = /^([^.]*)(?:\.(.+)|)$/;
        eb.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = eb._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = eb.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
                        return typeof eb === xb || a && eb.event.triggered === a.type ? void 0 : eb.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(tb) || [""], h = b.length; h--;)f = Jb.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = eb.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = eb.event.special[n] || {}, l = eb.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && eb.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), eb.event.global[n] = !0);
                    a = null
                }
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = eb.hasData(a) && eb._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(tb) || [""], j = b.length; j--;)if (h = Jb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = eb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;)g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || eb.removeEvent(a, n, q.handle), delete k[n])
                    } else for (n in k)eb.event.remove(a, n + b[j], c, d, !0);
                    eb.isEmptyObject(k) && (delete q.handle, eb._removeData(a, "events"))
                }
            },
            trigger: function (b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || ob], n = bb.call(b, "type") ? b.type : b, o = bb.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || ob, 3 !== d.nodeType && 8 !== d.nodeType && !Ib.test(n + eb.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[eb.expando] ? b : new eb.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : eb.makeArray(c, [b]), j = eb.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !eb.isWindow(d)) {
                        for (i = j.delegateType || n, Ib.test(i + n) || (h = h.parentNode); h; h = h.parentNode)m.push(h), k = h;
                        k === (d.ownerDocument || ob) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0; (h = m[l++]) && !b.isPropagationStopped();)b.type = l > 1 ? i : j.bindType || n, f = (eb._data(h, "events") || {})[b.type] && eb._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && eb.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && eb.acceptData(d) && g && d[n] && !eb.isWindow(d)) {
                        k = d[g], k && (d[g] = null), eb.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) {
                        }
                        eb.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function (a) {
                a = eb.event.fix(a);
                var b, c, d, e, f, g = [], h = X.call(arguments), i = (eb._data(this, "events") || {})[a.type] || [], j = eb.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = eb.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((eb.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? eb(c, this).index(i) >= 0 : eb.find(c, this, null, [i]).length), e[c] && e.push(d);
                    e.length && g.push({elem: i, handlers: e})
                }
                return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
            },
            fix: function (a) {
                if (a[eb.expando])return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Hb.test(e) ? this.mouseHooks : Gb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new eb.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || ob), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, b) {
                    var c, d, e, f = b.button, g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || ob, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== o() && this.focus)try {
                            return this.focus(), !1
                        } catch (a) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === o() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return eb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (a) {
                        return eb.nodeName(a.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function (a, b, c, d) {
                var e = eb.extend(new eb.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
                d ? eb.event.trigger(e, null, b) : eb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, eb.removeEvent = ob.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === xb && (a[d] = null), a.detachEvent(d, c))
        }, eb.Event = function (a, b) {
            return this instanceof eb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && eb.extend(this, b), this.timeStamp = a && a.timeStamp || eb.now(), void(this[eb.expando] = !0)) : new eb.Event(a, b)
        }, eb.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, eb.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            eb.event.special[a] = {
                delegateType: b, bindType: b, handle: function (a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return (!e || e !== d && !eb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), cb.submitBubbles || (eb.event.special.submit = {
            setup: function () {
                return eb.nodeName(this, "form") ? !1 : void eb.event.add(this, "click._submit keypress._submit", function (a) {
                    var b = a.target, c = eb.nodeName(b, "input") || eb.nodeName(b, "button") ? b.form : void 0;
                    c && !eb._data(c, "submitBubbles") && (eb.event.add(c, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }), eb._data(c, "submitBubbles", !0))
                })
            }, postDispatch: function (a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && eb.event.simulate("submit", this.parentNode, a, !0))
            }, teardown: function () {
                return eb.nodeName(this, "form") ? !1 : void eb.event.remove(this, "._submit")
            }
        }), cb.changeBubbles || (eb.event.special.change = {
            setup: function () {
                return Fb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (eb.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), eb.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), eb.event.simulate("change", this, a, !0)
                })), !1) : void eb.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    Fb.test(b.nodeName) && !eb._data(b, "changeBubbles") && (eb.event.add(b, "change._change", function (a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || eb.event.simulate("change", this.parentNode, a, !0)
                    }), eb._data(b, "changeBubbles", !0))
                })
            }, handle: function (a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return eb.event.remove(this, "._change"), !Fb.test(this.nodeName)
            }
        }), cb.focusinBubbles || eb.each({focus: "focusin", blur: "focusout"}, function (a, b) {
            var c = function (a) {
                eb.event.simulate(b, a.target, eb.event.fix(a), !0)
            };
            eb.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this, e = eb._data(d, b);
                    e || d.addEventListener(a, c, !0), eb._data(d, b, (e || 0) + 1)
                }, teardown: function () {
                    var d = this.ownerDocument || this, e = eb._data(d, b) - 1;
                    e ? eb._data(d, b, e) : (d.removeEventListener(a, c, !0), eb._removeData(d, b))
                }
            }
        }), eb.fn.extend({
            on: function (a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (f in a)this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = n; else if (!d)return this;
                return 1 === e && (g = d, d = function (a) {
                    return eb().off(a), g.apply(this, arguments)
                }, d.guid = g.guid || (g.guid = eb.guid++)), this.each(function () {
                    eb.event.add(this, a, d, c, b)
                })
            }, one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            }, off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)return d = a.handleObj, eb(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a)this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
                    eb.event.remove(this, a, c, b)
                })
            }, trigger: function (a, b) {
                return this.each(function () {
                    eb.event.trigger(a, b, this)
                })
            }, triggerHandler: function (a, b) {
                var c = this[0];
                return c ? eb.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Kb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Lb = / jQuery\d+="(?:null|\d+)"/g, Mb = new RegExp("<(?:" + Kb + ")[\\s/>]", "i"), Nb = /^\s+/, Ob = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pb = /<([\w:]+)/, Qb = /<tbody/i, Rb = /<|&#?\w+;/, Sb = /<(?:script|style|link)/i, Tb = /checked\s*(?:[^=]|=\s*.checked.)/i, Ub = /^$|\/(?:java|ecma)script/i, Vb = /^true\/(.*)/, Wb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: cb.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Yb = p(ob), Zb = Yb.appendChild(ob.createElement("div"));
        Xb.optgroup = Xb.option, Xb.tbody = Xb.tfoot = Xb.colgroup = Xb.caption = Xb.thead, Xb.th = Xb.td, eb.extend({
            clone: function (a, b, c) {
                var d, e, f, g, h, i = eb.contains(a.ownerDocument, a);
                if (cb.html5Clone || eb.isXMLDoc(a) || !Mb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Zb.innerHTML = a.outerHTML, Zb.removeChild(f = Zb.firstChild)), !(cb.noCloneEvent && cb.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || eb.isXMLDoc(a)))for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g)d[g] && x(e, d[g]);
                if (b)if (c)for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++)w(e, d[g]); else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            }, buildFragment: function (a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)if (f = a[o], f || 0 === f)if ("object" === eb.type(f))eb.merge(n, f.nodeType ? [f] : f); else if (Rb.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Pb.exec(f) || ["", ""])[1].toLowerCase(), k = Xb[i] || Xb._default, h.innerHTML = k[1] + f.replace(Ob, "<$1></$2>") + k[2], e = k[0]; e--;)h = h.lastChild;
                    if (!cb.leadingWhitespace && Nb.test(f) && n.push(b.createTextNode(Nb.exec(f)[0])), !cb.tbody)for (f = "table" !== i || Qb.test(f) ? "<table>" !== k[1] || Qb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;)eb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (eb.merge(n, h.childNodes), h.textContent = ""; h.firstChild;)h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), cb.appendChecked || eb.grep(q(n, "input"), r), o = 0; f = n[o++];)if ((!d || -1 === eb.inArray(f, d)) && (g = eb.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))for (e = 0; f = h[e++];)Ub.test(f.type || "") && c.push(f);
                return h = null, m
            }, cleanData: function (a, b) {
                for (var c, d, e, f, g = 0, h = eb.expando, i = eb.cache, j = cb.deleteExpando, k = eb.event.special; null != (c = a[g]); g++)if ((b || eb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)for (d in f.events)k[d] ? eb.event.remove(c, d) : eb.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xb ? c.removeAttribute(h) : c[h] = null, W.push(e))
                }
            }
        }), eb.fn.extend({
            text: function (a) {
                return Db(this, function (a) {
                    return void 0 === a ? eb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ob).createTextNode(a))
                }, null, a, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            }, remove: function (a, b) {
                for (var c, d = a ? eb.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || eb.cleanData(q(c)), c.parentNode && (b && eb.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
                return this
            }, empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && eb.cleanData(q(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
                    a.options && eb.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            }, clone: function (a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                    return eb.clone(this, a, b)
                })
            }, html: function (a) {
                return Db(this, function (a) {
                    var b = this[0] || {}, c = 0, d = this.length;
                    if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(Lb, "") : void 0;
                    if (!("string" != typeof a || Sb.test(a) || !cb.htmlSerialize && Mb.test(a) || !cb.leadingWhitespace && Nb.test(a) || Xb[(Pb.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Ob, "<$1></$2>");
                        try {
                            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (eb.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {
                        }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            }, replaceWith: function () {
                var a = arguments[0];
                return this.domManip(arguments, function (b) {
                    a = this.parentNode, eb.cleanData(q(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            }, detach: function (a) {
                return this.remove(a, !0)
            }, domManip: function (a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = eb.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !cb.checkClone && Tb.test(m))return this.each(function (c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = eb.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = eb.map(q(h, "script"), t), e = f.length; j > i; i++)d = h, i !== l && (d = eb.clone(d, !0, !0), e && eb.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)for (g = f[f.length - 1].ownerDocument, eb.map(f, u), i = 0; e > i; i++)d = f[i], Ub.test(d.type || "") && !eb._data(d, "globalEval") && eb.contains(g, d) && (d.src ? eb._evalUrl && eb._evalUrl(d.src) : eb.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wb, "")));
                    h = c = null
                }
                return this
            }
        }), eb.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            eb.fn[a] = function (a) {
                for (var c, d = 0, e = [], f = eb(a), g = f.length - 1; g >= d; d++)c = d === g ? this : this.clone(!0), eb(f[d])[b](c), Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var $b, _b = {};
        !function () {
            var a;
            cb.shrinkWrapBlocks = function () {
                if (null != a)return a;
                a = !1;
                var b, c, d;
                return c = ob.getElementsByTagName("body")[0], c && c.style ? (b = ob.createElement("div"), d = ob.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xb && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(ob.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var ac, bc, cc = /^margin/, dc = new RegExp("^(" + Ab + ")(?!px)[a-z%]+$", "i"), ec = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ac = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        }, bc = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ac(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || eb.contains(a.ownerDocument, a) || (g = eb.style(a, b)), dc.test(g) && cc.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : ob.documentElement.currentStyle && (ac = function (a) {
            return a.currentStyle
        }, bc = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ac(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), dc.test(g) && !ec.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        }), function () {
            function b() {
                var b, c, d, e;
                c = ob.getElementsByTagName("body")[0], c && c.style && (b = ob.createElement("div"), d = ob.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, e = b.appendChild(ob.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
            }

            var c, d, e, f, g, h, i;
            c = ob.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], d = e && e.style, d && (d.cssText = "float:left;opacity:.5", cb.opacity = "0.5" === d.opacity, cb.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", cb.clearCloneStyle = "content-box" === c.style.backgroundClip, cb.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, eb.extend(cb, {
                reliableHiddenOffsets: function () {
                    return null == h && b(), h
                }, boxSizingReliable: function () {
                    return null == g && b(), g
                }, pixelPosition: function () {
                    return null == f && b(), f
                }, reliableMarginRight: function () {
                    return null == i && b(), i
                }
            }))
        }(), eb.swap = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)a.style[f] = g[f];
            return e
        };
        var fc = /alpha\([^)]*\)/i, gc = /opacity\s*=\s*([^)]*)/, hc = /^(none|table(?!-c[ea]).+)/, ic = new RegExp("^(" + Ab + ")(.*)$", "i"), jc = new RegExp("^([+-])=(" + Ab + ")", "i"), kc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, lc = {letterSpacing: "0", fontWeight: "400"}, mc = ["Webkit", "O", "Moz", "ms"];
        eb.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = bc(a, "opacity");
                            return "" === c ? "1" : c
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
            cssProps: {"float": cb.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = eb.camelCase(b), i = a.style;
                    if (b = eb.cssProps[h] || (eb.cssProps[h] = B(i, h)), g = eb.cssHooks[b] || eb.cssHooks[h], void 0 === c)return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = jc.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(eb.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || eb.cssNumber[h] || (c += "px"), cb.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))try {
                        i[b] = c
                    } catch (j) {
                    }
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = eb.camelCase(b);
                return b = eb.cssProps[h] || (eb.cssProps[h] = B(a.style, h)), g = eb.cssHooks[b] || eb.cssHooks[h], g && "get"in g && (f = g.get(a, !0, c)), void 0 === f && (f = bc(a, b, d)), "normal" === f && b in lc && (f = lc[b]), "" === c || c ? (e = parseFloat(f), c === !0 || eb.isNumeric(e) ? e || 0 : f) : f
            }
        }), eb.each(["height", "width"], function (a, b) {
            eb.cssHooks[b] = {
                get: function (a, c, d) {
                    return c ? hc.test(eb.css(a, "display")) && 0 === a.offsetWidth ? eb.swap(a, kc, function () {
                        return F(a, b, d)
                    }) : F(a, b, d) : void 0
                }, set: function (a, c, d) {
                    var e = d && ac(a);
                    return D(a, c, d ? E(a, b, d, cb.boxSizing && "border-box" === eb.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), cb.opacity || (eb.cssHooks.opacity = {
            get: function (a, b) {
                return gc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            }, set: function (a, b) {
                var c = a.style, d = a.currentStyle, e = eb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === eb.trim(f.replace(fc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fc.test(f) ? f.replace(fc, e) : f + " " + e)
            }
        }), eb.cssHooks.marginRight = A(cb.reliableMarginRight, function (a, b) {
            return b ? eb.swap(a, {display: "inline-block"}, bc, [a, "marginRight"]) : void 0
        }), eb.each({margin: "", padding: "", border: "Width"}, function (a, b) {
            eb.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + Bb[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, cc.test(a) || (eb.cssHooks[a + b].set = D)
        }), eb.fn.extend({
            css: function (a, b) {
                return Db(this, function (a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (eb.isArray(b)) {
                        for (d = ac(a), e = b.length; e > g; g++)f[b[g]] = eb.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? eb.style(a, b, c) : eb.css(a, b)
                }, a, b, arguments.length > 1)
            }, show: function () {
                return C(this, !0)
            }, hide: function () {
                return C(this)
            }, toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    Cb(this) ? eb(this).show() : eb(this).hide()
                })
            }
        }), eb.Tween = G, G.prototype = {
            constructor: G, init: function (a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (eb.cssNumber[c] ? "" : "px")
            }, cur: function () {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            }, run: function (a) {
                var b, c = G.propHooks[this.prop];
                return this.pos = b = this.options.duration ? eb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
            }
        }, G.prototype.init.prototype = G.prototype, G.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = eb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                }, set: function (a) {
                    eb.fx.step[a.prop] ? eb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[eb.cssProps[a.prop]] || eb.cssHooks[a.prop]) ? eb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, eb.easing = {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, eb.fx = G.prototype.init, eb.fx.step = {};
        var nc, oc, pc = /^(?:toggle|show|hide)$/, qc = new RegExp("^(?:([+-])=|)(" + Ab + ")([a-z%]*)$", "i"), rc = /queueHooks$/, sc = [K], tc = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = qc.exec(b), f = e && e[3] || (eb.cssNumber[a] ? "" : "px"), g = (eb.cssNumber[a] || "px" !== f && +d) && qc.exec(eb.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, eb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
        eb.Animation = eb.extend(M, {
            tweener: function (a, b) {
                eb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)c = a[d], tc[c] = tc[c] || [], tc[c].unshift(b)
            }, prefilter: function (a, b) {
                b ? sc.unshift(a) : sc.push(a)
            }
        }), eb.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? eb.extend({}, a) : {
                complete: c || !c && b || eb.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !eb.isFunction(b) && b
            };
            return d.duration = eb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in eb.fx.speeds ? eb.fx.speeds[d.duration] : eb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                eb.isFunction(d.old) && d.old.call(this), d.queue && eb.dequeue(this, d.queue)
            }, d
        }, eb.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Cb).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
            }, animate: function (a, b, c, d) {
                var e = eb.isEmptyObject(a), f = eb.speed(b, c, d), g = function () {
                    var b = M(this, eb.extend({}, a), f);
                    (e || eb._data(this, "finish")) && b.stop(!0)
                };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            }, stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0, e = null != a && a + "queueHooks", f = eb.timers, g = eb._data(this);
                    if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && rc.test(e) && d(g[e]);
                    for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && eb.dequeue(this, a)
                })
            }, finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = eb._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = eb.timers, g = d ? d.length : 0;
                    for (c.finish = !0, eb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), eb.each(["toggle", "show", "hide"], function (a, b) {
            var c = eb.fn[b];
            eb.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
            }
        }), eb.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (a, b) {
            eb.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), eb.timers = [], eb.fx.tick = function () {
            var a, b = eb.timers, c = 0;
            for (nc = eb.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || eb.fx.stop(), nc = void 0
        }, eb.fx.timer = function (a) {
            eb.timers.push(a), a() ? eb.fx.start() : eb.timers.pop()
        }, eb.fx.interval = 13, eb.fx.start = function () {
            oc || (oc = setInterval(eb.fx.tick, eb.fx.interval))
        }, eb.fx.stop = function () {
            clearInterval(oc), oc = null
        }, eb.fx.speeds = {slow: 600, fast: 200, _default: 400}, eb.fn.delay = function (a, b) {
            return a = eb.fx ? eb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, function () {
            var a, b, c, d, e;
            b = ob.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = ob.createElement("select"), e = c.appendChild(ob.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", cb.getSetAttribute = "t" !== b.className, cb.style = /top/.test(d.getAttribute("style")), cb.hrefNormalized = "/a" === d.getAttribute("href"), cb.checkOn = !!a.value, cb.optSelected = e.selected, cb.enctype = !!ob.createElement("form").enctype, c.disabled = !0, cb.optDisabled = !e.disabled, a = ob.createElement("input"), a.setAttribute("value", ""), cb.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), cb.radioValue = "t" === a.value
        }();
        var uc = /\r/g;
        eb.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)return d = eb.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, eb(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : eb.isArray(e) && (e = eb.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = eb.valHooks[this.type] || eb.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e)return b = eb.valHooks[e.type] || eb.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(uc, "") : null == c ? "" : c)
                }
            }
        }), eb.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = eb.find.attr(a, "value");
                        return null != b ? b : eb.trim(eb.text(a))
                    }
                }, select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (cb.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && eb.nodeName(c.parentNode, "optgroup"))) {
                            if (b = eb(c).val(), f)return b;
                            g.push(b)
                        }
                        return g
                    }, set: function (a, b) {
                        for (var c, d, e = a.options, f = eb.makeArray(b), g = e.length; g--;)if (d = e[g], eb.inArray(eb.valHooks.option.get(d), f) >= 0)try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), eb.each(["radio", "checkbox"], function () {
            eb.valHooks[this] = {
                set: function (a, b) {
                    return eb.isArray(b) ? a.checked = eb.inArray(eb(a).val(), b) >= 0 : void 0
                }
            }, cb.checkOn || (eb.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var vc, wc, xc = eb.expr.attrHandle, yc = /^(?:checked|selected)$/i, zc = cb.getSetAttribute, Ac = cb.input;
        eb.fn.extend({
            attr: function (a, b) {
                return Db(this, eb.attr, a, b, arguments.length > 1)
            }, removeAttr: function (a) {
                return this.each(function () {
                    eb.removeAttr(this, a)
                })
            }
        }), eb.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === xb ? eb.prop(a, b, c) : (1 === f && eb.isXMLDoc(a) || (b = b.toLowerCase(), d = eb.attrHooks[b] || (eb.expr.match.bool.test(b) ? wc : vc)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = eb.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void eb.removeAttr(a, b))
            }, removeAttr: function (a, b) {
                var c, d, e = 0, f = b && b.match(tb);
                if (f && 1 === a.nodeType)for (; c = f[e++];)d = eb.propFix[c] || c, eb.expr.match.bool.test(c) ? Ac && zc || !yc.test(c) ? a[d] = !1 : a[eb.camelCase("default-" + c)] = a[d] = !1 : eb.attr(a, c, ""), a.removeAttribute(zc ? c : d)
            }, attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!cb.radioValue && "radio" === b && eb.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), wc = {
            set: function (a, b, c) {
                return b === !1 ? eb.removeAttr(a, c) : Ac && zc || !yc.test(c) ? a.setAttribute(!zc && eb.propFix[c] || c, c) : a[eb.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, eb.each(eb.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = xc[b] || eb.find.attr;
            xc[b] = Ac && zc || !yc.test(b) ? function (a, b, d) {
                var e, f;
                return d || (f = xc[b], xc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xc[b] = f), e
            } : function (a, b, c) {
                return c ? void 0 : a[eb.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), Ac && zc || (eb.attrHooks.value = {
            set: function (a, b, c) {
                return eb.nodeName(a, "input") ? void(a.defaultValue = b) : vc && vc.set(a, b, c)
            }
        }), zc || (vc = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, xc.id = xc.name = xc.coords = function (a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, eb.valHooks.button = {
            get: function (a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            }, set: vc.set
        }, eb.attrHooks.contenteditable = {
            set: function (a, b, c) {
                vc.set(a, "" === b ? !1 : b, c)
            }
        }, eb.each(["width", "height"], function (a, b) {
            eb.attrHooks[b] = {
                set: function (a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), cb.style || (eb.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0
            }, set: function (a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Bc = /^(?:input|select|textarea|button|object)$/i, Cc = /^(?:a|area)$/i;
        eb.fn.extend({
            prop: function (a, b) {
                return Db(this, eb.prop, a, b, arguments.length > 1)
            }, removeProp: function (a) {
                return a = eb.propFix[a] || a, this.each(function () {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {
                    }
                })
            }
        }), eb.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !eb.isXMLDoc(a), f && (b = eb.propFix[b] || b, e = eb.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
            }, propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = eb.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Bc.test(a.nodeName) || Cc.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), cb.hrefNormalized || eb.each(["href", "src"], function (a, b) {
            eb.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), cb.optSelected || (eb.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), eb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            eb.propFix[this.toLowerCase()] = this
        }), cb.enctype || (eb.propFix.enctype = "encoding");
        var Dc = /[\t\r\n\f]/g;
        eb.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
                if (eb.isFunction(a))return this.each(function (b) {
                    eb(this).addClass(a.call(this, b, this.className))
                });
                if (j)for (b = (a || "").match(tb) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Dc, " ") : " ")) {
                    for (f = 0; e = b[f++];)d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = eb.trim(d), c.className !== g && (c.className = g)
                }
                return this
            }, removeClass: function (a) {
                var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
                if (eb.isFunction(a))return this.each(function (b) {
                    eb(this).removeClass(a.call(this, b, this.className))
                });
                if (j)for (b = (a || "").match(tb) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Dc, " ") : "")) {
                    for (f = 0; e = b[f++];)for (; d.indexOf(" " + e + " ") >= 0;)d = d.replace(" " + e + " ", " ");
                    g = a ? eb.trim(d) : "", c.className !== g && (c.className = g)
                }
                return this
            }, toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(eb.isFunction(a) ? function (c) {
                    eb(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function () {
                    if ("string" === c)for (var b, d = 0, e = eb(this), f = a.match(tb) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else(c === xb || "boolean" === c) && (this.className && eb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : eb._data(this, "__className__") || "")
                })
            }, hasClass: function (a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Dc, " ").indexOf(b) >= 0)return !0;
                return !1
            }
        }), eb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            eb.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), eb.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }, bind: function (a, b, c) {
                return this.on(a, null, b, c)
            }, unbind: function (a, b) {
                return this.off(a, null, b)
            }, delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            }, undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Ec = eb.now(), Fc = /\?/, Gc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        eb.parseJSON = function (b) {
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
            var c, d = null, e = eb.trim(b + "");
            return e && !eb.trim(e.replace(Gc, function (a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : eb.error("Invalid JSON: " + b)
        }, eb.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b)return null;
            try {
                a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || eb.error("Invalid XML: " + b), c
        };
        var Hc, Ic, Jc = /#.*$/, Kc = /([?&])_=[^&]*/, Lc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nc = /^(?:GET|HEAD)$/, Oc = /^\/\//, Pc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qc = {}, Rc = {}, Sc = "*/".concat("*");
        try {
            Ic = location.href
        } catch (Tc) {
            Ic = ob.createElement("a"), Ic.href = "", Ic = Ic.href
        }
        Hc = Pc.exec(Ic.toLowerCase()) || [], eb.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ic,
                type: "GET",
                isLocal: Mc.test(Hc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": eb.parseJSON, "text xml": eb.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (a, b) {
                return b ? P(P(a, eb.ajaxSettings), b) : P(eb.ajaxSettings, a)
            },
            ajaxPrefilter: N(Qc),
            ajaxTransport: N(Rc),
            ajax: function (a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (eb.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (eb.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --eb.active || eb.event.trigger("ajaxStop")))
                }

                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = eb.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? eb(m) : eb.event, o = eb.Deferred(), p = eb.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!k)for (k = {}; b = Lc.exec(g);)k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ic) + "").replace(Jc, "").replace(Oc, Hc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = eb.trim(l.dataType || "*").toLowerCase().match(tb) || [""], null == l.crossDomain && (d = Pc.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hc[1] && d[2] === Hc[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hc[3] || ("http:" === Hc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = eb.param(l.data, l.traditional)), O(Qc, l, b, v), 2 === t)return v;
                i = eb.event && l.global, i && 0 === eb.active++ && eb.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nc.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fc.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kc.test(f) ? f.replace(Kc, "$1_=" + Ec++) : f + (Fc.test(f) ? "&" : "?") + "_=" + Ec++)), l.ifModified && (eb.lastModified[f] && v.setRequestHeader("If-Modified-Since", eb.lastModified[f]), eb.etag[f] && v.setRequestHeader("If-None-Match", eb.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers)v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))return v.abort();
                u = "abort";
                for (e in{success: 1, error: 1, complete: 1})v[e](l[e]);
                if (j = O(Rc, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, j.send(r, c)
                    } catch (w) {
                        if (!(2 > t))throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function (a, b, c) {
                return eb.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return eb.get(a, void 0, b, "script")
            }
        }), eb.each(["get", "post"], function (a, b) {
            eb[b] = function (a, c, d, e) {
                return eb.isFunction(c) && (e = e || d, d = c, c = void 0), eb.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), eb._evalUrl = function (a) {
            return eb.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, eb.fn.extend({
            wrapAll: function (a) {
                if (eb.isFunction(a))return this.each(function (b) {
                    eb(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = eb(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            }, wrapInner: function (a) {
                return this.each(eb.isFunction(a) ? function (b) {
                    eb(this).wrapInner(a.call(this, b))
                } : function () {
                    var b = eb(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            }, wrap: function (a) {
                var b = eb.isFunction(a);
                return this.each(function (c) {
                    eb(this).wrapAll(b ? a.call(this, c) : a)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    eb.nodeName(this, "body") || eb(this).replaceWith(this.childNodes)
                }).end()
            }
        }), eb.expr.filters.hidden = function (a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !cb.reliableHiddenOffsets() && "none" === (a.style && a.style.display || eb.css(a, "display"))
        }, eb.expr.filters.visible = function (a) {
            return !eb.expr.filters.hidden(a)
        };
        var Uc = /%20/g, Vc = /\[\]$/, Wc = /\r?\n/g, Xc = /^(?:submit|button|image|reset|file)$/i, Yc = /^(?:input|select|textarea|keygen)/i;
        eb.param = function (a, b) {
            var c, d = [], e = function (a, b) {
                b = eb.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = eb.ajaxSettings && eb.ajaxSettings.traditional), eb.isArray(a) || a.jquery && !eb.isPlainObject(a))eb.each(a, function () {
                e(this.name, this.value)
            }); else for (c in a)S(c, a[c], b, e);
            return d.join("&").replace(Uc, "+")
        }, eb.fn.extend({
            serialize: function () {
                return eb.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var a = eb.prop(this, "elements");
                    return a ? eb.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !eb(this).is(":disabled") && Yc.test(this.nodeName) && !Xc.test(a) && (this.checked || !Eb.test(a))
                }).map(function (a, b) {
                    var c = eb(this).val();
                    return null == c ? null : eb.isArray(c) ? eb.map(c, function (a) {
                        return {name: b.name, value: a.replace(Wc, "\r\n")}
                    }) : {name: b.name, value: c.replace(Wc, "\r\n")}
                }).get()
            }
        }), eb.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
        } : T;
        var Zc = 0, $c = {}, _c = eb.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function () {
            for (var a in $c)$c[a](void 0, !0)
        }), cb.cors = !!_c && "withCredentials"in _c, _c = cb.ajax = !!_c, _c && eb.ajaxTransport(function (a) {
            if (!a.crossDomain || cb.cors) {
                var b;
                return {
                    send: function (c, d) {
                        var e, f = a.xhr(), g = ++Zc;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function (c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))if (delete $c[g], b = void 0, f.onreadystatechange = eb.noop, e)4 !== f.readyState && f.abort(); else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $c[g] = b : b()
                    }, abort: function () {
                        b && b(void 0, !0)
                    }
                }
            }
        }), eb.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (a) {
                    return eb.globalEval(a), a
                }
            }
        }), eb.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), eb.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c = ob.head || eb("head")[0] || ob.documentElement;
                return {
                    send: function (d, e) {
                        b = ob.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    }, abort: function () {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var ad = [], bd = /(=)\?(?=&|$)|\?\?/;
        eb.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var a = ad.pop() || eb.expando + "_" + Ec++;
                return this[a] = !0, a
            }
        }), eb.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = eb.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (Fc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || eb.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && eb.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), eb.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a)return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || ob;
            var d = lb.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = eb.buildFragment([a], b, e), e && e.length && eb(e).remove(), eb.merge([], d.childNodes))
        };
        var cd = eb.fn.load;
        eb.fn.load = function (a, b, c) {
            if ("string" != typeof a && cd)return cd.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = eb.trim(a.slice(h, a.length)), a = a.slice(0, h)), eb.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && eb.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function (a) {
                e = arguments, g.html(d ? eb("<div>").append(eb.parseHTML(a)).find(d) : a)
            }).complete(c && function (a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
        }, eb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            eb.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), eb.expr.filters.animated = function (a) {
            return eb.grep(eb.timers, function (b) {
                return a === b.elem
            }).length
        };
        var dd = a.document.documentElement;
        eb.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = eb.css(a, "position"), l = eb(a), m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = eb.css(a, "top"), i = eb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && eb.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), eb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
            }
        }, eb.fn.extend({
            offset: function (a) {
                if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                    eb.offset.setOffset(this, a, b)
                });
                var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
                if (f)return b = f.documentElement, eb.contains(b, e) ? (typeof e.getBoundingClientRect !== xb && (d = e.getBoundingClientRect()), c = V(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }, position: function () {
                if (this[0]) {
                    var a, b, c = {top: 0, left: 0}, d = this[0];
                    return "fixed" === eb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), eb.nodeName(a[0], "html") || (c = a.offset()), c.top += eb.css(a[0], "borderTopWidth", !0), c.left += eb.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - eb.css(d, "marginTop", !0),
                        left: b.left - c.left - eb.css(d, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || dd; a && !eb.nodeName(a, "html") && "static" === eb.css(a, "position");)a = a.offsetParent;
                    return a || dd
                })
            }
        }), eb.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
            var c = /Y/.test(b);
            eb.fn[a] = function (d) {
                return Db(this, function (a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? eb(f).scrollLeft() : e, c ? e : eb(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), eb.each(["top", "left"], function (a, b) {
            eb.cssHooks[b] = A(cb.pixelPosition, function (a, c) {
                return c ? (c = bc(a, b), dc.test(c) ? eb(a).position()[b] + "px" : c) : void 0
            })
        }), eb.each({Height: "height", Width: "width"}, function (a, b) {
            eb.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                eb.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Db(this, function (b, c, d) {
                        var e;
                        return eb.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? eb.css(b, c, g) : eb.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), eb.fn.size = function () {
            return this.length
        }, eb.fn.andSelf = eb.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return eb
        });
        var ed = a.jQuery, fd = a.$;
        return eb.noConflict = function (b) {
            return a.$ === eb && (a.$ = fd), b && a.jQuery === eb && (a.jQuery = ed), eb
        }, typeof b === xb && (a.jQuery = a.$ = eb), eb
    }), function (a, b, c) {
        "use strict";
        function d(a, b) {
            return b = b || Error, function () {
                var c, d, e = arguments[0], f = "[" + (a ? a + ":" : "") + e + "] ", g = arguments[1], h = arguments;
                for (c = f + g.replace(/\{\d+\}/g, function (a) {
                    var b = +a.slice(1, -1);
                    return b + 2 < h.length ? mb(h[b + 2]) : a
                }), c = c + "\nhttp://errors.angularjs.org/1.3.8/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++)c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(mb(arguments[d]));
                return new b(c)
            }
        }

        function e(a) {
            if (null == a || z(a))return !1;
            var b = a.length;
            return a.nodeType === qe && b ? !0 : u(a) || je(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function f(a, b, c) {
            var d, g;
            if (a)if (x(a))for (d in a)"prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if (je(a) || e(a)) {
                var h = "object" != typeof a;
                for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
            } else if (a.forEach && a.forEach !== f)a.forEach(b, c, a); else for (d in a)a.hasOwnProperty(d) && b.call(c, a[d], d, a);
            return a
        }

        function g(a) {
            return Object.keys(a).sort()
        }

        function h(a, b, c) {
            for (var d = g(a), e = 0; e < d.length; e++)b.call(c, a[d[e]], d[e]);
            return d
        }

        function i(a) {
            return function (b, c) {
                a(c, b)
            }
        }

        function j() {
            return ++he
        }

        function k(a, b) {
            b ? a.$$hashKey = b : delete a.$$hashKey
        }

        function l(a) {
            for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
                var e = arguments[c];
                if (e)for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                    var i = f[g];
                    a[i] = e[i]
                }
            }
            return k(a, b), a
        }

        function m(a) {
            return parseInt(a, 10)
        }

        function n(a, b) {
            return l(Object.create(a), b)
        }

        function o() {
        }

        function p(a) {
            return a
        }

        function q(a) {
            return function () {
                return a
            }
        }

        function r(a) {
            return "undefined" == typeof a
        }

        function s(a) {
            return "undefined" != typeof a
        }

        function t(a) {
            return null !== a && "object" == typeof a
        }

        function u(a) {
            return "string" == typeof a
        }

        function v(a) {
            return "number" == typeof a
        }

        function w(a) {
            return "[object Date]" === ee.call(a)
        }

        function x(a) {
            return "function" == typeof a
        }

        function y(a) {
            return "[object RegExp]" === ee.call(a)
        }

        function z(a) {
            return a && a.window === a
        }

        function A(a) {
            return a && a.$evalAsync && a.$watch
        }

        function B(a) {
            return "[object File]" === ee.call(a)
        }

        function C(a) {
            return "[object FormData]" === ee.call(a)
        }

        function D(a) {
            return "[object Blob]" === ee.call(a)
        }

        function E(a) {
            return "boolean" == typeof a
        }

        function F(a) {
            return a && x(a.then)
        }

        function G(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
        }

        function H(a) {
            var b, c = {}, d = a.split(",");
            for (b = 0; b < d.length; b++)c[d[b]] = !0;
            return c
        }

        function I(a) {
            return Ud(a.nodeName || a[0] && a[0].nodeName)
        }

        function J(a, b) {
            var c = a.indexOf(b);
            return c >= 0 && a.splice(c, 1), b
        }

        function K(a, b, c, d) {
            if (z(a) || A(a))throw fe("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (b) {
                if (a === b)throw fe("cpi", "Can't copy! Source and destination are identical.");
                if (c = c || [], d = d || [], t(a)) {
                    var e = c.indexOf(a);
                    if (-1 !== e)return d[e];
                    c.push(a), d.push(b)
                }
                var g;
                if (je(a)) {
                    b.length = 0;
                    for (var h = 0; h < a.length; h++)g = K(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
                } else {
                    var i = b.$$hashKey;
                    je(b) ? b.length = 0 : f(b, function (a, c) {
                        delete b[c]
                    });
                    for (var j in a)a.hasOwnProperty(j) && (g = K(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g);
                    k(b, i)
                }
            } else if (b = a, a)if (je(a))b = K(a, [], c, d); else if (w(a))b = new Date(a.getTime()); else if (y(a))b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex; else if (t(a)) {
                var l = Object.create(Object.getPrototypeOf(a));
                b = K(a, l, c, d)
            }
            return b
        }

        function L(a, b) {
            if (je(a)) {
                b = b || [];
                for (var c = 0, d = a.length; d > c; c++)b[c] = a[c]
            } else if (t(a)) {
                b = b || {};
                for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
            }
            return b || a
        }

        function M(a, b) {
            if (a === b)return !0;
            if (null === a || null === b)return !1;
            if (a !== a && b !== b)return !0;
            var d, e, f, g = typeof a, h = typeof b;
            if (g == h && "object" == g) {
                if (!je(a)) {
                    if (w(a))return w(b) ? M(a.getTime(), b.getTime()) : !1;
                    if (y(a) && y(b))return a.toString() == b.toString();
                    if (A(a) || A(b) || z(a) || z(b) || je(b))return !1;
                    f = {};
                    for (e in a)if ("$" !== e.charAt(0) && !x(a[e])) {
                        if (!M(a[e], b[e]))return !1;
                        f[e] = !0
                    }
                    for (e in b)if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e]))return !1;
                    return !0
                }
                if (!je(b))return !1;
                if ((d = a.length) == b.length) {
                    for (e = 0; d > e; e++)if (!M(a[e], b[e]))return !1;
                    return !0
                }
            }
            return !1
        }

        function N(a, b, c) {
            return a.concat(be.call(b, c))
        }

        function O(a, b) {
            return be.call(a, b || 0)
        }

        function P(a, b) {
            var c = arguments.length > 2 ? O(arguments, 2) : [];
            return !x(b) || b instanceof RegExp ? b : c.length ? function () {
                return arguments.length ? b.apply(a, N(c, arguments, 0)) : b.apply(a, c)
            } : function () {
                return arguments.length ? b.apply(a, arguments) : b.call(a)
            }
        }

        function Q(a, d) {
            var e = d;
            return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
        }

        function R(a, b) {
            return "undefined" == typeof a ? c : (v(b) || (b = b ? 2 : null), JSON.stringify(a, Q, b))
        }

        function S(a) {
            return u(a) ? JSON.parse(a) : a
        }

        function T(a) {
            a = $d(a).clone();
            try {
                a.empty()
            } catch (b) {
            }
            var c = $d("<div>").append(a).html();
            try {
                return a[0].nodeType === re ? Ud(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                    return "<" + Ud(b)
                })
            } catch (b) {
                return Ud(c)
            }
        }

        function U(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
            }
        }

        function V(a) {
            var b, c, d = {};
            return f((a || "").split("&"), function (a) {
                if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                    var e = s(b[1]) ? U(b[1]) : !0;
                    Vd.call(d, c) ? je(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
                }
            }), d
        }

        function W(a) {
            var b = [];
            return f(a, function (a, c) {
                je(a) ? f(a, function (a) {
                    b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
                }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }), b.length ? b.join("&") : ""
        }

        function X(a) {
            return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Y(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
        }

        function Z(a, b) {
            var c, d, e = ne.length;
            for (a = $d(a), d = 0; e > d; ++d)if (c = ne[d] + b, u(c = a.attr(c)))return c;
            return null
        }

        function $(a, b) {
            var c, d, e = {};
            f(ne, function (b) {
                var e = b + "app";
                !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
            }), f(ne, function (b) {
                var e, f = b + "app";
                !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
            }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [d] : [], e))
        }

        function _(c, d, e) {
            t(e) || (e = {});
            var g = {strictDi: !1};
            e = l(g, e);
            var h = function () {
                if (c = $d(c), c.injector()) {
                    var a = c[0] === b ? "document" : T(c);
                    throw fe("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                d = d || [], d.unshift(["$provide", function (a) {
                    a.value("$rootElement", c)
                }]), e.debugInfoEnabled && d.push(["$compileProvider", function (a) {
                    a.debugInfoEnabled(!0)
                }]), d.unshift("ng");
                var f = Sb(d, e.strictDi);
                return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                    a.$apply(function () {
                        b.data("$injector", d), c(b)(a)
                    })
                }]), f
            }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
            return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), void(ge.resumeBootstrap = function (a) {
                f(a, function (a) {
                    d.push(a)
                }), h()
            }))
        }

        function ab() {
            a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
        }

        function bb(a) {
            var b = ge.element(a).injector();
            if (!b)throw fe("test", "no injector found for element argument to getTestability");
            return b.get("$$testability")
        }

        function cb(a, b) {
            return b = b || "_", a.replace(oe, function (a, c) {
                return (c ? b : "") + a.toLowerCase()
            })
        }

        function db() {
            var b;
            pe || (_d = a.jQuery, _d && _d.fn.on ? ($d = _d, l(_d.fn, {
                scope: Je.scope,
                isolateScope: Je.isolateScope,
                controller: Je.controller,
                injector: Je.injector,
                inheritedData: Je.inheritedData
            }), b = _d.cleanData, _d.cleanData = function (a) {
                var c;
                if (ie)ie = !1; else for (var d, e = 0; null != (d = a[e]); e++)c = _d._data(d, "events"), c && c.$destroy && _d(d).triggerHandler("$destroy");
                b(a)
            }) : $d = ub, ge.element = $d, pe = !0)
        }

        function eb(a, b, c) {
            if (!a)throw fe("areq", "Argument '{0}' is {1}", b || "?", c || "required");
            return a
        }

        function fb(a, b, c) {
            return c && je(a) && (a = a[a.length - 1]), eb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
        }

        function gb(a, b) {
            if ("hasOwnProperty" === a)throw fe("badname", "hasOwnProperty is not a valid {0} name", b)
        }

        function hb(a, b, c) {
            if (!b)return a;
            for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++)d = e[h], a && (a = (f = a)[d]);
            return !c && x(a) ? P(f, a) : a
        }

        function ib(a) {
            var b = a[0], c = a[a.length - 1], d = [b];
            do {
                if (b = b.nextSibling, !b)break;
                d.push(b)
            } while (b !== c);
            return $d(d)
        }

        function jb() {
            return Object.create(null)
        }

        function kb(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c())
            }

            var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
            return f.$$minErr = f.$$minErr || d, b(f, "module", function () {
                var a = {};
                return function (d, f, g) {
                    var h = function (a, b) {
                        if ("hasOwnProperty" === a)throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                    };
                    return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
                        function a(a, c, d, e) {
                            return e || (e = b), function () {
                                return e[d || "push"]([a, c, arguments]), j
                            }
                        }

                        if (!f)throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                        var b = [], e = [], h = [], i = a("$injector", "invoke", "push", e), j = {
                            _invokeQueue: b,
                            _configBlocks: e,
                            _runBlocks: h,
                            requires: f,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: i,
                            run: function (a) {
                                return h.push(a), this
                            }
                        };
                        return g && i(g), j
                    })
                }
            })
        }

        function lb(a) {
            var b = [];
            return JSON.stringify(a, function (a, c) {
                if (c = Q(a, c), t(c)) {
                    if (b.indexOf(c) >= 0)return "<<already seen>>";
                    b.push(c)
                }
                return c
            })
        }

        function mb(a) {
            return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? lb(a) : a
        }

        function nb(b) {
            l(b, {
                bootstrap: _,
                copy: K,
                extend: l,
                equals: M,
                element: $d,
                forEach: f,
                injector: Sb,
                noop: o,
                bind: P,
                toJson: R,
                fromJson: S,
                identity: p,
                isUndefined: r,
                isDefined: s,
                isString: u,
                isFunction: x,
                isObject: t,
                isNumber: v,
                isElement: G,
                isArray: je,
                version: ve,
                isDate: w,
                lowercase: Ud,
                uppercase: Wd,
                callbacks: {counter: 0},
                getTestability: bb,
                $$minErr: d,
                $$csp: me,
                reloadWithDebugInfo: ab
            }), ae = kb(a);
            try {
                ae("ngLocale")
            } catch (c) {
                ae("ngLocale", []).provider("$locale", qc)
            }
            ae("ng", ["ngLocale"], ["$provide", function (a) {
                a.provider({$$sanitizeUri: Wc}), a.provider("$compile", Zb).directive({
                    a: Bf,
                    input: Uf,
                    textarea: Uf,
                    form: Gf,
                    script: Lg,
                    select: Og,
                    style: Qg,
                    option: Pg,
                    ngBind: lg,
                    ngBindHtml: ng,
                    ngBindTemplate: mg,
                    ngClass: og,
                    ngClassEven: qg,
                    ngClassOdd: pg,
                    ngCloak: rg,
                    ngController: sg,
                    ngForm: Hf,
                    ngHide: Fg,
                    ngIf: vg,
                    ngInclude: wg,
                    ngInit: yg,
                    ngNonBindable: zg,
                    ngPluralize: Ag,
                    ngRepeat: Bg,
                    ngShow: Eg,
                    ngStyle: Gg,
                    ngSwitch: Hg,
                    ngSwitchWhen: Ig,
                    ngSwitchDefault: Jg,
                    ngOptions: Ng,
                    ngTransclude: Kg,
                    ngModel: bg,
                    ngList: hg,
                    ngChange: cg,
                    pattern: eg,
                    ngPattern: eg,
                    required: dg,
                    ngRequired: dg,
                    minlength: gg,
                    ngMinlength: gg,
                    maxlength: fg,
                    ngMaxlength: fg,
                    ngValue: jg,
                    ngModelOptions: kg
                }).directive({ngInclude: xg}).directive(Cf).directive(tg), a.provider({
                    $anchorScroll: Tb,
                    $animate: Te,
                    $browser: Wb,
                    $cacheFactory: Xb,
                    $controller: bc,
                    $document: cc,
                    $exceptionHandler: dc,
                    $filter: gd,
                    $interpolate: oc,
                    $interval: pc,
                    $http: kc,
                    $httpBackend: mc,
                    $location: Ec,
                    $log: Fc,
                    $parse: Qc,
                    $rootScope: Vc,
                    $q: Rc,
                    $$q: Sc,
                    $sce: $c,
                    $sceDelegate: Zc,
                    $sniffer: _c,
                    $templateCache: Yb,
                    $templateRequest: ad,
                    $$testability: bd,
                    $timeout: cd,
                    $window: fd,
                    $$rAF: Uc,
                    $$asyncCallback: Ub,
                    $$jqLite: Nb
                })
            }])
        }

        function ob() {
            return ++xe
        }

        function pb(a) {
            return a.replace(Ae, function (a, b, c, d) {
                return d ? c.toUpperCase() : c
            }).replace(Be, "Moz$1")
        }

        function qb(a) {
            return !Fe.test(a)
        }

        function rb(a) {
            var b = a.nodeType;
            return b === qe || !b || b === te
        }

        function sb(a, b) {
            var c, d, e, g, h = b.createDocumentFragment(), i = [];
            if (qb(a))i.push(b.createTextNode(a)); else {
                for (c = c || h.appendChild(b.createElement("div")), d = (Ge.exec(a) || ["", ""])[1].toLowerCase(), e = Ie[d] || Ie._default, c.innerHTML = e[1] + a.replace(He, "<$1></$2>") + e[2], g = e[0]; g--;)c = c.lastChild;
                i = N(i, c.childNodes), c = h.firstChild, c.textContent = ""
            }
            return h.textContent = "", h.innerHTML = "", f(i, function (a) {
                h.appendChild(a)
            }), h
        }

        function tb(a, c) {
            c = c || b;
            var d;
            return (d = Ee.exec(a)) ? [c.createElement(d[1])] : (d = sb(a, c)) ? d.childNodes : []
        }

        function ub(a) {
            if (a instanceof ub)return a;
            var b;
            if (u(a) && (a = ke(a), b = !0), !(this instanceof ub)) {
                if (b && "<" != a.charAt(0))throw De("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new ub(a)
            }
            b ? Eb(this, tb(a)) : Eb(this, a)
        }

        function vb(a) {
            return a.cloneNode(!0)
        }

        function wb(a, b) {
            if (b || yb(a), a.querySelectorAll)for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++)yb(c[d])
        }

        function xb(a, b, c, d) {
            if (s(d))throw De("offargs", "jqLite#off() does not support the `selector` argument");
            var e = zb(a), g = e && e.events, h = e && e.handle;
            if (h)if (b)f(b.split(" "), function (b) {
                if (s(c)) {
                    var d = g[b];
                    if (J(d || [], c), d && d.length > 0)return
                }
                ze(a, b, h), delete g[b]
            }); else for (b in g)"$destroy" !== b && ze(a, b, h), delete g[b]
        }

        function yb(a, b) {
            var d = a.ng339, e = d && we[d];
            if (e) {
                if (b)return void delete e.data[b];
                e.handle && (e.events.$destroy && e.handle({}, "$destroy"), xb(a)), delete we[d], a.ng339 = c
            }
        }

        function zb(a, b) {
            var d = a.ng339, e = d && we[d];
            return b && !e && (a.ng339 = d = ob(), e = we[d] = {events: {}, data: {}, handle: c}), e
        }

        function Ab(a, b, c) {
            if (rb(a)) {
                var d = s(c), e = !d && b && !t(b), f = !b, g = zb(a, !e), h = g && g.data;
                if (d)h[b] = c; else {
                    if (f)return h;
                    if (e)return h && h[b];
                    l(h, b)
                }
            }
        }

        function Bb(a, b) {
            return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
        }

        function Cb(a, b) {
            b && a.setAttribute && f(b.split(" "), function (b) {
                a.setAttribute("class", ke((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ke(b) + " ", " ")))
            })
        }

        function Db(a, b) {
            if (b && a.setAttribute) {
                var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                f(b.split(" "), function (a) {
                    a = ke(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
                }), a.setAttribute("class", ke(c))
            }
        }

        function Eb(a, b) {
            if (b)if (b.nodeType)a[a.length++] = b; else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)for (var d = 0; c > d; d++)a[a.length++] = b[d]
                } else a[a.length++] = b
            }
        }

        function Fb(a, b) {
            return Gb(a, "$" + (b || "ngController") + "Controller")
        }

        function Gb(a, b, d) {
            a.nodeType == te && (a = a.documentElement);
            for (var e = je(b) ? b : [b]; a;) {
                for (var f = 0, g = e.length; g > f; f++)if ((d = $d.data(a, e[f])) !== c)return d;
                a = a.parentNode || a.nodeType === ue && a.host
            }
        }

        function Hb(a) {
            for (wb(a, !0); a.firstChild;)a.removeChild(a.firstChild)
        }

        function Ib(a, b) {
            b || wb(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        }

        function Jb(b, c) {
            c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : $d(c).on("load", b)
        }

        function Kb(a, b) {
            var c = Ke[b.toLowerCase()];
            return c && Le[I(a)] && c
        }

        function Lb(a, b) {
            var c = a.nodeName;
            return ("INPUT" === c || "TEXTAREA" === c) && Me[b]
        }

        function Mb(a, b) {
            var c = function (c, d) {
                c.isDefaultPrevented = function () {
                    return c.defaultPrevented
                };
                var e = b[d || c.type], f = e ? e.length : 0;
                if (f) {
                    if (r(c.immediatePropagationStopped)) {
                        var g = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function () {
                            c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                        }
                    }
                    c.isImmediatePropagationStopped = function () {
                        return c.immediatePropagationStopped === !0
                    }, f > 1 && (e = L(e));
                    for (var h = 0; f > h; h++)c.isImmediatePropagationStopped() || e[h].call(a, c)
                }
            };
            return c.elem = a, c
        }

        function Nb() {
            this.$get = function () {
                return l(ub, {
                    hasClass: function (a, b) {
                        return a.attr && (a = a[0]), Bb(a, b)
                    }, addClass: function (a, b) {
                        return a.attr && (a = a[0]), Db(a, b)
                    }, removeClass: function (a, b) {
                        return a.attr && (a = a[0]), Cb(a, b)
                    }
                })
            }
        }

        function Ob(a, b) {
            var c = a && a.$$hashKey;
            if (c)return "function" == typeof c && (c = a.$$hashKey()), c;
            var d = typeof a;
            return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a
        }

        function Pb(a, b) {
            if (b) {
                var c = 0;
                this.nextUid = function () {
                    return ++c
                }
            }
            f(a, this.put, this)
        }

        function Qb(a) {
            var b = a.toString().replace(Qe, ""), c = b.match(Ne);
            return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function Rb(a, b, c) {
            var d, e, g, h;
            if ("function" == typeof a) {
                if (!(d = a.$inject)) {
                    if (d = [], a.length) {
                        if (b)throw u(c) && c || (c = a.name || Qb(a)), Re("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                        e = a.toString().replace(Qe, ""), g = e.match(Ne), f(g[1].split(Oe), function (a) {
                            a.replace(Pe, function (a, b, c) {
                                d.push(c)
                            })
                        })
                    }
                    a.$inject = d
                }
            } else je(a) ? (h = a.length - 1, fb(a[h], "fn"), d = a.slice(0, h)) : fb(a, "fn", !0);
            return d
        }

        function Sb(a, b) {
            function d(a) {
                return function (b, c) {
                    return t(b) ? void f(b, i(a)) : a(b, c)
                }
            }

            function e(a, b) {
                if (gb(a, "service"), (x(b) || je(b)) && (b = A.instantiate(b)), !b.$get)throw Re("pget", "Provider '{0}' must define $get factory method.", a);
                return z[a + v] = b
            }

            function g(a, b) {
                return function () {
                    var c = C.invoke(b, this);
                    if (r(c))throw Re("undef", "Provider '{0}' must return a value from $get factory method.", a);
                    return c
                }
            }

            function h(a, b, c) {
                return e(a, {$get: c !== !1 ? g(a, b) : b})
            }

            function j(a, b) {
                return h(a, ["$injector", function (a) {
                    return a.instantiate(b)
                }])
            }

            function k(a, b) {
                return h(a, q(b), !1)
            }

            function l(a, b) {
                gb(a, "constant"), z[a] = b, B[a] = b
            }

            function m(a, b) {
                var c = A.get(a + v), d = c.$get;
                c.$get = function () {
                    var a = C.invoke(d, c);
                    return C.invoke(b, null, {$delegate: a})
                }
            }

            function n(a) {
                var b, c = [];
                return f(a, function (a) {
                    function d(a) {
                        var b, c;
                        for (b = 0, c = a.length; c > b; b++) {
                            var d = a[b], e = A.get(d[0]);
                            e[d[1]].apply(e, d[2])
                        }
                    }

                    if (!y.get(a)) {
                        y.put(a, !0);
                        try {
                            u(a) ? (b = ae(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : je(a) ? c.push(A.invoke(a)) : fb(a, "module")
                        } catch (e) {
                            throw je(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Re("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                        }
                    }
                }), c
            }

            function p(a, c) {
                function d(b, d) {
                    if (a.hasOwnProperty(b)) {
                        if (a[b] === s)throw Re("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                        return a[b]
                    }
                    try {
                        return w.unshift(b), a[b] = s, a[b] = c(b, d)
                    } catch (e) {
                        throw a[b] === s && delete a[b], e
                    } finally {
                        w.shift()
                    }
                }

                function e(a, c, e, f) {
                    "string" == typeof e && (f = e, e = null);
                    var g, h, i, j = [], k = Rb(a, b, f);
                    for (h = 0, g = k.length; g > h; h++) {
                        if (i = k[h], "string" != typeof i)throw Re("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                        j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                    }
                    return je(a) && (a = a[g]), a.apply(c, j)
                }

                function f(a, b, c) {
                    var d = Object.create((je(a) ? a[a.length - 1] : a).prototype), f = e(a, d, b, c);
                    return t(f) || x(f) ? f : d
                }

                return {
                    invoke: e, instantiate: f, get: d, annotate: Rb, has: function (b) {
                        return z.hasOwnProperty(b + v) || a.hasOwnProperty(b)
                    }
                }
            }

            b = b === !0;
            var s = {}, v = "Provider", w = [], y = new Pb([], !0), z = {
                $provide: {
                    provider: d(e),
                    factory: d(h),
                    service: d(j),
                    value: d(k),
                    constant: d(l),
                    decorator: m
                }
            }, A = z.$injector = p(z, function (a, b) {
                throw ge.isString(b) && w.push(b), Re("unpr", "Unknown provider: {0}", w.join(" <- "))
            }), B = {}, C = B.$injector = p(B, function (a, b) {
                var d = A.get(a + v, b);
                return C.invoke(d.$get, d, c, a)
            });
            return f(n(a), function (a) {
                C.invoke(a || o)
            }), C
        }

        function Tb() {
            var a = !0;
            this.disableAutoScrolling = function () {
                a = !1
            }, this.$get = ["$window", "$location", "$rootScope", function (b, c, d) {
                function e(a) {
                    var b = null;
                    return Array.prototype.some.call(a, function (a) {
                        return "a" === I(a) ? (b = a, !0) : void 0
                    }), b
                }

                function f() {
                    var a = h.yOffset;
                    if (x(a))a = a(); else if (G(a)) {
                        var c = a[0], d = b.getComputedStyle(c);
                        a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                    } else v(a) || (a = 0);
                    return a
                }

                function g(a) {
                    if (a) {
                        a.scrollIntoView();
                        var c = f();
                        if (c) {
                            var d = a.getBoundingClientRect().top;
                            b.scrollBy(0, d - c)
                        }
                    } else b.scrollTo(0, 0)
                }

                function h() {
                    var a, b = c.hash();
                    b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null)
                }

                var i = b.document;
                return a && d.$watch(function () {
                    return c.hash()
                }, function (a, b) {
                    (a !== b || "" !== a) && Jb(function () {
                        d.$evalAsync(h)
                    })
                }), h
            }]
        }

        function Ub() {
            this.$get = ["$$rAF", "$timeout", function (a, b) {
                return a.supported ? function (b) {
                    return a(b)
                } : function (a) {
                    return b(a, 0, !1)
                }
            }]
        }

        function Vb(a, b, d, e) {
            function g(a) {
                try {
                    a.apply(null, O(arguments, 1))
                } finally {
                    if (x--, 0 === x)for (; y.length;)try {
                        y.pop()()
                    } catch (b) {
                        d.error(b)
                    }
                }
            }

            function h(a) {
                var b = a.indexOf("#");
                return -1 === b ? "" : a.substr(b + 1)
            }

            function i(a, b) {
                !function c() {
                    f(A, function (a) {
                        a()
                    }), z = b(c, a)
                }()
            }

            function j() {
                k(), l()
            }

            function k() {
                B = a.history.state, B = r(B) ? null : B, M(B, I) && (B = I), I = B
            }

            function l() {
                (D !== n.url() || C !== B) && (D = n.url(), C = B, f(G, function (a) {
                    a(n.url(), B)
                }))
            }

            function m(a) {
                try {
                    return decodeURIComponent(a)
                } catch (b) {
                    return a
                }
            }

            var n = this, p = b[0], q = a.location, s = a.history, t = a.setTimeout, v = a.clearTimeout, w = {};
            n.isMock = !1;
            var x = 0, y = [];
            n.$$completeOutstandingRequest = g, n.$$incOutstandingRequestCount = function () {
                x++
            }, n.notifyWhenNoOutstandingRequests = function (a) {
                f(A, function (a) {
                    a()
                }), 0 === x ? a() : y.push(a)
            };
            var z, A = [];
            n.addPollFn = function (a) {
                return r(z) && i(100, t), A.push(a), a
            };
            var B, C, D = q.href, E = b.find("base"), F = null;
            k(), C = B, n.url = function (b, c, d) {
                if (r(d) && (d = null), q !== a.location && (q = a.location), s !== a.history && (s = a.history), b) {
                    var f = C === d;
                    if (D === b && (!e.history || f))return n;
                    var g = D && vc(D) === vc(b);
                    return D = b, C = d, !e.history || g && f ? (g || (F = b), c ? q.replace(b) : g ? q.hash = h(b) : q.href = b) : (s[c ? "replaceState" : "pushState"](d, "", b), k(), C = B), n
                }
                return F || q.href.replace(/%27/g, "'")
            }, n.state = function () {
                return B
            };
            var G = [], H = !1, I = null;
            n.onUrlChange = function (b) {
                return H || (e.history && $d(a).on("popstate", j), $d(a).on("hashchange", j), H = !0), G.push(b), b
            }, n.$$checkUrlChange = l, n.baseHref = function () {
                var a = E.attr("href");
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            var J = {}, K = "", L = n.baseHref();
            n.cookies = function (a, b) {
                var e, f, g, h, i;
                if (!a) {
                    if (p.cookie !== K)for (K = p.cookie, f = K.split("; "), J = {}, h = 0; h < f.length; h++)g = f[h], i = g.indexOf("="), i > 0 && (a = m(g.substring(0, i)), J[a] === c && (J[a] = m(g.substring(i + 1))));
                    return J
                }
                b === c ? p.cookie = encodeURIComponent(a) + "=;path=" + L + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + L).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
            }, n.defer = function (a, b) {
                var c;
                return x++, c = t(function () {
                    delete w[c], g(a)
                }, b || 0), w[c] = !0, c
            }, n.defer.cancel = function (a) {
                return w[a] ? (delete w[a], v(a), g(o), !0) : !1
            }
        }

        function Wb() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, c, d) {
                return new Vb(a, d, b, c)
            }]
        }

        function Xb() {
            this.$get = function () {
                function a(a, c) {
                    function e(a) {
                        a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                    }

                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }

                    if (a in b)throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                    var g = 0, h = l({}, c, {id: a}), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                    return b[a] = {
                        put: function (a, b) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {key: a});
                                e(c)
                            }
                            if (!r(b))return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        }, get: function (a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b)return;
                                e(b)
                            }
                            return i[a]
                        }, remove: function (a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b)return;
                                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                            }
                            delete i[a], g--
                        }, removeAll: function () {
                            i = {}, g = 0, k = {}, m = n = null
                        }, destroy: function () {
                            i = null, h = null, k = null, delete b[a]
                        }, info: function () {
                            return l({}, h, {size: g})
                        }
                    }
                }

                var b = {};
                return a.info = function () {
                    var a = {};
                    return f(b, function (b, c) {
                        a[c] = b.info()
                    }), a
                }, a.get = function (a) {
                    return b[a]
                }, a
            }
        }

        function Yb() {
            this.$get = ["$cacheFactory", function (a) {
                return a("templates")
            }]
        }

        function Zb(a, d) {
            function e(a, b) {
                var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
                return f(a, function (a, e) {
                    var f = a.match(c);
                    if (!f)throw Ue("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                    d[e] = {mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || e}
                }), d
            }

            var g = {}, h = "Directive", j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, k = /(([\w\-]+)(?:\:([^;]+))?;?)/, m = H("ngSrc,ngSrcset,src,srcset"), r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, v = /^(on[a-z]+|formaction)$/;
            this.directive = function y(b, c) {
                return gb(b, "directive"), u(b) ? (eb(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], a.factory(b + h, ["$injector", "$exceptionHandler", function (a, c) {
                    var d = [];
                    return f(g[b], function (f, g) {
                        try {
                            var h = a.invoke(f);
                            x(h) ? h = {compile: q(h)} : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), d.push(h)
                        } catch (i) {
                            c(i)
                        }
                    }), d
                }])), g[b].push(c)) : f(b, i(y)), this
            }, this.aHrefSanitizationWhitelist = function (a) {
                return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function (a) {
                return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
            };
            var w = !0;
            this.debugInfoEnabled = function (a) {
                return s(a) ? (w = a, this) : w
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, d, e, i, q, s, y, z, B, C, D) {
                function E(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {
                    }
                }

                function F(a, b, c, d, e) {
                    a instanceof $d || (a = $d(a)), f(a, function (b, c) {
                        b.nodeType == re && b.nodeValue.match(/\S+/) && (a[c] = $d(b).wrap("<span></span>").parent()[0])
                    });
                    var g = H(a, b, a, c, d, e);
                    F.$$addScopeClass(a);
                    var h = null;
                    return function (b, c, d) {
                        eb(b, "scope"), d = d || {};
                        var e = d.parentBoundTranscludeFn, f = d.transcludeControllers, i = d.futureParentElement;
                        e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                        var j;
                        if (j = "html" !== h ? $d($(h, $d("<div>").append(a).html())) : c ? Je.clone.call(a) : a, f)for (var k in f)j.data("$" + k + "Controller", f[k].instance);
                        return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                    }
                }

                function G(a) {
                    var b = a && a[0];
                    return b && "foreignobject" !== I(b) && b.toString().match(/SVG/) ? "svg" : "html"
                }

                function H(a, b, d, e, f, g) {
                    function h(a, d, e, f) {
                        var g, h, i, j, k, l, m, n, q;
                        if (o) {
                            var r = d.length;
                            for (q = new Array(r), k = 0; k < p.length; k += 3)m = p[k], q[m] = d[m]
                        } else q = d;
                        for (k = 0, l = p.length; l > k;)i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), F.$$addScopeInfo($d(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                    }

                    for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++)i = new gb, j = L(a[q], [], i, 0 === q ? e : c, f), k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                    return n ? h : null
                }

                function K(a, b, c) {
                    var d = function (d, e, f, g, h) {
                        return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                            parentBoundTranscludeFn: c,
                            transcludeControllers: f,
                            futureParentElement: g
                        })
                    };
                    return d
                }

                function L(a, b, c, d, e) {
                    var f, g, h = a.nodeType, i = c.$attr;
                    switch (h) {
                        case qe:
                            S(b, $b(I(a)), "E", d, e);
                            for (var l, m, n, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                                var v = !1, w = !1;
                                l = r[s], m = l.name, p = ke(l.value), o = $b(m), (q = lb.test(o)) && (m = m.replace(Ve, "").substr(8).replace(/_(.)/g, function (a, b) {
                                    return b.toUpperCase()
                                }));
                                var x = o.replace(/(Start|End)$/, "");
                                U(x) && o === x + "Start" && (v = m, w = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = $b(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Kb(a, n) && (c[n] = !0)), ab(a, b, p, n, q), S(b, n, "A", d, e, v, w)
                            }
                            if (g = a.className, u(g) && "" !== g)for (; f = k.exec(g);)n = $b(f[2]), S(b, n, "C", d, e) && (c[n] = ke(f[3])), g = g.substr(f.index + f[0].length);
                            break;
                        case re:
                            Z(b, a.nodeValue);
                            break;
                        case se:
                            try {
                                f = j.exec(a.nodeValue), f && (n = $b(f[1]), S(b, n, "M", d, e) && (c[n] = ke(f[2])))
                            } catch (y) {
                            }
                    }
                    return b.sort(X), b
                }

                function N(a, b, c) {
                    var d = [], e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a)throw Ue("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            a.nodeType == qe && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                        } while (e > 0)
                    } else d.push(a);
                    return $d(d)
                }

                function P(a, b, c) {
                    return function (d, e, f, g, h) {
                        return e = N(e[0], b, c), a(d, e, f, g, h)
                    }
                }

                function Q(a, g, h, i, j, k, l, m, n) {
                    function o(a, b, c, d) {
                        a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = db(a, {isolateScope: !0})), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, (I === z || z.$$isolateScope) && (b = db(b, {isolateScope: !0})), m.push(b))
                    }

                    function p(a, b, c, d) {
                        var e, g, h = "data", i = !1, j = c;
                        if (u(b)) {
                            if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), e = e || j[h]("$" + b + "Controller"), !e && !i)throw Ue("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                            return e || null
                        }
                        return je(b) && (e = [], f(b, function (b) {
                            e.push(p(a, b, c, d))
                        })), e
                    }

                    function v(a, b, e, i, j) {
                        function k(a, b, d) {
                            var e;
                            return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), j(a, b, e, d, D)
                        }

                        var n, o, r, t, u, v, w, x, z;
                        if (g === e ? (z = h, x = h.$$element) : (x = $d(e), z = new gb(x, h)), I && (u = b.$new(!0)), j && (w = k, w.$$boundTransclude = j), H && (y = {}, v = {}, f(H, function (a) {
                                var c, d = {
                                    $scope: a === I || a.$$isolateScope ? u : b,
                                    $element: x,
                                    $attrs: z,
                                    $transclude: w
                                };
                                t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c
                            })), I) {
                            F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                            var B = y && y[I.name], C = u;
                            B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function (a, c) {
                                var e, f, g, h, i = a.attrName, j = a.optional, k = a.mode;
                                switch (k) {
                                    case"@":
                                        z.$observe(i, function (a) {
                                            C[c] = a
                                        }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                        break;
                                    case"=":
                                        if (j && !z[i])return;
                                        f = q(z[i]), h = f.literal ? M : function (a, b) {
                                            return a === b || a !== a && b !== b
                                        }, g = f.assign || function () {
                                            throw e = C[c] = f(b), Ue("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name)
                                        }, e = C[c] = f(b);
                                        var l = function (a) {
                                            return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a
                                        };
                                        l.$stateful = !0;
                                        var m;
                                        m = a.collection ? b.$watchCollection(z[i], l) : b.$watch(q(z[i], l), null, f.literal), u.$on("$destroy", m);
                                        break;
                                    case"&":
                                        f = q(z[i]), C[c] = function (a) {
                                            return f(b, a)
                                        }
                                }
                            })
                        }
                        for (y && (f(y, function (a) {
                            a()
                        }), y = null), n = 0, o = l.length; o > n; n++)r = l[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                        var D = b;
                        for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), n = m.length - 1; n >= 0; n--)r = m[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w)
                    }

                    n = n || {};
                    for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, S = !1, U = n.hasElementTranscludeDirective, X = h.$$element = $d(g), Z = k, _ = i, ab = 0, cb = a.length; cb > ab; ab++) {
                        z = a[ab];
                        var eb = z.$$start, hb = z.$$end;
                        if (eb && (X = N(g, eb, hb)), C = c, G > z.priority)break;
                        if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, C = X, X = h.$$element = $d(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], bb(j, O(C), g), _ = F(C, i, G, Z && Z.name, {nonTlbTranscludeDirective: K})) : (C = $d(vb(g)).contents(), X.empty(), _ = F(C, i))), z.template)if (S = !0, Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, E = kb(E), z.replace) {
                            if (Z = z, C = qb(E) ? [] : ac($(z.templateNamespace, ke(E))), g = C[0], 1 != C.length || g.nodeType !== qe)throw Ue("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                            bb(j, X, g);
                            var ib = {$attr: {}}, jb = L(g, [], ib), lb = a.splice(ab + 1, a.length - (ab + 1));
                            I && R(jb), a = a.concat(jb).concat(lb), V(h, ib), cb = a.length
                        } else X.html(E);
                        if (z.templateUrl)S = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), v = W(a.splice(ab, a.length - ab), X, h, j, Q && _, l, m, {
                            controllerDirectives: H,
                            newIsolateScopeDirective: I,
                            templateDirective: J,
                            nonTlbTranscludeDirective: K
                        }), cb = a.length; else if (z.compile)try {
                            D = z.compile(X, h, _), x(D) ? o(null, D, eb, hb) : D && o(D.pre, D.post, eb, hb)
                        } catch (mb) {
                            e(mb, T(X))
                        }
                        z.terminal && (v.terminal = !0, G = Math.max(G, z.priority))
                    }
                    return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, v.templateOnThisElement = S, v.transclude = _, n.hasElementTranscludeDirective = U, v
                }

                function R(a) {
                    for (var b = 0, c = a.length; c > b; b++)a[b] = n(a[b], {$$isolateScope: !0})
                }

                function S(b, d, f, i, j, k, l) {
                    if (d === j)return null;
                    var m = null;
                    if (g.hasOwnProperty(d))for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++)try {
                        o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                            $$start: k,
                            $$end: l
                        })), b.push(o), m = o)
                    } catch (s) {
                        e(s)
                    }
                    return m
                }

                function U(b) {
                    if (g.hasOwnProperty(b))for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++)if (c = d[e], c.multiElement)return !0;
                    return !1
                }

                function V(a, b) {
                    var c = b.$attr, d = a.$attr, e = a.$$element;
                    f(a, function (d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), f(b, function (b, f) {
                        "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function W(a, b, c, d, e, g, h, j) {
                    var k, m, n = [], o = b[0], p = a.shift(), q = l({}, p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }), r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                    return b.empty(), i(B.getTrustedResourceUrl(r)).then(function (i) {
                        var l, u, v, w;
                        if (i = kb(i), p.replace) {
                            if (v = qb(i) ? [] : ac($(s, ke(i))), l = v[0], 1 != v.length || l.nodeType !== qe)throw Ue("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                            u = {$attr: {}}, bb(d, b, l);
                            var x = L(l, [], u);
                            t(p.scope) && R(x), a = x.concat(a), V(c, u)
                        } else l = o, b.html(i);
                        for (a.unshift(q), k = Q(a, l, c, e, b, p, g, h, j), f(d, function (a, c) {
                            a == l && (d[c] = b[0])
                        }), m = H(b[0].childNodes, e); n.length;) {
                            var y = n.shift(), z = n.shift(), A = n.shift(), B = n.shift(), C = b[0];
                            if (!y.$$destroyed) {
                                if (z !== o) {
                                    var D = z.className;
                                    j.hasElementTranscludeDirective && p.replace || (C = vb(l)), bb(A, $d(z), C), E($d(C), D)
                                }
                                w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(m, y, C, d, w)
                            }
                        }
                        n = null
                    }), function (a, b, c, d, e) {
                        var f = e;
                        b.$$destroyed || (n ? n.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), k(m, b, c, d, f)))
                    }
                }

                function X(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function Y(a, b, c, d) {
                    if (b)throw Ue("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
                }

                function Z(a, b) {
                    var c = d(b, !0);
                    c && a.push({
                        priority: 0, compile: function (a) {
                            var b = a.parent(), d = !!b.length;
                            return d && F.$$addBindingClass(b), function (a, b) {
                                var e = b.parent();
                                d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function (a) {
                                    b[0].nodeValue = a
                                })
                            }
                        }
                    })
                }

                function $(a, c) {
                    switch (a = Ud(a || "html")) {
                        case"svg":
                        case"math":
                            var d = b.createElement("div");
                            return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                        default:
                            return c
                    }
                }

                function _(a, b) {
                    if ("srcdoc" == b)return B.HTML;
                    var c = I(a);
                    return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
                }

                function ab(a, b, c, e, f) {
                    var g = _(a, e);
                    f = m[e] || f;
                    var h = d(c, !0, g, f);
                    if (h) {
                        if ("multiple" === e && "select" === I(a))throw Ue("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                        b.push({
                            priority: 100, compile: function () {
                                return {
                                    pre: function (a, b, i) {
                                        var j = i.$$observers || (i.$$observers = {});
                                        if (v.test(e))throw Ue("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var k = i[e];
                                        k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                            "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function bb(a, c, d) {
                    var e, f, g = c[0], h = c.length, i = g.parentNode;
                    if (a)for (e = 0, f = a.length; f > e; e++)if (a[e] == g) {
                        a[e++] = d;
                        for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)l > k ? a[j] = a[k] : delete a[j];
                        a.length -= h - 1, a.context === g && (a.context = d);
                        break
                    }
                    i && i.replaceChild(d, g);
                    var m = b.createDocumentFragment();
                    m.appendChild(g), $d(d).data($d(g).data()), _d ? (ie = !0, _d.cleanData([g])) : delete $d.cache[g[$d.expando]];
                    for (var n = 1, o = c.length; o > n; n++) {
                        var p = c[n];
                        $d(p).remove(), m.appendChild(p), delete c[n]
                    }
                    c[0] = d, c.length = 1
                }

                function db(a, b) {
                    return l(function () {
                        return a.apply(null, arguments)
                    }, a, b)
                }

                function fb(a, b, c, d, f, g) {
                    try {
                        a(b, c, d, f, g)
                    } catch (h) {
                        e(h, T(c))
                    }
                }

                var gb = function (a, b) {
                    if (b) {
                        var c, d, e, f = Object.keys(b);
                        for (c = 0, d = f.length; d > c; c++)e = f[c], this[e] = b[e]
                    } else this.$attr = {};
                    this.$$element = a
                };
                gb.prototype = {
                    $normalize: $b, $addClass: function (a) {
                        a && a.length > 0 && C.addClass(this.$$element, a)
                    }, $removeClass: function (a) {
                        a && a.length > 0 && C.removeClass(this.$$element, a)
                    }, $updateClass: function (a, b) {
                        var c = _b(a, b);
                        c && c.length && C.addClass(this.$$element, c);
                        var d = _b(b, a);
                        d && d.length && C.removeClass(this.$$element, d)
                    }, $set: function (a, b, d, g) {
                        var h, i = this.$$element[0], j = Kb(i, a), k = Lb(i, a), l = a;
                        if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = cb(a, "-"))), h = I(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a)this[a] = b = D(b, "src" === a); else if ("img" === h && "srcset" === a) {
                            for (var m = "", n = ke(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                                var t = 2 * s;
                                m += D(ke(q[t]), !0), m += " " + ke(q[t + 1])
                            }
                            var u = ke(q[2 * s]).split(/\s/);
                            m += D(ke(u[0]), !0), 2 === u.length && (m += " " + ke(u[1])), this[a] = b = m
                        }
                        d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                        var v = this.$$observers;
                        v && f(v[l], function (a) {
                            try {
                                a(b)
                            } catch (c) {
                                e(c)
                            }
                        })
                    }, $observe: function (a, b) {
                        var c = this, d = c.$$observers || (c.$$observers = jb()), e = d[a] || (d[a] = []);
                        return e.push(b), y.$evalAsync(function () {
                            !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                        }), function () {
                            J(e, b)
                        }
                    }
                };
                var hb = d.startSymbol(), ib = d.endSymbol(), kb = "{{" == hb || "}}" == ib ? p : function (a) {
                    return a.replace(/\{\{/g, hb).replace(/}}/g, ib)
                }, lb = /^ngAttr[A-Z]/;
                return F.$$addBindingInfo = w ? function (a, b) {
                    var c = a.data("$binding") || [];
                    je(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
                } : o, F.$$addBindingClass = w ? function (a) {
                    E(a, "ng-binding")
                } : o, F.$$addScopeInfo = w ? function (a, b, c, d) {
                    var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    a.data(e, b)
                } : o, F.$$addScopeClass = w ? function (a, b) {
                    E(a, b ? "ng-isolate-scope" : "ng-scope")
                } : o, F
            }]
        }

        function $b(a) {
            return pb(a.replace(Ve, ""))
        }

        function _b(a, b) {
            var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
            a:for (var f = 0; f < d.length; f++) {
                for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
                c += (c.length > 0 ? " " : "") + g
            }
            return c
        }

        function ac(a) {
            a = $d(a);
            var b = a.length;
            if (1 >= b)return a;
            for (; b--;) {
                var c = a[b];
                c.nodeType === se && ce.call(a, b, 1)
            }
            return a
        }

        function bc() {
            var a = {}, b = !1, e = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function (b, c) {
                gb(b, "controller"), t(b) ? l(a, b) : a[b] = c
            }, this.allowGlobals = function () {
                b = !0
            }, this.$get = ["$injector", "$window", function (f, g) {
                function h(a, b, c, e) {
                    if (!a || !t(a.$scope))throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                    a.$scope[b] = c
                }

                return function (d, i, j, k) {
                    var m, n, o, p;
                    if (j = j === !0, k && u(k) && (p = k), u(d) && (n = d.match(e), o = n[1], p = p || n[3], d = a.hasOwnProperty(o) ? a[o] : hb(i.$scope, o, !0) || (b ? hb(g, o, !0) : c), fb(d, o, !0)), j) {
                        var q = (je(d) ? d[d.length - 1] : d).prototype;
                        return m = Object.create(q), p && h(i, p, m, o || d.name), l(function () {
                            return f.invoke(d, m, i, o), m
                        }, {instance: m, identifier: p})
                    }
                    return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m
                }
            }]
        }

        function cc() {
            this.$get = ["$window", function (a) {
                return $d(a.document)
            }]
        }

        function dc() {
            this.$get = ["$log", function (a) {
                return function () {
                    a.error.apply(a, arguments)
                }
            }]
        }

        function ec(a, b) {
            if (u(a)) {
                var c = a.replace($e, "").trim();
                if (c) {
                    var d = b("Content-Type");
                    (d && 0 === d.indexOf(We) || fc(c)) && (a = S(c))
                }
            }
            return a
        }

        function fc(a) {
            var b = a.match(Ye);
            return b && Ze[b[0]].test(a)
        }

        function gc(a) {
            var b, c, d, e = jb();
            return a ? (f(a.split("\n"), function (a) {
                d = a.indexOf(":"), b = Ud(ke(a.substr(0, d))), c = ke(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
            }), e) : e
        }

        function hc(a) {
            var b = t(a) ? a : c;
            return function (c) {
                if (b || (b = gc(a)), c) {
                    var d = b[Ud(c)];
                    return void 0 === d && (d = null), d
                }
                return b
            }
        }

        function ic(a, b, c, d) {
            return x(d) ? d(a, b, c) : (f(d, function (d) {
                a = d(a, b, c)
            }), a)
        }

        function jc(a) {
            return a >= 200 && 300 > a
        }

        function kc() {
            var a = this.defaults = {
                transformResponse: [ec],
                transformRequest: [function (a) {
                    return !t(a) || B(a) || D(a) || C(a) ? a : R(a)
                }],
                headers: {common: {Accept: "application/json, text/plain, */*"}, post: L(Xe), put: L(Xe), patch: L(Xe)},
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }, b = !1;
            this.useApplyAsync = function (a) {
                return s(a) ? (b = !!a, this) : b
            };
            var e = this.interceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (g, i, j, k, m, n) {
                function o(b) {
                    function e(a) {
                        var b = l({}, a);
                        return b.data = a.data ? ic(a.data, a.headers, a.status, i.transformResponse) : a.data, jc(a.status) ? b : m.reject(b)
                    }

                    function g(a) {
                        var b, c = {};
                        return f(a, function (a, d) {
                            x(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                        }), c
                    }

                    function h(b) {
                        var c, d, e, f = a.headers, h = l({}, b.headers);
                        f = l({}, f.common, f[Ud(b.method)]);
                        a:for (c in f) {
                            d = Ud(c);
                            for (e in h)if (Ud(e) === d)continue a;
                            h[c] = f[c]
                        }
                        return g(h)
                    }

                    if (!ge.isObject(b))throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                    var i = l({
                        method: "get",
                        transformRequest: a.transformRequest,
                        transformResponse: a.transformResponse
                    }, b);
                    i.headers = h(b), i.method = Wd(i.method);
                    var j = function (b) {
                        var d = b.headers, g = ic(b.data, hc(d), c, b.transformRequest);
                        return r(g) && f(d, function (a, b) {
                            "content-type" === Ud(b) && delete d[b]
                        }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), v(b, g).then(e, e)
                    }, k = [j, c], n = m.when(i);
                    for (f(A, function (a) {
                        (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError)
                    }); k.length;) {
                        var o = k.shift(), p = k.shift();
                        n = n.then(o, p)
                    }
                    return n.success = function (a) {
                        return n.then(function (b) {
                            a(b.data, b.status, b.headers, i)
                        }), n
                    }, n.error = function (a) {
                        return n.then(null, function (b) {
                            a(b.data, b.status, b.headers, i)
                        }), n
                    }, n
                }

                function p() {
                    f(arguments, function (a) {
                        o[a] = function (b, c) {
                            return o(l(c || {}, {method: a, url: b}))
                        }
                    })
                }

                function q() {
                    f(arguments, function (a) {
                        o[a] = function (b, c, d) {
                            return o(l(d || {}, {method: a, url: b, data: c}))
                        }
                    })
                }

                function v(d, e) {
                    function f(a, c, d, e) {
                        function f() {
                            h(c, a, d, e)
                        }

                        n && (jc(a) ? n.put(w, [a, c, gc(d), e]) : n.remove(w)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                    }

                    function h(a, b, c, e) {
                        b = Math.max(b, 0), (jc(b) ? q.resolve : q.reject)({
                            data: a,
                            status: b,
                            headers: hc(c),
                            config: d,
                            statusText: e
                        })
                    }

                    function j(a) {
                        h(a.data, a.status, L(a.headers()), a.statusText)
                    }

                    function l() {
                        var a = o.pendingRequests.indexOf(d);
                        -1 !== a && o.pendingRequests.splice(a, 1)
                    }

                    var n, p, q = m.defer(), u = q.promise, v = d.headers, w = y(d.url, d.params);
                    if (o.pendingRequests.push(d), u.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = t(d.cache) ? d.cache : t(a.cache) ? a.cache : z), n && (p = n.get(w), s(p) ? F(p) ? p.then(j, j) : je(p) ? h(p[1], p[0], L(p[2]), p[3]) : h(p, 200, {}, "OK") : n.put(w, u)), r(p)) {
                        var x = ed(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c;
                        x && (v[d.xsrfHeaderName || a.xsrfHeaderName] = x), g(d.method, w, e, f, v, d.timeout, d.withCredentials, d.responseType)
                    }
                    return u
                }

                function y(a, b) {
                    if (!b)return a;
                    var c = [];
                    return h(b, function (a, b) {
                        null === a || r(a) || (je(a) || (a = [a]), f(a, function (a) {
                            t(a) && (a = w(a) ? a.toISOString() : R(a)), c.push(Y(b) + "=" + Y(a))
                        }))
                    }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
                }

                var z = j("$http"), A = [];
                return f(e, function (a) {
                    A.unshift(u(a) ? n.get(a) : n.invoke(a))
                }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
            }]
        }

        function lc() {
            return new a.XMLHttpRequest
        }

        function mc() {
            this.$get = ["$browser", "$window", "$document", function (a, b, c) {
                return nc(a, lc, a.defer, b.angular.callbacks, c[0])
            }]
        }

        function nc(a, b, d, e, g) {
            function h(a, b, c) {
                var d = g.createElement("script"), f = null;
                return d.type = "text/javascript", d.src = a, d.async = !0, f = function (a) {
                    ze(d, "load", f), ze(d, "error", f), g.body.removeChild(d), d = null;
                    var h = -1, i = "unknown";
                    a && ("load" !== a.type || e[b].called || (a = {type: "error"}), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
                }, ye(d, "load", f), ye(d, "error", f), g.body.appendChild(d), f
            }

            return function (g, i, j, k, l, m, n, p) {
                function q() {
                    u && u(), v && v.abort()
                }

                function r(b, e, f, g, h) {
                    y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(o)
                }

                if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Ud(g)) {
                    var t = "_" + (e.counter++).toString(36);
                    e[t] = function (a) {
                        e[t].data = a, e[t].called = !0
                    };
                    var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function (a, b) {
                        r(k, a, e[t].data, "", b), e[t] = o
                    })
                } else {
                    var v = b();
                    v.open(g, i, !0), f(l, function (a, b) {
                        s(a) && v.setRequestHeader(b, a)
                    }), v.onload = function () {
                        var a = v.statusText || "", b = "response"in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
                        0 === c && (c = b ? 200 : "file" == dd(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
                    };
                    var w = function () {
                        r(k, -1, null, null, "")
                    };
                    if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), p)try {
                        v.responseType = p
                    } catch (x) {
                        if ("json" !== p)throw x
                    }
                    v.send(j || null)
                }
                if (m > 0)var y = d(q, m); else F(m) && m.then(q)
            }
        }

        function oc() {
            var a = "{{", b = "}}";
            this.startSymbol = function (b) {
                return b ? (a = b, this) : a
            }, this.endSymbol = function (a) {
                return a ? (b = a, this) : b
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
                function f(a) {
                    return "\\\\\\" + a
                }

                function g(f, g, m, n) {
                    function o(c) {
                        return c.replace(j, a).replace(k, b)
                    }

                    function p(a) {
                        try {
                            return a = D(a), n && !s(a) ? a : E(a)
                        } catch (b) {
                            var c = _e("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                            d(c)
                        }
                    }

                    n = !!n;
                    for (var q, t, u, v = 0, w = [], y = [], z = f.length, A = [], B = []; z > v;) {
                        if (-1 == (q = f.indexOf(a, v)) || -1 == (t = f.indexOf(b, q + h))) {
                            v !== z && A.push(o(f.substring(v)));
                            break
                        }
                        v !== q && A.push(o(f.substring(v, q))), u = f.substring(q + h, t), w.push(u), y.push(c(u, p)), v = t + i, B.push(A.length), A.push("")
                    }
                    if (m && A.length > 1)throw _e("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                    if (!g || w.length) {
                        var C = function (a) {
                            for (var b = 0, c = w.length; c > b; b++) {
                                if (n && r(a[b]))return;
                                A[B[b]] = a[b]
                            }
                            return A.join("")
                        }, D = function (a) {
                            return m ? e.getTrusted(m, a) : e.valueOf(a)
                        }, E = function (a) {
                            if (null == a)return "";
                            switch (typeof a) {
                                case"string":
                                    break;
                                case"number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = R(a)
                            }
                            return a
                        };
                        return l(function (a) {
                            var b = 0, c = w.length, e = new Array(c);
                            try {
                                for (; c > b; b++)e[b] = y[b](a);
                                return C(e)
                            } catch (g) {
                                var h = _e("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                                d(h)
                            }
                        }, {
                            exp: f, expressions: w, $$watchDelegate: function (a, b, c) {
                                var d;
                                return a.$watchGroup(y, function (c, e) {
                                    var f = C(c);
                                    x(b) && b.call(this, f, c !== e ? d : f, a), d = f
                                }, c)
                            }
                        })
                    }
                }

                var h = a.length, i = b.length, j = new RegExp(a.replace(/./g, f), "g"), k = new RegExp(b.replace(/./g, f), "g");
                return g.startSymbol = function () {
                    return a
                }, g.endSymbol = function () {
                    return b
                }, g
            }]
        }

        function pc() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", function (a, b, c, d) {
                function e(e, g, h, i) {
                    var j = b.setInterval, k = b.clearInterval, l = 0, m = s(i) && !i, n = (m ? d : c).defer(), o = n.promise;
                    return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function () {
                        n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), m || a.$apply()
                    }, g), f[o.$$intervalId] = n, o
                }

                var f = {};
                return e.cancel = function (a) {
                    return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
                }, e
            }]
        }

        function qc() {
            this.$get = function () {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function (a) {
                        return 1 === a ? "one" : "other"
                    }
                }
            }
        }

        function rc(a) {
            for (var b = a.split("/"), c = b.length; c--;)b[c] = X(b[c]);
            return b.join("/")
        }

        function sc(a, b) {
            var c = dd(a);
            b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || bf[c.protocol] || null
        }

        function tc(a, b) {
            var c = "/" !== a.charAt(0);
            c && (a = "/" + a);
            var d = dd(a);
            b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
        }

        function uc(a, b) {
            return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
        }

        function vc(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substr(0, b)
        }

        function wc(a) {
            return a.replace(/(#.+)|#$/, "$1")
        }

        function xc(a) {
            return a.substr(0, vc(a).lastIndexOf("/") + 1)
        }

        function yc(a) {
            return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
        }

        function zc(a, b) {
            this.$$html5 = !0, b = b || "";
            var d = xc(a);
            sc(a, this), this.$$parse = function (a) {
                var b = uc(d, a);
                if (!u(b))throw cf("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
                tc(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function () {
                var a = W(this.$$search), b = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
            }, this.$$parseLinkUrl = function (e, f) {
                if (f && "#" === f[0])return this.hash(f.slice(1)), !0;
                var g, h, i;
                return (g = uc(a, e)) !== c ? (h = g, i = (g = uc(b, g)) !== c ? d + (uc("/", g) || g) : a + h) : (g = uc(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i
            }
        }

        function Ac(a, b) {
            var c = xc(a);
            sc(a, this), this.$$parse = function (d) {
                function e(a, b, c) {
                    var d, e = /^\/[A-Z]:(\/.*)/;
                    return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
                }

                var f, g = uc(a, d) || uc(c, d);
                "#" === g.charAt(0) ? (f = uc(b, g), r(f) && (f = g)) : f = this.$$html5 ? g : "", tc(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
            }, this.$$compose = function () {
                var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
            }, this.$$parseLinkUrl = function (b) {
                return vc(a) == vc(b) ? (this.$$parse(b), !0) : !1
            }
        }

        function Bc(a, b) {
            this.$$html5 = !0, Ac.apply(this, arguments);
            var c = xc(a);
            this.$$parseLinkUrl = function (d, e) {
                if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
                var f, g;
                return a == vc(d) ? f = d : (g = uc(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
            }, this.$$compose = function () {
                var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
            }
        }

        function Cc(a) {
            return function () {
                return this[a]
            }
        }

        function Dc(a, b) {
            return function (c) {
                return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
            }
        }

        function Ec() {
            var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
            this.hashPrefix = function (b) {
                return s(b) ? (a = b, this) : a
            }, this.html5Mode = function (a) {
                return E(a) ? (b.enabled = a, this) : t(a) ? (E(a.enabled) && (b.enabled = a.enabled), E(a.requireBase) && (b.requireBase = a.requireBase), E(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
                function h(a, b, c) {
                    var e = j.url(), f = j.$$state;
                    try {
                        d.url(a, b, c), j.$$state = d.state()
                    } catch (g) {
                        throw j.url(e), j.$$state = f, g
                    }
                }

                function i(a, b) {
                    c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
                }

                var j, k, l, m = d.baseHref(), n = d.url();
                if (b.enabled) {
                    if (!m && b.requireBase)throw cf("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    l = yc(n) + (m || "/"), k = e.history ? zc : Bc
                } else l = vc(n), k = Ac;
                j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
                var o = /^\s*(javascript|mailto):/i;
                f.on("click", function (a) {
                    if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && 2 != a.which) {
                        for (var e = $d(a.target); "a" !== I(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                        var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                        t(h) && "[object SVGAnimatedString]" === h.toString() && (h = dd(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                    }
                }), j.absUrl() != n && d.url(j.absUrl(), !0);
                var p = !0;
                return d.onUrlChange(function (a, b) {
                    c.$evalAsync(function () {
                        var d, e = j.absUrl(), f = j.$$state;
                        j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                    }), c.$$phase || c.$digest()
                }), c.$watch(function () {
                    var a = wc(d.url()), b = wc(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                    (p || k) && (p = !1, c.$evalAsync(function () {
                        var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                        j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                    })), j.$$replace = !1
                }), j
            }]
        }

        function Fc() {
            var a = !0, b = this;
            this.debugEnabled = function (b) {
                return s(b) ? (a = b, this) : a
            }, this.$get = ["$window", function (c) {
                function d(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }

                function e(a) {
                    var b = c.console || {}, e = b[a] || b.log || o, g = !1;
                    try {
                        g = !!e.apply
                    } catch (h) {
                    }
                    return g ? function () {
                        var a = [];
                        return f(arguments, function (b) {
                            a.push(d(b))
                        }), e.apply(b, a)
                    } : function (a, b) {
                        e(a, null == b ? "" : b)
                    }
                }

                return {
                    log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                        var c = e("debug");
                        return function () {
                            a && c.apply(b, arguments)
                        }
                    }()
                }
            }]
        }

        function Gc(a, b) {
            if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw ef("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
            return a
        }

        function Hc(a, b) {
            if (a) {
                if (a.constructor === a)throw ef("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a.window === a)throw ef("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
                if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw ef("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
                if (a === Object)throw ef("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
            }
            return a
        }

        function Ic(a, b) {
            if (a) {
                if (a.constructor === a)throw ef("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a === ff || a === gf || a === hf)throw ef("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
            }
        }

        function Jc(a) {
            return a.constant
        }

        function Kc(a, b, c, d) {
            Hc(a, d);
            for (var e, f = b.split("."), g = 0; f.length > 1; g++) {
                e = Gc(f.shift(), d);
                var h = Hc(a[e], d);
                h || (h = {}, a[e] = h), a = h
            }
            return e = Gc(f.shift(), d), Hc(a[e], d), a[e] = c, c
        }

        function Lc(a) {
            return "constructor" == a
        }

        function Mc(a, b, d, e, f, g, h) {
            Gc(a, g), Gc(b, g), Gc(d, g), Gc(e, g), Gc(f, g);
            var i = function (a) {
                return Hc(a, g)
            }, j = h || Lc(a) ? i : p, k = h || Lc(b) ? i : p, l = h || Lc(d) ? i : p, m = h || Lc(e) ? i : p, n = h || Lc(f) ? i : p;
            return function (g, h) {
                var i = h && h.hasOwnProperty(a) ? h : g;
                return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i)
            }
        }

        function Nc(a, b) {
            return function (c, d) {
                return a(c, d, Hc, b)
            }
        }

        function Oc(a, b, d) {
            var e = b.expensiveChecks, g = e ? pf : of, h = g[a];
            if (h)return h;
            var i = a.split("."), j = i.length;
            if (b.csp)h = 6 > j ? Mc(i[0], i[1], i[2], i[3], i[4], d, e) : function (a, b) {
                var f, g = 0;
                do f = Mc(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f; while (j > g);
                return f
            }; else {
                var k = "";
                e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
                var l = e;
                f(i, function (a, b) {
                    Gc(a, d);
                    var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                    (e || Lc(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n"
                }), k += "return s;";
                var m = new Function("s", "l", "eso", "fe", k);
                m.toString = q(k), l && (m = Nc(m, d)), h = m
            }
            return h.sharedGetter = !0, h.assign = function (b, c) {
                return Kc(b, a, c, a)
            }, g[a] = h, h
        }

        function Pc(a) {
            return x(a.valueOf) ? a.valueOf() : qf.call(a)
        }

        function Qc() {
            var a = jb(), b = jb();
            this.$get = ["$filter", "$sniffer", function (c, d) {
                function e(a) {
                    var b = a;
                    return a.sharedGetter && (b = function (b, c) {
                        return a(b, c)
                    }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b
                }

                function g(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                    }
                    return b
                }

                function h(a, b) {
                    return null == a || null == b ? a === b : "object" == typeof a && (a = Pc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
                }

                function i(a, b, c, d) {
                    var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                    if (1 === f.length) {
                        var i = h;
                        return f = f[0], a.$watch(function (a) {
                            var b = f(a);
                            return h(b, i) || (e = d(a), i = b && Pc(b)), e
                        }, b, c)
                    }
                    for (var j = [], k = 0, l = f.length; l > k; k++)j[k] = h;
                    return a.$watch(function (a) {
                        for (var b = !1, c = 0, g = f.length; g > c; c++) {
                            var i = f[c](a);
                            (b || (b = !h(i, j[c]))) && (j[c] = i && Pc(i))
                        }
                        return b && (e = d(a)), e
                    }, b, c)
                }

                function j(a, b, c, d) {
                    var e, f;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function () {
                            s(f) && e()
                        })
                    }, c)
                }

                function k(a, b, c, d) {
                    function e(a) {
                        var b = !0;
                        return f(a, function (a) {
                            s(a) || (b = !1)
                        }), b
                    }

                    var g, h;
                    return g = a.$watch(function (a) {
                        return d(a)
                    }, function (a, c, d) {
                        h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function () {
                            e(h) && g()
                        })
                    }, c)
                }

                function l(a, b, c, d) {
                    var e;
                    return e = a.$watch(function (a) {
                        return d(a)
                    }, function () {
                        x(b) && b.apply(this, arguments), e()
                    }, c)
                }

                function m(a, b) {
                    if (!b)return a;
                    var c = a.$$watchDelegate, d = c !== k && c !== j, e = d ? function (c, d) {
                        var e = a(c, d);
                        return b(e, c, d)
                    } : function (c, d) {
                        var e = a(c, d), f = b(e, c, d);
                        return s(e) ? f : e
                    };
                    return a.$$watchDelegate && a.$$watchDelegate !== i ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = i, e.inputs = [a]), e
                }

                var n = {csp: d.csp, expensiveChecks: !1}, p = {csp: d.csp, expensiveChecks: !0};
                return function (d, f, g) {
                    var h, q, r;
                    switch (typeof d) {
                        case"string":
                            r = d = d.trim();
                            var s = g ? b : a;
                            if (h = s[r], !h) {
                                ":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2));
                                var t = g ? p : n, u = new mf(t), v = new nf(u, c, t);
                                h = v.parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), s[r] = h
                            }
                            return m(h, f);
                        case"function":
                            return m(d, f);
                        default:
                            return m(o, f)
                    }
                }
            }]
        }

        function Rc() {
            this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
                return Tc(function (b) {
                    a.$evalAsync(b)
                }, b)
            }]
        }

        function Sc() {
            this.$get = ["$browser", "$exceptionHandler", function (a, b) {
                return Tc(function (b) {
                    a.defer(b)
                }, b)
            }]
        }

        function Tc(a, b) {
            function e(a, b, c) {
                function d(b) {
                    return function (c) {
                        e || (e = !0, b.call(a, c))
                    }
                }

                var e = !1;
                return [d(b), d(c)]
            }

            function g() {
                this.$$state = {status: 0}
            }

            function h(a, b) {
                return function (c) {
                    b.call(a, c)
                }
            }

            function i(a) {
                var d, e, f;
                f = a.pending, a.processScheduled = !1, a.pending = c;
                for (var g = 0, h = f.length; h > g; ++g) {
                    e = f[g][0], d = f[g][a.status];
                    try {
                        x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                    } catch (i) {
                        e.reject(i), b(i)
                    }
                }
            }

            function j(b) {
                !b.processScheduled && b.pending && (b.processScheduled = !0, a(function () {
                    i(b)
                }))
            }

            function k() {
                this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
            }

            function l(a) {
                var b = new k, c = 0, d = je(a) ? [] : {};
                return f(a, function (a, e) {
                    c++, r(a).then(function (a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function (a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                }), 0 === c && b.resolve(d), b.promise
            }

            var m = d("$q", TypeError), n = function () {
                return new k
            };
            g.prototype = {
                then: function (a, b, c) {
                    var d = new k;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
                }, "catch": function (a) {
                    return this.then(null, a)
                }, "finally": function (a, b) {
                    return this.then(function (b) {
                        return q(b, !0, a)
                    }, function (b) {
                        return q(b, !1, a)
                    }, b)
                }
            }, k.prototype = {
                resolve: function (a) {
                    this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
                }, $$resolve: function (a) {
                    var c, d;
                    d = e(this, this.$$resolve, this.$$reject);
                    try {
                        (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                    } catch (f) {
                        d[1](f), b(f)
                    }
                }, reject: function (a) {
                    this.promise.$$state.status || this.$$reject(a)
                }, $$reject: function (a) {
                    this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
                }, notify: function (c) {
                    var d = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && d && d.length && a(function () {
                        for (var a, e, f = 0, g = d.length; g > f; f++) {
                            e = d[f][0], a = d[f][3];
                            try {
                                e.notify(x(a) ? a(c) : c)
                            } catch (h) {
                                b(h)
                            }
                        }
                    })
                }
            };
            var o = function (a) {
                var b = new k;
                return b.reject(a), b.promise
            }, p = function (a, b) {
                var c = new k;
                return b ? c.resolve(a) : c.reject(a), c.promise
            }, q = function (a, b, c) {
                var d = null;
                try {
                    x(c) && (d = c())
                } catch (e) {
                    return p(e, !1)
                }
                return F(d) ? d.then(function () {
                    return p(a, b)
                }, function (a) {
                    return p(a, !1)
                }) : p(a, b)
            }, r = function (a, b, c, d) {
                var e = new k;
                return e.resolve(a), e.promise.then(b, c, d)
            }, s = function u(a) {
                function b(a) {
                    d.resolve(a)
                }

                function c(a) {
                    d.reject(a)
                }

                if (!x(a))throw m("norslvr", "Expected resolverFn, got '{0}'", a);
                if (!(this instanceof u))return new u(a);
                var d = new k;
                return a(b, c), d.promise
            };
            return s.defer = n, s.reject = o, s.when = r, s.all = l, s
        }

        function Uc() {
            this.$get = ["$window", "$timeout", function (a, b) {
                var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                    var b = c(a);
                    return function () {
                        d(b)
                    }
                } : function (a) {
                    var c = b(a, 16.66, !1);
                    return function () {
                        b.cancel(c)
                    }
                };
                return f.supported = e, f
            }]
        }

        function Vc() {
            var a = 10, b = d("$rootScope"), c = null, g = null;
            this.digestTtl = function (b) {
                return arguments.length && (a = b), a
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, h, i, k) {
                function l() {
                    this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
                }

                function m(a) {
                    if (v.$$phase)throw b("inprog", "{0} already in progress", v.$$phase);
                    v.$$phase = a
                }

                function n() {
                    v.$$phase = null
                }

                function p(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                }

                function q() {
                }

                function s() {
                    for (; z.length;)try {
                        z.shift()()
                    } catch (a) {
                        h(a)
                    }
                    g = null
                }

                function u() {
                    null === g && (g = k.defer(function () {
                        v.$apply(s)
                    }))
                }

                l.prototype = {
                    constructor: l, $new: function (a, b) {
                        function c() {
                            d.$$destroyed = !0
                        }

                        var d;
                        return b = b || this, a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$ChildScope = null
                        }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope), d.$parent = b, d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), d
                    }, $watch: function (a, b, d) {
                        var e = i(a);
                        if (e.$$watchDelegate)return e.$$watchDelegate(this, b, d, e);
                        var f = this, g = f.$$watchers, h = {fn: b, last: q, get: e, exp: a, eq: !!d};
                        return c = null, x(b) || (h.fn = o), g || (g = f.$$watchers = []), g.unshift(h), function () {
                            J(g, h), c = null
                        }
                    }, $watchGroup: function (a, b) {
                        function c() {
                            i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                        }

                        var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
                        if (!a.length) {
                            var k = !0;
                            return h.$evalAsync(function () {
                                k && b(e, e, h)
                            }), function () {
                                k = !1
                            }
                        }
                        return 1 === a.length ? this.$watch(a[0], function (a, c, f) {
                            e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                        }) : (f(a, function (a, b) {
                            var f = h.$watch(a, function (a, f) {
                                e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                            });
                            g.push(f)
                        }), function () {
                            for (; g.length;)g.shift()()
                        })
                    }, $watchCollection: function (a, b) {
                        function c(a) {
                            f = a;
                            var b, c, d, h, i;
                            if (!r(f)) {
                                if (t(f))if (e(f)) {
                                    g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                    for (var j = 0; b > j; j++)i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                                } else {
                                    g !== o && (g = o = {}, q = 0, l++), b = 0;
                                    for (c in f)f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                    if (q > b) {
                                        l++;
                                        for (c in g)f.hasOwnProperty(c) || (q--, delete g[c])
                                    }
                                } else g !== f && (g = f, l++);
                                return l
                            }
                        }

                        function d() {
                            if (p ? (p = !1, b(f, f, j)) : b(f, h, j), k)if (t(f))if (e(f)) {
                                h = new Array(f.length);
                                for (var a = 0; a < f.length; a++)h[a] = f[a]
                            } else {
                                h = {};
                                for (var c in f)Vd.call(f, c) && (h[c] = f[c])
                            } else h = f
                        }

                        c.$stateful = !0;
                        var f, g, h, j = this, k = b.length > 1, l = 0, m = i(a, c), n = [], o = {}, p = !0, q = 0;
                        return this.$watch(m, d)
                    }, $digest: function () {
                        var d, e, f, i, j, l, o, p, r, t, u = a, z = this, A = [];
                        m("$digest"), k.$$checkUrlChange(), this === v && null !== g && (k.defer.cancel(g), s()), c = null;
                        do {
                            for (l = !1, p = z; w.length;) {
                                try {
                                    t = w.shift(), t.scope.$eval(t.expression, t.locals)
                                } catch (B) {
                                    h(B)
                                }
                                c = null
                            }
                            a:do {
                                if (i = p.$$watchers)for (j = i.length; j--;)try {
                                    if (d = i[j])if ((e = d.get(p)) === (f = d.last) || (d.eq ? M(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                        if (d === c) {
                                            l = !1;
                                            break a
                                        }
                                    } else l = !0, c = d, d.last = d.eq ? K(e, null) : e, d.fn(e, f === q ? e : f, p), 5 > u && (r = 4 - u, A[r] || (A[r] = []), A[r].push({
                                        msg: x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp,
                                        newVal: e,
                                        oldVal: f
                                    }))
                                } catch (B) {
                                    h(B)
                                }
                                if (!(o = p.$$childHead || p !== z && p.$$nextSibling))for (; p !== z && !(o = p.$$nextSibling);)p = p.$parent
                            } while (p = o);
                            if ((l || w.length) && !u--)throw n(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, A)
                        } while (l || w.length);
                        for (n(); y.length;)try {
                            y.shift()()
                        } catch (B) {
                            h(B)
                        }
                    }, $destroy: function () {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v) {
                                for (var b in this.$$listenerCount)p(this, this.$$listenerCount[b], b);
                                a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, this.$on = this.$watch = this.$watchGroup = function () {
                                    return o
                                }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                            }
                        }
                    }, $eval: function (a, b) {
                        return i(a)(this, b)
                    }, $evalAsync: function (a, b) {
                        v.$$phase || w.length || k.defer(function () {
                            w.length && v.$digest()
                        }), w.push({scope: this, expression: a, locals: b})
                    }, $$postDigest: function (a) {
                        y.push(a)
                    }, $apply: function (a) {
                        try {
                            return m("$apply"), this.$eval(a)
                        } catch (b) {
                            h(b)
                        } finally {
                            n();
                            try {
                                v.$digest()
                            } catch (b) {
                                throw h(b), b
                            }
                        }
                    }, $applyAsync: function (a) {
                        function b() {
                            c.$eval(a)
                        }

                        var c = this;
                        a && z.push(b), u()
                    }, $on: function (a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []), c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function () {
                            var d = c.indexOf(b);
                            -1 !== d && (c[d] = null, p(e, 1, a))
                        }
                    }, $emit: function (a) {
                        var b, c, d, e = [], f = this, g = !1, i = {
                            name: a,
                            targetScope: f,
                            stopPropagation: function () {
                                g = !0
                            },
                            preventDefault: function () {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, j = N([i], arguments, 1);
                        do {
                            for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)if (b[c])try {
                                b[c].apply(null, j)
                            } catch (k) {
                                h(k)
                            } else b.splice(c, 1), c--, d--;
                            if (g)return i.currentScope = null, i;
                            f = f.$parent
                        } while (f);
                        return i.currentScope = null, i
                    }, $broadcast: function (a) {
                        var b = this, c = b, d = b, e = {
                            name: a, targetScope: b, preventDefault: function () {
                                e.defaultPrevented = !0
                            }, defaultPrevented: !1
                        };
                        if (!b.$$listenerCount[a])return e;
                        for (var f, g, i, j = N([e], arguments, 1); c = d;) {
                            for (e.currentScope = c, f = c.$$listeners[a] || [], g = 0, i = f.length; i > g; g++)if (f[g])try {
                                f[g].apply(null, j)
                            } catch (k) {
                                h(k)
                            } else f.splice(g, 1), g--, i--;
                            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== b && c.$$nextSibling))for (; c !== b && !(d = c.$$nextSibling);)c = c.$parent
                        }
                        return e.currentScope = null, e
                    }
                };
                var v = new l, w = v.$$asyncQueue = [], y = v.$$postDigestQueue = [], z = v.$$applyAsyncQueue = [];
                return v
            }]
        }

        function Wc() {
            var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function (b) {
                return s(b) ? (a = b, this) : a
            }, this.imgSrcSanitizationWhitelist = function (a) {
                return s(a) ? (b = a, this) : b
            }, this.$get = function () {
                return function (c, d) {
                    var e, f = d ? b : a;
                    return e = dd(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
                }
            }
        }

        function Xc(a) {
            if ("self" === a)return a;
            if (u(a)) {
                if (a.indexOf("***") > -1)throw rf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
                return a = le(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
            }
            if (y(a))return new RegExp("^" + a.source + "$");
            throw rf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Yc(a) {
            var b = [];
            return s(a) && f(a, function (a) {
                b.push(Xc(a))
            }), b
        }

        function Zc() {
            this.SCE_CONTEXTS = sf;
            var a = ["self"], b = [];
            this.resourceUrlWhitelist = function (b) {
                return arguments.length && (a = Yc(b)), a
            }, this.resourceUrlBlacklist = function (a) {
                return arguments.length && (b = Yc(a)), b
            }, this.$get = ["$injector", function (d) {
                function e(a, b) {
                    return "self" === a ? ed(b) : !!a.exec(b.href)
                }

                function f(c) {
                    var d, f, g = dd(c.toString()), h = !1;
                    for (d = 0, f = a.length; f > d; d++)if (e(a[d], g)) {
                        h = !0;
                        break
                    }
                    if (h)for (d = 0, f = b.length; f > d; d++)if (e(b[d], g)) {
                        h = !1;
                        break
                    }
                    return h
                }

                function g(a) {
                    var b = function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                    return a && (b.prototype = new a), b.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    }, b.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    }, b
                }

                function h(a, b) {
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (!d)throw rf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                    if (null === b || b === c || "" === b)return b;
                    if ("string" != typeof b)throw rf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                    return new d(b)
                }

                function i(a) {
                    return a instanceof l ? a.$$unwrapTrustedValue() : a
                }

                function j(a, b) {
                    if (null === b || b === c || "" === b)return b;
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (d && b instanceof d)return b.$$unwrapTrustedValue();
                    if (a === sf.RESOURCE_URL) {
                        if (f(b))return b;
                        throw rf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                    }
                    if (a === sf.HTML)return k(b);
                    throw rf("unsafe", "Attempting to use an unsafe value in a safe context.")
                }

                var k = function () {
                    throw rf("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                d.has("$sanitize") && (k = d.get("$sanitize"));
                var l = g(), m = {};
                return m[sf.HTML] = g(l), m[sf.CSS] = g(l), m[sf.URL] = g(l), m[sf.JS] = g(l), m[sf.RESOURCE_URL] = g(m[sf.URL]), {
                    trustAs: h,
                    getTrusted: j,
                    valueOf: i
                }
            }]
        }

        function $c() {
            var a = !0;
            this.enabled = function (b) {
                return arguments.length && (a = !!b), a
            }, this.$get = ["$parse", "$sceDelegate", function (b, c) {
                if (a && 8 > Zd)throw rf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var d = L(sf);
                d.isEnabled = function () {
                    return a
                }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function (a, b) {
                    return b
                }, d.valueOf = p), d.parseAs = function (a, c) {
                    var e = b(c);
                    return e.literal && e.constant ? e : b(c, function (b) {
                        return d.getTrusted(a, b)
                    })
                };
                var e = d.parseAs, g = d.getTrusted, h = d.trustAs;
                return f(sf, function (a, b) {
                    var c = Ud(b);
                    d[pb("parse_as_" + c)] = function (b) {
                        return e(a, b)
                    }, d[pb("get_trusted_" + c)] = function (b) {
                        return g(a, b)
                    }, d[pb("trust_as_" + c)] = function (b) {
                        return h(a, b)
                    }
                }), d
            }]
        }

        function _c() {
            this.$get = ["$window", "$document", function (a, b) {
                var c, d, e = {}, f = m((/android (\d+)/.exec(Ud((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
                if (j) {
                    for (var n in j)if (d = i.exec(n)) {
                        c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        break
                    }
                    c || (c = "WebkitOpacity"in j && "webkit"), k = !!("transition"in j || c + "Transition"in j), l = !!("animation"in j || c + "Animation"in j), !f || k && l || (k = u(h.body.style.webkitTransition), l = u(h.body.style.webkitAnimation))
                }
                return {
                    history: !(!a.history || !a.history.pushState || 4 > f || g), hasEvent: function (a) {
                        if ("input" === a && 11 >= Zd)return !1;
                        if (r(e[a])) {
                            var b = h.createElement("div");
                            e[a] = "on" + a in b
                        }
                        return e[a]
                    }, csp: me(), vendorPrefix: c, transitions: k, animations: l, android: f
                }
            }]
        }

        function ad() {
            this.$get = ["$templateCache", "$http", "$q", function (a, b, c) {
                function d(e, f) {
                    function g(a) {
                        if (h.totalPendingRequests--, !f)throw Ue("tpload", "Failed to load template: {0}", e);
                        return c.reject(a)
                    }

                    var h = d;
                    h.totalPendingRequests++;
                    var i = b.defaults && b.defaults.transformResponse;
                    je(i) ? i = i.filter(function (a) {
                        return a !== ec
                    }) : i === ec && (i = null);
                    var j = {cache: a, transformResponse: i};
                    return b.get(e, j).then(function (a) {
                        return h.totalPendingRequests--, a.data
                    }, g)
                }

                return d.totalPendingRequests = 0, d
            }]
        }

        function bd() {
            this.$get = ["$rootScope", "$browser", "$location", function (a, b, c) {
                var d = {};
                return d.findBindings = function (a, b, c) {
                    var d = a.getElementsByClassName("ng-binding"), e = [];
                    return f(d, function (a) {
                        var d = ge.element(a).data("$binding");
                        d && f(d, function (d) {
                            if (c) {
                                var f = new RegExp("(^|\\s)" + le(b) + "(\\s|\\||$)");
                                f.test(d) && e.push(a)
                            } else-1 != d.indexOf(b) && e.push(a)
                        })
                    }), e
                }, d.findModels = function (a, b, c) {
                    for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                        var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                        if (h.length)return h
                    }
                }, d.getLocation = function () {
                    return c.url()
                }, d.setLocation = function (b) {
                    b !== c.url() && (c.url(b), a.$digest())
                }, d.whenStable = function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }, d
            }]
        }

        function cd() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, c, d, e) {
                function f(f, h, i) {
                    var j, k = s(i) && !i, l = (k ? d : c).defer(), m = l.promise;
                    return j = b.defer(function () {
                        try {
                            l.resolve(f())
                        } catch (b) {
                            l.reject(b), e(b)
                        } finally {
                            delete g[m.$$timeoutId]
                        }
                        k || a.$apply()
                    }, h), m.$$timeoutId = j, g[j] = l, m
                }

                var g = {};
                return f.cancel = function (a) {
                    return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                }, f
            }]
        }

        function dd(a) {
            var b = a;
            return Zd && (tf.setAttribute("href", b), b = tf.href), tf.setAttribute("href", b), {
                href: tf.href,
                protocol: tf.protocol ? tf.protocol.replace(/:$/, "") : "",
                host: tf.host,
                search: tf.search ? tf.search.replace(/^\?/, "") : "",
                hash: tf.hash ? tf.hash.replace(/^#/, "") : "",
                hostname: tf.hostname,
                port: tf.port,
                pathname: "/" === tf.pathname.charAt(0) ? tf.pathname : "/" + tf.pathname
            }
        }

        function ed(a) {
            var b = u(a) ? dd(a) : a;
            return b.protocol === uf.protocol && b.host === uf.host
        }

        function fd() {
            this.$get = q(a)
        }

        function gd(a) {
            function b(d, e) {
                if (t(d)) {
                    var g = {};
                    return f(d, function (a, c) {
                        g[c] = b(c, a)
                    }), g
                }
                return a.factory(d + c, e)
            }

            var c = "Filter";
            this.register = b, this.$get = ["$injector", function (a) {
                return function (b) {
                    return a.get(b + c)
                }
            }], b("currency", kd), b("date", vd), b("filter", hd), b("json", wd), b("limitTo", xd), b("lowercase", zf), b("number", ld), b("orderBy", yd), b("uppercase", Af)
        }

        function hd() {
            return function (a, b, c) {
                if (!je(a))return a;
                var d, e;
                switch (typeof b) {
                    case"function":
                        d = b;
                        break;
                    case"boolean":
                    case"number":
                    case"string":
                        e = !0;
                    case"object":
                        d = id(b, c, e);
                        break;
                    default:
                        return a
                }
                return a.filter(d)
            }
        }

        function id(a, b, c) {
            var d, e = t(a) && "$"in a;
            return b === !0 ? b = M : x(b) || (b = function (a, b) {
                return t(a) || t(b) ? !1 : (a = Ud("" + a), b = Ud("" + b), -1 !== a.indexOf(b))
            }), d = function (d) {
                return e && !t(d) ? jd(d, a.$, b, !1) : jd(d, a, b, c)
            }
        }

        function jd(a, b, c, d, e) {
            var f = typeof a, g = typeof b;
            if ("string" === g && "!" === b.charAt(0))return !jd(a, b.substring(1), c, d);
            if ("array" === f)return a.some(function (a) {
                return jd(a, b, c, d)
            });
            switch (f) {
                case"object":
                    var h;
                    if (d) {
                        for (h in a)if ("$" !== h.charAt(0) && jd(a[h], b, c, !0))return !0;
                        return e ? !1 : jd(a, b, c, !1)
                    }
                    if ("object" === g) {
                        for (h in b) {
                            var i = b[h];
                            if (!x(i)) {
                                var j = "$" === h, k = j ? a : a[h];
                                if (!jd(k, i, c, j, j))return !1
                            }
                        }
                        return !0
                    }
                    return c(a, b);
                case"function":
                    return !1;
                default:
                    return c(a, b)
            }
        }

        function kd(a) {
            var b = a.NUMBER_FORMATS;
            return function (a, c, d) {
                return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : md(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
            }
        }

        function ld(a) {
            var b = a.NUMBER_FORMATS;
            return function (a, c) {
                return null == a ? a : md(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
            }
        }

        function md(a, b, c, d, e) {
            if (!isFinite(a) || t(a))return "";
            var f = 0 > a;
            a = Math.abs(a);
            var g = a + "", h = "", i = [], j = !1;
            if (-1 !== g.indexOf("e")) {
                var k = g.match(/([\d\.]+)e(-?)(\d+)/);
                k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0)
            }
            if (j)e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h)); else {
                var l = (g.split(vf)[1] || "").length;
                r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
                var m = ("" + a).split(vf), n = m[0];
                m = m[1] || "";
                var o, p = 0, q = b.lgSize, s = b.gSize;
                if (n.length >= q + s)for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (; m.length < e;)m += "0";
                e && "0" !== e && (h += d + m.substr(0, e))
            }
            return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), i.join("")
        }

        function nd(a, b, c) {
            var d = "";
            for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;)a = "0" + a;
            return c && (a = a.substr(a.length - b)), d + a
        }

        function od(a, b, c, d) {
            return c = c || 0, function (e) {
                var f = e["get" + a]();
                return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), nd(f, b, d)
            }
        }

        function pd(a, b) {
            return function (c, d) {
                var e = c["get" + a](), f = Wd(b ? "SHORT" + a : a);
                return d[f][e]
            }
        }

        function qd(a) {
            var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
            return c += nd(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + nd(Math.abs(b % 60), 2)
        }

        function rd(a) {
            var b = new Date(a, 0, 1).getDay();
            return new Date(a, 0, (4 >= b ? 5 : 12) - b)
        }

        function sd(a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
        }

        function td(a) {
            return function (b) {
                var c = rd(b.getFullYear()), d = sd(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
                return nd(f, a)
            }
        }

        function ud(a, b) {
            return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
        }

        function vd(a) {
            function b(a) {
                var b;
                if (b = a.match(c)) {
                    var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                    b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                    var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                    return h.call(d, i, j, k, l), d
                }
                return a
            }

            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (c, d, e) {
                var g, h, i = "", j = [];
                if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = yf.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))return c;
                for (; d;)h = xf.exec(d), h ? (j = N(j, h, 1), d = j.pop()) : (j.push(d), d = null);
                return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), f(j, function (b) {
                    g = wf[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), i
            }
        }

        function wd() {
            return function (a, b) {
                return r(b) && (b = 2), R(a, b)
            }
        }

        function xd() {
            return function (a, b) {
                if (v(a) && (a = a.toString()), !je(a) && !u(a))return a;
                if (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a))return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
                var c, d;
                if (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0)c = 0, d = b; else {
                    if (!b)return [];
                    c = a.length + b, d = a.length
                }
                return a.slice(c, d)
            }
        }

        function yd(a) {
            return function (b, c, d) {
                function f(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e)return e
                    }
                    return 0
                }

                function g(a, b) {
                    return b ? function (b, c) {
                        return a(c, b)
                    } : a
                }

                function h(a) {
                    switch (typeof a) {
                        case"number":
                        case"boolean":
                        case"string":
                            return !0;
                        default:
                            return !1
                    }
                }

                function i(a) {
                    return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : ""
                }

                function j(a, b) {
                    var c = typeof a, d = typeof b;
                    return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
                }

                return e(b) ? (c = je(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function (b) {
                    var c = !1, d = b || p;
                    if (u(b)) {
                        if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b)return g(j, c);
                        if (d = a(b), d.constant) {
                            var e = d();
                            return g(function (a, b) {
                                return j(a[e], b[e])
                            }, c)
                        }
                    }
                    return g(function (a, b) {
                        return j(d(a), d(b))
                    }, c)
                }), be.call(b).sort(g(f, d))) : b
            }
        }

        function zd(a) {
            return x(a) && (a = {link: a}), a.restrict = a.restrict || "AC", q(a)
        }

        function Ad(a, b) {
            a.$name = b
        }

        function Bd(a, b, d, e, g) {
            var h = this, i = [], j = h.$$parentForm = a.parent().controller("form") || Df;
            h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function () {
                f(i, function (a) {
                    a.$rollbackViewValue()
                })
            }, h.$commitViewValue = function () {
                f(i, function (a) {
                    a.$commitViewValue()
                })
            }, h.$addControl = function (a) {
                gb(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
            }, h.$$renameControl = function (a, b) {
                var c = a.$name;
                h[c] === a && delete h[c], h[b] = a, a.$name = b
            }, h.$removeControl = function (a) {
                a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function (b, c) {
                    h.$setValidity(c, null, a)
                }), f(h.$error, function (b, c) {
                    h.$setValidity(c, null, a)
                }), J(i, a)
            }, Pd({
                ctrl: this, $element: a, set: function (a, b, c) {
                    var d = a[b];
                    if (d) {
                        var e = d.indexOf(c);
                        -1 === e && d.push(c)
                    } else a[b] = [c]
                }, unset: function (a, b, c) {
                    var d = a[b];
                    d && (J(d, c), 0 === d.length && delete a[b])
                }, parentForm: j, $animate: e
            }), h.$setDirty = function () {
                e.removeClass(a, Xf), e.addClass(a, Yf), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
            }, h.$setPristine = function () {
                e.setClass(a, Xf, Yf + " " + Ef), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function (a) {
                    a.$setPristine()
                })
            }, h.$setUntouched = function () {
                f(i, function (a) {
                    a.$setUntouched()
                })
            }, h.$setSubmitted = function () {
                e.addClass(a, Ef), h.$submitted = !0, j.$setSubmitted()
            }
        }

        function Cd(a) {
            a.$formatters.push(function (b) {
                return a.$isEmpty(b) ? b : b.toString()
            })
        }

        function Dd(a, b, c, d, e, f) {
            Ed(a, b, c, d, e, f), Cd(d)
        }

        function Ed(a, b, c, d, e, f) {
            var g = Ud(b[0].type);
            if (!e.android) {
                var h = !1;
                b.on("compositionstart", function () {
                    h = !0
                }), b.on("compositionend", function () {
                    h = !1, i()
                })
            }
            var i = function (a) {
                if (j && (f.defer.cancel(j), j = null), !h) {
                    var e = b.val(), i = a && a.type;
                    "password" === g || c.ngTrim && "false" === c.ngTrim || (e = ke(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
                }
            };
            if (e.hasEvent("input"))b.on("input", i); else {
                var j, k = function (a, b, c) {
                    j || (j = f.defer(function () {
                        j = null, b && b.value === c || i(a)
                    }))
                };
                b.on("keydown", function (a) {
                    var b = a.keyCode;
                    91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
                }), e.hasEvent("paste") && b.on("paste cut", k)
            }
            b.on("change", i), d.$render = function () {
                b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
            }
        }

        function Fd(a, b) {
            if (w(a))return a;
            if (u(a)) {
                Of.lastIndex = 0;
                var c = Of.exec(a);
                if (c) {
                    var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = rd(d), k = 7 * (e - 1);
                    return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
                }
            }
            return 0 / 0
        }

        function Gd(a, b) {
            return function (c, d) {
                var e, g;
                if (w(c))return c;
                if (u(c)) {
                    if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), If.test(c))return new Date(c);
                    if (a.lastIndex = 0, e = a.exec(c))return e.shift(), g = d ? {
                        yyyy: d.getFullYear(),
                        MM: d.getMonth() + 1,
                        dd: d.getDate(),
                        HH: d.getHours(),
                        mm: d.getMinutes(),
                        ss: d.getSeconds(),
                        sss: d.getMilliseconds() / 1e3
                    } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, f(e, function (a, c) {
                        c < b.length && (g[b[c]] = +a)
                    }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
                }
                return 0 / 0
            }
        }

        function Hd(a, b, d, e) {
            return function (f, g, h, i, j, k, l) {
                function m(a) {
                    return a && !(a.getTime && a.getTime() !== a.getTime())
                }

                function n(a) {
                    return s(a) ? w(a) ? a : d(a) : c
                }

                Id(f, g, h, i), Ed(f, g, h, i, j, k);
                var o, p = i && i.$options && i.$options.timezone;
                if (i.$$parserName = a, i.$parsers.push(function (a) {
                        if (i.$isEmpty(a))return null;
                        if (b.test(a)) {
                            var e = d(a, o);
                            return "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                        }
                        return c
                    }), i.$formatters.push(function (a) {
                        if (a && !w(a))throw Sf("datefmt", "Expected `{0}` to be a date", a);
                        if (m(a)) {
                            if (o = a, o && "UTC" === p) {
                                var b = 6e4 * o.getTimezoneOffset();
                                o = new Date(o.getTime() + b)
                            }
                            return l("date")(a, e, p)
                        }
                        return o = null, ""
                    }), s(h.min) || h.ngMin) {
                    var q;
                    i.$validators.min = function (a) {
                        return !m(a) || r(q) || d(a) >= q
                    }, h.$observe("min", function (a) {
                        q = n(a), i.$validate()
                    })
                }
                if (s(h.max) || h.ngMax) {
                    var t;
                    i.$validators.max = function (a) {
                        return !m(a) || r(t) || d(a) <= t
                    }, h.$observe("max", function (a) {
                        t = n(a), i.$validate()
                    })
                }
            }
        }

        function Id(a, b, d, e) {
            var f = b[0], g = e.$$hasNativeValidators = t(f.validity);
            g && e.$parsers.push(function (a) {
                var d = b.prop(Td) || {};
                return d.badInput && !d.typeMismatch ? c : a
            })
        }

        function Jd(a, b, d, e, f, g) {
            if (Id(a, b, d, e), Ed(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function (a) {
                    return e.$isEmpty(a) ? null : Lf.test(a) ? parseFloat(a) : c
                }), e.$formatters.push(function (a) {
                    if (!e.$isEmpty(a)) {
                        if (!v(a))throw Sf("numfmt", "Expected `{0}` to be a number", a);
                        a = a.toString()
                    }
                    return a
                }), d.min || d.ngMin) {
                var h;
                e.$validators.min = function (a) {
                    return e.$isEmpty(a) || r(h) || a >= h
                }, d.$observe("min", function (a) {
                    s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate()
                })
            }
            if (d.max || d.ngMax) {
                var i;
                e.$validators.max = function (a) {
                    return e.$isEmpty(a) || r(i) || i >= a
                }, d.$observe("max", function (a) {
                    s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate()
                })
            }
        }

        function Kd(a, b, c, d, e, f) {
            Ed(a, b, c, d, e, f), Cd(d), d.$$parserName = "url", d.$validators.url = function (a, b) {
                var c = a || b;
                return d.$isEmpty(c) || Jf.test(c)
            }
        }

        function Ld(a, b, c, d, e, f) {
            Ed(a, b, c, d, e, f), Cd(d), d.$$parserName = "email", d.$validators.email = function (a, b) {
                var c = a || b;
                return d.$isEmpty(c) || Kf.test(c)
            }
        }

        function Md(a, b, c, d) {
            r(c.name) && b.attr("name", j());
            var e = function (a) {
                b[0].checked && d.$setViewValue(c.value, a && a.type)
            };
            b.on("click", e), d.$render = function () {
                var a = c.value;
                b[0].checked = a == d.$viewValue
            }, c.$observe("value", d.$render)
        }

        function Nd(a, b, c, e, f) {
            var g;
            if (s(e)) {
                if (g = a(e), !g.constant)throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
                return g(b)
            }
            return f
        }

        function Od(a, b, c, d, e, f, g, h) {
            var i = Nd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = Nd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function (a) {
                d.$setViewValue(b[0].checked, a && a.type)
            };
            b.on("click", k), d.$render = function () {
                b[0].checked = d.$viewValue
            }, d.$isEmpty = function (a) {
                return a === !1
            }, d.$formatters.push(function (a) {
                return M(a, i)
            }), d.$parsers.push(function (a) {
                return a ? i : j
            })
        }

        function Pd(a) {
            function b(a, b, i) {
                b === c ? d("$pending", a, i) : e("$pending", a, i), E(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(_f, !0), h.$valid = h.$invalid = c, g("", null)) : (f(_f, !1), h.$valid = Qd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
                var j;
                j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
            }

            function d(a, b, c) {
                h[a] || (h[a] = {}), k(h[a], b, c)
            }

            function e(a, b, d) {
                h[a] && l(h[a], b, d), Qd(h[a]) && (h[a] = c)
            }

            function f(a, b) {
                b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
            }

            function g(a, b) {
                a = a ? "-" + cb(a, "-") : "", f(Vf + a, b === !0), f(Wf + a, b === !1)
            }

            var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.parentForm, n = a.$animate;
            j[Wf] = !(j[Vf] = i.hasClass(Vf)), h.$setValidity = b
        }

        function Qd(a) {
            if (a)for (var b in a)return !1;
            return !0
        }

        function Rd(a, b) {
            return a = "ngClass" + a, ["$animate", function (c) {
                function d(a, b) {
                    var c = [];
                    a:for (var d = 0; d < a.length; d++) {
                        for (var e = a[d], f = 0; f < b.length; f++)if (e == b[f])continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    if (je(a))return a;
                    if (u(a))return a.split(" ");
                    if (t(a)) {
                        var b = [];
                        return f(a, function (a, c) {
                            a && (b = b.concat(c.split(" ")))
                        }), b
                    }
                    return a
                }

                return {
                    restrict: "AC", link: function (g, h, i) {
                        function j(a) {
                            var b = l(a, 1);
                            i.$addClass(b)
                        }

                        function k(a) {
                            var b = l(a, -1);
                            i.$removeClass(b)
                        }

                        function l(a, b) {
                            var c = h.data("$classCounts") || {}, d = [];
                            return f(a, function (a) {
                                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                            }), h.data("$classCounts", c), d.join(" ")
                        }

                        function m(a, b) {
                            var e = d(b, a), f = d(a, b);
                            e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                        }

                        function n(a) {
                            if (b === !0 || g.$index % 2 === b) {
                                var c = e(a || []);
                                if (o) {
                                    if (!M(a, o)) {
                                        var d = e(o);
                                        m(d, c)
                                    }
                                } else j(c)
                            }
                            o = L(a)
                        }

                        var o;
                        g.$watch(i[a], n, !0), i.$observe("class", function () {
                            n(g.$eval(i[a]))
                        }), "ngClass" !== a && g.$watch("$index", function (c, d) {
                            var f = 1 & c;
                            if (f !== (1 & d)) {
                                var h = e(g.$eval(i[a]));
                                f === b ? j(h) : k(h)
                            }
                        })
                    }
                }
            }]
        }

        var Sd = /^\/(.+)\/([a-z]*)$/, Td = "validity", Ud = function (a) {
            return u(a) ? a.toLowerCase() : a
        }, Vd = Object.prototype.hasOwnProperty, Wd = function (a) {
            return u(a) ? a.toUpperCase() : a
        }, Xd = function (a) {
            return u(a) ? a.replace(/[A-Z]/g, function (a) {
                return String.fromCharCode(32 | a.charCodeAt(0))
            }) : a
        }, Yd = function (a) {
            return u(a) ? a.replace(/[a-z]/g, function (a) {
                return String.fromCharCode(-33 & a.charCodeAt(0))
            }) : a
        };
        "i" !== "I".toLowerCase() && (Ud = Xd, Wd = Yd);
        var Zd, $d, _d, ae, be = [].slice, ce = [].splice, de = [].push, ee = Object.prototype.toString, fe = d("ng"), ge = a.angular || (a.angular = {}), he = 0;
        Zd = b.documentMode, o.$inject = [], p.$inject = [];
        var ie, je = Array.isArray, ke = function (a) {
            return u(a) ? a.trim() : a
        }, le = function (a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, me = function () {
            if (s(me.isActive_))return me.isActive_;
            var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
            if (!a)try {
                new Function("")
            } catch (c) {
                a = !0
            }
            return me.isActive_ = a
        }, ne = ["ng-", "data-ng-", "ng:", "x-ng-"], oe = /[A-Z]/g, pe = !1, qe = 1, re = 3, se = 8, te = 9, ue = 11, ve = {
            full: "1.3.8",
            major: 1,
            minor: 3,
            dot: 8,
            codeName: "prophetic-narwhal"
        };
        ub.expando = "ng339";
        var we = ub.cache = {}, xe = 1, ye = function (a, b, c) {
            a.addEventListener(b, c, !1)
        }, ze = function (a, b, c) {
            a.removeEventListener(b, c, !1)
        };
        ub._data = function (a) {
            return this.cache[a[this.expando]] || {}
        };
        var Ae = /([\:\-\_]+(.))/g, Be = /^moz([A-Z])/, Ce = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }, De = d("jqLite"), Ee = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Fe = /<|&#?\w+;/, Ge = /<([\w:]+)/, He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ie = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
        var Je = ub.prototype = {
            ready: function (c) {
                function d() {
                    e || (e = !0, c())
                }

                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ub(a).on("load", d))
            }, toString: function () {
                var a = [];
                return f(this, function (b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            }, eq: function (a) {
                return $d(a >= 0 ? this[a] : this[this.length + a])
            }, length: 0, push: de, sort: [].sort, splice: [].splice
        }, Ke = {};
        f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
            Ke[Ud(a)] = a
        });
        var Le = {};
        f("input,select,option,textarea,button,form,details".split(","), function (a) {
            Le[a] = !0
        });
        var Me = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
        f({data: Ab, removeData: yb}, function (a, b) {
            ub[b] = a
        }), f({
            data: Ab, inheritedData: Gb, scope: function (a) {
                return $d.data(a, "$scope") || Gb(a.parentNode || a, ["$isolateScope", "$scope"])
            }, isolateScope: function (a) {
                return $d.data(a, "$isolateScope") || $d.data(a, "$isolateScopeNoTemplate")
            }, controller: Fb, injector: function (a) {
                return Gb(a, "$injector")
            }, removeAttr: function (a, b) {
                a.removeAttribute(b)
            }, hasClass: Bb, css: function (a, b, c) {
                return b = pb(b), s(c) ? void(a.style[b] = c) : a.style[b]
            }, attr: function (a, b, d) {
                var e = Ud(b);
                if (Ke[e]) {
                    if (!s(d))return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (s(d))a.setAttribute(b, d); else if (a.getAttribute) {
                    var f = a.getAttribute(b, 2);
                    return null === f ? c : f
                }
            }, prop: function (a, b, c) {
                return s(c) ? void(a[b] = c) : a[b]
            }, text: function () {
                function a(a, b) {
                    if (r(b)) {
                        var c = a.nodeType;
                        return c === qe || c === re ? a.textContent : ""
                    }
                    a.textContent = b
                }

                return a.$dv = "", a
            }(), val: function (a, b) {
                if (r(b)) {
                    if (a.multiple && "select" === I(a)) {
                        var c = [];
                        return f(a.options, function (a) {
                            a.selected && c.push(a.value || a.text)
                        }), 0 === c.length ? null : c
                    }
                    return a.value
                }
                a.value = b
            }, html: function (a, b) {
                return r(b) ? a.innerHTML : (wb(a, !0), void(a.innerHTML = b))
            }, empty: Hb
        }, function (a, b) {
            ub.prototype[b] = function (b, d) {
                var e, f, g = this.length;
                if (a !== Hb && (2 == a.length && a !== Bb && a !== Fb ? b : d) === c) {
                    if (t(b)) {
                        for (e = 0; g > e; e++)if (a === Ab)a(this[e], b); else for (f in b)a(this[e], f, b[f]);
                        return this
                    }
                    for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                        var k = a(this[j], b, d);
                        h = h ? h + k : k
                    }
                    return h
                }
                for (e = 0; g > e; e++)a(this[e], b, d);
                return this
            }
        }), f({
            removeData: yb, on: function Rg(a, b, c, d) {
                if (s(d))throw De("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (rb(a)) {
                    var e = zb(a, !0), f = e.events, g = e.handle;
                    g || (g = e.handle = Mb(a, f));
                    for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
                        b = h[i];
                        var j = f[b];
                        j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Rg(a, Ce[b], function (a) {
                            var c = this, d = a.relatedTarget;
                            (!d || d !== c && !c.contains(d)) && g(a, b)
                        }) : "$destroy" !== b && ye(a, b, g), j = f[b]), j.push(c)
                    }
                }
            }, off: xb, one: function (a, b, c) {
                a = $d(a), a.on(b, function d() {
                    a.off(b, c), a.off(b, d)
                }), a.on(b, c)
            }, replaceWith: function (a, b) {
                var c, d = a.parentNode;
                wb(a), f(new ub(b), function (b) {
                    c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
                })
            }, children: function (a) {
                var b = [];
                return f(a.childNodes, function (a) {
                    a.nodeType === qe && b.push(a)
                }), b
            }, contents: function (a) {
                return a.contentDocument || a.childNodes || []
            }, append: function (a, b) {
                var c = a.nodeType;
                if (c === qe || c === ue) {
                    b = new ub(b);
                    for (var d = 0, e = b.length; e > d; d++) {
                        var f = b[d];
                        a.appendChild(f)
                    }
                }
            }, prepend: function (a, b) {
                if (a.nodeType === qe) {
                    var c = a.firstChild;
                    f(new ub(b), function (b) {
                        a.insertBefore(b, c)
                    })
                }
            }, wrap: function (a, b) {
                b = $d(b).eq(0).clone()[0];
                var c = a.parentNode;
                c && c.replaceChild(b, a), b.appendChild(a)
            }, remove: Ib, detach: function (a) {
                Ib(a, !0)
            }, after: function (a, b) {
                var c = a, d = a.parentNode;
                b = new ub(b);
                for (var e = 0, f = b.length; f > e; e++) {
                    var g = b[e];
                    d.insertBefore(g, c.nextSibling), c = g
                }
            }, addClass: Db, removeClass: Cb, toggleClass: function (a, b, c) {
                b && f(b.split(" "), function (b) {
                    var d = c;
                    r(d) && (d = !Bb(a, b)), (d ? Db : Cb)(a, b)
                })
            }, parent: function (a) {
                var b = a.parentNode;
                return b && b.nodeType !== ue ? b : null
            }, next: function (a) {
                return a.nextElementSibling
            }, find: function (a, b) {
                return a.getElementsByTagName ? a.getElementsByTagName(b) : []
            }, clone: vb, triggerHandler: function (a, b, c) {
                var d, e, g, h = b.type || b, i = zb(a), j = i && i.events, k = j && j[h];
                k && (d = {
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    }, isDefaultPrevented: function () {
                        return this.defaultPrevented === !0
                    }, stopImmediatePropagation: function () {
                        this.immediatePropagationStopped = !0
                    }, isImmediatePropagationStopped: function () {
                        return this.immediatePropagationStopped === !0
                    }, stopPropagation: o, type: h, target: a
                }, b.type && (d = l(d, b)), e = L(k), g = c ? [d].concat(c) : [d], f(e, function (b) {
                    d.isImmediatePropagationStopped() || b.apply(a, g)
                }))
            }
        }, function (a, b) {
            ub.prototype[b] = function (b, c, d) {
                for (var e, f = 0, g = this.length; g > f; f++)r(e) ? (e = a(this[f], b, c, d), s(e) && (e = $d(e))) : Eb(e, a(this[f], b, c, d));
                return s(e) ? e : this
            }, ub.prototype.bind = ub.prototype.on, ub.prototype.unbind = ub.prototype.off
        }), Pb.prototype = {
            put: function (a, b) {
                this[Ob(a, this.nextUid)] = b
            }, get: function (a) {
                return this[Ob(a, this.nextUid)]
            }, remove: function (a) {
                var b = this[a = Ob(a, this.nextUid)];
                return delete this[a], b
            }
        };
        var Ne = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Oe = /,/, Pe = /^\s*(_?)(\S+?)\1\s*$/, Qe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Re = d("$injector");
        Sb.$$annotate = Rb;
        var Se = d("$animate"), Te = ["$provide", function (a) {
            this.$$selectors = {}, this.register = function (b, c) {
                var d = b + "-animation";
                if (b && "." != b.charAt(0))throw Se("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                this.$$selectors[b.substr(1)] = d, a.factory(d, c)
            }, this.classNameFilter = function (a) {
                return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
            }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, b, c) {
                function d(b) {
                    var d, e = a.defer();
                    return e.promise.$$cancelFn = function () {
                        d && d()
                    }, c.$$postDigest(function () {
                        d = b(function () {
                            e.resolve()
                        })
                    }), e.promise
                }

                function e(a, b) {
                    var c = [], d = [], e = jb();
                    return f((a.attr("class") || "").split(/\s+/), function (a) {
                        e[a] = !0
                    }), f(b, function (a, b) {
                        var f = e[b];
                        a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b)
                    }), c.length + d.length > 0 && [c.length ? c : null, d.length ? d : null]
                }

                function g(a, b, c) {
                    for (var d = 0, e = b.length; e > d; ++d) {
                        var f = b[d];
                        a[f] = c
                    }
                }

                function h() {
                    return j || (j = a.defer(), b(function () {
                        j.resolve(), j = null
                    })), j.promise
                }

                function i(a, b) {
                    if (ge.isObject(b)) {
                        var c = l(b.from || {}, b.to || {});
                        a.css(c)
                    }
                }

                var j;
                return {
                    animate: function (a, b, c) {
                        return i(a, {from: b, to: c}), h()
                    }, enter: function (a, b, c, d) {
                        return i(a, d), c ? c.after(a) : b.prepend(a), h()
                    }, leave: function (a) {
                        return a.remove(), h()
                    }, move: function (a, b, c, d) {
                        return this.enter(a, b, c, d)
                    }, addClass: function (a, b, c) {
                        return this.setClass(a, b, [], c)
                    }, $$addClassImmediately: function (a, b, c) {
                        return a = $d(a), b = u(b) ? b : je(b) ? b.join(" ") : "", f(a, function (a) {
                            Db(a, b)
                        }), i(a, c), h()
                    }, removeClass: function (a, b, c) {
                        return this.setClass(a, [], b, c)
                    }, $$removeClassImmediately: function (a, b, c) {
                        return a = $d(a), b = u(b) ? b : je(b) ? b.join(" ") : "", f(a, function (a) {
                            Cb(a, b)
                        }), i(a, c), h()
                    }, setClass: function (a, b, c, f) {
                        var h = this, i = "$$animateClasses", j = !1;
                        a = $d(a);
                        var k = a.data(i);
                        k ? f && k.options && (k.options = ge.extend(k.options || {}, f)) : (k = {
                            classes: {},
                            options: f
                        }, j = !0);
                        var l = k.classes;
                        return b = je(b) ? b : b.split(" "), c = je(c) ? c : c.split(" "), g(l, b, !0), g(l, c, !1), j && (k.promise = d(function (b) {
                            var c = a.data(i);
                            if (a.removeData(i), c) {
                                var d = e(a, c.classes);
                                d && h.$$setClassImmediately(a, d[0], d[1], c.options)
                            }
                            b()
                        }), a.data(i, k)), k.promise
                    }, $$setClassImmediately: function (a, b, c, d) {
                        return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), i(a, d), h()
                    }, enabled: o, cancel: o
                }
            }]
        }], Ue = d("$compile");
        Zb.$inject = ["$provide", "$$sanitizeUriProvider"];
        var Ve = /^((?:x|data)[\:\-_])/i, We = "application/json", Xe = {"Content-Type": We + ";charset=utf-8"}, Ye = /^\[|^\{(?!\{)/, Ze = {
            "[": /]$/,
            "{": /}$/
        }, $e = /^\)\]\}',?\n/, _e = d("$interpolate"), af = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, bf = {
            http: 80,
            https: 443,
            ftp: 21
        }, cf = d("$location"), df = {
            $$html5: !1, $$replace: !1, absUrl: Cc("$$absUrl"), url: function (a) {
                if (r(a))return this.$$url;
                var b = af.exec(a);
                return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
            }, protocol: Cc("$$protocol"), host: Cc("$$host"), port: Cc("$$port"), path: Dc("$$path", function (a) {
                return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
            }), search: function (a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (u(a) || v(a))a = a.toString(), this.$$search = V(a); else {
                            if (!t(a))throw cf("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            a = K(a, {}), f(a, function (b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            }, hash: Dc("$$hash", function (a) {
                return null !== a ? a.toString() : ""
            }), replace: function () {
                return this.$$replace = !0, this
            }
        };
        f([Bc, Ac, zc], function (a) {
            a.prototype = Object.create(df), a.prototype.state = function (b) {
                if (!arguments.length)return this.$$state;
                if (a !== zc || !this.$$html5)throw cf("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = r(b) ? null : b, this
            }
        });
        var ef = d("$parse"), ff = Function.prototype.call, gf = Function.prototype.apply, hf = Function.prototype.bind, jf = jb();
        f({
            "null": function () {
                return null
            }, "true": function () {
                return !0
            }, "false": function () {
                return !1
            }, undefined: function () {
            }
        }, function (a, b) {
            a.constant = a.literal = a.sharedGetter = !0, jf[b] = a
        }), jf["this"] = function (a) {
            return a
        }, jf["this"].sharedGetter = !0;
        var kf = l(jb(), {
            "+": function (a, b, d, e) {
                return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
            }, "-": function (a, b, c, d) {
                return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
            }, "*": function (a, b, c, d) {
                return c(a, b) * d(a, b)
            }, "/": function (a, b, c, d) {
                return c(a, b) / d(a, b)
            }, "%": function (a, b, c, d) {
                return c(a, b) % d(a, b)
            }, "===": function (a, b, c, d) {
                return c(a, b) === d(a, b)
            }, "!==": function (a, b, c, d) {
                return c(a, b) !== d(a, b)
            }, "==": function (a, b, c, d) {
                return c(a, b) == d(a, b)
            }, "!=": function (a, b, c, d) {
                return c(a, b) != d(a, b)
            }, "<": function (a, b, c, d) {
                return c(a, b) < d(a, b)
            }, ">": function (a, b, c, d) {
                return c(a, b) > d(a, b)
            }, "<=": function (a, b, c, d) {
                return c(a, b) <= d(a, b)
            }, ">=": function (a, b, c, d) {
                return c(a, b) >= d(a, b)
            }, "&&": function (a, b, c, d) {
                return c(a, b) && d(a, b)
            }, "||": function (a, b, c, d) {
                return c(a, b) || d(a, b)
            }, "!": function (a, b, c) {
                return !c(a, b)
            }, "=": !0, "|": !0
        }), lf = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, mf = function (a) {
            this.options = a
        };
        mf.prototype = {
            constructor: mf, lex: function (a) {
                for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if ('"' === b || "'" === b)this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(b))this.readIdent(); else if (this.is(b, "(){}[].,;:?"))this.tokens.push({
                        index: this.index,
                        text: b
                    }), this.index++; else if (this.isWhitespace(b))this.index++; else {
                        var c = b + this.peek(), d = c + this.peek(2), e = kf[b], f = kf[c], g = kf[d];
                        if (e || f || g) {
                            var h = g ? d : f ? c : b;
                            this.tokens.push({index: this.index, text: h, operator: !0}), this.index += h.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            }, is: function (a, b) {
                return -1 !== b.indexOf(a)
            }, peek: function (a) {
                var b = a || 1;
                return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
            }, isNumber: function (a) {
                return a >= "0" && "9" >= a && "string" == typeof a
            }, isWhitespace: function (a) {
                return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
            }, isIdent: function (a) {
                return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
            }, isExpOperator: function (a) {
                return "-" === a || "+" === a || this.isNumber(a)
            }, throwError: function (a, b, c) {
                c = c || this.index;
                var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
                throw ef("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
            }, readNumber: function () {
                for (var a = "", b = this.index; this.index < this.text.length;) {
                    var c = Ud(this.text.charAt(this.index));
                    if ("." == c || this.isNumber(c))a += c; else {
                        var d = this.peek();
                        if ("e" == c && this.isExpOperator(d))a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1))a += c; else {
                            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1))break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
            }, readIdent: function () {
                for (var a = this.index; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if (!this.isIdent(b) && !this.isNumber(b))break;
                    this.index++
                }
                this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
            }, readString: function (a) {
                var b = this.index;
                this.index++;
                for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                    var f = this.text.charAt(this.index);
                    if (d += f, e) {
                        if ("u" === f) {
                            var g = this.text.substring(this.index + 1, this.index + 5);
                            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                        } else {
                            var h = lf[f];
                            c += h || f
                        }
                        e = !1
                    } else if ("\\" === f)e = !0; else {
                        if (f === a)return this.index++, void this.tokens.push({
                            index: b,
                            text: d,
                            constant: !0,
                            value: c
                        });
                        c += f
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", b)
            }
        };
        var nf = function (a, b, c) {
            this.lexer = a, this.$filter = b, this.options = c
        };
        nf.ZERO = l(function () {
            return 0
        }, {sharedGetter: !0, constant: !0}), nf.prototype = {
            constructor: nf, parse: function (a) {
                this.text = a, this.tokens = this.lexer.lex(a);
                var b = this.statements();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b
            }, primary: function () {
                var a;
                this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in jf ? a = jf[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var b, c; b = this.expect("(", "[", ".");)"(" === b.text ? (a = this.functionCall(a, c), c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
                return a
            }, throwError: function (a, b) {
                throw ef("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
            }, peekToken: function () {
                if (0 === this.tokens.length)throw ef("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            }, peek: function (a, b, c, d) {
                return this.peekAhead(0, a, b, c, d)
            }, peekAhead: function (a, b, c, d, e) {
                if (this.tokens.length > a) {
                    var f = this.tokens[a], g = f.text;
                    if (g === b || g === c || g === d || g === e || !b && !c && !d && !e)return f
                }
                return !1
            }, expect: function (a, b, c, d) {
                var e = this.peek(a, b, c, d);
                return e ? (this.tokens.shift(), e) : !1
            }, consume: function (a) {
                if (0 === this.tokens.length)throw ef("ueoe", "Unexpected end of expression: {0}", this.text);
                var b = this.expect(a);
                return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
            }, unaryFn: function (a, b) {
                var c = kf[a];
                return l(function (a, d) {
                    return c(a, d, b)
                }, {constant: b.constant, inputs: [b]})
            }, binaryFn: function (a, b, c, d) {
                var e = kf[b];
                return l(function (b, d) {
                    return e(b, d, a, c)
                }, {constant: a.constant && c.constant, inputs: !d && [a, c]})
            }, identifier: function () {
                for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)a += this.consume().text + this.consume().text;
                return Oc(a, this.options, this.text)
            }, constant: function () {
                var a = this.consume().value;
                return l(function () {
                    return a
                }, {constant: !0, literal: !0})
            }, statements: function () {
                for (var a = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (b, c) {
                    for (var d, e = 0, f = a.length; f > e; e++)d = a[e](b, c);
                    return d
                }
            }, filterChain: function () {
                for (var a, b = this.expression(); a = this.expect("|");)b = this.filter(b);
                return b
            }, filter: function (a) {
                var b, d, e = this.$filter(this.consume().text);
                if (this.peek(":"))for (b = [], d = []; this.expect(":");)b.push(this.expression());
                var f = [a].concat(b || []);
                return l(function (f, g) {
                    var h = a(f, g);
                    if (d) {
                        d[0] = h;
                        for (var i = b.length; i--;)d[i + 1] = b[i](f, g);
                        return e.apply(c, d)
                    }
                    return e(h)
                }, {constant: !e.$stateful && f.every(Jc), inputs: !e.$stateful && f})
            }, expression: function () {
                return this.assignment()
            }, assignment: function () {
                var a, b, c = this.ternary();
                return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), l(function (b, d) {
                    return c.assign(b, a(b, d), d)
                }, {inputs: [c, a]})) : c
            }, ternary: function () {
                var a, b, c = this.logicalOR();
                if ((b = this.expect("?")) && (a = this.assignment(), this.consume(":"))) {
                    var d = this.assignment();
                    return l(function (b, e) {
                        return c(b, e) ? a(b, e) : d(b, e)
                    }, {constant: c.constant && a.constant && d.constant})
                }
                return c
            }, logicalOR: function () {
                for (var a, b = this.logicalAND(); a = this.expect("||");)b = this.binaryFn(b, a.text, this.logicalAND(), !0);
                return b
            }, logicalAND: function () {
                for (var a, b = this.equality(); a = this.expect("&&");)b = this.binaryFn(b, a.text, this.equality(), !0);
                return b
            }, equality: function () {
                for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");)b = this.binaryFn(b, a.text, this.relational());
                return b
            }, relational: function () {
                for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");)b = this.binaryFn(b, a.text, this.additive());
                return b
            }, additive: function () {
                for (var a, b = this.multiplicative(); a = this.expect("+", "-");)b = this.binaryFn(b, a.text, this.multiplicative());
                return b
            }, multiplicative: function () {
                for (var a, b = this.unary(); a = this.expect("*", "/", "%");)b = this.binaryFn(b, a.text, this.unary());
                return b
            }, unary: function () {
                var a;
                return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(nf.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
            }, fieldAccess: function (a) {
                var b = this.identifier();
                return l(function (d, e, f) {
                    var g = f || a(d, e);
                    return null == g ? c : b(g)
                }, {
                    assign: function (c, d, e) {
                        var f = a(c, e);
                        return f || a.assign(c, f = {}), b.assign(f, d)
                    }
                })
            }, objectIndex: function (a) {
                var b = this.text, d = this.expression();
                return this.consume("]"), l(function (e, f) {
                    var g, h = a(e, f), i = d(e, f);
                    return Gc(i, b), h ? g = Hc(h[i], b) : c
                }, {
                    assign: function (c, e, f) {
                        var g = Gc(d(c, f), b), h = Hc(a(c, f), b);
                        return h || a.assign(c, h = {}), h[g] = e
                    }
                })
            }, functionCall: function (a, b) {
                var d = [];
                if (")" !== this.peekToken().text)do d.push(this.expression()); while (this.expect(","));
                this.consume(")");
                var e = this.text, f = d.length ? [] : null;
                return function (g, h) {
                    var i = b ? b(g, h) : s(b) ? c : g, j = a(g, h, i) || o;
                    if (f)for (var k = d.length; k--;)f[k] = Hc(d[k](g, h), e);
                    Hc(i, e), Ic(j, e);
                    var l = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]);
                    return Hc(l, e)
                }
            }, arrayDeclaration: function () {
                var a = [];
                if ("]" !== this.peekToken().text)do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","));
                return this.consume("]"), l(function (b, c) {
                    for (var d = [], e = 0, f = a.length; f > e; e++)d.push(a[e](b, c));
                    return d
                }, {literal: !0, constant: a.every(Jc), inputs: a})
            }, object: function () {
                var a = [], b = [];
                if ("}" !== this.peekToken().text)do {
                    if (this.peek("}"))break;
                    var c = this.consume();
                    c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), this.consume(":"), b.push(this.expression())
                } while (this.expect(","));
                return this.consume("}"), l(function (c, d) {
                    for (var e = {}, f = 0, g = b.length; g > f; f++)e[a[f]] = b[f](c, d);
                    return e
                }, {literal: !0, constant: b.every(Jc), inputs: b})
            }
        };
        var of = jb(), pf = jb(), qf = Object.prototype.valueOf, rf = d("$sce"), sf = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, Ue = d("$compile"), tf = b.createElement("a"), uf = dd(a.location.href);
        gd.$inject = ["$provide"], kd.$inject = ["$locale"], ld.$inject = ["$locale"];
        var vf = ".", wf = {
            yyyy: od("FullYear", 4),
            yy: od("FullYear", 2, 0, !0),
            y: od("FullYear", 1),
            MMMM: pd("Month"),
            MMM: pd("Month", !0),
            MM: od("Month", 2, 1),
            M: od("Month", 1, 1),
            dd: od("Date", 2),
            d: od("Date", 1),
            HH: od("Hours", 2),
            H: od("Hours", 1),
            hh: od("Hours", 2, -12),
            h: od("Hours", 1, -12),
            mm: od("Minutes", 2),
            m: od("Minutes", 1),
            ss: od("Seconds", 2),
            s: od("Seconds", 1),
            sss: od("Milliseconds", 3),
            EEEE: pd("Day"),
            EEE: pd("Day", !0),
            a: ud,
            Z: qd,
            ww: td(2),
            w: td(1)
        }, xf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, yf = /^\-?\d+$/;
        vd.$inject = ["$locale"];
        var zf = q(Ud), Af = q(Wd);
        yd.$inject = ["$parse"];
        var Bf = q({
            restrict: "E", compile: function (a, b) {
                return b.href || b.xlinkHref || b.name ? void 0 : function (a, b) {
                    var c = "[object SVGAnimatedString]" === ee.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(c) || a.preventDefault()
                    })
                }
            }
        }), Cf = {};
        f(Ke, function (a, b) {
            if ("multiple" != a) {
                var c = $b("ng-" + b);
                Cf[c] = function () {
                    return {
                        restrict: "A", priority: 100, link: function (a, d, e) {
                            a.$watch(e[c], function (a) {
                                e.$set(b, !!a)
                            })
                        }
                    }
                }
            }
        }), f(Me, function (a, b) {
            Cf[b] = function () {
                return {
                    priority: 100, link: function (a, c, d) {
                        if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                            var e = d.ngPattern.match(Sd);
                            if (e)return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                        }
                        a.$watch(d[b], function (a) {
                            d.$set(b, a)
                        })
                    }
                }
            }
        }), f(["src", "srcset", "href"], function (a) {
            var b = $b("ng-" + a);
            Cf[b] = function () {
                return {
                    priority: 99, link: function (c, d, e) {
                        var f = a, g = a;
                        "href" === a && "[object SVGAnimatedString]" === ee.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
                            return b ? (e.$set(g, b), void(Zd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                        })
                    }
                }
            }
        });
        var Df = {
            $addControl: o,
            $$renameControl: Ad,
            $removeControl: o,
            $setValidity: o,
            $setDirty: o,
            $setPristine: o,
            $setSubmitted: o
        }, Ef = "ng-submitted";
        Bd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var Ff = function (a) {
            return ["$timeout", function (b) {
                var d = {
                    name: "form", restrict: a ? "EAC" : "E", controller: Bd, compile: function (a) {
                        return a.addClass(Xf).addClass(Vf), {
                            pre: function (a, d, e, f) {
                                if (!("action"in e)) {
                                    var g = function (b) {
                                        a.$apply(function () {
                                            f.$commitViewValue(), f.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    ye(d[0], "submit", g), d.on("$destroy", function () {
                                        b(function () {
                                            ze(d[0], "submit", g)
                                        }, 0, !1)
                                    })
                                }
                                var h = f.$$parentForm, i = f.$name;
                                i && (Kc(a, i, f, i), e.$observe(e.name ? "name" : "ngForm", function (b) {
                                    i !== b && (Kc(a, i, c, i), i = b, Kc(a, i, f, i), h.$$renameControl(f, i))
                                })), d.on("$destroy", function () {
                                    h.$removeControl(f), i && Kc(a, i, c, i), l(f, Df)
                                })
                            }
                        }
                    }
                };
                return d
            }]
        }, Gf = Ff(), Hf = Ff(!0), If = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Jf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Kf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Lf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Mf = /^(\d{4})-(\d{2})-(\d{2})$/, Nf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Of = /^(\d{4})-W(\d\d)$/, Pf = /^(\d{4})-(\d\d)$/, Qf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Rf = /(\s+|^)default(\s+|$)/, Sf = new d("ngModel"), Tf = {
            text: Dd,
            date: Hd("date", Mf, Gd(Mf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Hd("datetimelocal", Nf, Gd(Nf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Hd("time", Qf, Gd(Qf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Hd("week", Of, Fd, "yyyy-Www"),
            month: Hd("month", Pf, Gd(Pf, ["yyyy", "MM"]), "yyyy-MM"),
            number: Jd,
            url: Kd,
            email: Ld,
            radio: Md,
            checkbox: Od,
            hidden: o,
            button: o,
            submit: o,
            reset: o,
            file: o
        }, Uf = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, c, d) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (e, f, g, h) {
                        h[0] && (Tf[Ud(g.type)] || Tf.text)(e, f, g, h[0], b, a, c, d)
                    }
                }
            }
        }], Vf = "ng-valid", Wf = "ng-invalid", Xf = "ng-pristine", Yf = "ng-dirty", Zf = "ng-untouched", $f = "ng-touched", _f = "ng-pending", ag = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, e, g, h, i, j, k, l) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
            var m = g(d.ngModel), n = m.assign, p = m, q = n, t = null, u = this;
            this.$$setOptions = function (a) {
                if (u.$options = a, a && a.getterSetter) {
                    var b = g(d.ngModel + "()"), c = g(d.ngModel + "($$$p)");
                    p = function (a) {
                        var c = m(a);
                        return x(c) && (c = b(a)), c
                    }, q = function (a) {
                        x(m(a)) ? c(a, {$$$p: u.$modelValue}) : n(a, u.$modelValue)
                    }
                } else if (!m.assign)throw Sf("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, T(e))
            }, this.$render = o, this.$isEmpty = function (a) {
                return r(a) || "" === a || null === a || a !== a
            };
            var w = e.inheritedData("$formController") || Df, y = 0;
            Pd({
                ctrl: this, $element: e, set: function (a, b) {
                    a[b] = !0
                }, unset: function (a, b) {
                    delete a[b]
                }, parentForm: w, $animate: h
            }), this.$setPristine = function () {
                u.$dirty = !1, u.$pristine = !0, h.removeClass(e, Yf), h.addClass(e, Xf)
            }, this.$setDirty = function () {
                u.$dirty = !0, u.$pristine = !1, h.removeClass(e, Xf), h.addClass(e, Yf), w.$setDirty()
            }, this.$setUntouched = function () {
                u.$touched = !1, u.$untouched = !0, h.setClass(e, Zf, $f)
            }, this.$setTouched = function () {
                u.$touched = !0, u.$untouched = !1, h.setClass(e, $f, Zf)
            }, this.$rollbackViewValue = function () {
                i.cancel(t), u.$viewValue = u.$$lastCommittedViewValue, u.$render()
            }, this.$validate = function () {
                if (!v(u.$modelValue) || !isNaN(u.$modelValue)) {
                    var a = u.$$lastCommittedViewValue, b = u.$$rawModelValue, d = u.$$parserName || "parse", e = u.$error[d] ? !1 : c, f = u.$valid, g = u.$modelValue, h = u.$options && u.$options.allowInvalid;
                    u.$$runValidators(e, b, a, function (a) {
                        h || f === a || (u.$modelValue = a ? b : c, u.$modelValue !== g && u.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (a, b, d, e) {
                function g(a) {
                    var b = u.$$parserName || "parse";
                    if (a === c)j(b, null); else if (j(b, a), !a)return f(u.$validators, function (a, b) {
                        j(b, null)
                    }), f(u.$asyncValidators, function (a, b) {
                        j(b, null)
                    }), !1;
                    return !0
                }

                function h() {
                    var a = !0;
                    return f(u.$validators, function (c, e) {
                        var f = c(b, d);
                        a = a && f, j(e, f)
                    }), a ? !0 : (f(u.$asyncValidators, function (a, b) {
                        j(b, null)
                    }), !1)
                }

                function i() {
                    var a = [], e = !0;
                    f(u.$asyncValidators, function (f, g) {
                        var h = f(b, d);
                        if (!F(h))throw Sf("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                        j(g, c), a.push(h.then(function () {
                            j(g, !0)
                        }, function () {
                            e = !1, j(g, !1)
                        }))
                    }), a.length ? k.all(a).then(function () {
                        l(e)
                    }, o) : l(!0)
                }

                function j(a, b) {
                    m === y && u.$setValidity(a, b)
                }

                function l(a) {
                    m === y && e(a)
                }

                y++;
                var m = y;
                return g(a) && h() ? void i() : void l(!1)
            }, this.$commitViewValue = function () {
                var a = u.$viewValue;
                i.cancel(t), (u.$$lastCommittedViewValue !== a || "" === a && u.$$hasNativeValidators) && (u.$$lastCommittedViewValue = a, u.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                function b() {
                    u.$modelValue !== h && u.$$writeModelToScope()
                }

                var d = u.$$lastCommittedViewValue, e = d, f = r(e) ? c : !0;
                if (f)for (var g = 0; g < u.$parsers.length; g++)if (e = u.$parsers[g](e), r(e)) {
                    f = !1;
                    break
                }
                v(u.$modelValue) && isNaN(u.$modelValue) && (u.$modelValue = p(a));
                var h = u.$modelValue, i = u.$options && u.$options.allowInvalid;
                u.$$rawModelValue = e, i && (u.$modelValue = e, b()), u.$$runValidators(f, e, u.$$lastCommittedViewValue, function (a) {
                    i || (u.$modelValue = a ? e : c, b())
                })
            }, this.$$writeModelToScope = function () {
                q(a, u.$modelValue), f(u.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function (a, b) {
                u.$viewValue = a, (!u.$options || u.$options.updateOnDefault) && u.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function (b) {
                var c, d = 0, e = u.$options;
                e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), i.cancel(t), d ? t = i(function () {
                    u.$commitViewValue()
                }, d) : j.$$phase ? u.$commitViewValue() : a.$apply(function () {
                    u.$commitViewValue()
                })
            }, a.$watch(function () {
                var b = p(a);
                if (b !== u.$modelValue) {
                    u.$modelValue = u.$$rawModelValue = b;
                    for (var d = u.$formatters, e = d.length, f = b; e--;)f = d[e](f);
                    u.$viewValue !== f && (u.$viewValue = u.$$lastCommittedViewValue = f, u.$render(), u.$$runValidators(c, b, f, o))
                }
                return b
            })
        }], bg = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: ag,
                priority: 1,
                compile: function (b) {
                    return b.addClass(Xf).addClass(Zf).addClass(Vf), {
                        pre: function (a, b, c, d) {
                            var e = d[0], f = d[1] || Df;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function (a) {
                                e.$name !== a && f.$$renameControl(e, a)
                            }), a.$on("$destroy", function () {
                                f.$removeControl(e)
                            })
                        }, post: function (b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function (a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function () {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }], cg = q({
            restrict: "A", require: "ngModel", link: function (a, b, c, d) {
                d.$viewChangeListeners.push(function () {
                    a.$eval(c.ngChange)
                })
            }
        }), dg = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function (a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function () {
                        d.$validate()
                    }))
                }
            }
        }, eg = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function (a) {
                            if (u(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test)throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, T(b));
                            g = a || c, f.$validate()
                        }), f.$validators.pattern = function (a) {
                            return f.$isEmpty(a) || r(g) || g.test(a)
                        }
                    }
                }
            }
        }, fg = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function (a) {
                            var b = m(a);
                            e = isNaN(b) ? -1 : b, d.$validate()
                        }), d.$validators.maxlength = function (a, b) {
                            return 0 > e || d.$isEmpty(a) || b.length <= e
                        }
                    }
                }
            }
        }, gg = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function (a) {
                            e = m(a) || 0, d.$validate()
                        }), d.$validators.minlength = function (a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        }, hg = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, e) {
                    var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? ke(g) : g, j = function (a) {
                        if (!r(a)) {
                            var b = [];
                            return a && f(a.split(i), function (a) {
                                a && b.push(h ? ke(a) : a)
                            }), b
                        }
                    };
                    e.$parsers.push(j), e.$formatters.push(function (a) {
                        return je(a) ? a.join(g) : c
                    }), e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, ig = /^(true|false|\d+)$/, jg = function () {
            return {
                restrict: "A", priority: 100, compile: function (a, b) {
                    return ig.test(b.ngValue) ? function (a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function (a, b, c) {
                        a.$watch(c.ngValue, function (a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        }, kg = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
                    var d = this;
                    this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = ke(this.$options.updateOn.replace(Rf, function () {
                        return d.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, lg = ["$compile", function (a) {
            return {
                restrict: "AC", compile: function (b) {
                    return a.$$addBindingClass(b), function (b, d, e) {
                        a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function (a) {
                            d.textContent = a === c ? "" : a
                        })
                    }
                }
            }
        }], mg = ["$interpolate", "$compile", function (a, b) {
            return {
                compile: function (d) {
                    return b.$$addBindingClass(d), function (d, e, f) {
                        var g = a(e.attr(f.$attr.ngBindTemplate));
                        b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function (a) {
                            e.textContent = a === c ? "" : a
                        })
                    }
                }
            }
        }], ng = ["$sce", "$parse", "$compile", function (a, b, c) {
            return {
                restrict: "A", compile: function (d, e) {
                    var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (a) {
                        return (a || "").toString()
                    });
                    return c.$$addBindingClass(d), function (b, d, e) {
                        c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function () {
                            d.html(a.getTrustedHtml(f(b)) || "")
                        })
                    }
                }
            }
        }], og = Rd("", !0), pg = Rd("Odd", 0), qg = Rd("Even", 1), rg = zd({
            compile: function (a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }), sg = [function () {
            return {restrict: "A", scope: !0, controller: "@", priority: 500}
        }], tg = {}, ug = {blur: !0, focus: !0};
        f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
            var b = $b("ng-" + a);
            tg[b] = ["$parse", "$rootScope", function (c, d) {
                return {
                    restrict: "A", compile: function (e, f) {
                        var g = c(f[b], null, !0);
                        return function (b, c) {
                            c.on(a, function (c) {
                                var e = function () {
                                    g(b, {$event: c})
                                };
                                ug[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                            })
                        }
                    }
                }
            }]
        });
        var vg = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function (c) {
                        c ? i || g(function (c, f) {
                            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {clone: c}, a.enter(c, d.parent(), d)
                        }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ib(h.clone), a.leave(j).then(function () {
                            j = null
                        }), h = null))
                    })
                }
            }
        }], wg = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, b, c, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ge.noop,
                compile: function (e, f) {
                    var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                    return function (e, f, j, k, l) {
                        var m, n, o, p = 0, q = function () {
                            n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function () {
                                n = null
                            }), n = o, o = null)
                        };
                        e.$watch(d.parseAsResourceUrl(g), function (d) {
                            var g = function () {
                                !s(i) || i && !e.$eval(i) || b()
                            }, j = ++p;
                            d ? (a(d, !0).then(function (a) {
                                if (j === p) {
                                    var b = e.$new();
                                    k.template = a;
                                    var i = l(b, function (a) {
                                        q(), c.enter(a, null, f).then(g)
                                    });
                                    m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h)
                                }
                            }, function () {
                                j === p && (q(), e.$emit("$includeContentError", d))
                            }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                        })
                    }
                }
            }
        }], xg = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                    return /SVG/.test(d[0].toString()) ? (d.empty(), void a(sb(f.template, b).childNodes)(c, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), void a(d.contents())(c))
                }
            }
        }], yg = zd({
            priority: 450, compile: function () {
                return {
                    pre: function (a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }), zg = zd({terminal: !0, priority: 1e3}), Ag = ["$locale", "$interpolate", function (a, b) {
            var c = /{}/g, d = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA", link: function (e, g, h) {
                    function i(a) {
                        g.text(a || "")
                    }

                    var j, k = h.count, l = h.$attr.when && g.attr(h.$attr.when), m = h.offset || 0, n = e.$eval(l) || {}, o = {}, p = b.startSymbol(), q = b.endSymbol(), r = p + k + "-" + m + q, s = ge.noop;
                    f(h, function (a, b) {
                        var c = d.exec(b);
                        if (c) {
                            var e = (c[1] ? "-" : "") + Ud(c[2]);
                            n[e] = g.attr(h.$attr[b])
                        }
                    }), f(n, function (a, d) {
                        o[d] = b(a.replace(c, r))
                    }), e.$watch(k, function (b) {
                        var c = parseFloat(b), d = isNaN(c);
                        d || c in n || (c = a.pluralCat(c - m)), c === j || d && isNaN(j) || (s(), s = e.$watch(o[c], i), j = c)
                    })
                }
            }
        }], Bg = ["$parse", "$animate", function (a, g) {
            var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function (a, b, c, d, e, f, g) {
                a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
            }, k = function (a) {
                return a.clone[0]
            }, l = function (a) {
                return a.clone[a.clone.length - 1]
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (d, m) {
                    var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!p)throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                    var q = p[1], r = p[2], s = p[3], t = p[4];
                    if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p)throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                    var u = p[3] || p[1], v = p[2];
                    if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s)))throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                    var w, x, y, z, A = {$id: Ob};
                    return t ? w = a(t) : (y = function (a, b) {
                        return Ob(b)
                    }, z = function (a) {
                        return a
                    }), function (a, b, d, m, p) {
                        w && (x = function (b, c, d) {
                            return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                        });
                        var q = jb();
                        a.$watchCollection(r, function (d) {
                            var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = jb();
                            if (s && (a[s] = d), e(d))E = d, D = x || y; else {
                                D = x || z, E = [];
                                for (var K in d)d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                                E.sort()
                            }
                            for (w = E.length, G = new Array(w), m = 0; w > m; m++)if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C])F = q[C], delete q[C], J[C] = F, G[m] = F; else {
                                if (J[C])throw f(G, function (a) {
                                    a && a.scope && (q[a.id] = a)
                                }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                G[m] = {id: C, scope: c, clone: c}, J[C] = !0
                            }
                            for (var L in q) {
                                if (F = q[L], H = ib(F.clone), g.leave(H), H[0].parentNode)for (m = 0, r = H.length; r > m; m++)H[m][h] = !0;
                                F.scope.$destroy()
                            }
                            for (m = 0; w > m; m++)if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                t = I;
                                do t = t.nextSibling; while (t && t[h]);
                                k(F) != t && g.move(ib(F.clone), null, $d(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                            } else p(function (a, b) {
                                F.scope = b;
                                var c = o.cloneNode(!1);
                                a[a.length++] = c, g.enter(a, null, $d(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                            });
                            q = J
                        })
                    }
                }
            }
        }], Cg = "ng-hide", Dg = "ng-hide-animate", Eg = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, c, d) {
                    b.$watch(d.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](c, Cg, {tempClasses: Dg})
                    })
                }
            }
        }], Fg = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, c, d) {
                    b.$watch(d.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](c, Cg, {tempClasses: Dg})
                    })
                }
            }
        }], Gg = zd(function (a, b, c) {
            a.$watch(c.ngStyle, function (a, c) {
                c && a !== c && f(c, function (a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }), Hg = ["$animate", function (a) {
            return {
                restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (c, d, e, g) {
                    var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function (a, b) {
                        return function () {
                            a.splice(b, 1)
                        }
                    };
                    c.$watch(h, function (c) {
                        var d, e;
                        for (d = 0, e = k.length; e > d; ++d)a.cancel(k[d]);
                        for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                            var h = ib(j[d].clone);
                            l[d].$destroy();
                            var n = k[d] = a.leave(h);
                            n.then(m(k, d))
                        }
                        j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                var g = {clone: d};
                                j.push(g), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], Ig = zd({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }), Jg = zd({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({transclude: e, element: b})
            }
        }), Kg = zd({
            restrict: "EAC", link: function (a, b, c, e, f) {
                if (!f)throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
                f(function (a) {
                    b.empty(), b.append(a)
                })
            }
        }), Lg = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id, e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }], Mg = d("ngOptions"), Ng = q({restrict: "A", terminal: !0}), Og = ["$compile", "$parse", function (a, d) {
            var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {$setViewValue: o};
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (a, b, c) {
                    var d, e, f = this, g = {}, i = h;
                    f.databound = c.ngModel, f.init = function (a, b, c) {
                        i = a, d = b, e = c
                    }, f.addOption = function (b, c) {
                        gb(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), c && c[0].hasAttribute("selected") && (c[0].selected = !0)
                    }, f.removeOption = function (a) {
                        this.hasOption(a) && (delete g[a], i.$viewValue === a && this.renderUnknownOption(a))
                    }, f.renderUnknownOption = function (b) {
                        var c = "? " + Ob(b) + " ?";
                        e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                    }, f.hasOption = function (a) {
                        return g.hasOwnProperty(a)
                    }, b.$on("$destroy", function () {
                        f.renderUnknownOption = o
                    })
                }],
                link: function (h, i, j, k) {
                    function l(a, b, c, d) {
                        c.$render = function () {
                            var a = c.$viewValue;
                            d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                        }, b.on("change", function () {
                            a.$apply(function () {
                                z.parent() && z.remove(), c.$setViewValue(b.val())
                            })
                        })
                    }

                    function m(a, b, c) {
                        var d;
                        c.$render = function () {
                            var a = new Pb(c.$viewValue);
                            f(b.find("option"), function (b) {
                                b.selected = s(a.get(b.value))
                            })
                        }, a.$watch(function () {
                            M(d, c.$viewValue) || (d = L(c.$viewValue), c.$render())
                        }), b.on("change", function () {
                            a.$apply(function () {
                                var a = [];
                                f(b.find("option"), function (b) {
                                    b.selected && a.push(b.value)
                                }), c.$setViewValue(a)
                            })
                        })
                    }

                    function n(b, h, i) {
                        function j(a, c, d) {
                            return M[B] = d, E && (M[E] = c), a(b, M)
                        }

                        function k() {
                            b.$apply(function () {
                                var a, c = H(b) || [];
                                if (t)a = [], f(h.val(), function (b) {
                                    b = J ? K[b] : b, a.push(l(b, c[b]))
                                }); else {
                                    var d = J ? K[h.val()] : h.val();
                                    a = l(d, c[d])
                                }
                                i.$setViewValue(a), r()
                            })
                        }

                        function l(a, b) {
                            if ("?" === a)return c;
                            if ("" === a)return null;
                            var d = D ? D : G;
                            return j(d, a, b)
                        }

                        function m() {
                            var a, c = H(b);
                            if (c && je(c)) {
                                a = new Array(c.length);
                                for (var d = 0, e = c.length; e > d; d++)a[d] = j(A, d, c[d]);
                                return a
                            }
                            if (c) {
                                a = {};
                                for (var f in c)c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]))
                            }
                            return a
                        }

                        function n(a) {
                            var b;
                            if (t)if (J && je(a)) {
                                b = new Pb([]);
                                for (var c = 0; c < a.length; c++)b.put(j(J, null, a[c]), !0)
                            } else b = new Pb(a); else J && (a = j(J, null, a));
                            return function (c, d) {
                                var e;
                                return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a === j(e, c, d)
                            }
                        }

                        function o() {
                            w || (b.$$postDigest(r), w = !0)
                        }

                        function q(a, b, c) {
                            a[b] = a[b] || 0, a[b] += c ? 1 : -1
                        }

                        function r() {
                            w = !1;
                            var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, N, O = {"": []}, P = [""], Q = i.$viewValue, R = H(b) || [], S = E ? g(R) : R, T = {}, U = n(Q), V = !1;
                            for (K = {}, B = 0; u = S.length, u > B; B++)m = B, E && (m = S[B], "$" === m.charAt(0)) || (o = R[m], a = j(F, m, o) || "", (c = O[a]) || (c = O[a] = [], P.push(a)), C = U(m, o), V = V || C, I = j(A, m, o), I = s(I) ? I : "", N = J ? J(b, M) : E ? S[B] : B, J && (K[N] = m), c.push({
                                id: N,
                                label: I,
                                selected: C
                            }));
                            for (t || (v || null === Q ? O[""].unshift({
                                id: "",
                                label: "",
                                selected: !V
                            }) : V || O[""].unshift({
                                id: "?",
                                label: "",
                                selected: !0
                            })), z = 0, r = P.length; r > z; z++) {
                                for (a = P[z], c = O[a], L.length <= z ? (e = {
                                    element: y.clone().attr("label", a),
                                    label: c.label
                                }, k = [e], L.push(k), h.append(e.element)) : (k = L[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, u = c.length; u > B; B++)d = c[B], (l = k[B + 1]) ? (D = l.element, l.label !== d.label && (q(T, l.label, !1), q(T, d.label, !0), D.text(l.label = d.label), D.prop("label", l.label)), l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), Zd && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), k.push(l = {
                                    element: G,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), q(T, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                                for (B++; k.length > B;)d = k.pop(), q(T, d.label, !1), d.element.remove()
                            }
                            for (; L.length > z;) {
                                for (c = L.pop(), B = 1; B < c.length; ++B)q(T, c[B].label, !1);
                                c[0].element.remove()
                            }
                            f(T, function (a, b) {
                                a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b)
                            })
                        }

                        var z;
                        if (!(z = u.match(e)))throw Mg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(h));
                        var A = d(z[2] || z[1]), B = z[4] || z[6], C = / as /.test(z[0]) && z[1], D = C ? d(C) : null, E = z[5], F = d(z[3] || ""), G = d(z[2] ? z[1] : B), H = d(z[7]), I = z[8], J = I ? d(z[8]) : null, K = {}, L = [[{
                            element: h,
                            label: ""
                        }]], M = {};
                        v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function () {
                            return i.$modelValue
                        }, o)
                    }

                    if (k[1]) {
                        for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = $d(b.createElement("option")), y = $d(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)if ("" === B[A].value) {
                            o = v = B.eq(A);
                            break
                        }
                        p.init(q, v, z), t && (q.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                    }
                }
            }
        }], Pg = ["$interpolate", function (a) {
            var b = {addOption: o, removeOption: o};
            return {
                restrict: "E", priority: 100, compile: function (c, d) {
                    if (r(d.value)) {
                        var e = a(c.text(), !0);
                        e || d.$set("value", c.text())
                    }
                    return function (a, c, d) {
                        var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                        h && h.databound || (h = b), e ? a.$watch(e, function (a, b) {
                            d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c)
                        }) : h.addOption(d.value, c), c.on("$destroy", function () {
                            h.removeOption(d.value)
                        })
                    }
                }
            }
        }], Qg = q({restrict: "E", terminal: !1});
        return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (db(), nb(ge), void $d(b).ready(function () {
            $(b, _)
        }))
    }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), function (a, b, c) {
        "use strict";
        b.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
            var a = "$$ngAnimateChildren";
            return function (c, d, e) {
                var f = e.ngAnimateChildren;
                b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function (b) {
                    d.data(a, !!b)
                })
            }
        }).factory("$$animateReflow", ["$$rAF", "$document", function (a, b) {
            var c = b[0].body;
            return function (b) {
                return a(function () {
                    c.offsetWidth + 1;
                    b()
                })
            }
        }]).config(["$provide", "$animateProvider", function (d, e) {
            function f(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c.nodeType == q)return c
                }
            }

            function g(a) {
                return a && b.element(a)
            }

            function h(a) {
                return b.element(f(a))
            }

            function i(a, b) {
                return f(a) == f(b)
            }

            var j, k = b.noop, l = b.forEach, m = e.$$selectors, n = b.isArray, o = b.isString, p = b.isObject, q = 1, r = "$$ngAnimateState", s = "$$ngAnimateChildren", t = "ng-animate", u = {running: !0};
            d.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function (a, c, d, q, v, w, x, y, z, A) {
                function B(a, b) {
                    var c = a.data(r) || {};
                    return b && (c.running = !0, c.structural = !0, a.data(r, c)), c.disabled || c.running && c.structural
                }

                function C(a) {
                    var b, d = c.defer();
                    return d.promise.$$cancelFn = function () {
                        b && b()
                    }, x.$$postDigest(function () {
                        b = a(function () {
                            d.resolve()
                        })
                    }), d.promise
                }

                function D(a) {
                    return p(a) ? (a.tempClasses && o(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a) : void 0
                }

                function E(a, b, c) {
                    c = c || {};
                    var d = {};
                    l(c, function (a, b) {
                        l(b.split(" "), function (b) {
                            d[b] = a
                        })
                    });
                    var e = Object.create(null);
                    l((a.attr("class") || "").split(/\s+/), function (a) {
                        e[a] = !0
                    });
                    var f = [], g = [];
                    return l(b && b.classes || [], function (a, b) {
                        var c = e[b], h = d[b] || {};
                        a === !1 ? (c || "addClass" == h.event) && g.push(b) : a === !0 && (c && "removeClass" != h.event || f.push(b))
                    }), f.length + g.length > 0 && [f.join(" "), g.join(" ")]
                }

                function F(a) {
                    if (a) {
                        var b = [], c = {}, e = a.substr(1).split(".");
                        (q.transitions || q.animations) && b.push(d.get(m[""]));
                        for (var f = 0; f < e.length; f++) {
                            var g = e[f], h = m[g];
                            h && !c[g] && (b.push(d.get(h)), c[g] = !0)
                        }
                        return b
                    }
                }

                function G(a, c, d, e) {
                    function f(a, b) {
                        var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                        return c || d ? ("leave" == b && (d = c, c = null), w.push({event: b, fn: c}), t.push({
                            event: b,
                            fn: d
                        }), !0) : void 0
                    }

                    function g(b, c, f) {
                        function g(a) {
                            if (c) {
                                if ((c[a] || k)(), ++m < h.length)return;
                                c = null
                            }
                            f()
                        }

                        var h = [];
                        l(b, function (a) {
                            a.fn && h.push(a)
                        });
                        var m = 0;
                        l(h, function (b, f) {
                            var h = function () {
                                g(f)
                            };
                            switch (b.event) {
                                case"setClass":
                                    c.push(b.fn(a, i, j, h, e));
                                    break;
                                case"animate":
                                    c.push(b.fn(a, d, e.from, e.to, h));
                                    break;
                                case"addClass":
                                    c.push(b.fn(a, i || d, h, e));
                                    break;
                                case"removeClass":
                                    c.push(b.fn(a, j || d, h, e));
                                    break;
                                default:
                                    c.push(b.fn(a, h, e))
                            }
                        }), c && 0 === c.length && f()
                    }

                    var h = a[0];
                    if (h) {
                        e && (e.to = e.to || {}, e.from = e.from || {});
                        var i, j;
                        n(d) && (i = d[0], j = d[1], i ? j ? d = i + " " + j : (d = i, c = "addClass") : (d = j, c = "removeClass"));
                        var m = "setClass" == c, o = m || "addClass" == c || "removeClass" == c || "animate" == c, p = a.attr("class"), q = p + " " + d;
                        if (O(q)) {
                            var r = k, s = [], t = [], u = k, v = [], w = [], x = (" " + q).replace(/\s+/g, ".");
                            return l(F(x), function (a) {
                                var b = f(a, c);
                                !b && m && (f(a, "addClass"), f(a, "removeClass"))
                            }), {
                                node: h,
                                event: c,
                                className: d,
                                isClassBased: o,
                                isSetClassOperation: m,
                                applyStyles: function () {
                                    e && a.css(b.extend(e.from || {}, e.to || {}))
                                },
                                before: function (a) {
                                    r = a, g(t, s, function () {
                                        r = k, a()
                                    })
                                },
                                after: function (a) {
                                    u = a, g(w, v, function () {
                                        u = k, a()
                                    })
                                },
                                cancel: function () {
                                    s && (l(s, function (a) {
                                        (a || k)(!0)
                                    }), r(!0)), v && (l(v, function (a) {
                                        (a || k)(!0)
                                    }), u(!0))
                                }
                            }
                        }
                    }
                }

                function H(a, c, d, e, f, g, h, i) {
                    function m(b) {
                        var e = "$animate:" + b;
                        x && x[e] && x[e].length > 0 && w(function () {
                            d.triggerHandler(e, {event: a, className: c})
                        })
                    }

                    function n() {
                        m("before")
                    }

                    function o() {
                        m("after")
                    }

                    function p() {
                        m("close"), i()
                    }

                    function q() {
                        q.hasBeenRun || (q.hasBeenRun = !0, g())
                    }

                    function s() {
                        if (!s.hasBeenRun) {
                            v && v.applyStyles(), s.hasBeenRun = !0, h && h.tempClasses && l(h.tempClasses, function (a) {
                                j.removeClass(d, a)
                            });
                            var b = d.data(r);
                            b && (v && v.isClassBased ? J(d, c) : (w(function () {
                                var b = d.data(r) || {};
                                H == b.index && J(d, c, a)
                            }), d.data(r, b))), p()
                        }
                    }

                    var u = k, v = G(d, a, c, h);
                    if (!v)return q(), n(), o(), s(), u;
                    a = v.event, c = v.className;
                    var x = b.element._data(v.node);
                    if (x = x && x.events, e || (e = f ? f.parent() : d.parent()), K(d, e))return q(), n(), o(), s(), u;
                    var y = d.data(r) || {}, z = y.active || {}, A = y.totalActive || 0, B = y.last, C = !1;
                    if (A > 0) {
                        var D = [];
                        if (v.isClassBased) {
                            if ("setClass" == B.event)D.push(B), J(d, c); else if (z[c]) {
                                var E = z[c];
                                E.event == a ? C = !0 : (D.push(E), J(d, c))
                            }
                        } else if ("leave" == a && z["ng-leave"])C = !0; else {
                            for (var F in z)D.push(z[F]);
                            y = {}, J(d, !0)
                        }
                        D.length > 0 && l(D, function (a) {
                            a.cancel()
                        })
                    }
                    if (!v.isClassBased || v.isSetClassOperation || "animate" == a || C || (C = "addClass" == a == d.hasClass(c)), C)return q(), n(), o(), p(), u;
                    z = y.active || {}, A = y.totalActive || 0, "leave" == a && d.one("$destroy", function () {
                        var a = b.element(this), c = a.data(r);
                        if (c) {
                            var d = c.active["ng-leave"];
                            d && (d.cancel(), J(a, "ng-leave"))
                        }
                    }), j.addClass(d, t), h && h.tempClasses && l(h.tempClasses, function (a) {
                        j.addClass(d, a)
                    });
                    var H = M++;
                    return A++, z[c] = v, d.data(r, {
                        last: v,
                        active: z,
                        index: H,
                        totalActive: A
                    }), n(), v.before(function (b) {
                        var e = d.data(r);
                        b = b || !e || !e.active[c] || v.isClassBased && e.active[c].event != a, q(), b === !0 ? s() : (o(), v.after(s))
                    }), v.cancel
                }

                function I(a) {
                    var c = f(a);
                    if (c) {
                        var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(t) : c.querySelectorAll("." + t);
                        l(d, function (a) {
                            a = b.element(a);
                            var c = a.data(r);
                            c && c.active && l(c.active, function (a) {
                                a.cancel()
                            })
                        })
                    }
                }

                function J(a, b) {
                    if (i(a, v))u.disabled || (u.running = !1, u.structural = !1); else if (b) {
                        var c = a.data(r) || {}, d = b === !0;
                        !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (j.removeClass(a, t), a.removeData(r))
                    }
                }

                function K(a, c) {
                    if (u.disabled)return !0;
                    if (i(a, v))return u.running;
                    var d, e, f;
                    do {
                        if (0 === c.length)break;
                        var g = i(c, v), h = g ? u : c.data(r) || {};
                        if (h.disabled)return !0;
                        if (g && (f = !0), d !== !1) {
                            var j = c.data(s);
                            b.isDefined(j) && (d = j)
                        }
                        e = e || h.running || h.last && !h.last.isClassBased
                    } while (c = c.parent());
                    return !f || !d && e
                }

                j = A, v.data(r, u);
                var L = x.$watch(function () {
                    return z.totalPendingRequests
                }, function (a) {
                    0 === a && (L(), x.$$postDigest(function () {
                        x.$$postDigest(function () {
                            u.running = !1
                        })
                    }))
                }), M = 0, N = e.classNameFilter(), O = N ? function (a) {
                    return N.test(a)
                } : function () {
                    return !0
                };
                return {
                    animate: function (a, b, c, d, e) {
                        return d = d || "ng-inline-animate", e = D(e) || {}, e.from = c ? b : null, e.to = c ? c : b, C(function (b) {
                            return H("animate", d, h(a), null, null, k, e, b)
                        })
                    }, enter: function (c, d, e, f) {
                        return f = D(f), c = b.element(c), d = g(d), e = g(e), B(c, !0), a.enter(c, d, e), C(function (a) {
                            return H("enter", "ng-enter", h(c), d, e, k, f, a)
                        })
                    }, leave: function (c, d) {
                        return d = D(d), c = b.element(c), I(c), B(c, !0), C(function (b) {
                            return H("leave", "ng-leave", h(c), null, null, function () {
                                a.leave(c)
                            }, d, b)
                        })
                    }, move: function (c, d, e, f) {
                        return f = D(f), c = b.element(c), d = g(d), e = g(e), I(c), B(c, !0), a.move(c, d, e), C(function (a) {
                            return H("move", "ng-move", h(c), d, e, k, f, a)
                        })
                    }, addClass: function (a, b, c) {
                        return this.setClass(a, b, [], c)
                    }, removeClass: function (a, b, c) {
                        return this.setClass(a, [], b, c)
                    }, setClass: function (c, d, e, g) {
                        g = D(g);
                        var i = "$$animateClasses";
                        if (c = b.element(c), c = h(c), B(c))return a.$$setClassImmediately(c, d, e, g);
                        var j, k = c.data(i), m = !!k;
                        return k || (k = {}, k.classes = {}), j = k.classes, d = n(d) ? d : d.split(" "), l(d, function (a) {
                            a && a.length && (j[a] = !0)
                        }), e = n(e) ? e : e.split(" "), l(e, function (a) {
                            a && a.length && (j[a] = !1)
                        }), m ? (g && k.options && (k.options = b.extend(k.options || {}, g)), k.promise) : (c.data(i, k = {
                            classes: j,
                            options: g
                        }), k.promise = C(function (b) {
                            var d = c.parent(), e = f(c), g = e.parentNode;
                            if (!g || g.$$NG_REMOVED || e.$$NG_REMOVED)return void b();
                            var h = c.data(i);
                            c.removeData(i);
                            var j = c.data(r) || {}, k = E(c, h, j.active);
                            return k ? H("setClass", k, c, d, null, function () {
                                k[0] && a.$$addClassImmediately(c, k[0]), k[1] && a.$$removeClassImmediately(c, k[1])
                            }, h.options, b) : b()
                        }))
                    }, cancel: function (a) {
                        a.$$cancelFn()
                    }, enabled: function (a, b) {
                        switch (arguments.length) {
                            case 2:
                                if (a)J(b); else {
                                    var c = b.data(r) || {};
                                    c.disabled = !0, b.data(r, c)
                                }
                                break;
                            case 1:
                                u.disabled = !a;
                                break;
                            default:
                                a = !u.disabled
                        }
                        return !!a
                    }
                }
            }]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (d, e, g, h) {
                function i() {
                    J || (J = h(function () {
                        W = [], J = null, U = {}
                    }))
                }

                function m(a, b) {
                    J && J(), W.push(b), J = h(function () {
                        l(W, function (a) {
                            a()
                        }), W = [], J = null, U = {}
                    })
                }

                function p(a, c) {
                    var d = f(a);
                    a = b.element(d), Z.push(a);
                    var e = Date.now() + c;
                    Y >= e || (g.cancel(X), Y = e, X = g(function () {
                        r(Z), Z = []
                    }, c, !1))
                }

                function r(a) {
                    l(a, function (a) {
                        var b = a.data(Q);
                        b && l(b.closeAnimationFns, function (a) {
                            a()
                        })
                    })
                }

                function s(a, b) {
                    var c = b ? U[b] : null;
                    if (!c) {
                        var e = 0, f = 0, g = 0, h = 0;
                        l(a, function (a) {
                            if (a.nodeType == q) {
                                var b = d.getComputedStyle(a) || {}, c = b[E + K];
                                e = Math.max(t(c), e);
                                var i = b[E + M];
                                f = Math.max(t(i), f);
                                {
                                    b[G + M]
                                }
                                h = Math.max(t(b[G + M]), h);
                                var j = t(b[G + K]);
                                j > 0 && (j *= parseInt(b[G + N], 10) || 1), g = Math.max(j, g)
                            }
                        }), c = {
                            total: 0,
                            transitionDelay: f,
                            transitionDuration: e,
                            animationDelay: h,
                            animationDuration: g
                        }, b && (U[b] = c)
                    }
                    return c
                }

                function t(a) {
                    var b = 0, c = o(a) ? a.split(/\s*,\s*/) : [];
                    return l(c, function (a) {
                        b = Math.max(parseFloat(a) || 0, b)
                    }), b
                }

                function u(a) {
                    var b = a.parent(), c = b.data(P);
                    return c || (b.data(P, ++V), c = V), c + "-" + f(a).getAttribute("class")
                }

                function v(a, b, c, d) {
                    var e = ["ng-enter", "ng-leave", "ng-move"].indexOf(c) >= 0, g = u(b), h = g + " " + c, i = U[h] ? ++U[h].total : 0, k = {};
                    if (i > 0) {
                        var l = c + "-stagger", m = g + " " + l, n = !U[m];
                        n && j.addClass(b, l), k = s(b, m), n && j.removeClass(b, l)
                    }
                    j.addClass(b, c);
                    var o = b.data(Q) || {}, p = s(b, h), q = p.transitionDuration, r = p.animationDuration;
                    if (e && 0 === q && 0 === r)return j.removeClass(b, c), !1;
                    var t = d || e && q > 0, v = r > 0 && k.animationDelay > 0 && 0 === k.animationDuration, w = o.closeAnimationFns || [];
                    b.data(Q, {
                        stagger: k,
                        cacheKey: h,
                        running: o.running || 0,
                        itemIndex: i,
                        blockTransition: t,
                        closeAnimationFns: w
                    });
                    var z = f(b);
                    return t && (x(z, !0), d && b.css(d)), v && y(z, !0), !0
                }

                function w(a, b, c, d, e) {
                    function h() {
                        b.off(M, i), j.removeClass(b, n), j.removeClass(b, o), K && g.cancel(K), C(b, c);
                        var a = f(b);
                        for (var d in r)a.style.removeProperty(r[d])
                    }

                    function i(a) {
                        a.stopPropagation();
                        var b = a.originalEvent || a, c = b.$manualTimeStamp || b.timeStamp || Date.now(), e = parseFloat(b.elapsedTime.toFixed(R));
                        Math.max(c - L, 0) >= G && e >= D && d()
                    }

                    var k = f(b), m = b.data(Q);
                    if (-1 == k.getAttribute("class").indexOf(c) || !m)return void d();
                    var n = "", o = "";
                    l(c.split(" "), function (a, b) {
                        var c = (b > 0 ? " " : "") + a;
                        n += c + "-active", o += c + "-pending"
                    });
                    var q = "", r = [], t = m.itemIndex, u = m.stagger, v = 0;
                    if (t > 0) {
                        var w = 0;
                        u.transitionDelay > 0 && 0 === u.transitionDuration && (w = u.transitionDelay * t);
                        var z = 0;
                        u.animationDelay > 0 && 0 === u.animationDuration && (z = u.animationDelay * t, r.push(I + "animation-play-state")), v = Math.round(100 * Math.max(w, z)) / 100
                    }
                    v || (j.addClass(b, n), m.blockTransition && x(k, !1));
                    var A = m.cacheKey + " " + n, B = s(b, A), D = Math.max(B.transitionDuration, B.animationDuration);
                    if (0 === D)return j.removeClass(b, n), C(b, c), void d();
                    !v && e && (B.transitionDuration || (b.css("transition", B.animationDuration + "s linear all"), r.push("transition")), b.css(e));
                    var E = Math.max(B.transitionDelay, B.animationDelay), G = E * T;
                    if (r.length > 0) {
                        var J = k.getAttribute("style") || "";
                        ";" !== J.charAt(J.length - 1) && (J += ";"), k.setAttribute("style", J + " " + q)
                    }
                    var K, L = Date.now(), M = H + " " + F, N = (E + D) * S, O = (v + N) * T;
                    return v > 0 && (j.addClass(b, o), K = g(function () {
                        K = null, B.transitionDuration > 0 && x(k, !1), B.animationDuration > 0 && y(k, !1), j.addClass(b, n), j.removeClass(b, o), e && (0 === B.transitionDuration && b.css("transition", B.animationDuration + "s linear all"), b.css(e), r.push("transition"))
                    }, v * T, !1)), b.on(M, i), m.closeAnimationFns.push(function () {
                        h(), d()
                    }), m.running++, p(b, O), h
                }

                function x(a, b) {
                    a.style[E + L] = b ? "none" : ""
                }

                function y(a, b) {
                    a.style[G + O] = b ? "paused" : ""
                }

                function z(a, b, c, d) {
                    return v(a, b, c, d) ? function (a) {
                        a && C(b, c)
                    } : void 0
                }

                function A(a, b, c, d, e) {
                    return b.data(Q) ? w(a, b, c, d, e) : (C(b, c), void d())
                }

                function B(a, b, c, d, e) {
                    var f = z(a, b, c, e.from);
                    if (!f)return i(), void d();
                    var g = f;
                    return m(b, function () {
                        g = A(a, b, c, d, e.to)
                    }), function (a) {
                        (g || k)(a)
                    }
                }

                function C(a, b) {
                    j.removeClass(a, b);
                    var c = a.data(Q);
                    c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(Q))
                }

                function D(a, b) {
                    var c = "";
                    return a = n(a) ? a : a.split(/\s+/), l(a, function (a, d) {
                        a && a.length > 0 && (c += (d > 0 ? " " : "") + a + b)
                    }), c
                }

                var E, F, G, H, I = "";
                a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
                var J, K = "Duration", L = "Property", M = "Delay", N = "IterationCount", O = "PlayState", P = "$$ngAnimateKey", Q = "$$ngAnimateCSS3Data", R = 3, S = 1.5, T = 1e3, U = {}, V = 0, W = [], X = null, Y = 0, Z = [];
                return {
                    animate: function (a, b, c, d, e, f) {
                        return f = f || {}, f.from = c, f.to = d, B("animate", a, b, e, f)
                    }, enter: function (a, b, c) {
                        return c = c || {}, B("enter", a, "ng-enter", b, c)
                    }, leave: function (a, b, c) {
                        return c = c || {}, B("leave", a, "ng-leave", b, c)
                    }, move: function (a, b, c) {
                        return c = c || {}, B("move", a, "ng-move", b, c)
                    }, beforeSetClass: function (a, b, c, d, e) {
                        e = e || {};
                        var f = D(c, "-remove") + " " + D(b, "-add"), g = z("setClass", a, f, e.from);
                        return g ? (m(a, d), g) : (i(), void d())
                    }, beforeAddClass: function (a, b, c, d) {
                        d = d || {};
                        var e = z("addClass", a, D(b, "-add"), d.from);
                        return e ? (m(a, c), e) : (i(), void c())
                    }, beforeRemoveClass: function (a, b, c, d) {
                        d = d || {};
                        var e = z("removeClass", a, D(b, "-remove"), d.from);
                        return e ? (m(a, c), e) : (i(), void c())
                    }, setClass: function (a, b, c, d, e) {
                        e = e || {}, c = D(c, "-remove"), b = D(b, "-add");
                        var f = c + " " + b;
                        return A("setClass", a, f, d, e.to)
                    }, addClass: function (a, b, c, d) {
                        return d = d || {}, A("addClass", a, D(b, "-add"), c, d.to)
                    }, removeClass: function (a, b, c, d) {
                        return d = d || {}, A("removeClass", a, D(b, "-remove"), c, d.to)
                    }
                }
            }])
        }])
    }(window, window.angular), function (a, b) {
        "use strict";
        b.module("ngMessages", []).directive("ngMessages", ["$compile", "$animate", "$templateRequest", function (a, c, d) {
            var e = "ng-active", f = "ng-inactive";
            return {
                restrict: "AE", controller: function () {
                    this.$renderNgMessageClasses = b.noop;
                    var a = [];
                    this.registerMessage = function (b, c) {
                        for (var d = 0; d < a.length; d++)if (a[d].type == c.type) {
                            if (b != d) {
                                var e = a[b];
                                a[b] = a[d], b < a.length ? a[d] = e : a.splice(0, d)
                            }
                            return
                        }
                        a.splice(b, 0, c)
                    }, this.renderMessages = function (c, d) {
                        function e(a) {
                            return null !== a && a !== !1 && a
                        }

                        c = c || {};
                        var f;
                        b.forEach(a, function (a) {
                            f && !d || !e(c[a.type]) ? a.detach() : (a.attach(), f = !0)
                        }), this.renderElementClasses(f)
                    }
                }, require: "ngMessages", link: function (g, h, i, j) {
                    j.renderElementClasses = function (a) {
                        a ? c.setClass(h, e, f) : c.setClass(h, f, e)
                    };
                    var k, l = b.isString(i.ngMessagesMultiple) || b.isString(i.multiple), m = i.ngMessages || i["for"];
                    g.$watchCollection(m, function (a) {
                        k = a, j.renderMessages(a, l)
                    });
                    var n = i.ngMessagesInclude || i.include;
                    n && d(n).then(function (c) {
                        var d, e = b.element("<div/>").html(c);
                        b.forEach(e.children(), function (c) {
                            c = b.element(c), d ? d.after(c) : h.prepend(c), d = c, a(c)(g)
                        }), j.renderMessages(k, l)
                    })
                }
            }
        }]).directive("ngMessage", ["$animate", function (a) {
            var b = 8;
            return {
                require: "^ngMessages",
                transclude: "element",
                terminal: !0,
                restrict: "AE",
                link: function (c, d, e, f, g) {
                    for (var h, i, j = d[0], k = j.parentNode, l = 0, m = 0; l < k.childNodes.length; l++) {
                        var n = k.childNodes[l];
                        if (n.nodeType == b && n.nodeValue.indexOf("ngMessage") >= 0) {
                            if (n === j) {
                                h = m;
                                break
                            }
                            m++
                        }
                    }
                    f.registerMessage(h, {
                        type: e.ngMessage || e.when, attach: function () {
                            i || g(c, function (b) {
                                a.enter(b, null, d), i = b
                            })
                        }, detach: function () {
                            i && (a.leave(i), i = null)
                        }
                    })
                }
            }
        }])
    }(window, window.angular), function (a, b, c) {
        "use strict";
        function d(a) {
            return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
        }

        function e(a, b) {
            if (!d(b))throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
            for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
                var i = e[f];
                a = null !== a ? a[i] : c
            }
            return a
        }

        function f(a, c) {
            c = c || {}, b.forEach(c, function (a, b) {
                delete c[b]
            });
            for (var d in a)!a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
            return c
        }

        var g = b.$$minErr("$resource"), h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
        b.module("ngResource", ["ng"]).provider("$resource", function () {
            var a = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                actions: {
                    get: {method: "GET"},
                    save: {method: "POST"},
                    query: {method: "GET", isArray: !0},
                    remove: {method: "DELETE"},
                    "delete": {method: "DELETE"}
                }
            }, this.$get = ["$http", "$q", function (d, h) {
                function i(a) {
                    return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                }

                function j(a, b) {
                    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
                }

                function k(b, c) {
                    this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {}
                }

                function l(i, j, r, s) {
                    function t(a, b) {
                        var c = {};
                        return b = o({}, j, b), n(b, function (b, d) {
                            q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                        }), c
                    }

                    function u(a) {
                        return a.resource
                    }

                    function v(a) {
                        f(a || {}, this)
                    }

                    var w = new k(i, s);
                    return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function () {
                        var a = o({}, this);
                        return delete a.$promise, delete a.$resolved, a
                    }, n(r, function (a, e) {
                        var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                        v[e] = function (j, k, l, r) {
                            var s, x, y, z = {};
                            switch (arguments.length) {
                                case 4:
                                    y = r, x = l;
                                case 3:
                                case 2:
                                    if (!q(k)) {
                                        z = j, s = k, x = l;
                                        break
                                    }
                                    if (q(j)) {
                                        x = j, y = k;
                                        break
                                    }
                                    x = k, y = l;
                                case 1:
                                    q(j) ? x = j : i ? s = j : z = j;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var A = this instanceof v, B = A ? s : a.isArray ? [] : new v(s), C = {}, D = a.interceptor && a.interceptor.response || u, E = a.interceptor && a.interceptor.responseError || c;
                            n(a, function (a, b) {
                                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a))
                            }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                            var F = d(C).then(function (c) {
                                var d = c.data, h = B.$promise;
                                if (d) {
                                    if (b.isArray(d) !== !!a.isArray)throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object");
                                    a.isArray ? (B.length = 0, n(d, function (a) {
                                        B.push("object" == typeof a ? new v(a) : a)
                                    })) : (f(d, B), B.$promise = h)
                                }
                                return B.$resolved = !0, c.resource = B, c
                            }, function (a) {
                                return B.$resolved = !0, (y || m)(a), h.reject(a)
                            });
                            return F = F.then(function (a) {
                                var b = D(a);
                                return (x || m)(b, a.headers), b
                            }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
                        }, v.prototype["$" + e] = function (a, b, c) {
                            q(a) && (c = b, b = a, a = {});
                            var d = v[e].call(this, a, this, b, c);
                            return d.$promise || d
                        }
                    }), v.bind = function (a) {
                        return l(i, o({}, j, a), r)
                    }, v
                }

                var m = b.noop, n = b.forEach, o = b.extend, p = b.copy, q = b.isFunction;
                return k.prototype = {
                    setUrlParams: function (a, c, d) {
                        var e, f, h = this, j = d || h.template, k = h.urlParams = {};
                        n(j.split(/\W/), function (a) {
                            if ("hasOwnProperty" === a)throw g("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                        }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function (a, d) {
                            e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function (a, b) {
                                return f + b
                            })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function (a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c
                            })
                        }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function (b, c) {
                            h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                        })
                    }
                }, l
            }]
        })
    }(window, window.angular), function (a, b) {
        "use strict";
        function c() {
            function a(a, c) {
                return b.extend(Object.create(a), c)
            }

            function c(a, b) {
                var c = b.caseInsensitiveMatch, d = {originalPath: a, regexp: a}, e = d.keys = [];
                return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, b, c, d) {
                    var f = "?" === d ? d : null, g = "*" === d ? d : null;
                    return e.push({
                        name: c,
                        optional: !!f
                    }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
                }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
            }

            var d = {};
            this.when = function (a, e) {
                var f = b.copy(e);
                if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                    var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                    d[g] = b.extend({redirectTo: a}, c(g, f))
                }
                return this
            }, this.caseInsensitiveMatch = !1, this.otherwise = function (a) {
                return "string" == typeof a && (a = {redirectTo: a}), this.when(null, a), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (c, e, f, g, i, j, k) {
                function l(a, b) {
                    var c = b.keys, d = {};
                    if (!b.regexp)return null;
                    var e = b.regexp.exec(a);
                    if (!e)return null;
                    for (var f = 1, g = e.length; g > f; ++f) {
                        var h = c[f - 1], i = e[f];
                        h && i && (d[h.name] = i)
                    }
                    return d
                }

                function m(a) {
                    var d = t.current;
                    q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
                }

                function n() {
                    var a = t.current, d = q;
                    r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function () {
                        if (d) {
                            var a, c, e = b.extend({}, d.resolve);
                            return b.forEach(e, function (a, c) {
                                e[c] = b.isString(a) ? i.get(a) : i.invoke(a, null, null, c)
                            }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
                        }
                    }).then(function (e) {
                        d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
                    }, function (b) {
                        d == t.current && c.$broadcast("$routeChangeError", d, a, b)
                    }))
                }

                function o() {
                    var c, f;
                    return b.forEach(d, function (d) {
                        !f && (c = l(e.path(), d)) && (f = a(d, {
                            params: b.extend({}, e.search(), c),
                            pathParams: c
                        }), f.$$route = d)
                    }), f || d[null] && a(d[null], {params: {}, pathParams: {}})
                }

                function p(a, c) {
                    var d = [];
                    return b.forEach((a || "").split(":"), function (a, b) {
                        if (0 === b)d.push(a); else {
                            var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f]
                        }
                    }), d.join("")
                }

                var q, r, s = !1, t = {
                    routes: d, reload: function () {
                        s = !0, c.$evalAsync(function () {
                            m(), n()
                        })
                    }, updateParams: function (a) {
                        if (!this.current || !this.current.$$route)throw h("norout", "Tried updating route when with no current route");
                        var c = {}, d = this;
                        b.forEach(Object.keys(a), function (b) {
                            d.current.pathParams[b] || (c[b] = a[b])
                        }), a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(b.extend({}, e.search(), c))
                    }
                };
                return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
            }]
        }

        function d() {
            this.$get = function () {
                return {}
            }
        }

        function e(a, c, d) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function (e, f, g, h, i) {
                    function j() {
                        n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function () {
                            n = null
                        }), m = null)
                    }

                    function k() {
                        var g = a.current && a.current.locals, h = g && g.$template;
                        if (b.isDefined(h)) {
                            var k = e.$new(), n = a.current, q = i(k, function (a) {
                                d.enter(a, null, m || f).then(function () {
                                    !b.isDefined(o) || o && !e.$eval(o) || c()
                                }), j()
                            });
                            m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
                        } else j()
                    }

                    var l, m, n, o = g.autoscroll, p = g.onload || "";
                    e.$on("$routeChangeSuccess", k), k()
                }
            }
        }

        function f(a, b, c) {
            return {
                restrict: "ECA", priority: -400, link: function (d, e) {
                    var f = c.current, g = f.locals;
                    e.html(g.$template);
                    var h = a(e.contents());
                    if (f.controller) {
                        g.$scope = d;
                        var i = b(f.controller, g);
                        f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
                    }
                    h(d)
                }
            }
        }

        var g = b.module("ngRoute", ["ng"]).provider("$route", c), h = b.$$minErr("ngRoute");
        g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), e.$inject = ["$route", "$anchorScroll", "$animate"], f.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular), function (a, b) {
        "use strict";
        function c() {
            this.$get = ["$$sanitizeUri", function (a) {
                return function (b) {
                    var c = [];
                    return f(b, i(c, function (b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }]
        }

        function d(a) {
            var c = [], d = i(c, b.noop);
            return d.chars(a), c.join("")
        }

        function e(a) {
            var b, c = {}, d = a.split(",");
            for (b = 0; b < d.length; b++)c[d[b]] = !0;
            return c
        }

        function f(a, c) {
            function d(a, d, f, h) {
                if (d = b.lowercase(d), y[d])for (; t.last() && z[t.last()];)e("", t.last());
                x[d] && t.last() == d && e("", d), h = u[d] || !!h, h || t.push(d);
                var i = {};
                f.replace(m, function (a, b, c, d, e) {
                    var f = c || d || e || "";
                    i[b] = g(f)
                }), c.start && c.start(d, i, h)
            }

            function e(a, d) {
                var e, f = 0;
                if (d = b.lowercase(d))for (f = t.length - 1; f >= 0 && t[f] != d; f--);
                if (f >= 0) {
                    for (e = t.length - 1; e >= f; e--)c.end && c.end(t[e]);
                    t.length = f
                }
            }

            "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
            var f, h, i, s, t = [], v = a;
            for (t.last = function () {
                return t[t.length - 1]
            }; a;) {
                if (s = "", h = !0, t.last() && B[t.last()] ? (a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function (a, b) {
                        return b = b.replace(p, "$1").replace(r, "$1"), c.chars && c.chars(g(b)), ""
                    }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(k, d)), h = !1) : (s += "<", a = a.substring(1))), h && (f = a.indexOf("<"), s += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(g(s)))), a == v)throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
                v = a
            }
            e()
        }

        function g(a) {
            if (!a)return "";
            var b = I.exec(a), c = b[1], d = b[3], e = b[2];
            return e && (H.innerHTML = e.replace(/</g, "&lt;"), e = "textContent"in H ? H.textContent : H.innerText), c + e + d
        }

        function h(a) {
            return a.replace(/&/g, "&amp;").replace(s, function (a) {
                var b = a.charCodeAt(0), c = a.charCodeAt(1);
                return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
            }).replace(t, function (a) {
                return "&#" + a.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function i(a, c) {
            var d = !1, e = b.bind(a, a.push);
            return {
                start: function (a, f, g) {
                    a = b.lowercase(a), !d && B[a] && (d = a), d || C[a] !== !0 || (e("<"), e(a), b.forEach(f, function (d, f) {
                        var g = b.lowercase(f), i = "img" === a && "src" === g || "background" === g;
                        G[g] !== !0 || D[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
                    }), e(g ? "/>" : ">"))
                }, end: function (a) {
                    a = b.lowercase(a), d || C[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
                }, chars: function (a) {
                    d || e(h(a))
                }
            }
        }

        var j = b.$$minErr("$sanitize"), k = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, l = /^<\/\s*([\w:-]+)[^>]*>/, m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, n = /^</, o = /^<\//, p = /<!--(.*?)-->/g, q = /<!DOCTYPE([^>]*?)>/i, r = /<!\[CDATA\[(.*?)]]>/g, s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, t = /([^\#-~| |!])/g, u = e("area,br,col,hr,img,wbr"), v = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), w = e("rp,rt"), x = b.extend({}, w, v), y = b.extend({}, v, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), z = b.extend({}, w, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), A = e("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"), B = e("script,style"), C = b.extend({}, u, y, z, x, A), D = e("background,cite,href,longdesc,src,usemap,xlink:href"), E = e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"), F = e("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"), G = b.extend({}, D, F, E), H = document.createElement("pre"), I = /^(\s*)([\s\S]*?)(\s*)$/;
        b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
            var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/, e = /^mailto:/;
            return function (f, g) {
                function h(a) {
                    a && n.push(d(a))
                }

                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
                }

                if (!f)return f;
                for (var j, k, l, m = f, n = []; j = m.match(c);)k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(e, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }])
    }(window, window.angular), function (a, b) {
        "use strict";
        function c(a, c, e) {
            d.directive(a, ["$parse", "$swipe", function (d, f) {
                var g = 75, h = .3, i = 30;
                return function (j, k, l) {
                    function m(a) {
                        if (!n)return !1;
                        var b = Math.abs(a.y - n.y), d = (a.x - n.x) * c;
                        return o && g > b && d > 0 && d > i && h > b / d
                    }

                    var n, o, p = d(l[a]), q = ["touch"];
                    b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
                        start: function (a) {
                            n = a, o = !0
                        }, cancel: function () {
                            o = !1
                        }, end: function (a, b) {
                            m(a) && j.$apply(function () {
                                k.triggerHandler(e), p(j, {$event: b})
                            })
                        }
                    }, q)
                }
            }])
        }

        var d = b.module("ngTouch", []);
        d.factory("$swipe", [function () {
            function a(a) {
                var b = a.touches && a.touches.length ? a.touches : [a], c = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || b[0].originalEvent || b[0];
                return {x: c.clientX, y: c.clientY}
            }

            function c(a, c) {
                var d = [];
                return b.forEach(a, function (a) {
                    var b = e[a][c];
                    b && d.push(b)
                }), d.join(" ")
            }

            var d = 10, e = {
                mouse: {start: "mousedown", move: "mousemove", end: "mouseup"},
                touch: {start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel"}
            };
            return {
                bind: function (b, e, f) {
                    var g, h, i, j, k = !1;
                    f = f || ["mouse", "touch"], b.on(c(f, "start"), function (b) {
                        i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                    });
                    var l = c(f, "cancel");
                    l && b.on(l, function (a) {
                        k = !1, e.cancel && e.cancel(a)
                    }), b.on(c(f, "move"), function (b) {
                        if (k && i) {
                            var c = a(b);
                            if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h))return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
                        }
                    }), b.on(c(f, "end"), function (b) {
                        k && (k = !1, e.end && e.end(a(b), b))
                    })
                }
            }
        }]), d.config(["$provide", function (a) {
            a.decorator("ngClickDirective", ["$delegate", function (a) {
                return a.shift(), a
            }])
        }]), d.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (a, c, d) {
            function e(a, b, c, d) {
                return Math.abs(a - c) < p && Math.abs(b - d) < p
            }

            function f(a, b, c) {
                for (var d = 0; d < a.length; d += 2)if (e(a[d], a[d + 1], b, c))return a.splice(d, d + 2), !0;
                return !1
            }

            function g(a) {
                if (!(Date.now() - j > o)) {
                    var b = a.touches && a.touches.length ? a.touches : [a], c = b[0].clientX, d = b[0].clientY;
                    1 > c && 1 > d || l && l[0] === c && l[1] === d || (l && (l = null), "label" === a.target.tagName.toLowerCase() && (l = [c, d]), f(k, c, d) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur()))
                }
            }

            function h(a) {
                var b = a.touches && a.touches.length ? a.touches : [a], d = b[0].clientX, e = b[0].clientY;
                k.push(d, e), c(function () {
                    for (var a = 0; a < k.length; a += 2)if (k[a] == d && k[a + 1] == e)return void k.splice(a, a + 2)
                }, o, !1)
            }

            function i(a, b) {
                k || (d[0].addEventListener("click", g, !0), d[0].addEventListener("touchstart", h, !0), k = []), j = Date.now(), f(k, a, b)
            }

            var j, k, l, m = 750, n = 12, o = 2500, p = 25, q = "ng-click-active";
            return function (c, d, e) {
                function f() {
                    o = !1, d.removeClass(q)
                }

                var g, h, j, k, l = a(e.ngClick), o = !1;
                d.on("touchstart", function (a) {
                    o = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(q), h = Date.now();
                    var b = a.touches && a.touches.length ? a.touches : [a], c = b[0].originalEvent || b[0];
                    j = c.clientX, k = c.clientY
                }), d.on("touchmove", function () {
                    f()
                }), d.on("touchcancel", function () {
                    f()
                }), d.on("touchend", function (a) {
                    var c = Date.now() - h, l = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a], p = l[0].originalEvent || l[0], q = p.clientX, r = p.clientY, s = Math.sqrt(Math.pow(q - j, 2) + Math.pow(r - k, 2));
                    o && m > c && n > s && (i(q, r), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
                }), d.onclick = function () {
                }, d.on("click", function (a, b) {
                    c.$apply(function () {
                        l(c, {$event: b || a})
                    })
                }), d.on("mousedown", function () {
                    d.addClass(q)
                }), d.on("mousemove mouseup", function () {
                    d.removeClass(q)
                })
            }
        }]), c("ngSwipeLeft", -1, "swipeleft"), c("ngSwipeRight", 1, "swiperight")
    }(window, window.angular), angular.module("angular-growl", []), angular.module("angular-growl").directive("growl", [function () {
        "use strict";
        return {
            restrict: "A",
            templateUrl: "templates/growl/growl.html",
            replace: !1,
            scope: {reference: "@", inline: "@", limitMessages: "="},
            controller: ["$scope", "$timeout", "growl", "growlMessages", function (a, b, c, d) {
                a.referenceId = a.reference || 0, d.initDirective(a.referenceId, a.limitMessages), a.growlMessages = d, a.inlineMessage = a.inline || c.inlineMessages(), a.$watch("limitMessages", function (b) {
                    var c = d.directives[a.referenceId];
                    angular.isUndefined(b) || angular.isUndefined(c) || (c.limitMessages = b)
                }), a.stopTimeoutClose = function (a) {
                    a.clickToClose || (angular.forEach(a.promises, function (a) {
                        b.cancel(a)
                    }), a.close ? d.deleteMessage(a) : a.close = !0)
                }, a.alertClasses = function (a) {
                    return {
                        "alert-success": "success" === a.severity,
                        "alert-error": "error" === a.severity,
                        "alert-danger": "error" === a.severity,
                        "alert-info": "info" === a.severity,
                        "alert-warning": "warning" === a.severity,
                        icon: a.disableIcons === !1,
                        "alert-dismissable": !a.disableCloseButton
                    }
                }, a.showCountDown = function (a) {
                    return !a.disableCountDown && a.ttl > 0
                }, a.wrapperClasses = function () {
                    var b = {};
                    return b["growl-fixed"] = !a.inlineMessage, b[c.position()] = !0, b
                }, a.computeTitle = function (a) {
                    var b = {success: "Success", error: "Error", info: "Information", warn: "Warning"};
                    return b[a.severity]
                }
            }]
        }
    }]), angular.module("angular-growl").run(["$templateCache", function (a) {
        "use strict";
        void 0 === a.get("templates/growl/growl.html") && a.put("templates/growl/growl.html", '<div class="growl-container" ng-class="wrapperClasses()"><div class="growl-item alert" ng-repeat="message in growlMessages.directives[referenceId].messages" ng-class="alertClasses(message)" ng-click="stopTimeoutClose(message)"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" ng-click="growlMessages.deleteMessage(message)" ng-show="!message.disableCloseButton">&times;</button><button type="button" class="close" aria-hidden="true" ng-show="showCountDown(message)">{{message.countdown}}</button><h4 class="growl-title" ng-show="message.title" ng-bind="message.title"></h4><div class="growl-message" ng-bind-html="message.text"></div></div></div>')
    }]), angular.module("angular-growl").provider("growl", function () {
        "use strict";
        var a = {
            success: null,
            error: null,
            warning: null,
            info: null
        }, b = "messages", c = "text", d = "title", e = "severity", f = !0, g = "variables", h = 0, i = !1, j = "top-right", k = !1, l = !1, m = !1, n = !1, o = !0;
        this.globalTimeToLive = function (b) {
            if ("object" == typeof b)for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]); else for (var d in a)a.hasOwnProperty(d) && (a[d] = b)
        }, this.globalTranslateMessages = function (a) {
            o = a
        }, this.globalDisableCloseButton = function (a) {
            k = a
        }, this.globalDisableIcons = function (a) {
            l = a
        }, this.globalReversedOrder = function (a) {
            m = a
        }, this.globalDisableCountDown = function (a) {
            n = a
        }, this.messageVariableKey = function (a) {
            g = a
        }, this.globalInlineMessages = function (a) {
            i = a
        }, this.globalPosition = function (a) {
            j = a
        }, this.messagesKey = function (a) {
            b = a
        }, this.messageTextKey = function (a) {
            c = a
        }, this.messageTitleKey = function (a) {
            d = a
        }, this.messageSeverityKey = function (a) {
            e = a
        }, this.onlyUniqueMessages = function (a) {
            f = a
        }, this.serverMessagesInterceptor = ["$q", "growl", function (a, c) {
            function d(a) {
                void 0 !== a && a.data[b] && a.data[b].length > 0 && c.addServerMessages(a.data[b])
            }

            return {
                response: function (a) {
                    return d(a), a
                }, responseError: function (b) {
                    return d(b), a.reject(b)
                }
            }
        }], this.$get = ["$rootScope", "$interpolate", "$sce", "$filter", "$timeout", "growlMessages", function (b, p, q, r, s, t) {
            function u(a) {
                if (G && a.translateMessage)a.text = G(a.text, a.variables); else {
                    var c = p(a.text);
                    a.text = c(a.variables)
                }
                var d = t.addMessage(a);
                return b.$broadcast("growlMessage", a), s(function () {
                }, 0), d
            }

            function v(b, c, d) {
                var e, f = c || {};
                return e = {
                    text: b,
                    title: f.title,
                    severity: d,
                    ttl: f.ttl || a[d],
                    variables: f.variables || {},
                    disableCloseButton: void 0 === f.disableCloseButton ? k : f.disableCloseButton,
                    disableIcons: void 0 === f.disableIcons ? l : f.disableIcons,
                    disableCountDown: void 0 === f.disableCountDown ? n : f.disableCountDown,
                    position: f.position || j,
                    referenceId: f.referenceId || h,
                    translateMessage: void 0 === f.translateMessage ? o : f.translateMessage,
                    destroy: function () {
                        t.deleteMessage(e)
                    },
                    setText: function (a) {
                        e.text = q.trustAsHtml(String(a))
                    },
                    onclose: f.onclose,
                    onopen: f.onopen
                }, u(e)
            }

            function w(a, b) {
                return v(a, b, "warning")
            }

            function x(a, b) {
                return v(a, b, "error")
            }

            function y(a, b) {
                return v(a, b, "info")
            }

            function z(a, b) {
                return v(a, b, "success")
            }

            function A(a, b, c) {
                c = (c || "error").toLowerCase(), v(a, b, c)
            }

            function B(a) {
                if (a && a.length) {
                    var b, f, h, i;
                    for (i = a.length, b = 0; i > b; b++)if (f = a[b], f[c]) {
                        h = (f[e] || "error").toLowerCase();
                        var j = {};
                        j.variables = f[g] || {}, j.title = f[d], v(f[c], j, h)
                    }
                }
            }

            function C() {
                return f
            }

            function D() {
                return m
            }

            function E() {
                return i
            }

            function F() {
                return j
            }

            var G;
            t.onlyUnique = f, t.reverseOrder = m;
            try {
                G = r("translate")
            } catch (H) {
            }
            return {
                warning: w,
                error: x,
                info: y,
                success: z,
                general: A,
                addServerMessages: B,
                onlyUnique: C,
                reverseOrder: D,
                inlineMessages: E,
                position: F
            }
        }]
    }), angular.module("angular-growl").service("growlMessages", ["$sce", "$timeout", function (a, b) {
        "use strict";
        this.directives = {}, this.initDirective = function (a, b) {
            this.directives[a] = {messages: [], limitMessages: b}
        }, this.addMessage = function (c) {
            var d, e, f = this.directives[c.referenceId], g = f.messages;
            if (!this.onlyUnique || (angular.forEach(g, function (b) {
                    e = a.getTrustedHtml(b.text), c.text === e && c.severity === b.severity && b.title === b.title && (d = !0)
                }), !d)) {
                if (c.text = a.trustAsHtml(String(c.text)), c.ttl && -1 !== c.ttl && (c.countdown = c.ttl / 1e3, c.promises = [], c.close = !1, c.countdownFunction = function () {
                        c.countdown > 1 ? (c.countdown--, c.promises.push(b(c.countdownFunction, 1e3))) : c.countdown--
                    }), angular.isDefined(f.limitMessages)) {
                    var h = g.length - (f.limitMessages - 1);
                    h > 0 && g.splice(f.limitMessages - 1, h)
                }
                return this.reverseOrder ? g.unshift(c) : g.push(c), "function" == typeof c.onopen && c.onopen(), c.ttl && -1 !== c.ttl && (c.promises.push(b(angular.bind(this, function () {
                    this.deleteMessage(c)
                }), c.ttl)), c.promises.push(b(c.countdownFunction, 1e3))), c
            }
        }, this.deleteMessage = function (a) {
            var b = this.directives[a.referenceId].messages, c = b.indexOf(a);
            c > -1 && (b[c].close = !0, b.splice(c, 1)), "function" == typeof a.onclose && a.onclose()
        }
    }]), angular.module("ngProgress.provider", ["ngProgress.directive"]).provider("ngProgress", function () {
        "use strict";
        this.autoStyle = !0, this.count = 0, this.height = "2px", this.color = "firebrick", this.$get = ["$document", "$window", "$compile", "$rootScope", "$timeout", function (a, b, c, d, e) {
            var f = this.count, g = this.height, h = this.color, i = d, j = a.find("body")[0], k = c("<ng-progress></ng-progress>")(i);
            j.appendChild(k[0]), i.count = f, void 0 !== g && k.eq(0).children().css("height", g), void 0 !== h && (k.eq(0).children().css("background-color", h), k.eq(0).children().css("color", h));
            var l, m = 0;
            return {
                start: function () {
                    this.show();
                    var a = this;
                    clearInterval(m), m = setInterval(function () {
                        if (isNaN(f))clearInterval(m), f = 0, a.hide(); else {
                            var b = 100 - f;
                            f += .15 * Math.pow(1 - Math.sqrt(b), 2), a.updateCount(f)
                        }
                    }, 200)
                }, updateCount: function (a) {
                    i.count = a, i.$$phase || i.$apply()
                }, height: function (a) {
                    return void 0 !== a && (g = a, i.height = g, i.$$phase || i.$apply()), g
                }, color: function (a) {
                    return void 0 !== a && (h = a, i.color = h, i.$$phase || i.$apply()), h
                }, hide: function () {
                    k.children().css("opacity", "0");
                    var a = this;
                    a.animate(function () {
                        k.children().css("width", "0%"), a.animate(function () {
                            a.show()
                        }, 500)
                    }, 500)
                }, show: function () {
                    var a = this;
                    a.animate(function () {
                        k.children().css("opacity", "1")
                    }, 100)
                }, animate: function (a, b) {
                    l && e.cancel(l), l = e(a, b)
                }, status: function () {
                    return f
                }, stop: function () {
                    clearInterval(m)
                }, set: function (a) {
                    return this.show(), this.updateCount(a), f = a, clearInterval(m), f
                }, css: function (a) {
                    return k.children().css(a)
                }, reset: function () {
                    return clearInterval(m), f = 0, this.updateCount(f), 0
                }, complete: function () {
                    f = 100, this.updateCount(f);
                    var a = this;
                    return clearInterval(m), e(function () {
                        a.hide(), e(function () {
                            f = 0, a.updateCount(f)
                        }, 500)
                    }, 1e3), f
                }, setParent: function (a) {
                    if (null === a || void 0 === a)throw new Error("Provide a valid parent of type HTMLElement");
                    null !== j && void 0 !== j && j.removeChild(k[0]), j = a, j.appendChild(k[0])
                }, getDomElement: function () {
                    return k
                }
            }
        }], this.setColor = function (a) {
            return void 0 !== a && (this.color = a), this.color
        }, this.setHeight = function (a) {
            return void 0 !== a && (this.height = a), this.height
        }
    }), angular.module("ngProgress.directive", []).directive("ngProgress", ["$window", "$rootScope", function (a, b) {
        var c = {
            replace: !0, restrict: "E", link: function (a, c) {
                b.$watch("count", function (b) {
                    (void 0 !== b || null !== b) && (a.counter = b, c.eq(0).children().css("width", b + "%"))
                }), b.$watch("color", function (b) {
                    (void 0 !== b || null !== b) && (a.color = b, c.eq(0).children().css("background-color", b), c.eq(0).children().css("color", b))
                }), b.$watch("height", function (b) {
                    (void 0 !== b || null !== b) && (a.height = b, c.eq(0).children().css("height", b))
                })
            }, template: '<div id="ngProgress-container"><div id="ngProgress"></div></div>'
        };
        return c
    }]), angular.module("ngProgress", ["ngProgress.directive", "ngProgress.provider"]), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.1", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), function (a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : "function" == typeof define && define.amd ? define(c) : b[a] = c()
}("Fingerprint", this, function () {
    "use strict";
    var a = function (a) {
        var b, c;
        b = Array.prototype.forEach, c = Array.prototype.map, this.each = function (a, c, d) {
            if (null !== a)if (b && a.forEach === b)a.forEach(c, d); else if (a.length === +a.length) {
                for (var e = 0, f = a.length; f > e; e++)if (c.call(d, a[e], e, a) === {})return
            } else for (var g in a)if (a.hasOwnProperty(g) && c.call(d, a[g], g, a) === {})return
        }, this.map = function (a, b, d) {
            var e = [];
            return null == a ? e : c && a.map === c ? a.map(b, d) : (this.each(a, function (a, c, f) {
                e[e.length] = b.call(d, a, c, f)
            }), e)
        }, "object" == typeof a ? (this.hasher = a.hasher, this.screen_resolution = a.screen_resolution, this.canvas = a.canvas, this.ie_activex = a.ie_activex) : "function" == typeof a && (this.hasher = a)
    };
    return a.prototype = {
        get: function () {
            var a = [];
            if (a.push(navigator.userAgent), a.push(navigator.language), a.push(screen.colorDepth), this.screen_resolution) {
                var b = this.getScreenResolution();
                "undefined" != typeof b && a.push(this.getScreenResolution().join("x"))
            }
            return a.push((new Date).getTimezoneOffset()), a.push(this.hasSessionStorage()), a.push(this.hasLocalStorage()), a.push(!!window.indexedDB), a.push(document.body ? typeof document.body.addBehavior : "undefined"), a.push(typeof window.openDatabase), a.push(navigator.cpuClass), a.push(navigator.platform), a.push(navigator.doNotTrack), a.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && a.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(a.join("###"), 31) : this.murmurhash3_32_gc(a.join("###"), 31)
        }, murmurhash3_32_gc: function (a, b) {
            var c, d, e, f, g, h, i, j;
            for (c = 3 & a.length, d = a.length - c, e = b, g = 3432918353, h = 461845907, j = 0; d > j;)i = 255 & a.charCodeAt(j) | (255 & a.charCodeAt(++j)) << 8 | (255 & a.charCodeAt(++j)) << 16 | (255 & a.charCodeAt(++j)) << 24, ++j, i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i, e = e << 13 | e >>> 19, f = 5 * (65535 & e) + ((5 * (e >>> 16) & 65535) << 16) & 4294967295, e = (65535 & f) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
            switch (i = 0, c) {
                case 3:
                    i ^= (255 & a.charCodeAt(j + 2)) << 16;
                case 2:
                    i ^= (255 & a.charCodeAt(j + 1)) << 8;
                case 1:
                    i ^= 255 & a.charCodeAt(j), i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i
            }
            return e ^= a.length, e ^= e >>> 16, e = 2246822507 * (65535 & e) + ((2246822507 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 13, e = 3266489909 * (65535 & e) + ((3266489909 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0
        }, hasLocalStorage: function () {
            try {
                return !!window.localStorage
            } catch (a) {
                return !0
            }
        }, hasSessionStorage: function () {
            try {
                return !!window.sessionStorage
            } catch (a) {
                return !0
            }
        }, isCanvasSupported: function () {
            var a = document.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }, isIE: function () {
            return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
        }, getPluginsString: function () {
            return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
        }, getRegularPluginsString: function () {
            return this.map(navigator.plugins, function (a) {
                var b = this.map(a, function (a) {
                    return [a.type, a.suffixes].join("~")
                }).join(",");
                return [a.name, a.description, b].join("::")
            }, this).join(";")
        }, getIEPluginsString: function () {
            if (window.ActiveXObject) {
                var a = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                return this.map(a, function (a) {
                    try {
                        return new ActiveXObject(a), a
                    } catch (b) {
                        return null
                    }
                }).join(";")
            }
            return ""
        }, getScreenResolution: function () {
            return [screen.height, screen.width]
        }, getCanvasFingerprint: function () {
            var a = document.createElement("canvas"), b = a.getContext("2d"), c = "http://valve.github.io";
            return b.textBaseline = "top", b.font = "14px 'Arial'", b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.fillText(c, 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.fillText(c, 4, 17), a.toDataURL()
        }
    }, a
});