class software {

	constructor(operatingSystem, price, version) {
		this.operatingSystem = operatingSystem;
		this.price = price;
		this.version = version;
	}
	getCost(){
		return this.price + " Calling from abstract class!"
	}
	getCosts() {
		return this.version;
	}
}
module.exports = software;
