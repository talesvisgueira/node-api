import { Organization } from "../../../core/domain/organization/Organization";
import { OrganizationRequest } from "../../../core/domain/organization/OrganizationRequest";
import type { IOrganizationRepository } from "../IOrganizationRepsitory";

export class OrganizationMemoryRepository implements IOrganizationRepository {
    organizations: Organization[] = [];

    async create(request: OrganizationRequest): Promise<Organization> {
        const newOrganization: Organization = new Organization(this.organizations.length + 1,
                                                                request.sigla,
                                                                request.name,
                                                                request.descricao || '');
        this.organizations.push(newOrganization);
        return newOrganization;
    }

    async findBySigla(sigla: string): Promise<Organization | null> {
        const organization = this.organizations.find(org => org.sigla === sigla);
        return organization || null;
    }

    async findByNome(nome: string): Promise<Organization | null> {
        const organization = this.organizations.find(org => org.name === nome);
        return organization || null;
    }

}