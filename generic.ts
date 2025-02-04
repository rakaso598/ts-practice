// 제네릭 함수
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
console.log(output1);
console.log(output2);

// 제네릭 클래스
class Box<T> {
    contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }

    getContents(): T {
        return this.contents;
    }
}

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getContents()); // TypeScript

const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // 123
