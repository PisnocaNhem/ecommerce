const modalBody = document.querySelector('.modal-body');
var add = document.querySelectorAll('.add');

add.forEach(element => {
    element.onclick = () => {
        var id = element.data-id;
        modalBody.innerHTML = id
    }
});