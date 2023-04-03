// Query database
module.exports = {
    viewAllDepartments: `SELECT id AS "Department ID", name AS "Department Name" FROM department`,
    addDepartment: `INSERT INTO department (name) VALUES (?)`,
    viewAllRoles: `SELECT role_id AS "Role ID", title AS "Role Title" FROM roles`,
    addEmployees: `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
    viewAllEmployees: `SELECT id AS "Employee ID", first_name AS "First Name", last_name AS "Last Name", role_id AS "Position", manager_id AS "Manager ID" FROM employees`,
    addRole: `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
    updateEmployeeRole: `UPDATE employee SET role_id = ? WHERE id = ?`,
    updateEmployeeManager: `UPDATE employee SET manager_id = ? WHERE id = ?`,

    //bonus queries
    viewEmployeeByManager: `SELECT em.id AS "Employee ID", em.first_name AS "First Name", em.last_name AS "Last Name", man.id AS "Manager ID", man.first_name AS "Manager First Name", man.last_name AS "Manager Last Name" FROM employees AS em LEFT JOIN employees AS man ON em.manager_id = man.id ORDER BY man.id`,
    viewEmployeesByDepartment: `SELECT em.id AS "Employee ID", em.first_name AS "First Name", em.last_name AS "Last Name"
        rl.id AS "Role ID", rl.title AS "Role Title",
        dep.id AS "Department ID, dep.name AS "Department Name"
        FROM employees AS em
        JOIN roles AS r ON e.role_id = rl.id
        JOIN departments AS dep ON rl.department_id = dep.id
        ORDER BY d.id, e.id`,
    deleteDepartment: `DELETE FROM department WHERE name = ?`,
    deleteRole: `DELETE FROM roles WHERE title = ?`,
    deleteEmployee: `DELETE FROM employees WHERE first_name = ? OR last_name = ? OR id = ?`,
    getBudgetByDepartment: `SELECT d.id AS "Department ID", d.name AS "Department Title", SUM(r.salary) AS "Total Utilized Budget" FROM department AS d JOIN roles AS r ON d.id = r.department_id GROUP BY d.id, d.name`
};
