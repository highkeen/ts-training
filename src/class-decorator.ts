/**decorator function**/
function MySealed(constructor: Function) {
    console.log('consturcor is: ',constructor);
    console.log('consturcor prototype: ',constructor.prototype);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


@MySealed
class MyExample {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


//new MyExample('samik');