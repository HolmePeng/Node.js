/**
 * Created by dllo on 17/2/13.
 */
var hello = require('./hello');
// hello.sayHello('11');

// ar Hello = new hello();
// Hello.setName('laohao');
// Hello.sayHello();
//验证文件完整性
//模块完整路径
//不会加载模块
var helloCache = require.resolve('./hello');
// 模块缓存 require.cache
console.log(require.cache);
delete require.cache[helloCache];
console.log(require.cache);
//系统模块与自写模块有区别
//系统模块有自己的系统模块缓存
//缓存不保存在一起
var http = require('http');
console.log(require.cache);

