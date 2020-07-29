
const Settings = require("./utils/Settings");

class Main {
	main() {
        const settings = new Settings(0.67,45,"kampala");
        console.log(settings)
	}
}

const main = new Main();
main.main();