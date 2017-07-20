/*łagodny scroll z nawigacji*/
$('a[href^="#"]').click(function () {
 $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);
 return false;
});
(function($) { 
    $(document).ready(function(){
        $(window).scroll(function(){                          
            if ($(window).width() >760 && $(this).scrollTop() > 500) {
                $('#menu').fadeIn(500);
                document.getElementById("menu").style.display = "flex";
            } else{
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);
$(document).ready(function(){
    $('#menu-icon').click(function(){
        $('#main-menu').toggleClass('visible',1500);
    });
});
          
$(document).ready(function(){
    $(".mail").hide();
    $(".card").click(function(){
        $(this).closest(".col-3").find("span").slideToggle(500);
    });
        $("#offert .info").mouseover(function(){
        $(this).children("#offert .title").hide();
        });
    $("#offert .info").mouseout(function(){
        $("#offert .title").show(); 
});
});

$(document).ready(function() {
$(window).scroll(function () {

    $('.element').each(function (i) {
        var object_position = $(this).offset().top + $(this).outerHeight();
        var window_position = $(window).scrollTop() + $(window).height();
        var object_height= 0.8*object_position;
        if (window_position > (object_height)) {
            setTimeout(function(){
            $('.element').eq(i).addClass('is-visible');
                }, 200 * i);
        }
});
    });
    });
$(document).ready(function(){
    $("#content .col-3 h3").click(function(){
        $(this).siblings("p").slideToggle("400");
    });
});

