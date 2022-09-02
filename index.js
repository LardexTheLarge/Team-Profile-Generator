//dependencies
const inquirer = require("inquirer");
const fs = require("fs");

//Variables of Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const GenHtml = require("./src/GenerateHTML");
//path to files variables
const path = require("path"); //module to call resolve and join
const dist_dir = path.resolve(__dirname, "dist");
const distPath = path.join(dist_dir, "output.html");

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
const menu = {
  type: "list",
  message: "Do you want a new Employee?",
  choices: ["Yes", "No"],
  name: "teamMake",
};

//this function starts the prompts or renders the team to output.html when "No" is selected
function start() {
  inquirer.prompt(menu).then((answer) => {
    if (answer.teamMake == "Yes") {
      addRole();
    } else {
      console.log(Team);
      fs.writeFileSync(distPath, GenHtml(Team), "utf-8"); //writeFileSync makes sure all other files are done
      console.log("Team Rendered");
      process.exit(0); // exits function once its complete
    }
  });
}

// adds the chosen role when selected in the prompts
function addRole() {
  //prompts addTeam then takes the answers from the manager questions
  inquirer.prompt(addTeam).then((answer) => {
    //if "Manager" is selected and managerCounter is greater than 1
    if (answer.employeeMake === "Manager" && managerCounter < 1) {
      //increase managerCounter
      managerCounter++;
      //asks the questions in teamMembers.Manager then take the results and apply them to a new Manager Object
      inquirer.prompt(teamMembers.Manager).then((results) => {
        const manager = new Manager(
          results.managerName,
          results.managerID,
          results.managerEmail,
          results.managerOffice
        );
        //takes the new Manager object and pushes it to the Team array
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
