# Task API App

This is a basic TypeScript app using ExpressJS, Postgres and Knex. App that manages tasks (Create, Update, Delete, Update).

## Features

- Basic Routing for GET and POST routes.
- Endpoints for Creation of Task, Listing of Task, Getting details of Task, Updating Task and Deletion of Task.
- Simple error handling
- Easy to extend and customize for your project needs

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Postgres](https://www.postgresql.org/) (Any version)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/simple-express-app.git.
2. Run `npm install`.
3. Open migrations folder, copy migrations script and run in your local postgreSQL DB viewer.
4. Make a copy of `.sample.env` file
5. Update `.env` file with you local setup
6. Run `npm run start` to start application
