const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Gabe",
  "2255",
  "0gabevee0@gmail.com",
  "LardexTheLarge"
);

test("test if we can get the constructor values for the engineer object", () => {
  expect(engineer.name).toBe("Gabe");
  expect(engineer.id).toBe("2255");
  expect(engineer.email).toBe("0gabevee0@gmail.com");
  expect(engineer.github).toBe("LardexTheLarge");
});

test("test getName() method", () => {
  expect(engineer.getName()).toBe("Gabe");
});

test("test getId() method", () => {
  expect(engineer.getId()).toBe("2255");
});

test("test getEmail() method", () => {
  expect(engineer.getEmail()).toBe("0gabevee0@gmail.com");
});

test("test getGitHub() method", () => {
  expect(engineer.getGitHub()).toBe("LardexTheLarge");
});

test("test getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
