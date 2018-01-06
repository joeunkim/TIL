//div create 함수 이용해서 child duplicate

var a = 0;
var color_count = 0;

$(".up_button").click(function(){
    a += 0.25;
    if(a <= 1){
        $('.children').append('<div class = "child"> Child </div>');
    }
    else{
        if(color_count == 0){
            $('.parent').css("background",'blue');
        }
        else if(color_count == 1){
            $('.parent').css("background",'green');
        }
        else{
            $('.parent').css("background",'red');
        } 
        color_count++;
        color_count %=3;
       
        a = 1;
    }
});

$(".down_button").click(function(){
    a -= 0.25;
    if(a >= 0){
        $('.child:last-child').remove();
    }
    else{
        if(color_count == 0){
            $('.parent').css("background",'green');
        }
        else if(color_count == 1){
            $('.parent').css("background",'red');
        }
        else{
            $('.parent').css("background",'blue');
        }
        color_count--;
        color_count %=3;
        
        a = 0;
    }
});
