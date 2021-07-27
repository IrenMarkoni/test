
let openModal = document.querySelector('.open_modal');
let modalWindow = document.querySelector('.modal_window');
let closeModal = document.getElementById('modal_box_close');


openModal.onclick = function(){
   modalWindow.style.display = 'block';
}
closeModal.onclick = function() {
   modalWindow.style.display = 'none'; 
}
