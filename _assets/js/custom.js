// counts the remaining characters availble in the textarea
// and applies a warning class if the count is below 25
var maxLength = 350;
$("textarea").keyup(function() {
    var a = $(this).val().length;
    (a = maxLength - a),
        $(".chars-remain").text(a),
        a < 25
            ? $(".chars-remain").addClass("char-remain-warning")
            : ($(".chars-remain").addClass("char-remain-ok"),
              $(".chars-remain").removeClass("char-remain-warning"));
});


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

// clicky to scroll topmost
function scrollToTop() {
	window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
	});
}


// reduce logo size when scrolled
$(document).on('scroll', function() {
	if
  		($(document).scrollTop() > 100) {
			$('.header-logo').addClass('shrink');
		}
	else
	{
		$('.header-logo').removeClass('shrink');
	}
});