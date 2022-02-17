# Task Manager - task management system

This repository is the frontend representation of the application.

## Technologies

* Angular
* Angular Material library
* HTML/CSS
* TypeScript


## Table of contents

1. [Django administration](#django-administration)
2. [Login page](#login-page)
3. [Account page](#account-page)
4. [Task page](#task-page)
5. [Add task](#add-task)
6. [Delete task](#delete-task)
7. [Update task status](#update-task-status)

<a  name="django-administration"></a> 
## 1. Django administration
Django offers a built-in admin panel that can be freely expanded - depending on the needs of the application.
In this application, the administrator is primarily responsible for: registering new users, assigning them a role and assigning them to teams.

![django_admin](https://user-images.githubusercontent.com/74413186/154537316-c7ddd22f-a555-4748-b137-01e3d1122007.PNG)

<a  name="login-page"></a> 
## 2. Login page
Logging in to the application is possible thanks to the use of token authentication.

![login_django](https://user-images.githubusercontent.com/74413186/154537787-058caf26-b814-463f-a6e2-3de4167a0b18.PNG)

<a  name="account-page"></a> 
## 3. Account page
The user, after logging in correctly, is automatically transferred to the Account section, which contains basic information about him, i.e. user name, team to which he belongs, and the role he has in the application

![account_django](https://user-images.githubusercontent.com/74413186/154538348-56b80fcc-c598-4b34-8895-aa879d2b4209.PNG)

<a  name="task-page"></a> 
## 4. Task page
The table shows the tasks and basic information about the tasks.

![tasks_django](https://user-images.githubusercontent.com/74413186/154540478-ee5a915e-d319-47aa-b568-d8028188ff47.PNG)

<a  name="add-task"></a> 
## 5. Add task
Adding tasks is only possible for Team Leader. In the form, the title, task author, task worker, and task status are mandatory, while the other fields are optional.

![add_task_django](https://user-images.githubusercontent.com/74413186/154540816-2a25df71-62eb-48e0-bc1e-8fb7d0182c25.PNG)

<a  name="delete-task"></a> 
## 6. Delete task
Deleting a task is available only to Team Leader.

![delete_django](https://user-images.githubusercontent.com/74413186/154542264-fd25d0c7-6567-4f8e-ba73-bcf62a41e685.PNG)

<a  name="django-administration"></a> 
## 7. Update task status

Changing the status of tasks is available for both Team Leader and Programmer roles.
Team Leader has 4 statuses available, and the Developer only 2. If Team Leader changes the status of a task to closed, the developer can no longer edit that task.

![update_status_django](https://user-images.githubusercontent.com/74413186/154542648-bd449c3f-5a82-473e-b8c8-485af40288f4.PNG)





