declare function lockPrototype(constructor: Function): void;
declare function uppercase(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Car {
    brand: string;
    constructor(brand: string);
    getCarInfo(): string;
}
declare const myCar: Car;
