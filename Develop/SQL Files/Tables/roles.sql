create TABLE employeeRoles (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY , title VARCHAR(30), salary DECIMAL, department_id INT, FOREIGN KEY(department_id) REFERENCES departments(id) 
);