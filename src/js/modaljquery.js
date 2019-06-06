$(document).ready(function() {
	var callMeBtn = $('#callMeBtn');
	var modal = $('#modal');
	var closeModalBtn = $('#closemodal')

	callMeBtn.on('click', function() {
		modal.addClass('modal_active');
	});

	closeModalBtn.on('click', function() {
		modal.removeClass('modal_active')
	});
});