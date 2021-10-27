function Range(start = 0, limit, step = 1) {
  let iterators = [];
  // check args vector
  if (arguments.length == 1) {
    limit = arguments[0];
    start = 0;
  }

  for (i = start; i < limit; i = i + step) {
    iterators.push(i);
  }

  return iterators;
}

// console.log(Range(10));
// Range(10);
