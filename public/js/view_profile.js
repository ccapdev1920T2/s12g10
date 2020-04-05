$( document ).ready(function() {
    $("#button").click(function (){
        if ($('.game-created').css("display")== "none" ){
            $('.game-created').show();
            $('#button').html('Show Less')
        }
        else {
            $('.game-created').hide();
            $('#button').html('Show More')

        }
    })
    $("#button2").click(function (){
        if ($('.game-completed').css("display")== "none" ){
            $('.game-completed').show();
            $('#button2').html('Show Less')

        }
        else {
            $('.game-completed').hide();
            $('#button2').html('Show More')

        }
    })
    // $(".delete").click(function (){
    //     $(".prof_subtext1").text(parseInt($(".prof_subtext1").text())-1);
    //     if ($(this).parent().parent().parent().hasClass('game-created')){
    //         $(this).parent().parent().parent().hide();

    //     }
    //     else if ($(this).parent().parent().parent().next().hasClass('game-created')){
    //         console.log('1');
    //         $(this).parent().parent().parent().next().removeClass('game-created');
    //         $(this).parent().parent().parent().hide();
    //     }
    //     else if ($(this).parent().parent().parent().next().next().hasClass('game-created')){
    //         console.log('1');
    //         $(this).parent().parent().parent().next().next().removeClass('game-created');
    //         $(this).parent().parent().parent().hide();
    //     }
    //     else if ($(this).parent().parent().parent().next().next().next().hasClass('game-created')){
    //         console.log('1');
    //         $(this).parent().parent().parent().next().next().next().removeClass('game-created');
    //         $(this).parent().parent().parent().hide();
    //     }
    //     else{
    //         $(this).parent().parent().parent().hide();
    //     }

    // })
    // $(".delete2").click(function (){
    //     $(".prof_subtext2").text(parseInt($(".prof_subtext2").text())-1);
    //     if ($(this).parent().parent().parent().hasClass('game-completed')){
    //         $(this).parent().parent().parent().hide();

    //     }
    //     else if ($(this).parent().parent().parent().next().hasClass('game-completed')){
    //         console.log('1');
    //         $(this).parent().parent().parent().next().removeClass('game-completed');
    //         $(this).parent().parent().parent().hide();
    //     }
    //     else if ($(this).parent().parent().parent().next().next().hasClass('game-completed')){
    //         console.log('1');
    //         $(this).parent().parent().parent().next().next().removeClass('game-completed');
    //         $(this).parent().parent().parent().hide();
    //     }
    //     else if ($(this).parent().parent().parent().next().next().next().hasClass('game-completed')){
    //         console.log('1');
    //         $(this).parent().parent().parent().next().next().next().removeClass('game-completed');
    //         $(this).parent().parent().parent().hide();
    //     }
    //     else{
    //         $(this).parent().parent().parent().hide();
    //     }

    // })
    $("#playModal").on("show.bs.modal", function (event) {
        let button = $(event.relatedTarget).parent();
    
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
        modal.find("a.btn").attr("href","/view_profile/"+ id + "/delete");
    });
});