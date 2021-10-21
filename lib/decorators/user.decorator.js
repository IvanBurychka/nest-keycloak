"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
const ifaces_1 = require("../ifaces");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user || new ifaces_1.KeycloakUser();
});
//# sourceMappingURL=user.decorator.js.map