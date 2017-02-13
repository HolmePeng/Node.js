/**
 * Created by dllo on 17/2/13.
 */
console.error('cuowu');

var user = new Object();
user.name = 'keda';
//打印对象信息
console.dir(user);
//打印栈信息
console.trace('wenti');
//断言
console.assert(1>20,'不大于');
//打印耗时
console.time('timer');
for(var i =0;i < 100000000; i++){

}

console.timeEnd('timer');