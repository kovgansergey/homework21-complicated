$(document).ready(function() {
	$("#offerForm").validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			phone: "required",
		},
		messages: {
	    username: {
	    	required: "Заполните поле",
	    	minlength: jQuery.validator.format("Минимальная длинна 2 символа"),
	    },
	    phone: "Заполните поле",
	  }
	});
	
	$("#brifForm").validate({
	  rules: {
	    username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			phone: "required",
	    email: {
	      required: true,
	      email: true,
	    },
	  },
	  messages: {
	    username: {
	    	required: "Заполните поле",
	    	minlength: jQuery.validator.format("Минимальная длинна 2 символа"),
	    	maxlength: jQuery.validator.format("Максимальная длинна 15 символов"),
	    },
	    phone: "Заполните поле",
	    email: {
	      required: "Заполните поле",
	      email: "Введите корректный email",
	    },
	  },
	});

	$(".inputphone").mask("8 (999) 999-99-99");
});