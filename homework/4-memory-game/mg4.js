$(document).ready(function(){
    var score = 0;
    $('#score').text('Score: ' + score);
	var countClick = 0;
    var firstClick = null;
    var secondClick = null;
    var click_id_1 = null;
    var click_id_2 = null;
    var trueCheck = 0;
    var pic = ["http://texaspowertosave.net/wp-content/uploads/2014/02/meme-faces-ragei-am-determined--face-meme-on-all-the-rage-faces-zsl54r7t.png", "http://img3.wikia.nocookie.net/__cb20121210005443/tomandjerry/images/5/53/Jerry_(10).png", "http://3.bp.blogspot.com/_oR7sYJzWZ1k/TNoLVxkbgxI/AAAAAAAAAdQ/8kYS6WYP2jQ/s320/JK0789.jpg", "http://animationbegins.files.wordpress.com/2011/12/maximus-horse-2-tangled-wallpaper.jpg", "http://img4.wikia.nocookie.net/__cb20130721002946/tomandjerry/images/7/7f/Tom_Cat.jpg", "http://nenadscuric.me/sites/default/files/images/portfolio/Tangled-Maximus-Horse-small.jpg", "http://cdn.alltheragefaces.com/img/faces/large/happy-cuteness-overload-l.png", "http://img3.wikia.nocookie.net/__cb20121210005443/tomandjerry/images/5/53/Jerry_(10).png", "http://3.bp.blogspot.com/_oR7sYJzWZ1k/TNoLVxkbgxI/AAAAAAAAAdQ/8kYS6WYP2jQ/s320/JK0789.jpg", "http://funny-pics-fun.com/wp-content/uploads/Very-Funny-Animal-Faces-8.jpg", "http://animationbegins.files.wordpress.com/2011/12/maximus-horse-2-tangled-wallpaper.jpg", "http://nenadscuric.me/sites/default/files/images/portfolio/Tangled-Maximus-Horse-small.jpg", "http://funny-pics-fun.com/wp-content/uploads/Very-Funny-Animal-Faces-8.jpg", "http://cdn.alltheragefaces.com/img/faces/large/happy-cuteness-overload-l.png", "http://texaspowertosave.net/wp-content/uploads/2014/02/meme-faces-ragei-am-determined--face-meme-on-all-the-rage-faces-zsl54r7t.png", "http://img4.wikia.nocookie.net/__cb20130721002946/tomandjerry/images/7/7f/Tom_Cat.jpg"];
    var flippedPic = [];
    for(var i=0; i < flippedPic.length; i++){ 
        flippedPic[i] = false;}
        $('.box').click(function(){
            countClick += 1;
            
            if(countClick == 1){
                click_id_1 = $(this).attr('id');
                firstClick = pic[click_id_1];
                $(this).html("<img src= " + firstClick + " />" );}
                
            else if(countClick == 2){
                click_id_2 = $(this).attr('id');
                secondClick = pic[click_id_2];
                $(this).html("<img src= " + secondClick + " />" );
                if(firstClick == secondClick){
                    score = score + 1;
                    $('#score').text('Score: ' + score);
                    flippedPic[click_id_1] = true;
                    flippedPic[click_id_2] = true;
                    }
                else{
                    setTimeout(function(){
                    $('#' + click_id_1).text("?");
                    $('#' + click_id_2).text("?");}, 500);
                    score = score - 1;
                    $('#score').text('Score: ' + score);
                    }
            countClick = 0;
            }
                
            for(var i=0; i<16; i++){
                if(flippedPic[i] === true){
                    trueCheck += 1;
                    }
                }
            
            if(trueCheck == 16){
                $('#toggle').animate({opacity:'0.4'},"slow");
                $('body').prepend("<div id='msg'>Game Over!</div>");
                $('#msg').animate({fontSize:'8em'},"slow");
                }
            else
                {trueCheck = 0;}
            });
    
    $('#reset').click(function(){
        $('.box').text("?");
        $('#score').text("Score: 0");
        $('#toggle').animate({opacity:'initial'},"fast");
        $('#msg').remove();
    });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    