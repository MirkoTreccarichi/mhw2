//what day it is ?
const date_ = Date.now();


let url = 'https://newsapi.org/v2/everything?' +
    'q=slow food&' +
    'from=' + date_ + '&' +
    'language=it&' +
    'sortBy=popularity&' +
    'apiKey=c9b8835b7f2c419982ddc0396b5944cc';

let req = new Request(url);

function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
}

function onJson(json) {
    //TODO FARE LA FUNZIONE CHE MI GESTISCE IL JSON DELLE NOTIZIE


    const arts = Object.entries(json).articles;

    const section = document.querySelector("#mhw3")

    section.classList.remove("hidden");

    //TODO CICLO DI INCLUSIONE DEI DATI 
    for (art in arts) {


        //creation of the html elements


        //initialazing of the hmtl elements





        //TODO AGGIUNTA DELL'ARTICOLO

    }


    console.log(articles);

    //TODO CARICAMENTO NEL DOM

    console.log(json);
}


fetch(req)
    .then(onResponse).then(onJson);




/* FINNHUB API */

//Finance dets constructor

function findets(name_, logo_, url_) {
    this.name = name_;
    this.logo = logo_;
    this.url = url_;
}

//Response Management

function onResponseIEX(resp) {
    return resp.json();
}


function onJsonIEX(json) {

    //TODO: Inserimento Nome, Logo, WebURL
    const js = Object.entries(json);

}

//fetch

const symbs = ['', '', ''] //TODO: Mettere i simboli di mercato delle imprese (eg: AMZN, EBAY, ...)

for (let symb of symbs) {

    //fetch
    const endpoint_fh = 'https://finnhub.io/api/v1/stock/profile2';

    const apikey_fh = ''; //TODO: Inserire API-Key di finnhub.io

    const url_fh = endpoint_fh +
        '?symbol=' + symb +
        '&token=' + apikey_fh;



}