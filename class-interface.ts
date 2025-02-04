interface Animal {
    name: string,
    makeSound(): void
}

class Dog implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Wal Wal !");
    }

}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Wal Wal !