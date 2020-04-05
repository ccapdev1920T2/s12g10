let isRunning = true;
let target;
let currTime;

function startCountdown (date, mins) {

    target = new Date(date.getTime() + mins * 60000);

    let x = setInterval(function() {

        if (isRunning) {

            currTime = new Date().getTime();
            let distance = target - currTime;

            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / 1000);

            m = m.toString().padStart(2, "0");
            s = s.toString().padStart(2, "0");

            $("#clock-holder").html(m + ":" + s);

            if (distance < 60000) {
                $("#clock-holder").css("color", "#C26DBC");
            }

            if (distance < 30000) {
                $("#clock-holder").css("color", "#C16C96");
            }

            if (distance < 10000) {
                $("#clock-holder").css("animation", "gameIsEnding 0.5s infinite");
            }

            if (distance < 0) {
                clearInterval(x);
                $("#clock-holder").html("00:00");
                $("#clock-holder").css("color", "black");
                $("#clock-holder").css("animation", "");
                $(".answer-holder").prop("disabled", true);
            }

        } else {

        }

    }, 1000);

}

$("#start-btn").on("click", function () {

    $("#start-btn").css("display", "none");
    $("#pause").show();
    $("#give-up").show();
    $("#leaderboard").prop('disabled', true);
    $(".question-wrapper").css("filter", "blur(0px)");
    $(".answer-holder").removeAttr("disabled").attr("placeholder", "your answer here");

    let time = $("#clock-holder").attr("data-time");

    startCountdown(new Date(), time);

});

$("#pause-btn").on("click", function () {
    $(".question-wrapper").css("filter", "blur(25px)");
    $(".answer-holder").prop("disabled", true).attr("placeholder", "press resume to enable");
    $("#pause").hide();
    $("#resume").show();
    isRunning = false;
});

$("#resume-btn").on("click", function () {
    $(".question-wrapper").css("filter", "blur(0px)");
    $(".answer-holder").removeAttr("disabled").attr("placeholder", "your answer here");
    $("#pause").show();
    $("#resume").hide();
    isRunning = true;
});

$(".answer-holder").on("keyup", function (event) {

    let field = $(this);
    let answer = field.attr("data-answer");

    console.log(answer);

});