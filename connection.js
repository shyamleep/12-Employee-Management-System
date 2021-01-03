// enter schema and seed in MySQL workbench before initializating the connection!

const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({

    host: "localhost",

    // edit port if sql connection is on a different port
    port: 3306,

    // edit username to your username
    user: "root",

    // enter your MySQL workbench password
    password: "password",

    database: "audubon_db"
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("Now connected")
});

module.exports = connection; 