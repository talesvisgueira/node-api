import { IUserRepository } from '../../../infra/repositories/IUserRepsitory';
import { UserRegistrerRequest } from "../../domain/user/UserRegistrerRequest";


export class UserRegistrerUseCase {

    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(data: UserRegistrerRequest) {
        const user = await this.userRepository.create(data);
        return user;
    }


}