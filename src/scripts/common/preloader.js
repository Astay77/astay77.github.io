/*document.body.onload = function () {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.add('done'))
		{
			preloader.classList.add('done')
		}
	}, 1000);
} */

//preloader
/* 

module.exports = function() {
	var 
		images = document.images,
		images-total__count = images.length,
		images-loaded__count = 0;
		perc-display = document.getElementById('load-perc');
	for (var i = 0; i < images-total__count; i++) 
	{
		image-clone = new Image();
		image-clone__onload = image__loaded;
		image-clone__onerror = image__loaded;
		image-clone.src = images[i].src;
		preloader = document.getElementById('page-preloader');
	}
	function image__loaded() {
		images-loaded__count++;
		perc-display.innerHTML = (( (100 / images-total__count) * images-loaded__count) <<0) + '%';

		if (images-loaded__count >= images-total__count) 
	{
		setTimeout(function() {
			if (!preloader.classList.add('done'))
			{
				preloader.classList.add('done')
			}
		}, 1000);

		}
	 } 
} */