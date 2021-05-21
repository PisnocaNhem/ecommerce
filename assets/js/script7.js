// Affichage de la liste complète des items
let displayItems = () => {
    let itemsHTML = document.getElementById('items');
    itemsHTML.innerHTML = '';
    items.forEach((element,index) => {
        let newLine = `
        <tr>
            <td scope="row">${index+1}</td>
            <td><a href="${element[1]}" target="_blank">${element[0]}</a></td>
            <td class="text-center">
                <i class="fas fa-trash-alt removeBtn" data-id="${index}"></i>
            </td>
        </tr>
        `
        itemsHTML.innerHTML += newLine;
    });

    // Déclaration des évènements nouvellement créés (Suppression)
    let removeBtn = document.querySelectorAll('.removeBtn');
    removeBtn.forEach(element => {
        element.onclick = removeItem;
    });

}

// Ajout d'un item et mise à jour du localstorage
let addItem = () => {
    let newTitle = document.getElementById('newTitle');
    let newLink = document.getElementById('newLink');
    if(newTitle.value && newLink.value){
        let item = [newTitle.value, newLink.value];
        items.push(item);
        displayItems();
        newTitle.value = '';
        newLink.value = '';
        localStorage.setItem('items', JSON.stringify(items))
    }
}

// Suppression d'un item et mise à jour du localstorage
let removeItem = (event) => {
    indexToRemove = event.target.dataset.id
    items.splice(indexToRemove,1);
    displayItems();
    localStorage.setItem('items', JSON.stringify(items))
}


// Initialisation des variables
let addBtn = document.getElementById('addBtn');

// Ceci est une condition "ternaire"
let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// Equivalent à :
// if(localStorage.getItem('items')){
//     let items = JSON.parse(localStorage.getItem('items'));
// } else {
//     let items = [];
// }

// Affichage des items
displayItems();

// Event pour l'ajout d'un item
addBtn.onclick = addItem;

    