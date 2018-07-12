if($('.portfolio-container').css('display') == 'none'){
	$('.portfolio-all').on('click', function(){
		$('.portfolio-list-item').fadeToggle();
		$('.portfolio-container').slideToggle();
	});
}




