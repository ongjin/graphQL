import { Logger } from '@nestjs/common';

/**
 * @author 조용진
 * @description Logging
 * @returns 
 */
export function Log() {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const logger = new Logger(target.constructor.name);
            logger.log(`Calling ${propertyKey} with arguments ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            logger.log(`Method ${propertyKey} returned ${JSON.stringify(result)}`);
            
            return result;
        };
        return descriptor;
    };
}
