

 const shape = {

    area:function(){
        throw new Error("Area method must be implemented");
    }
 }

 const rectangle = Object.create(shape);
  rectangle.area=function(){
    return this.l*this.b ;
  }
  rectangle.l=5;
  rectangle.b=10;
  
 let area = rectangle.area();
    console.log(area); // 50