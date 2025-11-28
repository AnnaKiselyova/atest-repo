const year = {
    winter: 'december, january, february',
    spring: 'march, april, may',
    summer: 'june, july, august',
    autumn: 'september, october, november',

    get AllMonhts(): string {
        return `${this.winter.toLocaleUpperCase()}, ${this.spring.toLocaleUpperCase()}, ${this.summer.toLocaleUpperCase()}, ${this.autumn.toLocaleUpperCase()}`;
    },

    set AllMonhts (x : string){
        const parts = x.split(',').map(p => p.trim());
        if (parts.length !== 4) {
            throw new Error('Expected 4 comma-separated parts for year setter');
        }
        this.winter = parts[0].toLocaleLowerCase();
        this.spring = parts[1].toLocaleLowerCase();
        this.summer = parts[2].toLocaleLowerCase();
        this.autumn = parts[3].toLocaleLowerCase();
    }
};

console.log(JSON.stringify(year.AllMonhts));
year.AllMonhts = 'JAN, APR, JUL, OCT';
console.log(JSON.stringify(year));


