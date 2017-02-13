// /**
//  * Created by dllo on 17/2/10.
//  */
// //require 去接受http模块（node核心库）
// var http = require('http');
// //创建服务器
// //参数为匿名函数很熟，额可以闭包
// http.createServer(function (req,res) {
//     //req
//     //request 请求
//     //res
//     //response响应
//     res.writeHead(200,{'Content- Type':'text/plain'});
//
//     res.end('Hello,Node.js!');
//
// }).listen(3000);//监听3000
// console.log('Sever running at http://127.0.0.1:3000');

const http = require('http');
http.createServer((req,res)=>{
    let status = 200;
    res.writeHead(status,{'Content-Type':'text/plain'});
    res.end('hello,Node.js!');
}).listen(3000);
console.log('Sever running at http://127.0.0.1:3000');