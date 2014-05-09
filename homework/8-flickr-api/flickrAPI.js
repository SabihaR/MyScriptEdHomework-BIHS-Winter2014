$(document).ready(function(){
    $('#submit').click(function(){
    $("#body").html("");
    var text = $('#textBox').val();
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c9f777eb7446f34a7261dc1a54be4b2&tags=" + text + "&has_geo=1&extras=geo&format=json&jsoncallback=?", test);
    });
  function test(data)
  {
    $.each(data.photos.photo, function(i,item)
{
            var storeID = item.id;
            var storeFarm = item.farm;
            var storeSecret = item.secret;
            var storeServer = item.server;
            var links = "http://farm" + storeFarm + ".staticflickr.com/" + storeServer +"/"+ storeID +"_" + storeSecret + ".jpg";
            $('#body').prepend("<img src=" + links + " height='200' width='200'>");
           });
}
    
    });