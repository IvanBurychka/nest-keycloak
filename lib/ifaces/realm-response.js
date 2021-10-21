"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealmResponse = void 0;
class RealmResponse {
    constructor(response = {}) {
        this.realm = response['realm'];
        this.publicKey = response['public_key'];
        this.tokenService = response['token-service'];
        this.accountService = response['account-service'];
        this.tokensNotBefore = response['tokens-not-before'];
    }
}
exports.RealmResponse = RealmResponse;
//# sourceMappingURL=realm-response.js.map