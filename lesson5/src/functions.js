console.log('start');

function arithAdit(inputArr) {
    if (Array.isArray(inputArr)) {
        let sum = inputArr.shift();
        inputArr.forEach(element => {
            sum = sum + element;
        });
        return sum;
    }
}

const arr1 = [5, 10, 15, 20, 25, 30];
const arr2 = ['animal, bird, insect, fish'];


console.log(arithAdit(arr1));
console.log(arithAdit(arr2));


