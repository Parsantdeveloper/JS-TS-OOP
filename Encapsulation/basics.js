
// no encapsulation 

 class NoEnc{
     name = "prashant";

 }
 const n = new NoEnc();
 n.name = "john"; // anyone can change the name property of NoEnc class instance
 console.log(n.name); // john


 // basic Encapsulation (getter and setter) ALMOST NO ENCAPSULATION

  class BasicEnc{
    name = "prashant";
    getName(){
        return this.name;
    }
  }                                    // Partial Encapsulation
  const b = new BasicEnc();
    console.log(b.getName());
    b.name = "john"; // anyone can change the name property of BasicEnc class instance
    console.log(b.getName()); // john
    console.log(b)
    console.log()
 // Real Encapsulation (private properties and methods)
   console.log("Real Encapsulation with private properties and methods");

    class RealEnc{
        #name = "prashant"; // private property

         getName(){
            return this.#name;
         }
    }
    let r = new RealEnc();
    console.log(r.getName());
    // r.#name = "john"; // SyntaxError: Private field '#name' must be declared in an enclosing class
