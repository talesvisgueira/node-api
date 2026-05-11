import { describe } from "node:test";
import { beforeAll, expect, it  } from "vitest";
import { UserRegisterUseCase } from "../../src/core/useCases/users/UserRegisterUseCase";
import { UserMemoryRepository } from "../../src/infra/repositories/InMemoryRepository/UseMemoryRepository";
import { UserRequest } from '../../src/core/domain/user/UserRequest';

describe('Testes do usuário...', () => {
    // beforeAll( async ()=> {

    // });

    
    it('Não deve cadastrar com nome menor de 3 caracteres.',  () => {
        expect( () => {
            const request = new UserRequest('ta','tales@gmail.com', '1234567890');
        }).toThrow('Name must be at least 3 characters long');
    });

    it('Não deve cadastrar novo email faltando domínio.', async () => {
        expect( () => {
            const request = new UserRequest('tales','tales@gmail', '1234567890');
        }).toThrow('Invalid email format');
    });

    it('Não deve cadastrar novo email inválido.', async () => {
        expect( () => {
            const request = new UserRequest('tales','talesgmail', '1234567890');
        }).toThrow('Invalid email format');
    });

    it('Não deve cadastrar novo tamanho da senha pequena.', async () => {
        expect( () => {
            const request = new UserRequest('tales','tales@gmail.com', '123456');
        }).toThrow('Password must be at least 8 characters long');
    });

    it('deve cadastrar novo usuário...', async () => {
        const repository = new UserMemoryRepository();
        const userServece : UserRegisterUseCase = new UserRegisterUseCase(repository);

        const user = await userServece.execute(new UserRequest('tales','tales@gmail.com', '1234567890'));
        expect(repository.findByEmail('tales@gmail.com')).resolves.toEqual(user);
        expect(user.email).toEqual(expect.any(String));
        expect
    });

});