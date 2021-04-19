//what day it is ?
let date_ = new Date();

let url = 'https://newsapi.org/v2/everything?' +
    'q=Supermaket&' +
    'from=' + date_ +
    'sortBy=popularity&' +
    'apiKey=c9b8835b7f2c419982ddc0396b5944cc';

let req = new Request(url);

function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
}

function onJson(json) {
    //TODO FARE LA FUNZIONE CHE MI GESTISCE IL JSON DELLE NOTIZIE
    console.log(json);
}

fetch(req)
    .then(onResponse).then(onJson);