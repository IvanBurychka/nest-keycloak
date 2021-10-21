"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakGrantAttacherMiddleware = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const keycloak_service_1 = require("../services/keycloak.service");
let KeycloakGrantAttacherMiddleware = class KeycloakGrantAttacherMiddleware {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger('KeycloakGrantAttacherMiddleware');
    }
    use(req, res, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                req.user = null;
                if (req.headers.authorization) {
                    req.userGrant = yield this.service.getGrant(req, res);
                    req.user = this.service.getUserInfo(req.userGrant);
                }
            }
            catch (error) {
                const trace = error ? error.stack : undefined;
                this.logger.error(`Fail trying to get grant`, trace);
            }
            next();
        });
    }
};
KeycloakGrantAttacherMiddleware = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [keycloak_service_1.KeycloakService])
], KeycloakGrantAttacherMiddleware);
exports.KeycloakGrantAttacherMiddleware = KeycloakGrantAttacherMiddleware;
//# sourceMappingURL=grant-attacher.middleware.js.map