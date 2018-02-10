var arr = [];
var res;

var dataStruct = function(title, snippet){
  this.title = title;
  this.snippet = snippet;
}

function getData(){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + $('#search').val(),
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data){
       console.log(data.query);
       $(".results").empty();
        arr = [];
        var temp = data.query.search;
        if (data.query.searchinfo.totalhits === 0){ 
				  alert('Your search did not match any documents');
			    return;
        }
       // res = '<div class="well queries">';
        for(var i in temp){
          arr.push(new dataStruct(temp[i].title, temp[i].snippet));
          res = '<div class="res well"><a href = "https://en.wikipedia.org/wiki/' + temp[i].title + '"target= "_blank"><h3>'+ temp[i].title +'</h3></a><p>' + temp[i].snippet +'</p></div><br>'; 
        $('.results').append(res);
      }
    } 
  });
  
}

$(document).keypress(function(e){
  if(e.which == 13){
    //alert('You pressed enter!' + $('#search').val());
    $('.search-bar').css({'margin-top':'5%'});
    if($('#search').val() == "") alert("Enter Keyword!");
    else getData();
  }
});

$('.random').click(function(){
  var url = 'https://en.wikipedia.org/wiki/Special:Random';
  window.open(url,'_blank');
});
