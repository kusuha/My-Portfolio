$(function () {
    $('#nav-btn').on('click', function () {
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
})

$('#nav-list a[href]').on('click', function (event) {
    $('.nav-btn').trigger('click');
});