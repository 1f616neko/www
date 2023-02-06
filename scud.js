/* From https://zh.wikipedia.org/wiki/MediaWiki:Gadget-scrollUpButton.js, oldid 64688010, CC BY-SA 3.0 */
/* Require jQuary to run this program */
var SCUDFunc = function (){ /* Run this on load to prevent confident with wordpress, etc */
	var scrollDownButtonId = 'scrollDownButton',
		scrollUpButtonId = 'scrollUpButton';
	
	var scrollButtonIcon = '//upload.wikimedia.org/wikipedia/commons/5/59/Font_Awesome_5_regular_arrow-circle-up_blue.svg';
	if (!document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'))
		scrollButtonIcon = '//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Font_Awesome_5_regular_arrow-circle-up_blue.svg/32px-Font_Awesome_5_regular_arrow-circle-up_blue.svg.png';

	jQueryscrollDownButton = jQuery('<img>', {
		src: scrollButtonIcon,
		id: scrollDownButtonId
	}).css({
		cursor: 'pointer',
		opacity: 0.7,
		position: 'fixed',
		display: 'none',
		right: '18px',
		transform: 'rotate(180deg)',
		'-webkit-transform': 'rotate(180deg)',
		'-moz-transform': 'rotate(180deg)',
		'-o-transform': 'rotate(180deg)',
		'-ms-transform': 'rotate(180deg)'
	}).on('click', function() {
		jQuery('html, body').animate({
			scrollTop: jQuery(document).height() - jQuery(window).height()
		}, 660)
	}).on('mouseenter mouseleave', function(e) {
		this.style.opacity = e.type === 'mouseenter' ? 1 : 0.7
	})

	jQueryscrollUpButton = jQuery('<img>', {
		src: scrollButtonIcon,
		id: scrollUpButtonId
	}).css({
		cursor: 'pointer',
		opacity: 0.7,
		position: 'fixed',
		display: 'none',
		right: '18px'
	}).on('click', function() {
		jQuery('html, body').animate({
			scrollTop: 0
		}, 660)
	}).on('mouseenter mouseleave', function(e) {
		this.style.opacity = e.type === 'mouseenter' ? 1 : 0.7
	})
	
	jQuery(document.body).append(jQueryscrollDownButton);
	jQuery(document.body).append(jQueryscrollUpButton);

	var scrollButtonTimer;
	jQuery(window).on('scroll', function() {
		var dingHeight = jQuery('#bluedeck_ding>div').height() ? jQuery('#bluedeck_ding>div').height() : 0;
		jQuery('#mw-ge-help-panel-cta-button').length > 0 ? jQueryscrollDownButton.css('bottom', dingHeight + 75 + 'px') && jQueryscrollUpButton.css('bottom', dingHeight + 116 + 'px') : jQueryscrollDownButton.css('bottom', dingHeight + 24 + 'px') && jQueryscrollUpButton.css('bottom', dingHeight + 65 + 'px');
		jQuery('#cat_a_lot').length > 0 || jQuery('#proveit').length > 0 || jQuery('.wordcount').length > 0 ? jQueryscrollDownButton.css('left', '10px') && jQueryscrollUpButton.css('left', '10px') : jQueryscrollDownButton.css('left', 'unset') && jQueryscrollUpButton.css('left', 'unset');
		jQuery(this).scrollTop() > 60 ? jQueryscrollDownButton.fadeIn(400) && jQueryscrollUpButton.fadeIn(400) : jQueryscrollDownButton.fadeOut(400) && jQueryscrollUpButton.fadeOut(400);
		this.clearTimeout(scrollButtonTimer);
		scrollButtonTimer = this.setTimeout(function() {
			jQueryscrollDownButton.fadeOut(400);
			jQueryscrollUpButton.fadeOut(400)
		}, 2000)
	});
	jQueryscrollDownButton.on('mouseenter', function() {
		window.clearTimeout(scrollButtonTimer)
	});
	jQueryscrollUpButton.on('mouseenter', function() {
		window.clearTimeout(scrollButtonTimer)
	})
};
window.addEventListener('load', SCUDFunc);
//jQuery(SCUDFunc);
