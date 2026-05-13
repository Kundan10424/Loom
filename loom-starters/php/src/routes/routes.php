<?php

declare(strict_types=1);

use App\controllers\UsersController;
use App\utils\Response;

$method = $_SERVER['REQUEST_METHOD'];
$uri    = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri    = rtrim($uri, '/') ?: '/';

// Match /api/users/{id}
$userWithId = preg_match('#^/api/users/(\d+)$#', $uri, $matches);
$userId     = $userWithId ? (int) $matches[1] : null;

$controller = new UsersController();

match (true) {
  // Health check
  $method === 'GET'    && $uri === '/'
    => Response::json(['status' => 'ok', 'message' => 'PHP API is running 🚀']),

  // GET /api/users
  $method === 'GET'    && $uri === '/api/users'
    => $controller->index(),

  // GET /api/users/{id}
  $method === 'GET'    && $userWithId
    => $controller->show($userId),

  // POST /api/users
  $method === 'POST'   && $uri === '/api/users'
    => $controller->store(),

  // PUT /api/users/{id}
  $method === 'PUT'    && $userWithId
    => $controller->update($userId),

  // DELETE /api/users/{id}
  $method === 'DELETE' && $userWithId
    => $controller->destroy($userId),

  // 404
  default
    => Response::json(['success' => false, 'error' => "Route $uri not found"], 404),
};
