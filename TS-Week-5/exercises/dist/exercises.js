"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken) {
        this.pricePerMinute = pricePerMinute;
        this.priceToUnlock = priceToUnlock;
        this.distanceTravelled = distanceTravelled;
        this.name = name;
        this.id = id;
        this.taken = taken;
    }
    getPricePerMinute() {
        return this.pricePerMinute;
    }
    setPricePerMinute(newPricePerMinute) {
        return this.pricePerMinute = newPricePerMinute;
    }
    getPriceToUnlock() {
        return this.priceToUnlock;
    }
    setPriceToUnlock(newPriceToUnlock) {
        return this.priceToUnlock = newPriceToUnlock;
    }
    getDistanceTravelled() {
        return this.distanceTravelled;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        return this.name = newName;
    }
    getId() {
        return this.id;
    }
    getTaken() {
        return this.taken;
    }
}
class Car extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, fuelPercentage, kilometersLeft, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.fuelPercentage = fuelPercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    getFuelPercentage() {
        return this.fuelPercentage;
    }
    getKilometersLeft() {
        return this.kilometersLeft;
    }
    getBrand() {
        return this.brand;
    }
}
class Scooter extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, batteryPercentage, kilometersLeft, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.batteryPercentage = batteryPercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    getBatteryPercentage() {
        return this.batteryPercentage;
    }
    getKilometersLeft() {
        return this.kilometersLeft;
    }
    getBrand() {
        return this.brand;
    }
}
class Bike extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, frameNumber, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.frameNumber = frameNumber;
        this.brand = brand;
    }
    getFrameNumber() {
        return this.frameNumber;
    }
    getBrand() {
        return this.brand;
    }
}
let myVehicle = new Vehicle(0.5, 1, 0, 'MyVehicle', 1, false);
let my2ndVehicle = new Vehicle(0.7, 1.5, 209, 'My2ndVehicle', 2, true);
let myCar = new Car(0.5, 1, 0, 'MyCar', 3, false, 81, 200, 'Mazda');
let myCar2 = new Car(0.7, 1.5, 209, 'MyCar2', 4, false, 14, 200, 'Honda');
let myCar3 = new Car(0.5, 1, 287, 'MyCar3', 5, true, 18, 200, 'Toyota');
let myScooter = new Scooter(0.5, 1, 0, 'MyScooter', 6, false, 80, 300, 'vespa');
let myScooter2 = new Scooter(0.5, 1, 0, 'MyScooter2', 7, true, 80, 300, 'vespa');
let myScooter3 = new Scooter(0.5, 1, 0, 'MyScooter3', 8, false, 1, 300, 'vespa');
let myBike = new Bike(0.5, 1, 0, 'MyBike', 9, false, 9, 'FahrradManufaktur');
let myBike2 = new Bike(0.5, 1, 0, 'MyBike2', 10, false, 10, 'FahrradManufaktur');
let myBike3 = new Bike(0.5, 1, 0, 'MyBike3', 11, true, 11, 'FahrradManufaktur');
function updatedDistance(kmTravelled, vehicle) {
    return vehicle.getDistanceTravelled() + kmTravelled;
}
function isAvailable(vehicle) {
    if (!vehicle.getTaken()) {
        if (vehicle instanceof Bike) {
            return true;
        }
        if (vehicle instanceof Scooter) {
            if (vehicle.getBatteryPercentage() > 10)
                return true;
            return false;
        }
        if (vehicle instanceof Car) {
            if (vehicle.getFuelPercentage() > 15)
                return true;
            return false;
        }
    }
    return false;
}
function getFuelStatus(getFuelPercentage) {
    if (getFuelPercentage > 80)
        return 'full';
    if (getFuelPercentage < 20)
        return 'nearly empty';
    return 'full enough';
}
let availableVehicles = [];
function getAvailableVehicles(x) {
    x.forEach(vehicle => {
        if (isAvailable(vehicle))
            availableVehicles.push(vehicle);
    });
    return availableVehicles;
}
console.log(getAvailableVehicles([myCar, myCar2, myCar3, myScooter, myScooter2, myScooter3, myBike, myBike2, myBike3]));
//# sourceMappingURL=exercises.js.map