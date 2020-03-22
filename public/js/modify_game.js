$("#header-div").on("click", function (event) {
    event.preventDefault();
    $("#exit-alert").show();
    $("#exit-alert-link").attr("href", "homepage.html");
    $(window).scrollTop(0);
});

$("#search-btn").on("click", function (event) {
    event.preventDefault();
    $("#exit-alert").show();
    $("#exit-alert-link").attr("href", "homepage.html");
    $(window).scrollTop(0);
});

$("#view-games").on("click", function (event) {
    event.preventDefault();
    $("#exit-alert").show();
    $("#exit-alert-link").attr("href", "view_games.html");
    $(window).scrollTop(0);
});

$("#exit-alert-stay").on("click", function () {
    $("#exit-alert").css("display", "none");
    $("#exit-alert-link").attr("href", "#");
});