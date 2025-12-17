import { IVehicle } from './abstraction/vehicle';
import { ILuggageBox } from './abstraction/luggage-box';

//ISP
export class AddLuggageBox implements IVehicle, ILuggageBox {
    public modeTransport: string;
    public purpose: string;
    public interfaceWithGround: string | number;
    public energySource: string;
    public islicensing: boolean;
    private wheelsNumberCount: number;
    public isFlatTyre: boolean;
    public size: string;
    public shape: string;
    public color: string;
    public withKey: boolean;

    public constructor(public readonly name: string, isFlatTyre:boolean)  {
        this.modeTransport = 'land transport';
        this.purpose = 'private transport';
        this.interfaceWithGround = 'wheels';
        this.energySource = 'fuel or battery or hybrid';
        this.islicensing = true;
        this.wheelsNumberCount = 4;
        this.isFlatTyre = isFlatTyre;
        this.size = 'large';
        this.shape = 'rectangle';
        this.color = 'black';
        this.withKey = true;
    }

    public getNumberWheels(): number {
        return this.wheelsNumberCount;
    }

    public getMovement(): void {
        if (!this.isFlatTyre) {
            console.log('Engine with fuel gets movement');
            return;
        } else {
            console.log('The car cannot move');
        }
    }

    public checkLicensing (): string {
        this.getLicensingLogic();
        return `${this.name} licensing check completed.`;
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
