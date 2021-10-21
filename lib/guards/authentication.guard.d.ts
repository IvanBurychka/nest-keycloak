import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KeycloakService } from '../services/keycloak.service';
export declare class KeycloakAuthenticatedGuard implements CanActivate {
    private readonly reflector;
    private readonly service;
    private readonly logger;
    constructor(reflector: Reflector, service: KeycloakService);
    canActivate(ctx: ExecutionContext): Promise<boolean>;
}
