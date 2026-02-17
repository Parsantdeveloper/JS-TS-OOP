// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


class user {
    
    constructor(name , age ){
            if (!name) throw new Error("Name required");

        this.name = name ;
        this.age =age ;
    }
    
}
let u = new user ("prashant",20);
console.log(u)

class admin extends user {
    constructor(name,age ,role){
         super(name,age);
        this.role = role ;
    }
}
let a = new admin ("prashant",18,"admin")
console.log(a)