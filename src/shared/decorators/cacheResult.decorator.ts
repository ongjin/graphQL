
/**
 * @description 동일한 인수로 호출되면 이전 결과를 반환하여 실행 시간을 단축. 인자 X
 * @returns descriptor
 */
const cache = new Map<string, any>();

export function CacheResult() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const cacheKey = JSON.stringify(args);

            if (cache.has(cacheKey)) {
                return cache.get(cacheKey);
            }

            const result = originalMethod.apply(this, args);
            cache.set(cacheKey, result);

            return result;
        };

        return descriptor;
    };
}
