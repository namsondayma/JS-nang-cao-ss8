"use strict";
function printValue(value) {
    console.log(value);
}
printValue(16);
printValue("chàooooo");
function printEmployeeInfo(employee) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.companyId);
}
const namson = {
    name: "Nam Sơn",
    age: 19,
    companyId: "NAMSON",
};
printEmployeeInfo(namson);
