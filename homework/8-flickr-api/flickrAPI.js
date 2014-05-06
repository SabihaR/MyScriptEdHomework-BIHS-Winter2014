$(document).ready(function(){
    
    $('#submit').click(function(){
        var text = $('#textbox').val();
        $('#body').prepend(text);
    });
    
    });