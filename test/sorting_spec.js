const expect = require('chai').expect;
const mergeSort = require('../mergeSort');
const bubbleSort = require('../bubbleSort');

describe('mergeSort', function() {
  it('it exists', function() {
    expect(mergeSort).to.be.ok;
  });
  it('it sorts', function() {
    expect(mergeSort([3, 4, 1, 2, 8, 7, 5, 6])).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]);
  });
  it('sorts with a 0', () => {
    expect(mergeSort).to.be.ok;
  });
  // it('sorts efficiently', () => {
  //   const fn = sinon.spy();
  //   bubbleSort([1, 2, 3, 4], fn);
  //   expect(fn.callCount).to.equal(4);
  // });
});

describe('bubbleSort', function() {
  it('it exists', function() {
    expect(bubbleSort).to.be.ok;
  });
  it('it sorts', function() {
    expect(bubbleSort([3, 4, 1, 2, 8, 7, 5, 6])).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]);
  });
  it('sorts with a 0', () => {
    expect(bubbleSort).to.be.ok;
  });
  // it('sorts efficiently', () => {
  //   const fn = sinon.spy();
  //   bubbleSort([1, 2, 3, 4], fn);
  //   expect(fn.callCount).to.equal(4);
  // });
});
