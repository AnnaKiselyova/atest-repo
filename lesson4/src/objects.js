console.log('---- Initialing object ----');
const obj = {};
obj.key1 = 'summer';
obj['key2'] = 'winter';
obj['key-3'] = 'autumn';
obj.key4 = {
    subKey1: 'march',
    subKey2: 'april',
    subKey3: 'may',
    subKey4: true,
    subKey5: []
};
console.log(obj);
console.log(JSON.stringify(obj));

console.log('--- Coping objects ----');
const wantedCopy = obj;
wantedCopy.key1 = 'summer copy';
console.log(obj, wantedCopy);

console.log('---- Single level copy----');
const singleLevelCopy = {...obj};
singleLevelCopy.key2 = 'winter copy';
singleLevelCopy.key4.subKey3 = 'may copy';
console.log(obj, singleLevelCopy);

console.log('---- Deep copy ----');
const deepCopy = structuredClone(obj);
const deepCopyWithDoubleConversion = JSON.parse(JSON.stringify(obj));
deepCopy.key4.subKey1 = 'march deep copy';
deepCopyWithDoubleConversion.key4.subKey2 = 'april deep copy with double conversion';
console.log(obj, deepCopy, deepCopyWithDoubleConversion);

console.log('---- Common used object method ----');
const objKeys = Object.keys(obj);
const objValues = Object.values(obj);
const objEntries = Object.entries(obj);
console.log(objKeys, objValues, objEntries );

console.log(Object.keys(obj.key4));

console.log('---- Adding method to object ----');
const objWithMethod = structuredClone(obj);
objWithMethod.objMethod = function() {
    console.log('objMethod');
    console.log(this);
    console.log(this.key1);
};
objWithMethod.objMethod();

console.log('----Object constructor ----');
function objectConstructor(name, property) {
    this.name = name;
    this.property = property;
}
const objFromConstructor = new objectConstructor('name', {key: 'value'});
console.log(objFromConstructor);
