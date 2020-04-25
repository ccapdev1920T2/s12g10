$("#filter-by-art, #filter-by-business, #filter-by-scitech, #filter-by-history, #filter-by-trivia, #filter-by-sports, #filter-by-others").on("click", function () {
    let bool = $(this).hasClass("active");
    if (bool === true) {
        if ($(this).attr("id") == "filter-by-art")
            $("#check-art").prop("checked", false);
        if ($(this).attr("id") == "filter-by-business")
            $("#check-business").prop("checked", false);
        if ($(this).attr("id") == "filter-by-scitech")
            $("#check-scitech").prop("checked", false);
        if ($(this).attr("id") == "filter-by-history")
            $("#check-history").prop("checked", false);
        if ($(this).attr("id") == "filter-by-trivia")
            $("#check-trivia").prop("checked", false);
        if ($(this).attr("id") == "filter-by-sports")
            $("#check-sports").prop("checked", false);
        if ($(this).attr("id") == "filter-by-others")
            $("#check-others").prop("checked", false);
        $(this).removeClass("active");
    } else {
        if ($(this).attr("id") == "filter-by-art")
            $("#check-art").prop("checked", true);
        if ($(this).attr("id") == "filter-by-business")
            $("#check-business").prop("checked", true);
        if ($(this).attr("id") == "filter-by-scitech")
            $("#check-scitech").prop("checked", true);
        if ($(this).attr("id") == "filter-by-history")
            $("#check-history").prop("checked", true);
        if ($(this).attr("id") == "filter-by-trivia")
            $("#check-trivia").prop("checked", true);
        if ($(this).attr("id") == "filter-by-sports")
            $("#check-sports").prop("checked", true);
        if ($(this).attr("id") == "filter-by-others")
            $("#check-others").prop("checked", true);
        $(this).addClass("active");
    }
});
$('input[type="checkbox"]').on("mouseenter",function(){
    if ($(this).attr("id") == "check-art")
        $("#filter-by-art").addClass("active");
    if ($(this).attr("id") == "check-business")
        $("#filter-by-business").addClass("active");
    if ($(this).attr("id") == "check-scitech")
        $("#filter-by-scitech").addClass("active");
    if ($(this).attr("id") == "check-history")
        $("#filter-by-history").addClass("active");
    if ($(this).attr("id") == "check-trivia")
        $("#filter-by-trivia").addClass("active");
    if ($(this).attr("id") == "check-sports")
        $("#filter-by-sports").addClass("active");
    if ($(this).attr("id") == "check-others")
        $("#filter-by-others").addClass("active");
});
$('input[type="checkbox"]').on("mouseleave",function(){
    if ($(this).attr("id") == "check-art" && !$(this).is(":checked"))
        $("#filter-by-art").removeClass("active");
    if ($(this).attr("id") == "check-business" && !$(this).is(":checked"))
        $("#filter-by-business").removeClass("active");
    if ($(this).attr("id") == "check-scitech" && !$(this).is(":checked"))
        $("#filter-by-scitech").removeClass("active");
    if ($(this).attr("id") == "check-history" && !$(this).is(":checked"))
        $("#filter-by-history").removeClass("active");
    if ($(this).attr("id") == "check-trivia" && !$(this).is(":checked"))
        $("#filter-by-trivia").removeClass("active");
    if ($(this).attr("id") == "check-sports" && !$(this).is(":checked"))
        $("#filter-by-sports").removeClass("active");
    if ($(this).attr("id") == "check-others" && !$(this).is(":checked"))
        $("#filter-by-others").removeClass("active");
});
$('input[type="checkbox"]').on("click",function(){
    let bool = $(this).is(":checked");
    if (bool === false) {
        if ($(this).attr("id") == "check-art")
            $("#filter-by-art").removeClass("active");
        if ($(this).attr("id") == "check-business")
            $("#filter-by-business").removeClass("active");
        if ($(this).attr("id") == "check-scitech")
            $("#filter-by-scitech").removeClass("active");
        if ($(this).attr("id") == "check-history")
            $("#filter-by-history").removeClass("active");
        if ($(this).attr("id") == "check-trivia")
            $("#filter-by-trivia").removeClass("active");
        if ($(this).attr("id") == "check-sports")
            $("#filter-by-sports").removeClass("active");
        if ($(this).attr("id") == "check-others")
            $("#filter-by-others").removeClass("active");
    } else {
        if ($(this).attr("id") == "check-art")
            $("#filter-by-art").addClass("active");
        if ($(this).attr("id") == "check-business")
            $("#filter-by-business").addClass("active");
        if ($(this).attr("id") == "check-scitech")
            $("#filter-by-scitech").addClass("active");
        if ($(this).attr("id") == "check-history")
            $("#filter-by-history").addClass("active");
        if ($(this).attr("id") == "check-trivia")
            $("#filter-by-trivia").addClass("active");
        if ($(this).attr("id") == "check-sports")
            $("#filter-by-sports").addClass("active");
        if ($(this).attr("id") == "check-others")
            $("#filter-by-others").addClass("active");
    }
});

