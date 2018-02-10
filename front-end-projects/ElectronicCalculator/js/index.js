$('#clear').click(function(){
  var foo = document.getElementById('textEdit');
  foo.value = "";
});

$('button').click(function(){
  var temp = $(this).attr("value");
  var foo = document.getElementById('textEdit');
  if(temp === "="){
    var res = eval(foo.value);
    foo.value = res;
  }
  else if(temp != ""){
    foo.value += temp;
  }
});
