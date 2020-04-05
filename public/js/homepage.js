$("#playModal").on("show.bs.modal", function (event) {
    let button = $(event.relatedTarget);

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

});