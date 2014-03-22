$(document).ready(function(){
    
    $('.box').click(function()
    {
       var click = $(this).attr("id"); 
       alert("you just clicked " + click);
    });
    
    $('#reset').click(function()
    {
      alert("Reset clicked");
    });
    
    });