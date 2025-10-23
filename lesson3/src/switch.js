const lesson = 3;
switch (lesson) {
    case 1: {
        console.log('Знайомство з Automation QA');
        break;
    }
    case 2: {
        console.log('Системи контролю версій. Основи роботи з git');
        break;
    }
    case 3: {
        console.log('Змінні та типи даних. Умовні конструкції');
        break;
    }
}

const season = 'autumn';

switch (season) {
    case 'spring': {
        console.log('It is spring time!');
        break;
    }
    case 'summer': {
        console.log('It is summer time!');
        break;
    }
    case 'autumn': {
        console.log('It is autumn time!');
        break;
    }
    case 'winter': {
        console.log('It is winter time!');
        break;
    }
    default: {
        console.log('Unknown season');
    }
}

const year = 2025;
switch (typeof year) {
    case 'number': {
        console.log('This is number type');
        break;
    }
    case 'string': {
        console.log('This is string type');
        break;
    }
    case 'boolean': {
        console.log('This is boolean type');
        break;
    }
    default: {
        console.log('Unknown type');
    }
}

