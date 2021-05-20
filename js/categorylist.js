var ul_ = document.getElementsByClassName('cate_list')[0];
var up_ = document.getElementById('sortPrice');
var span_ = ul_.children[0].children[1].children[0].firstChild.nodeValue.substr(1);
var a = 0;
console.log(ul_);
up_.onclick = function () {
    a++;
    if(a%2==0){
        for (var j = 0; j < ul_.children.length; j++) {
            for (var k = 0; k < ul_.children.length; k++) {
                if (parseInt(ul_.children[j].children[1].children[0].firstChild.nodeValue.substr(1)) > parseInt(ul_.children[k].children[1].children[0].firstChild.nodeValue.substr(1))) {
                    ul_.insertBefore(ul_.children[j], ul_.children[k])
                }
    
            }
        }
    }else{
        for (var j = 0; j < ul_.children.length; j++) {
            for (var k = 0; k < ul_.children.length; k++) {
                if (parseInt(ul_.children[j].children[1].children[0].firstChild.nodeValue.substr(1))< parseInt(ul_.children[k].children[1].children[0].firstChild.nodeValue.substr(1)) ) {
                    ul_.insertBefore(ul_.children[j], ul_.children[k])
                }
            }
        }
    }
  
}
