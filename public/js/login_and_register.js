$("#email-login, #password-login").on("keyup", function() {
    let email = validator.trim($("#email-login").val());
    let pw = validator.trim($("#password-login").val());

    let emailEmpty = validator.isEmpty(email);
    let emailValid = validator.isEmail(email);
    let pwEmpty = validator.isEmpty(pw);

    if (!emailEmpty && !pwEmpty && emailValid) {
        $("#submit-login").prop("disabled", false);
    } else {
        $("#submit-login").prop("disabled", true);
    }
});

function checkFN (changeDisp) {

    let empty = validator.isEmpty(validator.trim($("#fname").val()));

    if (empty) {
        $("#fname").val("");
    }

    if (changeDisp) {

        if (empty) {
            $("#fname").css("background-color", "lightcoral");
            $("#fn-label").text("First name: Name cannot be empty");
        } else {
            $("#fname").css("background-color", "");
            $("#fn-label").text("First name:");
        }

    }

    return !empty;

}

function checkLN (changeDisp) {

    let empty = validator.isEmpty(validator.trim($("#lname").val()));

    if (empty) {
        $("#lname").val("");
    }

    if (changeDisp) {
        if (empty) {
            $("#lname").css("background-color", "lightcoral");
            $("#ln-label").text("Last name: Name cannot be empty");
        } else {
            $("#lname").css("background-color", "");
            $("#ln-label").text("Last name:");
        }
    }

    return !empty;

}

function checkBDay (changeDisp = false) {
    let bday = validator.trim($("#bday").val());

    let isEmpty = validator.isEmpty(bday);
    let isAfter = validator.isAfter(bday, new Date().toDateString());

    let valid = !isEmpty && !isAfter;

    if (changeDisp) {
        if (!valid) {
            $("#bday").css("background-color", "lightcoral");
            $("#bday-label").text("Birthday: Birthday must be valid");
        } else {
            $("#bday").css("background-color", "");
            $("#bday-label").text("Birthday:");
        }
    }

    return valid;
}

function checkGender (changeDisp = false) {

    let valid = $("#gender").val() !== null;

    if (changeDisp) {
        if (valid) {
            $("#gender").css("background-color", "");
            $("#gender-label").text("Gender:");
        } else {
            $("#gender").css("background-color", "lightcoral");
            $("#gender-label").text("Gender: Please pick one");
        }
    }

    return valid;
}

function validEmail (cb, changeDisp = false) {

    let email = validator.trim($("#email-register").val());
    let empty = validator.isEmpty(email);
    let valid = validator.isEmail(email);

    if (!empty) {

        if (valid) {

            $.get("/checkDupe", {email: email}, function (result) {

                if (result.email === email) {

                    if (changeDisp) {
                        $("#email-register").css("background-color", "lightcoral");
                        $("#email-label").text("Email address: This email is already in use.");
                    }
                    return cb(false);

                } else {

                    if (changeDisp) {
                        $("#email-register").css("background-color", "");
                        $("#email-label").text("Email address:");
                    }
                    return cb(true);

                }

            });

        } else {

            if (changeDisp) {
                $("#email-register").css("background-color", "lightcoral");
                $("#email-label").text("Email address: Invalid email");
            }
            return cb(false);

        }

    } else {

        if (changeDisp) {
            $("#email-register").css("background-color", "lightcoral");
            $("#email-label").text("Email address: Email cannot be empty");
        }
        return cb(false);

    }

}

function validPass (changeDisp = false) {

    let valid = validator.isLength(validator.trim($("#password-register").val()), {min : 8});

    if (valid) {

        if (changeDisp) {
            $("#password-register").css("background-color", "");
            $("#pw-label").text("Password:");
        }
        $("#cpass").prop("disabled", false);

    } else {

        if (changeDisp) {
            $("#password-register").css("background-color", "lightcoral");
            $("#pw-label").text("Password: Should be at least 8 characters");
        }
        $("#cpass").prop("disabled", true).val("");

    }

    return valid;

}

function confirmPass (changeDisp = false) {

    let pw = validator.trim($("#password-register").val());
    let cpw = validator.trim($("#cpass").val());

    if (changeDisp) {

        if (pw !== cpw) {
            $("#password-register, #cpass").css("background-color", "lightcoral");
            $("#cpass-label").text("Confirm password: Passwords do not match");
        } else {
            $("#password-register, #cpass").css("background-color", "");
            $("#cpass-label").text("Confirm password:");
        }

    }

    return pw === cpw;

}

function checkValid (changeDisp = false) {

    let valid = [];
    valid.push(checkFN(changeDisp));
    valid.push(checkLN(changeDisp));
    valid.push(checkBDay(changeDisp));
    valid.push(checkGender(changeDisp));

    let pass = validPass(changeDisp);
    valid.push(pass);

    if (pass) {
        valid.push(confirmPass(changeDisp));
    }

    validEmail(function (val) {

        valid.push(val);

        if (valid.indexOf(false) === -1) {
            $("#submit-register").prop("disabled", false);
        } else {
            $("#submit-register").prop("disabled", true);
        }

    }, changeDisp);

}

$("#fname").on("keyup", function () {

    checkFN(true);
    checkValid();

});

$("#lname").on("keyup",function () {

    checkLN(true);
    checkValid();

});

$("#bday").on("keyup change", function () {

    checkBDay(true);
    checkValid();

});

$("#email-register").on("keyup", function () {

    validEmail(function (val) {}, true);
    checkValid();

});

$("#password-register").on("keyup", function () {

    validPass( true);
    checkValid();

});

$("#cpass").on("keyup", function () {

    confirmPass( true);
    checkValid();

});

$("#gender").on("click change focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-4");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-8");

    clearIncorrectsLogin();

    checkGender(true);
    checkValid();

});

function clearIncorrectsSignup () {

    $("#fname, #lname, #bday, #email-register, #password-register, #cpass").css("background-color", "");
    $("#gender").css("background-color", "").val("Your gender");

    $("#fn-label").text("First name:");
    $("#ln-label").text("Last name:");
    $("#bday-label").text("Birthday:");
    $("#gender-label").text("Gender:");
    $("#email-label").text("Email address:");
    $("#pw-label").text("Password:");
    $("#cpass-label").text("Confirm password:");

};

function clearIncorrectsLogin () {
    $("#email-login, #password-login").css("background-color", "");
    $("#elogin").text("Email address:");
    $("#plogin").text("Password:");
}

$("#email-login, #password-login, #submit-login, #guest").on("focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-8");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-4");

    clearIncorrectsSignup();

});

$("#fname, #lname, #gender, #email-register, #password-register, #cpass, #submit-register, #reset-register").on("focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-4");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-8");

    clearIncorrectsLogin();

});

$("#email-login, #password-login, #submit-login, #guest, #fname, #lname, #bday, #gender, #email-register, #password-register, #cpass, #submit-register, #reset-register").on("blur", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-5");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-7");

});

$("#reset-register").on("click", function () {
    $("#submit-register").prop("disabled","true");
    clearIncorrectsSignup();
});