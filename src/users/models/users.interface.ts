import { UserRole } from './users.entity';

export interface IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}
