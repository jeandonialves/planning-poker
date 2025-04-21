import { iUser } from '@domain/auth/interfaces/user.interface';

export interface iRoom {
  id: string;
  owner: iUser;
}
