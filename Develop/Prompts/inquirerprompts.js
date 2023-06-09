const inquirer =require('inquirer');
const nameRegex = /^(?!.*  )[A-Za-z ]{3,30}$/;
const numberRegex = /^\d{1,10}$/;

const userAction = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices:['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'View Employees by Manager', 'View Employees by Department', 'Delete Department', 'Delete Role', 'Delete Employee', 'Get Budget by Department', 'Exit']
    }
]

const addDeptName = [
    {
        name: 'addDepartmentName',
        type: 'input',
        message: 'What is the name of the department?',
        validate: (input) => {
            if (!nameRegex.test(input)) {
            return 'Please input a valid department title.'
            }
            return true;
        }
    }
]

const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?',
        validate: (input) => {
            if (!nameRegex.test(input)) {
            return 'Please input a valid role title.'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'roleWage',
        message: 'What is the salary of the role?',
        validate: (input) => {
            if (!numberRegex.test(input)) {
            return 'Please input a valid numerical amount, exlucing hypens, dashes, or spaces.'
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'roleDept',
        message: 'Which department does this role belong to?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Customer Service', 'Information and Technology', 'Public Relations', 'Research and Development', 'Corporate Management', 'Quality Assurance', 'Human Resources'],
        filter: (input) => {
            const choices = ['Sales', 'Engineering', 'Finance', 'Legal', 'Customer Service', 'Information and Technology', 'Public Relations', 'Research and Development', 'Corporate Management', 'Quality Assurance', 'Human Resources'];
        const choiceIndex = choices.indexOf(input);
        return choiceIndex + 1;
        }
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'employeeFName',
        message: 'What is the employee\'s first name?',
        validate: (input) => {
            if (!nameRegex.test(input)){
                return 'Please enter a valid first name.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'employeeLName',
        message: 'What is the employee\'s surname?',
        validate: (input) => {
            if (!nameRegex.test(input)){
                return 'Please enter a valid surname name.';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What is the employee\'s role',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service'],
        filter: (input) => {
            const choices = ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service'];
        const choiceIndex = choices.indexOf(input);
        return choiceIndex + 1;
        }
    },
    {
        type: 'list',
        name: 'employeeManager',
        message: 'Who is the employee\'s manager?',
        choices: ['None', 'John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malie Brown'],
        filter: (input) => {
            const choices = ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malie Brown'];
        const choiceIndex = choices.indexOf(input);
        return choiceIndex + 1;
        }
    }
]

module.exports = {
     userAction,
     addDeptName,
     addRole,
     addEmployee
};

