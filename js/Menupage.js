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


//  分类 触摸效果
$(".wh_hot").hover(function () {
    $(this).find("span").css({"opacity":"1","transition":"1s"});
},function () {
    $(this).find("span").css({"opacity":"0","transition":"1s"});
});



//  浏览文章
$(".wh_classification>ul>li:last-child").hover(function () {
    $(this).find(".mark").css({"height":"300px","transition":"1s"});
},function () {
    $(this).find(".mark").css({"height":"0","transition":"1s"});
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
        $("#Menupagebox>header").css({"position":"fixed","left":"0","top":"0","z-index":"10"});
    }
    else{
        $("#Menupagebox>header").css({"position":""});
    }
};

//  返回顶部
$(".gotop").on("click", function () {
    $("body").animate({"scrollTop":0},1000);
});



