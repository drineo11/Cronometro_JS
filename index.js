window.onload = function () {
  
    var segundos = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendsegundos = document.getElementById("segundos")
    var botaoStart = document.getElementById('button-start');
    var botaoStop = document.getElementById('button-stop');
    var botaoReset = document.getElementById('button-reset');
    var Interval ;
  
    botaoStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      botaoStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    botaoReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        segundos = "00";
      appendTens.innerHTML = tens;
        appendsegundos.innerHTML = segundos;
        
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("segundos");
        segundos++;
        appendsegundos.innerHTML = "0" + segundos;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (segundos > 9){
        appendsegundos.innerHTML = segundos;
      }
    
    }
    
  
  }