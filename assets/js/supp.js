let basket = [

    ["001", 1],
    ["002", 2],
    ["003", 3],
    ["004", 4],
    
    ];
    
    console.log(basket);
    console.log(JSON.stringify(basket));
    // [["001",1],["002",2],["003",3],["004",4]]



    let deleteBtn = document.querySelectorAll('.deleteBtn');
    let removeItem = (event) => {
        indexToRemove = event.target.dataset.ref
        basket.splice(indexToRemove,1);
        localStorage.setItem('basket', JSON.stringify(basket))
    }

    deleteBtn.forEach(element => {
        element.onclick = removeItem
        console.log(deleteBtn)
    });
    
    

    


