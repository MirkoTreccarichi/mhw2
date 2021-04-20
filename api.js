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

//Article constructor
function article(title_, description_, content_, img_) {
    this.title = title_;
    this.description = description_;
    this.content = content_;
    this.img = img_;
}

function onJson(json) {
    //TODO FARE LA FUNZIONE CHE MI GESTISCE IL JSON DELLE NOTIZIE
    let articles = {};



    const arts = Object.entries(json).articles;


    //TODO CICLO DI INCLUSIONE DEI DATI 
    for (art in arts) {
        const article = {};

        const title = "",
            description = "",
            content = "",
            img = "";

        title = art.title;
        description = art.description;
        content = art.content;
        img = art.urlToImage;

        article = new article(title, description, content, img);

        articles.push(article);
    }
    console.log("inclusura dei dati completata");
    //TODO AGGIUNTA DELL'ARTICOLO
    console.log(articles);

    //TODO CARICAMENTO NEL DOM

    console.log(json);
}

console.log("ciaooooooooooooooooooooooooooooooooooooooooo");
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