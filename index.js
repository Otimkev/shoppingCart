const ShoppingCart = require("./Cart/ShoppingCart");
const Laptop = require("./models/laptops");
const Desktop = require("./models/desktop");
const Antivirus = require("./models/antivirus");
const Item = require("./Cart/Item");
const LaptopAdapter = require('./Adapters/LaptopAdapter');
const DesktopAdapter = require('./Adapters/DesktopAdapter');
const AntivirusSoftwareAdapter = require('./Adapters/AntivirusSoftwareAdapter');

class Main {
	main() {
        const hpLaptop = new Laptop("2hours","2GB","1TB","17inches","black",2000);
        const acerLaptop = new Laptop("8hours","4GB","1TB","17inches","grey",1800);

        const dellDesktop = new Desktop("17inches","8GB","2TB","17","green",5000);
        const razerDesktop = new Desktop("15inches","64GB","8TB","17","blck",10000);

        const kasperskey = new Antivirus("Community","Windows 10",59.99,"K2020")

        const shoppingCart = new ShoppingCart();
        const item1 = new LaptopAdapter(2,hpLaptop);
        const item3 = new DesktopAdapter(5,dellDesktop)
        const item4 = new AntivirusSoftwareAdapter(4,kasperskey)

        shoppingCart.addItems(item3);
        shoppingCart.addItems(item1);
        shoppingCart.addItems(item4)

       // shoppingCart.addItems( new LaptopAdapter(10,acerLaptop));
        const printableString = shoppingCart.printItems();
        console.log(printableString)
	}
}

const main = new Main();
main.main();