console.log('start TS');

function arithAditForNumber(inputArr: number[]) : number | undefined {
    if (Array.isArray(inputArr) && typeof inputArr[0] === 'number') {
        let sum: number =  inputArr.shift() as number;
        inputArr.forEach(element => {
            sum = sum + element;
        });
        return sum;
    }
}

function arithAditForString(inputArr: string[]) : string | undefined {
    if (Array.isArray(inputArr) && typeof inputArr[0] === 'string') {
        let sum: string =  inputArr.shift() as string;
        inputArr.forEach(element => {
            sum = sum + element;
        });
        return sum;
    }
}

const arr1 = [5, 10, 15, 20, 25, 30];
const arr2 = ['animal, bird, insect, fish'];


console.log(arithAditForNumber(arr1));
console.log(arithAditForString(arr2));
