const arrX = [5, 10, 15, 20, 25, 30];
const arrY = ['animal, bird, insect, fish'];

const X = (X) => {
    if (Array.isArray(X)) {
        let Y = X.shift();
        X.forEach(e => {
            Y = Y + e;
        });
        return Y;
    };
};

console.log(X(arrX));
console.log(X(arrY));
