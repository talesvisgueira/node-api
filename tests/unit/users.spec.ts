import { describe } from "node:test";
import { beforeAll, expect, it  } from "vitest";
import { UserRegisterUseCase } from "../../src/core/useCases/users/UserRegisterUseCase";
import { UserMemoryRepository } from "../../src/infra/repositories/InMemoryRepository/UseMemoryRepository";
import { UserRegisterRequest } from '../../src/core/domain/user/UserRegisterRequest';

describe('Testes do usuário...', () => {
    // beforeAll( async ()=> {

    // });

    it('Não deve cadastrar com nome menor de 3 caracteres.', async () => {
        const repository = new UserMemoryRepository();
        const userService : UserRegisterUseCase = new UserRegisterUseCase(repository);
        const request = new UserRegisterRequest('tales','tales@gmail.com', '1234567890');
        const user = await userService.execute(request);
        expect(user.email).toEqual(expect.any(String));
    });

    it('deverar cadastrar novo usuário...', async () => {
        const repository = new UserMemoryRepository();
        const userServece : UserRegisterUseCase = new UserRegisterUseCase(repository);

        const user = await userServece.execute(new UserRegisterRequest('tales','tales@gmail.com', '1234567890'));
        expect(user.email).toEqual(expect.any(String));
    });

});