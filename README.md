# ShiftMaster

![](https://img.shields.io/badge/License-MIT-yellow.svg)
## Description
ShiftMaster is a command-line application designed for business owners who want to efficiently manage their company's departments, roles, and employees. This application allows users to easily view, add, update, and delete information about their organization, helping them to better plan and organize their business.

As a business owner, you can use ShiftMaster to view and manage the departments, roles, and employees in your company, which helps you organize and plan your business. Extending this basic functionality, Shift Master also allows you to:
- View all departments, roles, and employees in a formatted table.
- Add departments, roles, and employees to your database.
- Update employee roles and managers.
- View employees by manager or department.
- Delete departments, roles, and employees.
- View the total utilized budget of a department (i.e., the combined salaries of all employees in the department).

A video illustrating this application's functionality may be viewed [here]().

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)
- [License](#license)

## Screenshots 
![Placeholder](https://github.com/Pilotguide9897/ShiftMaster/blob/main/ShiftMaster%20Screenshots/Screenshot%202023-04-08%20at%2012.10.59%20PM.png)

![Placeholder](https://github.com/Pilotguide9897/ShiftMaster/blob/main/ShiftMaster%20Screenshots/Screenshot%202023-04-08%20at%2012.11.39%20PM.png)

## Installation
To install this application, clone the repository to your local machine. You can do this by running the following command in your terminal: 'git clone <repository-url>. The repo url can be obtained by clicking the green code button in the main repo page, clicking the SSH tab, and then copying the URL provided. Once the repo is cloned to the local system, navigate to the directory in the terminal until index.js is located. Index.js is the main file for this application. This application requires that users already have node.js and Node Package Manager (NPM) installed. For more information on installing these technologies please consult their official documentation. 

To install the necessary dependencies, run <npm install> in your project directory. This will automatically install all the required dependencies (i.e., mysql2, inquirer, dotenv, figlet).

## Usage
To run the application, execute the main script (i.e., `node index.js`) from your project directory. Upon launch, ShiftMaster will prompt you with a list of options that can be organized into the following categories:

### a) Viewing Data
- View all departments: Displays a formatted table showing department names and department IDs.
- View all roles: Displays a formatted table with the job title, role ID, department the role belongs to, and the salary for that role.
- View all employees: Displays a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.
### b) Adding Data
- Add a department: Prompted to enter the name of the department, which is then added to the database.
- Add a role: Prompted to enter the name, salary, and department for the role, which is then added to the database.
- Add an employee: Prompted to enter the employee's first name, last name, role, and manager, which is then added to the database.
### c) Updating Data
- Update an employee role: Prompted to select an employee to update and their new role, which is then updated in the database.
- Update employee managers: Prompted to select an employee to update and their new manager, which is then updated in the database.
### d) Filtering Data
- View employees by manager: Displays a list of employees filtered by their manager.
- View employees by department: Displays a list of employees filtered by their department.
### e) Deleting Data
- Delete departments, roles, and employees: Allows users to remove departments, roles, and employees from the database.
### f) Budget Analysis
- View the total utilized budget of a department: Displays the combined salaries of all employees in the department. This helps business owners analyze the department's budget and make informed decisions.

Select the appropriate option for your needs and the application will walk you through the required steps to complete you desired task. Once the task is complete you will be returned to the main menu. Upon completion of all your desired clerical tasks, select "Exit" from the main menu to easily close the application.

## Contributing
Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Questions
* If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com.
* You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.
