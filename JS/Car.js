class Car {
  constructor(license, driver, passenger) {
    this.license = license;
    this.driver = driver;
    this.passenger = passenger;
  }
  printDataCar() {
    console.log(`Name driver: ${this.driver.name}, License: ${this.license}, Driver Document: ${this.driver.document}, Passenger: ${this.passenger}`)
  }
}

module.exports = Car