$(document).ready(function(){
  var mark, valP, flag;
  var cells = document.querySelectorAll('li');
  var reset = document.getElementById('reset');
  
  function init(){
  $('.board').hide();
  $('.choose').show();
  flag=false;
  for(var i=0;i<cells.length;i++){
    cells[i].addEventListener('click', play, false);
    cells[i].textContent = ''
    cells[i].style.backgroundColor = '#dadada';
  }
    
  reset.addEventListener('click',resetGame, false);
}
init();
  
  function resetGame(){
    init();
  }
  $('.symbol').click(function(){
    mark = $(this).attr('value');
    valP = mark;
    $('.choose').hide();
    $('.board').show();
  });
  
  function play(){
    if(this.textContent == ''){
      this.textContent = mark;
      this.style.backgroundColor = '#ed4e6e';
      this.style.color = '#fff';
      var check = checkGame();
      if(!check){
        switchMark();
        computerMove();}
    }
  }
  
  function computerMove(){
      var empty = [];
      var randNum;
    
      cells.forEach(function(cell){
        if(cell.textContent == '')
          empty.push(cell);
      });
    
      randNum = Math.ceil(Math.random() * empty.length) - 1;
      empty[randNum].textContent = mark;
      empty[randNum].style.backgroundColor = '#485b6e';
      empty[randNum].style.color = '#fff';
      checkGame();
      switchMark();
  }
  
  
  function switchMark(){
    if(mark == 'X') mark='O';
    else mark = 'X';
  }
  
  function winner(a,b,c){
    if(a.textContent == mark && b.textContent == mark && c.textContent == mark){
      a.style.backgroundColor = '#CC8400';
      a.style.color = '#fff'; 
      b.style.backgroundColor = '#CC8400';
      b.style.color = '#fff';
      c.style.backgroundColor = '#CC8400';
      c.style.color = '#fff';
      
      flag=true;
      
      if(mark == valP)
        alert("           Congrats, You Won !! \n Click Reset Button if you want to play again");
      else alert("          Uh oh, you lost!  \n Click Reset Button if you want to play again"); 
      
      return true;
    }
    return false;
  }
  
  
  function checkGame(){
    winner(document.getElementById('one'), document.getElementById('two'), document.getElementById('three'));
  winner(document.getElementById('four'), document.getElementById('five'), document.getElementById('six'));
  winner(document.getElementById('seven'), document.getElementById('eight'), document.getElementById('nine'));
  winner(document.getElementById('one'), document.getElementById('four'), document.getElementById('seven'));
  winner(document.getElementById('two'), document.getElementById('five'), document.getElementById('eight'));
  winner(document.getElementById('three'), document.getElementById('six'), document.getElementById('nine'));
  winner(document.getElementById('one'), document.getElementById('five'), document.getElementById('nine'));
  winner(document.getElementById('three'), document.getElementById('five'), document.getElementById('seven'));
    
    if(flag) return true;
    for(var i=0;i<cells.length;i++){
      if(cells[i].textContent == '')
        return false;
    }
    if(!flag)
      alert("    It was a draw... \n Click Reset Button if you want to play again");
    return true;
  }

});
