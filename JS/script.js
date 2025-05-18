$(document).ready(function () {
    var index = 0;
    var items = $('.carousel-container img');
    var totalItems = items.length;

    function tampilkanGambar() {
        items.hide(); 
        items.eq(index).fadeIn(); 
    }

    tampilkanGambar(); 

    $('.next').click(function () {
        if (index < totalItems - 1) {
            index = index + 1;
        } else {
            index = 0;
        }
        tampilkanGambar();
    });

    $('.prev').click(function () {
        if (index > 0) {
            index = index - 1;
        } else {
            index = totalItems - 1;
        }
        tampilkanGambar();
    });
});
