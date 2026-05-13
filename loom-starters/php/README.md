# PHP Starter

A plain PHP REST API starter — no framework.

## Getting Started

```bash
composer install
composer start
```

Server runs at `http://localhost:8000`

## Project Structure

```
public/
└── index.php                   # Entry point — all requests go here
src/
├── routes/
│   └── routes.php              # Route definitions
├── controllers/
│   └── UsersController.php     # Request handlers
├── models/
│   └── User.php                # Data model
├── middleware/
│   └── ErrorHandler.php        # Error handling
└── utils/
    └── Response.php            # JSON response helpers
```

## API Endpoints

| Method | Path            | Description    |
|--------|-----------------|----------------|
| GET    | /               | Health check   |
| GET    | /api/users      | Get all users  |
| GET    | /api/users/{id} | Get one user   |
| POST   | /api/users      | Create user    |
| PUT    | /api/users/{id} | Update user    |
| DELETE | /api/users/{id} | Delete user    |
