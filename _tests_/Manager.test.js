const Manager = require("../lib/Manager");
const manager = new Manager("Gabe", "2255", "0gabevee0@gmail.com", "1223");

test("test if we can get the constructor values for the manager object", () => {
  expect(manager.name).toBe("Gabe");
  expect(manager.id).toBe("2255");
  expect(manager.email).toBe("0gabevee0@gmail.com");
  expect(manager.officeNum).toBe("1223");
});

test("test getName() method", () => {
  expect(manager.getName()).toBe("Gabe");
});

test("test getId() method", () => {
  expect(manager.getId()).toBe("2255");
});

test("test getEmail() method", () => {
  expect(manager.getEmail()).toBe("0gabevee0@gmail.com");
});

test("test getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("1223");
});

test("test getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
