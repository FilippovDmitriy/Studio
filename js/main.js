const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const headerTopNav = document.querySelector('.header-top__nav');
	let headerTopNavLink = document.querySelectorAll('.header-top__nav a');
	console.log(headerTopNavLink);
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerTopNav.classList.toggle('_active');
	});
	headerTopNavLink.forEach(headerTopNavLink => {
		headerTopNavLink.addEventListener("click", function (e) {
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				headerTopNav.classList.remove('_active');
			}
		});
	});
};
new Swiper('.our-slider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: false
	},

	touchRatio: 0,
	breakpoints: {
		320: {
			slidesPerView: 1,
			speed: 600,
		},
		768: {
			slidesPerView: 2,
			speed: 1000,
		}
	},
	loop: true,
	watchOverflow: true,
	centeredSlides: true,
	spaceBetween: 22,
});

let form = document.getElementById('form')
let formName = document.querySelector('.form__name');
let formMail = document.querySelector('.form__mail');
let formNumber = document.querySelector('.form__number');
let formText = document.querySelector('.form__text');
let formButton = document.querySelector('.form button');
let mailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

formButton.addEventListener("click", function (e) {
	e.preventDefault();
	if (formName.value === '') {
		formName.classList.add('error');
	} else {
		formName.classList.remove('error');
	}
	if (formMail.value === '') {
		formMail.classList.add('error');
	} else if (mailReg.test(formMail.value) === false) {
		formMail.classList.add('error');
	} else {
		formMail.classList.remove('error');
	}
	if (!(formMail.classList.contains('error')) && !(formName.classList.contains('error'))) {
		sendMail();
	}
});
async function sendMail() {
	let formData = new FormData(form);
	let response = await fetch(form.getAttribute('data-uri'), {
		method: 'POST',
		body: formData
	});
	if (response.ok) {
		form.reset();
		location.reload();
	} else {
		alert('Ошибка!');
	}
}