import { User } from "../../core/domain/user/User";
import type { UserRequest } from "../../core/domain/user/UserRequest";

export interface IUserRepository {
    create( user: UserRequest ) : Promise<User>;
    findByEmail( email: string ) : Promise<User | null>;
}