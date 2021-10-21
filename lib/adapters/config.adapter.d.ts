import { KeycloakAdminOptions } from '../ifaces';
export declare class KeycloakConfigAdapter {
    private ops;
    constructor(options: KeycloakAdminOptions);
    private request;
    resolve(): Promise<KeycloakAdminOptions>;
}
