export class Organization {
    id: number;
    sigla: string;
    name: string;
    descricao: string;

    constructor(id: number, sigla: string, name:string, descricao:string  ) {
        this.id = id;
        this.sigla = sigla;
        this.name = name;
        this.descricao = descricao;
    }

    validateFields() {

    }

}