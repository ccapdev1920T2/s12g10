$(function () {
    $("#logo-col, #title-col").on({
        mouseenter: function () {
            $("#over, #under").css({
                "animation-duration" : "1s",
            });
        },
        mouseleave: function () {
            if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
                $("#over, #under").css({
                    "animation-duration": "12s",
                });
            } else {
                $("#over, #under").css({
                    "animation-duration": "8s",
                });
            }
        }
    });
});