import { nanoid } from '../../../../node_modules/zod/src/v4/core/regexes';
export class UserRegistrerRequest {

    name: string;
    email: string;
    password: string;

    constructor(name:string, email:string, password:string) {
        this.name =name;
        this.email = email;
        this.password = password;

        this.validateFields();
    }

    validateFields() {
        this.validateName(this.name);
        this.validateEmail(this.email);
        this.validatePassword(this.password);
    }

    validateName(name: string) {
        if (name.length < 3) {
            throw new Error('Name must be at least 3 characters long');
        }
    }

    validateEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }
    }

    validatePassword(password: string) {
        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }
    }


}