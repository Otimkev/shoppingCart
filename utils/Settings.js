class Settings {
 constructor(){
  this.exchangeRate = Math.random();
  this.vatPercentage = Math.random() 
 }
  toString(){
    return `${this.exchangeRate} ${this.vatPercentage}`
  }
}

module.exports = Settings;