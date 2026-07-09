

## Overview

This is a simple full-stack Blog Management application built using **React**, **Node.js**, **Express.js**, and **MongoDB**. The application allows users to view existing blog posts and create new blog posts through a responsive user interface.

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Bootstrap 5
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Features

* View all blog posts
* Add a new blog
* Responsive UI using Bootstrap 5
* REST API integration
* MongoDB data storage

## Project Structure

```text
codeethics/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
```

## Backend Setup

1. Navigate to the backend folder.

```bash
cd backend
```

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the backend server.

```bash
npm run start
```


---

## Frontend Setup

1. Navigate to the frontend folder.

```bash
cd frontend
```

2. Install dependencies.

```bash
npm install
```

3. Start the React application.

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## API Endpoints

### Get Blogs

```
GET /blogs
```

Example:

```
GET /blogs
```

### Add Blog

```
POST /save-blog
```

Request Body:

```json
{
  "title": "Test1",
  "description": "write the somthing"
}
```

---

## Approach

* Built a RESTful backend using Express.js.
* Stored blog data in MongoDB using Mongoose.
* Created reusable React components for maintainability.
* Used Axios to communicate with backend APIs.
* Designed a responsive interface using Bootstrap 5.
* Organized the project using separate frontend and backend folders for better scalability.


## Author

**Vamsee Villuri**
