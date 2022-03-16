$(document).ready(function () {

    $('.messangersbox__btn').click(function () {
        $('.messangersbox').toggleClass('active');
    });




    $('.playbtn').on('click', function (e) {
        e.preventDefault();
        $("#video")[0].src += "?autoplay=1";
        $('.videosect').addClass('playvideo');
    })



});