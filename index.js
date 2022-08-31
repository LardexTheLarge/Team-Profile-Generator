//dependencies
const inquirer = require("inquirer");
const fs = require("fs");
//Classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//variables
var managerCounter = 0;
let Team = [];

//Prompt Questions
const teamMembers = {
  Manager: [
    {
      type: "input",
      message: "Enter manager's Name:",
      name: "managerName",
    },
    {
      type: "input",
      message: "Enter manager's ID:",
      name: "managerID",
    },
    {
      type: "input",
      message: "Enter manager's Email:",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Enter manager's Office Number:",
      name: "managerOffice",
    },
  ],

  Engineer: [
    {
      type: "input",
      message: "Enter Engineer's Name:",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Enter Engineers's ID:",
      name: "engineerID",
    },
    {
      type: "input",
      message: "Enter Engineer's Email:",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "Enter Engineer's GitHub Username:",
      name: "engUserName",
    },
  ],

  Intern: [
    {
      type: "input",
      message: "Enter Intern's Name:",
      name: "internName",
    },
    {
      type: "input",
      message: "Enter Intern's ID:",
      name: "internID",
    },
    {
      type: "input",
      message: "Enter Intern's Email:",
      name: "internEmail",
    },
    {
      type: "input",
      message: "Enter Intern's School:",
      name: "internSchool",
    },
  ],
};
const addTeam = {
  type: "list",
  message: "Choose Employee type:",
  choices: ["Manager", "Intern", "Engineer"],
  name: "employeeMake",
};

function start() {
  inquirer.prompt(menu).then((answer) => {
    if (answer.teamMake == "Yes") {
      addRole();
    } else {
      console.log(Team);
      // fs.writeFile("./dist/text.txt", Team);
      process.exit(0);
    }
  });
}

const menu = {
  type: "list",
  message: "Do you want a new Employee?",
  choices: ["Yes", "No"],
  name: "teamMake",
};

function addRole() {
  inquirer.prompt(addTeam).then((answer) => {
    if (answer.employeeMake === "Manager" && managerCounter < 1) {
      managerCounter++;
      inquirer.prompt(teamMembers.Manager).then((results) => {
        const manager = new Manager(
          results.managerName,
          results.managerID,
          results.managerEmail,
          results.managerOffice
        );
        Team.push(manager);
        start();
      });
    } else if (answer.employeeMake === "Engineer") {
      inquirer.prompt(teamMembers.Engineer).then((results) => {
        const engineer = new Engineer(
          results.engineerName,
          results.engineerID,
          results.engineerEmail,
          results.engUserName
        );
        Team.push(engineer);
        start();
      });
    } else if (answer.employeeMake === "Intern") {
      inquirer.prompt(teamMembers.Intern).then((results) => {
        const intern = new Intern(
          results.internName,
          results.internID,
          results.internEmail,
          results.internSchool
        );
        Team.push(intern);
        start();
      });
    } else {
      start();
    }
  });
}

start();
