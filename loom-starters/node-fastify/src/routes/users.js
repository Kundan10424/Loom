import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js';

export async function userRoutes(app) {
  app.get('/',     getAllUsers);
  app.get('/:id',  getUserById);
  app.post('/',    createUser);
  app.put('/:id',  updateUser);
  app.delete('/:id', deleteUser);
}
