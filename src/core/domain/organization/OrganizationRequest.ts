export class OrganizationRequest {

    sigla: string;
    name: string;
    descricao?: string;

    constructor( sigla: string, name:string, descricao:string  ) {
        this.sigla = sigla;
        this.name = name;
        this.descricao = descricao;
    }

    validateFields() {

    }

    validateSigla(sigla: string) {
        if (!sigla) throw new Error('Sigla is required');
        if (sigla.length <= 3) throw new Error('Sigla must be at least 3 characters long');
    }

    validateName(name: string) {
        if (!name) throw new Error('Name is required');
        if (name.length <= 3)  throw new Error('Name must be at least 3 characters long');
    }


    validateDescricao(descricao: string) {
        if (descricao!==null && descricao!==undefined) {
            if (descricao.length >= 15) throw new Error('Descricao must be at most 300 characters long');
        }
    }



}