
class Animal {
    bark() {
        console.log('Animal bark');
    }
}

var a:Animal=new Animal();
//a.bark1();


class Dog extends Animal{
    /** overriding **/
     bark() {
        console.log('Dog bark');
    }
    /** newly added **/
    bark1() {
        console.log('Dog bark1');
    }
}

class Cat extends Animal{
    /** overriding **/
     bark() {
        console.log('cat bark');
    }
    /** newly added **/
    bark2() {
        console.log('cat bark1');
    }
}

var d:Dog=new Dog(); 
d.bark();
d.bark1();

var ref:Animal=new Dog();




function animalDo(animal:Animal){   //is-A
    if(animal instanceof Dog){
        animal.bark1();
    }

    if(animal instanceof Cat){
        animal.bark2();
    }
    animal.bark();
}

animalDo(new Dog());
animalDo(new Cat());