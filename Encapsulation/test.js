
 class example {
    name = "prashant";
    getName(){
        return this.name;
    }
    
 }
    const e = new example();
    console.log(e)

  let obj = {
    name: "prashant",
    getName(){
        return this.name;
    }
  }
   console.log(obj)

   function objFunc(name){
    return {
        name,
        getName(){
            return this.name;
        }
    }
   }
   let o =  objFunc("prashant");
    console.log(o)


    function ConstructorFunc(username){
        // const this = {}; // this is created by default when we use new keyword to call a function as constructor
        console.log("this is constructor function--->", this);
        this.name=username;
        console.log("this is constructor function--->", this);

        this.getName=function(){
            return this.name;
        }
        console.log("this is constructor function--->", this);

        // return this ; // this is returned by default when we use new keyword to call a function as constructor

    }
    console.log(ConstructorFunc)
    console.log(new ConstructorFunc("prashant"))
    // let c = new ConstructorFunc("prashant");
    // console.log(c)


