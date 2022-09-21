class Vehicle {
    constructor(plateNumber, brand) {
        this.plateNumber = plateNumber;
        this.brand = brand;
    }
}

class TwoWheelerVehicle extends Vehicle {
    constructor(plateNumber, brand) {
        super(plateNumber, brand);
        this.numberOfWheels = 2;
    }
}

class FourWheelerVehicle extends Vehicle {
    constructor(plateNumber, brand) {
        super(plateNumber, brand);
        this.numberOfWheels = 4;
    }
}

const vehicle = new Vehicle('yeo87i', 'ford');
console.log(vehicle.plateNumber);

const twoWheeler = new TwoWheelerVehicle('ola', 'mit');
console.log(twoWheeler.numberOfWheels);

const fourWheeler = new FourWheelerVehicle('gen', 'toy');
console.log(fourWheeler.numberOfWheels);