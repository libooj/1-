function huoqu() {
    var inp_1 = document.getElementById('phone');
    var inp_2 = document.getElementById('password');
    var inp_3 = document.getElementById('repassword');
    var p = document.getElementsByClassName('tagname');
    var inp_1a = p[0];
    var inp_2a = p[1];
    var inp_3a = p[2]
    submint = document.getElementsByClassName('tableBtn');
    // 判断手机号是否达到要求标准
    inp_1.onfocus = function () {
        inp_1a.style.display = 'block';
        inp_1a.innerHTML = ('输入正确的手机号');
    }
    inp_1.onblur = function () {
        var reg = /^1[3578]\d{9}$/;
        if (inp_1.value == '') {
            inp_1a.innerHTML = ('输入的值不能为空');
            return false;
        } else if (!reg.test(inp_1.value)) {
            inp_1a.innerHTML = ('长度不在范围内或者存在非法字符');
            return false;
        } else {
            inp_1a.innerHTML = ('输入正确');
            inp_1a.style.color = 'green';
            return true;
        }
    }
    // 判断密码是否正确
    inp_2.onfocus = function () {
        inp_2a.style.display = 'block';
        inp_2a.innerHTML = ('输入6-10位密码');
    }
    inp_2.onblur = function () {
        var reg = /^\w{6,10}$/;
        if (inp_2.value == '') {
            inp_2a.innerHTML = ('输入的值不能为空');
            return false;
        } else if (!reg.test(inp_2.value)) {
            inp_2a.innerHTML = ('长度不在范围内或者存在非法字符');
            return false;
        } else {
            inp_2a.innerHTML = ('输入正确');
            inp_2a.style.color = 'green';
            return true;
        }
    }

    // 判断密码是否相同

    inp_3.onfocus = function () {
        inp_3a.style.display = 'block';
        inp_3a.innerHTML = ('重新输入密码');
    }
    inp_3.onblur = function () {
        var reg = /^\w{6,10}$/;
        if (inp_3.value == '') {
            inp_3a.innerHTML = ('输入的值不能为空');
            return false;
        } else if (inp_3.value !== inp_2.value) {
            inp_3a.innerHTML = ('两次输入的密码不同');
            return false;
        } else {
            inp_3a.innerHTML = ('输入正确');
            inp_3a.style.color = 'green';
            return true;
        }
    }
    submint.onclick = function () {
        if (inp_1.onblur() && inp_2.onblur() && inp_3.onblur()) {
            document.getElementById('registerForm').submit();
        }
    }

    var yanzheng = document.getElementsByClassName('tableText');
    var min = 60;
    var time;
    yanzheng.onclick = function () {
        clearInterval(time);
        time = setInterval(fn, 1000);
    }
    function fn() {
        min--;
        if (min > 0) {
            yanzheng.innerHTML = ('(' + min + '秒)重发');
        } else {
            min = 60;
            yanzheng.innerHTML = ('重新发送');
            clearInterval(time);
        }
    }
}