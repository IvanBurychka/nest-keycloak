import { DynamicModule, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { KeycloakOptions } from './ifaces';
export declare class KeycloakCoreModule implements NestModule {
    static forRoot(ops: KeycloakOptions): DynamicModule;
    configure(consumer: MiddlewareConsumer): void;
}
