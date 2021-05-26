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
        // Display Panier:
        var cart = document.querySelector('#cart');
        const prod0 = data.gender[0];
        const prod1 = data.gender[1];
        const prod2 = data.gender[2];
        const modalBody = document.querySelector('.modal-body');

        const pushCartCard = (prod, i) => {
            let cartCard =
                `<div class="col-12">
                <div class="card d-flex">
                    <img src="${prod[i].imgSrc}" alt="${prod[i].title}">
                    <div class="card-body">
                        <h5 class="card-title">${prod[i].title}</h5>
                        <div class="d-flex">
                            <h6>${prod[i].ref}</h6>
                            <span class="category">${prod[i].category}
                        <p class="card-text">${prod[i].subTitle}</p>
                        <span class="price">${prod[i].price}€</span>
                        <button class="deleteBtn btn btn-primary" data-ref="${prod[i].ref}">Supprimer</button>
                    </div>
                </div>
            </div>`;
            return cartCard
        }

        cart.onclick = () => {
            modalBody.innerHTML = "";
            var itemCart = JSON.parse(localStorage.getItem('refLS'));
            for (let i = 0; i < itemCart.length; i++) {
                for (let j = 0; j < prod0.length; j++) {
                    if (prod0[j].ref == itemCart[i]) {
                        modalBody.innerHTML = modalBody.innerHTML + pushCartCard(prod0, j);
                    }
                }
                for (let j = 0; j < prod1.length; j++) {
                    if (prod1[j].ref == itemCart[i]) {
                        modalBody.innerHTML = modalBody.innerHTML + pushCartCard(prod1, j);
                    }
                }
                for (let j = 0; j < prod2.length; j++) {
                    if (prod2[j].ref == itemCart[i]) {
                        modalBody.innerHTML = modalBody.innerHTML + pushCartCard(prod2, j);
                    }
                }
            }
        }
    })

    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    })
// Fin Fonction d'Affichage

// Ajouter un produit au Panier mickaël



// Fin Ajouter un produit au Panier
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}