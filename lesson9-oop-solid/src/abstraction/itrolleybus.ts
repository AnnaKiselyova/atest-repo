import { IVehicle } from './vehicle';
export interface ITrolleybus extends IVehicle {
    modeTransport: string;
    purpose: string;
    islicensing: boolean | string;
    trolleyPoles: boolean;
    switchDirection: boolean;

    getNumberWheels(): number;
    getMovement(): void;
    checkLicensing(): boolean | string;
};
