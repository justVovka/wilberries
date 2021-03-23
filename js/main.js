const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// Cart
const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const buttonCloseModal = document.querySelector('.modal-close');
const overlayBackground = document.querySelector('.overlay');

buttonCart.addEventListener('click', toggleModalHandler);
buttonCloseModal.addEventListener('click', toggleModalHandler);
overlayBackground.addEventListener('click', closeModalWithDelegatingEvents);

// Smooth Scroll
const scrollLinks = document.querySelectorAll('a.scroll-link');

for (let scrollLink of scrollLinks)
	scrollLink.addEventListener('click', smoothScrollHandler);

// functions
function toggleModalHandler() {
	modalCart.classList.toggle('show');
};

function closeModalWithDelegatingEvents(event) {
	if (event.originalTarget.id === 'modal-cart') {
		toggleModalHandler();
	}
}

function smoothScrollHandler(event) {
	event.preventDefault();
	const bodyId = event.currentTarget.getAttribute('href');
	document.querySelector(bodyId).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
};
