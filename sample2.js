// Concepts that aid in implementing a singleton in Javascript
// - Static Properties (<<ClassName>>.protertyName)
// - Check for Class instance( use instanceof keyword )
// - Conditional instance construction (condiional statement alonside instanceof )
// - Always return the very first instance to be created


class UserSession {
 constructor(sessionIdArg, userNameArg, userRoleArg, userEmailArg){
  //          Step4:
//                Checks for whether there exists a User Instance:
//                Rrturns the already existing user instance if any
     if(UserSession.userSessionInstance instanceof UserSession){
      return UserSession.userSessionInstance;
  }
//         Step 1: 
//                Sets properities of the UserSession instance 
     this.id = sessionIdArg;
     this.name = userNameArg;
     this.role = userRoleArg;
     this.email = userEmailArg;

//         Step 2:
//                Sets userInstance as a static property. 
     UserSession.userSessionInstance = this;
 }
//     Step 3:
//            Returns the UserSession singletone (Single instance).  

 getUser(){
     return UserSession.userSessionInstance;
 }

 logOut(){
  return UserSession.userSessionInstance = null;
 }

}

const Patience = new UserSession(2,"patience","admin","patience@yahoo.com");
console.log(Patience.getUser());
Patience.logOut();

const Edith = new UserSession(3,"Edith","user","edith@yahoo.com");
console.log(Edith.getUser());

const Rachel = new UserSession(1,"Ineza","admin","ineza@yahoo.com");
console.log(Rachel.getUser());



//Note part of the singletone logic.
//but ruther essential for viewing the output of the UserSession singleton
//for(let x = 1; x<10;x++){
 //console.log(new UserSession(`Session ID: ${x}`, ` UserName: user${x}`, `User Role: role${x}`, `, UserEmail: user${x}@gmail.com`).getUser());
//}


























