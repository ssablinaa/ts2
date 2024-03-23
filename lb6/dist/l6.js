var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Декоратор для блокировки изменения прототипа класса
function lockPrototype(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// Декоратор метода для преобразования возвращаемой строки в заглавные буквы
function uppercase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const result = originalMethod.apply(this, arguments);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
let Car = class Car {
    constructor(brand) {
        this.brand = brand;
    }
    getCarInfo() {
        return `Brand: ${this.brand}`;
    }
};
__decorate([
    uppercase
], Car.prototype, "getCarInfo", null);
Car = __decorate([
    lockPrototype
], Car);
const myCar = new Car('hyundai');
console.log(myCar);
console.log(myCar.getCarInfo());
Object.defineProperty(Car, 'max speed', {
    value: 17
});
