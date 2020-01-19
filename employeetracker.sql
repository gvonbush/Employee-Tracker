
DROP DATABASE IF EXISTS employee_tracker_db;



CREATE DATABASE employee_tracker_db;


USE employee_tracker_db;


CREATE TABLE department (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id int AUTO_INCREMENT NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal (10,2),
  department_id INT NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE employee (
  id int AUTO_INCREMENT NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int,
  PRIMARY KEY(id)
);
