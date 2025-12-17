export interface IVehicle {
    modeTransport: string;
    purpose: string;
    islicensing: boolean | string;

    getNumberWheels(): number;
    getMovement(): void;
    checkLicensing(): boolean | string;
};
