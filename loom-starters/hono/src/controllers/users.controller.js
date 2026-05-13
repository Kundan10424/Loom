import { UsersService } from '../services/users.service.js';

export const getAllUsers = (c) => {
  const users = UsersService.getAll();
  return c.json({ success: true, data: users });
};

export const getUserById = (c) => {
  const user = UsersService.getById(c.req.param('id'));
  if (!user) return c.json({ success: false, error: 'User not found' }, 404);
  return c.json({ success: true, data: user });
};

export const createUser = async (c) => {
  const { name, email } = await c.req.json();
  if (!name || !email)
    return c.json({ success: false, error: 'name and email are required' }, 400);

  const user = UsersService.create({ name, email });
  return c.json({ success: true, data: user }, 201);
};

export const updateUser = async (c) => {
  const body = await c.req.json();
  const user = UsersService.update(c.req.param('id'), body);
  if (!user) return c.json({ success: false, error: 'User not found' }, 404);
  return c.json({ success: true, data: user });
};

export const deleteUser = (c) => {
  const deleted = UsersService.delete(c.req.param('id'));
  if (!deleted) return c.json({ success: false, error: 'User not found' }, 404);
  return c.json({ success: true, data: { message: 'User deleted' } });
};
