# To Do Application Eleven
For their job application procedure I had to build a *To Do web app* with Java as backend language and should be able to:
* display all created tasks
* create a new task
* update existing task, including the status if task is done or not
* deleting a task

For this project I've chosen for Angular as frontend, backed up by MySql server.

## Requirements
To run this app you need:
* Java Development Kit (JDK)
* Node.js
* MySql server

## Database setup
* Create new database with the name "todo" by typing in the MySQL command:
    `create database todo;`
* Open this database with command: `use todo;`
* Create a new table in this database with: `create table tasks;`
* Make sure you have the same "application.properties" (inside *resources* folder of backend folder)
 ```` 
spring.datasource.url=jdbc:mysql://localhost/todo
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect
spring.jpa.hibernate.ddl-auto = update
  ````

## How to run it
### Spring Boot Application (the backend part)
* Start your IDE (like IntelliJ) 
* Open/import the main folder of the app (i.e ToDoApp-Eleven)
* Go to terminal and change current directory to the "backend" folder directory, for example:

`cd C:\Users\cindyK\Documents\Projects\ToDoApp-Eleven\backend`
* Make sure that you have the following dependencies inside your "pom.xml"file: 
1. spring-boot-starter-web
2. mysql-connector-java
3. spring-boot-starter-data-jpa
4. h2

Check [maven respository online](https://mvnrepository.com/) to copy and past the valid depenency code
* To start, type the following command: `mvn spring-boot:run`
It should now run successfully

### Angular application (the frontend part)
* Go to (new) terminal and change to "frontend" folder directory, for example:

`cd C:\Users\cindyK\Documents\Projects\ToDoApp-Eleven\frontend`
* Although you should have the same as mine, check if you have set the proxy config correctly:
1. You should have the "proxy.conf.json" file with "target" set to `http://localhost:8080`
2. Set the "start" command in "package.json" to `ng serve --proxy-config proxy.conf.json`
* Type the following command `npm start`, which will call the "ng serve" command
It should now build successfully.
Go check the outcome at: localhost:4200

# How to use it: User Manual
## See all created task list
The list of all created tasks can be found at the main page: localhost:4200. 
## Create new task
* On the left side of the webpage you see the button "+ New Task", click on it and it will bring you to a online form
* In order to submit successfully, you must fill all the fields in
* On field "priority", fill a number from 1 to 5 with 5 as highest and 1 as lowest
* Click on submit to create a new task
* Go back to the main menu, and you shall see your newly created task
## Edit a existing task
* Go the the task list on the main page, and click on the specific task you want to update
* Click below on the button *Edit*; it redirects you to a update form with all the previous data filled in. 
* Change the necessary fields you want to edit and click on *submit*
## Delete existing task
* Go the the task list on the main page, and click on the specific task you want to update
* Click below on button *Delete*
* And your done! 

