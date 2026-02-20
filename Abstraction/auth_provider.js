
 class AuthProvider{
    login(){
        throw new Error("Method 'login()' must be implemented.");
    }
 }

 class GoogleAuthProvider extends AuthProvider{
     login(){
         console.log("Logging in with Google...");
     }
 }
  
 
  function authenticate(authProvider){
    authProvider.login();
  }

   authenticate(new GoogleAuthProvider());