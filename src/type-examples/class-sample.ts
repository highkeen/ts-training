class Car{
    private color:string;
    private id:number;

    constructor(id:number){
        this.id=id;
    }

    setId(id:number){
        if(id<0)
        throw new Error("Invalid id");
        this.id=id;
    }
}



var c=new Car();

c.id=-10;
c.color='red';

c.setId(10);

