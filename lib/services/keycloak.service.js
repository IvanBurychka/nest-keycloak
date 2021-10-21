"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const keycloak_connect_1 = (0, tslib_1.__importDefault)(require("keycloak-connect"));
const lodash_1 = require("lodash");
const ifaces_1 = require("../ifaces");
let KeycloakService = class KeycloakService {
    constructor(ops) {
        this.ops = ops;
        const kops = {
            'confidential-port': null,
            'resource': null,
            'auth-server-url': ops.serverUrl,
            'ssl-required': ops.sslRequired,
            'bearer-only': ops.bearerOnly,
            realm: ops.realm
        };
        this.keycloak = new keycloak_connect_1.default({ store: ops.session }, kops);
    }
    getGrant(request, response) {
        return this.keycloak.getGrant(request, response);
    }
    getUserInfo(grant) {
        const udata = {};
        if (!grant) {
            // return an anonymous user
            return new ifaces_1.KeycloakUser();
        }
        const token = (0, lodash_1.get)(grant, 'access_token');
        const content = (0, lodash_1.get)(token, 'content');
        const roles = (0, lodash_1.get)(content, 'realm_access.roles');
        udata.uid = (0, lodash_1.get)(content, 'sub');
        udata.username = (0, lodash_1.get)(content, 'preferred_username');
        udata.roles = roles || [];
        udata.email = (0, lodash_1.get)(content, 'email');
        udata.emailVerified = (0, lodash_1.get)(content, 'email_verified');
        udata.firstName = (0, lodash_1.get)(content, 'given_name');
        udata.lastName = (0, lodash_1.get)(content, 'family_name');
        return new ifaces_1.KeycloakUser(udata);
    }
    userInRoles(user, ...roles) {
        if (!roles || roles.length === 0) {
            return true;
        }
        return roles.some(role => user.roles.indexOf(role) !== -1);
    }
};
KeycloakService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [ifaces_1.KeycloakOptions])
], KeycloakService);
exports.KeycloakService = KeycloakService;
//# sourceMappingURL=keycloak.service.js.map