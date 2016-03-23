'use strict';

const Stack = require('../lib/stack');

describe('Stack', () => {
  it('creates an empty stack', () => {
    const stack = new Stack();
    const empty = {};

    expect(stack).toEqual(jasmine.any(Stack));
    expect(stack._storage).toEqual(empty);
  });
});

describe('Stack.prototype.push()', () => {
  it('adds new values to the stack', () => {
    const stack = new Stack();
    const pushed = {
      foo: 'bar',
    };

    stack.push(pushed);

    expect(stack._storage).toEqual({
      0: pushed,
    });
  });

  it('returns the stack itself', () => {
    const stack = new Stack();
    const pushed = {
      foo: 'bar',
    };

    expect(stack.push(pushed)).toEqual(stack);
  });
});

describe('Stack.prototype.pop()', () => {
  it('removes the most recently added value from the stack', () => {
    const stack = new Stack();
    const empty = {};

    stack.push(1);
    stack.pop();

    expect(stack._storage).toEqual(empty);
  });

  it('returns the value removed from the stack', () => {
    const stack = new Stack();

    stack.push(1);

    expect(stack.pop()).toBe(1);
  });

  it('returns undefined when called on an empty stack', () => {
    const stack = new Stack();

    expect(stack.pop()).toBe(undefined);
  });
});
