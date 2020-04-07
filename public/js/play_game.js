let interval;
let correctAnswers = [];

const COMPLETE_ANSWERS = 1;
const GIVE_UP = 2;
const TIMER_END = 3;

function startCountdown (date, mins) {

    let target = new Date(date.getTime() + mins * 60000);

    interval = setInterval(function() {

        let currTime = new Date().getTime();
        let distance = target - currTime;

        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);

        $("#clock-holder").attr("data-time", (m + s / 60).toString());
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
            endGame(TIMER_END);
        }

    }, 1000);

}

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

function endGame (status) {

    clearInterval(interval);

    let count = parseInt($("#quiz").attr("data-score"), 10);
    let total = parseInt($("#quiz").attr("data-length"), 10);

    let accuracy = (count / total * 100) === 100 ? 100 : (count / total * 100).toFixed(2);

    $("#answer-header").removeClass("answer-wrapper").addClass("answer-wrapper-final");
    $("#answer").prop("disabled", true).attr("placeholder", "game over");
    $("#quit-btn, #pause-btn").hide();
    $(window).scrollTop(900);

    let timeFinished = $("#record-btn").attr("data-time") - $("#clock-holder").attr("data-time");
    let game_id = $("#record-btn").attr("data-id");

    $("#record-btn").show().attr(
        "href", "/play_game/" + game_id + "/" + timeFinished + "/" + count,
    );

    $("#quiz").children("[data-answer]").each(function (index) {

        let idString = "#answer-" + index;
        let wrapper = $(idString);

        let selector = "div" + idString + " > div.answer-holder";
        let holder = $(selector);

        if (holder.text() === "") {
            holder.text(wrapper.attr("data-answer"));
        }

    });

    switch (status) {

        case COMPLETE_ANSWERS:
            $("#clock-holder").css("color", "#3CACAE");
            $("#accuracy-holder").show().text(accuracy + "%").css("color", "#3CACAE");
            break;

        case GIVE_UP:
            if (accuracy >= 75) {
                $("#clock-holder").css("color", "#3CACAE");
                $("#accuracy-holder").show().text(accuracy + "%").css("color", "#3CACAE");
            } else {
                $("#clock-holder").css("color", "#C16C6C");
                $("#accuracy-holder").show().text(accuracy + "%").css("color", "#C16C6C");
            }
            break;

        case TIMER_END:
            $("#clock-holder").css("animation", "");
            $("#clock-holder").html("00:00");
            if (accuracy >= 75) {
                $("#clock-holder").css("color", "#3CACAE");
                $("#accuracy-holder").show().text(accuracy + "%").css("color", "#3CACAE");
            } else {
                $("#clock-holder").css("color", "#C16C6C");
                $("#accuracy-holder").show().text(accuracy + "%").css("color", "#C16C6C");
            }
            break;
    }


}

$("#start-btn").on("click", function () {

    $("#start-btn").css("display", "none");
    $("#pause-btn").show();
    $("#quit-btn").show();
    $(".question-wrapper").css("filter", "blur(0px)");
    $(".answer-holder").removeAttr("disabled").attr("placeholder", "your answer here");

    $("#quiz").children("[data-answer]").each(function () {
        let holder = $(this).attr("data-answer");
        holder = holder.toString().toLowerCase();
        correctAnswers.push(holder);
    });

    let time = $("#clock-holder").attr("data-time");

    startCountdown(new Date(), time);

});

$("#pause-btn").on("click", function () {
    $(".question-wrapper").css("filter", "blur(25px)");
    $("#answer").prop("disabled", true).attr("placeholder", "press resume to enable");
    $("#pause-btn").hide();
    $("#resume-btn").show();

    clearInterval(interval);
});

$("#resume-btn").on("click", function () {
    $(".question-wrapper").css("filter", "blur(0px)");
    $("#answer").removeAttr("disabled").attr("placeholder", "your answer here");
    $("#pause-btn").show();
    $("#resume-btn").hide();

    let time = $("#clock-holder").attr("data-time");

    startCountdown(new Date(), time);
});

$("#quit-btn").on("click", function () {
    endGame(GIVE_UP);
});

$("#answer").on("keyup", function (event) {

    let field = $(this);
    let parent = $("#quiz");

    let answer = field.val().toLowerCase();
    let count = parseInt(parent.attr("data-score"), 10);
    let total = parseInt(parent.attr("data-length"), 10);

    correctAnswers.forEach(function (correct, index) {

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

            let idString = "#answer-" + index;
            let wrapper = $(idString);

            let selector = "div" + idString + " > div.answer-holder";
            let holder = $(selector);

            if (wrapper.hasClass("answer-wrapper-final") === false) {
                holder.text(wrapper.attr("data-answer"));
                wrapper.removeClass("answer-wrapper").addClass("answer-wrapper-final");
                field.val("");

                count++;
                $("#quiz").attr("data-score", count.toString());
            } else {
                field.val("");
            }

        }

        if (count === total) {
            endGame(COMPLETE_ANSWERS);
        }

    });

});