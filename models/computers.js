class computers {

	constructor(ram, hdd, screenSize, color, price) {
		this.ram = ram;
		this.hdd = hdd;
		this.screenSize = screenSize;
		this.color = color;
		this.price = price;
	}

	getRam() {
		return this.ram;
	}
}

module.exports = computers;
