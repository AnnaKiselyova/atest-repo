import { IVehicle } from './abstraction/vehicle';

export class Bicycle implements IVehicle{
    public modeTransport: string;
    public purpose: string;
    public interfaceWithGround: string | number;
    public energySource: string;
    public islicensing: boolean;
    private wheelsNumberCount : number;
    public isFlatTyre : boolean;

    public constructor(public readonly name: string, isFlatTyre:boolean)  {
        this.modeTransport = 'land transport';
        this.purpose = 'eco-friendly transport';
        this.interfaceWithGround = 'wheels';
        this.energySource = 'Human power';
        this.islicensing = false;
        this.wheelsNumberCount = 2;
        this.isFlatTyre = isFlatTyre;
    }

    public getNumberWheels(): number {
        return this.wheelsNumberCount;
    }

    public getMovement(): void {
        if (!this.isFlatTyre) {
            console.log('Human power gets movement');
            return;
        } else {
            console.log('the bicycle cannot move');
        }
    }

    public checkLicensing (): boolean {
        return this.islicensing;
    }

    private getLicensingLogic (): void {
        if (!this.islicensing) {
            console.log(`${this.name} need to apply the licensing`);
            return;
        }
        if (this.islicensing) {
            console.log(`${this.name} do not need to apply the licensing`);
        }
    }
};

export class electroBicycle extends Bicycle {

    public constructor(public readonly name: string, isFlatTyre:boolean)  {
        super(name, isFlatTyre);
        this.isFlatTyre = isFlatTyre;
    }

    public getNumberWheels(): number {
        return 2;
    }

    public getMovement(): void {
        if (!this.isFlatTyre) {
            console.log('Human turns it on and the vehicle can move');
            return;
        } else {
            console.log('The electric bicycle cannot move');
        }
    }

    public checkLicensing (): boolean {
        return this.islicensing;
    }
};
