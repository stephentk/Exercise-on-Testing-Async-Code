"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total;
};
var largeNumber = function (arr) {
    var largest = 0;
    arr.forEach(function (x) {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
exports.default = { sum: sum, largeNumber: largeNumber };
