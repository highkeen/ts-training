/* const Log = <T>(originalConstructor: new(...args: any[]) => T) => {
    function newConstructor(... args) {
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    }
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}
 
@Log
class Pet {
    constructor(name: string, age: number) {}
}
 
new Pet("Azor", 12);
//Arguments: Azor, 12 */