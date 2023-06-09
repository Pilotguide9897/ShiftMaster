-- To allow the database to be re-seeded --
DROP DATABASE IF EXISTS company_db;

-- To set up the db and necessary tables --
CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR (30) 
);

create TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, title VARCHAR(30), salary DECIMAL, department_id INT, FOREIGN KEY(department_id) REFERENCES department (id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR (30), last_name VARCHAR (30), role_id INT, manager_id INT, FOREIGN KEY (role_id) REFERENCES role (id), FOREIGN KEY(manager_id) REFERENCES employee (id) ON DELETE SET NULL
);