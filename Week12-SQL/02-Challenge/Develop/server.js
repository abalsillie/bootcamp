const inquirer = require('inquirer'); // require inquirer
const mysql = require('mysql2'); // import and require mysql2

// connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'balsillie1',
    database: 'staff_db',
},
    // message once connected to database
    console.log(`Successfully connected to the employee tracker database!`)
);

// connection error
connection.connect((err) => {
    if (err) throw err;
    start();
});

// options to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Add a Manager":
                    addManager();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        });
}

// view all departments
function viewDepartments() {
    const query = 'SELECT * FROM departments';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start(); // restart
    });
}

// view all roles
function viewRoles() {
    const query = 'SELECT * FROM roles';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start(); // restart
    });
}

// view all employees
function viewEmployees() {
    const query = 'SELECT * FROM employees a INNER JOIN employees b ON a.manager_id = b.id INNER JOIN roles c ON b.role_id = c.id INNER JOIN departments d ON c.department_id = d.id';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start(); // restart
    });
}

// add a department PROMPTS to enter the name of the department and that department is added to the database
function addDepartment() {
    inquirer
        .prompt({
            type: "input",
            name: "name",
            message: "Enter the name of the department",
        })
        .then((answer) => {
            const query = `INSERT INTO departments (department_name) VALUES ("${answer.name}")`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                start();
            });
        });
}

// add a role PROMPTS to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the name",
            },
            {
                type: "input",
                name: "salary",
                message: "Enter the salary",
            },
            {
                type: "list",
                name: "department",
                message: "Enter the department",
                choices: res.map(
                    (department) => department.department_name
                ),
            },
        ])
        .then((answers) => {
            const department = res.find(
                (department) => department.name === answers.department
            );
            const query = "INSERT INTO roles SET ?";
            connection.query(
                query,
                {
                    title: answers.title,
                    salary: answers.salary,
                    department_id: department,
                },
                (err, res) => {
                    if (err) throw err;
                    start();
                }
            );
        });
}

// add an employee PROMPTS to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {
    // role information
    connection.query("SELECT id, title FROM roles", (err, results) => {
        if (err) {
            console.error(err);
            return;
        }

        const roles = results.map(({ id, title }) => ({
            name: title,
            value: id,
        }));

        // employee information
        connection.query(
            'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employees',
            (err, results) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const managers = results.map(({ id, name }) => ({
                    name,
                    value: id,
                }));

                // prompts
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "firstName",
                            message: "Enter the employee's first name",
                        },
                        {
                            type: "input",
                            name: "lastName",
                            message: "Enter the employee's last name",
                        },
                        {
                            type: "list",
                            name: "roleId",
                            message: "Enter the employee's role",
                            choices: roles,
                        },
                        {
                            type: "list",
                            name: "managerId",
                            message: "Enter the employee's manager",
                            choices: managers,
                        },
                    ])
                    .then((answers) => {
                        const sql =
                            "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
                        const values = [
                            answers.firstName,
                            answers.lastName,
                            answers.roleId,
                            answers.managerId,
                        ];
                        connection.query(sql, values, (err) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            start();
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        );
    });
}
