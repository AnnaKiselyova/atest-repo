console.log('---- Initializing object ----');
const year = {
    winter: 'december, january, february',
    spring: 'march, april, may',
    summer: 'june, july, august',
    autumn: 'september, october, november',

    get season() {
        return this.winter.toLocaleUpperCase();
    },
    set season(value) {
        this.winter = value.toLocaleLowerCase();
    }
};

console.log(year);
console.log(JSON.stringify(year));