function checkTitle(){
    let title = validator.trim($('#game_title').val());
    let isValidLength = validator.isLength(title, {min: 5, max: 50});
    return isValidLength;
}

function isValidTitle(titleCheck){

    let title = validator.trim($('#game_title').val());
    if(titleCheck) {
        $('#game_title_error').text('');
    }
    else if (validator.isEmpty(title)) {
        $('#game_title_error').text(`Game title should not be empty.`);
        $('#game_title').val('');
    }
    else {
        $('#game_title_error').text(`Game title should contain at least 5 characters and at most 50 characters.`);
    }

}

function checkDesc(){
    let description = validator.trim($('#game_description').val());
    let isValidLength = validator.isLength(description, {min: 10, max: 1000});
    return isValidLength;
}

function isValidDesc(descCheck){

    let description = validator.trim($('#game_description').val());

    if(descCheck) {
        $('#game_description_error').text('');
    }
    else if (validator.isEmpty(description)){
        $('#game_description_error').text(`Game description should not be empty.`);
        $('#game_description').val('');
    }
    else {
        $('#game_description_error').text(`Game description should contain at least 10 characters and at most 1000 characters.`);
    }

}

function checkTime(){
    let time = $('#game_duration').val();
    let isValidLength = time >= 3 && time <= 10;
    return isValidLength;
}

function isValidTime(timeCheck){

    let time = validator.trim($('#game_duration').val());

    if(timeCheck) {
        $('#game_duration_error').text('');
    }
    else if (validator.isEmpty(time)) {
        $('#game_duration_error').text(`Game duration should not be empty.`);
        $('#game_duration').val('');
    }
    else {
        $('#game_duration_error').text(`Game duration should be from 3 to 10 minutes only.`);
    }

}

function checkForm(){
    let form = true;
    for (let i = 0; i < $('.question').length; i++){
        let check1 = validator.trim($('#question' + (i + 1)).val());
        let check2 = validator.trim($('#answer' + (i + 1)).val());
        if (validator.isEmpty(check1) || validator.isEmpty(check2)){
            form = false;
            break;
        }
    }
    return form;
}

function isValidForm(formCheck){
    if(formCheck) {
        $('#questions_form_error').text('');
    }
    else{
        $('#questions_form_error').text(`Make sure there are no empty questions and answers.`);
        for (let i = 0; i < $('.question').length; i++){
            let check1 = validator.trim($('#question' + (i + 1)).val());
            let check2 = validator.trim($('#answer' + (i + 1)).val());
            if (validator.isEmpty(check1)){
                $('#question' + (i + 1)).val('');
            }
            if (validator.isEmpty(check2)){
                $('#answer' + (i + 1)).val('');
            }
        }
    }

}

function checkGenre(){
    if ($('.genre:checked').length > 0)
        return true;
    return false;
}

function isvalidGenre(genreCheck){
    if (genreCheck){
        $('#genre_error').text('');
    }
    else{
        $('#genre_error').text(`Have at least one genre checked.`);
    }
}

function validateField(field) {

    let validTitle = checkTitle();
    let validDesc = checkDesc();
    let validTime = checkTime();
    let validForm = checkForm();
    let validGenre = checkGenre();
    if (field.attr('id') == $('#game_title').attr('id')){
        isValidTitle(validTitle);
    }
    else if (field.attr('id') == $('#game_description').attr('id')){
        isValidDesc(validDesc);
    }
    else if (field.attr('id') == $('#game_duration').attr('id')){
        isValidTime(validTime);
    }
    else if (field.hasClass('genre')){
        isvalidGenre(validGenre);
    }
    else if (field.hasClass('question') || field.hasClass('answer')){
        isValidForm(validForm);
    }

    if (validTitle && validDesc && validTime && validGenre && validForm)
        $('#modify_game').prop('disabled', false);
    else
        $('#modify_game').prop('disabled', true);
}

