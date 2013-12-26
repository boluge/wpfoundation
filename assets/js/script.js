/*!
 * Script header
 *
 * Copyright 2005, Stéphane Deluce
 * Released under the MIT license
 *
 * Date: 2013-12-18T10:25Z
 */
jQuery(document).ready(function($){
	// Image Header
	var urlImg = jQuery('header').data('image');
	var tmp_img = new Image();
		tmp_img.src = urlImg;
	//console.log(urlImg);

	var url = 'url('+urlImg+')';	

	if(urlImg){		

		jQuery('header#bdimage').css({'background-image':url});

		tmp_img.onload = function(){

			var height = tmp_img.height;
			var width = tmp_img.width;

			var ratio = width/height;

			var screenWidth = jQuery(window).outerWidth();
			var heightbd = (screenWidth / ratio)-2;

			// console.log(height);
			// console.log(width);
			// console.log(ratio);

			jQuery('header#bdimage').css({'height':heightbd});

			jQuery(window).resize(function(){
				var screenWidth = jQuery(window).outerWidth();
				var heightbd = (screenWidth / ratio)-2;
				jQuery('header#bdimage').css({'height':heightbd});
			});
		};
	}
});