//hide(), show() 함수 사용으로 child 갯수 조절
//color_count 값으로 parent background color 확인

//study more
//div create 하는 방식 공부
//color_count 값이 음수 혹은 over flow 고려

var a = 0;
var color_count = 0;
$(".up_button").click(function(){
    a = a + 0.25;
    if(a == 0.25){
        $('.child2').show();
    }
    else if(a == 0.5){
        $('.child3').show();
    }
    else if(a == 0.75){
        $('.child4').show();
    }
    else if(a == 1){
        $('.child5').show();
    }
    else{
        if(color_count%3 == 0){
            $('.parent').css("background",'blue');
        }
        else if(color_count%3 == 1){
            $('.parent').css('background','green');
        }
        else if(color_count%3 == 2){
            $('.parent').css('background','red');
        }
        color_count++;
        a = 1;
    }
  });
  
  $('.down_button').click(function(){
    a = a-0.25;
    if(a == 0.75){
        $('.child5').hide();
    }
    else if(a == 0.5){
        $('.child4').hide();
    }
    else if(a == 0.25){
        $('.child3').hide();
    }
    else if(a == 0){
        $('.child2').hide();
    }
    else{
        if(color_count%3 == 0){
            $('.parent').css('background','green');
        }
        else if(color_count%3 == 1){
            $('.parent').css('background','red');
        }
        else if(color_count%3 == 2){
            $('.parent').css('background','blue');
        }
        else{}
        color_count--;
        a = 0;
    }
  });


  $(function(){
    $('.child2').hide();
    $('.child3').hide();
    $('.child4').hide();
    $('.child5').hide();

  
  });

