export interface ILuggageBox {
    size: string;
    shape: string;
    color: string;
    withKey: boolean;
    checkLicensing (): string;
};
