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


    const arts = json.articles;

    const section = document.querySelector("#apiNews")

    section.classList.remove("hidden");

    for (art of arts) {

        //instantiation of the hmtl elements
        const contanier = document.createElement("div");
        const title = document.createElement("h3");
        const img = document.createElement("img");
        const description = document.createElement("p");
        const source = document.createElement("a");


        //initialization and class assignment
        title.textContent = art.title;
        img.src = art.urlToImage;
        description.textContent = art.description;
        source.href = art.url;
        source.textContent = "vai alla fonte";

        contanier.appendChild(title);
        contanier.appendChild(img);
        contanier.appendChild(description);
        contanier.appendChild(source);

        //append of the elementContainer
        section.appendChild(contanier);

        console.log(contanier);

    }

    console.log(json);
}


fetch(req)
    .then(onResponse).then(onJson);




/* FINNHUB API */

//Finance dets constructor

function FinObj(name_, logo_, url_) {
    this.name = name_;
    this.logo = logo_;
    this.url = url_;
}

//Response Management

function onResponseFH(resp) {
    return resp.json();
}


function onJsonFH(json) {

    const js = Object.entries(json);
    const fin = new FinObj(js[7][1], js[5][1], js[11][1]);

    //Creazione div container da agganciare al div container dei partner
    const divContainer = document.createElement("div");

    //Creazione elementi da agganciare al div container dei dettagli sui partner
    const name = document.createElement("h3");
    name.textContent = fin.name;

    const logo = document.createElement("img");
    logo.src = fin.logo;

    const weblink = document.createElement("a");
    weblink.href = fin.url;
    weblink.target = "_blank";

    //Agganci
    divContainer.appendChild(logo);
    divContainer.appendChild(name);
    divContainer.appendChild(weblink);

    //TODO: Inserire l'append al div che contiene i dettagli sui partner

}

function onResponseFonResponseFH(response) {
    console.log(response);
    return response;
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

    const req = new Request(url_fh);

    fetch(req).then(onResponseFonResponseFH).then(onJsonFH);

}