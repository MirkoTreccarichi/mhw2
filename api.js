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



    }

    console.log(json);
}


fetch(req).then(onResponse).then(onJson);




/* FINNHUB API */

//Finance dets constructor

function FinHubObj(name_, logo_, url_) {
    this.name = name_;
    this.logo = logo_;
    this.url = url_;
}

//Response Management

function onResponseFinhub(resp) {
    return resp.json();
}


function onJsonFH(json) {

    const js = Object.entries(json);
    const finhub = new FinHubObj(js[7][1], js[5][1], js[11][1]);

    const container = document.createElement("div");
    const name = document.createElement("h3");
    const logo = document.createElement("img");
    const weblink = document.createElement("a");

    name.textContent = finhub.name;
    logo.src = finhub.logo;

    weblink.href = finhub.url;
    weblink.target = "_blank";
    weblink.textContent = "Link";


    container.appendChild(logo);
    container.appendChild(name);
    container.appendChild(weblink);

    console.log(container);

    //TODO: Inserire l'append al div che contiene i dettagli sui partner

}

function onResponseFonResponseFH(response) {
    console.log(response);
    return response;
}
//fetch

const symbs = ['JNJ', 'PG', 'CPR']

for (let symb of symbs) {

    //fetch
    const endpoint_fh = 'https://finnhub.io/api/v1/stock/profile2';

    const apikey_fh = 'c1vetqqad3ibv04ba3g0';

    const url_fh = endpoint_fh +
        '?symbol=' + symb +
        '&token=' + apikey_fh;

    const req = new Request(url_fh);

    fetch(req).then(onResponseFonResponseFH).then(onJsonFH);

}