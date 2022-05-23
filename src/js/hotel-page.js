$.extend({
    'reviseDis':function (el,e){ e=="block"?$(el).css('display','block'):$(el).css('display','none') },
    'setBackground':function (el,i){ $(el).css('background-image','url(img/' + i + '.png)') },
    'setNumber':function (el){ $(''+el+'').each(function (i,item){ $(item).attr("dataBefore",''+(i+1)+'') }) }
})

$(document).ready(
    function () {
        //滑动门响应
        $(".hotel-list-in>li").click(function () {
            var i = $(".hotel-list-in>li").index(this);
            $(".hotel-page>div").removeClass('sel');
            $(".hotel-page>div").eq(i).addClass('sel');
        })
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var time=year + '-' + month + '-' + day;
        $("#startTime").attr('placeholder',time);
        console.log('132');
    }
)

