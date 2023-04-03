const inquirer =require('inquirer');

const userAction = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices:['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'View Employees by Manager', 'View Employees by Department', 'Delete Department', 'Delete Role', 'Delete Employee', 'Get Budget by Department', 'Quit']
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

const addEmployee = [
    {
        type: 'input',
        name: 'employeeFName',
        message: 'What is the employee\'s first name?',
        // validate: 
    },
    {
        type: 'input',
        name: 'employeeLName',
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
        Choices: ['None', 'John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malie Brown']
    }
]

const updateEmployee = [ //come back to...
    {
        type: 'list',
        name: 'updateEmpRole',
        message: 'Which employee\'s role would you like to update?',
        choices: 
    }
]

const viewEmployeesByManager = [
    {
        type: '',
        name: 'managerSelection',
        message: 'Please select a manager.',
        choices:
    }
]

const viewEmployeesByDepartment = [
    {
        type: '',
        name: 'departmentEmployees',
        message: 'Please select a department',
        choices:
    }
]

const deleteDepartment = [
    {
        type: '',
        name: 'removeDepartment',
        message: 'Which department would you like to remove?',
        choices:
    }
]

const deleteRole = [
    {
        type: '',
        name: 'removeRole',
        message: 'Which role would you like to remove?',
        choices:
    }
]

const deleteEmployee = [
    {
        type: '',
        name: 'removeEmployee',
        message: 'Which employee would you like to remove?',
        choices:
    }
    
]

const getUtilizedDepartmentBudget = [
    {
        type: 'list',
        name: 'departmentBudget',
        message: 'Please select a department',
        choices: 
    }
]

module.exports = {
    userAction,
    addDeptName,
    addRoles,
    addEmployee,
    updateEmployee,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    getUtilizedDepartmentBudget
};

