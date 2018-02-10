$(document).ready(function(){
  var min,sec,timer;
  init();
  function init(){
    min = 25;
    sec = 59;
  }
  $('.mins').text(min);
  
  
  $('#st').click(function(){
    $('.mins').text(min);
    $(".check").attr("disabled", true);
    $('.mins').text(--min);
    $('.sep').text(":");
    
    update();
    
    timer = setInterval(update, 1000);
  })
  
  var update = function(){
    $('.secs').text(sec);
    --sec;
    if(min == 0 && sec<0)
      reset();
    else if(sec < 0 && min>0){
      sec = 59;
      min--;
      $(".mins").text(min);
    }
  }
  
  function reset(){
    clearInterval(timer);
    $('.secs').text("");
    $('.sep').text("");
    init();
    $('.mins').text(min);
    $(".check").attr("disabled", false);
  }
  
  $('#add').click(function(){
    min++;
    $('.mins').text(min);
  });
  
  $('#minus').click(function(){
    if(min == 1)
      alert("You can't minimize it more");
    else{
      min--;
      $('.mins').text(min);
    }
  });
  
  $('#re').click(function(){
    reset();
  });
  
});
