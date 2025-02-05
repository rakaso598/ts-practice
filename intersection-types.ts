// 교차 타입 - 여러 타입을 합성

interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee; // 타입 합성

const emp: EmployeePerson = {
    name: "John",
    employeeId: 123
}
