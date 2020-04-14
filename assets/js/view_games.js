let none = $("#filter-by-none");
let art = $("#filter-by-art");
let business = $("#filter-by-business");
let scitech = $("#filter-by-scitech");
let history = $("#filter-by-history");
let trivia = $("#filter-by-trivia");
let sports = $("#filter-by-sports");
let others = $("#filter-by-others");

function check () {

    $(".card").parent().hide();
    none.removeClass("active");

    if (art.hasClass("active"))
        $(".container").find(".card-art").parent().show();
    if (business.hasClass("active"))
        $(".container").find(".card-business").parent().show();
    if (scitech.hasClass("active"))
        $(".container").find(".card-scitech").parent().show();
    if (history.hasClass("active"))
        $(".container").find(".card-history").parent().show();
    if (trivia.hasClass("active"))
        $(".container").find(".card-trivia").parent().show();
    if (sports.hasClass("active"))
        $(".container").find(".card-sports").parent().show();
    if (others.hasClass("active"))
        $(".container").find(".card-others").parent().show();

    if ((art.hasClass("active") && business.hasClass("active") && scitech.hasClass("active") && history.hasClass("active") && trivia.hasClass("active") && sports.hasClass("active") && others.hasClass("active")) ||
        !(art.hasClass("active") || business.hasClass("active") || scitech.hasClass("active") || history.hasClass("active") || trivia.hasClass("active") || sports.hasClass("active") || others.hasClass("active"))) {
        none.addClass("active");

        art.removeClass("active");
        business.removeClass("active");
        scitech.removeClass("active");
        history.removeClass("active");
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
    history.removeClass("active");
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

history.on("click", function () {
    if (history.hasClass("active")) {
        history.removeClass("active");
    } else {
        history.addClass("active");
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

$("#playModal").on("show.bs.modal", function (event) {
    let button;

    if ($("#main-box").attr("data-admin") === "true")
        button = $(event.relatedTarget).parent();
    else
        button = $(event.relatedTarget);

    let title = button.parent().find(".card-title").text();
    let desc = button.parent().find(".card-text").text();
    let id = button.parent().parent().find("#game_id").text();
    let author = button.parent().parent().find("#author").text();
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
    if (cats.includes("card-history")) {
        holder += '<div class="col bg-history border"><small>History</small></div>';
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
    modal.find("#modal-id").text("Game ID: " + id);
    modal.find("#modal-desc").text(desc);
    modal.find("#modal-author").text(author);
    modal.find("#modal-img").attr("src", img);
    modal.find("#modal-cats").html(holder);

    modal.find("#play-btn").attr("href", "play_game/" + id);
    modal.find("#lead-btn").attr("href", "leaderboard/" + id);

});

$("#deleteModal").on("show.bs.modal", function (event) {
    let button = $(event.relatedTarget).parent();

    let title = button.parent().find(".card-title").text();
    let id = button.parent().parent().find("#game_id").text();

    let modal = $(this);

    modal.find("#modal-desc").html(
        "The following game will be deleted: " +
        "<div class='subheading' style='font-size: 20px'>" + title + "</div>" +
        "Proceed? <br>");
    modal.find("#modal-id").text("Game ID: " + id);
    modal.find("a.btn").attr("href", "games/" + id + "/delete");

});