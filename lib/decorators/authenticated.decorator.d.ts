/**
 *
 * Usesr autheticated
 *
 * @param roles user in role
 */
export declare const Authenticated: (...roles: string[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
