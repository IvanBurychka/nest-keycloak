"use strict";
var KeycloakAdminCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakAdminCoreModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const ifaces_1 = require("../ifaces");
const adapters_1 = require("../adapters");
const keycloak_admin_service_1 = require("./keycloak-admin.service");
let KeycloakAdminCoreModule = KeycloakAdminCoreModule_1 = class KeycloakAdminCoreModule {
    static forRoot(ops) {
        const providers = [{
                provide: ifaces_1.KeycloakAdminOptions,
                useFactory: () => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                    const cadapter = new adapters_1.KeycloakConfigAdapter(ops);
                    return cadapter.resolve();
                })
            }];
        return {
            global: true,
            module: KeycloakAdminCoreModule_1,
            providers: providers,
            exports: providers,
        };
    }
};
KeycloakAdminCoreModule = KeycloakAdminCoreModule_1 = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [keycloak_admin_service_1.KeycloakAdminService],
        exports: [keycloak_admin_service_1.KeycloakAdminService],
    })
], KeycloakAdminCoreModule);
exports.KeycloakAdminCoreModule = KeycloakAdminCoreModule;
//# sourceMappingURL=admin-core.module.js.map