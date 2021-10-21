import { NestMiddleware } from '@nestjs/common';
import { KeycloakService } from '../services/keycloak.service';
export declare class KeycloakGrantAttacherMiddleware implements NestMiddleware {
    private readonly service;
    private readonly logger;
    constructor(service: KeycloakService);
    use(req: any, res: any, next: () => void): Promise<void>;
}
