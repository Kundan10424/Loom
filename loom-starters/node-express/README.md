# Node.js + Express Starter

A complete Node.js REST API starter using Express.

## Getting Started

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000`

## Project Structure

```
src/
├── index.js                       # Entry point — starts the server
├── app.js                         # Express app — middleware & routes
├── config/
│   └── config.js                  # Central config (env vars)
├── routes/
│   └── users.js                   # Route definitions
├── controllers/
│   └── users.controller.js        # Request / response handlers
├── services/
│   └── users.service.js           # Business logic
├── models/
│   └── user.model.js              # Data model / schema
├── middleware/
│   ├── errorHandler.js            # Global error handler
│   └── notFound.js                # 404 handler
└── utils/
    └── response.js                # sendSuccess / sendError helpers
```

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start with hot reload    |
| `npm start`   | Start in production mode |

## API Endpoints

| Method | Path            | Description    |
|--------|-----------------|----------------|
| GET    | /               | Health check   |
| GET    | /api/users      | Get all users  |
| GET    | /api/users/:id  | Get one user   |
| POST   | /api/users      | Create user    |
| PUT    | /api/users/:id  | Update user    |
| DELETE | /api/users/:id  | Delete user    |
