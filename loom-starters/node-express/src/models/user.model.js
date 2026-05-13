// In-memory store — replace with a real DB (MongoDB, PostgreSQL etc.) later

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

export const UserModel = {
  findAll: () => users,

  findById: (id) => users.find((u) => u.id === Number(id)),

  create: (data) => {
    const user = { id: users.length + 1, ...data };
    users.push(user);
    return user;
  },

  update: (id, data) => {
    const idx = users.findIndex((u) => u.id === Number(id));
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...data };
    return users[idx];
  },

  delete: (id) => {
    const idx = users.findIndex((u) => u.id === Number(id));
    if (idx === -1) return false;
    users.splice(idx, 1);
    return true;
  },
};
