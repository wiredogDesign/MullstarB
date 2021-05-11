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


// controls the mobile navigation
$(".nav-panel-button").click(function() {
    $(".main-nav").toggleClass("main-nav-open"),
        $(".nav-panel-button").toggleClass("nav-panel-button-open");
});


// adds active class to the main nav link if it equals the page url after stripping the domain
$(".main-nav a")
    .filter(function() {
        return this.href == location.href.replace(/#.*/, "");
    })
    .addClass("active");

// scroll to top
$(document).ready(function($) {
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 600,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible');
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});

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