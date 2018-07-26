var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Calculator;
(function (Calculator) {
    function sum(a, b) {
        return a + b;
    }
    Calculator.sum = sum;
})(Calculator || (Calculator = {}));
/// <reference path="calculator-namespace.ts" />
var Calculator;
/// <reference path="calculator-namespace.ts" />
(function (Calculator) {
    function mul(a, b) {
        return a * b;
    }
    Calculator.mul = mul;
})(Calculator || (Calculator = {}));
//import "reflect-metadata";
function logProperty(target, key) {
    console.log(target);
    console.log(this);
    console.log("Property: " + target + " => " + key);
    // property value
    var _val = null;
    console.log(_val);
    // property getter
    var getter = function () {
        console.log("Get: " + key + " => " + _val);
        return _val;
    };
    // property setter
    var setter = function (newVal) {
        console.log("Set: " + key + " => " + newVal);
        _val = newVal;
    };
    // Delete property.
    if (true) {
        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
function sealed(name) {
    /*  return (ctor: Function) => {
         console.log("Plugin found: " + name,ctor);
     } */
    return function (ctor) {
        //console.log("Plugin found: " + name,ctor);
    };
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
//@sealed("xxx")
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
__decorate([
    logProperty
], Greeter.prototype, "greeting", void 0);
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
//@sealed("yyy")
var Greeter1 = (function () {
    function Greeter1(message) {
        this.greeting = message;
    }
    Greeter1.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter1;
}());
var x = new Greeter("samik");
x.greeting = 'samik1';
x.greeting = 'samik2';
System.register("default-export", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var num, f;
    return {
        setters: [],
        execute: function () {
            num = 10;
            f = function () {
            };
            exports_1("default", {
                num: num,
                f: f
            });
        }
    };
});
var firstName = 'samik';
console.log(Calculator.sum(10, 20));
System.register("validator", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var A, B;
    return {
        setters: [],
        execute: function () {
            A = (function () {
                function A() {
                }
                return A;
            }());
            exports_2("A", A);
            B = (function () {
                function B() {
                }
                return B;
            }());
        }
    };
});
System.register("re-export", ["validator"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (validator_1_1) {
                exports_3({
                    "AL": validator_1_1["A"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("import-list", ["validator", "re-export"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var validator_2, re_export_1, a, j;
    return {
        setters: [
            function (validator_2_1) {
                validator_2 = validator_2_1;
            },
            function (re_export_1_1) {
                re_export_1 = re_export_1_1;
            }
        ],
        execute: function () {
            a = new validator_2.A();
            j = new re_export_1.AL();
        }
    };
});
