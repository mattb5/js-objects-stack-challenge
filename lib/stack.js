'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};
  [].slice.call(arguments).forEach((argument) => this.push(argument));
};

Stack.prototype.push = function push(value) {
  // increases the size of our storage
  let size = this._size++;

  // assigns size as a key of storage
  // assigns data as the value of this key
  this._storage[size] = value;

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

module.exports = Stack;
