import { User } from "../entities/User";

export interface IUsersRepository {
  findUserByEmail(email: string): Promise<User>,
  save(user: User): Promise<void>
}
