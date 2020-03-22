// window.onscroll = function () {
//
//     let height = document.body.scrollTop;
//
//     if (height > 50)
//         $("body").css("background-color", "cornflower");
//     else
//         $("body").css("background-color", "white");
//
// };
//

let none = $("#filter-by-none");
let art = $("#filter-by-art");
let business = $("#filter-by-business");
let scitech = $("#filter-by-scitech");
let general = $("#filter-by-general");
let trivia = $("#filter-by-trivia");
let sports = $("#filter-by-sports");
let others = $("#filter-by-others");

let search = $("#search-btn");

search.on("click", function () {
    let keywords = $("#search-box").val();

    if ($(".container").find(".card-text:not(:contains(" + keywords + "))").length !== 0)
        $(".container").find(".card-text:not(:contains(" + keywords + "))").parent().parent().parent().css("display", "none");
    else{
        $("#search-box").attr("placeholder", "no strings found");
    }
});

none.on("click", function () {
    none.addClass("active");

    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();

    $(document).attr("title", "Mnemosis | All Games");
});

art.on("click", function () {
    art.addClass("active");

    none.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | Art");
});

business.on("click", function () {
    business.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | Business");
});

scitech.on("click", function () {
    scitech.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | Science and Technology");
});

general.on("click", function () {
    general.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | General Knowledge");
});

trivia.on("click", function () {
    trivia.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    sports.removeClass("active");
    others.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | Trivia");
});

sports.on("click", function () {
    sports.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    others.removeClass("active")

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-others").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | Sports");
});

others.on("click", function () {
    others.addClass("active");

    none.removeClass("active");
    art.removeClass("active");
    business.removeClass("active");
    scitech.removeClass("active");
    general.removeClass("active");
    trivia.removeClass("active");
    sports.removeClass("active");

    $(".card").parent().show();
    $(".container").find(".card-art").parent().css("display", "none");
    $(".container").find(".card-business").parent().css("display", "none");
    $(".container").find(".card-scitech").parent().css("display", "none");
    $(".container").find(".card-general").parent().css("display", "none");
    $(".container").find(".card-trivia").parent().css("display", "none");
    $(".container").find(".card-sports").parent().css("display", "none");

    $(document).attr("title", "Mnemosis | Others");
});
$(".delete").click(function (){
    $(this).parent().parent().parent().hide();
})