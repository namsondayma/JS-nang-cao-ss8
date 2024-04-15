"use strict";
function processStringOrArray(input) {
    if (typeof input === "string") {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach((item) => console.log(item));
    }
}
processStringOrArray("Ai Đấy");
processStringOrArray(["Mèo", "Chó", "Chuột"]);
