const Item = require('../Cart/Item');

class DesktopAdatper extends Item{
 constructor(quantity, desktop){
  super()
  this.quantity = quantity;
  this.desktop = desktop;
 }
 getDescription(){
  return `${this.desktop.monitorSize} ${this.desktop.ram} ${this.desktop.hdd} ${this.desktop.screenSize} ${this.desktop.color}`;
 }

 getQuantity(){
  return this.quantity;
 }

 getPrice(){
  return this.desktop.price;
 }


}

module.exports = DesktopAdatper;
