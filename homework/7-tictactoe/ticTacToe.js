$(document).ready(function(){
    var score = 0;
    $('#score').text("Score: " + score);
    var countClick = 0;
    function check(x, y, z){
        if($('#' + x).text() == "X" && $('#' + y).text() == "X" && $('#' + z).text() == "X"){
                $('#' + x).css("border", "solid red 10px");
                $('#' + y).css("border", "solid red 10px");
                $('#' + z).css("border", "solid red 10px");
                $('#table').animate({opacity:'0.4'},"slow");
                $('#p').html("<div id='msg'>Game Over!</div>");
                $('#msg').animate({fontSize:'5em'},"slow");
            }
        else if($('#' + x).text() == "O" && $('#' + y).text() == "O" && $('#' + z).text() == "O"){
                $('#' + x).css("border", "solid red 10px");
                $('#' + y).css("border", "solid red 10px");
                $('#' + z).css("border", "solid red 10px");
                $('#table').animate({opacity:'0.4'},"slow");
                $('#p').html("Game Over!");
                $('#p').animate({fontSize:'5em'},"slow");
            }
        }

    $('.box').click(function(){
    countClick += 1;
        
        if(countClick == 1){
            $(this).text("X");
            check(0, 1, 2);
            check(0, 3, 6);
            check(0, 4, 8);
            check(2, 5, 8);
            check(2, 4, 6);
            check(1, 4, 7);
            check(3, 4, 5);
            check(6, 7, 8);
            }
        if(countClick == 2){
            $(this).text("O");
            countClick = 0;
            check(0, 1, 2);
            check(0, 3, 6);
            check(0, 4, 8);
            check(2, 5, 8);
            check(2, 4, 6);
            check(1, 4, 7);
            check(3, 4, 5);
            check(6, 7, 8);
        }
    });
       
    $('#reset').click(function(){
        $('#score').text("Score: " + 0);
        $('.box').text(" ");
        $('#table').animate({opacity:'initial'},"fast");
        $('#msg').remove();
        $('.box').css("border", "none");
        countClick = 0;
    });
});