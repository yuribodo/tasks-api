# Task Management API

The **Task Management API** is a simple yet efficient tool designed to help users manage tasks in a database. Built using **JavaScript** and **Node.js**, this API allows users to create, list, update, remove, and mark tasks as complete or incomplete. It provides a lightweight solution for managing tasks without requiring complex infrastructure or external databases. The API leverages a simple **JSON database** for storing task data, making it ideal for small projects or as a learning resource for developers looking to practice building RESTful APIs with Node.js. This project was developed as part of **Challenge 01** from the **Rocketseat Node.js course**, focusing on the core concepts of backend development and task management using basic Node.js features.

# Table of Contents

1. [Introduction](#introduction)
2. [Structure of a Task](#structure-of-a-task)
3. [Routes Overview](#routes-overview)
   - [POST - /tasks](#post---tasks)
   - [GET - /tasks](#get---tasks)
   - [PUT - /tasks/:id](#put---tasksid)
   - [DELETE - /tasks/:id](#delete---tasksid)
   - [PATCH - /tasks/:id/complete](#patch---tasksidcomplete)
4. [Dependencies](#dependencies)
5. [Installation](#installation)
6. [Running the Application](#running-the-application)
7. [Conclusion](#conclusion)

---

## Structure of a Task
Each task has the following properties:

- **id**: Unique task identifier (automatically generated).
- **title**: Task title.
- **description**: Detailed description of the task.
- **completed_at**: Date when the task was completed. Initially, the value is null.
- **created_at**: Task creation date.
- **updated_at**: Date when the task was last updated.

## Routes Overview

- **POST - /tasks**  
  Creates a new task by sending `title` and `description` in the request body. The `id`, `created_at`, `updated_at`, and `completed_at` fields are generated automatically.

- **GET - /tasks**  
  Retrieves all tasks from the database. Optionally, you can search tasks by `title`, `description`, `completed_at`, `created_at`, or `updated_at`.

- **PUT - /tasks/:id**  
  Updates an existing task by its `id`. The `title` and/or `description` can be updated. The task is validated before updating.

- **DELETE - /tasks/:id**  
  Deletes a task by its `id`. The task is validated before deletion.

- **PATCH - /tasks/:id/complete**  
  Marks a task as complete or incomplete. If the task is already completed, it will be set back to its normal state. The task is validated before updating.

## Dependencies

The API uses the following dependencies:

- **csv-parse**: For reading and processing CSV files.
- **node-fetch**: For making HTTP requests.
- **fs** and **path**: For file and path manipulation in the file system.
- **node:crypto**: For generating unique IDs for tasks.

## Installation

Before you start, ensure you have `node` and `npm` installed on your machine. 

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/yuribodo/tasks-api.git
   ```

2. **Navigate to the repository**:

   ```bash
   cd tasks-api
   ```

3. **Install the dependencies**:

   
     ```bash
     cd npm install
     ```


## Running the Application

  ```bash
  npm run dev
  ```

  This starts the server on `http://localhost:3333` (or another available port).

## Conclusion

The Task Management API provides a simple and efficient solution for managing tasks using a JSON database. With features to create, list, update, delete, and mark tasks as complete, the API is easy to use and configure. The data import functionality from a CSV file makes data migration seamless. This API serves as an excellent foundation for those starting with API development and can be easily expanded for larger projects.
---

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/yuribodo/tasks-api/issues).

**Made with ❤️ by [Mario Mota](https://github.com/yuribodo)**.
