let minQtyToRef = (ref) => {
    let basket = localStorage.getItem('basket');
    basket = JSON.parse(basket);
    console.log(basket);
    basket.forEach((element) => {
        if(element[0] == ref){
            element[1]--;
        }
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    
};

minQtyToRef();