"use strict";
function validatePerson(obj) {
    return (typeof obj === "object" &&
        typeof obj.name === "string" &&
        typeof obj.age === "number" &&
        typeof obj.address === "object");
}
