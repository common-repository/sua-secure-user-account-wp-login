!function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.returnExports = b()
}(this, function () {
    function a(a) {
        var b = +a;
        return b !== b ? b = 0 : 0 !== b && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))), b
    }

    function b(a) {
        var b = typeof a;
        return null === a || "undefined" === b || "boolean" === b || "number" === b || "string" === b
    }

    function c(a) {
        var c, d, e;
        if (b(a))return a;
        if (d = a.valueOf, p(d) && (c = d.call(a), b(c)))return c;
        if (e = a.toString, p(e) && (c = e.call(a), b(c)))return c;
        throw new TypeError
    }

    var d, e = Array.prototype, f = Object.prototype, g = Function.prototype, h = String.prototype, i = Number.prototype, j = e.slice, k = e.splice, l = e.push, m = e.unshift, n = g.call, o = f.toString, p = function (a) {
        return "[object Function]" === o.call(a)
    }, q = function (a) {
        return "[object RegExp]" === o.call(a)
    }, r = function (a) {
        return "[object Array]" === o.call(a)
    }, s = function (a) {
        return "[object String]" === o.call(a)
    }, t = function (a) {
        var b = o.call(a), c = "[object Arguments]" === b;
        return c || (c = !r(a) && null !== a && "object" == typeof a && "number" == typeof a.length && a.length >= 0 && p(a.callee)), c
    }, u = Object.defineProperty && function () {
            try {
                return Object.defineProperty({}, "x", {}), !0
            } catch (a) {
                return !1
            }
        }();
    d = u ? function (a, b, c, d) {
        !d && b in a || Object.defineProperty(a, b, {configurable: !0, enumerable: !1, writable: !0, value: c})
    } : function (a, b, c, d) {
        !d && b in a || (a[b] = c)
    };
    var v = function (a, b, c) {
        for (var e in b)f.hasOwnProperty.call(b, e) && d(a, e, b[e], c)
    }, w = {
        ToObject: function (a) {
            if (null == a)throw new TypeError("can't convert " + a + " to object");
            return Object(a)
        }, ToUint32: function (a) {
            return a >>> 0
        }
    }, x = function () {
    };
    v(g, {
        bind: function (a) {
            var b = this;
            if (!p(b))throw new TypeError("Function.prototype.bind called on incompatible " + b);
            for (var c, d = j.call(arguments, 1), e = function () {
                if (this instanceof c) {
                    var e = b.apply(this, d.concat(j.call(arguments)));
                    return Object(e) === e ? e : this
                }
                return b.apply(a, d.concat(j.call(arguments)))
            }, f = Math.max(0, b.length - d.length), g = [], h = 0; f > h; h++)g.push("$" + h);
            return c = Function("binder", "return function (" + g.join(",") + "){ return binder.apply(this, arguments); }")(e), b.prototype && (x.prototype = b.prototype, c.prototype = new x, x.prototype = null), c
        }
    });
    var y = n.bind(f.hasOwnProperty), z = function () {
        var a = [1, 2], b = a.splice();
        return 2 === a.length && r(b) && 0 === b.length
    }();
    v(e, {
        splice: function () {
            return 0 === arguments.length ? [] : k.apply(this, arguments)
        }
    }, z);
    var A = function () {
        var a = {};
        return e.splice.call(a, 0, 0, 1), 1 === a.length
    }();
    v(e, {
        splice: function (b, c) {
            if (0 === arguments.length)return [];
            var d = arguments;
            return this.length = Math.max(a(this.length), 0), arguments.length > 0 && "number" != typeof c && (d = j.call(arguments), d.length < 2 ? d.push(this.length - b) : d[1] = a(c)), k.apply(this, d)
        }
    }, !A);
    var B = 1 !== [].unshift(0);
    v(e, {
        unshift: function () {
            return m.apply(this, arguments), this.length
        }
    }, B), v(Array, {isArray: r});
    var C = Object("a"), D = "a" !== C[0] || !(0 in C), E = function (a) {
        var b = !0, c = !0;
        return a && (a.call("foo", function (a, c, d) {
            "object" != typeof d && (b = !1)
        }), a.call([1], function () {
            "use strict";
            c = "string" == typeof this
        }, "x")), !!a && b && c
    };
    v(e, {
        forEach: function (a) {
            var b = w.ToObject(this), c = D && s(this) ? this.split("") : b, d = arguments[1], e = -1, f = c.length >>> 0;
            if (!p(a))throw new TypeError;
            for (; ++e < f;)e in c && a.call(d, c[e], e, b)
        }
    }, !E(e.forEach)), v(e, {
        map: function (a) {
            var b = w.ToObject(this), c = D && s(this) ? this.split("") : b, d = c.length >>> 0, e = Array(d), f = arguments[1];
            if (!p(a))throw new TypeError(a + " is not a function");
            for (var g = 0; d > g; g++)g in c && (e[g] = a.call(f, c[g], g, b));
            return e
        }
    }, !E(e.map)), v(e, {
        filter: function (a) {
            var b, c = w.ToObject(this), d = D && s(this) ? this.split("") : c, e = d.length >>> 0, f = [], g = arguments[1];
            if (!p(a))throw new TypeError(a + " is not a function");
            for (var h = 0; e > h; h++)h in d && (b = d[h], a.call(g, b, h, c) && f.push(b));
            return f
        }
    }, !E(e.filter)), v(e, {
        every: function (a) {
            var b = w.ToObject(this), c = D && s(this) ? this.split("") : b, d = c.length >>> 0, e = arguments[1];
            if (!p(a))throw new TypeError(a + " is not a function");
            for (var f = 0; d > f; f++)if (f in c && !a.call(e, c[f], f, b))return !1;
            return !0
        }
    }, !E(e.every)), v(e, {
        some: function (a) {
            var b = w.ToObject(this), c = D && s(this) ? this.split("") : b, d = c.length >>> 0, e = arguments[1];
            if (!p(a))throw new TypeError(a + " is not a function");
            for (var f = 0; d > f; f++)if (f in c && a.call(e, c[f], f, b))return !0;
            return !1
        }
    }, !E(e.some));
    var F = !1;
    e.reduce && (F = "object" == typeof e.reduce.call("es5", function (a, b, c, d) {
        return d
    })), v(e, {
        reduce: function (a) {
            var b = w.ToObject(this), c = D && s(this) ? this.split("") : b, d = c.length >>> 0;
            if (!p(a))throw new TypeError(a + " is not a function");
            if (!d && 1 === arguments.length)throw new TypeError("reduce of empty array with no initial value");
            var e, f = 0;
            if (arguments.length >= 2)e = arguments[1]; else for (; ;) {
                if (f in c) {
                    e = c[f++];
                    break
                }
                if (++f >= d)throw new TypeError("reduce of empty array with no initial value")
            }
            for (; d > f; f++)f in c && (e = a.call(void 0, e, c[f], f, b));
            return e
        }
    }, !F);
    var G = !1;
    e.reduceRight && (G = "object" == typeof e.reduceRight.call("es5", function (a, b, c, d) {
        return d
    })), v(e, {
        reduceRight: function (a) {
            var b = w.ToObject(this), c = D && s(this) ? this.split("") : b, d = c.length >>> 0;
            if (!p(a))throw new TypeError(a + " is not a function");
            if (!d && 1 === arguments.length)throw new TypeError("reduceRight of empty array with no initial value");
            var e, f = d - 1;
            if (arguments.length >= 2)e = arguments[1]; else for (; ;) {
                if (f in c) {
                    e = c[f--];
                    break
                }
                if (--f < 0)throw new TypeError("reduceRight of empty array with no initial value")
            }
            if (0 > f)return e;
            do f in c && (e = a.call(void 0, e, c[f], f, b)); while (f--);
            return e
        }
    }, !G);
    var H = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
    v(e, {
        indexOf: function (b) {
            var c = D && s(this) ? this.split("") : w.ToObject(this), d = c.length >>> 0;
            if (!d)return -1;
            var e = 0;
            for (arguments.length > 1 && (e = a(arguments[1])), e = e >= 0 ? e : Math.max(0, d + e); d > e; e++)if (e in c && c[e] === b)return e;
            return -1
        }
    }, H);
    var I = Array.prototype.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
    v(e, {
        lastIndexOf: function (b) {
            var c = D && s(this) ? this.split("") : w.ToObject(this), d = c.length >>> 0;
            if (!d)return -1;
            var e = d - 1;
            for (arguments.length > 1 && (e = Math.min(e, a(arguments[1]))), e = e >= 0 ? e : d - Math.abs(e); e >= 0; e--)if (e in c && b === c[e])return e;
            return -1
        }
    }, I);
    var J = !{toString: null}.propertyIsEnumerable("toString"), K = function () {
    }.propertyIsEnumerable("prototype"), L = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], M = L.length;
    v(Object, {
        keys: function (a) {
            var b = p(a), c = t(a), d = null !== a && "object" == typeof a, e = d && s(a);
            if (!d && !b && !c)throw new TypeError("Object.keys called on a non-object");
            var f = [], g = K && b;
            if (e || c)for (var h = 0; h < a.length; ++h)f.push(String(h)); else for (var i in a)g && "prototype" === i || !y(a, i) || f.push(String(i));
            if (J)for (var j = a.constructor, k = j && j.prototype === a, l = 0; M > l; l++) {
                var m = L[l];
                k && "constructor" === m || !y(a, m) || f.push(m)
            }
            return f
        }
    });
    var N = Object.keys && function () {
            return 2 === Object.keys(arguments).length
        }(1, 2), O = Object.keys;
    v(Object, {
        keys: function (a) {
            return O(t(a) ? e.slice.call(a) : a)
        }
    }, !N);
    var P = -621987552e5, Q = "-000001", R = Date.prototype.toISOString && -1 === new Date(P).toISOString().indexOf(Q);
    v(Date.prototype, {
        toISOString: function () {
            var a, b, c, d, e;
            if (!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");
            for (d = this.getUTCFullYear(), e = this.getUTCMonth(), d += Math.floor(e / 12), e = (e % 12 + 12) % 12, a = [e + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], d = (0 > d ? "-" : d > 9999 ? "+" : "") + ("00000" + Math.abs(d)).slice(d >= 0 && 9999 >= d ? -4 : -6), b = a.length; b--;)c = a[b], 10 > c && (a[b] = "0" + c);
            return d + "-" + a.slice(0, 2).join("-") + "T" + a.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        }
    }, R);
    var S = !1;
    try {
        S = Date.prototype.toJSON && null === new Date(0 / 0).toJSON() && -1 !== new Date(P).toJSON().indexOf(Q) && Date.prototype.toJSON.call({
            toISOString: function () {
                return !0
            }
        })
    } catch (T) {
    }
    S || (Date.prototype.toJSON = function () {
        var a, b = Object(this), d = c(b);
        if ("number" == typeof d && !isFinite(d))return null;
        if (a = b.toISOString, "function" != typeof a)throw new TypeError("toISOString property is not callable");
        return a.call(b)
    });
    var U = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"), V = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")), W = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    (!Date.parse || W || V || !U) && (Date = function (a) {
        function b(c, d, e, f, g, h, i) {
            var j = arguments.length;
            if (this instanceof a) {
                var k = 1 === j && String(c) === c ? new a(b.parse(c)) : j >= 7 ? new a(c, d, e, f, g, h, i) : j >= 6 ? new a(c, d, e, f, g, h) : j >= 5 ? new a(c, d, e, f, g) : j >= 4 ? new a(c, d, e, f) : j >= 3 ? new a(c, d, e) : j >= 2 ? new a(c, d) : j >= 1 ? new a(c) : new a;
                return k.constructor = b, k
            }
            return a.apply(this, arguments)
        }

        function c(a, b) {
            var c = b > 1 ? 1 : 0;
            return f[b] + Math.floor((a - 1969 + c) / 4) - Math.floor((a - 1901 + c) / 100) + Math.floor((a - 1601 + c) / 400) + 365 * (a - 1970)
        }

        function d(b) {
            return Number(new a(1970, 0, 1, 0, 0, 0, b))
        }

        var e = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), f = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
        for (var g in a)b[g] = a[g];
        return b.now = a.now, b.UTC = a.UTC, b.prototype = a.prototype, b.prototype.constructor = b, b.parse = function (b) {
            var f = e.exec(b);
            if (f) {
                var g, h = Number(f[1]), i = Number(f[2] || 1) - 1, j = Number(f[3] || 1) - 1, k = Number(f[4] || 0), l = Number(f[5] || 0), m = Number(f[6] || 0), n = Math.floor(1e3 * Number(f[7] || 0)), o = Boolean(f[4] && !f[8]), p = "-" === f[9] ? 1 : -1, q = Number(f[10] || 0), r = Number(f[11] || 0);
                return (l > 0 || m > 0 || n > 0 ? 24 : 25) > k && 60 > l && 60 > m && 1e3 > n && i > -1 && 12 > i && 24 > q && 60 > r && j > -1 && j < c(h, i + 1) - c(h, i) && (g = 60 * (24 * (c(h, i) + j) + k + q * p), g = 1e3 * (60 * (g + l + r * p) + m) + n, o && (g = d(g)), g >= -864e13 && 864e13 >= g) ? g : 0 / 0
            }
            return a.parse.apply(this, arguments)
        }, b
    }(Date)), Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var X = i.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)), Y = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function (a, b) {
            for (var c = -1; ++c < Y.size;)b += a * Y.data[c], Y.data[c] = b % Y.base, b = Math.floor(b / Y.base)
        },
        divide: function (a) {
            for (var b = Y.size, c = 0; --b >= 0;)c += Y.data[b], Y.data[b] = Math.floor(c / a), c = c % a * Y.base
        },
        numToString: function () {
            for (var a = Y.size, b = ""; --a >= 0;)if ("" !== b || 0 === a || 0 !== Y.data[a]) {
                var c = String(Y.data[a]);
                "" === b ? b = c : b += "0000000".slice(0, 7 - c.length) + c
            }
            return b
        },
        pow: function ib(a, b, c) {
            return 0 === b ? c : b % 2 === 1 ? ib(a, b - 1, c * a) : ib(a * a, b / 2, c)
        },
        log: function (a) {
            for (var b = 0; a >= 4096;)b += 12, a /= 4096;
            for (; a >= 2;)b += 1, a /= 2;
            return b
        }
    };
    v(i, {
        toFixed: function (a) {
            var b, c, d, e, f, g, h, i;
            if (b = Number(a), b = b !== b ? 0 : Math.floor(b), 0 > b || b > 20)throw new RangeError("Number.toFixed called with invalid number of decimals");
            if (c = Number(this), c !== c)return "NaN";
            if (-1e21 >= c || c >= 1e21)return String(c);
            if (d = "", 0 > c && (d = "-", c = -c), e = "0", c > 1e-21)if (f = Y.log(c * Y.pow(2, 69, 1)) - 69, g = 0 > f ? c * Y.pow(2, -f, 1) : c / Y.pow(2, f, 1), g *= 4503599627370496, f = 52 - f, f > 0) {
                for (Y.multiply(0, g), h = b; h >= 7;)Y.multiply(1e7, 0), h -= 7;
                for (Y.multiply(Y.pow(10, h, 1), 0), h = f - 1; h >= 23;)Y.divide(1 << 23), h -= 23;
                Y.divide(1 << h), Y.multiply(1, 1), Y.divide(2), e = Y.numToString()
            } else Y.multiply(0, g), Y.multiply(1 << -f, 0), e = Y.numToString() + "0.00000000000000000000".slice(2, 2 + b);
            return b > 0 ? (i = e.length, e = b >= i ? d + "0.0000000000000000000".slice(0, b - i + 2) + e : d + e.slice(0, i - b) + "." + e.slice(i - b)) : e = d + e, e
        }
    }, X);
    var Z = h.split;
    2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function () {
        var a = "undefined" == typeof/()??/.exec("")[1];
        h.split = function (b, c) {
            var d = this;
            if ("undefined" == typeof b && 0 === c)return [];
            if ("[object RegExp]" !== o.call(b))return Z.call(this, b, c);
            var e, f, g, h, i = [], j = (b.ignoreCase ? "i" : "") + (b.multiline ? "m" : "") + (b.extended ? "x" : "") + (b.sticky ? "y" : ""), k = 0;
            for (b = new RegExp(b.source, j + "g"), d += "", a || (e = new RegExp("^" + b.source + "$(?!\\s)", j)), c = "undefined" == typeof c ? -1 >>> 0 : w.ToUint32(c); (f = b.exec(d)) && (g = f.index + f[0].length, !(g > k && (i.push(d.slice(k, f.index)), !a && f.length > 1 && f[0].replace(e, function () {
                for (var a = 1; a < arguments.length - 2; a++)"undefined" == typeof arguments[a] && (f[a] = void 0)
            }), f.length > 1 && f.index < d.length && l.apply(i, f.slice(1)), h = f[0].length, k = g, i.length >= c)));)b.lastIndex === f.index && b.lastIndex++;
            return k === d.length ? (h || !b.test("")) && i.push("") : i.push(d.slice(k)), i.length > c ? i.slice(0, c) : i
        }
    }() : "0".split(void 0, 0).length && (h.split = function (a, b) {
        return "undefined" == typeof a && 0 === b ? [] : Z.call(this, a, b)
    });
    var $ = h.replace, _ = function () {
        var a = [];
        return "x".replace(/x(.)?/g, function (b, c) {
            a.push(c)
        }), 1 === a.length && "undefined" == typeof a[0]
    }();
    _ || (h.replace = function (a, b) {
        var c = p(b), d = q(a) && /\)[*?]/.test(a.source);
        if (c && d) {
            var e = function (c) {
                var d = arguments.length, e = a.lastIndex;
                a.lastIndex = 0;
                var f = a.exec(c) || [];
                return a.lastIndex = e, f.push(arguments[d - 2], arguments[d - 1]), b.apply(this, f)
            };
            return $.call(this, a, e)
        }
        return $.call(this, a, b)
    });
    var ab = h.substr, bb = "".substr && "b" !== "0b".substr(-1);
    v(h, {
        substr: function (a, b) {
            return ab.call(this, 0 > a && (a = this.length + a) < 0 ? 0 : a, b)
        }
    }, bb);
    var cb = "	\n\f\r   ᠎             　\u2028\u2029﻿", db = "​", eb = "[" + cb + "]", fb = new RegExp("^" + eb + eb + "*"), gb = new RegExp(eb + eb + "*$"), hb = h.trim && (cb.trim() || !db.trim());
    v(h, {
        trim: function () {
            if ("undefined" == typeof this || null === this)throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(fb, "").replace(gb, "")
        }
    }, hb), (8 !== parseInt(cb + "08") || 22 !== parseInt(cb + "0x16")) && (parseInt = function (a) {
        var b = /^0[xX]/;
        return function (c, d) {
            return c = String(c).trim(), Number(d) || (d = b.test(c) ? 16 : 10), a(c, d)
        }
    }(parseInt))
}), function () {
    function a(b, d) {
        function f(a) {
            if (f[a] !== q)return f[a];
            var b;
            if ("bug-string-char-index" == a)b = "a" != "a"[0]; else if ("json" == a)b = f("json-stringify") && f("json-parse"); else {
                var c, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if ("json-stringify" == a) {
                    var i = d.stringify, k = "function" == typeof i && t;
                    if (k) {
                        (c = function () {
                            return 1
                        }).toJSON = c;
                        try {
                            k = "0" === i(0) && "0" === i(new g) && '""' == i(new h) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({a: [c, !0, !1, null, "\x00\b\n\f\r	"]}) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
                        } catch (l) {
                            k = !1
                        }
                    }
                    b = k
                }
                if ("json-parse" == a) {
                    var m = d.parse;
                    if ("function" == typeof m)try {
                        if (0 === m("0") && !m(!1)) {
                            c = m(e);
                            var n = 5 == c.a.length && 1 === c.a[0];
                            if (n) {
                                try {
                                    n = !m('"	"')
                                } catch (l) {
                                }
                                if (n)try {
                                    n = 1 !== m("01")
                                } catch (l) {
                                }
                                if (n)try {
                                    n = 1 !== m("1.")
                                } catch (l) {
                                }
                            }
                        }
                    } catch (l) {
                        n = !1
                    }
                    b = n
                }
            }
            return f[a] = !!b
        }

        b || (b = e.Object()), d || (d = e.Object());
        var g = b.Number || e.Number, h = b.String || e.String, i = b.Object || e.Object, j = b.Date || e.Date, k = b.SyntaxError || e.SyntaxError, l = b.TypeError || e.TypeError, m = b.Math || e.Math, n = b.JSON || e.JSON;
        "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
        var o, p, q, r = i.prototype, s = r.toString, t = new j(-0xc782b5b800cec);
        try {
            t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
        } catch (u) {
        }
        if (!f("json")) {
            var v = "[object Function]", w = "[object Date]", x = "[object Number]", y = "[object String]", z = "[object Array]", A = "[object Boolean]", B = f("bug-string-char-index");
            if (!t)var C = m.floor, D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], E = function (a, b) {
                return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400)
            };
            if ((o = r.hasOwnProperty) || (o = function (a) {
                    var b, c = {};
                    return (c.__proto__ = null, c.__proto__ = {toString: 1}, c).toString != s ? o = function (a) {
                        var b = this.__proto__, c = a in(this.__proto__ = null, this);
                        return this.__proto__ = b, c
                    } : (b = c.constructor, o = function (a) {
                        var c = (this.constructor || b).prototype;
                        return a in this && !(a in c && this[a] === c[a])
                    }), c = null, o.call(this, a)
                }), p = function (a, b) {
                    var d, e, f, g = 0;
                    (d = function () {
                        this.valueOf = 0
                    }).prototype.valueOf = 0, e = new d;
                    for (f in e)o.call(e, f) && g++;
                    return d = e = null, g ? p = 2 == g ? function (a, b) {
                        var c, d = {}, e = s.call(a) == v;
                        for (c in a)e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
                    } : function (a, b) {
                        var c, d, e = s.call(a) == v;
                        for (c in a)e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
                        (d || o.call(a, c = "constructor")) && b(c)
                    } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function (a, b) {
                        var d, f, g = s.call(a) == v, h = !g && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                        for (d in a)g && "prototype" == d || !h.call(a, d) || b(d);
                        for (f = e.length; d = e[--f]; h.call(a, d) && b(d));
                    }), p(a, b)
                }, !f("json-stringify")) {
                var F = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }, G = "000000", H = function (a, b) {
                    return (G + (b || 0)).slice(-a)
                }, I = "\\u00", J = function (a) {
                    for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
                        var g = a.charCodeAt(c);
                        switch (g) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                b += F[g];
                                break;
                            default:
                                if (32 > g) {
                                    b += I + H(2, g.toString(16));
                                    break
                                }
                                b += e ? f[c] : a.charAt(c)
                        }
                    }
                    return b + '"'
                }, K = function (a, b, c, d, e, f, g) {
                    var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
                    try {
                        h = b[a]
                    } catch (M) {
                    }
                    if ("object" == typeof h && h)if (i = s.call(h), i != w || o.call(h, "toJSON"))"function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a)); else if (h > -1 / 0 && 1 / 0 > h) {
                        if (E) {
                            for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++);
                            for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                            m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3
                        } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                        h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z"
                    } else h = null;
                    if (c && (h = c.call(b, a, h)), null === h)return "null";
                    if (i = s.call(h), i == A)return "" + h;
                    if (i == x)return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
                    if (i == y)return J("" + h);
                    if ("object" == typeof h) {
                        for (G = g.length; G--;)if (g[G] === h)throw l();
                        if (g.push(h), B = [], I = f, f += e, i == z) {
                            for (F = 0, G = h.length; G > F; F++)D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
                            L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]"
                        } else p(d || h, function (a) {
                            var b = K(a, h, c, d, e, f, g);
                            b !== q && B.push(J(a) + ":" + (e ? " " : "") + b)
                        }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
                        return g.pop(), L
                    }
                };
                d.stringify = function (a, b, d) {
                    var e, f, g, h;
                    if (c[typeof b] && b)if ((h = s.call(b)) == v)f = b; else if (h == z) {
                        g = {};
                        for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1));
                    }
                    if (d)if ((h = s.call(d)) == x) {
                        if ((d -= d % 1) > 0)for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                    } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
                    return K("", (i = {}, i[""] = a, i), f, g, e, "", [])
                }
            }
            if (!f("json-parse")) {
                var L, M, N = h.fromCharCode, O = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "	",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, P = function () {
                    throw L = M = null, k()
                }, Q = function () {
                    for (var a, b, c, d, e, f = M, g = f.length; g > L;)switch (e = f.charCodeAt(L)) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            L++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            return a = B ? f.charAt(L) : f[L], L++, a;
                        case 34:
                            for (a = "@", L++; g > L;)if (e = f.charCodeAt(L), 32 > e)P(); else if (92 == e)switch (e = f.charCodeAt(++L)) {
                                case 92:
                                case 34:
                                case 47:
                                case 98:
                                case 116:
                                case 110:
                                case 102:
                                case 114:
                                    a += O[e], L++;
                                    break;
                                case 117:
                                    for (b = ++L, c = L + 4; c > L; L++)e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                                    a += N("0x" + f.slice(b, L));
                                    break;
                                default:
                                    P()
                            } else {
                                if (34 == e)break;
                                for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;)e = f.charCodeAt(++L);
                                a += f.slice(b, L)
                            }
                            if (34 == f.charCodeAt(L))return L++, a;
                            P();
                        default:
                            if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                                for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++);
                                if (46 == f.charCodeAt(L)) {
                                    for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                    c == L && P(), L = c
                                }
                                if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                                    for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                                    c == L && P(), L = c
                                }
                                return +f.slice(b, L)
                            }
                            if (d && P(), "true" == f.slice(L, L + 4))return L += 4, !0;
                            if ("false" == f.slice(L, L + 5))return L += 5, !1;
                            if ("null" == f.slice(L, L + 4))return L += 4, null;
                            P()
                    }
                    return "$"
                }, R = function (a) {
                    var b, c;
                    if ("$" == a && P(), "string" == typeof a) {
                        if ("@" == (B ? a.charAt(0) : a[0]))return a.slice(1);
                        if ("[" == a) {
                            for (b = []; a = Q(), "]" != a; c || (c = !0))c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
                            return b
                        }
                        if ("{" == a) {
                            for (b = {}; a = Q(), "}" != a; c || (c = !0))c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
                            return b
                        }
                        P()
                    }
                    return a
                }, S = function (a, b, c) {
                    var d = T(a, b, c);
                    d === q ? delete a[b] : a[b] = d
                }, T = function (a, b, c) {
                    var d, e = a[b];
                    if ("object" == typeof e && e)if (s.call(e) == z)for (d = e.length; d--;)S(e, d, c); else p(e, function (a) {
                        S(e, a, c)
                    });
                    return c.call(a, b, e)
                };
                d.parse = function (a, b) {
                    var c, d;
                    return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c
                }
            }
        }
        return d.runInContext = a, d
    }

    var b = "function" == typeof define && define.amd, c = {
        "function": !0,
        object: !0
    }, d = c[typeof exports] && exports && !exports.nodeType && exports, e = c[typeof window] && window || this, f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b)a(e, d); else {
        var g = e.JSON, h = e.JSON3, i = !1, j = a(e, e.JSON3 = {
            noConflict: function () {
                return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j
            }
        });
        e.JSON = {parse: j.parse, stringify: j.stringify}
    }
    b && define(function () {
        return j
    })
}.call(this);