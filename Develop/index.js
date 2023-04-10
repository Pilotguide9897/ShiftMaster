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
    case 'Update Employee Manager':
        return updateEmployeeManager();
    case 'View Employees by Department':
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
            console.error("Error: ", err);
            throw new Error('Unable to add department')
        };
        console.log('\n');
        console.log( `Department '${addDepartmentName}' added successfully!`);
        console.log('\n');
        mainMenuHandler();
    });
};

const addRole = async () => {
    let {roleName, roleWage, roleDept} = await inquirer.prompt(inquirerPrompts.addRole);
    dbConnection.query(queries.addRole, [roleName, roleWage, roleDept], (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to add role')
        };
        console.log('\n');
        console.log(`Role '${roleName} successfully added!`);
        console.log('\n');
        mainMenuHandler();
    });
};

const addEmployee = async () => {
    let {employeeFName, employeeLName, employeeRole, employeeManager} = await inquirer.prompt(inquirerPrompts.addEmployee);
    dbConnection.query(queries.addEmployee, [employeeFName, employeeLName, employeeRole, employeeManager], (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to add employee')
        };
        console.log('\n');
        console.log(`Employee '${employeeFName} ${employeeLName}' successfully added!`);
        console.log('\n');
    mainMenuHandler();
    });
};

const updateEmployeeRole = async () => {
    try {
        const currentRoles = await fetchCurrentRoles();
        const rolesList = currentRoles ? currentRoles.map(role => ({
            name: role.title,
            value: role.id
        })) : [];

        const currentEmployees = await fetchCurrentEmployees();
        const employeeList = currentEmployees ? currentEmployees.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
          })) : [];

        const { updateEmpRole, roleToReplace } = await inquirer.prompt([
            {
                    type: 'list',
                    name: 'updateEmpRole',
                    message: 'Which employee\'s role would you like to update?',
                    choices: employeeList
        },
        {
            type: 'list',
            name: 'roleToReplace',
            message: 'Which role do you want to replace?',
            choices: rolesList
          }
    ]);
    dbConnection.query(queries.updateEmployeeRole, [roleToReplace, updateEmpRole], (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to update role')
        };
        console.log('\n');
        console.log(`Employee role updated successfully!`);
        console.log('\n');
        mainMenuHandler();
        });
    } catch (error) {
        console.log('error', error);
    }
};

// // Functions to add additional functionality


 const getBudgetByDepartment = async () => {
    try {
        const currentDepartments = await fetchCurrentDepartments();
        const departmentList = currentDepartments ? currentDepartments.map(department => ({
            name: department.name,
            value: department.id
          })) : [];

    const { departmentBudget } = await inquirer.prompt([
        {
            type: 'list',
            name: 'departmentBudget',
            message: 'Please select a department',
            choices: departmentList,
        }
    ])
          dbConnection.query(queries.getBudgetByDepartment, [departmentBudget], (err, res) => {
            if (err) {
                console.error("Error: ", err);
                throw new Error('Unable to view budget by department')
            };
            console.log('\n');
            console.log('Viewing Budget by Department:');
            console.table(res);
            console.log('\n');
            mainMenuHandler();
        });
    } catch {
        console.log('error', error);
    }
 };

const updateEmployeeManager = async () => {
    try {
        const currentManagers = await fetchCurrentManagers();
        //console.log("Current managers data:", currentManagers);
        const managerList = currentManagers ? currentManagers.map(manager => ({
            name: `${manager['Manager Name']} ${manager['Manager Surname']}`,
            value: manager["Manager's Employee ID"]
        })) : [];
        

        const currentEmployees = await fetchCurrentEmployees();
        const employeeList = currentEmployees ? currentEmployees.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
          })) : [];

        const { updateEmpRole, managerToReplace } = await inquirer.prompt([
            {
                    type: 'list',
                    name: 'updateEmpRole',
                    message: 'Which employee\'s data would you like to update?',
                    choices: employeeList
        },
        {
            type: 'list',
            name: 'managerToReplace',
            message: 'Who is to be the employee\'s new manager?',
            choices: managerList
          }
    ]);
    dbConnection.query(queries.updateEmployeeManager, [managerToReplace, updateEmpRole], (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to update employee manager.')
        };
        console.log('\n');
        console.log(`Employee manager updated successfully!`);
        console.log('\n');
        mainMenuHandler();
        });
    } catch (error) {
        console.log('error', error);
    }
};

