function Range(start = 0, limit, step = 1) {
  // check args vector
  if (arguments.length == 1) {
    limit = arguments[0];
    start = 0;
  }

  for (i = start; i < limit; i = i + step) {
    console.log(i);
  }
}

Range(10);
