const laptop = require("./models/laptops");
const desktop = require("./models/desktop");
const antivirus = require("./models/antivirus");
const msOffice = require("./models/msOffice");
const keyboard = require("./models/keyboard");
const laptopBag = require("./models/laptopBag");

class shopeFactory {
	create(itemName) {
		if(itemName == "Laptops"){
			return new laptop("8hrs", "4GB", "1TB", "16inch", "silver", 3500);
		}
		if(itemName == "Desktop"){
			return new desktop("17inch","1GB","1TB","12inchs","black",5000)
		}
	if(itemName == "Antivirus"){
		return new antivirus("community","windows",500,"v4")
	}
	if(itemName == "msOffice"){
		return new msOffice("premium","Linux",1000,"v5");
	}
	if(itemName=="Keyboard"){
		return new keyboard("Razer","green","Acer")
	}
	if(itemName == "LaptopBag" ){
	return new laptopBag("Grey",5,"100cm X 150cm",50)
	}
}}
module.exports = shopeFactory;
