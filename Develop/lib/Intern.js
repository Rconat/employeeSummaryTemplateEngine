// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee')

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, 'Intern', id, email)
        this.school = school
    } 
}

module.exports = Intern