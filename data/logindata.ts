export const validCredentials = { username: 'admin', password: 'password' };

export const invalidCredentials = [
  { username: 'wronguser', password: 'wrongpass', desc: 'invalid username and password' },
  { username: '', password: 'password', desc: 'empty username' },
  { username: 'admin', password: '', desc: 'empty password' },
  { username: '', password: '', desc: 'both fields empty' },
];
