import { KeycloakAdminOptions } from '../ifaces';
import KcAdminClient from '@keycloak/keycloak-admin-client';
export declare class KeycloakAdminAdapter {
    private ops;
    private kclient;
    private oclient;
    private tokenSet;
    private refreshExpiration;
    constructor(ops: KeycloakAdminOptions);
    private getOpenIdUrl;
    private refreshOClient;
    private refreshExpired;
    private refreshExpirationRefreshToken;
    private refreshTokenSet;
    /**
     *
     * Get a [Keycloak admin client](https://www.npmjs.com/package/keycloak-admin) ready to work
     *
     * This method update the access token and the refresh token on demand.
     *
     * **WARNING!** Don't use it as a global variable, the access token need to be refreshed every 60 second as default.
     *
     */
    client(): Promise<KcAdminClient>;
}
