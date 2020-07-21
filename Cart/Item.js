class Item {
 constructor(quantity, price, description){
  this.quantity = quantity;
  this.price = price;
  this.description = description;
 }

 getQuantity(){
  return this.quantity;
 }

 setQuantity(quantity){
  this.quantity =quantity;
 }

 getPrice(){
  return this.price;
 }

 setPrice(price){
  this.price = price;
 }

 getDescription(){
  return this.description;
 }

 setDescription(description){
  this.description = description;
 }

 totalPrice(){
  return (this.price * this.quantity)
 }

 toString(){
  return `${this.getQuantity()} ${this.getPrice()} ${this.getDescription()} `
 }
}

module.exports = Item;

