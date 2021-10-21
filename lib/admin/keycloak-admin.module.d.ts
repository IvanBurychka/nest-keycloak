import { DynamicModule } from '@nestjs/common';
import { KeycloakAdminOptions } from '../ifaces';
export declare class KeycloakAdminModule {
    /**
     *
     * Configure the KeycloakModule
     *
     * @param ops Connection and realm setting for keycloak
     */
    static forRoot(ops: KeycloakAdminOptions): DynamicModule;
}
