class Computer{
 constructor(nameArg, inchArg, processorArg, ramArg, spaceArg) {
     this.type = "Generic"
     this.name = nameArg;
     this.inch = inchArg;
     this.processor = processorArg;
     this.processorSpeed = 
     this.ram = ramArg;
     this.diskSpace = spaceArg;
     //How many Computers to Purchase
     this.purchaseQuantity = 1;
     //Price Per Computer in dollars($)
     this.price = 150
     // Aggregate amount to be paid in dollars($)
     this.totalCost = this.price;
     // Computer Description
     this.description
 }
 setTotalCost(){
     this.totalCost =  ((this.price) * parseInt((this.purchaseQuantity)));
 }
 setPurchaseQuantity(purchaseQuantityArg){
     this.purchaseQuantity = parseInt(purchaseQuantityArg) || 1;
 }
 setDescription(){
     this.description =  `${this.purchaseQuantity} ${this.type} Computer${this.purchaseQuantity>1 ?"s":""},
 ------
 - ${this.name},
 - ${this.inch} Inch,
 - ${this.processor} Processor,
 - ${this.processorSpeed} GHz,
 - ${this.ram} GB RAM,
 - ${this.diskSpace} Hard Disk
 ------
 - Price per Laptop : \$${this.price}
 `
 }
 getDescription(){
     return this.description;
 }
}
class Desktop extends Computer{
 constructor(nameArg, inchArg, processorArg, ramArg, spaceArg) {
     super(nameArg, inchArg, processorArg, ramArg, spaceArg);
     this.type = "Desktop";
     this.price = 200
 }
}
class Laptop extends Computer{
 constructor(nameArg, inchArg, processorArg, ramArg, spaceArg) {
     super(nameArg, inchArg, processorArg, ramArg, spaceArg);
     this.type = "Laptop";
     this.price = 250
 }
}
class ComputerDecorator extends Computer{
 constructor(computer) {
     super(
         computer.name, 
         computer.inch,
         computer.processor, 
         computer.ram, 
         computer.space
     );
     this.computer = computer;
     this.computer.setTotalCost()
     this.computer.setDescription()
     this.decoratorName = "Accessory"
     this.extraCost = 0
 }
 setTotalCost(){
     this.totalCost = (this.computer.totalCost + this.extraCost)
 }
 setDescription(){
         this.description = `${this.computer.description}
+ 1 ${this.decoratorName} (\$${this.extraCost})
`;
 }
}
class Mouse extends ComputerDecorator {
 constructor(computer){
     super(computer);
     this.decoratorName = "Computer Mouse"
     this.extraCost = 5
 }
}
class HDCamera extends ComputerDecorator {
 constructor(computer){
     super(computer);
     this.decoratorName = "High Definition Camera"
     this.extraCost = 50
 }
}
class SilverBody extends ComputerDecorator {
 constructor(computer){
     super(computer);
     this.decoratorName = "Silver Body"
     this.extraCost = 10
 }
}
// Not part of the computer decoration logic
// Just for output
function checkOut(computer){
 computer.setDescription();
 computer.setTotalCost();
 console.log(computer.getDescription());
 console.log('---------------------------------');
 console.log(`Aggregate Cost: \$${computer.totalCost}`);
 console.log('---------------------------------');
}
// 1 Mr X at Mr Y's shop
let computer1 = new Computer("HP Probook", 17, "Intel", 8, 500)
// computer1.setPurchaseQuantity(2)
computer1 = new Mouse(computer1);
computer1 = new HDCamera(computer1);
computer1 = new Mouse(computer1);
computer1 = new SilverBody(computer1);
checkOut(computer1)