// let basket = [

//     ["001", 1],
//     ["002", 2],
//     ["003", 3],
//     ["004", 4],
    
//     ];
    
//     console.log(basket);
//     console.log(JSON.stringify(basket));
//     // [["001",1],["002",2],["003",3],["004",4]]

    const modalbody = document.querySelector(".modal-body")
    const cartCard = document.querySelector("#cart")
    cart.onclick = () =>{
        var items = cart.querySelectorAll(".deleteBtn")
        items.forEach(element =>{
            element.onclick = (event)=>{
                
            }
        })
    }

    let deleteBtn = document.querySelectorAll('.deleteBtn');
    let removeItem = (event) => {
        indexToRemove = event.target.dataset.ref
        refLS.splice(indexToRemove);
        localStorage.setItem('refLS',JSON.stringify(refLS))
    }

    deleteBtn.forEach(element => {
        element.onclick = removeItem
        
    });
    
    

    


