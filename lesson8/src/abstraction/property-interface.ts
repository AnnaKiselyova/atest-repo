export interface IProperty {
    area: number;
    address: string;
    priceForOneMeter: number;

    getCheckBills(): Promise<string>;
    getValue(): number;
};
