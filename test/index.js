
describe('global-queue', function () {

  var assert = require('assert');
  var queue = require('global-queue');

  it('should return a push function', function () {
    assert('function' == typeof queue('one'));
  });

  it('should create the global if it doesnt exist', function () {
    assert(!window.two);
    var push = queue('two');
    push('value');
    assert(window.two instanceof Array);
  });

  it('should push onto the queue', function () {
    var push = queue('three');
    push(1, 2, 3);
    push('a', 'b', 'c');
    assert(1 == window.three[0][0]);
    assert(2 == window.three[0][1]);
    assert(3 == window.three[0][2]);
    assert('a' == window.three[1][0]);
    assert('b' == window.three[1][1]);
    assert('c' == window.three[1][2]);
  });

});