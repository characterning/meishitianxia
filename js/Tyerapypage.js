/**
 * Created by Administrator on 2017/6/9.
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



//  浏览文章
$(".wh_classification>ul>li:last-child").hover(function () {
    $(this).find(".mark").css({"height":"300px","transition":"1s"});
},function () {
    $(this).find(".mark").css({"height":"0","transition":"1s"});
});

$(".content_mark>.show>ul>li").click(function () {
    $(this).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
    $(this).find("a").css({"color":"#FF6767","transition":".3s"});
    $(this).siblings().find("a").css({"color":"#666666","transition":".3s"});
});



//  监听 滚动条事件
window.onscroll = function () {
    var p = document.body.scrollTop;
    console.log(p);
    if (p > 150) {
        $(".gotop").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".gotop").css({"opacity": "0", "transition": "1s"});
    }
    if(p>10){
        $("#Tyerapybox>header").css({"position":"fixed","left":"0","top":"0","z-index":"10"});
    }
    else{
        $("#Tyerapybox>header").css({"position":""});
    }
    if(p>135){
        $("#Tyerapybox>.content>.content_mark>.show").css({"opacity":"1","transition":"1s"});
    }
    else{
        $("#Tyerapybox>.content>.content_mark>.show").css({"opacity":"0","transition":"1s"});
    }
    var scrol=$(".content_mark>.show>ul>li");
    // console.log(scroll.length);
    if(p>140){
        scrol.eq(0).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(0).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(0).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>464){
        scrol.eq(1).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(1).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(1).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>728){
        scrol.eq(2).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(2).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(2).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>980){
        scrol.eq(3).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(3).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(3).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>1228){
        scrol.eq(4).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(4).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(4).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>1485){
        scrol.eq(5).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(5).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(5).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>1736){
        scrol.eq(6).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(6).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(6).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>1970){
        scrol.eq(7).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(7).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(7).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>2100){
        scrol.eq(8).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(8).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(8).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>2450){
        scrol.eq(9).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(9).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(9).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>2693){
        scrol.eq(10).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(10).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(10).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>2950){
        scrol.eq(11).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(11).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(11).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
    if(p>3200){
        scrol.eq(12).css({"border-bottom":"2px solid #FF6767","transition":".1s"}).siblings().css({"border-bottom":"0","transition":".1s"});
        scrol.eq(12).find("a").css({"color":"#FF6767","transition":".3s"});
        scrol.eq(12).siblings().find("a").css({"color":"#666666","transition":".3s"});
    }
};

//  返回顶部
$(".gotop").on("click", function () {
    // var time=setInterval(function () {
    //     document.body.scrollTop-=120;
    //     console.log(document.body.scrollTop);
    //     if(document.body.scrollTop==0){
    //         clearInterval(time);
    //     }
    // },20);
    $("body").animate({"scrollTop":0},1000);
});



