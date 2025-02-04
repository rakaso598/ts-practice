// 함수 타입 명시
function add(a: number, b: number): number {
    return a + b;
}

// 화살표 함수와 타입 명시
const greet = (name: string): string => `Hello, ${name}`;

// 선택적 파라미터와 기본값
function multiply(a: number, b: number = 10): number {
    return a * b;
}