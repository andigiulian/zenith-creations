function handleFirstTab(e) {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);


$('#navbarDropdown').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});

$('.carousel').carousel({
	interval: 5000,
	pause: false
});


