function generateHtml(results) {
  const html = [];
  const genManager = (manager) => {
    let managerHtml = `
<div class="card bg bg-primary col-4 my-3 mx-3" style="width: 18rem">
    <div class="card-body bg">
        <h5 class="card-title bg-primary">${manager.managerName}</h5>
        <p class="card-text bg-primary">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.managerID}</li>
        <li class="list-group-item">
            Email: <a href="mailto:${manager.managerEmail}" class="card-link">${manager.managerEmail}</a>
        </li>
        <li class="list-group-item">Office #: ${manager.managerOffice}</li>
    </ul>
</div>
    `;
    html.push(managerHtml);
  };

  const genEngineer = (engineer) => {
    let engineerHtml = `
<div class="card bg bg-primary col-4 my-3 mx-3" style="width: 18rem">
  <div class="card-body bg">
    <h5 class="card-title bg-primary">${engineer.engineerName}</h5>
    <p class="card-text bg-primary">Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.engineerID}</li>
    <li class="list-group-item">
      Email:<a href="mailto:${engineer.engineerEmail}" class="card-link">${engineer.engineerEmail}</a>
    </li>
    <li class="list-group-item">
      GitHub: <a target="_blank" href="https://github.com/${engineer.engUserName}" class="card-link">${engineer.engUserName}</a>
    </li>
  </ul>
</div>
    `;
    html.push(engineerHtml);
  };

  const genIntern = (intern) => {
    let internHtml = `
<div class="card bg bg-primary col-4 my-3 mx-3" style="width: 18rem">
  <div class="card-body bg">
    <h5 class="card-title bg-primary">${intern.internName}</h5>
    <p class="card-text bg-primary">Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.internID}</li>
    <li class="list-group-item">
      Email:<a href="mailto:${intern.internEmail}" class="card-link">${intern.internEmail}</a>
    </li>
    <li class="list-group-item">School: ${intern.internSchool}</li>
  </ul>
</div>
    `;
    html.push(internHtml);
  };

  for (let i = 0; i < results.length; i++) {
    if (results[i].getRole() === "Manager") {
      genManager(results[i]);
    }
    if (results[i].getRole() === "Engineer") {
      genEngineer(results[i]);
    }
    if (results[i].getRole() === "Intern") {
      genIntern(results[i]);
    }
  }
  return html.join("");
}

module.exports = (team) => {
  return `
     <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <title>My Team</title>
  </head>
  <body class="bg-secondary">
    <!-- header -->
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-md">
        <a class="navbar-brand text-light" href="#">My Team</a>
      </div>
    </nav>
    <!-- body -->
    <div class="container my-5">
      <div class="row">
${generateHtml(team)}
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

    `;
};
