// 매핑된 타입 - 기존 타입을 변환하여 새로운 타입을 생성

type Readonloy<T> = {
    readonly [K in keyof T]: T[K];
};

interface Person {
    name: string;
    age: number;
}

const john: Readonly<Person> = {
    name: "John",
    age: 30
}

// john.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.