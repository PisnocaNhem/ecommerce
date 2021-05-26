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
        <div class="imgTest"> <img src="${product[i].imgSrc}" class="card-img-top" alt="${product[i].title}"></div>
            <div class="card-body">
                <h5 class="card-title">${product[i].title}</h5>
                <div><span class="price">${product[i].price}€</span></div>
                <button class="add btn btn-primary" data-ref="${product[i].ref}">Ajouter au panier</button>
            
        </div>
    </div>`;
    return card;
}

const addQtyToRef = (ref, count) => {
    let refArray = JSON.parse(localStorage.getItem('refLS'));
    refArray.forEach((element) => {
        if(element[0] == ref){
            element[1]++;
            count.forEach(element2 => {
                element2.innerHTML = element[1];
            })
        }
    });
    localStorage.setItem('refLS', JSON.stringify(refArray));
};

const minQtyToRef = (ref, count) => {
    let refArray = JSON.parse(localStorage.getItem('refLS'));
    refArray.forEach((element) => {
        if(element[0] == ref){
            element[1]--;
            count.forEach(element2 => {
                element2.innerHTML = element[1];
            })
        }
    });
    localStorage.setItem('refLS', JSON.stringify(refArray));
};

fetch('https://pisnocanhem.github.io/ecommerce/assets/json/banque.json')
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
                add.forEach(buttonElement => {
                    buttonElement.onclick = (event) => {
                        if(!localStorage.getItem('refLS')){
                            var refArray = [];
                            refArray.push([event.target.dataset.ref, 1]);
                        } else {
                            var refArray = JSON.parse(localStorage.getItem('refLS'));
                            var updated = false;
                            refArray.forEach(lSElement => {      
                                if(lSElement[0] == event.target.dataset.ref) {
                                    lSElement[1]++;
                                    updated = true;
                                }
                            })
                            if(!updated){
                                refArray.push([event.target.dataset.ref, 1]);
                            }
                        }
                        localStorage.setItem('refLS', JSON.stringify(refArray));
                    }
                })
            }
        })
        // Display Panier:
        var cart = document.querySelector('#cart');
        const prod0 = data.gender[0];
        const prod1 = data.gender[1];
        const prod2 = data.gender[2];
        const modalBody = document.querySelector('.modal-body');

        const pushCartCard = (prod, i, q) => {
            let cartCard =
                `<div class="col-12 py-3 d-flex">
                    <div class="cardCard d-flex">
                        <img src="${prod[i].imgSrc}" alt="${prod[i].title}">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title">${prod[i].title}</h5>
                            <div class="d-flex">
                                ${prod[i].ref}
                                <span class="category ps-3">${prod[i].category}
                            </div>
                            <div class="d-flex pt-2">
                                <p class="card-text"><em>${prod[i].subTitle}</em></p>
                                <span class="price ps-5">${prod[i].price}€</span>
                            </div>
                            <div class="d-flex pb-2">
                                <button data-ref="${prod[i].ref}" class="minBasket">-</button>
                                <span data-ref="${prod[i].ref}" class="border count px-3">${q}</span>
                                <button data-ref="${prod[i].ref}" class="addBasket">+</button>
                                <button data-ref="${prod[i].ref}" class="deleteBtn ms-3">X</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            return cartCard
        }
        let displayBasket = ()=>{}
        cart.onclick = () => {
            modalBody.innerHTML = "";
            var refArray = JSON.parse(localStorage.getItem('refLS'));
            for (let i = 0; i < refArray.length; i++) {
                for (let j = 0; j < prod0.length; j++) {
                    if (prod0[j].ref == refArray[i][0]) {
                        modalBody.innerHTML = modalBody.innerHTML + pushCartCard(prod0, j, refArray[i][1]);
                    }
                }
                for (let j = 0; j < prod1.length; j++) {
                    if (prod1[j].ref == refArray[i][0]) {
                        modalBody.innerHTML = modalBody.innerHTML + pushCartCard(prod1, j, refArray[i][1]);
                    }
                }
                for (let j = 0; j < prod2.length; j++) {
                    if (prod2[j].ref == refArray[i][0]) {
                        modalBody.innerHTML = modalBody.innerHTML + pushCartCard(prod2, j, refArray[i][1]);
                    }
                }
            }

            var count = document.querySelectorAll('.count');
            // debut micka
            let deleteBtn = document.querySelectorAll('.deleteBtn');
            deleteBtn.forEach(element => {
                element.onclick = removeItem
                });
            // fin micka
            
            // document.querySelectorAll('.-1').forEach(element => {
            //     element.onclick = (event) => {

            //     }
            // })
            // document.querySelectorAll('.+1')
           
            document.querySelectorAll('.addBasket').forEach(element => {
                element.onclick = (event) => {
                    addQtyToRef(event.target.dataset.ref, count);
                }
            })
            document.querySelectorAll('.minBasket').forEach(element => {
                element.onclick = (event) => {
                    minQtyToRef(event.target.dataset.ref, count);
                }
            })
        }
    })

    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    })

// Fin Fonction d'Affichage

// Ajouter un produit au Panier mickaël



// Fin Ajouter un produit au Panier
