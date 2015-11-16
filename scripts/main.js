var module = {};
var _el = {};
var frontOffset = -0.2 * ($(window).height());
module.parallax = function() {
	var currentScrollTop = window.pageYOffset;
	var parallaxScrollSpeed = ( currentScrollTop*2 );
	var newTop = parseFloat( parallaxScrollSpeed );
	$('.top-section').css( 'top', -newTop );

};

module.animateNav = function() {
	// _el.$hamburger.
};

module.toggleMenu = function() {
	if ( $(window).width() < 768 ) {
		_el.$navList.slideToggle(300);
	}
};

module.eventHandlers = function() {
	_el.$hamburger.on('click', module.toggleMenu);
	_el.$navItems.on('click', module.toggleMenu);

	$(window).scroll( function() {
		if ( $(window).width() > 768 ) {
			module.parallax();
		}
	});
};

module.init = function() {
	_el.$navList = $('.nav-list');
	_el.$navItems = _el.$navList.children();
	_el.$hamburger = $('.nav-hamburger');
	_el.$advanceSection = $('.advance-section');
	module.eventHandlers();
};

$(document).ready( function() {
	module.init();

	var url = window.location.href,
		regex = new RegExp( 'home.html' );

	if ( regex.test( url ) ) {
		setTimeout( function() {
			$('.loading-overlay').hide();
		}, 2000);
	} else {
		$('.loading-overlay').hide();
	}
});



