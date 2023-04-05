class Vehicle {
    pricePerMinute: number;
    priceToUnlock: number;
    distanceTravelled: number;
    name: string;
    id: number;
    taken: boolean;

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean) {
        this.pricePerMinute = pricePerMinute;
        this.priceToUnlock = priceToUnlock;
        this.distanceTravelled = distanceTravelled;
        this.name = name;
        this.id = id;
        this.taken = taken
    }

    getPricePerMinute(): number {
        return this.pricePerMinute
    }
    setPricePerMinute(newPricePerMinute: number): number {
        return this.pricePerMinute = newPricePerMinute
    }
    getPriceToUnlock(): number {
        return this.priceToUnlock
    }
    setPriceToUnlock(newPriceToUnlock: number): number {
        return this.priceToUnlock = newPriceToUnlock
    }
    getDistanceTravelled(): number {
        return this.distanceTravelled
    }
    getName(): string {
        return this.name
    }
    setName(newName: string): string {
        return this.name = newName
    }
    getId(): number {
        return this.id
    }
    getTaken(): boolean {
        return this.taken
    }
}

type FuelStatus = 'full' | 'full enough' | 'nearly empty'

class Car extends Vehicle {
    fuelPercentage: number;
    kilometersLeft: number;
    brand: string

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean, fuelPercentage: number, kilometersLeft: number, brand: string) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken)
        this.fuelPercentage = fuelPercentage
        this.kilometersLeft = kilometersLeft
        this.brand = brand
    }

    getFuelPercentage(): number {
        return this.fuelPercentage
    }

    getKilometersLeft(): number {
        return this.kilometersLeft
    }

    getBrand(): string {
        return this.brand
    }
}

class Scooter extends Vehicle {
    batteryPercentage: number;
    kilometersLeft: number;
    brand: string

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean, batteryPercentage: number, kilometersLeft: number, brand: string) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken)
        this.batteryPercentage = batteryPercentage
        this.kilometersLeft = kilometersLeft
        this.brand = brand
    }

    getBatteryPercentage(): number {
        return this.batteryPercentage
    }

    getKilometersLeft(): number {
        return this.kilometersLeft
    }

    getBrand(): string {
        return this.brand
    }
}

class Bike extends Vehicle {
    brand: string;
    frameNumber: number

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean, frameNumber: number, brand: string) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken)
        this.frameNumber = frameNumber
        this.brand = brand
    }

    getFrameNumber(): number {
        return this.frameNumber
    }

    getBrand(): string {
        return this.brand
    }
}

let myVehicle = new Vehicle(0.5, 1, 0, 'MyVehicle', 1, false)
let my2ndVehicle = new Vehicle(0.7, 1.5, 209, 'My2ndVehicle', 2, true)

let myCar = new Car(0.5, 1, 0, 'MyCar', 3, false, 81, 200, 'Mazda')
let myCar2 = new Car(0.7, 1.5, 209, 'MyCar2', 4, false, 14, 200, 'Honda')
let myCar3 = new Car(0.5, 1, 287, 'MyCar3', 5, true, 18, 200, 'Toyota')

let myScooter = new Scooter(0.5, 1, 0, 'MyScooter', 6, false, 80, 300, 'vespa')
let myScooter2 = new Scooter(0.5, 1, 0, 'MyScooter2', 7, true, 80, 300, 'vespa')
let myScooter3 = new Scooter(0.5, 1, 0, 'MyScooter3', 8, false, 1, 300, 'vespa')

let myBike = new Bike(0.5, 1, 0, 'MyBike', 9, false, 9, 'FahrradManufaktur')
let myBike2 = new Bike(0.5, 1, 0, 'MyBike2', 10, false, 10, 'FahrradManufaktur')
let myBike3 = new Bike(0.5, 1, 0, 'MyBike3', 11, true, 11, 'FahrradManufaktur')

function updatedDistance(kmTravelled: number, vehicle: Vehicle): number {
    return vehicle.getDistanceTravelled() + kmTravelled
}

function isAvailable(vehicle: Vehicle): boolean | void {
    if (!vehicle.getTaken()) {
        if (vehicle instanceof Bike) {
            return true
        }
        if (vehicle instanceof Scooter) {
            if (vehicle.getBatteryPercentage() > 10) return true
            return false
        }
        if (vehicle instanceof Car) {
            if (vehicle.getFuelPercentage() > 15) return true
            return false
        }
    }
    return false
}

function getFuelStatus(getFuelPercentage: number): FuelStatus | undefined {
    if (getFuelPercentage > 80) return 'full'
    if (getFuelPercentage < 20) return 'nearly empty'
    return 'full enough'
}

let availableVehicles: Vehicle[] = []
function getAvailableVehicles(x: Vehicle[]): Vehicle[] {
    x.forEach(vehicle => {
        if (isAvailable(vehicle)) availableVehicles.push(vehicle)
    })
    return availableVehicles
}

console.log(getAvailableVehicles([myCar, myCar2, myCar3, myScooter, myScooter2, myScooter3, myBike, myBike2, myBike3]))

// console.log(getFuelStatus(myCar.fuelPercentage))
// console.log(getFuelStatus(myCar2.fuelPercentage))
// console.log(getFuelStatus(myCar3.fuelPercentage))

// console.log(updatedDistance(200, myVehicle))
// console.log(updatedDistance(201, myVehicle)) // not additive, because no setter function was called so data wasn't changed
// console.log(isAvailable(myVehicle))
// console.log(isAvailable(my2ndVehicle))
// console.log(isAvailable(myCar)) // true
// console.log(isAvailable(myCar2)) // false
// console.log(isAvailable(myCar3)) // false
// console.log(isAvailable(myScooter)) // true
// console.log(isAvailable(myScooter2)) // false
// console.log(isAvailable(myScooter3)) // false
// console.log(isAvailable(myBike)) // true
// console.log(isAvailable(myBike2)) // true
// console.log(isAvailable(myBike3)) // false


export { }