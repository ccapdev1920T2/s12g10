window.onscroll = function () {
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
        $(".logo").css("max-height", "100px");
        $("#web-title").css("font-size", "33.33px");
        $("#web-subtitle").css("font-size", "13.33px");

        $("#nav-col").css("top", "20px");
        $("#title-col").css("padding-top", "20px");
        $("#title-col").css("padding-bottom", "20px");
        $("#title-col").css("margin-left", "20px");

        $("#separator").css("height", "0");

        $("#logo-col").removeClass("col-4");
        $("#logo-col").addClass("col-1");

        $("#title-col").removeClass("col-8");
        $("#title-col").addClass("col-2");
    } else {
        $(".logo").css("max-height", "300px");
        $("#web-title").css("font-size", "100px");
        $("#web-subtitle").css("font-size", "40px");

        $("#nav-col").css("top", "100px");
        $("#title-col").css("padding-top", "50px");
        $("#title-col").css("padding-bottom", "0");
        $("#title-col").css("margin-left", "0");

        $("#separator").css("height", "100px");

        $("#logo-col").removeClass("col-2");
        $("#logo-col").addClass("col-4");

        $("#title-col").removeClass("col-3");
        $("#title-col").addClass("col-8");
    }
};