import { UserModel } from '../models/user.model.js';

export const UsersService = {
  getAll: () => UserModel.findAll(),
  getById: (id) => UserModel.findById(id),
  create: (data) => UserModel.create(data),
  update: (id, data) => UserModel.update(id, data),
  delete: (id) => UserModel.delete(id),
};
