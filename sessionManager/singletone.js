const Users = require('../models/user')
let userInstance = null;

class SessionManager {
 constructor(user){

  if(!userInstance){
   this.userData = new Users(user.name,user.role,user.email)
    userInstance = this;
  }else
   return userInstance;
 }

 getUserData(){
  return this.userData;
 }
}

module.exports = SessionManager;