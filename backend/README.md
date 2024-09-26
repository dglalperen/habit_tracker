# Habit Tracker API

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Database Setup](#database-setup)
-   [Running the Application](#running-the-application)
-   [API Documentation](#api-documentation)
-   [Project Structure](#project-structure)
-   [Scripts](#scripts)
-   [Contributing](#contributing)
-   [License](#license)

---

## Introduction

The **Habit Tracker API** is a backend application that allows users to manage their habits effectively. Users can register, log in, and perform CRUD (Create, Read, Update, Delete) operations on their habits. The API is built using Node.js, Express, TypeScript, and Prisma ORM for database interactions.

---

## Features

-   **User Authentication**: Register and log in with secure password hashing and JWT authentication.
-   **Habit Management**: Create, retrieve, update, and delete habits.
-   **Health Check Endpoint**: Quick API status check.
-   **API Documentation**: Interactive API docs using Swagger UI.
-   **Structured Project Architecture**: Organized into controllers, services, repositories, and middlewares.

---

## Technologies Used

-   **Node.js**: JavaScript runtime environment.
-   **Express**: Web framework for Node.js.
-   **TypeScript**: Typed superset of JavaScript.
-   **Prisma**: Next-generation ORM for database interactions.
-   **PostgreSQL**: Relational database system.
-   **JWT**: JSON Web Tokens for authentication.
-   **Swagger UI**: Interactive API documentation.
-   **bcrypt**: Library for hashing passwords.

---

## Prerequisites

-   **Node.js**: Version 14 or higher.
-   **npm**: Node package manager.
-   **PostgreSQL**: Database system.
-   **Git**: Version control system (optional).

---

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/habit-tracker-backend.git
    cd habit-tracker-backend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

---

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database_name"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

-   **DATABASE_URL**: Connection string for your PostgreSQL database.
-   **JWT_SECRET**: Secret key for signing JWT tokens.
-   **PORT**: Port number on which the server will run (optional, defaults to 5000).

---

## Database Setup

1. **Create the Database**

    Ensure that PostgreSQL is running and create a new database:

    ```bash
    createdb your_database_name
    ```

2. **Run Prisma Migrations**

    Apply the database schema using Prisma migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

    This command will create the necessary tables in your database.

---

## Running the Application

### Development Mode

Start the application in development mode with hot-reloading:

```bash
npm run dev
```

### Production Mode

Build the application and start the server:

```bash
npm run build
npm start
```

---

## API Documentation

Access the interactive API documentation at:

```
http://localhost:5000/api-docs
```

Here, you can explore the API endpoints, view request and response schemas, and test the API directly from the browser.

---

## Project Structure

```
habit-tracker-backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── habitController.ts
│   │   └── healthController.ts
│   ├── middlewares/
│   │   ├── authenticate.ts
│   │   └── errorHandler.ts
│   ├── repositories/
│   │   ├── userRepository.ts
│   │   └── habitRepository.ts
│   ├── services/
│   │   ├── authService.ts
│   │   └── habitService.ts
│   ├── utils/
│   │   └── authUtils.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── habitRoutes.ts
│   │   ├── healthRoutes.ts
│   │   └── index.ts
│   ├── config/
│   │   └── swagger.ts
│   ├── types/
│   │   └── global.d.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── prismaClient.ts
│   ├── app.ts
│   └── server.ts
├── prisma/
│   └── migrations/
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## Scripts

-   **`npm run dev`**: Starts the application in development mode using `ts-node` with hot-reloading.
-   **`npm run build`**: Compiles TypeScript files into JavaScript in the `dist` directory.
-   **`npm start`**: Runs the compiled JavaScript files from the `dist` directory.
-   **`npm run migrate`**: Runs Prisma migrations.
-   **`npm run prisma:studio`**: Opens Prisma Studio for database management.

---

## API Endpoints

### **Authentication**

-   **POST `/api/auth/register`**: Register a new user.
-   **POST `/api/auth/login`**: Log in and receive a JWT token.

### **Habits**

-   **GET `/api/habits`**: Get all habits for the authenticated user.
-   **POST `/api/habits`**: Create a new habit.
-   **PUT `/api/habits/{id}`**: Update an existing habit.
-   **DELETE `/api/habits/{id}`**: Delete a habit.

### **Health**

-   **GET `/api/health`**: Health check endpoint to verify API status.

---

## Usage

### **Register a User**

```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
```

### **Log In**

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
```

-   **Response**:

    ```json
    {
        "token": "your_jwt_token"
    }
    ```

### **Authenticated Requests**

Include the JWT token in the `Authorization` header for all authenticated endpoints:

```
Authorization: Bearer your_jwt_token
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes**.
4. **Commit your changes**:

    ```bash
    git commit -m "Add your message"
    ```

5. **Push to the branch**:

    ```bash
    git push origin feature/your-feature-name
    ```

6. **Create a Pull Request**.

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For any questions or suggestions, feel free to open an issue or contact the project maintainer.

---

## Acknowledgments

-   **Express** community for the robust web framework.
-   **TypeScript** for bringing static typing to JavaScript.
-   **Prisma** for simplifying database interactions.
-   **Swagger** for providing a platform to document and test APIs.

---

**Note**: Replace placeholders like `your_username`, `your_password`, `your_database_name`, and `your_jwt_secret` with your actual credentials and secrets. Ensure that sensitive information is not committed to version control systems.
