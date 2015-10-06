'use strict';

var Stack = function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push(value) {
  // increases the size of our storage
  var size = this._size++;

  // assigns size as a key of storage
  // assigns data as the value of this key
  this._storage[size] = value;

  return this;
};

Stack.prototype.pop = function pop() {
  var size = this._size;
  var target = size - 1;
  var deleted;

  // remove newest value from storage and decrement size counter, only if data
  // exists
  if (size) {
    deleted = this._storage[target];
    delete this._storage[target];

    this._size--;
  }

  return deleted;
};

module.exports = Stack;
