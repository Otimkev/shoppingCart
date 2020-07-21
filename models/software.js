class software {

	constructor(operatingSystem, price, version) {
		this.operatingSystem = operatingSystem;
		this.price = price;
		this.version = version;
	}

	getRam() {
		return this.version;
	}
}
module.exports = software;
