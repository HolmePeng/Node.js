/**
 * Created by dllo on 17/2/13.
 */
// console.log(global);
//__dirname  __filename
//获取当前文件所文件夹路径
console.log(__dirname);
//获取当前文件所处完整路径
console.log(__filename);
//参数1 回调函数
//参数2 延迟多少毫秒执行（1-2147483674）
//参数3以后 回调函数中所需要函数的参数值，依次填入
var timer = setTimeout(function (name,age) {
    console.log('本人叫'+name+',今年'+age+',至今未婚');

},1000,'张三','21');
// for(var i = 1;i<3000000000;i++){
//
// };
clearTimeout(timer);
var num = 0;
var timer1 = setInterval(function () {
    if (num>10){
        clearInterval(timer1);
    }
    else{

        console.log(num++);
    }
},1000);
//以下两个函数可能会出现 性能方面的问题，慎用。
//取消回调函数的回调
timer.unref();
//回复回调函数的回调
timer1.ref();