$('#game_title').keyup(function(){
    validateField($('#game_title'));
    console.log("title")
});

$('#game_description').keyup(function(){
    validateField($('#game_description'));
    console.log("description")
});

$('#game_duration').keyup(function(){
    validateField($('#game_duration'));
    console.log("time")
});

$(document).ready(function() {

    $(document).on('click', '.genre', function() {
        validateField($(this));
        console.log("genre");     
    });
});

$(document).on('keyup', '.question', function(){
    validateField($(this));
    console.log('question');
})

$(document).on('keyup', '.answer', function(){
    validateField($(this));
    console.log('answer');
})

$(document).on("click", "#add_question", function(){
    $(".form-inline.row.justify-content-center").remove();
    var div_add = $("<div></div>")
    var button_add = $("<button></button>");
    div_add.addClass("form-inline row justify-content-center");
    button_add.addClass("btn btn-block");
    button_add.attr("type", "button");
    button_add.attr("id", "add_question");
    button_add.text("+");
    div_add.append(button_add);
    var question = $("<div></div>");
    var start = $("<div></div>");
    var question_text = $("<div></div>");
    var answer_text = $("<div></div>");
    var close = $("<div></div>");
    question.addClass("form-inline row mb-1");
    question.attr("id", "form" + ($('.question').length + 1))
    start.addClass("col-2");
    question_text.addClass("col-6");
    answer_text.addClass("col-3");
    close.addClass("col");
    var label = $("<label></label>");
    var input1 = $("<input>");
    var input2 = $("<input>");
    var button = $("<button></button>");
    label.addClass("subheading");
    label.text("Question " + ($('.question').length + 1) + ":");
    input1.addClass("form-control subheading question");
    input1.attr("type", "text");
    input1.attr("placeholder", "Your question");
    input1.attr("size", "60");
    input1.attr("id", "question" + ($('.question').length + 1));
    input1.attr("name", "question" + ($('.question').length + 1));
    input1.prop('required', true);
    input2.addClass("form-control subheading answer");
    input2.attr("type", "text");
    input2.attr("placeholder", "Your answer");
    input2.attr("size", "25");
    input2.attr("id", "answer" + ($('.question').length + 1));
    input2.attr("name", "answer" + ($('.question').length + 1));
    input2.prop('required', true);
    button.addClass("btn btn-danger delete");
    button.attr("type", "button");
    button.html("&times;");
    button.attr("id", "delete" + ($('.question').length + 1));
    start.append(label);
    question_text.append(input1);
    answer_text.append(input2);
    close.append(button);
    question.append(start);
    question.append(question_text);
    question.append(answer_text);
    question.append(close);
    $("#questions_form").append(question);
    $("#questions_form").append(div_add);
    if ($('.question').length == 50)
        $("#add_question").attr("disabled", true);
    $('#modify_game').prop('disabled', true);
});

$(document).on("click", ".delete", function(){
    $("#add_question").attr("disabled", false);
    var id = $(this).attr("id");
    var number = id.substring(6);
    if ($('.question').length == 5){
        $("#question" + number).val("");
        $("#answer" + number).val("");
    }
    else{
        for(i = parseInt(number) - 1; i < $('.question').length - 1; i++){
            (($("#form" + (i + 1)).find("div.col-2")).find("label")).text("Question " + (i + 1) + ":");
            (($("#form" + (i + 1)).find("div.col-6")).find("#question" + (i + 1))).val($("#question" + (i + 2)).val());
            (($("#form" + (i + 1)).find("div.col-3")).find("#answer" + (i + 1))).val($("#answer" + (i + 2)).val());
        }
        $("#form" + $('.question').length).remove();
    }
    for(let i = 0; i < $('.question').length; i++){
        validateField($('#question' + (i+1)));
        validateField($('#answer' + (i+1)));
    }
});

// window.onbeforeunload = function (event) {
//     // let button = $(event.relatedTarget);
//     //
//     // if (button.isEqualNode($("#modify_game"))) {}
//     // else {
//         return "Changes made will not be saved. Are you sure you want to leave?";
//     // }
// };