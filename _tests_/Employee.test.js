const Employee = require("../lib/Employee");
const employee = new Employee("Gabe", "2255", "0gabevee0@gmail.com");

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).toBe("Gabe");
  expect(employee.id).toBe("2255");
  expect(employee.email).toBe("0gabevee0@gmail.com");
});

test("test getName() method", () => {
  expect(employee.getName()).toBe("Gabe");
});
test("test getId() method", () => {
  expect(employee.getId()).toBe("2255");
});
test("test getEmail() method", () => {
  expect(employee.getEmail()).toBe("0gabevee0@gmail.com");
});
test("test getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
