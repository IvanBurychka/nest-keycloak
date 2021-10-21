"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRetry = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
function handleRetry(retryAttempts = 9, retryDelay = 3000) {
    return (source) => source.pipe((0, operators_1.retryWhen)(e => e.pipe((0, operators_1.scan)((errorCount, error) => {
        common_1.Logger.error(`Unable to connect to get the realm data. Retrying (${errorCount +
            1})...`, '', 'KeycloakAdminModule');
        if (errorCount + 1 >= retryAttempts) {
            throw error;
        }
        return errorCount + 1;
    }, 0), (0, operators_1.delay)(retryDelay))));
}
exports.handleRetry = handleRetry;
//# sourceMappingURL=retry.js.map