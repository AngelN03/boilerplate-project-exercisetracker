# Exercise Tracker

A REST API built with Node.js, Express, and MongoDB that allows users to create accounts, log exercises, and retrieve exercise logs with optional filters.

## Features

- Create new users
- View all registered users
- Add exercises for a user
- Retrieve exercise logs
- Filter logs by date range
- Limit the number of returned exercise records

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## API Endpoints

### POST /api/users

Creates a new user.

Example request:

```json
{
  "username": "John"
}
```

### GET /api/users

Returns a list of all users.

### POST /api/users/:_id/exercises

Adds a new exercise for a user.

Example request:

```json
{
  "description": "Running",
  "duration": 30,
  "date": "2026-07-26"
}
```

### GET /api/users/:_id/logs

Returns a user's exercise log.

Optional query parameters:

- `from` – Filter by start date
- `to` – Filter by end date
- `limit` – Limit the number of returned records

## Project Purpose

This project was completed as part of the **freeCodeCamp Back End Development and APIs** certification. It demonstrates how to build a RESTful API with Express and MongoDB while managing user data and exercise records.

## Author

**Musapu Nyendwa**
