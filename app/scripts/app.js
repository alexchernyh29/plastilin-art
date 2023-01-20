import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	const handleCloseMenu = () => {
		$("body").removeClass("header__page_lock");
		$(".header__burger__menu").removeClass("is-active");
		$(".header__burger__line").removeClass("is-active");
	};
	
	const handleOpenMenu = () => {
		$("body").addClass("header__page_lock");
		$(".header__burger__menu").addClass("is-active");
		$(".header__burger__line").addClass("is-active");
	};
	
	$(".header__menu__link").on("click", function () {
		handleCloseMenu();
	});
	
	$(".header__burger__button").on("click", function () {
		if ($(".header__burger__line").hasClass("is-active")) {
			handleCloseMenu();
		} else {
			handleOpenMenu();
		}
	});
});


