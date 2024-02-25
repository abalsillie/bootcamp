INSERT INTO departments (department_name)
VALUES ("Finance"),
       ("Operations"),
       ("Communications"),
       ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("CFO", 250000, 1),
       ("COO", 200000, 2),
       ("Head of Comms", 150000, 3),
       ("Sales Lead", 120000, 4);
       
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 2),
       ("Mike", "Chan", 2, 3),
       ("Ashley", "Rodriguez", 3, 4),
       ("Kevin",  "Tupik", 4, 1);
