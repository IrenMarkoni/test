
let openModal = document.querySelectorAll('.open_modal');
let modalWindow = document.querySelector('.modal_window');
let closeModal = document.getElementById('modal_box_close');

[].forEach.call( openModal, function(el) {

    el.onclick = function(e) {
     modalWindow.style.display = 'block'; 
    }
});


closeModal.onclick = function() {
   modalWindow.style.display = 'none'; 
}
