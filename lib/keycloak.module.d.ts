import { DynamicModule } from '@nestjs/common';
import { KeycloakOptions } from './ifaces';
export declare class KeycloakModule {
    /**
     *
     * Configure the KeycloakModule
     *
     * @param ops Connection and realm setting for keycloak
     */
    static forRoot(ops: KeycloakOptions): DynamicModule;
}
