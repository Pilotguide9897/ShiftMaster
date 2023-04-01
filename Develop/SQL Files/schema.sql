-- To set up the necessary tables --
CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

-- CREATE TABLE department (
   -- id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) 
--)

-- CREATE TABLE employees (
    -- id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(30), last_name VARCHAR(30), role_id INT, manager_id INT, FOREIGN KEY(role_id) REFERENCES roles(id), FOREIGN KEY(manager_id) REFERENCES(employee_id)
-- )

-- create TABLE employeeRoles (
    -- id INT AUTO_INCREMENT NOT NULL PRIMARY KEY , title VARCHAR(30), salary DECIMAL, department_id INT, FOREIGN KEY(department_id) REFERENCES departments(id) 
--);