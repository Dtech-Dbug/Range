function range(start: number = 0, limit: number, step: number = 1) {
  let iterators: number[] = [];

  // TODO : check args vector

  if (arguments.length == 1) {
    limit = arguments[0];
    start = 0;
  }

  if (start < limit) {
    for (let i: number = start; i < limit; i = i + step) {
      iterators.push(i);
    }
  } else {
    //? For negative step counts

    for (let i: number = start; i > limit; i = i + step) {
      iterators.push(i);
    }
  }

  return iterators;
}

console.log(range(10, 1, -2));
module.exports = range;
