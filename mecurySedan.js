
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...
//extends the class Vehicle from Vehicle.js using the variable VehicleModule
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
//tells me if there is not enough space in the car with the #of passengers
    loadPassenger(num) {
        //takes # of passengers and compares it to # of maxPassengers
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full")
        }
    }
//tells me if the car is going to start or not based on fuel
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.")
            return this.started == true
        } else {
            console.log("no fuel")
            return this.started == false
        }
    }
//tells me if the car needs to be serviced
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService                       
        }
    }
}
//defining my "New Car"
let newCar = new Car("Mecury", "Sedan", "1965", "color", "mileage")
console.log(newCar.make)

newCar.loadPassenger(5)
newCar.start()
newCar.checkService()

console.log(newCar)