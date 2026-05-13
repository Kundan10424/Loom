<?php

declare(strict_types=1);

namespace App\controllers;

use App\models\User;
use App\utils\Response;

class UsersController
{
  public function index(): void
  {
    Response::json(['success' => true, 'data' => User::all()]);
  }

  public function show(int $id): void
  {
    $user = User::find($id);
    if (!$user) {
      Response::json(['success' => false, 'error' => 'User not found'], 404);
      return;
    }
    Response::json(['success' => true, 'data' => $user]);
  }

  public function store(): void
  {
    $body = json_decode(file_get_contents('php://input'), true);
    $name  = $body['name']  ?? null;
    $email = $body['email'] ?? null;

    if (!$name || !$email) {
      Response::json(['success' => false, 'error' => 'name and email are required'], 400);
      return;
    }

    $user = User::create($name, $email);
    Response::json(['success' => true, 'data' => $user], 201);
  }

  public function update(int $id): void
  {
    $body = json_decode(file_get_contents('php://input'), true);
    $user = User::update($id, $body);

    if (!$user) {
      Response::json(['success' => false, 'error' => 'User not found'], 404);
      return;
    }

    Response::json(['success' => true, 'data' => $user]);
  }

  public function destroy(int $id): void
  {
    $deleted = User::delete($id);
    if (!$deleted) {
      Response::json(['success' => false, 'error' => 'User not found'], 404);
      return;
    }
    Response::json(['success' => true, 'data' => ['message' => 'User deleted']]);
  }
}
