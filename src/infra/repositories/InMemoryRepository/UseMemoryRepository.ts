import { User } from "../../../core/domain/user/User";
import type { UserRequest } from "../../../core/domain/user/UserRequest";
import type { IUserRepository } from "../IUserRepsitory";

export class UserMemoryRepository implements IUserRepository {
    users: User[] = [];

    async create(user: UserRequest): Promise<User> {
        const newUser = new User(this.users.length + 1, user.name, user.email, user.password);
        this.users.push(newUser);
        return newUser;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);
        if (!user)  throw new Error('User not found');
        return user;
    }

}