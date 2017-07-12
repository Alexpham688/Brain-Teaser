// accordian
var action = "click";
var speed = "500";

$(document).ready(function(){
     //question handler
  $("li.question").on(action,function(){
    $(this).next()
    //get next element
      .slideToggle(speed)
        //select all other answers
        .siblings("li.answer")
          .slideUp();
        //get image for active question
    var img = $(this).children("img");
    //remove rotate class for all images except active
    $("img").not(img).removeClass("rotate");
    //toggle rotate class
    img.toggleClass("rotate");
    });
});
