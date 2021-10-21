"use strict";
var KeycloakModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const keycloak_core_module_1 = require("./keycloak-core.module");
let KeycloakModule = KeycloakModule_1 = class KeycloakModule {
    /**
     *
     * Configure the KeycloakModule
     *
     * @param ops Connection and realm setting for keycloak
     */
    static forRoot(ops) {
        return {
            module: KeycloakModule_1,
            imports: [
                keycloak_core_module_1.KeycloakCoreModule.forRoot(ops)
            ]
        };
    }
};
KeycloakModule = KeycloakModule_1 = (0, tslib_1.__decorate)([
    (0, common_1.Module)({})
], KeycloakModule);
exports.KeycloakModule = KeycloakModule;
//# sourceMappingURL=keycloak.module.js.map