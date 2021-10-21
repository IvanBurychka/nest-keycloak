export declare class KeycloakUser {
    uid: string;
    email: string;
    emailVerified: boolean;
    firstName: string;
    lastName: string;
    username: string;
    roles: string[];
    attributes: any[];
    constructor(props?: any);
    isAnonymous(): boolean;
}
