
// lets start with basics 
// polymorphism is the ability of an object to take on many forms.
// in javascript, we can achieve polymorphism through inheritance and method overriding.

 class Animal{
    speak(){
        throw new Error("Method 'speak()' must be implemented.");
    }
 }

 class Dogesh extends Animal{
    speak(){
        return "vau vau"
    }
 }

 class billa extends Animal {
    speak(){
        return "myau myau"
    }
 }

//   const dog = new Dogesh();
//   console.log(dog.speak());
//   const cat = new billa();
//     console.log(cat.speak());

const animals = [new Dogesh(), new billa()];
 animals.map(animal=> console.log(animal.speak()))

 // same method speak  is having different implementation . 