const viewEmployeeByManager = async () => {
    dbConnection.query(queries.viewEmployeeByManager, (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to view employees by manager')
        };
        console.log('\n');
        console.log("Viewing Employees by Manager:");
        console.table(res);
        console.log('\n');
        mainMenuHandler();
    });
};

const viewEmployeesByDepartment = async () => {
    dbConnection.query(queries.viewEmployeesByDepartment, (err, res) => {
        if (err) {
            console.error("Error: ", err);
            throw new Error('Unable to view employees by department')
        };
        console.log('\n');
        console.log('Viewing Employees by Department:');
        console.table(res);
        console.log('\n');
        mainMenuHandler();
    });
};

// Delete Department
const deleteDepartment = async () => {
    try {
        const currentDepartments = await fetchCurrentDepartments();
        const departmentList = currentDepartments ? currentDepartments.map(department => ({
            name: department.name,
            value: department.id
          })) : [];
          

          const { removeDepartment } = await inquirer.prompt([
            {
                type: 'list',
                name: 'removeDepartment',
                message: 'Which department would you like to remove?',
                choices: departmentList,
            }
          ]);

          dbConnection.query(queries.deleteDepartment, [removeDepartment], (err, res) => {
            if (err) {
                console.error("Error: ", err);
                throw new Error('Unable to remove department')
            };
            console.log('\n');
            console.log(`Department removed successfully!`);
            console.log('\n');
        mainMenuHandler();
        });
    } catch (error) {
        console.log('error', error);
    }
 };

// Delete role
const deleteRole = async () => {
    try {
      const currentRoles = await fetchCurrentRoles();
      const rolesList = currentRoles
        ? currentRoles.map((role) => ({
            name: role.title,
            value: role.id,
          }))
        : [];
  
      const { roleToDelete } = await inquirer.prompt([
        {
          type: 'list',
          name: 'roleToDelete',
          message: 'Which role do you want to delete?',
          choices: rolesList,
        },
      ]);
      console.log(roleToDelete);
  
      dbConnection.query('DELETE FROM employee WHERE role_id = ?', [roleToDelete], (err, res) => {
        if (err) {
          console.error('Error: ', err);
        }
      });
      dbConnection.query(queries.deleteRole, [roleToDelete], (err, res) => {
        if (err) {
          console.error('Error: ', err);
          throw new Error('Unable to remove role');
        }
        console.log('\n');
        console.log(`Role removed successfully!`);
        console.log('\n');
        mainMenuHandler();
      });
    } catch (error) {
      console.log('error', error);
    }
  };
  
 // Delete Employee
 const deleteEmployee = async () => {
    try {
        const currentEmployees = await fetchCurrentEmployees();
        const employeeList = currentEmployees ? currentEmployees.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
          })) : [];
          
          const { removeEmployee } = await inquirer.prompt([
            {
                type: 'list',
                name: 'removeEmployee',
                message: 'Which employee would you like to remove?',
                choices: employeeList
            }
          ]);

          dbConnection.query(queries.deleteEmployee, [removeEmployee], (err, res) => {
            if (err) {
                console.error("Error: ", err);
                throw new Error('Unable to remove employee')
            };
            console.log(removeEmployee);
            console.log('\n');
            console.log(`Employee removed successfully!`);
            console.log('\n');
        mainMenuHandler();
        });
    } catch (error) {
        console.log('error', error);
    }
 };

// Functions to fetch data to allow deletion or updating
const fetchCurrentRoles = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`SELECT DISTINCT title, id FROM role`, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  };
  
  const fetchCurrentDepartments = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`Select DISTINCT id, name FROM department`, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  };

  const fetchCurrentEmployees = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(`Select id, first_name, last_name FROM employee`, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  };

  const fetchCurrentManagers = () => {
    return new Promise((resolve, reject) => {
      dbConnection.query(queries.getManagerNames, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  };

// Close database connection
const closeApp = function () {
    console.log('Thank you for using our app. Goodbye!')
    console.log('\n');
    dbConnection.end();
} 

