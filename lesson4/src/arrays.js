console.log('---- Creating and manipulating string arrays ----');
const arr = [];
arr.push('January');
arr.push('february');
arr.push('march');
arr.push('april');

console.log(arr, arr.length);
console.log(arr.length);

console.log(arr[0], arr[2]);

console.log('---- Modifying array element ----');
arr[1] = 'month2';
console.log(arr, arr.length);

console.log('---- Removing element from the end of array ----');
const element = arr.pop();
console.log(element, arr, arr.length);

console.log('---- Adding element at the end of array ----');
const element1 = arr.push('season');
console.log(element1, arr, arr.length);

console.log('---- Removing element from the beginning of array ----');
const element3 = arr.shift();
console.log(element3, arr,  arr.length);

console.log('---- Adding element at the beginning of array ----');
const element4 = arr.unshift('year');
console.log(element4, arr, arr.length);

arr.push('april', 'may', 'june');
arr.push('july', 'august', 'september');
arr.push('october', 'november', 'december');
arr.push(['Q1', 'Q2', 'Q3', 'Q4']);
arr.push('year');
console.log('----Filtering and finding in array----');
const filteredArr = arr.filter((item) => typeof item === 'string');
const foundElement = arr.find((item) => typeof item === 'string');
console.log(filteredArr, foundElement);


console.log('---- Creating and manipulating number arrays ----');
const arr1 = [];
arr1.push(10);
arr1.push(11);
arr1.push(12);
arr1.push(13);

console.log(arr1, arr1.length);
console.log(arr1.length);

console.log(arr1[0], arr1[2]);

console.log('---- Modifying array element ----');
arr1[1] = 21;
console.log(arr1, arr1.length);

console.log('---- Removing element from the end of array ----');
const element11 = arr1.pop();
console.log(element11, arr1, arr1.length);

console.log('---- Adding element at the end of array ----');
const element12 = arr1.push(30);
console.log(element12, arr1, arr1.length);

console.log('---- Removing element from the beginning of array ----');
const element13 = arr1.shift();
console.log(element13, arr1,  arr1.length);

console.log('---- Adding element at the beginning of array ----');
const element14 = arr1.unshift(50);
console.log(element14, arr1, arr1.length);

arr1.push(4, 5, 6);
arr1.push(44, 55, 66);
arr1.push(74, 85, 96);
arr1.push([100, 200, 300, 400]);
arr1.push(1000);
console.log('----Filtering and finding in array----');
const filteredArr1 = arr1.filter((item) => typeof item === 'number');
const foundElement1 = arr1.find((item) => typeof item === 'number');
console.log(filteredArr1, foundElement1);


console.log('---- Creating and manipulating boolean arrays ----');
const arr2 = [];
arr2.push(true);
arr2.push(false);
arr2.push(false);
arr2.push(true);

console.log(arr2, filteredArr.length);
console.log(arr2.length);

console.log(arr2[0], arr2[2]);

console.log('---- Modifying array element ----');
arr2[1] = true;
console.log(arr2, arr2.length);

console.log('---- Removing element from the end of array ----');
const element21 = arr2.pop();
console.log(element21, arr2, arr2.length);

console.log('---- Adding element at the end of array ----');
const element22 = arr2.push(true);
console.log(element22, arr2, arr2.length);

console.log('---- Removing element from the beginning of array ----');
const element23 = arr2.shift();
console.log(element23, arr2,  arr2.length);

console.log('---- Adding element at the beginning of array ----');
const element24 = arr2.unshift(false);
console.log(element24, arr2, arr2.length);

arr2.push(true, true, true);
arr2.push(false, false, false);
arr2.push(true, false, true);
arr2.push(false, true, false);
console.log('----Filtering and finding in array----');
const filteredArr2 = arr2.filter((item) => typeof item === 'boolean');
const foundElement2 = arr2.find((item) => typeof item === 'boolean');
console.log(filteredArr2, foundElement2);


console.log('---- Creating and manipulating any arrays ----');
const arr3 = [];
arr3.push(1);
arr3.push('february');
arr3.push('march');
arr3.push(true);

console.log(arr3, arr3.length);
console.log(arr3.length);

console.log(arr3[0], arr3[2]);

console.log('---- Modifying array element ----');
arr3[1] = 'month2';
console.log(arr3, arr3.length);

console.log('---- Removing element from the end of array ----');
const element30 = arr3.pop();
console.log(element30, arr3, arr3.length);

console.log('---- Adding element at the end of array ----');
const element31 = arr3.push('season');
console.log(element31, arr3, arr3.length);

console.log('---- Removing element from the beginning of array ----');
const element32 = arr3.shift();
console.log(element32, arr3,  arr3.length);

console.log('---- Adding element at the beginning of array ----');
const element33 = arr3.unshift('year');
console.log(element33, arr3, arr3.length);

arr3.push(4, 5, 6);
arr3.push('july', 'august', 'september');
arr3.push('october', 'november', 'december');
arr3.push(['Q1', 'Q2', 'Q3', 'Q4']);
arr3.push(true);
console.log('----Filtering and finding in array----');
const filteredArr3 = arr3.filter((item) => typeof item === 'string');
const foundElement3 = arr3.find((item) => typeof item === 'string');
console.log(filteredArr3, foundElement3);

console.log('---- Sorting array ----');
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].sort((a, b) => b - a);
console.log(sortedArray);

const sortedArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].sort((a, b) => a - b);
console.log(sortedArray1);

console.log('----');
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((acc, item) => acc + item, 0);
console.log(sum);
