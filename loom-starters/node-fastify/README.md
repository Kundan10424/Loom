# Node.js + Fastify Starter

A Node.js REST API starter using Fastify.

## Getting Started

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000`

## Project Structure

```
src/
├── index.js           # Entry point
├── app.js             # Fastify instance + plugins
├── routes/
│   └── users.js       # User routes
├── controllers/
│   └── users.controller.js
├── services/
│   └── users.service.js
└── models/
    └── user.model.js
```

## API Endpoints

| Method | Path            | Description    |
|--------|-----------------|----------------|
| GET    | /               | Health check   |
| GET    | /api/users      | Get all users  |
| GET    | /api/users/:id  | Get one user   |
| POST   | /api/users      | Create user    |
| PUT    | /api/users/:id  | Update user    |
| DELETE | /api/users/:id  | Delete user    |
