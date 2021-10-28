function range(start: number = 0, limit: number, step: number = 1) {
  let iterators: number[] = [];
  // check args vector
  if (arguments.length == 1) {
    limit = arguments[0];
    start = 0;
  }

  for (let i: number = start; i < limit; i = i + step) {
    iterators.push(i);
  }

  return iterators;
}

// console.log(Range(10));
// Range(10);
