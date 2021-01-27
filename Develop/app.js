const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = []

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

inquirer
    .prompt([{
        type: 'confirm',
        name: 'newEmployee',
        message: "Would you like to add a new employee?"
    }])
    .then((result) => {
        console.log(result.newEmployee)
        while (result.newEmployee) {
            inquirer.prompt([{
                    type: 'list',
                    name: 'role',
                    message: 'What is the employee\'s role?',
                    choices: ['Manager','Engineer','Intern']
                }])
                .then((answers) => {
                    console.log(answers)
                    if (answers.role === 'Manager') {
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the manager\'s name?'
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
                        })
                        .catch(error => {
                            if(error) {
                                console.log ("error rendering employee")
                            }
                        })
                    } else if (role === 'Engineer') {
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the engineer\'s name?'
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
                                message: 'What is the engineer\'s Github Address?'
                            },
                        ])
                        .then(engineerAnswers => {
                            const engineer = new Engineer ((engineerAnswers.office, engineerAnswers.name, engineerAnswers.id, engineerAnswers.email))
                            employeeList.push(engineer)
                        })
                        .catch(error => {
                            if(error) {
                                console.log ("error rendering employee")
                            }
                        })
                    } else if (role === 'Intern') {
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the intern\'s name?'
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
                                name: 'office',
                                message: 'What is the intern\'s school?'
                            },
                        ])
                        .then(internAnswers => {
                            const intern = new Intern ((internAnswers.office, internAnswers.name, internAnswers.id, internAnswers.email))
                            employeeList.push(intern)
                        })
                        .catch(error => {
                            if(error) {
                                console.log ("error rendering employee" + error)
                            }
                        })
                    }
                    
                    
                })
            }

            // After the user has input ALL employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

            console.log(employeeList)
            render(employeeList)
    })

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location. Hint: you may need to check if the `output` folder exists and create it if it does not.

fs.appendFile(outputPath, data, (error) => {
    if (error) {
        console.log(error)
    }
console.log('File Saved')
})

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! ```
