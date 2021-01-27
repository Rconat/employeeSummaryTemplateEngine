const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeList = []

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

function addAnotherEmployee() {
    inquirer
    .prompt([{
        type: 'confirm',
        name: 'newEmployee',
        message: "Would you like to add a new employee?"
    }])
    .then((result) => {
        if(result.newEmployee) {
        console.log("adding a new employee")
        addEmployee()
        } else {
            allDone()
        }
    })
}

function addEmployee() {
    inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: ['Manager','Engineer','Intern']
    }])
    .then((answers) => {
        console.log(answers)
        if (answers.role === 'Manager') {
            addManager()
            addAnotherEmployee()
        } else if (role === 'Engineer') {
            addEngineer()
            addAnotherEmployee()
        } else if (role === 'Intern') {
            addIntern()
            addAnotherEmployee()
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the manager\'s name?`
        },
        {
            type:'input',
            name: 'id',
            message: 'What is the manager\'s id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the manager\'s office number?'
        },
    ])
    .then(managerAnswers => {
        const manager = new Manager ((managerAnswers.office, managerAnswers.name, namagerAnswers.id, managerAnswers.email))
        employeeList.push(manager)
        console.log('adding new manager to the employee list')
    })
    .catch(error => {
        if(error) {
            console.log ("error rendering employee")
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the engineer\'s name?`
        },
        {
            type:'input',
            name: 'id',
            message: 'What is the engineer\'s id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub page?'
        },
    ])
    .then(engineerAnswers => {
        const engineer = new Engineer ((engineerAnswers.office, engineerAnswers.name, engineerAnswers.id, engineerAnswers.email))
        employeeList.push(engineer)
        console.log('adding new engineer to the employee list')
    })
    .catch(error => {
        if(error) {
            console.log ("error rendering employee")
        }
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the intern\'s name?`
        },
        {
            type:'input',
            name: 'id',
            message: 'What is the intern\'s id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        },
    ])
    .then(internAnswers => {
        const intern = new Intern ((internAnswers.office, internAnswers.name, internAnswers.id, internAnswers.email))
        employeeList.push(intern)
        console.log('adding new intern to the employee list')
    })
    .catch(error => {
        if(error) {
            console.log ("error rendering employee")
        }
    })
}

// After the user has input ALL employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

function allDone() {
    console.log('building employee list with data:' + employeeList)
    render(employeeList)
}

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location. Hint: you may need to check if the `output` folder exists and create it if it does not.

addAnotherEmployee()

// fs.appendFile(outputPath, data, (error) => {
//     if (error) {
//         console.log(error)
//     }
// console.log('File Saved')
// })

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! ```
