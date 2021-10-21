"use strict";
var KeycloakCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakCoreModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const services_1 = require("./services");
const ifaces_1 = require("./ifaces");
const middlewares_1 = require("./middlewares");
let KeycloakCoreModule = KeycloakCoreModule_1 = class KeycloakCoreModule {
    static forRoot(ops) {
        return {
            global: true,
            module: KeycloakCoreModule_1,
            providers: [
                { provide: ifaces_1.KeycloakOptions, useValue: new ifaces_1.KeycloakOptions(ops) }
            ],
        };
    }
    configure(consumer) {
        consumer
            .apply(middlewares_1.KeycloakGrantAttacherMiddleware)
            .forRoutes('*');
    }
};
KeycloakCoreModule = KeycloakCoreModule_1 = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [services_1.KeycloakService],
        exports: [services_1.KeycloakService]
    })
], KeycloakCoreModule);
exports.KeycloakCoreModule = KeycloakCoreModule;
//# sourceMappingURL=keycloak-core.module.js.map