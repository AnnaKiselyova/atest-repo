import { RandomUserApiDto, RandomUserApi } from './model/index';

async function getRandomUser(): Promise<RandomUserApiDto> {
    const response = (await fetch('https://randomuser.me/api/?inc=gender,name,nat'));
    const json = await response.json();
    return json as RandomUserApiDto;
};


async function getRandomUserObjectWithClass(): Promise<RandomUserApi> {
    const response = (await fetch('https://randomuser.me/api/?inc=gender,name,nat'));
    const json = await response.json();
    return new RandomUserApi({ results: json.results, info: json.info });
};

async function getRandomUserObjectWithClassWithoutInstance(): Promise<RandomUserApi> {
    const response = (await fetch('https://randomuser.me/api/?inc=gender,name,nat'));
    const json = await response.json();
    return json as RandomUserApi;
}

(async () => {
    const apiNames = await getRandomUser();
    console.log('Serialized JSON to DTO:', apiNames);
    const nonNullApiNames = apiNames.results?.filter((apiName) => apiName != null);
    console.log('Filtered non-null API Names:', nonNullApiNames);
    const namesWithTitle = nonNullApiNames?.filter((apiName) => apiName.name.title != null).map((apiName) => apiName.name.title);
    console.log('Names with Title:', namesWithTitle);

    const apiObjectWithClass = await getRandomUserObjectWithClass();
    console.log('Serialized JSON to Class Object:', apiObjectWithClass);
    const filteredObjects = apiObjectWithClass.results.filter((user) => user.name.hasFirst);
    console.log ('Filtered first:', filteredObjects);

    const apiObjectWithClass1 = await getRandomUserObjectWithClassWithoutInstance();
    console.log('Serialized JSON to Class Object-----------------:', apiObjectWithClass1);
    const filteredObjects1 = apiObjectWithClass1.results.filter((user) => user.name.first);
    console.log ('Filtered first:', filteredObjects1[0].name.first);
}) ();
