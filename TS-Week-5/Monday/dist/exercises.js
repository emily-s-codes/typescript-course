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
let myVehicle = new Vehicle(0.5, 1, 0, 'MyVehicle', 1, false);
let my2ndVehicle = new Vehicle(0.7, 1.5, 209, 'My2ndVehicle', 2, true);
function updatedDistance(kmTravelled, vehicle) {
    return vehicle.getDistanceTravelled() + kmTravelled;
}
function isAvailable(vehicle) {
    if (vehicle.getTaken())
        return false;
    return true;
}
console.log(updatedDistance(200, myVehicle));
console.log(updatedDistance(201, myVehicle)); // not additive, because no setter function was called so data wasn't changed
console.log(isAvailable(myVehicle));
console.log(isAvailable(my2ndVehicle));
//# sourceMappingURL=exercises.js.map