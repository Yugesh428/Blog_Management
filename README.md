# Blog API

A RESTful API for managing blogs and categories, built using Node.js, Express, and Sequelize. Each blog belongs to one category. Fully tested using Postman.

## Features

- Create, Read, Update blogs
- Create and manage categories
- Fetch blogs along with their category details
- Sequelize ORM for database management
- Tested with Postman (collection included)

## Tech Stack

- Node.js
- Express.js
- Sequelize
- MySQL / SQLite
- Postman (for API testing)

## 📂 Project Structure

BLOG/
│
├── src/
│ ├── controller/
│ │ ├── blog/ # Blog controllers
│ │ └── category/ # Category controllers
│ │
│ ├── model/
│ │ ├── blog/ # Blog model
│ │ ├── category/ # Category model
│ │ └── connection.ts # DB connection
│ │
│ ├── routes/
│ │ ├── blog/ # Blog routes
│ │ └── category/ # Category routes
│ │
│ └── app.ts # Express app setup
│
├── .env # Environment variables (not pushed)
├── .gitignore # Git ignore file
├── Blog APIs.postman_collection.json # Postman collection
├── package.json
├── server.ts # App entry point
├── tsconfig.json # TypeScript config
└── README.md

# Server configuration

PORT=Your desired Port number

# Database configuration

DB_NAME=YourDatabaseName
DB_USERNAME=root
DB_PASSWORD=
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=Your database port

## Testing with Postman

1. Download `BlogAPIs.postman_collection.json` from the [`postman`](./postman/) folder.
2. Open Postman and click **Import**.
3. Select the JSON file and you'll see the "Blog APIs" collection.
4. Start the backend with:
   ```bash
   npm start
   ```

## Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-link>
   ```
