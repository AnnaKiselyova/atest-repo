console.log('----Loop from 1 to 10----');
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
    if (i === 7) {
        break;
    };
};

console.log('---- Looping through array ----');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const value of arr) {
    if (value === 5) {
        console.log('skipping index', arr.indexOf(value));
        continue;
    } else if (value === 8) {
        break;
    }
    console.log(value);
};

console.log('---- Looping through array with index ----');
for (const index in arr) {
    if (index < 5) {
        continue;
    } else if (index > 7) {
        break;
    }
    console.log(index);
};

console.log(arr.indexOf(8), arr.indexOf(true), arr.includes(1), arr.includes(12) );


console.log('---- Iterator loop----');
let iterator = -1;
console.log(iterator);
while (iterator < 10) {
    iterator++;
    if (iterator === 2) {
        continue;
    } else if (iterator === 7) {
        break;
    }
    console.log(iterator);
}

console.log('----ForEach loop ----');
const outerObj = [ ];
arr.forEach((value, index) => {
    if (index < 5) {
        return;
    }
    outerObj.push(value);
    console.log([index, value]);
});
console.log(outerObj);

console.log('---- Map and Filter ----');
const map = arr.map((value, index) => {
    if (index < 5) {
        return value;
    }
}).filter((value) => value );
console.log(map);


console.log('----Loop from 100 to 0----');

for (let i = 100; i >= 0; i -= 10) {
    if (i === 60) {
        continue;
    }
    console.log(i);
    if (i === 20) {
        break;
    };
};

console.log('---- Looping through array 100 ----');
const arr1 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
for (const value of arr1) {
    if (value === 50) {
        console.log('skipping index', arr1.indexOf(value));
        continue;
    } else if (value === 30) {
        break;
    }
    console.log(value);
};

console.log('---- Looping through array with index ----');
for (const index in arr1) {
    if (index > 70) {
        continue;
    } else if (index < 30) {
        break;
    }
    console.log(index);
};

console.log(arr1.indexOf(80), arr1.indexOf(18), arr1.includes(10), arr1.includes(12) );


console.log('---- Iterator1 loop ----');
let iterator1 = 100;
while (iterator1 >= 0) {
    iterator1 -= 10;
    if (iterator1 === 70) {
        continue;
    } else if (iterator1 === 20) {
        break;
    }
    console.log(iterator1);
}

console.log('----ForEach loop ----');
const outerObj1 = [ ];
arr.forEach((value, index) => {
    if (index < 40) {
        return;
    }
    outerObj1.push(value);
    console.log([index, value]);
});
console.log(outerObj);

console.log('---- Map and Filter ----');
const map1 = arr.map((value, index) => {
    if (index >= 3) {
        return value;
    }
}).filter((value) => value );
console.log(map1);
