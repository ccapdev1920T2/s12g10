$("#filter-by-art, #filter-by-business, #filter-by-scitech, #filter-by-history, #filter-by-trivia, #filter-by-sports, #filter-by-others").on("click", function () {
    let bool = $(this).hasClass("active");
    if (bool === true) {
        if ($(this).attr("id") == "filter-by-art")
            $("#check-art").prop("checked", false);
        if ($(this).attr("id") == "filter-by-business")
            $("#check-business").prop("checked", false);
        if ($(this).attr("id") == "filter-by-scitech")
            $("#check-scitech").prop("checked", false);
        if ($(this).attr("id") == "filter-by-history")
            $("#check-history").prop("checked", false);
        if ($(this).attr("id") == "filter-by-trivia")
            $("#check-trivia").prop("checked", false);
        if ($(this).attr("id") == "filter-by-sports")
            $("#check-sports").prop("checked", false);
        if ($(this).attr("id") == "filter-by-others")
            $("#check-others").prop("checked", false);
        $(this).removeClass("active");
    } else {
        if ($(this).attr("id") == "filter-by-art")
            $("#check-art").prop("checked", true);
        if ($(this).attr("id") == "filter-by-business")
            $("#check-business").prop("checked", true);
        if ($(this).attr("id") == "filter-by-scitech")
            $("#check-scitech").prop("checked", true);
        if ($(this).attr("id") == "filter-by-history")
            $("#check-history").prop("checked", true);
        if ($(this).attr("id") == "filter-by-trivia")
            $("#check-trivia").prop("checked", true);
        if ($(this).attr("id") == "filter-by-sports")
            $("#check-sports").prop("checked", true);
        if ($(this).attr("id") == "filter-by-others")
            $("#check-others").prop("checked", true);
        $(this).addClass("active");
    }
});
$('input[type="checkbox"]').on("mouseenter",function(){
    if ($(this).attr("id") == "check-art")
        $("#filter-by-art").addClass("active");
    if ($(this).attr("id") == "check-business")
        $("#filter-by-business").addClass("active");
    if ($(this).attr("id") == "check-scitech")
        $("#filter-by-scitech").addClass("active");
    if ($(this).attr("id") == "check-history")
        $("#filter-by-history").addClass("active");
    if ($(this).attr("id") == "check-trivia")
        $("#filter-by-trivia").addClass("active");
    if ($(this).attr("id") == "check-sports")
        $("#filter-by-sports").addClass("active");
    if ($(this).attr("id") == "check-others")
        $("#filter-by-others").addClass("active");
});
$('input[type="checkbox"]').on("mouseleave",function(){
    if ($(this).attr("id") == "check-art" && !$(this).is(":checked"))
        $("#filter-by-art").removeClass("active");
    if ($(this).attr("id") == "check-business" && !$(this).is(":checked"))
        $("#filter-by-business").removeClass("active");
    if ($(this).attr("id") == "check-scitech" && !$(this).is(":checked"))
        $("#filter-by-scitech").removeClass("active");
    if ($(this).attr("id") == "check-history" && !$(this).is(":checked"))
        $("#filter-by-history").removeClass("active");
    if ($(this).attr("id") == "check-trivia" && !$(this).is(":checked"))
        $("#filter-by-trivia").removeClass("active");
    if ($(this).attr("id") == "check-sports" && !$(this).is(":checked"))
        $("#filter-by-sports").removeClass("active");
    if ($(this).attr("id") == "check-others" && !$(this).is(":checked"))
        $("#filter-by-others").removeClass("active");
});
$('input[type="checkbox"]').on("click",function(){
    let bool = $(this).is(":checked");
    if (bool === false) {
        if ($(this).attr("id") == "check-art")
            $("#filter-by-art").removeClass("active");
        if ($(this).attr("id") == "check-business")
            $("#filter-by-business").removeClass("active");
        if ($(this).attr("id") == "check-scitech")
            $("#filter-by-scitech").removeClass("active");
        if ($(this).attr("id") == "check-history")
            $("#filter-by-history").removeClass("active");
        if ($(this).attr("id") == "check-trivia")
            $("#filter-by-trivia").removeClass("active");
        if ($(this).attr("id") == "check-sports")
            $("#filter-by-sports").removeClass("active");
        if ($(this).attr("id") == "check-others")
            $("#filter-by-others").removeClass("active");
    } else {
        if ($(this).attr("id") == "check-art")
            $("#filter-by-art").addClass("active");
        if ($(this).attr("id") == "check-business")
            $("#filter-by-business").addClass("active");
        if ($(this).attr("id") == "check-scitech")
            $("#filter-by-scitech").addClass("active");
        if ($(this).attr("id") == "check-history")
            $("#filter-by-history").addClass("active");
        if ($(this).attr("id") == "check-trivia")
            $("#filter-by-trivia").addClass("active");
        if ($(this).attr("id") == "check-sports")
            $("#filter-by-sports").addClass("active");
        if ($(this).attr("id") == "check-others")
            $("#filter-by-others").addClass("active");
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