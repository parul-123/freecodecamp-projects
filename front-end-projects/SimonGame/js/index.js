$(document).ready(function(){
 
  var au1,au2,au3,au4,num,strict;
  var top,ri,le,bo,sta,cnt;
  var loseAu, winAu;
  var move = [];
  
  function init(){
   num=0;
   strict = false;
   top = document.getElementById('top');
   le =  document.getElementById('left');
   ri = document.getElementById('right');
   bo = document.getElementById('bottom');
   sta = document.getElementById('start');
   cnt = document.getElementsByClassName('count');
   au1 = document.createElement("audio");
  au1.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    
    au2 = document.createElement("audio");
  au2.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    
     au3 = document.createElement("audio");
  au3.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    
    au4 = document.createElement("audio");
  au4.setAttribute("src", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    
    loseAu = document.createElement("audio");
  loseAu.setAttribute("src", "https://github.com/ALF3run/WindowsSimon/raw/master/lose.mp3");
    
    winAu = document.createElement("audio");
  winAu.setAttribute("src", "https://github.com/ALF3run/WindowsSimon/raw/master/win.mp3");
    
  }
  
  init();
  
  var topClick = function(){
    au1.play();
    checkPattern(1);
  }
  
  var leftClick = function(){
    au2.play();
    checkPattern(2);
  }
  
  var rightClick = function(){
    au3.play();
    checkPattern(3);
  }
  
  var bottomClick = function(){
    au4.play();
    checkPattern(4);
  }
  
  function checkPattern(pat){
    var player = pat;
    if(player == move[num]) num++;
    else{
      loseAu.play();
      document.getElementById('circle').style.background = 'linear-gradient(#C62828 10%, #EF5350 80%, #EF9A9A)';
      setTimeout(function(){
        if (strict) document.getElementById('circle').style.background = 'linear-gradient(#F9A825 10%, #FFEE58 80%, #FFF59D)';    
        else document.getElementById('circle').style.background = 'linear-gradient(#1565C0 10%, #42A5F5 80%, #90CAF9)'; 
      }, 1000);
      
      if(strict){
        setTimeout(function(){
          move.length = 0;
          newPattern();
        },2500);
      }else{
        setTimeout(function(){
          pattern(0);
        },2000);
      }
    }
    
    if(num == 20){
      move.length = 0;
      winAu.play();
      
      top.style.backgroundColor = '#1c8cff';
      le.style.backgroundColor = '#13ff7c';
      ri.style.backgroundColor = '#fed93f';
      bo.style.backgroundColor = '#ff4c4c';
      
      document.getElementById('circle').style.background  = 'linear-gradient(#2E7D32 10%, #66BB6A 80%, #A5D6A7)';
      
      top.removeEventListener('click', topClick);
      le.removeEventListener('click', leftClick);
      ri.removeEventListener('click', rightClick);
      bo.removeEventListener('click',bottomClick);
      
      setTimeout(function(){
        
        top.style.backgroundColor = '#094a8f';
        le.style.backgroundColor = '#00a74a';
        ri.style.backgroundColor = '#cca707';
        bo.style.backgroundColor = '#9f0f17';
        
        document.getElementById('circle').style.background  = 'linear-gradient(#1565C0 10%, #42A5F5 80%, #90CAF9)';
        
        cnt[0].textContent = '--';
      }, 4000);
    }else if(move.length == num){
      setTimeout(newPattern, 1000);
    }
    
    return 0;
  }
  
  document.getElementById('strict').addEventListener('click', function() {
    if(strict == false){
      strict = true;
      document.getElementById('circle').style.background = 'linear-gradient(#F9A825 10%, #FFEE58 80%, #FFF59D)';
    }else{
      strict = false;
   document.getElementById('circle').style.background = 'linear-gradient(#1565C0 10%, #42A5F5 80%, #90CAF9)';
    }
  });
  
  sta.addEventListener('click',function(){
    move.length = 0;
    
    top.addEventListener('click',topClick);
    le.addEventListener('click',leftClick);
    ri.addEventListener('click',rightClick);
    bo.addEventListener('click',bottomClick);
    
    console.log(cnt);
    //cnt[0].innerHTML = "--";
    newPattern();
  });
  
  function newPattern(){
    
    move.push(Math.ceil(Math.random()*4));
    cnt[0].textContent = move.length;
    
    pattern(0);
    return 0;
  }
  
  function pattern(index){
    num=0;
    // console.log(num);
    // console.log(move[index]);
    if(move[index] == 1){
      au1.play();
      top.style.backgroundColor = '#1c8cff';
      setTimeout(function(){
        top.style.backgroundColor = '#094a8f';
        index++;
        setTimeout(function(){
          pattern(index)
        }, 300+500/move.length);
      }, 500+500/move.length);
    }else if(move[index] == 2){
      au2.play();
      le.style.backgroundColor = '#13ff7c';
      setTimeout(function(){
        le.style.backgroundColor = '#00a74a';
        index++;
        setTimeout(function(){
          pattern(index)
        }, 300+500/move.length);
      }, 500+500/move.length);
    }else if(move[index] == 3){
      au3.play();
      ri.style.backgroundColor = '#fed93f';
      setTimeout(function(){
        ri.style.backgroundColor = '#cca707';
        index++;
        setTimeout(function(){
          pattern(index)
        }, 300+500/move.length);
      }, 500+500/move.length);
    }else if(move[index] == 4){
      au4.play();
      bo.style.backgroundColor = '#ff4c4c';
      setTimeout(function(){
        bo.style.backgroundColor = '#9f0f17';
        index++;
        setTimeout(function(){
          pattern(index)
        }, 300+500/move.length);
      }, 500+500/move.length);
    }
    return 0;
  }
  
  
});
