'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push(value) {
  // increment size counter

  // add value to storage
    this._storage[this._size] = value;
    this._size ++;

    return this;
};

Stack.prototype.pop = function pop() {
  let size = this._size;
    let target = size - 1;
    let deleted;

    // remove newest value from storage and decrement size counter, only if data
    // exists
    if (size) {
      deleted = this._storage[target];
      delete this._storage[target];

      this._size--;
    }

    return deleted;
  };


let stack = new Stack();

module.exports = Stack;
