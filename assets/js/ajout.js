let addQtyToRef = (ref) => {
    let basket = localStorage.getItem('basket');
    basket = JSON.parse(basket);
    basket.forEach((element) => {
        if(element[0] == ref){
            element[1]++;
        }
    });
    localStorage.setItem("basket", JSON.stringify(basket));
};

addQtyToRef();

let addBasket = document.querySelectorAll('.addBasket')
    console.log(addBasket);
    // element.onclick = (event) => 