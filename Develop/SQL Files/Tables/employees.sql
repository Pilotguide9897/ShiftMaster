CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(30), last_name VARCHAR(30), role_id INT, manager_id INT, FOREIGN KEY(role_id) REFERENCES roles(id), FOREIGN KEY(manager_id) REFERENCES(employee_id)
)