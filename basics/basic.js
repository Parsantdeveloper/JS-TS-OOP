

 class Test{
      
     constructor(name ){
        console.log('this is for testing',name);
        this.name = name;
     }
     
     
      async heythere(){
       console.log("hey there ", this.name);
      }
     
 }

  const t = new Test("prashant");
  t.heythere();
