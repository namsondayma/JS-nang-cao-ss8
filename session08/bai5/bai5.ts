type NumberOrString = number | string;

function printValue(value: NumberOrString) {
  console.log(value);
}

printValue(16);
printValue("chàooooo");
type Person = {
    name: string;
    age: number;
  };
  
  type Employee = {
    companyId: string;
  };
  
  type EmployeeInfo = Person & Employee;
  
  function printEmployeeInfo(employee: EmployeeInfo) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.companyId);
  }
  
  const namson: EmployeeInfo = {
    name: "Nam Sơn",
    age: 19,
    companyId: "NAMSON",
  };
  
  printEmployeeInfo(namson);