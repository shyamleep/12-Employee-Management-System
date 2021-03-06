DROP DATABASE IF EXISTS audubon_db;
CREATE DATABASE audubon_db;

USE audubon_db;

CREATE TABLE  employees (
    id INT(4) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT(3) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10,2),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE departments (
    id INT(2) NOT NULL AUTO_INCREMENT,
    dept VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)


