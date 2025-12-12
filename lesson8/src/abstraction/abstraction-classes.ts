import { IProperty } from './property-interface';

export abstract class AbstractProperty  implements IProperty {
    public area: number;
    public address: string;
    public priceForOneMeter: number;

    public constructor(area: number, address: string, priceForOneMeter: number) {
        if ([area, priceForOneMeter].every(value => value <= 0)) {
            throw new Error('Area and priceForOneMeter must be greater than 0');
        }
        this.area = area;
        this.address = address;
        this.priceForOneMeter = priceForOneMeter;
    }
    public async getCheckBills(): Promise<string> {
        const response = await fetch('https://yasno.ua.checkaddress/');
        const json = await response.json();
        const addresses = (json as Record<string, unknown>[]).map((row) => row.address ?? JSON.stringify(row));
        return addresses.join(', ');
    };
    public getValue(): number{
        return (this.area * this.priceForOneMeter);
    };
};

export class House extends AbstractProperty {
    public area: number;
    public address: string;
    public priceForOneMeter: number;

    public constructor(area: number, address: string, priceForOneMeter: number) {
        super( area, address, priceForOneMeter);
        if ([area, priceForOneMeter].some(value => value <= 0)) {
            throw new Error('Area and priceForOneMeter must be greater than 0');
        }
        this.area = area;
        this.address = address;
        this.priceForOneMeter = priceForOneMeter;
    }

    public getValue(): number {
        return this.area * this.priceForOneMeter;
    }
};

const x = new House( 2020, 'Brigton Beach 1213', 1000);
console.log('Address:', x.address);
console.log('Value:', x.getValue());
