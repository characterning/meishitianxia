/**
 * Created by Administrator on 2017/6/8.
 */

//  头部
$(".wh_marko>li").hover(function () {
    $(this).find("a").css({"color": "white"});
    $(this).css({"background": "#0D0D0D"});
    if ($(this).index() == 10) {
        $(this).find("ul").css({"display": "block"});
    }
    else {
        $(".wh_marko>li:last-child>ul").css({"display": "none"});
    }
}, function () {
    $(this).find("a").css({"color": "#ccc"});
    $(this).css({"background": "#333333"});
    if ($(this).index() == 10) {
        $(this).find("ul").css({"display": "none"});
    }
});

$(".wh_marko>li:last-child>ul>li").hover(function () {
    $(this).find("a").css({"color": "white"});
    $(this).css({"background": "#0D0D0D"});
}, function () {
    $(this).find("a").css({"color": "#ccc"});
    $(this).css({"background": "#333333"});
});

$(".wh_markt>li").hover(function () {
    if ($(this).index() == 0 || $(this).index() == 1 || $(this).index() == 2) {
        $(this).find("a").css({"color": "white"});
        $(this).css({"background": "#0D0D0D"});
    }
    if ($(this).index() == 2) {
        $(this).find("ul").css({"display": "block"});
    }
    if ($(this).index() == 3) {
        $(this).find("ul").css({"display": "block"});
    }
    if ($(this).index() == 5) {
        $(this).find("div").css({"display": "block"});
    }
}, function () {
    if ($(this).index() == 0 || $(this).index() == 1 || $(this).index() == 2) {
        $(this).find("a").css({"color": "#ccc"});
        $(this).css({"background": "#333333"});
    }
    if ($(this).index() == 2) {
        $(this).find("ul").css({"display": "none"});
    }
    if ($(this).index() == 3) {
        $(this).find("ul").css({"display": "none"});
    }
    if ($(this).index() == 5) {
        $(this).find("div").css({"display": "none"});
    }
});

$(".wh_markt>li:nth-of-type(3)>ul>li").hover(function () {
    $(this).find("a").css({"color": "white"});
}, function () {
    $(this).find("a").css({"color": "#ccc"});
});

$(".wh_markt>li:nth-of-type(4)>ul>li").hover(function () {
    $(this).css({"color": "white"});
}, function () {
    $(this).css({"color": "#f1f1f1"});
});



//    轮播左侧 划入事件
$(".wh_Carousel_o>ul>li").hover(function () {
    index = $(this).index();
    $(this).css({"background": "#FF6767"});
    $(".wh_Carousel_o>ul>li>.wh_mark").eq(index).css({"display": "block"});
}, function () {
    $(this).css({"background": ""});
    $(".wh_Carousel_o>ul>li>.wh_mark").eq(index).css({"display": "none"});
});

$(".wh_Carousel_o>ul>li>.wh_mark>ul>li").hover(function () {
    $(this).find("p").eq(0).css({"color": "#FF6767"});
}, function () {
    $(this).find("p").eq(0).css({"color": "#333333"});
});


//   轮播
var ul = $(".wh_Carousel_t>.wh_ul>li");
var ulw = ul.width();
var len = ul.length;
var disc = $(".wh_Carousel_t>.disc>li");
var index = 0;
var next = 0;

disc.css({"background": "#999999"}).eq(0).css({"background": "#FF6767"});

var timer = setInterval(play, 3000);

function play() {
    next++;
    if (next > len - 1) {
        next = 0;
    }
    ul.eq(next).css({"opacity": "1", "transition": "1s"});
    ul.eq(index).css({"opacity": "0", "transition": "1s"});

    disc.eq(next).css({"background": "#FF6767"}).siblings().css({"background": "#999999"});

    index=next;
}

//   轮播 左侧点击
$(".wh_Carousel_t>.wh_btn_left").click(function () {
    clearInterval(timer);
    setTimeout(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            play();
        }, 3000);
    }, 500);
    next--;
    if (next < 0) {
        next = len - 1;
    }
    ul.eq(next).css({"opacity": "1", "transition": "1s"});
    ul.eq(index).css({"opacity": "0", "transition": "1s"});

    disc.eq(next).css({"background": "#FF6767"}).siblings().css({"background": "#999999"});

    index = next;
});

