const Item = require("../Cart/Item");

class LaptopAdapter extends Item {
 constructor(quantity, laptop){
  super()
  this.quantity = quantity;
  this.laptop = laptop;
 }

 getDescription(){
  return `${this.laptop.battery} ${this.laptop.ram} ${this.laptop.hdd} ${this.laptop.screenSize} ${this.laptop.color}`;
 }

 getQuantity(){
  return this.quantity;
 }

 getPrice(){
  return this.laptop.price;
 }

}

module.exports = LaptopAdapter;