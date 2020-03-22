function startCountdown (date, mins) {

    let target = new Date(date.getTime() + mins * 60000);

    let x = setInterval(function() {

        let now = new Date().getTime();
        let distance = target - now;

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

    }, 1000);

}

$("#start-btn").on("click", function () {

    $(".answer-holder").removeAttr("disabled");
    $("#start-btn").css("display", "none");
    $("#pause").show();
    $("#give-up").show();


    startCountdown(new Date(), 3);

});