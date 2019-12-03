# To Do Application Eleven
For their job application procedure I had to build a "to do app" with Java as backend language.

## Requirements
To run this app you need:
* Java Development Kit (JDK)
* Node.js
* MySql server

## Database setup
* Create new database with the name "todo" by typing in the MySQL command:
    `create database todo`
* Open this database with command: `use todo;`
* Create a new table in this database with: `create table tasks`
* Make sure you have the same "application.properties" (inside resources folder)
 ```` 
spring.datasource.url=jdbc:mysql://localhost/todo
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect
spring.jpa.hibernate.ddl-auto = update
  ````

## How to run it
### Spring Boot Application
* Open/import the main folder of the app (i.e ToDoApp-Eleven)
* Go to terminal and change current directory to the "backend" folder (i.e. C:\Users\cindy\Documents\Projects\ToDoApp-Eleven>cd C:\Users\cindy\Documents\Projects\ToDoApp-Eleven\backend)
* This is a maven project, so type the following command: `mvn spring-boot:run`
