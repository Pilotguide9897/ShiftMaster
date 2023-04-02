// Main menu and action handling
const inquirer = require('inquirer');
const inquirerPrompts = require('./Prompts/inquirerprompts');
const queries = require ('./queries');
const dbConnection = require('./db');

const mainMenuHandler = async function () {
    let response = await inquirer.prompt(inquirerPrompts.userAction);

switch (action) { // I can add the other bonus objectives here too.
    case 'View All Roles':
        return viewAllRoles(queries.);
    case 'View Employees':
        return viewEmployees(queries.);
    case 'Add Department':
        return addDepartment(queries.);
    case 'Add Role':
        return addRole(queries.);
    case 'Add Employee':
        return addEmployee(queries.);
    case 'View Employees by Manager':
        return viewEmployeeByManager(queries.);
    case'View Employees by Manager':
        return viewEmployeeByDepartment(queries.);
    case 'Delete Department':
        return deleteDepartment(queries.);
    case 'Delete Role':
        return deleteRole(queries.);
    case 'Delete Employee':
        return deleteEmployee(queries.);
    case 'Get Budget by Department':
        return getBudgetByDepartment(queries.);
    case 'Exit':
        return closeApp;
    }
};

// Query Functions

const viewAllDepartments = () => {
    connection.query(queries.viewAllDepartments,(err, res) => {
        if (err) {
            throw new Error('Unable to view departments')
        }
        mainMenuHandler();
    })
    
}

const viewAllRoles = () => {
    connection.query(queries.viewAllRoles,(err, res) => {
        if (err) {
            throw new Error('Unable to access database')
        }
        mainMenuHandler();
    }); 
};

const viewEmployees = () => {
    connection.query(queries.viewAllEmployees,(err, res) => {
        if (err) {
            throw new Error('Unable to view employees')
        }
        mainMenuHandler();
    });
    
};

const addDepartment = async () => {
    connection.query(queries. ,(err, res) => {
        if (err) {
            throw new Error('Unable to add department')
        }
        mainMenuHandler();
    });
};

const addRole = async () => {
    connection.query(queries. ,(err, res) => {
        if (err) {
            throw new Error('Unable to add role')
        }
        mainMenuHandler();
    });
};

const addEmployee = async () => {
    connection.query(queries. ,(err, res) => {
        if (err) {
            throw new Error('Unable to add employee')
        }

    mainMenuHandler();
    });
};

// Add additional functionality
    





// Close database connection
const closeApp = function () {
    console.log('Thank you for using our app. Goodbye!')
    connection.end();
} 