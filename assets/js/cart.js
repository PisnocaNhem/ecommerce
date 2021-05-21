const modalBody = document.querySelector('.modal-body');
var add = document.querySelectorAll('.add');

add.forEach(element => {
    element.onclick = () => {
        modalBody.innerHTML = element.id;
    }
});