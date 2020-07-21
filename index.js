const ShoppingCart = require("./Cart/ShoppingCart");
const Laptop = require("./models/laptops");
const Desktop = require("./models/desktop");
const Item = require("./Cart/Item");
const LaptopAdapter = require('./Adapters/LaptopAdapter');

class Main {
	main() {
        const hpLaptop = new Laptop("2hours","2GB","1TB","17inches","black",2000);
        const acerLaptop = new Laptop("8hours","4GB","1TB","17inches","grey",1800);

        const dellDesktop = new Desktop("17inches","8GB","2TB","17","green",5000);
        const razerDesktop = new Desktop("15inches","64GB","8TB","17","blck",10000);

        const shoppingCart = new ShoppingCart();
        const item1 = new LaptopAdapter(2,hpLaptop);
        const item2 = new Item(5,dellDesktop.price,"17inches 8GB @TB 17 green amazing dell desktop")
        shoppingCart.addItems(item2);
        shoppingCart.addItems(item1);
        shoppingCart.addItems( new LaptopAdapter(10,acerLaptop));
        const printableString = shoppingCart.printItems();
        console.log(printableString)
	}
}

const main = new Main();
main.main();