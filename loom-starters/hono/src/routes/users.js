import { Hono } from 'hono';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js';

export const userRoutes = new Hono();

userRoutes.get('/',     getAllUsers);
userRoutes.get('/:id',  getUserById);
userRoutes.post('/',    createUser);
userRoutes.put('/:id',  updateUser);
userRoutes.delete('/:id', deleteUser);
