// click to show the nav menu on mobile
const menuButton = document.querySelector('.nav-panel-button');
const mainNav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
	mainNav.classList.toggle('main-nav-open');
	menuButton.classList.toggle('nav-panel-button-open');
})

// show the cd-top button after scrolling 600px
window.addEventListener('scroll', () => {
	const cdtop = document.querySelector('.cd-top');
  
	if (window.scrollY > 600) {
		cdtop.style.opacity='1';
	} 
	else {
		cdtop.style.opacity='0';
	}
});

// shrink the logo after scrolling 100px
window.addEventListener('scroll', () => {
	const headerLogo = document.querySelector('.header-logo');
	
	if (window.scrollY > 100) {
		headerLogo.classList.add('shrink')
	} else {
		headerLogo.classList.remove('shrink')
	}
}); 

// clicky to scroll topmost
function scrollToTop() {
	window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
	});
}