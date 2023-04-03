INSERT INTO department(department_id, name)
VALUES (1, 'Sales'),
(2, 'Engineering'), 
(3, 'Finance',), 
(4, 'Legal',)

INSERT INTO role(role_id, title, salary, department_id)
VALUES (1, 'Sales Lead', 100000, 1),
(2, 'Salesperson', 80000, 1),
(3, 'Lead Engineer', 150000, 2),
(4, 'Software Engineer', 120000, 2),
(5, 'Account Manager', 125000, 3),
(6, 'Accountant', 125000, 3),
(7, 'Legal Team Lead', 250000, 4),
(8, 'Lawyer', 'Legal', 190000, 4)



INSERT INTO eployee(employee_id, first_name, last_name, title, department, salary, manager_id)
VALUES (001, 'John', 'Doe', 'Sales Lead', 'Sales', 100000, null),
(002, 'Mike', 'Chan', 'Salesperson', 'Sales', 80000, 001),
(003, 'Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', 150000, null),
(004, 'Kevin', 'Tupik', 'Software Engineer', 'Engineering', 12000, 003),
(005, 'Kunal', 'Singh', 'Account Manager', 'Finance', 160000, null),
(006, 'Malia', 'Brown', 'Accountant', 'Finance', 125000, 005),
(008, 'Sarah', 'Lourd', 'Legal Team Lead', 'Legal', 250000, null),
(009, 'Tom', 'Allen', 'Lawyer', 'Legal', 190000, 008);