"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
        function e(e, n) {
            var ddd = 0
            for (var t = 0; t < n.length; t++) {
                var a = n[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }  
        }
        return function (n, t, a) {
            return t && e(n.prototype, t), a && e(n, a), n
        }
    }(),
    Base = function () {
        function e() {
            _classCallCheck(this, e), this.ele = null
        }
        return _createClass(e, [{
            key: "init",
            value: function () {}
        }, {
            key: "move",
            value: function () {}
        }, {
            key: "boom",
            value: function () {}
        }]), e
    }();