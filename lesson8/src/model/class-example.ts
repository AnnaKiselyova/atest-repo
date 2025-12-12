export class RandomUserApi {
    public results: ResultsDto[];
    public info: string;

    public constructor ( {results, info}: {results: Record<string, unknown>[] | null; info: InfoDTO | null;} ) {
        this.results = (results || []).map( row => new ResultsDto(row) );
        this.info = info ? info.version : '';
    };
};
class ResultsDto {
    public gender: string;
    public name: NameDto;
    public nat: string;

    public constructor(row: Record<string, unknown>) {
        this.gender = row['gender'] as string;
        this.name = new NameDto(row['name'] as Record<string, unknown>);
        this.nat = row['nat'] as string;
    }
};

class NameDto {
    public title: string;
    public first: string;
    public last: string;

    public constructor(row: Record<string, unknown>) {
        this.title = row['title'] as string;
        this.first = row['first'] as string;
        this.last = row['last'] as string;
    };

    public hasFirst(): boolean {
        return !!this?.['first'];
    }
};

class InfoDTO {
    public seed    :  string;
    public results : number;
    public page    : number;
    public version : string;

    public constructor( {seed, results, page, version}: {seed: string; results: number; page: number; version: string;} ){
        this.seed = seed;
        this.results = results;
        this.page = page;
        this.version = version;
    }
};
