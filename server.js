const mysql = require ("mysql");
const util = require ("util");
const connection = require ("./connection");
const inquirer = require ("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

const guide = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View company info", "Update company info"],

        type: "list",
        name: "view",
        message: "What info would you like to see?",
        choices: ["View departments", "View roles", "View employees"],
        when: function(answers) {
            return answers.action === "View company info" 
        },

        type: "list",
        name: "update",
        message: "What info would you like to update?",
        choices: ["Add a department", "Add a role", "Add an employee", "Update an employee's role"],
        when: function(answers) {
            return answers.action === "Update company info"
        },
    }
]

run();

async function run () {
    await inquirer.prompt(guide)
    .then(function (answers) {
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
    })
}

function viewDepartments () {
    console.log ("showing departments here")
};

function viewRoles () {
    console.log ("showing roles here")
};

function viewEmployees () {
    console.log ("showing employees here with their department, roles, salary, and managers")
};

function addDepartment () {
    console.log ("add a department")
};

function addRole () {
    console.log ("add a role")
};

function addEmployee () {
    console.log ("add an employee")
};

function updateEmployeeRole () {
    console.log ("update employee's role")
}