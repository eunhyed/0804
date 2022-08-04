$(document).on("pagecreate" , "#layout"  , function(){

    /*sleep스와이퍼*/
    $("#sleep_1").swipeleft(function(){      
        $("#sleep_1").stop().animate({left:"-720px"},500, function(){
          $("#sleep_1").append(  $("#sleep_1l").eq(0) );
          $("#sleep_1").css("left","-360px");
        });
       
    });
  
    $("#sleep_1").swiperight(function(){
      $("#sleep_1").stop().animate({left:"0px"},500, function(){
        $("#sleep_1").append(  $("#sleep_1").eq(0) );
        $("#sleep_1").css("left","-360px");
      }); 
    });
  
    /*music스와이퍼*/
    $("#music_1").swipeleft(function(){      
      $("#music_1").stop().animate({left:"-720px"},500, function(){
        $("#music_1").append(  $("#music_1").eq(0) );
        $("#music_1").css("left","-360px");
      });
     
  });
  
  $("#music_1").swiperight(function(){
    $("#music_1").stop().animate({left:"0px"},500, function(){
      $("#music_1").append(  $("#music_1").eq(0) );
      $("#music_1").css("left","-360px");
    }); 
  });
});