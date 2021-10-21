import { Observable } from 'rxjs';
export declare function handleRetry(retryAttempts?: number, retryDelay?: number): <T>(source: Observable<T>) => Observable<T>;
