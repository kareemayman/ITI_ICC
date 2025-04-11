function Vehicle(speed, color) {
    if (typeof speed !== 'number' || typeof color !== 'number') {
        throw new Error('Invalid arguments');
    }

    Object.defineProperties(this, {
        speed: {
            value: speed,
        },
        color: {
            value: color,
        },
    });
}

Object.defineProperties(Vehicle.prototype, {
    toString: {
        value: function () {
            return `Vehicle, speed: ${this.speed}, color: ${this.color}`;
        },
    },
    valueOf: {
        value: function () {
            return this.speed;
        },
    },
    turnLeft: {
        value: function () {
            console.log('Turning left');
        },
    },
    turnRight: {
        value: function () {
            console.log('Turning right');
        },
    },
    start: {
        value: function () {
            console.log('Starting');
        },
    },
    stop: {
        value: function () {
            console.log('Stopping');
        },
    },
    goBackwards: {
        value: function (speed, acc) {
            console.log('Going backwards');
        },
    },
    goForwards: {
        value: function (speed, acc) {
            console.log('Going forwards');
        },
    },
})
let vehicle = new Vehicle(10, 5);
console.log(vehicle)
console.log(vehicle.toString())

function Bicycle(speed, color) {

    Vehicle.call(this, speed, color);

    Object.defineProperty(this, 'ringbell', {
        value: function () {
            console.log('Ring ring!');
        },
    })
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

let bike = new Bicycle(15, 5);
console.log(bike)
bike.ringbell()

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {

    if (typeof sizeOfEngine !== 'number' || typeof licensePlate !== 'string') {
        throw new Error('Invalid arguments');
    }

    Vehicle.call(this, speed, color);   

    Object.defineProperties(this, {
        sizeOfEngine: {
            value: sizeOfEngine,
        },
        licensePlate: {
            value: licensePlate,
        },
    });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

Object.defineProperties(MotorVehicle.prototype, {
    getSizeOfEngine: {
        value: function () {
            console.log('size of engine')
        },
    },
    getLicensePlate: {
        value: function () {
            console.log('license plate')
        },
    },
})

let motorVehicle = new MotorVehicle(20, 5, 1000, 'ABC123');
console.log(motorVehicle)
motorVehicle.getSizeOfEngine()

function Car(speed, color, sizeOfEngine, licensePlate, numOfDoors, numWheels, Weight) {

    if (typeof numOfDoors !== 'number' || typeof numWheels !== 'number' || typeof Weight !== 'number') {
        throw new Error('Invalid arguments');
    }

    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

    Object.defineProperties(this, {
        numOfDoors: {
            value: numOfDoors,
        },
        numWheels: {
            value: numWheels,
        },
        Weight: {
            value: Weight,
        },
    });
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Object.defineProperties(Car.prototype, {
    switchOnAirConditioning: {
        value: function () {
            console.log('Air conditioning switched on');
        },
    },
    getNumberOfDoors: {
        value: function () {
            console.log('Number of doors');
        },
    },
})

let car = new Car(30, 5, 2000, 'XYZ789', 4, 4, 1500);
console.log(car)
car.switchOnAirConditioning()
console.log(car.numOfDoors)

function Truck(speed, color, sizeOfEngine, licensePlate, loadCapacity, numWheels, Weight) {

    if (typeof loadCapacity !== 'number' || typeof numWheels !== 'number' || typeof Weight !== 'number') {
        throw new Error('Invalid arguments');
    }

    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

    Object.defineProperties(this, {
        loadCapacity: {
            value: loadCapacity,
        },
        numWheels: {
            value: numWheels,
        },
        Weight: {
            value: Weight,
        },
    });
}

Truck.prototype = Object.create(MotorVehicle.prototype);
Truck.prototype.constructor = Truck;

Object.defineProperties(Truck.prototype, {
    lowerLoad: {
        value: function () {
            console.log('Lowering load');
        },
    },
    raiseLoad: {
        value: function () {
            console.log('Raising load');
        },
    },
})

let truck = new Truck(40, 5, 3000, 'LMN456', 10000, 6, 5000);
console.log(truck)
truck.lowerLoad()