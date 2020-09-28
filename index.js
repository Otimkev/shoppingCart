const ShoppingCart = require('./Cart/ShoppingCart');
const Laptop = require("./models/laptops");
const Desktop = require("./models/desktop");
const Antivirus = require("./models/antivirus");

class Main {
	main() {
        //Create Instances of computer type;
        const hpLaptop = new Laptop("2hours","2GB","1TB","17inches","black",2000);
        const appleLaptop = new Laptop("8hours","4GB","1TB","17inches","grey",1800);

        //Create Instances software type;
        //const antivirus = new Antivirus("kernel","linux",2000,2020);

        //Create Instance of shoppingCart;
        const shoppingCart = new ShoppingCart();
        //Add created instances of type computer into the shoppingCart
        shoppingCart.addItems(hpLaptop);
        shoppingCart.addItems(appleLaptop);

        //Add created instances of type software into the shoppingCart
        //shoppingCart.addItems(antivirus)

        //Show items in the shoppingCart
        const display = shoppingCart.showAllItems()
        return console.log(display);    
        }

}

//Execute program
const main = new Main();
main.main();