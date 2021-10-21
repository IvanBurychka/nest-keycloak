import Keycloak from 'keycloak-connect';
import { KeycloakOptions, KeycloakUser } from '../ifaces';
export declare class KeycloakService {
    private readonly ops;
    keycloak: Keycloak.Keycloak;
    constructor(ops: KeycloakOptions);
    getGrant(request: any, response: any): Promise<Keycloak.Grant>;
    getUserInfo(grant: Keycloak.Grant): KeycloakUser;
    userInRoles(user: KeycloakUser, ...roles: string[]): boolean;
}
