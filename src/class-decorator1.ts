function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    /* return class extends constructor {
        newProperty = "new property";
        hello = "override";
    } */

    function newConstructor(... args) {
        console.log("Arguments: ", args.join(", "));
        new constructor(args);
    }
    newConstructor.prototype = constructor.prototype;
    return newConstructor;
}

@classDecorator
class Greeter2 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter2("world"));