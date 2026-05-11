import { User } from "../../domain/user/User";
import type { IUserRepository } from '../../../infra/repositories/IUserRepsitory';
import { UserRequest } from "../../domain/user/UserRequest";


export class UserRegisterUseCase {

    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(data: UserRequest): Promise<User> {
        const user: User = await this.userRepository.create(data);
        return user;
    }


}