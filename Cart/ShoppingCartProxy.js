const ShoppingCart = require("./ShoppingCart");
const SessionManager = require("../sessionManager/singletone");

class ShoppingCartProxy extends ShoppingCart{
 constructor(role){
  super()
  this.shoppingCart = new ShoppingCart(); 
  this.role = role;
 }

 addItems(someItem) {
		if(someItem.totalPrice() <= 2500){
   this.log(someItem,"added")
			return this.shoppingCart.addItems();
  }
  else{
   console.log("Failed to add item successfully")
  }
 }

  removeItem(someItem) {
   if(this.role === "admin"){
    return this.shoppingCart.removeItem(someItem);
   }else{
    console.log("This action requires an Admin previlage.")
   }

  }

  log(someItem, type){
   if(type === "added"){
    return console.log(`${someItem} was added successfully`)
   }
   return console.log(`${someItem} wasn't added successfully`)
  }
}

module.exports = ShoppingCartProxy;