const AccessoriesDecorator = require("./AccessoriesDecorator");
const Item = require("../Cart/Item")
const LaptopAdapter = require("../Adapters/LaptopAdapter")

class Mouse extends LaptopAdapter{
 constructor(computerObject){
  super()
  this.computerObject = computerObject;
 }

}


module.exports = Mouse;