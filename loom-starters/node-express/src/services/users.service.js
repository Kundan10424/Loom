import { UserModel } from '../models/user.model.js';

export const UsersService = {
  getAll: () => {
    return UserModel.findAll();
  },

  getById: (id) => {
    return UserModel.findById(id);
  },

  create: ({ name, email }) => {
    return UserModel.create({ name, email });
  },

  update: (id, data) => {
    return UserModel.update(id, data);
  },

  delete: (id) => {
    return UserModel.delete(id);
  },
};
