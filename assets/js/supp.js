    let basket = localStorage.getItem('basket');
    
    let removeItem = (event) => {
        refToRemove = event.target.dataset.ref
        
        basket = JSON.parse(basket);
        console.log(basket)
        basket.forEach( (element,index) => {
            if(element[0] == refToRemove){
                basket.splice(index,1);
            }
        });
        
        localStorage.setItem('basket',JSON.stringify(basket))
        

    }
    // basket.forEach((element) => {
    //     if(element[0] == ref){
            
    //     }
    // });

    
    // deleteBtn.forEach(element => {
    //     element.onclick = removeItem
        
        
    // });
    
    // console.log(deleteBtn)





// essai avec basket local storage

    // let basket = [

//     ["001", 1],
//     ["002", 2],
//     ["003", 3],
//     ["004", 4],
    
//     ];
    
//     console.log(basket);
//     console.log(JSON.stringify(basket));
//     // [["001",1],["002",2],["003",3],["004",4]]

    // const modalbody = document.querySelector(".modal-body")
    // const cartCard = document.querySelector("#cart")
    // cart.onclick = () =>{
    //     var items = cart.querySelectorAll(".deleteBtn")
    //     items.forEach(element =>{
    //         element.onclick = (event)=>{
    //             removeItem()
    //         }
    //     })
    // }

