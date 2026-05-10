import { User } from "../../../core/domain/user/User";
import { IUserRepository } from "../IUserRepsitory";

export class UserMemoryRepository implements IUserRepository {
    users: User[] = [];

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return user || null;
    }

}