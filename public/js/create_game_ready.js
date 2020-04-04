$(document).ready(function(){
    var questions = [];
    var list = $(".form-inline.row.mb-1");
    for (i = 0; i < 5; i++){
        questions.push(list[i]);
    }
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
        question.attr("id", "form" + (questions.length + 1))
        start.addClass("col-2");
        question_text.addClass("col-6");
        answer_text.addClass("col-3");
        close.addClass("col");
        var label = $("<label></label>");
        var input1 = $("<input>");
        var input2 = $("<input>");
        var button = $("<button></button>");
        label.addClass("subheading");
        label.text("Question " + (questions.length + 1) + ":");
        input1.addClass("form-control subheading");
        input1.attr("type", "text");
        input1.attr("placeholder", "Your question");
        input1.attr("size", "60");
        input1.attr("id", "question" + (questions.length + 1));
        input1.attr("name", "question" + (questions.length + 1));
        input2.addClass("form-control subheading");
        input2.attr("type", "text");
        input2.attr("placeholder", "Your answer");
        input2.attr("size", "25");
        input2.attr("id", "answer" + (questions.length + 1));
        input2.attr("name", "answer" + (questions.length + 1));
        button.addClass("btn btn-danger delete");
        button.attr("type", "button");
        button.text("x");
        button.attr("id", "delete" + (questions.length + 1));
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
        questions.push(question);
        if (questions.length == 50)
            $("#add_question").attr("disabled", true);
    });
    $(document).on("click", ".delete", function(){
        $("#add_question").attr("disabled", false);
        var id = $(this).attr("id");
        var number = id.substring(6);
        if (questions.length == 5){
            $("#question" + number).val("");
            $("#answer" + number).val("");
        }
        else{
            for(i = parseInt(number) - 1; i < questions.length - 1; i++){
                (($("#form" + (i + 1)).find("div.col-2")).find("label")).text("Question " + (i + 1) + ":");
                (($("#form" + (i + 1)).find("div.col-6")).find("#question" + (i + 1))).val($("#question" + (i + 2)).val());
                (($("#form" + (i + 1)).find("div.col-3")).find("#answer" + (i + 1))).val($("#answer" + (i + 2)).val());
            }
            $("#form" + questions.length).remove();
            var num = questions.length;
            list = $(".form-inline.row.mb-1");
            questions = [];
            for (i = 0; i < num-1; i++){
                questions.push(list[i]);
            }
        }
    });
});