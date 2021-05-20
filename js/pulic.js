// 顶部鼠标移动上显示，鼠标离开时隐藏

var list_ss = document.getElementsByClassName('ss_list');
list_ss[1].onmouseover = function () {
    this.children[1].style.display = 'block';
}
list_ss[1].onmouseout = function () {
    this.children[1].style.display = 'none';
}
// 购物车显示和隐藏
var car_t = document.getElementsByClassName('car_t')[0];
var last = document.getElementsByClassName('last')[0];

car_t.onmouseover = function () {
    last.style.display = 'block';
}
last.onmouseover = function () {
    this.style.display = 'block';
}
last.onmouseout = function () {
    this.style.display = 'none';
}

// 获取商品加减和件数
var jia = document.getElementsByClassName('J_btnAddCount');
var jian = document.getElementsByClassName('J_btnDelCount');
var ipt_= document.getElementsByClassName('J_inputCount');

for(var i = 0; i< jia.length ; i++){
    jia[i].onclick=function(){
        var ipt_val= this.previousElementSibling.value-0;
        ipt_val++;
        this.previousElementSibling.value = ipt_val;
        var money = this.parentNode.nextElementSibling.innerHTML.substr(1);
        var money_s=parseFloat(money/(ipt_val-1)*ipt_val);
        this.parentNode.nextElementSibling.innerHTML='￥'+money_s;
        this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML='共'+ipt_val+'件商品';
        heji();
    }
    jian[i].onclick=function(){
        var ipt_val= this.nextElementSibling.value-0;
        ipt_val--;
        if(ipt_val < 1){
            ipt_val=1;
            return;
        }
        
        this.nextElementSibling.value = ipt_val;
        var money = this.parentNode.nextElementSibling.innerHTML.substr(1);
        var money_s=parseFloat(money/(ipt_val+1)*ipt_val);
        this.parentNode.nextElementSibling.innerHTML='￥'+money_s;
        this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML='共'+ipt_val+'件商品';
        heji();
    }
}

// 合计部分
function heji(){
    var sum = 0;
    var shu = 0;
    var zong_ = document.getElementsByClassName('J_inputCount');
    var jia_ =document.getElementsByClassName('J_smallTotalPrice');
    for(var i = 0 ; i < jia_.length;i++){
        var j = jia_[i].innerHTML.substr(1)-0;
        sum+=j;
        shu+=((zong_[i].value)-0);
    }
    document.getElementsByClassName('J_totalCount')[0].innerHTML='('+shu+')'
    document.getElementsByClassName('J_totalPrice')[0].innerHTML='￥'+sum;
}