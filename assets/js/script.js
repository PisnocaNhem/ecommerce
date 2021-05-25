// Fonction d'Affichage:
const men = document.querySelector('#mens');
const women = document.querySelector('#womens');
const kid = document.querySelector('#kids');
const display = document.querySelectorAll('.display');
const d1 = document.querySelector('#d-1');
const d2 = document.querySelector('#d-2');
const d3 = document.querySelector('#d-3');

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
                <button id="add${i}" class="add btn btn-primary">Ajouter au panier</button>
            </div>
        </div>
    </div>`;
    return card;
}

fetch('/assets/json/banque.json')
    .then(response => response.json())
    .then(data => {
        display.forEach(element => {
            element.onclick = (event) => {
                switch (event.target.id) {
                    case 'd-1': {
                        d1.classList = "d-none";
                        women.classList = "d-none";
                        kid.classList = "d-none";
                        product = data.gender[0];
                        for (let i = 0; i < product.length; i++) {
                            let card = pushCard(product, i);
                            men.innerHTML = men.innerHTML + card;
                        }
                    };
                        break;
                    case 'd-2': {
                        d2.classList = "d-none";
                        men.classList = "d-none";
                        kid.classList = "d-none";
                        product = data.gender[1];
                        for (let i = 0; i < product.length; i++) {
                            let card = pushCard(product, i);
                            women.innerHTML = women.innerHTML + card;
                        }
                    };
                        break;
                    case 'd-3': {
                        d3.classList = "d-none";
                        men.classList = "d-none";
                        women.classList = "d-none";
                        product = data.gender[2];
                        for (let i = 0; i < product.length; i++) {
                            let card = pushCard(product, i);
                            kid.innerHTML = kid.innerHTML + card;
                        }
                    };
                }
            }
        })   
    })

    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    })
// Fin Fonction d'Affichage

// Ajouter un produit au Panier:

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
