class computerShop {
    constructor(){
        this.inventory = [];
    }
	
	addInventory(someInventory) {
		return this.inventory.push(someInventory);
	}

	removeInventory(someInventory) {
		const index = this.inventory.indexOf(someInventory);
		return this.inventory.splice(index, 1);
	}

	showAllInventory() {
        for(let i = 0; i< this.inventory.length; i++){
            console.log(this.inventory[i])
        }
	}
}
module.exports = computerShop;
