/**
 * @author 조용진
 * @description 로직 실행 시간 측정
 * @returns 
 */
export function MeasureTime() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const startTime = Date.now();

            const result = originalMethod.apply(this, args);

            const endTime = Date.now();
            const executionTime = endTime - startTime;

            console.log(`[${propertyKey}] Method executed in ${executionTime}ms`);

            return result;
        };

        return descriptor;
    };
}
