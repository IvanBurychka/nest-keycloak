import { DynamicModule } from '@nestjs/common';
import { KeycloakAdminOptions } from '../ifaces';
export declare class KeycloakAdminCoreModule {
    static forRoot(ops: KeycloakAdminOptions): DynamicModule;
}
