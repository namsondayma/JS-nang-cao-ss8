"use strict";
function calculateArea(shape) {
    if (shape.kind === "square") {
        return shape.sideLength ** 2;
    }
    else if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
