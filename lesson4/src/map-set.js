const set = new Set();
set.add('year');
set.add('month');
set.has('day') ? set.delete('day') : set.add('days');
const entries = set.entries();
console.log(entries, Array.from(entries));

// get set values
const values = set.values();
console.log(values, Array.from(values));

const map = new Map();
map.set('season1', 'winter');
map.set('season2', 'summer');
map.set('season3', 'autumn');
map.has('season4') ? map.delete('season4') : map.set('season4', { 1: 'march', 2: 'april', 3: 'may' });
if (!map.has('season')) {
    map.set('season5', ['june', 'july', 'august']);
}
console.log(map);
const mapEntries = map.entries();
console.log(mapEntries, Array.from(mapEntries));
const sameValues = map.get('season4');
console.log(sameValues);
const keys = Array.from(map.keys());
console.log(keys, map.keys());


