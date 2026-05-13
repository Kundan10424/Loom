<?php

declare(strict_types=1);

namespace App\models;

// In-memory store — replace with a real DB later
class User
{
  private static array $users = [
    ['id' => 1, 'name' => 'Alice', 'email' => 'alice@example.com'],
    ['id' => 2, 'name' => 'Bob',   'email' => 'bob@example.com'],
  ];

  public static function all(): array
  {
    return self::$users;
  }

  public static function find(int $id): ?array
  {
    foreach (self::$users as $user) {
      if ($user['id'] === $id) return $user;
    }
    return null;
  }

  public static function create(string $name, string $email): array
  {
    $user = [
      'id'    => count(self::$users) + 1,
      'name'  => $name,
      'email' => $email,
    ];
    self::$users[] = $user;
    return $user;
  }

  public static function update(int $id, array $data): ?array
  {
    foreach (self::$users as &$user) {
      if ($user['id'] === $id) {
        $user = array_merge($user, $data);
        return $user;
      }
    }
    return null;
  }

  public static function delete(int $id): bool
  {
    foreach (self::$users as $idx => $user) {
      if ($user['id'] === $id) {
        array_splice(self::$users, $idx, 1);
        return true;
      }
    }
    return false;
  }
}
