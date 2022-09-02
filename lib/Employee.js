class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee"; //TODO:
  }
}

module.exports = Employee;

//both create new array
//map - creates over the array and applies new values to each index
//filter - creates a new array and takes out elements that you don't want inside the array
