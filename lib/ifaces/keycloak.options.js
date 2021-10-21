"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakOptions = void 0;
class KeycloakOptions {
    constructor(ops) {
        this.bearerOnly = true;
        this.sslRequired = 'external';
        // an valid express-session
        this.session = {};
        Object.assign(this, ops);
    }
}
exports.KeycloakOptions = KeycloakOptions;
//# sourceMappingURL=keycloak.options.js.map