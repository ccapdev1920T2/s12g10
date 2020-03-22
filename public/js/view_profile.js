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
    $(".delete").click(function (){
        $(".prof_subtext1").text(parseInt($(".prof_subtext1").text())-1);
        if ($(this).parent().parent().parent().hasClass('game-created')){
            $(this).parent().parent().parent().hide();

        }
        else if ($(this).parent().parent().parent().next().hasClass('game-created')){
            console.log('1');
            $(this).parent().parent().parent().next().removeClass('game-created');
            $(this).parent().parent().parent().hide();
        }
        else if ($(this).parent().parent().parent().next().next().hasClass('game-created')){
            console.log('1');
            $(this).parent().parent().parent().next().next().removeClass('game-created');
            $(this).parent().parent().parent().hide();
        }
        else if ($(this).parent().parent().parent().next().next().next().hasClass('game-created')){
            console.log('1');
            $(this).parent().parent().parent().next().next().next().removeClass('game-created');
            $(this).parent().parent().parent().hide();
        }
        else{
            $(this).parent().parent().parent().hide();
        }

    })
    $(".delete2").click(function (){
        $(".prof_subtext2").text(parseInt($(".prof_subtext2").text())-1);
        if ($(this).parent().parent().parent().hasClass('game-completed')){
            $(this).parent().parent().parent().hide();

        }
        else if ($(this).parent().parent().parent().next().hasClass('game-completed')){
            console.log('1');
            $(this).parent().parent().parent().next().removeClass('game-completed');
            $(this).parent().parent().parent().hide();
        }
        else if ($(this).parent().parent().parent().next().next().hasClass('game-completed')){
            console.log('1');
            $(this).parent().parent().parent().next().next().removeClass('game-completed');
            $(this).parent().parent().parent().hide();
        }
        else if ($(this).parent().parent().parent().next().next().next().hasClass('game-completed')){
            console.log('1');
            $(this).parent().parent().parent().next().next().next().removeClass('game-completed');
            $(this).parent().parent().parent().hide();
        }
        else{
            $(this).parent().parent().parent().hide();
        }

    })


});