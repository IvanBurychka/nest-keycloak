export declare class KeycloakAdminOptions {
    serverUrl: string;
    realm?: string;
    clientId?: string;
    publicKey?: string;
    bearerOnly?: boolean;
    sslRequired?: string;
    adminUser?: string;
    adminPwd: string;
    retryAttempts?: number;
    retryDelay?: number;
    constructor(ops: any);
}
