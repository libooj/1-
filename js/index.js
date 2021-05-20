// 侧边栏鼠标移动上显示，鼠标离开时隐藏
$('.fj').mouseenter(function(){
    $(this).addClass('nuw');
    $(this).siblings('.zj').css('display','block');
})
$('.fj').mouseleave(function(){
    $(this).removeClass('nuw');
    $(this).siblings('.zj').css('display','none');
})

//焦点图轮播
function changeImg(){
    var index =0;
    var stop = false;//开关
    var $imgLi = $('.slide_box').children('li');
    var $numLi = $('.num').children('li');
    //$numLi.eq(index).addClass('active').stop(true,true).siblings().removeChild('active');
    $numLi.mouseover(function(){
        stop = true;
        index=$numLi.index($(this));
        $imgLi.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $(this).addClass("active").stop(true,true).siblings().removeClass('active');
    }).mouseout(function(){
        stop =false;
    });
    setInterval(function(){
        if(stop) return;
        index ++;
        if(index>=$imgLi.length){
            index = 0;
        }
        $imgLi.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $numLi.eq(index).addClass("active").stop(true,true).siblings().removeClass('active');
    },3000);
}
changeImg();


// 快讯自动向上移动动画
$(function(){
    function movedown(){
        var marginTop = 0 ;
        var stop =false;
        var interval = setInterval(function(){
            if(stop) return;
            $('#express').children('li').first().animate({
                    'margin-top':marginTop--},10,function(){
                    var $first =$(this);
                    if(!$first.is(':animated')){
                        if((-marginTop)>$first.height()){
                            $first.css({'margin-top':0}).appendTo($('#express'));
                            marginTop = 0;
                        }
                    }
                });
        },50);
        $('#express').mouseover(function(){
            stop = true;
        }).mouseout(function(){
            stop = false;
        });
    }
    movedown();
});