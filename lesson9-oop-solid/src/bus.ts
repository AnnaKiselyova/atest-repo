import { IVehicle } from './abstraction/vehicle';

export class Bus implements IVehicle{
    public modeTransport: string;
    public purpose: string;
    public interfaceWithGround: string | number;
    public energySource: string;
    public islicensing: boolean;
    private wheelsNumberCount: number;
    public isFlatTyre: boolean;

    public constructor(public readonly name: string, isFlatTyre:boolean)  {
        this.modeTransport = 'land transport';
        this.purpose = 'public transport';
        this.interfaceWithGround = 'wheels';
        this.energySource = 'fuel';
        this.islicensing = true;
        this.wheelsNumberCount = 6;
        this.isFlatTyre = isFlatTyre;
    }

    public getNumberWheels(): number {
        return this.wheelsNumberCount;
    }

    public getMovement(): void {
        if (!this.isFlatTyre) {
            console.log('Engine with fuel gets movement');
            return;
        } else {
            console.log('The bus cannot move');
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
