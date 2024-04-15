"use strict";
function processNumberOrArray(input) {
    if (typeof input === "number") {
        return input ** 2;
    }
    else if (Array.isArray(input)) {
        return input.map((num) => num ** 2);
    }
}
console.log(processNumberOrArray(3));
console.log(processNumberOrArray([1, 2, 3, 4]));
