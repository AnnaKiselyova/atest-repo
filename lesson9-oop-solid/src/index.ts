import {IVehicle} from './abstraction/vehicle';
import { Bicycle } from './bicycle';
import {Car} from './car';
import { Bus } from './bus';
import {Trolleybus} from './trolleybus';
import { ITrolleybus } from './abstraction/itrolleybus';
import { electroBicycle } from './bicycle';
import { AddLuggageBox } from './add-luggage-box';
import { ILuggageBox } from './abstraction/luggage-box';

class User{
    public constructor(public readonly name: string)  {}

    public commuteToHome(transport:IVehicle): void {
        console.log(transport.modeTransport);
        console.log(transport.purpose);
        console.log(transport.islicensing);
        console.log(transport.getNumberWheels());
        transport.getMovement();
        transport.checkLicensing();
    }

    public ableToImpactThis(user:ITrolleybus): void {
        user.trolleyPoles = true;
        user.switchDirection = true;
    }

    public getLockLuggageBox (user:ILuggageBox): void {
        if (user.withKey) {
            console.log(`${this.name} Box is locked`);;
        } else {
            console.log(`${this.name} Box is not locked`);
        }
    }
};

//DIP
class VehicleShop {
    public get vehicle(): IVehicle[] {
        return this._vehicle;
    }

    public constructor(private _vehicle: IVehicle[] = [])  {}

    public testVehicle(vehicle:IVehicle): void {
        vehicle.modeTransport;
        vehicle.purpose;
        vehicle.islicensing;
        vehicle.getNumberWheels();
        vehicle.getMovement();
        vehicle.checkLicensing();
    }

    public affordToBuyThis(vehicle: IVehicle): void {
        this._vehicle.push(vehicle);
    }

    public sellVehicle (vehicle: IVehicle): void {
        if (!this._vehicle.includes(vehicle)) {
            return;
            this._vehicle.splice(this._vehicle.indexOf(vehicle), 1);
        }
    }
};

const user = new User('The user');
const tCar = new Car('My car', false);
const tBicycle = new Bicycle('My bicycle', true);
const tBus = new Bus('I like public transport', false );
const eTrolleybus = new Trolleybus('I like eco-friendly public transport', true);
const eBicycle = new electroBicycle('My electro bicycle', false);
const CarWithLuggageBox = new AddLuggageBox ('My luggage', false);


console.log('________________________Car_______________________');
user.commuteToHome(tCar);
// a few moments later
console.log('______________________Bicycle_________________________');
user.commuteToHome(tBicycle);
// a few moments later
console.log('_______________________Bus________________________');
user.commuteToHome(tBus);
// a few moments later
console.log('_______________________Trolleybus________________________');
user.commuteToHome(eTrolleybus);
// a few moments later
// LSP
console.log('_______________________Electro Bicycle________________________');
user.commuteToHome(eBicycle);
// ISP
console.log('_______________________CarWithLuggageBox__________________');
user.getLockLuggageBox(CarWithLuggageBox);
console.log('_______________________VehicleShop__________________');
const vehicleShop = new VehicleShop( [tBicycle, tCar, eBicycle]);
vehicleShop.testVehicle(tBicycle);
vehicleShop.testVehicle(tCar);
vehicleShop.testVehicle(eBicycle);
console.log(vehicleShop);
