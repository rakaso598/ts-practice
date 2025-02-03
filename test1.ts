// 타입스크립트 사용
let message: string = "Hello typescript!";
let age: number = 25;
let isActive: boolean = true;

console.log(message);
console.log(age);
console.log(isActive);

// 타입스크립트 함수
function test(inputString: string): void {
  return console.log(`${inputString} - Function test!`)
}

test("inputString");

// 타입스크립트 배열
let []: number[] = [1,2,3,4,5];
let []: string[] = ['a','b','c','d'];