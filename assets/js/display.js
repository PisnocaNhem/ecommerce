const men = document.querySelector('#mens');
const women = document.querySelector('#womens');
const kid = document.querySelector('#kids');
const d1 = document.querySelector('#d-1');
const d2 = document.querySelector('#d-2');
const d3 = document.querySelector('#d-3');

d1.onclick = () => {
    d1.classList = "d-none";
    women.classList = "d-none";
    kid.classList = "d-none";
    fetch('/assets/json/banque.json')
    .then(response => response.json())
    .then(data => {
        const mens = data.gender[0];
        console.log(mens.mens)
        for (let i=0; i<mens.length; i++) {
            let card = 
            `<div class="col-12 col-lg-3">
                <div class="card">
                    <img src="${mens[i].imgSrc}" class="card-img-top" alt="${mens[i].title}">
                    <div class="card-body">
                        <h5 class="card-title">${mens[i].title}</h5>
                        <div class="d-flex">
                            <h6>${mens[i].ref}</h6>
                            <span class="category">${mens[i].category}
                        <p class="card-text">${mens[i].subTitle}</p>
                        <span class="price">${mens[i].price}</span>
                        <button class="add btn btn-primary" data-id="${mens[i].ref}">Ajouter au panier</button>
                    </div>
                </div>
            </div>`;
            men.innerHTML = men.innerHTML + card;
        }
    })
    
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    })
}

d2.onclick = () => {
    d2.classList = "d-none";
    men.classList = "d-none";
    kid.classList = "d-none";
    fetch('/assets/json/banque.json')
    .then(response => response.json())
    .then(data => {
        const womens = data.gender[1];
        for (let i=0; i<womens.length; i++) {
            let card = 
            `<div class="col-12 col-lg-3">
                <div class="card">
                    <img src="${womens[i].imgSrc}" class="card-img-top" alt="${womens[i].imgAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${womens[i].title}</h5>
                        <div class="d-flex">
                            <h6>${womens[i].ref}</h6>
                            <span class="category">${womens[i].category}
                        <p class="card-text">${womens[i].subTitle}</p>
                        <span class="price">${womens[i].price}</span>
                        <a href="#" class="add btn btn-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>`;
            women.innerHTML = women.innerHTML + card;
        }
    })
    
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    })
}

d3.onclick = () => {
    d3.classList = "d-none";
    men.classList = "d-none";
    women.classList = "d-none";
    fetch('/assets/json/banque.json')
    .then(response => response.json())
    .then(data => {
        const kids = data.gender[2];
        for (let i=0; i<kids.length; i++) {
            let card = 
            `<div class="col-12 col-lg-3">
                <div class="card">
                    <img src="${kids[i].imgSrc}" class="card-img-top" alt="${kids[i].imgAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${kids[i].title}</h5>
                        <div class="d-flex">
                            <h6>${kids[i].ref}</h6>
                            <span class="category">${kids[i].category}
                        <p class="card-text">${kids[i].subTitle}</p>
                        <span class="price">${kids[i].price}</span>
                        <a href="#" class="add btn btn-primary">Ajouter au panier</a>
                    </div>
                </div>
            </div>`;
            kid.innerHTML = kid.innerHTML + card;
        }
    })
    
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    })
}