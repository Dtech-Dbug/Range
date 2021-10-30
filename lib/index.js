"use strict";
function range(start, limit, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var iterators = [];
    // TODO : check args vector
    console.log(start, limit, step);
    if (arguments.length == 1) {
        limit = arguments[0];
        start = 0;
    }
    if (start < limit) {
        for (var i = start; i < limit; i = i + step) {
            iterators.push(i);
        }
    }
    else {
        for (var i = start; i > limit; i = i + step) {
            iterators.push(i);
        }
    }
    return iterators;
}
console.log(range(10, 1, -2));
module.exports = range;
//# sourceMappingURL=index.js.map