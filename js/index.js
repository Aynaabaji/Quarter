$(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
        $('.up_arrow').fadeIn()
    } else {
        $(".up_arrow").fadeOut()
    }
})

$(".up_arrow").click(function () {
    $("html,body").animate({
        scrollTop: 0,
    }, 1500)
})