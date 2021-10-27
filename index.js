function Range(start = 0, limit, step = 1) {
  for (i = start; i < limit; i = i + step) {
    console.log(i);
  }
}

Range(0, 10, 2);
