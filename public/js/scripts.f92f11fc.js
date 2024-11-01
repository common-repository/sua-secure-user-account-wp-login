"use strict";
angular.module("suaApp", ["angular-growl", "ngProgress", "ngAnimate", "ngMessages", "ngResource", "ngRoute", "ngSanitize", "ngTouch"]).run(["$rootScope", "SUATEXTS", "SUAINTERNATIONALIZATION", function (a, b, c) {
    a.SUATEXTS = b, a.SUAINTERNATIONALIZATION = c, a.csvExport = function (a, b) {
        var c = a.join("\r\n"),
            d = document.createElement("a");
        if (void 0 !== d.download) {
            var e = new Blob([c], {
                    type: "text/csv;charset=utf-8;"
                }),
                f = URL.createObjectURL(e);
            d.setAttribute("href", f), d.setAttribute("download", b + ".csv"), d.style = "visibility:hidden"
        }
        navigator.msSaveBlob && d.addEventListener("click", function () {
            var a = new Blob(c, {
                type: "text/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(a, b + ".csv")
        }, !1), document.body.appendChild(d), d.click(), document.body.removeChild(d)
    }
}]).config(["$routeProvider", "$httpProvider", "growlProvider", "SUACONFIG", function (a, b, c, d) {
    c.globalDisableIcons(!0), c.globalTimeToLive(1e4), c.globalDisableCountDown(!0), c.onlyUniqueMessages(!1), b.defaults.headers.post = {}, a.when("/", {
        templateUrl: d.url + "/views/main.html",
        controller: "MainCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editUserInfo", {
        templateUrl: d.url + "/views/edituserinfo.html",
        controller: "EdituserinfoCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editPassword", {
        templateUrl: d.url + "/views/editpassword.html",
        controller: "EditpasswordCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editSecurityQuestions", {
        templateUrl: d.url + "/views/editsecurityquestions.html",
        controller: "EditSecurityquestionsCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/signIn", {
        templateUrl: d.url + "/views/signin.html",
        controller: "SigninCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/signUp", {
        templateUrl: d.url + "/views/signup.html",
        controller: "SignupCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editGridMultifactorAuthentication", {
        templateUrl: d.url + "/views/editgridmultifactorauthentication.html",
        controller: "EditgridmultifactorauthenticationCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editRecoveryEmail", {
        templateUrl: d.url + "/views/editrecoveryemail.html",
        controller: "EditrecoveryemailCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editPinCode", {
        templateUrl: d.url + "/views/editpincode.html",
        controller: "EditpincodeCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/deleteAccount", {
        templateUrl: d.url + "/views/deleteaccount.html",
        controller: "DeleteaccountCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/gridMultifactorAuthentication/:token/:keys", {
        templateUrl: d.url + "/views/gridmultifactorauthentication.html",
        controller: "GridmultifactorauthenticationCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/verifyToken/:action/:token", {
        templateUrl: d.url + "/views/verifytoken.html",
        controller: "VerifyTokenCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/recovery/:action?", {
        templateUrl: d.url + "/views/recovery.html",
        controller: "RecoveryCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/recoveryNewPassword/:token", {
        templateUrl: d.url + "/views/recoverynewpassword.html",
        controller: "RecoverynewpasswordCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/ipVerification/:token", {
        templateUrl: d.url + "/views/ipverification.html",
        controller: "IpverificationCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/recoverySecurityQuestion/:token/:question", {
        templateUrl: d.url + "/views/recoverysecurityquestion.html",
        controller: "RecoverysecurityquestionCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/recoveryEmail/:token/:action/:maskedEmail", {
        templateUrl: d.url + "/views/recoveryemail.html",
        controller: "RecoveryemailCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/accountHistory", {
        templateUrl: d.url + "/views/accounthistory.html",
        controller: "AccounthistoryCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/editIpVerification", {
        templateUrl: d.url + "/views/editipverification.html",
        controller: "EditipverificationCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).when("/emailNotifications", {
        templateUrl: d.url + "/views/emailnotifications.html",
        controller: "EmailnotificationsCtrl",
        resolve: {
            routeResolve: resolver()
        }
    }).otherwise({
        redirectTo: "/signIn"
    })
}]);
var resolver = function () {
    return ["$location", "$q", "routeResolve", "$rootScope", function (a, b, c, d) {
        var e = b.defer(),
            f = c.status();
        return f.then(function (b) {
            if (b) {
                if (d.resolve = b.resolve, b.routeDetails && (d.title = b.routeDetails.title, d.description = b.routeDetails.description), (d.title || d.description) && b.routeDetails) {
                    var c = parseInt(b.routeDetails.columns);
                    d.columns = 6 === c || 12 === c ? "col-sm-" + c : "col-sm-12"
                } else d.columns = "col-sm-12";
                d.nonce = b.nonce, d.enableRecaptcha = b.enableRecaptcha, b.route ? a.path(b.route) : e.resolve()
            } else a.path("/signIn")
        }, function () {
            a.path("/signIn")
        }), e.promise
    }]
};
angular.module("suaApp").controller("MainCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.home = {
        username: g.resolve.home.username,
        firstName: g.resolve.home.firstName,
        lastName: g.resolve.home.lastName,
        email: g.resolve.home.email,
        pinCodeEnabled: g.resolve.home.pinCodeEnabled,
        recoveryEmail: g.resolve.home.recoveryEmail,
        multifactorAuthentication: g.resolve.home.multifactorAuthentication,
        ipVerification: g.resolve.home.ipVerification,
        multifactorAuthenticationEnabled: g.resolve.home.multifactorAuthenticationEnabled,
        ipVerificationEnabled: g.resolve.home.ipVerificationEnabled,
        accountHistoryEnabled: g.resolve.home.accountHistoryEnabled,
        deleteAccountEnabled: g.resolve.home.deleteAccountEnabled,
        editSecurityQuestionsEnabled: g.resolve.home.editSecurityQuestionsEnabled,
        editRecoveryEmailEnabled: g.resolve.home.editRecoveryEmailEnabled,
        emailNotificationsEnabled: g.resolve.home.emailNotificationsEnabled
    }, b.logOut = function () {
        f.start();
        var b = new c.logOut;
        b.save({
            nonce: g.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }
}]), angular.module("suaApp").directive("uppercaseCharacter", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (a, b, c, d) {
            d.$validators.uppercasecharacter = function (a) {
                return /^(?=.*[A-Z]).*$/.test(a)
            }
        }
    }
}), angular.module("suaApp").directive("lowercaseCharacter", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (a, b, c, d) {
            d.$validators.lowercasecharacter = function (a) {
                return /^(?=.*[a-z]).*$/.test(a)
            }
        }
    }
}), angular.module("suaApp").directive("digit", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (a, b, c, d) {
            d.$validators.digit = function (a) {
                return /^(?=.*\d).*$/.test(a)
            }
        }
    }
}), angular.module("suaApp").directive("specialCharacter", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (a, b, c, d) {
            d.$validators.specialcharacter = function (a) {
                return /^(?=.*[ !"#$%&'()\\*\/+,-.:;<=>?@\[\]^_`{|}~]).*$/.test(a)
            }
        }
    }
}), angular.module("suaApp").directive("identicalCharacters", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (a, b, c, d) {
            d.$validators.identicalcharacters = function (a) {
                return /^(([a-z0-9A-Z !"#$%&'()\\*\/+,-.:;<=>?@\[\]^_`{|}~])\2?(?!\2))+$/.test(a)
            }
        }
    }
}), angular.module("suaApp").controller("EdituserinfoCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.editUserInfo = {
        changeUsername: g.resolve.editUserInfo.changeUsername,
        username: g.resolve.editUserInfo.username,
        firstName: g.resolve.editUserInfo.firstName,
        lastName: g.resolve.editUserInfo.lastName,
        email: g.resolve.editUserInfo.email,
        pendingEmail: g.resolve.editUserInfo.pendingEmail,
        pinCodeEnabled: g.resolve.editUserInfo.pinCodeEnabled,
        pinCode: ""
    }, b.submit = function () {
        f.start();
        var i = new c.editUserInfo;
        i.save({
            username: b.editUserInfo.username,
            firstName: b.editUserInfo.firstName,
            lastName: b.editUserInfo.lastName,
            email: b.editUserInfo.email,
            pinCode: b.editUserInfo.pinCode,
            nonce: g.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }, b.cancelPendingEmail = function () {
        f.start();
        var i = new c.cancelPendingEmail;
        i.save({
            email: b.editUserInfo.pendingEmail,
            nonce: g.nonce
        }).$promise.then(function (c) {
                c.success ? (b.editUserInfo.pendingEmail = !1, c.data && c.data.code && d.success(e[c.data.code]), c.data.route && a.path(c.data.route)) : d.error(c.data ? e[c.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }
}]), angular.module("suaApp").controller("EditpasswordCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.editPassword = {
        password: "",
        newPassword: "",
        passwordAgain: ""
    }, b.submit = function () {
        f.start();
        var i = new c.editPassword;
        i.save({
            password: b.editPassword.password,
            newPassword: b.editPassword.newPassword,
            nonce: g.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }
}]), angular.module("suaApp").directive("passwordMatch", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=passwordMatch"
        },
        link: function (a, b, c, d) {
            d.$validators.passwordMatch = function (b) {
                return b == a.otherModelValue
            }, a.$watch("otherModelValue", function () {
                d.$validate()
            })
        }
    }
}), angular.module("suaApp").controller("RecoveryemailCtrl", ["$location", "$scope", "$routeParams", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    b.recoveryEmail = {
        maskedEmail: atob(c.maskedEmail),
        token: c.token,
        email: "",
        actionRecovery: c.action,
        usePrimary: !1
    }, b.submit = function () {
        g.start();
        var c = new d.recoveryEmail;
        c.save({
            token: b.recoveryEmail.token,
            email: b.recoveryEmail.email,
            usePrimary: b.recoveryEmail.usePrimary,
            actionRecovery: b.recoveryEmail.actionRecovery,
            nonce: h.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && e.success(f[b.data.code]), b.data.route && a.path(b.data.route)) : e.error(b.data ? f[b.data.code] : f["00052"])
            }, function () {
                e.error(f["00052"])
            }).finally(function () {
                g.complete(), i.reload()
            })
    }
}]), angular.module("suaApp").controller("EditSecurityquestionsCtrl", ["$location", "$scope", "$routeParams", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    b.editSecurityQuestions = {
        numberOfQuestions: h.resolve.editSecurityQuestions.numberOfQuestions,
        cannedQuestions: h.resolve.editSecurityQuestions.cannedQuestions,
        questions: h.resolve.editSecurityQuestions.questions,
        pinCodeEnabled: h.resolve.editSecurityQuestions.pinCodeEnabled,
        answers: [],
        canned: h.resolve.editSecurityQuestions.canned,
        pinCode: "",
        personal: {
            question: "",
            answer: ""
        },
        init: function () {
            this.numberOfQuestions = Array.apply(null, {
                length: this.numberOfQuestions
            }).map(Number.call, Number)
        }
    }, h.resolve.editSecurityQuestions.personal && (b.editSecurityQuestions.personal.question = h.resolve.editSecurityQuestions.personal.question), b.editSecurityQuestions.questions || (b.editSecurityQuestions.questions = []), b.editSecurityQuestions.init(), b.selectedSecurityQuestion = function () {
        angular.forEach(b.editSecurityQuestions.cannedQuestions, function (a) {
            ~b.editSecurityQuestions.questions.indexOf(a.code) ? a.selected = !0 : delete a.selected
        })
    }, b.submit = function () {
        g.start();
        var c = {};
        c = b.editSecurityQuestions.canned ? {
            canned: !0,
            questions: b.editSecurityQuestions.questions.join("|"),
            answers: b.editSecurityQuestions.answers.join("|")
        } : {
            question: b.editSecurityQuestions.personal.question,
            answer: b.editSecurityQuestions.personal.answer
        }, c.pinCode = b.editSecurityQuestions.pinCode, c.nonce = h.nonce;
        var j = new d.editSecurityQuestions;
        j.save(c).$promise.then(function (b) {
            b.success ? (b.data && b.data.code && e.success(f[b.data.code]), b.data.route && a.path(b.data.route)) : e.error(b.data ? f[b.data.code] : f["00052"])
        }, function () {
            e.error(f["00052"])
        }).finally(function () {
            g.complete(), i.reload()
        })
    }
}]), angular.module("suaApp").controller("GridmultifactorauthenticationCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$routeParams", "$route", function (a, b, c, d, e, f, g, h, i) {
    b.gridMultifactorAuthentication = {
        token: h.token,
        names: h.keys.split(","),
        values: [],
        remember: !1
    }, b.submit = function () {
        f.start();
        var h = new c.gridMultifactorAuthentication;
        h.save({
            token: b.gridMultifactorAuthentication.token,
            gridValues: b.gridMultifactorAuthentication.values,
            fingerprint: new Fingerprint({
                screen_resolution: !0
            }).get(),
            remember: b.gridMultifactorAuthentication.remember,
            nonce: g.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), i.reload()
            })
    }
}]), angular.module("suaApp").controller("RecoveryCtrl", ["$location", "$scope", "$routeParams", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    b.recovery = {
        email: "",
        enableRecaptcha: h.enableRecaptcha
    }, b.recovery.actionRecovery = c.action ? c.action : 4, b.submit = function () {
        g.start();
        var c = {
            email: b.recovery.email,
            actionRecovery: b.recovery.actionRecovery,
            nonce: h.nonce
        };
        b.recovery.enableRecaptcha && (c.recaptcha = grecaptcha.getResponse());
        var j = new d.recovery;
        j.save(c).$promise.then(function (b) {
            b.success ? (b.data && b.data.code && e.success(f[b.data.code]), b.data.route && a.path(b.data.route)) : e.error(b.data ? f[b.data.code] : f["00052"])
        }, function () {
            e.error(f["00052"])
        }).finally(function () {
            b.recovery.enableRecaptcha && grecaptcha.reset(), g.complete(), i.reload()
        })
    }
}]), angular.module("suaApp").controller("VerifyTokenCtrl", ["$routeParams", "$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    c.verifyToken = {
        token: a.token,
        actionToken: a.action
    }, c.submit = function () {
        g.start();
        var a = new d.verifyToken;
        a.save({
            token: c.verifyToken.token,
            actionToken: c.verifyToken.actionToken,
            nonce: h.nonce
        }).$promise.then(function (a) {
                a.success ? (a.data && a.data.code && e.success(f[a.data.code]), a.data.route && b.path(a.data.route)) : e.error(a.data ? f[a.data.code] : f["00052"])
            }, function () {
                e.error(f["00052"])
            }).finally(function () {
                g.complete(), i.reload()
            })
    }, c.submit()
}]), angular.module("suaApp").controller("RecoverynewpasswordCtrl", ["$routeParams", "$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    c.recoveryNewPassword = {
        token: a.token,
        password: ""
    }, c.submit = function () {
        g.start();
        var a = new d.recoveryNewPassword;
        a.save({
            token: c.recoveryNewPassword.token,
            password: c.recoveryNewPassword.password,
            nonce: h.nonce
        }).$promise.then(function (a) {
                a.success ? (a.data && a.data.code && e.success(f[a.data.code]), a.data.route && b.path(a.data.route)) : e.error(a.data ? f[a.data.code] : f["00052"])
            }, function () {
                e.error(f["00052"])
            }).finally(function () {
                g.complete(), i.reload()
            })
    }
}]), angular.module("suaApp").directive("recaptcha", ["SUACONFIG", function (a) {
    return {
        template: '<script src="https://www.google.com/recaptcha/api.js"></script><div class="g-recaptcha" data-sitekey="' + a.sitekey + '"></div>',
        restrict: "E"
    }
}]), angular.module("suaApp").controller("SigninCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.signIn = {
        username: "",
        enableRecaptcha: g.enableRecaptcha,
        password: ""
    }, b.requiredRecaptcha = function () {
        return b.signIn.enableRecaptcha && !grecaptcha.getResponse() ? !0 : !1
    }, b.submit = function () {
        f.start();
        var i = {
            username: b.signIn.username,
            password: b.signIn.password,
            fingerprint: new Fingerprint({
                screen_resolution: !0
            }).get(),
            nonce: g.nonce
        };
        b.signIn.enableRecaptcha && (i.recaptcha = grecaptcha.getResponse());
        var j = new c.signIn;
        j.save(i).$promise.then(function (b) {
            b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
        }, function () {
            d.error(e["00052"])
        }).finally(function () {
            b.signIn.enableRecaptcha && grecaptcha.reset(), f.complete(), h.reload()
        })
    }
}]), angular.module("suaApp").controller("SignupCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.signUp = {
        username: "",
        email: "",
        enableRecaptcha: g.enableRecaptcha,
        password: ""
    }, b.submit = function () {
        f.start();
        var i = {
            username: b.signUp.username,
            email: b.signUp.email,
            password: b.signUp.password,
            nonce: g.nonce
        };
        b.signUp.enableRecaptcha && (i.recaptcha = grecaptcha.getResponse());
        var j = new c.signUp;
        j.save(i).$promise.then(function (b) {
            b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
        }, function () {
            d.error(e["00052"])
        }).finally(function () {
            b.signUp.enableRecaptcha && grecaptcha.reset(), f.complete(), h.reload()
        })
    }
}]), angular.module("suaApp").controller("EditgridmultifactorauthenticationCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.editGridMultifactorAuthentication = {
        suspend: !1,
        pinCode: "",
        pinCodeEnabled: g.resolve.editGridMultifactorAuthentication.pinCodeEnabled,
        enabled: g.resolve.editGridMultifactorAuthentication.enabled
    }, b.submit = function () {
        b.editGridMultifactorAuthentication.suspend = !0, f.start();
        var i = new c.editGridMultifactorAuthentication;
        i.save({
            enabled: b.editGridMultifactorAuthentication.enabled,
            pinCode: b.editGridMultifactorAuthentication.pinCode,
            nonce: g.nonce
        }).$promise.then(function (c) {
                c.success ? ("00076" === c.data.code && b.downloadGrid(), c.data && c.data.code && d.success(e[c.data.code]), c.data.route && a.path(c.data.route)) : d.error(c.data ? e[c.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), b.editGridMultifactorAuthentication.suspend = !1, h.reload()
            })
    }, b.csvGrid = function (a) {
        if (a) {
            var b = new Array;
            b.push('"*","0","1","2","3","4","5","6","7","8","9"');
            for (var c in a) a.hasOwnProperty(c) && b.push('"' + c + '","' + a[c].join('","') + '"');
            g.csvExport(b, "multifactor_authentication")
        }
    }, b.downloadGrid = function () {
        f.start();
        var i = new c.downloadGrid;
        i.save({
            pinCode: b.editGridMultifactorAuthentication.pinCode,
            nonce: g.nonce
        }).$promise.then(function (c) {
                c.success ? (b.csvGrid(c.data.grid), c.data && c.data.code && d.success(e[c.data.code]), c.data.route && a.path(c.data.route)) : d.error(c.data ? e[c.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }
}]), angular.module("suaApp").controller("IpverificationCtrl", ["$routeParams", "$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    c.ipVerification = {
        token: a.token,
        passCode: ""
    }, c.submit = function () {
        g.start();
        var a = new d.ipVerification;
        a.save({
            token: c.ipVerification.token,
            passCode: c.ipVerification.passCode,
            nonce: h.nonce
        }).$promise.then(function (a) {
                a.success ? (a.data && a.data.code && e.success(f[a.data.code]), a.data.route && b.path(a.data.route)) : e.error(a.data ? f[a.data.code] : f["00052"])
            }, function () {
                e.error(f["00052"])
            }).finally(function () {
                g.complete(), i.reload()
            })
    }
}]), angular.module("suaApp").controller("RecoverysecurityquestionCtrl", ["$routeParams", "$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    c.recoverySecurityQuestion = {
        token: a.token,
        question: atob(a.question),
        answer: ""
    }, c.submit = function () {
        g.start();
        var a = new d.recoverySecurityQuestion;
        a.save({
            token: c.recoverySecurityQuestion.token,
            answer: c.recoverySecurityQuestion.answer,
            nonce: h.nonce
        }).$promise.then(function (a) {
                a.success ? (a.data && a.data.code && e.success(f[a.data.code]), a.data.route && b.path(a.data.route)) : e.error(a.data ? f[a.data.code] : f["00052"])
            }, function () {
                e.error(f["00052"])
            }).finally(function () {
                g.complete(), i.reload()
            })
    }
}]), angular.module("suaApp").constant("SUATEXTS", SUA.SUATEXTS
), angular.module("suaApp").constant("SUACONFIG", {
    sitekey: SUA.sitekey,
    url: SUA.baseURL,
    api: SUA.ajaxURL
}), angular.module("suaApp").controller("EditrecoveryemailCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.editRecoveryEmail = {
        email: g.resolve.editRecoveryEmail.email,
        pendingEmail: g.resolve.editRecoveryEmail.pendingEmail,
        pinCodeEnabled: g.resolve.editRecoveryEmail.pinCodeEnabled,
        pinCode: ""
    }, b.submit = function () {
        f.start();
        var i = new c.editRecoveryEmail;
        i.save({
            email: b.editRecoveryEmail.email,
            pinCode: b.editRecoveryEmail.pinCode,
            nonce: g.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }, b.cancelRecoveryPendingEmail = function () {
        f.start();
        var i = new c.cancelRecoveryPendingEmail;
        i.save({
            email: b.editRecoveryEmail.pendingEmail,
            nonce: g.nonce
        }).$promise.then(function (c) {
                c.success ? (b.editRecoveryEmail.pendingEmail = !1, c.data && c.data.code && d.success(e[c.data.code]), c.data.route && a.path(c.data.route)) : d.error(c.data ? e[c.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }
}]), angular.module("suaApp").factory("API", ["$resource", "SUACONFIG", function (a, b) {
    return {
        verifyToken: function () {
            return a(b.api + "/", {
                action: "public_and_private_sua",
                request: "3"
            })
        },
        signIn: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "1"
            })
        },
        signUp: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "2"
            })
        },
        recovery: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "4"
            })
        },
        recoverySecurityQuestion: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "5"
            })
        },
        recoveryNewPassword: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "6"
            })
        },
        recoveryEmail: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "7"
            })
        },
        gridMultifactorAuthentication: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "8"
            })
        },
        ipVerification: function () {
            return a(b.api + "/", {
                action: "public_sua",
                request: "9"
            })
        },
        logOut: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "0"
            })
        },
        editUserInfo: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "10"
            })
        },
        cancelPendingEmail: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "11"
            })
        },
        editRecoveryEmail: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "12"
            })
        },
        cancelRecoveryPendingEmail: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "13"
            })
        },
        editPassword: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "14"
            })
        },
        editSecurityQuestions: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "15"
            })
        },
        editGridMultifactorAuthentication: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "16"
            })
        },
        downloadGrid: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "17"
            })
        },
        editPinCode: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "18"
            })
        },
        deleteAccount: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "19"
            })
        },
        editIpVerification: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "21"
            })
        },
        emailNotifications: function () {
            return a(b.api + "/", {
                action: "private_sua",
                request: "22"
            })
        },
        routeResolve: function () {
            return a(b.api + "/", {
                action: "resolve_sua"
            })
        }
    }
}]), angular.module("suaApp").controller("EditpincodeCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.editPinCode = {
        password: "",
        pinCode: ""
    }, b.submit = function () {
        f.start();
        var i = new c.editPinCode;
        i.save({
            password: b.editPinCode.password,
            pinCode: b.editPinCode.pinCode,
            nonce: g.nonce
        }).$promise.then(function (b) {
                b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), h.reload()
            })
    }
}]), angular.module("suaApp").controller("DeleteaccountCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.deleteAccount = {
        password: "",
        enableRecaptcha: g.enableRecaptcha
    }, b.submit = function () {
        f.start();
        var i = {
            password: b.deleteAccount.password,
            nonce: g.nonce
        };
        b.deleteAccount.enableRecaptcha && (i.recaptcha = grecaptcha.getResponse());
        var j = new c.deleteAccount;
        j.save(i).$promise.then(function (b) {
            b.success ? (b.data && b.data.code && d.success(e[b.data.code]), b.data.route && a.path(b.data.route)) : d.error(b.data ? e[b.data.code] : e["00052"])
        }, function () {
            d.error(e["00052"])
        }).finally(function () {
            b.deleteAccount.enableRecaptcha && grecaptcha.reset(), f.complete(), h.reload()
        })
    }
}]), angular.module("suaApp").factory("routeResolve", ["$location", "$q", "API", "growl", "SUATEXTS", "ngProgress", function (a, b, c, d, e, f) {
    var g = function () {
        f.start();
        var d = b.defer(),
            e = new c.routeResolve;
        return e.save({
            route: a.path()
        }).$promise.then(function (a) {
                d.resolve(a.success ? a.data ? a.data : {} : !1)
            }, function () {
                d.resolve(!1)
            }).finally(function () {
                f.complete()
            }), d.promise
    };
    return {
        status: g
    }
}]), angular.module("suaApp").controller("AccounthistoryCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", function (a, b, c, d, e, f, g) {
    b.accountHistory = {
        activities: g.resolve.accountHistory.activities
    }, b.csvActivities = function () {
        var a = new Array;
        a.push('"Browser","IP","Country","City","Date"'), angular.forEach(b.accountHistory.activities, function (b) {
            a.push('"' + b.browser + '","' + b.address + '","' + b.country + '","' + b.city + '","' + b.created + '"')
        }), g.csvExport(a, "account_history")
    }
}]), angular.module("suaApp").controller("EditipverificationCtrl", ["$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h) {
    b.editIpVerification = {
        suspend: !1,
        pinCode: "",
        pinCodeEnabled: g.resolve.editIpVerification.pinCodeEnabled,
        enabled: g.resolve.editIpVerification.enabled
    }, b.submit = function () {
        b.editIpVerification.suspend = !0, f.start();
        var i = new c.editIpVerification;
        i.save({
            enabled: b.editIpVerification.enabled,
            pinCode: b.editIpVerification.pinCode,
            nonce: g.nonce
        }).$promise.then(function (c) {
                c.success ? ("00076" === c.data.code && b.downloadGrid(), c.data && c.data.code && d.success(e[c.data.code]), c.data.route && a.path(c.data.route)) : d.error(c.data ? e[c.data.code] : e["00052"])
            }, function () {
                d.error(e["00052"])
            }).finally(function () {
                f.complete(), b.editIpVerification.suspend = !1, h.reload()
            })
    }
}]), angular.module("suaApp").controller("EmailnotificationsCtrl", ["$routeParams", "$location", "$scope", "API", "growl", "SUATEXTS", "ngProgress", "$rootScope", "$route", function (a, b, c, d, e, f, g, h, i) {
    c.emailNotifications = {
        primary: [],
        recovery: [],
        primaryNotifications: [],
        recoveryNotifications: [],
        recoveryEnabled: h.resolve.emailNotifications.recoveryEnabled,
        pinCodeEnabled: h.resolve.emailNotifications.pinCodeEnabled,
        pinCode: ""
    }, h.resolve.emailNotifications.primary && (c.emailNotifications.primary = h.resolve.emailNotifications.primary.split(",").map(function (a) {
        return parseInt(a)
    })), h.resolve.emailNotifications.recovery && (c.emailNotifications.recovery = h.resolve.emailNotifications.recovery.split(",").map(function (a) {
        return parseInt(a)
    })), c.selectNotification = function (a, b) {
        return b ? -1 === c.emailNotifications.recovery.indexOf(parseInt(a)) ? !1 : !0 : -1 === c.emailNotifications.primary.indexOf(parseInt(a)) ? !1 : !0
    }, c.selectInit = function (a, b, d) {
        d ? -1 !== c.emailNotifications.recovery.indexOf(parseInt(a)) && (c.emailNotifications.recoveryNotifications[b] = parseInt(a)) : -1 !== c.emailNotifications.primary.indexOf(parseInt(a)) && (c.emailNotifications.primaryNotifications[b] = parseInt(a))
    }, c.submit = function () {
        g.start();
        var a = new d.emailNotifications;
        a.save({
            primaryNotifications: c.emailNotifications.primaryNotifications.join(","),
            recoveryNotifications: c.emailNotifications.recoveryNotifications.join(","),
            pinCode: c.emailNotifications.pinCode,
            nonce: h.nonce
        }).$promise.then(function (a) {
                a.success ? (a.data && a.data.code && e.success(f[a.data.code]), a.data.route && b.path(a.data.route)) : e.error(a.data ? f[a.data.code] : f["00052"])
            }, function () {
                e.error(f["00052"])
            }).finally(function () {
                g.complete(), i.reload()
            })
    }
}]), angular.module("suaApp").constant("SUAINTERNATIONALIZATION", SUA.SUAINTERNATIONALIZATION);
