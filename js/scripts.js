(function ($) {
	jQuery(document).ready(function () {
		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({ scrollTop: '0px' }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});
	});
})(jQuery);

const continueBtn = document.querySelectorAll('.btn-continue');
const finishBtn = document.querySelector('.btn-finish');
const skipBtn = document.querySelectorAll('.btn-skip');
const personalizeItem = document.querySelectorAll('.personolize-item-inner3');
const personalizeNavItemAllBtn = document.querySelectorAll('.personolize-item-inner9>ul>li>a');
const personalizeNavItem = document.querySelector('.personolize-item-inner8');
const personalizeNavItemLi = document.querySelectorAll('.personolize-item-inner8>ul>li');

// console.log(personalizeNavItemAllBtn);

const addActiveClass = function (itemNumber) {
	personalizeItem.forEach((el) => {
		el.classList.remove('active');
	});
	personalizeNavItemLi.forEach((el) => {
		el.classList.remove('active');
		el.classList.remove('active2');
	});

	personalizeItem[itemNumber].classList.add('active');
};

continueBtn[0].addEventListener('click', () => {
	addActiveClass(1);
	personalizeNavItem.classList.add('active');
	personalizeNavItemLi[0].classList.add('active');
});
continueBtn[1].addEventListener('click', () => {
	addActiveClass(2);
	personalizeNavItemLi[0].classList.add('active2');
	personalizeNavItemLi[1].classList.add('active');
});
continueBtn[2].addEventListener('click', () => {
	addActiveClass(3);
	personalizeNavItemLi[0].classList.add('active2');
	personalizeNavItemLi[1].classList.add('active2');
	personalizeNavItemLi[2].classList.add('active');
});

skipBtn[0].addEventListener('click', () => {
	addActiveClass(3);
	personalizeNavItemLi[0].classList.add('active2');
	personalizeNavItemLi[1].classList.remove('active2');
	personalizeNavItemLi[1].classList.remove('active');
	personalizeNavItemLi[2].classList.add('active');
});

skipBtn[1].addEventListener('click', () => {
	document.location.href = '/';
});

finishBtn.addEventListener('click', () => {
	document.location.href = '/';
	// personalizeNavItemLi[0].classList.add('active2');
	// personalizeNavItemLi[1].classList.add('active2');
	// personalizeNavItemLi[2].classList.add('active2');
});

personalizeNavItemAllBtn.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.classList.toggle('active');
	});
});
