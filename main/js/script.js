$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

});