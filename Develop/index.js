// Main menu and action handling
const inquirer = require('inquirer');
const inquirerPrompts = require('./Prompts/inquirerprompts');
const queries = require ('./queries'); // import inquirer prompts
const dbConnection = require('./db');

const mainMenuHandler = async function () {
    let response = await inquirer.prompt(inquirerPrompts.userAction);

switch (response) { // I can add the other bonus objectives here too.
    case 'View All Departments':
        return viewDepartments();
    case 'View All Roles':
        return viewRoles();
    case 'View Employees':
        return viewEmployees();
    case 'Add Department':
        return addDepartment();
    case 'Add Role':
        return addRole();
    case 'Add Employee': //need to 
        return addEmployee();
    case 'View Employees by Manager':
        return viewEmployeeByManager();
    case 'Update Employee Role':
        return updateEmployeeRole();
    case'View Employees by Manager':
        return viewEmployeesByDepartment();
    case 'Delete Department':
        return deleteDepartment();
    case 'Delete Role':
        return deleteRole();
    case 'Delete Employee':
        return deleteEmployee();
    case 'Get Budget by Department':
        return getBudgetByDepartment();
    case 'Exit':
        return closeApp();
    }
};

// Query Functions
const viewDepartments = () => {
    dbConnection.query(queries.viewAllDepartments,(err, res) => {
        if (err) {
            throw new Error('Unable to view departments')
        };
        console.table(res);
        mainMenuHandler();
    }); 
}

const viewRoles = () => {
    dbConnection.query(queries.viewAllRoles,(err, res) => {
        if (err) {
            throw new Error('Unable to access database')
        };
        console.table(res);
        mainMenuHandler();
    }); 
};

const viewEmployees = () => {
    dbConnection.query(queries.viewAllEmployees,(err, res) => {
        if (err) {
            throw new Error('Unable to view employees')
        };
        console.table(res);
        mainMenuHandler();
    });
};

const addDepartment = async () => {
    let {deptName} = await inquirer.prompt(inquirerPrompts.addDeptName);
    dbConnection.query(queries.addDepartment, [deptName], (err, res) => {
        if (err) {
            throw new Error('Unable to add department')
        };
        console.log( `Department '${name}' added successfully!`);
        mainMenuHandler();
    });
};

const addRole = async () => {
    let {roleName, roleWage, roleDept} = await inquirer.prompt(inquirerPrompts.addRoles);
    dbConnection.query(queries.addRole, [roleName, roleWage, roleDept], (err, res) => {
        if (err) {
            throw new Error('Unable to add role')
        };
        console.log(`Role '${title} successfully added!`);
        mainMenuHandler();
    });
};

const addEmployee = async () => {
    let {employeeFName, employeeLName, employeeRole, employeeManager} = await inquirer.prompt(inquirerPrompts.addEmployee);
    dbConnection.query(queries.addEmployee, [employeeFName, employeeLName, employeeRole, employeeManager], (err, res) => {
        if (err) {
            throw new Error('Unable to add employee')
        };
        console.log(`Employee '${employeeFName} ${employeeLName}' successfully added!`);
    mainMenuHandler();
    });
};

const updateEmployeeRole = async () => {
    let {employeeID, employeeRole} = await inquirer.prompt();
}

// Functions to add additional functionality
const updateEmployeeManager = async () => {
    let {} = await inquirer.prompt();
}

const viewEmployeeByManager = async () => {
    let {} = await inquirer.prompt();
}

const viewEmployeesByDepartment = async () => {
    let {} = await inquirer.prompt();
}

const deleteDepartment = async () => {
    let {} = await inquirer.prompt();
}

const deleteRole = async () => {
    let {} = await inquirer.prompt();
}

const deleteEmployee = async () => {
    let {} = await inquirer.prompt();
}

const getBudgetByDepartment = async () => {
    let {} = await inquirer.prompt();
}


// Managing manager names for dynamic prompts.
const currentManagerNames = async () => {
    await new Promise ((resolve, reject) => {
        dbConnection.query(queries.getManagerNames, (err, res) =>
        {
            if (err) {
            console.log ('Unable to fetch manager names.');
        } else {
            resolve (res);
        }
        });
    });
};

const getDynamicChoices = async () => {
    try {
        const currentManagers = await currentManagerNames();
        const managerNames = currentManagers.map(manager => `${manager["Manager Name"]} ${manager["Manager Surname"]}`);
        return managerNames;
    } catch (err) {
        console.error(err);
        return [];
    }
}


// Close database connection
const closeApp = function () {
    console.log('Thank you for using our app. Goodbye!')
    connection.end();
} 