//   轮播 右侧点击
$(".wh_Carousel_t>.wh_btn_right").click(function () {
    clearInterval(timer);
    setTimeout(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            play();
        }, 3000);
    }, 500);
    next++;
    if (next > len - 1) {
        next = 0;
    }
    ul.eq(next).css({"opacity": "1", "transition": "1s"});
    ul.eq(index).css({"opacity": "0", "transition": "1s"});

    disc.eq(next).css({"background": "#FF6767"}).siblings().css({"background": "#999999"});

    index=next;
});

//  轮播 小点 点击事件
disc.click(function () {
    clearInterval(timer);
    next = $(this).index();
    ul.eq(next).css({"opacity": "1", "transition": "1s"});
    ul.eq(index).css({"opacity":"0","transition":"1s"});

    disc.eq(next).css({"background": "#FF6767"}).siblings().css({"background": "#999999"});

    setTimeout(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            play();
        }, 3000);
    }, 500);

    index=next;
});


//  轮播下的滑动事件
var mark=$(".wh_Carousel2_t>ul");
var markw=mark.width();
var len2=mark.length;
var index2=0;
var next2=0;
//  左侧点击事件
$(".wh_Carousel2_t>.wh_btn2_left").on("click",function () {
    next2++;
    if(next2>len2-1){
        next2=0;
    }
    mark.eq(next2).css({"left":markw});
    mark.eq(next2).animate({"left":0});
    mark.eq(index2).animate({"left":-(2*markw)});

    index2=next2;

});

//  右侧点击事件
$(".wh_Carousel2_t>.wh_btn2_right").on("click",function () {
    next2--;
    if(next2<0){
        next2=len2-1;
    }
    mark.eq(next2).css({"left":-markw});
    mark.eq(next2).animate({"left":0});
    mark.eq(index2).animate({"left":(2*markw)});

    index2=next2;
});


//  选项卡切换
$(".wh_tab>.wh_tab_mark_o>.wh_tab_marko>h2").on("click",function () {
    var ind=$(this).index();
    $(this).css({"color":"#FF6767","border-bottom":"2px solid #FF6767"}).siblings().css({"color":"#666666","border":"0"});
    $(".wh_tab>.wh_tab_mark_o>.tabmark>.wh_tabo").eq(ind).css({"opacity":"1","z-index":"1","transition":"1s"}).siblings().css({"opacity":"0","z-index":"0","transition":"1s"});
});

$(".wh_tab>.wh_tab_mark_t>.wh_tab_marko>h2").on("click",function () {
    var ind=$(this).index();
    $(this).css({"color":"#FF6767","border-bottom":"2px solid #FF6767"}).siblings().css({"color":"#666666","border":"0"});
    $(".wh_tab>.wh_tab_mark_t>.tabmark>.wh_tabo").eq(ind).css({"opacity":"1","z-index":"1","transition":"1s"}).siblings().css({"opacity":"0","z-index":"0","transition":"1s"});
});



//  监听 滚动条事件
window.onscroll = function () {
    var p = document.body.scrollTop;
    // console.log(p);
    if (p > 150) {
        $(".gotop").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".gotop").css({"opacity": "0", "transition": "1s"});
    }
    if(p>10){
        $("#box>header").css({"position":"fixed","left":"0","top":"0","z-index":"10"});
    }
    else{
        $("#box>header").css({"position":""});
    }
};

//  返回顶部
$(".gotop").on("click", function () {
    $("body").animate({"scrollTop":0},1000);
});


////////////////////////////////////////////////////////////////////////////////////////
//   图片 触碰效果
$(".n_cook").hover(function() {
    $(this).children($("div")).css({
        "background-size": "110%",
        "background-position": "50%",
        "transition": "all 0.5s linear",
        "cursor":"pointer"
    });
    $(this).find("p").css({
        "color": "#FF6767",
        "transition": "all 0.5s linear"
    });

}, function() {
    $(this).children($("div")).css({
        "background-size": "100%",
        "background-position": "50%",
        "transition": "all 0.5s linear"
    });
    $(this).find("p").css({
        "color": "black",
        "transition": "all 0.5s linear"
    });
});

// 选项卡 切换
$(".n_Selectioncard1 >a").click(function() {
    var ind = $(this).index();
    $(".content_mark0> .n_card").eq(ind).css({
        "display": "block"
    }).siblings(".n_card").css({
        "display": "none"
    });
    $(this).addClass("n_on").siblings().removeClass("n_on");
});


$(".n_Selectioncard3 >a").click(function() {
    var ind1 = $(this).index();

    $(".content_mark2 >.n_card").eq(ind1).css({
        "display": "block"
    }).siblings(".n_card").css({
        "display": "none"
    });
    $(this).addClass("n_on").siblings().removeClass("n_on");
});

