//import "reflect-metadata";


function logProperty(target: any, key: string) {
    console.log(target);
    console.log(this);
    console.log(`Property: ${target} => ${key}`);
    // property value
    var _val =null;
  
    console.log(_val);    
    // property getter
    var getter = function () {
      console.log(`Get: ${key} => ${_val}`);
      return _val;
    };
  
    // property setter
    var setter = function (newVal) {
      console.log(`Set: ${key} => ${newVal}`);
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



function sealed(name: string) {
   /*  return (ctor: Function) => {
        console.log("Plugin found: " + name,ctor);
    } */

    return function(ctor: Function){
        //console.log("Plugin found: " + name,ctor);
    }
}


function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

//@sealed("xxx")
class Greeter {
    @logProperty
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }


    
}


//@sealed("yyy")
class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}



var x=new Greeter("samik");
x.greeting='samik1';
x.greeting='samik2';