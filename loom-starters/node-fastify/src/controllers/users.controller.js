import { UsersService } from '../services/users.service.js';

export const getAllUsers = async (req, reply) => {
  const users = UsersService.getAll();
  reply.send({ success: true, data: users });
};

export const getUserById = async (req, reply) => {
  const user = UsersService.getById(req.params.id);
  if (!user) return reply.status(404).send({ success: false, error: 'User not found' });
  reply.send({ success: true, data: user });
};

export const createUser = async (req, reply) => {
  const { name, email } = req.body;
  if (!name || !email)
    return reply.status(400).send({ success: false, error: 'name and email are required' });

  const user = UsersService.create({ name, email });
  reply.status(201).send({ success: true, data: user });
};

export const updateUser = async (req, reply) => {
  const user = UsersService.update(req.params.id, req.body);
  if (!user) return reply.status(404).send({ success: false, error: 'User not found' });
  reply.send({ success: true, data: user });
};

export const deleteUser = async (req, reply) => {
  const deleted = UsersService.delete(req.params.id);
  if (!deleted) return reply.status(404).send({ success: false, error: 'User not found' });
  reply.send({ success: true, data: { message: 'User deleted' } });
};
