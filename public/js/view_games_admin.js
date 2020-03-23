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

function check () {

    $(".card").parent().hide();
    none.removeClass("active");

    if (art.hasClass("active"))
        $(".container").find(".card-art").parent().show();
    if (business.hasClass("active"))
        $(".container").find(".card-business").parent().show();
    if (scitech.hasClass("active"))
        $(".container").find(".card-scitech").parent().show();
    if (general.hasClass("active"))
        $(".container").find(".card-general").parent().show();
    if (trivia.hasClass("active"))
        $(".container").find(".card-trivia").parent().show();
    if (sports.hasClass("active"))
        $(".container").find(".card-sports").parent().show();
    if (others.hasClass("active"))
        $(".container").find(".card-others").parent().show();

    if ((art.hasClass("active") && business.hasClass("active") && scitech.hasClass("active") && general.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) ||
        !(art.hasClass("active") || business.hasClass("active") || scitech.hasClass("active") || general.hasClass("active") || trivia.hasClass("active") || sports.hasClass("active") || others.hasClass("active"))) {
        none.addClass("active");

        art.removeClass("active");
        business.removeClass("active");
        scitech.removeClass("active");
        general.removeClass("active");
        trivia.removeClass("active");
        sports.removeClass("active");
        others.removeClass("active");

        $(".card").parent().show();
    }

}

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
});


art.on("click", function () {
    if (art.hasClass("active")) {
        art.removeClass("active");
    } else {
        art.addClass("active");
    }
    check();
});

business.on("click", function () {
    if (business.hasClass("active")) {
        business.removeClass("active");
    } else {
        business.addClass("active");
    }
    check();
});

scitech.on("click", function () {
    if (scitech.hasClass("active")) {
        scitech.removeClass("active");
    } else {
        scitech.addClass("active");
    }
    check();
});


general.on("click", function () {
    if (general.hasClass("active")) {
        general.removeClass("active");
    } else {
        general.addClass("active");
    }
    check();
});

trivia.on("click", function () {
    if (trivia.hasClass("active")) {
        trivia.removeClass("active");
    } else {
        trivia.addClass("active");
    }
    check();
});

sports.on("click", function () {
    if (sports.hasClass("active")) {
        sports.removeClass("active");
    } else {
        sports.addClass("active");
    }
    check();
});


others.on("click", function () {
    if (others.hasClass("active")) {
        others.removeClass("active");
    } else {
        others.addClass("active");
    }
    check();
});

$(".delete").click(function (){
    $(this).parent().parent().parent().hide();
})

$("#myModal").on("show.bs.modal", function (event) {
    let button = $(event.relatedTarget).parent();

    let title = button.parent().find(".card-title").text();
    let desc = button.parent().find(".card-text").text();
    let author = button.parent().parent().find(".card-footer").text();
    let img = button.parent().parent().find("img").attr("src");

    let cats = button.parent().parent().attr("class");
    let holder = "";

    if (cats.includes("card-art")) {
        holder += '<div class="col bg-art border"><small>Art</small></div>';
    }
    if (cats.includes("card-business")) {
        holder += '<div class="col bg-business border"><small>Business</small></div>';
    }
    if (cats.includes("card-scitech")) {
        holder += '<div class="col bg-scitech border"><small>Science and Technology</small></div>';
    }
    if (cats.includes("card-general")) {
        holder += '<div class="col bg-general border"><small>General Knowledge</small></div>';
    }
    if (cats.includes("card-trivia")) {
        holder += '<div class="col bg-trivia border"><small>Trivia</small></div>';
    }
    if (cats.includes("card-sports")) {
        holder += '<div class="col bg-sports border"><small>Sports</small></div>';
    }
    if (cats.includes("card-others")) {
        holder += '<div class="col bg-others border"><small>Others</small></div>';
    }

    let modal = $(this);

    modal.find(".modal-title").text(title);
    modal.find("#modal-desc").text(desc);
    modal.find(".modal-author").text(author);
    modal.find("#modal-img").attr("src", img);
    modal.find("#modal-cats").html(holder);

});