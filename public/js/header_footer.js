window.onscroll = function () {
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
        $(".logo").css("max-height", "100px");
        $("#web-title").css("font-size", "33.33px");
        $("#web-subtitle").css("font-size", "13.33px");
        $("#separator").css("height", "0");
        $("#over, #under").css("animation-duration", "8s");
        $("#top").css("height", "21px");

        $("#nav-col").css("top", "0");
        $("#title-col").css({
            "padding-top" : "20px",
            "padding-bottom" : "20px",
            "margin-left" : "30px"
        }).removeClass("col-8").addClass("col-3");
        $("#logo-col").removeClass("col-4").addClass("col-1");
    } else {
        $(".logo").css("max-height", "300px");
        $("#web-title").css("font-size", "100px");
        $("#web-subtitle").css("font-size", "40px");
        $("#separator").css("height", "100px");
        $("#over, #under").css("animation-duration", "4s");
        $("#top").css("height", "42px");

        $("#nav-col").css("top", "100px");
        $("#title-col").css({
            "padding-top" : "50px",
            "padding-bottom" : "0",
            "margin-left" : "0"
        }).removeClass("col-3").addClass("col-8");
        $("#logo-col").removeClass("col-2").addClass("col-4");
    }

    if($(window).scrollTop() + $(window).height() === $(document).height()) {
        $("#footer").text("Back to Top").attr("href", "#").css("font-size", "17px");
    } else {
        $("#footer").text("All Rights Reserved 2020").removeAttr("href").css("font-size", "10px");
    }
};