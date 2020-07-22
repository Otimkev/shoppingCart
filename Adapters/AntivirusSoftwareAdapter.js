const Item = require("../Cart/Item");

class AntivirusSoftwareAdapter extends Item {
 constructor(quantity, antivirusSoftware){
  super()
  this.quantity = quantity;
  this.antivirusSoftware = antivirusSoftware;
 }

 getDescription(){
  return `${this.antivirusSoftware.category} ${this.antivirusSoftware.operatingSystem} ${this.antivirusSoftware.version}`;
 }

 getQuantity(){
  return this.quantity;
 }

 getPrice(){
  return this.antivirusSoftware.price;
 }

}

module.exports = AntivirusSoftwareAdapter;