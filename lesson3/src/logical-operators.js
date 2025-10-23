const a = 1000;
const b = '300';
const c = 301;
const d = undefined;

console.log(c < b);

console.log(a > b && b >= c);
console.log(a < b && b >= c);

console.log(a > b || b >= c);
console.log(a < b || b >= c);
console.log(a < b || b < c);

//Logical NOT
console.log(!(a > b));
console.log(!(a < b));
console.log(!(b >= c));

const cat = 'notCat';
console.log(cat);
console.log(cat == 'lion');
console.log(!(cat == 'lion'));
console.log(!(cat === 'lion'));
console.log(!(cat !== 'lion'));

const f1 = d ?? 13;
console.log(f1);
const f5 = d ?? '2025 year';
console.log(f5);


