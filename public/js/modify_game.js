$("#filter-by-art, #filter-by-business, #filter-by-scitech, #filter-by-general, #filter-by-trivia, #filter-by-sports, #filter-by-others").on("click", function () {
    let bool = $(this).hasClass("active");

    if (bool === true) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});

window.onbeforeunload = function (event) {
    return "Changes made will not be saved. Are you sure you want to leave?";
};