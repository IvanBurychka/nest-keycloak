"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakAuthenticatedGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const keycloak_service_1 = require("../services/keycloak.service");
let KeycloakAuthenticatedGuard = class KeycloakAuthenticatedGuard {
    constructor(reflector, service) {
        this.reflector = reflector;
        this.service = service;
        this.logger = new common_1.Logger('KeycloakAuthenticationGuard');
    }
    canActivate(ctx) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const roles = this.reflector.getAllAndOverride('authorized-roles', [
                ctx.getHandler(),
                ctx.getClass(),
            ]);
            const request = ctx.switchToHttp().getRequest();
            const user = request.user;
            if (!user || user.isAnonymous()) {
                throw new common_1.UnauthorizedException();
            }
            const grant = request.userGrant;
            if (grant.isExpired()) {
                throw new common_1.UnauthorizedException();
            }
            if (this.service.userInRoles(user, ...roles)) {
                return true;
            }
            throw new common_1.UnauthorizedException();
        });
    }
};
KeycloakAuthenticatedGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [core_1.Reflector,
        keycloak_service_1.KeycloakService])
], KeycloakAuthenticatedGuard);
exports.KeycloakAuthenticatedGuard = KeycloakAuthenticatedGuard;
//# sourceMappingURL=authentication.guard.js.map