const Item = require("../Cart/Item");

class MsOfficeSoftwareAdapter extends Item {
 constructor(quantity, msOfficeSoftware){
  super()
  this.quantity = quantity;
  this.msOfficeSoftware = msOfficeSoftware;
 }

 getDescription(){
  return `${this.msOfficeSoftware.category} ${this.msOfficeSoftware.operatingSystem} ${this.msOfficeSoftware.version}`;
 }

 getQuantity(){
  return this.quantity;
 }

 getPrice(){
  return this.msOfficeSoftware.price;
 }

}

module.exports = MsOfficeSoftwareAdapter;