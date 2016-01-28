
// Run along now, this is a private party
(function(document, window) {

	// DOM nodes and objects instances
	var $thelist, $thelistChilds, $wrapper, myScroll, loaded;

	// numerical variables
	var i = 0, left = 0;

	// exec after DOM loaded
	loaded = function() {

		// assign lefts to each child
		$thelist = document.getElementById('thelist');
		$thelistChilds = $thelist.children;
		for (i = 0; i < $thelistChilds.length; i++) {
			left += 12.5;
			$thelistChilds[i].style.left = left + 'rem';
		};

		// setup iScroll
		$wrapper = document.getElementById('wrapper');
		myScroll = new IScroll($wrapper, {
			'scrollbars': 'custom',
			'mouseWheel': true,
			'bounce': false,
			'interactiveScrollbars': true,
			'eventPassthrough': true,
			'scrollX': true,
			'scrollY': false
		});
	}

	// if its a touch screen
	if ( 'ontouchstart' in window ) {

		// avoid and browser screen bounce
		document.addEventListener('touchmove', function (e) {
			e.preventDefault();
		}, false);
	};
	
	// setup DOM ready
	document.addEventListener('DOMContentLoaded', loaded, false);
})(document, window);