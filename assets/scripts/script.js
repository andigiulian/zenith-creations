$('#navbarDropdown').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});

$('.carousel').carousel({
	interval: 3000
});


