// Fonction d'Affichage:
const men = document.querySelector('#mens');
const men2 = document.querySelector('#mens2');
const women = document.querySelector('#womens');
const women2 = document.querySelector('#womens2');
const kid = document.querySelector('#kids');
const kid2 = document.querySelector('#kids2');
const display = document.querySelectorAll('.display');
const d1 = document.querySelectorAll('.d-1');
const d2 = document.querySelectorAll('.d-2');
const d3 = document.querySelectorAll('.d-3');

const pushCard = (product, i) => {
    let card =
    `<div class="col-12 col-lg-3">
        <div class="card">
            <img src="${product[i].imgSrc}" class="card-img-top" alt="${product[i].title}">
            <div class="card-body">
                <h5 class="card-title">${product[i].title}</h5>
                <div class="d-flex">
                    <h6>${product[i].ref}</h6>
                    <span class="category">${product[i].category}
                <p class="card-text">${product[i].subTitle}</p>
                <span class="price">${product[i].price}€</span>
                <button class="add btn btn-primary" data-ref="${product[i].ref}">Ajouter au panier</button>
            </div>
        </div>
    </div>`;
    return card;
}

fetch('/assets/json/banque.json')
    .then(response => response.json())
    .then(data => {
        display.forEach(element => {
            // Chargement d'une section.
            element.onclick = (event) => {
                switch (event.target.id) {
                    case 'd-1': {
                        men.classList.remove('d-none')
                        women.classList.add('d-none');
                        kid.classList.add('d-none');
                        product = data.gender[0];
                        men2.innerHTML = "";
                        for (let i = 0; i < product.length; i++) {
                            let card = pushCard(product, i);
                            men2.innerHTML = men2.innerHTML + card;
                        }
                    };
                        break;
                    case 'd-2': {
                        men.classList.add('d-none')
                        women.classList.remove('d-none');
                        kid.classList.add('d-none');
                        product = data.gender[1];
                        women2.innerHTML = "";
                        for (let i = 0; i < product.length; i++) {
                            let card = pushCard(product, i);
                            women2.innerHTML = women2.innerHTML + card;
                        }
                    };
                        break;
                    case 'd-3': {
                        men.classList.add('d-none')
                        women.classList.add('d-none');
                        kid.classList.remove('d-none');
                        product = data.gender[2];
                        kid2.innerHTML = "";
                        for (let i = 0; i < product.length; i++) {
                            let card = pushCard(product, i);
                            kid2.innerHTML = kid2.innerHTML + card;
                        }
                    }
                }
                // Au clic sur un bouton "Ajouter au panier".
                const add = document.querySelectorAll('.add');
                var refArray = [];
                add.forEach(element => {
                    element.onclick = (event) => {
                        if (!localStorage.getItem('refLS')) {
                            refArray.push(event.target.dataset.ref);
                            localStorage.setItem('refLS', JSON.stringify(refArray));
                        } else {
                            refArray = JSON.parse(localStorage.getItem('refLS'));
                            refArray.push(event.target.dataset.ref);
                            localStorage.setItem('refLS', JSON.stringify(refArray));
                        }
                    }
                })
            }
        })   
    })

    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    })
// Fin Fonction d'Affichage

// Ajouter un produit au Panier:


// Fin Ajouter un produit au Panier

// Display Panier:

// Fin Display Panier