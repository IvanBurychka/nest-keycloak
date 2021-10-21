"use strict";
var KeycloakAdminModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakAdminModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const admin_core_module_1 = require("./admin-core.module");
let KeycloakAdminModule = KeycloakAdminModule_1 = class KeycloakAdminModule {
    /**
     *
     * Configure the KeycloakModule
     *
     * @param ops Connection and realm setting for keycloak
     */
    static forRoot(ops) {
        return {
            module: KeycloakAdminModule_1,
            imports: [
                admin_core_module_1.KeycloakAdminCoreModule.forRoot(ops)
            ]
        };
    }
};
KeycloakAdminModule = KeycloakAdminModule_1 = (0, tslib_1.__decorate)([
    (0, common_1.Module)({})
], KeycloakAdminModule);
exports.KeycloakAdminModule = KeycloakAdminModule;
//# sourceMappingURL=keycloak-admin.module.js.map