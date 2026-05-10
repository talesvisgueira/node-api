import { User } from "../../core/domain/user/User";

export interface IUserRepository {
    create( user: User ) : Promise<User>;
    findByEmail( email: string ) : Promise<User | null>;
}