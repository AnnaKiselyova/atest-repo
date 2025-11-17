function getData() {
    return fetch('https://randomuser.me/api/')
        .then((response) => {
            console.log('--------------------Success getting response-------------------------------');
            return response.json();
        })
        .then((json) => {
            console.log('--------calling process data(json)-------');
            processData(json);
        })
        .catch((e) => {
            console.log('-----error has happened-----');
            console.log(e);
        });
}

function processData(json) {
    console.log('trying to process our JSON');
    console.log(json);
}

getData();
