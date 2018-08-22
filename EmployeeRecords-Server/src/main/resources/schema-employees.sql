DROP DATABASE IF EXISTS employeedb;
CREATE DATABASE employeedb;
USE employeedb;

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
	 username VARCHAR(45) NOT NULL,
	 password VARCHAR(45) NOT NULL,
	 PRIMARY KEY(id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    phone_number VARCHAR(45) NOT NULL,
    supervisor VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);
    
