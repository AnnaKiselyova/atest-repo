async function getData() {
    const response = await fetch('https://randomuser.me/api/');
    const json = await response.json();

    return json;
}

(async() => {
    console.log('--------------------Success getting response-------------------------------');
    const response = await getData();
    console.log(response);
    console.log('trying to process our JSON');
})();

