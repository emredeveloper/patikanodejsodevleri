const fs = require('fs');

// CREATE
const employee = {
  name: "Employee 1 Name",
  salary: 2000,
};

fs.writeFileSync('employees.json', JSON.stringify(employee));

// READ
const employeeData = fs.readFileSync('employees.json');
const employeeObject = JSON.parse(employeeData);
console.log(employeeObject);

// UPDATE
employeeObject.salary = 2500;
fs.writeFileSync('employees.json', JSON.stringify(employeeObject));

// DELETE
fs.unlinkSync('employees.json');
console.log(employeeObject)