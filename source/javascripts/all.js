//= require_tree .

var loadingImage = $('.js-img-loading');
loadingImage.on('load', function () {
	$('.js-img-titlecard').hide();
	$(this).removeClass('img-loading');
});
loadingImage.attr('src', loadingImage.attr('data-img'));