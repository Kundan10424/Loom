<?php

declare(strict_types=1);

require_once __DIR__ . '/../vendor/autoload.php';

use App\middleware\ErrorHandler;
use App\utils\Response;

// Load .env
$envFile = __DIR__ . '/../.env';
if (file_exists($envFile)) {
  foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    if (str_starts_with(trim($line), '#')) continue;
    [$key, $value] = explode('=', $line, 2);
    $_ENV[trim($key)] = trim($value);
  }
}

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Global error handler
set_exception_handler([ErrorHandler::class, 'handle']);

// Boot router
require_once __DIR__ . '/../src/routes/routes.php';
