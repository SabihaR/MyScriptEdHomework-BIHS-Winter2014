$(document).ready(function(){

    $('#button').click(function(){
        var post = $('#postText').val();
        
        $('#wall').prepend("<div id='like'>" + post + "<br><button class='like'>Like</button><br><br></div>");
        
        setTimeout(function(){
            $('#like').remove();
            }, 5000);
            
        $('.like').click(function(){
        $(this).text("Unlike");
    });
    });
    });