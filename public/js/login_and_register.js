function checkFN (changeDisp) {

    let empty = validator.isEmpty(validator.trim($("#fname").val()));

    if (empty) {
        $("#fname").val("");
    }

    if (changeDisp) {

        if (empty) {
            $("#fname").addClass("wrong");
            $("#fnameError").text("Name cannot be empty");
        } else {
            $("#fname").removeClass("wrong");
            $("#fnameError").text("");
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
            $("#lname").addClass("wrong");
            $("#lnameError").text("Name cannot be empty");
        } else {
            $("#lname").removeClass("wrong");
            $("#lnameError").text("");
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
            $("#bday").addClass("wrong");
            $("#bdayError").text("Birthday must be valid");
        } else {
            $("#bday").removeClass("wrong");
            $("#bdayError").text("");
        }
    }

    return valid;
}

function checkGender (changeDisp = false) {

    let valid = $("#gender").val() !== null;

    if (changeDisp) {
        if (valid) {
            $("#gender").removeClass("wrong");
            $("#genderError").text("");
        } else {
            $("#gender").addClass("wrong");
            $("#genderError").text("Please pick one");
        }
    }

    return valid;
}

function validEmail (cb, changeDisp = false) {

    let email = validator.trim($("#emailRegister").val());
    let empty = validator.isEmpty(email);
    let valid = validator.isEmail(email);

    if (!empty) {

        if (valid) {

            $.get("/checkDupe", {email: email}, function (result) {

                if (result.email === email) {

                    if (changeDisp) {
                        $("#emailRegister").addClass("wrong");
                        $("#emailRegisterError").text("This email is already in use.");
                    }
                    return cb(false);

                } else {

                    if (changeDisp) {
                        $("#emailRegister").removeClass("wrong");
                        $("#emailRegisterError").text("");
                    }
                    return cb(true);

                }

            });

        } else {

            if (changeDisp) {
                $("#emailRegister").addClass("wrong");
                $("#emailRegisterError").text("Invalid email");
            }
            return cb(false);

        }

    } else {

        if (changeDisp) {
            $("#emailRegister").addClass("wrong");
            $("#emailRegisterError").text("Email cannot be empty");
        }
        return cb(false);

    }

}

function validPass (changeDisp = false) {

    let valid = validator.isLength(validator.trim($("#passRegister").val()), {min : 8});

    if (valid) {

        if (changeDisp) {
            $("#passRegister").removeClass("wrong");
            $("#passRegisterError").text("");
        }
        $("#cpass").prop("disabled", false);

    } else {

        if (changeDisp) {
            $("#passRegister").addClass("wrong");
            $("#passRegisterError").text("Should be at least 8 characters");
        }
        $("#cpass").prop("disabled", true).val("");

    }

    return valid;

}

function confirmPass (changeDisp = false) {

    let pw = validator.trim($("#passRegister").val());
    let cpw = validator.trim($("#cpass").val());

    if (changeDisp) {

        if (pw !== cpw) {
            $("#passRegister, #cpass").addClass("wrong");
            $("#cpassError").text("Passwords do not match");
        } else {
            $("#passRegister, #cpass").removeClass("wrong");
            $("#cpassError").text("");
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
            $("#submitRegister").prop("disabled", false);
        } else {
            $("#submitRegister").prop("disabled", true);
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

$("#emailRegister").on("keyup", function () {

    validEmail(function (val) {}, true);
    checkValid();

});

$("#passRegister").on("keyup", function () {

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

    $("#fname, #lname, #bday, #emailRegister, #passRegister, #cpass").css("background-color", "").removeClass("wrong");
    $("#gender").css("background-color", "").val("Your gender").removeClass("wrong");

    $("#fnameError, #lnameError, #bdayError, #genderError, #emailRegisterError, #passRegisterError, #cpassError").text("");

}

function clearIncorrectsLogin () {

    $("#emailLogin, #passLogin").css("background-color", "").removeClass("wrong");

    $("#emailLoginError, #passLoginError").text("");

}

$("#emailLogin, #passLogin, #submitLogin, #guest").on("focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-8");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-4");

    clearIncorrectsSignup();

});

$("#fname, #lname, #gender, #emailRegister, #passRegister, #cpass, #submitRegister, #resetRegister").on("focus", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-4");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-8");

    clearIncorrectsLogin();

});

$("#emailLogin, #passLogin, #submitLogin, #guest, #fname, #lname, #bday, #gender, #emailRegister, #passRegister, #cpass, #submitRegister, #resetRegister").on("blur", function () {

    $("#login-box").removeClass();
    $("#login-box").addClass("col-sm-5");

    $("#register-box").removeClass();
    $("#register-box").addClass("col-sm-7");

});

$("#resetRegister").on("click", function () {
    $("#submitRegister").prop("disabled","true");
    clearIncorrectsSignup();
});