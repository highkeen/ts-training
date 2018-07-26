class Pojo {
    private x: any;

    set XValue(x: any) {
        console.log('set XValue');
        this.x = x;
    }

    get XValue(): any {
        console.log('get XValue');
        return this.x;
    }

    setX(x: any): void {
        console.log('setX');
        this.x = x;
    }

    getX(): any {
        console.log('getX');
        return this.x;
    }
}


var p=new Pojo();
/*p.setX(10);
console.log(p.getX());*/

p.XValue=10;
console.log(p.XValue);
