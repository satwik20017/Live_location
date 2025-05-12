import { dbconnection } from '../dbconnections/mysql';
import bcrypt from 'bcryptjs';

export const registerUser = async ({ username, password }: any) => {
  // const hashed = await bcrypt.hash(password, 10);
  await dbconnection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
};

export const loginUser = async ({ username, password }: any) => {
  const [rows]: any = await dbconnection.query('SELECT * FROM users WHERE username = ?', [username]);
  const user = rows[0];
  if (!user) throw new Error('User not found');
  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) throw new Error('Invalid credentials');
  return user;
};
