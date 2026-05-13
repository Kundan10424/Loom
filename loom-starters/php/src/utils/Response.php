<?php

declare(strict_types=1);

namespace App\utils;

class Response
{
  public static function json(array $data, int $status = 200): void
  {
    http_response_code($status);
    echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
  }
}
