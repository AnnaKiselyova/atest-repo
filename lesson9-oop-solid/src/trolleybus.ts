import {Bus} from './bus';
import { ITrolleybus } from './abstraction/itrolleybus';

//OCP
export class Trolleybus extends Bus implements ITrolleybus {
    public trolleyPoles: boolean;
    public switchDirection: boolean;

    public constructor(public readonly name: string, isFlatTyre:boolean)  {
        super (name, isFlatTyre);
        this.isFlatTyre = isFlatTyre;
        this.trolleyPoles = true;
        this.switchDirection = true;
    }

    public getMovement(): void {
        this.powerCollector();
    }

    private powerCollector(): void {
        if (!this.trolleyPoles) {
            console.log(`${this.name} is not connect with electricity`);
            return;
        } else if (this.switchDirection) {
            console.log(`${this.name} change direction`);
            return;
        } else if (this.isFlatTyre) {
            console.log(`${this.name} goes straight`);
            super.getMovement;
            return;
        } else {
            console.log(`${this.name} ,but not today`);
        }
    }


};

