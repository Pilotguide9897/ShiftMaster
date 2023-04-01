// Query database
//Complete these.
module.exports = {
    viewAllDepartments = `SELECT id AS 'Department ID', name AS 'Department Name' FROM department`,
    addDepartment = `INSERT INTO department (name) VALUES (?)`,
    viewAllRoles = `SELECT role_id AS 'Role ID', title AS 'Role Title' FROM employeeRoles`,
    addEmployees = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
    viewAllEmployees = `SELECT id AS 'Employee ID', first_name AS 'First Name', last_name AS 'Last Name', role_id AS 'Position', manager_id AS 'Manager ID'FROM employees`,
    addRole  = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
    updateEmployeeRole = `UPDATE employee SET role_id = ? WHERE id = ?`,
    updateEmployeeManager = `UPDATE employee SET manager_id = ? WHERE id = ?`,

    //bonus
    viewEMployeeByManager = `SELECT id AS 'Employee ID`,
    viewEmployeesByDepartment = `SELECT` ,
    deleteDepartment = `DELETE FROM department WHERE `,
    deleteRoles = `DELETE FROM employeeRoles WHERE title = ?`,
    deleteEmployees = `DELETE FROM employees WHERE `,
    getDepartmentBudget = `SELECT CHECKSUM_AGG (CAST(salary AS DECIMAL)) FROM 
};