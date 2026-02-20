
 class calculate {
     sum(a,b){
        return a + b;
     }
 }

 class display{
     constructor(calculate){
        this.calculate = calculate;
     }
        showSum(a,b){
            console.log(`the sum of ${a} and ${b} is ${this.calculate.sum(a,b)}`);
        }
 }

 let o = new display(new calculate());
 o.showSum(5,10);