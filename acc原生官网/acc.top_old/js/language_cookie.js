var name = "somoveLanguage";
function chgLang(obj) {

    var value = $(obj).data("value");
    SetCookie(name, value);
    console.log("come in chgLang" + name + value);
    location.reload();
}
function SetCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){ //取cookies函数
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}
$(function() {
    initPage();
    $(window).resize(function(){
        initPage()
    })
});
function initPage() {
    //var uulanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
    //console.log("come in readly" + uulanguage);

    if(!getCookie(name)){
        var uulanguage= "zh-en";
        $("[data-localize]").localize("text", {
            pathPrefix: "lang",
            language: "en"
        });

        console.log("come in cookie cn");
        $('.logo').css("width","20%");
        $('.html').css("font-weight","normal");
        $('.box').css("width","80%");
        $('.line').css("width","120px");
        $('#main6').css("height","565px");
        $('.main2').css("height","550px");
        $('.main2 .comment .text h3').css("margin-top","50%");
        $('.main2 .comment .text h3').css("font-family","PingFangSC-Medium");
        $('.main5_2').css("font-family","PingFangSC-Medium");
        $('.main5_1').css("font-family","PingFangSC-Medium");
        $('.main2 .comment .text p').css("font-size","13px");
        $('.main2 .comment .text p').css("line-height","1.5");
        $('#main1 .ppp').css("display","none");

        $('.box a').css("width","160px");
        console.log("come in cookie en");
        $(".w_nav .box a").hover(function () {
            console.log($(this).index());
            var length = 960;
            var right = length - $(this).index()*160-100
            $('.line').show()
            $('.line').css('right', right+'px')
        }, function () {

        })
        $(".w_nav .box").hover(function () {

        },function () {
            $('.line').hide()
        })
    }
    else {

        if (getCookie(name) == "cn") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "cn"
            });

            console.log("come in cookie cn");


        }
        if (getCookie(name) == "en") {


            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "en"
            });
            $('.logo').css("width", "20%");
            $('.html').css("font-weight", "normal");
            $('.box').css("width", "80%");
            $('.line').css("width", "120px");
            $('#main6').css("height", "565px");
            $('.main2').css("height", "550px");
            $('.main2 .comment .text h3').css("margin-top", "50%");
            $('.main2 .comment .text h3').css("font-family", "PingFangSC-Medium");
            $('.main5_2').css("font-family", "PingFangSC-Medium");
            $('.main5_1').css("font-family", "PingFangSC-Medium");
            $('.main2 .comment .text p').css("font-size", "13px");
            $('.main2 .comment .text p').css("line-height", "1.5");
            $('#main1 .ppp').css("display","none");


            $('.box a').css("width", "160px");
            console.log("come in cookie en");
            $(".w_nav .box a").hover(function () {
                console.log($(this).index());
                var length = 960;
                var right = length - $(this).index() * 160 - 100
                $('.line').show()
                $('.line').css('right', right + 'px')
            }, function () {

            })
            $(".w_nav .box").hover(function () {

            }, function () {
                $('.line').hide()
            })
        }
    }
}