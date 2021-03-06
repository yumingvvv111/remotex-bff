// this 是 helper 对象，在其中可以调用其他 helper 方法
// this.ctx => context 对象
// this.app => application 对象

exports.util = require('util');
const manifest = require('../../dist/manifest.json');

exports.Loader = function(resource) {
  return {
    css: manifest[resource + '.css'],
    js: manifest[resource + '.js'],
  };
};
