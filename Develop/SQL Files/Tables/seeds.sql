INSERT INTO departments(department_id, name, manager)
VALUES (1, 'Sales', 'John Doe'),
(2, 'Engineering', 'Ashley Rodriguez'), 
(3, 'Finance', 'Kunal Singh'), 
(4, 'Legal', 'Sarah Lourd')

INSERT INTO roles(role_id, title, department, salary)
VALUES (1, 'Sales Lead', 'Sales', 100000),
(2, 'Salesperson', 'Sales', 80000),
(3, 'Lead Engineer', 'Engineering', 150000),
(4, 'Software Engineer', 'Engineering', 120000),
(5, 'Account Manager', 'Finance', 125000),
(6, 'Accountant', 'Finance', 125000),
(7, 'Legal Team Lead', 'Legal', 250000),
(8, 'Lawyer', 'Legal', 190000)



INSERT INTO eployees(employee_id, first_name, last_name, title, department, salary, manager)
VALUES (001, 'John', 'Doe', 'Sales Lead', 'Sales', 100000, null),
(002, 'Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'John Doe'),
(003, 'Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', 150000, null),
(004, 'Kevin', 'Tupik', 'Software Engineer', 'Engineering', 12000, 'Ashley Rodriguez'),
(005, 'Kunal', 'Singh', 'Account Manager', 'Finance', 160000, null),
(006, 'Malia', 'Brown', 'Accountant', 'Finance', 125000, 'Kunal Singh'),
(008, 'Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, null),
(009, 'Tom', 'Allen', 'Lawyer', 'Legal', 190000, 'Sarah Lourd');