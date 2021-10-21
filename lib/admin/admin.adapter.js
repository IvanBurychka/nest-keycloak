"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakAdminAdapter = void 0;
const tslib_1 = require("tslib");
const keycloak_admin_client_1 = (0, tslib_1.__importDefault)(require("@keycloak/keycloak-admin-client"));
const openid_client_1 = require("openid-client");
class KeycloakAdminAdapter {
    constructor(ops) {
        this.ops = ops;
        this.refreshExpiration = 0;
        this.kclient = new keycloak_admin_client_1.default({
            baseUrl: ops.serverUrl,
            realmName: ops.realm,
        });
    }
    getOpenIdUrl() {
        return `${this.ops.serverUrl}/realms/${this.ops.realm}`;
    }
    refreshOClient() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.oclient) {
                return;
            }
            const kurl = this.getOpenIdUrl();
            const keycloakIssuer = yield openid_client_1.Issuer.discover(kurl);
            this.oclient = new keycloakIssuer.Client({
                client_id: this.ops.clientId,
                client_secret: this.ops.publicKey,
            });
        });
    }
    refreshExpired() {
        return this.refreshExpiration === 0 ? false : Date.now() >= this.refreshExpiration;
    }
    refreshExpirationRefreshToken() {
        const rei = Number(this.tokenSet['refresh_expires_in']) || 0;
        this.refreshExpiration = rei > 0 ? Date.now() + rei * 1000 : 0;
    }
    refreshTokenSet() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.refreshOClient();
            if (!this.tokenSet || this.refreshExpired()) {
                this.tokenSet = yield this.oclient.grant({
                    username: this.ops.adminUser,
                    password: this.ops.adminPwd,
                    grant_type: 'password',
                });
                this.refreshExpirationRefreshToken();
            }
            if (this.tokenSet.expired()) {
                const refreshToken = this.tokenSet.refresh_token;
                this.tokenSet = yield this.oclient.refresh(refreshToken);
                this.refreshExpirationRefreshToken();
            }
            this.kclient.setAccessToken(this.tokenSet.access_token);
        });
    }
    /**
     *
     * Get a [Keycloak admin client](https://www.npmjs.com/package/keycloak-admin) ready to work
     *
     * This method update the access token and the refresh token on demand.
     *
     * **WARNING!** Don't use it as a global variable, the access token need to be refreshed every 60 second as default.
     *
     */
    client() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.refreshTokenSet();
            return this.kclient;
        });
    }
}
exports.KeycloakAdminAdapter = KeycloakAdminAdapter;
//# sourceMappingURL=admin.adapter.js.map