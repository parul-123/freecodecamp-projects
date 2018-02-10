var api = "https://fcc-weather-api.glitch.me/api/current?";
var unit = 'C';
var tempCel;

$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lon = "lon=" + position.coords.longitude;
      var lat = "lat=" + position.coords.latitude;
      getData(lon,lat);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  $("#unit").click(function(){
    var temp = $("#unit").text();
    var newTemp = (temp == 'C' ? 'F' : 'C');
    if(newTemp == 'F'){
      var fah = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
       $("#temp").text(fah + " " + String.fromCharCode(176));
    }else {
      $("#temp").text(tempCel + " " + String.fromCharCode(176));
    }
    $("#unit").text(newTemp); 
  })
});

function getData(lat,lon){
  var urlTemp = api + lat + "&" + lon;
  $.ajax({
    url: urlTemp,
    success: function(data){
     // var data = JSON.parse(res);
      $("#place").text(data.name + ", " + data.sys.country);
     tempCel = Math.round(data.main.temp * 10) / 10; 
     $("#temp").text(tempCel + " " + String.fromCharCode(176));
      $("#unit").text(unit); $("#desc").text(data.weather[0].description);
      var source = data.weather[0].icon;
     // $("#icon").text(source);
      $("#icon").html('<img src="' + source + '" alt="weather-icon">');
    }
  })
}
