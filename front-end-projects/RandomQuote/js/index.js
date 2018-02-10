function getQuote(){
  $.ajax({
    headers: {
      "X-Mashape-Key": "I4lEWfZo00mshmPUvC6qDRZxLFqTp1seYdMjsnwkVtMKs9m7Ex",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
    success: function(res){
      var data = JSON.parse(res);
      $("#text").text(" "+ data.quote);
   $("#author").text( data.author);
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quote + '" ' + data.author));
    },
    error: function(err) { alert(err); }
  });
}

$(document).ready(function() {
  getQuote();
});

$('.button').on("click",function(){
    getQuote();
  });
