let isRunning = true;
let target;
let currTime;
let interval;

function startCountdown (date, mins) {

    target = new Date(date.getTime() + mins * 60000);

    interval = setInterval(function() {

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
                clearInterval(interval);
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
    $("#pause-btn").show();
    $("#quit-btn").show();
    $("#leaderboard").prop('disabled', true);
    $(".question-wrapper").css("filter", "blur(0px)");
    $(".answer-holder").removeAttr("disabled").attr("placeholder", "your answer here");

    let time = $("#clock-holder").attr("data-time");

    startCountdown(new Date(), time);

});

$("#pause-btn").on("click", function () {
    $(".question-wrapper").css("filter", "blur(25px)");
    $(".answer-holder").prop("disabled", true).attr("placeholder", "press resume to enable");
    $("#pause-btn").hide();
    $("#resume-btn").show();
    isRunning = false;
});

$("#resume-btn").on("click", function () {
    $(".question-wrapper").css("filter", "blur(0px)");
    $(".answer-holder").removeAttr("disabled").attr("placeholder", "your answer here");
    $("#pause-btn").show();
    $("#resume-btn").hide();
    isRunning = true;
});

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}


$(".answer-holder").on("keyup", function (event) {

    let field = $(this);
    let answer = field.val().toLowerCase();
    let correct = field.attr("data-answer").toLowerCase();
    let count = parseInt($("#quiz").attr("data-score"), 10);
    let total = parseInt($("#quiz").attr("data-length"), 10);

    let accepted;

    if (correct.length > 15) {
        let sim = similarity(answer, correct);
        if (sim >= 0.75) {
            accepted = true;
        } else {
            accepted = false;
        }
    } else {
        accepted = answer === correct;
    }

    if (accepted) {
        field   .val(field.attr("data-answer"))
                .removeClass("answer-holder")
                .addClass("answer-holder-final")
                .prop("disabled", "true")
                .css({
                    "background-color" : "#C26DBC",
                    "color" : "white"
                });

        count++;

        $("#quiz").attr("data-score", count.toString());
        console.log("accuracy: " + (count / total * 100) + "%");
    }

    if (count === total) {
        clearInterval(interval);
        $("#clock-holder").css("color", "#3CACAE");
        $("#accuracy-holder").show().text("100%").css("color", "#3CACAE");
        $("#quit-btn, #pause-btn").hide();
        $(window).scrollTop(900);
    }

});

$("#quit-btn").on("click", function () {
    let count = parseInt($("#quiz").attr("data-score"), 10);
    let total = parseInt($("#quiz").attr("data-length"), 10);

    let accuracy = (count / total * 100).toFixed(2);

    clearInterval(interval);
    $("#clock-holder").css("color", "#C16C6C");
    $("#accuracy-holder").show().text(accuracy + "%").css("color", "#C16C6C");
    $("#quit-btn, #pause-btn").hide();
    $(window).scrollTop(900);
});