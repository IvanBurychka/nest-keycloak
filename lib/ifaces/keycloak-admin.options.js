"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakAdminOptions = void 0;
class KeycloakAdminOptions {
    constructor(ops) {
        this.realm = 'master';
        this.clientId = 'admin-cli';
        this.bearerOnly = true;
        this.sslRequired = 'external';
        this.adminUser = 'admin';
        this.retryAttempts = 9;
        this.retryDelay = 3000;
        Object.assign(this, ops);
    }
}
exports.KeycloakAdminOptions = KeycloakAdminOptions;
//# sourceMappingURL=keycloak-admin.options.js.map