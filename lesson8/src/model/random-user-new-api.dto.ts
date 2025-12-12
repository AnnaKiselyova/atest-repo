export interface RandomUserApiDto {
    results: ResultsDto[] | null;
    info: InfoDTO | null;
};

interface NameDto {
    title: string;
    first: string;
    last: string;
};

interface ResultsDto {
    gender: string;
    name: NameDto;
    nat: string;
};

interface InfoDTO {
    seed:  string;
    results: number;
    page: number;
    version: string;
}
