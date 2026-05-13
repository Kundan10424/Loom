import { UsersService } from '../services/users.service.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const getAllUsers = (req, res) => {
  const users = UsersService.getAll();
  sendSuccess(res, users);
};

export const getUserById = (req, res) => {
  const user = UsersService.getById(req.params.id);
  if (!user) return sendError(res, 'User not found', 404);
  sendSuccess(res, user);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return sendError(res, 'name and email are required', 400);

  const user = UsersService.create({ name, email });
  sendSuccess(res, user, 201);
};

export const updateUser = (req, res) => {
  const user = UsersService.update(req.params.id, req.body);
  if (!user) return sendError(res, 'User not found', 404);
  sendSuccess(res, user);
};

export const deleteUser = (req, res) => {
  const deleted = UsersService.delete(req.params.id);
  if (!deleted) return sendError(res, 'User not found', 404);
  sendSuccess(res, { message: 'User deleted' });
};
