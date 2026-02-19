

 class Animal {
     speak(){
        throw new Error("Method 'speak()' must be implemented.");
     }
 }

  class Dogesh extends Animal{
    speak(sound){
       return `Dogesh says ${sound}`
    }
  }

  class billa extends Animal {
    speak(sound){
        return `billa says ${sound}`
     }
   }

    function makeAnimalSpeak(animal,sound){
        console.log(animal.speak(sound))
    }
    let animal = [ new Dogesh(), new billa()]
    animal.map(s=> makeAnimalSpeak(s,"hello"));

    // this is used more in backend technologies where we have to deal with different types of data and we want to have a common interface to work with them.