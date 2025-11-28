const arrX: number[] = [5, 10, 15, 20, 25, 30];
const arrY: string[] = ['animal, bird, insect, fish'];

const fx = (x: number[]) : number | undefined => {
    if (Array.isArray(x) && typeof x[0] === 'number') {
        let y: number = x.shift() as number;
        x.forEach(e => {
            y = y + e;
        });
        return y;
    };
};

const fy = (x: string[]) : string | undefined => {
    if (Array.isArray(x) && typeof x[0] === 'string') {
        let y: string = x.shift() as string;
        x.forEach(e => {
            y = y + e;
        });
        return y;
    };
};

console.log(fx(arrX));
console.log(fy(arrY));
