
  
  class Payment {
    constructor(amount){
        this.amount  = amount ;
    }

    pay(){
        console.log(`processing ${this.amount}`)
    }

  }

   class Esewa extends Payment{
      constructor(amount,esewaId){
        super(amount);
        this.esewaId = esewaId ;
      }
      pay(){
        console.log(`processing ${this.amount} using esewa with id ${this.esewaId}`)
      }
   }

   class Khalti extends Payment{
    constructor(amount,khaltiId){
        super(amount);
        this.khaltiId = khaltiId ;
      }
      pay(){
        console.log(`processing ${this.amount} using khalti with id ${this.khaltiId}`)
      }
   }
   let e = new Esewa(1000,"esewa123");
   e.pay();

   let k = new Khalti(2000,"khalti123");
   k.pay();