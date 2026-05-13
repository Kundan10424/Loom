# Hono Starter

A Node.js REST API starter using Hono.

## Getting Started

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000`

## Project Structure

```
src/
├── index.js                    # Entry point
├── app.js                      # Hono app + middleware + routes
├── routes/
│   └── users.js                # User routes
├── controllers/
│   └── users.controller.js     # Request handlers
├── services/
│   └── users.service.js        # Business logic
├── models/
│   └── user.model.js           # Data model
└── middleware/
    └── errorHandler.js         # Error middleware
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
