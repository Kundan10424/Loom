<?php

declare(strict_types=1);

namespace App\middleware;

use App\utils\Response;
use Throwable;

class ErrorHandler
{
  public static function handle(Throwable $e): void
  {
    $status  = method_exists($e, 'getStatusCode') ? $e->getStatusCode() : 500;
    $message = $e->getMessage() ?: 'Internal Server Error';

    error_log("[Error] $status - $message");

    $payload = ['success' => false, 'error' => $message];

    if (($_ENV['APP_ENV'] ?? 'production') === 'development') {
      $payload['stack'] = $e->getTraceAsString();
    }

    Response::json($payload, $status);
  }
}
