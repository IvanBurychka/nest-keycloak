"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakUser = void 0;
class KeycloakUser {
    constructor(props) {
        this.uid = 'anonymous';
        this.username = 'anonymous';
        this.roles = [];
        this.attributes = [];
        if (props) {
            Object.assign(this, props);
        }
    }
    isAnonymous() {
        return this.uid === 'anonymous';
    }
}
exports.KeycloakUser = KeycloakUser;
//# sourceMappingURL=keycloak-user.js.map