$(function () {
    $("#logo-col, #title-col").on({
        mouseenter: function () {
            $("#over, #under").css("animation-duration", "1s");
        },
        mouseleave: function () {
            $("#over, #under").css("animation-duration", "4s");
        }
    });
});