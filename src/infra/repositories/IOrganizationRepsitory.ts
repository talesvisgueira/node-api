import type { Organization } from "../../core/domain/organization/Organization";
import type { OrganizationRequest } from "../../core/domain/organization/OrganizationRequest";
import { User } from "../../core/domain/user/User";
import type { UserInicial } from "../../core/domain/user/UserRequest";

export interface IOrganizationRepository {
    create( organization: OrganizationRequest ) : Promise<Organization>;
    findBySigla( sigla: string ) : Promise<Organization | null>;
    findByNome( nome: string ) : Promise<Organization | null>;
}