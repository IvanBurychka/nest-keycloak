"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakConfigAdapter = void 0;
const tslib_1 = require("tslib");
const https = (0, tslib_1.__importStar)(require("https"));
const http = (0, tslib_1.__importStar)(require("http"));
const ifaces_1 = require("../ifaces");
const rxjs_1 = require("rxjs");
const utils_1 = require("../utils");
const operators_1 = require("rxjs/operators");
class KeycloakConfigAdapter {
    constructor(options) {
        this.ops = new ifaces_1.KeycloakAdminOptions(options);
    }
    request(url) {
        let request = http;
        if (/^https/.test(url)) {
            request = https;
        }
        return new Promise((res, rej) => {
            request.get(url, (resp) => {
                let data = '';
                if (resp.statusCode === 404) {
                    return rej(new Error(`Not found`));
                }
                const headers = resp.headers || {};
                if (headers['Content-Type'] === 'text/html') {
                    return rej(new Error(`Invalid request`));
                }
                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                // The whole response has been received. Parse the result.
                resp.on('end', () => {
                    try {
                        const result = JSON.parse(data);
                        res(result);
                    }
                    catch (error) {
                        rej(error);
                    }
                });
            }).on("error", (err) => {
                rej(err);
            });
        });
    }
    resolve() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.ops.publicKey) {
                return Promise.resolve(this.ops);
            }
            const config = yield (0, rxjs_1.defer)(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { return this.request(`${this.ops.serverUrl}/realms/${this.ops.realm}`); }))
                .pipe((0, utils_1.handleRetry)(this.ops.retryAttempts, this.ops.retryDelay), (0, operators_1.switchMap)(raw => (0, rxjs_1.of)(new ifaces_1.RealmResponse(raw))))
                .toPromise();
            this.ops.publicKey = config.publicKey;
            return Promise.resolve(this.ops);
        });
    }
}
exports.KeycloakConfigAdapter = KeycloakConfigAdapter;
//# sourceMappingURL=config.adapter.js.map