/**
 * Created by dllo on 17/2/13.
 */
// exports.sayHello = function (name) {
//     console.log('hello'+name);
// };
module.exports = function () {
  var name;
  this.setName = function (name) {
      this.name = name;
  };
  this.sayHello= function () {
      console.log('hello' + this.name);
  }
};