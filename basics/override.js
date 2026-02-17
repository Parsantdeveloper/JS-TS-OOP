
class user {
     constructor(name){
        this.name = name ;
     }
     login(){
        console.log("user logged in")
     }
}

class admin extends user {
     constructor(name,role){
        super(name);
        this.role = role ;
     }
     login(){
        super.login();
        console.log("admin logged in")
     }
}
let a = new admin ("prashant","admin")
a.login()