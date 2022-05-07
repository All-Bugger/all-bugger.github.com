$.extend({
    'reviseDis':function (el,e){ e=="block"?$(el).css('display','block'):$(el).css('display','none') },
    'setBackground':function (el,i){ $(el).css('background-image','url(img/' + i + '.png)') },
    'setNumber':function (el){ $(''+el+'').each(function (i,item){ $(item).attr("dataBefore",''+(i+1)+'') }) }
})

$(document).ready(
    function () {
        //滑动门响应
        $(".hotel-list>li").click(function () {
            var i = $(".hotel-list>li").index(this);
            $(".hotel-page>div").removeClass('sel');
            $(".hotel-page>div").eq(i).addClass('sel');
        })
    }
)

