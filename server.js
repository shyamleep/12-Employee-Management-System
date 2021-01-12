const mysql = require("mysql");
const util = require("util");
const connection = require("./connection");
const inquirer = require("inquirer");
// const { allowedNodeEnvironmentFlags } = require("process");

const guide = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View company info", "Update company info", "Exit"],
    },

    {
        type: "list",
        name: "view",
        message: "What info would you like to see?",
        choices: ["View departments", "View roles", "View employees"],
        when: function(answers) {
            return answers.action === "View company info"
        },
    },

    {
        type: "list",
        name: "update",
        message: "What info would you like to update?",
        choices: ["Add a department", "Add a role", "Add an employee", "Update an employee's role"],
        when: function(answers) {
            return answers.action === "Update company info"
        },
    },

    {
        type: "input",
        name: "department",
        message: "Please type the name of the department you'd like to add.",
        when: function(answers) {
            return answers.update === "Add a department"
        },
    },

    {
        type: "input",
        name: "role",
        message: "Please type the name of the role you'd like to add.",
        when: function(answers) {
            return answers.update === "Add a role"
        },
    },

    {
        type: "input",
        name: "employee",
        message: "Please type the name of the employee you'd like to add.",
        when: function(answers) {
            return answers.update === "Add an employee"
        },
    },

    // {
    //     type: "input",
    //     name: "employee-role",
    //     message: "Please type the name of the department you'd like to add.",
    //     when: function(answers) {
    //         return answers.update === "Add a department"
    //     },
    // },
]

run();

async function run() {
    inquirer.prompt(guide)
        .then(function(answers) {
            // console.log("hi!")
            if (answers.view === "View departments") {
                viewDepartments();
            }
            else if (answers.view === "View roles") {
                viewRoles();
            }
            else if (answers.view === "View employees") {
                viewEmployees();
            }
            else if (answers.update === "Add a department") {
                addDepartment();
            }
            else if (answers.update === "Add a role") {
                addRole();
            }
            else if (answers.update === "Add an employee") {
                addEmployee();
            }
            else if (answers.update === "Update an employee's role") {
                updateEmployeeRole();
            }
            else if (answers.action === "Exit") {
                connection.end();
                console.log("See you again soon!")
            }
        run();
        })
        // .then(await inquirer.prompt(guide))
}

function viewDepartments() {
    // console.log("showing departments here")
    connection.query("SELECT * FROM departments", function(error, results) {
        if (error) throw error;
        console.table(results)
    })
};

function viewRoles() {
    // console.log("showing roles here")
    connection.query("SELECT roles.id, roles.title, roles.salary, departments.dept AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id", function(error, results) {
        if (error) throw error;
        console.table(results)
    })
};

function viewEmployees() {
    connection.query("SELECT employees.first_name, employees.last_name, departments.dept AS department, roles.title, roles.salary, FROM employees", function(error, results) {
        if (error) throw error;
        console.table(results)
    })
};

function addDepartment(answers) {
    console.log("add a department")
    connection.query("INSERT into departments (id, dept) VALUES")
};

function addRole() {
    console.log("add a role")
};

function addEmployee() {
    console.log("add an employee")
};

function updateEmployeeRole() {
    console.log("update employee's role")
}