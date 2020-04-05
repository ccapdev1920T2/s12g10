$("#filter-by-art, #filter-by-business, #filter-by-scitech, #filter-by-history, #filter-by-trivia, #filter-by-sports, #filter-by-others").on("click", function () {
    let bool = $(this).hasClass("active");

    if (bool === true) {
        $(this).removeAttr("name");
        $(this).removeClass("active");
    } else {
        $(this).attr('name', $(this).val());
        $(this).addClass("active");
    }
});

// window.onbeforeunload = function (event) {
//     // let button = $(event.relatedTarget);
//     //
//     // if (button.isEqualNode($("#create_game"))) {}
//     // else {
//         return "Changes made will not be saved. Are you sure you want to leave?";
//     // }
// };