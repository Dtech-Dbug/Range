"use strict";
function range(start, limit, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var iterators = [];
    // check args vector
    if (arguments.length == 1) {
        limit = arguments[0];
        start = 0;
    }
    for (var i = start; i < limit; i = i + step) {
        iterators.push(i);
    }
    return iterators;
}
console.log(range(1, 10));
//# sourceMappingURL=index.js.map