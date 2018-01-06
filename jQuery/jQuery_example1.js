$(function(){
    $('#up').click(function(){
      var stat = $('#number').text();
      var n = parseInt(stat,10);
      n++;
      $('#number').text(n);
    });
    $('#down').click(function(){
      var stat = $('#number').text();
      var n = parseInt(stat,10);
      n--;
      if(n >= 0){
          $('#number').text(n);
      } 
      else {
          $('#number').text(0);
      }
    });
    $('#reset').click(function(){
       $('#number').text(0);
    });
  });