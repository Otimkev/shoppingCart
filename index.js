const ShoppingCart = require("./Cart/ShoppingCartProxy");
const Laptop = require("./models/laptops");
const Desktop = require("./models/desktop");
const Antivirus = require("./models/antivirus");

//const Item = require("./Cart/Item");
const LaptopAdapter = require('./Adapters/LaptopAdapter');
const DesktopAdapter = require('./Adapters/DesktopAdapter');
const AntivirusSoftwareAdapter = require('./Adapters/AntivirusSoftwareAdapter');
const Mouse = require("./Decorators/Mouse");
const SessionManager = require("./sessionManager/singletone");
const Settings = require("./utils/Settings");

class Main {
	main() {
        const role = "user";
        
        var user = {
                name:"kevin",
                role:"user",
                email:"kevinotim4@gmail.com"
        }

        var user2 = {
                name:"otim",
                role:"admin",
                email:"kevingmail.com"
        }

        //The first instance of user.
        const Currentuser = new SessionManager(user)
        //The second instance of user
        const Currentuser2 = new SessionManager(user2)

        console.log(Currentuser.getUserData().role);
        console.log(Currentuser2.getUserData().role);

        const hpLaptop = new Laptop("2hours","2GB","1TB","17inches","black",2000);
        const acerLaptop = new Laptop("8hours","4GB","1TB","17inches","grey",1800);


        const dellDesktop = new Desktop("17inches","8GB","2TB","17","green",5000);
        const razerDesktop = new Desktop("15inches","64GB","8TB","17","blck",10000);

        const kasperskey = new Antivirus("Community","Windows 10",59.99,"K2020")

        const shoppingCart = new ShoppingCart();

        const itemWithMouse = new Mouse(hpLaptop);
       

        const item1 = new LaptopAdapter(2,hpLaptop);
        const item3 = new DesktopAdapter(5,dellDesktop)
        const item4 = new AntivirusSoftwareAdapter(4,kasperskey)

        if(Currentuser.getUserData().role === "admin"){
                shoppingCart.addItems(item3);
                shoppingCart.addItems(item1);
                shoppingCart.addItems(item4);
        
                const display = shoppingCart.showAllItems()
        
               // shoppingCart.addItems( new LaptopAdapter(10,acerLaptop));
                const printableString = shoppingCart.printItems();
                console.log(printableString)
        }else{
                console.log("create session")
        }

        const settings = new Settings();
        const settings2 = new Settings();
        // console.log(settings)
        // console.log(settings2)
       
	}
}

const main = new Main();
main.main();