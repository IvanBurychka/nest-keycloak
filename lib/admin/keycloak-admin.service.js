"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakAdminService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const ifaces_1 = require("../ifaces");
const admin_adapter_1 = require("./admin.adapter");
let KeycloakAdminService = class KeycloakAdminService extends admin_adapter_1.KeycloakAdminAdapter {
    constructor(ops) {
        super(ops);
    }
};
KeycloakAdminService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [ifaces_1.KeycloakAdminOptions])
], KeycloakAdminService);
exports.KeycloakAdminService = KeycloakAdminService;
//# sourceMappingURL=keycloak-admin.service.js.map