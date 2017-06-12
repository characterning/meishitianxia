
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


// 选项卡 切换
$(".n_search-nav>li").click(function() {
    var ind = $(this).index();
    $(".n_search-content-left> div").eq(ind).css({
        "display": "block"
    }).siblings(".n_search-content-left>div").css({
        "display": "none"
    });
    $(this).addClass("n_on").siblings().removeClass("n_on");
});



