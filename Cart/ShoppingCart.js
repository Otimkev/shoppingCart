class ShoppingCart {
    constructor(){
        this.items = [];
    }
	
	addItems(someItem) {
		return this.items.push(someItem);
	}

	removeItem(someItem) {
		const index = this.items.indexOf(someItem);
		return this.items.splice(index, 1);
	}

	showAllItems() {
		return this.items;
	}

	printItems(){
		let string = "";
		this.items.map((item)=>{
			string+=item.toString()+"\n";
		}
		)
		return string;
	}
}
	
module.exports = ShoppingCart;
