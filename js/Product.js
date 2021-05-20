// jquery部分

$(function () {
    // 获取加号的ipt框
    var value = $('.n_ipt').val();
    // 获取价格
    // 获取li
    $('#choice1').children('ul').children('li').click(function () {
        // 给li添加点击效果
        $(this).addClass("checked").siblings('li').removeClass('checked');
        // 获取下标
        var index = $(this).index();
        // 根据下标改变价格
        if (index == 1) {
            $('.des_price').children('b').html('￥' + (1786 * value));
        } else if (index == 2) {
            $('.des_price').children('b').html('￥' + (1786 * value));
        } else if (index == 0) {
            $('.des_price').children('b').html('￥' + (1786 * value));
        }
    })
    $('#choice2').children('ul').children('li').click(function () {
        $(this).addClass("checked").siblings('li').removeClass('checked');
    })
    // 获取价格的内容并且去除￥符号
    var money = $('.des_price').children('b').html();
    money = money.substr(1);
    $('.n_btn_1').click(function () {
        value++;
        $('.n_ipt').val(value);
        $('.des_price').children('b').html('￥' + (money * value));
    })
    $('.n_btn_2').click(function () {
        value--;
        if (value < 1) {
            value = 1;
        }
        $('.n_ipt').val(value);
        $('.des_price').children('b').html('￥' + (money * value));
    })
})

