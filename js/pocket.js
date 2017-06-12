



var mySwiper = new Swiper('.swiper-container', {
    //			direction: 'vertical',
    loop: true,

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: "true",

})


//header导航
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

//全部菜谱
   $("#n_fide").hover(function(){
     $(".n_modalbox").css({"height":"390px","transition":" all 1s linear"});
    },function(){
        $(".n_modalbox").css({"height":"0px","transition":" all 1s linear"});
    })
   //背景变大
   $(".n_cookimg").hover(function() {
    $(this).css({
        "background-size": "110%",
        "background-position": "50%",
        "transition": "all 0.5s linear"
    });
    $(this).find("p").css({
    	"opacity":0,
    	 "transition": "all 1s linear"
    })
}, function() {
    $(this).css({
        "background-size": "100%",
        "background-position": "50%",
        "transition": "all 0.5s linear"
        
    });
    $(this).find("p").css({
    	"opacity":1,
    	 "transition": "all 1s linear"
    })
});
// 选项卡 切换
$(".n_right >a").click(function() {
    var ind = $(this).index();
    $(".content_mark0> .n_card").eq(ind).css({
        "display": "block"
    }).siblings(".n_card").css({
        "display": "none"
    });
    $(this).addClass("n_on1").siblings().removeClass("n_on1");
});
//
$(".n_cook").hover(function() {
    $(this).children($("div")).css({
        "background-size": "120%",
        "background-position": "50%",
        "transition": "all 0.5s linear"
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

//  监听 滚动条事件
window.onscroll = function () {
    var p = document.body.scrollTop;
//     console.log(p);
    if (p > 150) {
        $(".gotop").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".gotop").css({"opacity": "0", "transition": "1s"});
    }
    if(p>10){
        $("#pocketbox>header").css({"position":"fixed","left":"0","top":"0","z-index":"10"});
    }
    else{
        $("#pocketbox>header").css({"position":""});
    }
    if(p>500){
    	$(".n_Selectioncard1").css({"position":"fixed","left":"160px","top":"40px","z-index":"1","background":"white"});
    }
    else{
        $(".n_Selectioncard1").css({"position":""});
    }
};

//  返回顶部
$(".gotop").on("click", function () {
    $("body").animate({"scrollTop":0},1000);
});
