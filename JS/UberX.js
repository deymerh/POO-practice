const Car = require('./Car')

class UberX extends Car {
  constructor(licese, driver, brand, model) {
    super(licese, driver)
    this.brand = brand
    this.model = model
  }
}

module.exports = UberX