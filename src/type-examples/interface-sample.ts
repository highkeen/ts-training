interface Apple{
    color:string;
    size:number;
    /**optional property **/
    name?:string;
    getPrice:()=>number;
}


var apple1:Apple={color:'red',
                    size:1,
                getPrice:()=>2};