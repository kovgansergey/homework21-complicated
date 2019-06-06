var callMe = document.querySelector('#callMeBtn');
var modal = document.querySelector('#modal');
var closeModal = document.querySelector('#closemodal')

callMe.addEventListener('click', function() {
	modal.classList.add('modal_active');
});

closeModal.addEventListener('click', function() {
	modal.classList.remove('modal_active');
});