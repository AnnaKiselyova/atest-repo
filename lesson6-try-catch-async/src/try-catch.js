
const badURL = 'https://randomuser.me/tttapi/';
const goodURL = 'https://randomuser.me/api/';

function getData( a, b) {
    return fetch(a)
        .then((response) => {
            console.log('--Trying getting response---URL:' + a);
            return response.json();
        })
        .then((json) => {
            console.log('--calling process data(json)-----URL:' + a);
            processData(json);
        })
        .catch(() => {
            console.log('--error has happened---URL:' + a);
            console.log('--Swithing---URL:' + b);
            getData( b, null);
        });
}

function processData(json) {
    console.log('trying to process our JSON');
    console.log(json);
}

getData(badURL, goodURL);
