interface Shape{
    getArea():number;
    maxArea(shapeOther:Shape):Shape;
}

abstract class AbstarctShape implements Shape{
    
    abstract getArea():number;

    maxArea(shapeOther:Shape):Shape{
        return this.getArea() >= shapeOther.getArea()? this :shapeOther; 
    }
}


class Rect extends AbstarctShape{
 
    constructor(private l:number,private b:number){
        super();
    }

    getArea():number{
        return this.l* this.b;
    }
}

class Circle extends AbstarctShape{
 
    private static readonly PI=3.14;
    constructor(private r:number){
        super();
    }

    getArea():number{
        return Circle.PI* this.r*this.r;
    }
}