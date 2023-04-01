const inquirer =require('inquirer');

const userAction = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices:['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add role', 'Add employee', 'Update Employee Role', 'Quit']
    }
]

const addDeptName = [
    {
        name: 'addDepartmentName',
        type: 'input',
        message: 'What is the name of the department?'
        // validate:
    }
]

const addRoles = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?',
        // validate: 
    },
    {
        type: 'input',
        name: 'roleWage',
        message: 'What is the salary of the role?',
        // validate: 
    },
    {
        type: 'list',
        name: 'roleDept',
        message: 'Which department does this role belong to?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'service', 'Information and Technology', 'Public Relations', 'Research and Development', 'Corporate Management', 'Quality Assurance', 'Human Resources']
    }
]

const employees = [
    {
        type: 'input',
        name: 'employeeFname',
        message: 'What is the employee\'s first name?',
        // validate: 
    },
    {
        type: 'input',
        name: 'employeeLname',
        message: 'What is the employee\'s last name?',
        // validate: 
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What is the employee\'s role',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
    },
    {
        type: 'list',
        name: 'employeeManager',
        message: 'Who is the employee\'s manager?',
        Choices: ['None', 'John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malie Brown',]
    }
]

const updateEmployee = [
    {
        type: 'input',
        name: 'updateEmpRole',
        message: 'Which employee\'s role would you like to update?',
        l 
    }
]

module.exports = {
    userAction,
    addDeptName,
    addRoles,
    employees,
    updateEmployee
};

