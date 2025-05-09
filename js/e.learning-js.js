! function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function(e, n, t) {
    "use strict";
    t.r(n);
    var r = function(e, n, t) {
            e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, t)
        },
        i = function(e) {
            var n = document.createDocumentFragment(),
                t = document.createElement("i");
            return t.style.display = "inline-block", t.style.marginLeft = "10px", t.style.marginRight = "10px", "good" == e ? t.classList.add("good_icon") : "wrong" == e && t.classList.add("wrong_icon"), n.appendChild(t), n
        };

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var c = function(e) {
        var n = document.querySelector(e.questionsHtml),
            t = n.querySelectorAll("input"),
            c = document.querySelector(e.checkButton),
            l = document.querySelector(e.resetButton),
            a = document.querySelector(e.answerButton),
            u = o(e.answers);
        n.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), t.forEach(function(e) {
            e.insertAdjacentHTML("afterend", "<span></span>")
        }), r(c, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                var r = u[t],
                    o = n.value;
                n.nextElementSibling.innerHTML = "", o.length > 0 ? (r.indexOf(o.trim()) > -1 ? n.nextElementSibling.appendChild(i("good")) : n.nextElementSibling.appendChild(i("wrong")), a.style.display = "inline-block", l.style.display = "inline-block", c.style.display = "none") : e += 1
            }), e === t.length ? n.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : n.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(l, "click", function() {
            t.forEach(function(e) {
                var n = e;
                n.value = "", n.nextElementSibling.innerHTML = ""
            }), a.style.display = "none", l.style.display = "none", c.style.display = "inline-block"
        }), r(a, "click", function() {
            t.forEach(function(e, n) {
                var t = e,
                    r = t.value;
                if (t.value = "", t.nextElementSibling.innerHTML = "", r.length > 0) {
                    var i = u[n][0];
                    t.value = i
                }
            })
        })
    };

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var a = function(e) {
        var n = document.querySelector(e.questionsHtml),
            t = n.querySelectorAll("[data-question]"),
            o = document.querySelector(e.checkButton),
            c = document.querySelector(e.resetButton),
            a = document.querySelector(e.answerButton),
            u = l(e.answers),
            s = [];
        n.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), t.forEach(function(e, n) {
            var t = e.querySelectorAll("[data-option]"),
                i = "",
                o = "";
            s.push({
                question: n + 1,
                answer: 0
            }), t.forEach(function(e) {
                r(e, "click", function(e) {
                    var n = e.currentTarget;
                    i = n.parentNode.getAttribute("data-question"), o = n.getAttribute("data-option"), Array.prototype.map.call(t, function(e) {
                        e.classList.remove("selected")
                    }), n.classList.add("selected"), s[i - 1].answer = o
                })
            }), t[t.length - 1].insertAdjacentHTML("afterend", "<span></span>")
        }), r(o, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                0 !== s[t].answer ? (parseInt(s[t].answer, 10) === u[t] ? n.children[n.children.length - 1].appendChild(i("good")) : n.children[n.children.length - 1].appendChild(i("wrong")), a.style.display = "inline-block", c.style.display = "inline-block", o.style.display = "none") : e += 1
            }), e === t.length ? n.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : n.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(c, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                s[n].answer = 0, t.children[t.children.length - 1].innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) e.children[r].classList.remove("selected")
            }), a.style.display = "none", c.style.display = "none", o.style.display = "inline-block"
        }), r(a, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                t.children[t.children.length - 1].innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) e.children[r].classList.remove("selected");
                0 !== s[n].answer && e.children[u[n] - 1].classList.add("selected")
            })
        })
    };

    function u(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }
    var s = function(e) {
        var n, t, o = document.querySelector(e.questionsHtml),
            c = document.querySelector(e.checkButton),
            l = document.querySelector(e.resetButton),
            a = document.querySelector(e.answerButton),
            s = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach(function(n) {
                        u(e, n, t[n])
                    })
                }
                return e
            }({}, e.answers),
            d = [],
            f = null,
            y = [];

        function p() {
            n = document.querySelector(e.optionsHtml).querySelectorAll(".box"), t = document.querySelector(e.questionsHtml).querySelectorAll(".box"), n.forEach(function(e, t) {
                var r = e;
                d[t] = n[t].parentNode.innerHTML, r.setAttribute("draggable", !0), r.ondragstart = function(e) {
                    var n = e,
                        t = e.currentTarget;
                    n.dataTransfer.effectAllowed = "move", n.dataTransfer.setData("text/html", t.innerHTML), f = n.target
                }
            }), t.forEach(function(e, n) {
                var t = e;
                t.ondragenter = function(e) {
                    e.preventDefault()
                }, t.ondragover = function(e) {
                    e.preventDefault()
                }, t.ondrop = function(e) {
                    e.preventDefault(), "" === t.innerHTML && (t.appendChild(f), y[n] = parseInt(f.getAttribute("data-option"), 10), f = null)
                }
            })
        }
        o.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), p(), t.forEach(function(e) {
            y.push(0), e.insertAdjacentHTML("afterend", "<span></span>")
        }), r(c, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                0 !== y[t] ? (y[t] === s[t] ? n.nextSibling.appendChild(i("good")) : n.nextSibling.appendChild(i("wrong")), a.style.display = "inline-block", l.style.display = "inline-block", c.style.display = "none") : e += 1
            }), e === t.length ? o.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : o.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(l, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                y[n] = 0, t.innerHTML = "", t.nextSibling.innerHTML = ""
            }), n.forEach(function(e, n) {
                document.querySelectorAll(".box_answer_content")[n].innerHTML = d[n]
            }), p(), a.style.display = "none", l.style.display = "none", c.style.display = "inline-block"
        }), r(a, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                y[n] = 0, t.innerHTML = d[s[n] - 1], t.nextSibling.innerHTML = ""
            }), n.forEach(function(e, n) {
                document.querySelectorAll(".box_answer_content")[n].innerHTML = ""
            })
        })
    };

    function d(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var f = function(e) {
        var n = document.querySelector(e.questionsHtml),
            t = n.querySelectorAll("[data-question]"),
            o = document.querySelector(e.checkButton),
            c = document.querySelector(e.resetButton),
            l = document.querySelector(e.answerButton),
            a = d(e.answers),
            u = {};
        n.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), t.forEach(function(e, n) {
            var t = e.querySelectorAll("input");
            e.insertAdjacentHTML("afterend", "<span></span>"), u["question_".concat(n)] = 0, t.forEach(function(e) {
                r(e, "click", function(e) {
                    var t = e.currentTarget;
                    u["question_".concat(n)] = t.value
                })
            })
        }), r(o, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                0 !== parseInt(u["question_".concat(t)], 10) ? (parseInt(u["question_".concat(t)], 10) === a[t] ? n.nextSibling.appendChild(i("good")) : n.nextSibling.appendChild(i("wrong")), l.style.display = "inline-block", c.style.display = "inline-block", o.style.display = "none") : e += 1
            }), e === t.length ? n.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : n.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(c, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                u["question_".concat(n)] = 0, t.nextSibling.innerHTML = "";
                for (var r = 0; r < e.children.length; r += 1) t.children[r].querySelector("input").checked = !1
            }), l.style.display = "none", c.style.display = "none", o.style.display = "inline-block"
        }), r(l, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                t.nextSibling.innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) t.children[r].querySelector("input").checked = !1;
                0 !== parseInt(u["question_".concat(n)], 10) && (t.children[a[n] - 1].querySelector("input").checked = !0)
            })
        })
    };

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var p = function(e) {
        var n = document.querySelector(e.questionsHtml),
            t = n.querySelectorAll("[data-question]"),
            o = document.querySelector(e.checkButton),
            c = document.querySelector(e.resetButton),
            l = document.querySelector(e.answerButton),
            a = y(e.answers),
            u = {};
        n.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), t.forEach(function(e, n) {
            var t = e,
                i = t.querySelectorAll("input");
            t.insertAdjacentHTML("afterend", "<span></span>"), u["question_".concat(n)] = [], i.forEach(function(e, t) {
                var i;
                r(e, "click", function(e) {
                    e.currentTarget.checked ? u["question_".concat(n)].push(t + 1) : (i = u["question_".concat(n)].indexOf(t + 1)) > -1 && u["question_".concat(n)].splice(i, 1)
                })
            })
        }), r(o, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                var r = !1;
                if (u["question_".concat(t)].length) {
                    for (var s = 0; s < a[t].length; s += 1) {
                        if (-1 === u["question_".concat(t)].indexOf(a[t][s])) {
                            r = !1;
                            break
                        }
                        r = !0
                    }
                    r ? n.nextSibling.appendChild(i("good")) : n.nextSibling.appendChild(i("wrong")), l.style.display = "inline-block", c.style.display = "inline-block", o.style.display = "none"
                } else e += 1
            }), e === t.length ? n.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : n.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(c, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                u["question_".concat(n)] = [], t.nextSibling.innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) t.children[r].querySelector("input").checked = !1
            }), l.style.display = "none", c.style.display = "none", o.style.display = "inline-block"
        }), r(l, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                t.nextSibling.innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) t.children[r].querySelector("input").checked = !1;
                if (u["question_".concat(n)].length)
                    for (var i = 0; i < a[n].length; i += 1) t.children[a[n][i] - 1].querySelector("input").checked = !0
            })
        })
    };

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var h = function(e) {
        var n = document.querySelector(e.questionsHtml),
            t = n.querySelectorAll("[data-question]"),
            o = document.querySelector(e.checkButton),
            c = document.querySelector(e.resetButton),
            l = document.querySelector(e.answerButton),
            a = g(e.answers),
            u = {};
        n.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), t.forEach(function(e, n) {
            var t = e.querySelectorAll("input");
            e.insertAdjacentHTML("afterend", "<span></span>"), u["question_".concat(n)] = 0, t.forEach(function(e) {
                r(e, "click", function(e) {
                    var t = e.currentTarget;
                    u["question_".concat(n)] = t.value
                })
            })
        }), r(o, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                0 !== parseInt(u["question_".concat(t)], 10) ? (parseInt(u["question_".concat(t)], 10) === a[t] ? n.nextSibling.appendChild(i("good")) : n.nextSibling.appendChild(i("wrong")), l.style.display = "inline-block", c.style.display = "inline-block", o.style.display = "none") : e += 1
            }), e === t.length ? n.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : n.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(c, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                u["question_".concat(n)] = 0, t.nextSibling.innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) t.children[r].querySelector("input").checked = !1
            }), l.style.display = "none", c.style.display = "none", o.style.display = "inline-block"
        }), r(l, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                t.nextSibling.innerHTML = "";
                for (var r = 0; r < t.children.length; r += 1) t.children[r].querySelector("input").checked = !1;
                0 !== parseInt(u["question_".concat(n)], 10) && (t.children[a[n] - 1].querySelector("input").checked = !0)
            })
        })
    };

    function v(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var m = function(e) {
        var n, t, o = document.querySelector(e.questionsHtml),
            c = document.querySelector(e.checkButton),
            l = document.querySelector(e.resetButton),
            a = document.querySelector(e.answerButton),
            u = v(e.answers),
            s = [],
            d = null,
            f = [];

        function y() {
            n = document.querySelector(e.optionsHtml).querySelectorAll(".box_img"), t = document.querySelector(e.questionsHtml).querySelectorAll(".box_img"), n.forEach(function(e, t) {
                var r = e;
                s[t] = n[t].parentNode.innerHTML, r.setAttribute("draggable", !0), r.ondragstart = function(e) {
                    var n = e,
                        t = e.currentTarget;
                    n.dataTransfer.effectAllowed = "move", n.dataTransfer.setData("text/html", t.innerHTML), d = n.target.parentNode
                }
            }), t.forEach(function(e, n) {
                var t = e;
                t.ondragenter = function(e) {
                    e.preventDefault()
                }, t.ondragover = function(e) {
                    e.preventDefault()
                }, t.ondrop = function(e) {
                    e.preventDefault(), "" === t.innerHTML && (t.appendChild(d), f[n] = parseInt(d.getAttribute("data-option"), 10), d = null)
                }
            })
        }
        o.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), y(), t.forEach(function(e) {
            f.push(0), e.insertAdjacentHTML("afterend", "<span></span>")
        }), r(c, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                0 !== f[t] ? (f[t] === u[t] ? n.nextSibling.appendChild(i("good")) : n.nextSibling.appendChild(i("wrong")), a.style.display = "inline-block", l.style.display = "inline-block", c.style.display = "none") : e += 1
            }), e === t.length ? o.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : o.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(l, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                f[n] = 0, t.innerHTML = "", t.nextSibling.innerHTML = ""
            }), n.forEach(function(e, n) {
                document.querySelectorAll(".box_answer_content")[n].innerHTML = s[n]
            }), y(), a.style.display = "none", l.style.display = "none", c.style.display = "inline-block"
        }), r(a, "click", function() {
            t.forEach(function(e, n) {
                var t = e;
                f[n] = 0, t.innerHTML = s[u[n] - 1], t.nextSibling.innerHTML = ""
            }), n.forEach(function(e, n) {
                document.querySelectorAll(".box_answer_content")[n].innerHTML = ""
            })
        })
    };

    function b(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var S = function(e) {
        var n = document.querySelector(e.questionsHtml),
            t = n.querySelectorAll("select"),
            o = document.querySelector(e.checkButton),
            c = document.querySelector(e.resetButton),
            l = document.querySelector(e.answerButton),
            a = b(e.answers);
        n.insertAdjacentHTML("beforeend", '<span class="js-invalid-msg invalid_msg"></span>'), t.forEach(function(e) {
            e.insertAdjacentHTML("afterend", "<span></span>")
        }), r(o, "click", function() {
            var e = 0;
            t.forEach(function(n, t) {
                var r = n,
                    u = a[t],
                    s = r.value;
                r.nextElementSibling.innerHTML = "", s.length > 0 ? (u === parseInt(s, 10) ? r.nextElementSibling.appendChild(i("good")) : r.nextElementSibling.appendChild(i("wrong")), l.style.display = "inline-block", c.style.display = "inline-block", o.style.display = "none") : e += 1
            }), e === t.length ? n.querySelector(".js-invalid-msg").innerHTML = "Enter at least one response." : n.querySelector(".js-invalid-msg").innerHTML = ""
        }), r(c, "click", function() {
            t.forEach(function(e) {
                var n = e;
                n.selectedIndex = null, n.nextElementSibling.innerHTML = ""
            }), l.style.display = "none", c.style.display = "none", o.style.display = "inline-block"
        }), r(l, "click", function() {
            t.forEach(function(e, n) {
                var t = e,
                    r = t.value;
                t.value = "", t.nextElementSibling.innerHTML = "", r.length > 0 && (t.value = a[n])
            })
        })
    };
    t(1);
    t.d(n, "createMultipleChoice", function() {
        return c
    }), t.d(n, "createSelect", function() {
        return a
    }), t.d(n, "createDragAndDrop", function() {
        return s
    }), t.d(n, "createMultipleUniqueAnswers", function() {
        return f
    }), t.d(n, "createMultipleAnswers", function() {
        return p
    }), t.d(n, "createFalseAndTrue", function() {
        return h
    }), t.d(n, "createDragAndDropImages", function() {
        return m
    }), t.d(n, "createAccordionSelect", function() {
        return S
    })
}, function(e, n) {}]);