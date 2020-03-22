$("#email-login, #password-login").on("keyup", function() {
    let holder1 = $("#email-login").val().length;
    let holder2 = $("#password-login").val().length;

    if (holder1 !== 0 && holder2 !== 0 && $("#email-login").is(":valid")) {
        $("#submit-login").prop("disabled", false);
    } else {
        $("#submit-login").prop("disabled", true);
    }
});

$("#fname, #lname, #bday, #gender, #email-register, #password-register, #cpass").on("keyup", function() {
    let valid = []

    valid.push($("#fname").val().length > 0);
    valid.push($("#lname").val().length > 0);
    valid.push($("#bday").val().length > 0);
    valid.push($("#gender").val() !== "Your gender");
    valid.push($("#email-register").val().length > 0 && $("#email-register").is(":valid"));
    valid.push($("#password-register").val().length > 0);
    valid.push($("#cpass").val().length > 0);
    valid.push($("#password-register").val() === $("#cpass").val());

    if (valid.indexOf(false) === -1) {
        $("#submit-register").prop("disabled", false);
    } else {
        $("#submit-register").prop("disabled", true);
    }
});

$("#email-login, #password-login").on("focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-8");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-4");

});

$("#fname, #lname, #bday, #gender, #email-register, #password-register, #cpass").on("focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-4");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-8");

});

$("#email-login, #password-login, #fname, #lname, #bday, #gender, #email-register, #password-register, #cpass").on("blur", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-5");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-7");

});