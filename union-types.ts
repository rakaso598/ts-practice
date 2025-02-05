// 유니온 타입 - 여러 타입의 인자
function printId(id: number|string) {
    console.log("Your Id is: "+id)
}
printId(101);
printId("202");