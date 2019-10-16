// 头部切换
// $('.navlist').on("click", "li", function () {
//     $(this).addClass('active').siblings().removeClass('active');
// })
// 滑动事件
var url = "http://api.linkcj.top/app.php";
function ready1() {
    var t = 0;
    var p = 0;
    if ($(document).scrollTop() > 400) {
        $('.fixed_top').removeClass('fixed_top_hidden');
    } else {
        $('.fixed_top').addClass('fixed_top_hidden');
    }
    $(document).scroll(function (e) {
        if ($(document).scrollTop() > 76) {
            $('.navbar-top').addClass('navbar-hidden');
        } else { $('.navbar-top').removeClass('navbar-hidden'); }
        p = $(document).scrollTop();
        if (t <= p && $(document).scrollTop() > 76) {
            $('.navbar-top').addClass('navbar-hidden');
            $('.tishi').addClass('navbar-hidden');
        } else {
            $('.navbar-top').removeClass('navbar-hidden');
            $('.tishi').removeClass('navbar-hidden');
        }
        if ($(document).scrollTop() > 400) {
            $('.fixed_top').removeClass('fixed_top_hidden');
        } else {
            $('.fixed_top').addClass('fixed_top_hidden');
        }
        t = p;
    });
    $('.fixed_top').on("click", function () {
        $("body").animate({ scrollTop: '0px' }, 400);
        $("html").animate({ scrollTop: '0px' }, 400);
        $(document).animate({ scrollTop: '0px' }, 400);
        // $('.fixed_top').find('p').removeClass('active_show')
    })
    // $('.fixed_top').hover(function(){
    //     $(this).find('p').addClass('active_show')
    // },function(){
    //     $(this).find('p').removeClass('active_show')
    // })
}

// 页脚
$(".footer_li img").hover(function () {
    $(this).removeClass('over_fo')
}, function () {
    $(this).addClass('over_fo')
})
// 手机菜单
var w = document.body.clientWidth;
$(".smallBar").width(w)
/*菜单*/
$(document).on("click", '.menu img', function () {
    $('.menuContent .menuList').css('left', '0');
    $(".mark").css('display', 'block');
})
$(document).on("click", ".mark", function () {
    $('.menuContent .menuList').css('left', '-50%');
    $(".mark").css('display', 'none');
})

// 跳转搜索
$(document).on("click", ".search-btn", function () {
    location.href = 'search.html?keyword=' + $(".search-box input").val();
})

//获取参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var URL = decodeURI(window.location.search);
    var r = URL.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//加载页脚
function getfoot() {
    $.ajax(url + '/index/link', {
        type: 'POST',
        dataType: 'json',
        success: function (res) {
            var html = '<h2 style="color:#fff;font-size:16px;margin-bottom: 10px;">友情链接</h2>';
            for (let i = 0; i < res.length; i++) {
                html += `<a href="${res[i].address}" target="_blank">${res[i].name}</a>`
            }
            $(".address .endabout").html(html);
        }
    })
}
//跳转关于我们
// $(".relevant").on('click', function () {
//     console.log(11111)
//     // console.log($('.relevant>li'))
//     // location.href = './aboutus.html'
// });