"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticated = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
/**
 *
 * Usesr autheticated
 *
 * @param roles user in role
 */
const Authenticated = (...roles) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('authorized-roles', roles), (0, common_1.UseGuards)(guards_1.KeycloakAuthenticatedGuard)
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized"' }),
    );
};
exports.Authenticated = Authenticated;
//# sourceMappingURL=authenticated.decorator.js.map