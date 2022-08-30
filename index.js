const inquirer = require("inquirer");
const fs = require("fs");
const Rx = require("rxjs");

const manager = [
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
  //menu
  {
    type: "list",
    message: "Do you wish to add team members or finish the team?",
    choices: [
      "Intern",
      "Engineer",
      new inquirer.Separator(),
      "Finished Making Team",
    ],
    name: "teamMake",
  },
];
const engineer = [
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
];
const intern = [
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
];
const menu = [
  {
    type: "list",
    message: "Do you wish to add team members or finish the team?",
    choices: ["Intern", "Engineer", "Finished Making Team"],
    name: "teamMake",
  },
];

// switch (manager[4].choices) {
//   case "Engineer":
//     addEng = manager.concat(engineer);
//     break;
// }
const prompts = new Rx.Subject();
console.log(prompts);

function writeToFile() {
  inquirer
    .prompt(manager)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Failed to Render Info");
      }
    });
}

function init() {
  //   writeToFile();
}

// Function call to initialize app
init();
