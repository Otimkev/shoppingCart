const computerShop = require("./computerShop");
const shopFactory = require("./shopFactory");

class Main {
	main() {
        const shopFactory1 = new shopFactory();
        const computerShop1 = new computerShop();
        const laptop1 = shopFactory1.createLaptop;
		computerShop1.addInventory(laptop1);
		const showItems = computerShop1.showAllInventory;
        console.log(laptop1)
	}
}

const main = new Main();
main.main();