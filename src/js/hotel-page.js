$.extend({
    'reviseDis': function (el, e) {
        e == "block" ? $(el).css('display', 'block') : $(el).css('display', 'none')
    },
    'setBackground': function (el, i) {
        $(el).css('background-image', 'url(img/' + i + '.png)')
    },
    'setNumber': function (el) {
        $('' + el + '').each(function (i, item) {
            $(item).attr("dataBefore", '' + (i + 1) + '')
        })
    }
})

var show = 0;

$(document).ready(
    function () {
        //滑动门响应
        $(".hotel-list-in>li").click(function () {
            var i = $(".hotel-list-in>li").index(this);
            $(".hotel-page>div").removeClass('sel');
            $(".hotel-page>div").eq(i).addClass('sel');
        })

        $(".m-show>input:first-child").click(function () {
            show = (show + 3) % 4;
            $(".m-show").fadeOut('fast');
            setTimeout(function () {
                $(".m-show").css("background-image", 'url(src/img/show' + show + '.jpg)');
            }, 400);
            $(".m-show").fadeIn('slow');
        })

        $(".m-show>input:last-child").click(function () {
            show = (show + 1) % 4;
            $(".m-show").fadeOut('fast');
            setTimeout(function () {
                $(".m-show").css("background-image", 'url(src/img/show' + show + '.jpg)');
            }, 400);
            $(".m-show").fadeIn('slow');
        })

        $(".serve-book").click(function () {
            $(".hotel-page>div").removeClass('sel');
            $(".hotel-book").addClass('sel');
            $("#book")[0].scrollIntoView({behavior: "smooth", block: "center"});
        })

        $(".startTime").on("change", function () {
            var time = $(".startTime").val();
            var Time = new Date(time);
            // Time.setDate(Time + 1);
            var day = ("0" + Time.getDate()).slice(-2);
            //格式化月，如果小于9，前面补0
            var month = ("0" + (Time.getMonth() + 1)).slice(-2);
            //拼装完整日期格式
            var today = Time.getFullYear() + "-" + (month) + "-" + (day);
            //完成赋值
            $(".startTime1").val(today);
            $(".endTime").val(today);
            $(".endTime").attr("min", today);
        })

        $(".m-button").click(function (){
            var btn = $(".hotel-list-in").css("display");
            console.log(btn);
            if(btn === "none"){
                $(".hotel-list-in").css("display","flex");
            }else{
                $(".hotel-list-in").css("display","none");
            }
        })
    }
)
//入住时间默认赋值
$(function () {
    //创建一个当前日期对象
    var now = new Date();
    //格式化日，如果小于9，前面补0
    var day = ("0" + now.getDate()).slice(-2);
    //格式化月，如果小于9，前面补0
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    //拼装完整日期格式
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    //完成赋值
    $(".startTime").val(today);
    $(".startTime").attr("min", today);
    $(".endTime").attr("min", today);
})
//退房时间默认赋值
$(function () {
    var time = $(".startTime").val();
    //完成赋值
    $(".endTime").val(time);
    $(".endTime1").val(time);
})
