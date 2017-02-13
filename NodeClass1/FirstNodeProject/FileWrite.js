/**
 * Created by dllo on 17/2/10.
 */

var fileSystem = require('fs');

fileSystem.writeFile('./1.txt','萌狼赫萝啦啦啦','utf-8',function (err) {
   fileSystem.readFile('./1.txt','utf-8',function (err,data) {
       console.log(data);
   })
});
var say = require('./sayHello');
say.sayHello(say.name);
