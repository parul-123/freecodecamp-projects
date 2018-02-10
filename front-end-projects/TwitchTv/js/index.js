var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getData(){
  channels.forEach(function(channel){
    var url = "https://wind-bow.glitch.me/twitch-api/";
    
    $.getJSON(url+"streams/"+channel, function(data){
      var g,st;
      if(data.stream === null){
        g = "Offline";
        st = "offline";
      }
      else {
        g = data.stream.game;
        st = "online";
      }
      
      $.getJSON(url+"channels/"+channel, function(data){
        var logoImg = (data.logo != null ? data.logo : "#");
        var des = (st === "online" ? ": " + data.status : "");
        var title =  (data.display_name != null ? data.display_name : channel);
        
        
        var html = '<div class="row res" id="' + st + '"> <div class="col-xs-2 col-md-3 col-lg-3"> <img src="' + logoImg + '" id="logo" alt="Logo-Image" > </div> <div class="col-xs-2 col-md-3 col-lg-3"> <a href="' + data.url + '" target="_blank"><h3 class="title text-center">' + title +'</h3></a> </div>' +
      ' <div class="col-xs-8 col-md-6 col-lg-6"> <h4 class="description text-center">' + g + des + '</h4></div><hr></div>';
      
       
       st === "online" ? $("#bars").prepend(html) : $('#bars').append(html);
      });
    });
  });
  
}
$('.all').click(function(){
 $('.info-block').css('background-color','#999900');
  //getData();
  var all = $('#bars .row');
  all.each(function(index){ /* iterate through each one and show them */
    $(this).css({'display':'block'});
  });
});

$('.online').click(function(){
 $('.info-block').css('background-color','#666600');
  var online=$('#bars .row'); /* Select all div with class row in result div*/
  online.each(function(index){
    var toggle=$(this).attr('id'); /* take id attribute of that row to check if it is online or offline. */
    if(toggle=='online'){
      $(this).css({'display':'block'}); /* show */
    }
    else if(toggle=='offline'){
      $(this).css({'display':'none'}); /* hide */
    }
  });
});

$('.offline').click(function(){
  $('.info-block').css('background-color','#333300');
  var offline=$('#bars .row'); /* Select all div with class row in result div*/
  offline.each(function(index){
    var toggle=$(this).attr('id'); /* take id attribute of that row to check if it is online or offline. */
    if(toggle=='online'){
      $(this).css({'display':'none'}); /* hide */
    }
    else if(toggle=='offline'){
      $(this).css({'display':'block'}); /* show */
    }
  });
});

$(document).ready(function(){
  getData();
});
