// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "174 Rotterdam",
};

//update an object nondestructively using the spread operator
function updateEmployeeWithKeyAndValue(Object, key, value) {
  const newObj = { ...employee };
  newObj[key] = value;
  return newObj;
}

const newEmployeeAddress = updateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "11 Broadway"
);
console.log(newEmployeeAddress);

//update an object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

const newObj = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "name",
  "Roger"
);
console.log(newObj);

//delete employee object property name nondestructively
function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  newObj[key];
  delete newObj.name;
  return newObj;
}

console.log(deleteFromEmployeeByKey(employee, "name"));

//delete employee object property name destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key];
  delete employee.name;
  return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
