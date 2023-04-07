//const { on } = require("./db");

// Query database
module.exports = {
    viewAllDepartments: `SELECT id AS "Department ID", name AS "Department Name" FROM department`,
    addDepartment: `INSERT INTO department (name) VALUES (?)`,
    viewAllRoles: `SELECT r.id AS "Role ID", r.title AS "Role Title", d.name AS "Department", r.salary AS "Salary" FROM role AS r JOIN department AS d ON r.department_id = d.id`,
    addEmployee: `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
    viewAllEmployees: `SELECT e.id AS "Employee ID", e.first_name AS "First Name", e.last_name AS "Last Name", r.title AS "Position", CONCAT(m.first_name, ' ', m.last_name) AS "Manager"
    FROM employee as e 
    JOIN role AS r ON r.id = e.role_id
    JOIN department AS d ON r.department_id = d.id
    LEFT JOIN employee AS m ON m.id = e.manager_id`,
    addRole: `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
    updateEmployeeRole: `UPDATE employee SET role_id = ? WHERE id = ?`,
    updateEmployeeManager: `UPDATE employee SET manager_id = ? WHERE id = ?`,
    getManagerNames: `SELECT DISTINCT m.id AS "Manager ID", m.first_name AS "Manager Name", m.last_name AS "Manager Surname" FROM employee AS e JOIN employee AS m ON e.manager_id = m.id`,
    
    //bonus queries
    viewEmployeeByManager: `SELECT em.id AS "Employee ID", em.first_name AS "First Name", em.last_name AS "Last Name", man.id AS "Manager ID", man.first_name AS "Manager First Name", man.last_name AS "Manager Last Name" FROM employee AS em LEFT JOIN employee AS man ON em.manager_id = man.id ORDER BY man.id`,
    viewEmployeesByDepartment: `SELECT em.id AS "Employee ID", em.first_name AS "First Name", em.last_name AS "Last Name", rl.id AS "Role ID", rl.title AS "Role Title", dep.id AS "Department ID", dep.name AS "Department Name" FROM employee AS em JOIN role AS rl ON em.role_id = rl.id JOIN department AS dep ON rl.department_id = dep.id ORDER BY dep.id, em.id`,
    deleteDepartment: `DELETE FROM department WHERE id = ?`,
    deleteRole: `DELETE FROM role WHERE id = ?`,
    deleteEmployee: `DELETE FROM employee WHERE id = ?`,
    getBudgetByDepartment: `SELECT d.id AS "Department ID", d.name AS "Department Title", SUM(r.salary) AS "Total Utilized Budget" FROM department AS d JOIN role AS r ON d.id = r.department_id GROUP BY d.id, d.name`
};
