const Intern = require("../lib/Intern");
const intern = new Intern("Gabe", "2255", "0gabevee0@gmail.com", "DU");

test("test if we can get the constructor values for the intern object", () => {
  expect(intern.name).toBe("Gabe");
  expect(intern.id).toBe("2255");
  expect(intern.email).toBe("0gabevee0@gmail.com");
  expect(intern.school).toBe("DU");
});

test("test getName() method", () => {
  expect(intern.getName()).toBe("Gabe");
});

test("test getId() method", () => {
  expect(intern.getId()).toBe("2255");
});

test("test getEmail() method", () => {
  expect(intern.getEmail()).toBe("0gabevee0@gmail.com");
});

test("test getSchool() method", () => {
  expect(intern.getSchool()).toBe("DU");
});

test("test getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
