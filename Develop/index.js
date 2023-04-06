// Main menu and action handling
const inquirer = require('inquirer');
const inquirerPrompts = require('./Prompts/inquirerprompts');
const queries = require ('./queries'); // import inquirer prompts
const dbConnection = require('./db');
const figlet = require('figlet');

figlet ('Employee Manager', function(err, data) {
    if (err) {
        console.log('Error printing text art...');
        console.dir(err);
        return;
    }
    console.log('\n');
    console.log(data);
    console.log('\n');
    mainMenuHandler();
});

const mainMenuHandler = async function () {
    let response = await inquirer.prompt(inquirerPrompts.userAction);

switch (response.action) { 
    case 'View All Departments':
        return viewDepartments();
    case 'View All Roles':
        return viewRoles();
    case 'View All Employees':
        return viewEmployees();
    case 'Add Department':
        return addDepartment();
    case 'Add Role':
        return addRole();
    case 'Add Employee': 
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
    dbConnection.query(queries.viewAllDepartments, (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to view departments')
        };
        console.log('\n');
        console.log(`Viewing Departments:`);
        console.table(res);
        console.log('\n');
        mainMenuHandler();
    }); 
}

const viewRoles = () => {
    dbConnection.query(queries.viewAllRoles, (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to access database')
        };
        console.log('\n');
        console.log(`Viewing Roles:`);
        console.table(res);
        console.log('\n');
        mainMenuHandler();
    }); 
};

const viewEmployees = () => {
    dbConnection.query(queries.viewAllEmployees, (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to view employees')
        };
        console.log('\n');
        console.log(`Viewing Employees:`);
        console.table(res);
        console.log('\n');
        mainMenuHandler();
    });
};

const addDepartment = async () => {
    let {addDepartmentName} = await inquirer.prompt(inquirerPrompts.addDeptName);
    dbConnection.query(queries.addDepartment, [addDepartmentName], (err, res) => {
        if (err) {
            throw new Error('Unable to add department')
        };
        console.log('\n');
        console.log( `Department '${addDepartmentName}' added successfully!`);
        console.log('\n');
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

// const addEmployee = async () => {
//     let {employeeFName, employeeLName, employeeRole, employeeManager} = await inquirer.prompt(inquirerPrompts.addEmployee);
//     dbConnection.query(queries.addEmployee, [employeeFName, employeeLName, employeeRole, employeeManager], (err, res) => {
//         if (err) {
//             throw new Error('Unable to add employee')
//         };
//         console.log(`Employee '${employeeFName} ${employeeLName}' successfully added!`);
//     mainMenuHandler();
//     });
// };

// const updateEmployeeRole = async () => {
//     let {employeeID, employeeRole} = await inquirer.prompt();
// }

// // Functions to add additional functionality
// const updateEmployeeManager = async () => {
//     let {} = await inquirer.prompt();
// }

// const viewEmployeeByManager = async () => {
//     let {} = await inquirer.prompt();
// }

// const viewEmployeesByDepartment = async () => {
//     let {} = await inquirer.prompt();
// }

// const deleteDepartment = async () => {
//     let {} = await inquirer.prompt();
// }

// const deleteRole = async () => {
//     let {} = await inquirer.prompt();
// }

// const deleteEmployee = async () => {
//     let {} = await inquirer.prompt();
// }

// const getBudgetByDepartment = async () => {
//     let {} = await inquirer.prompt();
// }


// // Managing manager names for dynamic prompts.
// const currentManagerNames = async () => {
//     await new Promise ((resolve, reject) => {
//         dbConnection.query(queries.getManagerNames, (err, res) =>
//         {
//             if (err) {
//             console.log ('Unable to fetch manager names.');
//         } else {
//             resolve (res);
//         }
//         });
//     });
// };

// const getDynamicChoices = async () => {
//     try {
//         const currentManagers = await currentManagerNames();
//         const managerNames = currentManagers.map(manager => `${manager["Manager Name"]} ${manager["Manager Surname"]}`);
//         return managerNames;
//     } catch (err) {
//         console.error(err);
//         return [];
//     }
// }


// Close database connection
const closeApp = function () {
    console.log('Thank you for using our app. Goodbye!')
    dbConnection.end();
} 

// module.exports.getDynamicChoices = getDynamicChoices;
