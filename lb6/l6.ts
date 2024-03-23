// Декоратор для блокировки изменения прототипа класса
function lockPrototype(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Декоратор метода для преобразования возвращаемой строки в заглавные буквы
function uppercase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function() {
        const result = originalMethod.apply(this, arguments);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    }

    return descriptor;
}

@lockPrototype
class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    @uppercase
    getCarInfo(): string {
        return `Brand: ${this.brand}`;
    }
}

const myCar = new Car('hyundai');
console.log(myCar);
console.log(myCar.getCarInfo()); 

Object.defineProperty(Car, 'max speed', {
    value: 17
});