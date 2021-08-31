if (window.jQuery) {
	console.log("jQuery подключен к странице");
}

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	});
});