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
    if($(window).width() > 768){
        $('#fix').css("display","block");
    }else {
        $('#fix').css("display","none");
    }
    if(!getCookie(name)){
        var uulanguage= "zh-ja";
        $("[data-localize]").localize("text", {
            pathPrefix: "lang",
            language: "ja"
        });
        $('.xiazai').click(function () {

            window.open("qidai1.html");
        })
        console.log("come in cookie ja");
        $('.img_title img').css("visibility", "hidden");
        $('.w_nav-item').css("width", "100%");
        $('.w_nav-item').css("margin", "0 auto");
        $('.w_nav-item a').css({"width": "auto", "margin": "0 0px","font-size":"16px"});
        $('.w_nav-item span').css("width", "40px");
        $("#logo").attr("src", "images/icon.png");
        $('#whiteBook').attr('href', './ja.pdf');
        $('.w-new-list .span').css("padding-right", "0px");
        if (H > 991) {
            $('#bootstrap4 .w-item').css("height", "440px");
            $('#feature .w-item').css("height", "440px");
        } else if (H > 767 && H < 990) {
            $('#bootstrap4 .w-item').css("height", "340px");
            $('#feature .w-item').css("height", "440px");
        } else {
            $('#bootstrap4 .w-item').css("height", "auto");
        }
    }else {

        if (getCookie(name) == "cn") {
            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "cn"
            });
            $('.xiazai').click(function () {
                window.open("./qidai.html");
            })
            $('.w_nav-item span').css("width", "40px");
            console.log("come in cookie cn");
            $('#whiteBook').attr('href', './cn.pdf');
        }
        if (getCookie(name) == "en") {
            var H = $(window).width();

            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "en"
            });
            $('.xiazai').click(function () {
                window.open("./qidai2.html");
            })
            console.log("come in cookie en");
            $('.img_title img').css("visibility", "hidden");
            $('.w_nav-item').css("width", "100%");
            $('.w_nav-item a').css({"margin": "0 0px" ,"font-size" :"16px"});
            $("#logo").attr("src", "images/icon.png");
            $('#whiteBook').attr('href', './ja.pdf');
            $('.w-new-list .span').css("padding-right", "0px");
            $('.w_nav-item span').css("width", "40px");

            if (H > 991) {
                $('#bootstrap4 .w-item').css("height", "440px");
                $('#feature .w-item').css("height", "440px");
            } else if (H > 767 && H < 990) {
                $('#bootstrap4 .w-item').css("height", "340px");
                $('#feature .w-item').css("height", "440px");
            } else {
                $('#bootstrap4 .w-item').css("height", "auto");
            }
        }
    }


        if (getCookie(name) == "ja") {
            var H = $(window).width();

            $("[data-localize]").localize("text", {
                pathPrefix: "lang",
                language: "ja"
            });
            $('.xiazai').click(function () {
                window.open("./qidai1.html");
            })
            console.log("come in cookie ja");
            $('.img_title img').css("visibility", "hidden");
            $('.w_nav-item').css("width", "100%");
            $('.w_nav-item').css("margin", "0 auto");
            $('.w_nav-item a').css({"width": "auto", "margin": "0 0px","font-size":"16px"});

            $("#logo").attr("src", "images/icon.png");
            $('#whiteBook').attr('href', './ja.pdf');
            $('.w-new-list .span').css("padding-right", "0px");
            $('.w_nav-item span').css("width", "40px");
            if (H > 991) {
                $('#bootstrap4 .w-item').css("height", "440px");
                $('#feature .w-item').css("height", "440px");
            } else if (H > 767 && H < 990) {
                $('#bootstrap4 .w-item').css("height", "340px");
                $('#feature .w-item').css("height", "440px");
            } else {
                $('#bootstrap4 .w-item').css("height", "auto");
            }
        }



}