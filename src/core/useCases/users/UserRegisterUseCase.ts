import type { IUserRepository } from '../../../infra/repositories/IUserRepsitory';
import { UserRegisterRequest } from "../../domain/user/UserRegisterRequest";


export class UserRegisterUseCase {

    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(data: UserRegisterRequest) {
        const user = await this.userRepository.create(data);
        return user;
    }


}