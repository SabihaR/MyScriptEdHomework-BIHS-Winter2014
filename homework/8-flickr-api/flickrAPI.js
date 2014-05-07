$(document).ready(function(){
    
    $('#submit').click(function(){
    $.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c9f777eb7446f34a7261dc1a54be4b2&tags=clownfish%20sea&has_geo=1&extras=geo&format=json&jsoncallback=?", test);
    });
  function test(data)
  {
    $.each(data.photos.photo, function(i,item)
{
             alert(item.id);
           });
}
        //var text = $('#textBox').val();
        //$('#body').prepend(text);
    
    });