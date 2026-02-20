

// hiding complexities only showing the essentials . 


  class calculate {
    #a 
     #b;
     constructor(a,b){
        this.#a =a;
        this.b =b;
     }
     #sum(){
        return this.#a + this.#b;
     }
    showSum(){
     console.log(`the sum of ${this.#a} and ${this.b} is ${this.#sum()}`);
    }
     
  }



   const obj = new calculate(5,10);
   obj.showSum();
