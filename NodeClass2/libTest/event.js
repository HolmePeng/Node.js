/**
 * Created by dllo on 17/2/13.
 */
//获取 http 服务模块
var http = require('http');
//获取 event 事件模块
var even = require('events');
//创建服务
var server = http.createServer();
//服务添加事件
server.on('request',function (req,res) {
    if (req.url !== '/favicon.ico'){
        console.log(req.url);
    }
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello node.js event');//返回的 responce的值
});
//服务器监听3000端口
server.once('request',function (req,res) {
    if (req.url !== '/favicon.ico'){
        console.log('请求成功');
    }

});
server.once('request',function (req,res) {
    if (req.url !== '/favicon.ico'){
        console.log('响应成功');
    }
});
var func = function () {
    console.log('不会执行');
};
server.on('newListener',function (f,e) {
    console.log('对'+f+'添加了'+e);
});
server.on('removeListener',function (f,e) {
    console.log('对'+f+'删除了'+e);
});
server.on('request',func);
server.removeListener('request',func);
// server.removeAllListeners('request');
server.on('request',function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello');
});
server.listen(3000);


//设置最大值
//默认最大值为10
server.setMaxListeners(20);
//添加自定义事件
//customEvent 事件类型，名称自己起
server.on('customEvent',function () {
    console.log('此处为自定义事件');
});
//响应自定义事件，
//参数1 自定义事件类型名，
//参数2～ 依次所需参数
server.emit('customEvent');

console.log(even.listenerCount(server,'request'));
//参数1 是类型 参数2 是事件

