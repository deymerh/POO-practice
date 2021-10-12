const Car = require('./Car.js')
const Account = require('./Account.js')
const UberX = require('./UberX')

let car = new Car("AXN5SQM0", new Account("Deymer", "123456"))
car.passenger = 4
car.printDataCar()

let uberX = new UberX('X1234', new Account('Yo', 'Apellido de yo'), 'MAZDA', 'SPARK-MAZDA')
uberX.passenger = 8
uberX.printDataCar()