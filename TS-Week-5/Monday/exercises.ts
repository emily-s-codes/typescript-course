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

let myVehicle = new Vehicle(0.5, 1, 0, 'MyVehicle', 1, false)
let my2ndVehicle = new Vehicle(0.7, 1.5, 209, 'My2ndVehicle', 2, true)

function updatedDistance(kmTravelled: number, vehicle: Vehicle): number {
    return vehicle.getDistanceTravelled() + kmTravelled
}

function isAvailable(vehicle: Vehicle): boolean {
    if (vehicle.getTaken()) return false
    return true
}

console.log(updatedDistance(200, myVehicle))
console.log(updatedDistance(201, myVehicle)) // not additive, because no setter function was called so data wasn't changed
console.log(isAvailable(myVehicle))
console.log(isAvailable(my2ndVehicle))

export { }