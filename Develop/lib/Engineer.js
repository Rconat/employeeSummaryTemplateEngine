// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, 'Engineer', id, email)
        this.github = github
    } 
}

module.exports = Engineer