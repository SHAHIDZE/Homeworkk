// 1

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 1 bajardi!"), 2000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 2 bajardi!"), 1000);
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 3 bajardi!"), 1500);
// });

// Promise.race([promise1, promise2, promise3])
//     .then(result => console.log("Birinchi bajarilgan:", result))
//     .catch(error => console.error("Nimadir xato ketdi:", error));


// 2

// class Animal {
//     constructor(name) {
//         if (new.target === Animal) {
//             throw new Error("Nimadir xato ketdi");
//         }
//         this.name = name;
//     }
    
//     makeSound() {
//         throw new Error("Nimadir xato ketdi");
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         return `${this.name} vov-vov`;
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         return `${this.name} meow-meow`;
//     }
// }

// class Bird extends Animal {
//     makeSound() {
//         return `${this.name} chirk-chirk`;
//     }
// }

// const dog = new Dog("Reks");
// const cat = new Cat("Keti");
// const bird = new Bird("Bird");

// console.log(dog.makeSound())
// console.log(cat.makeSound())
// console.log(bird.makeSound())


// 3

// class Animal {
//     constructor(name) {
//         if (this.constructor === Animal) {
//             throw new Error("Nimadir xato ketdi!");
//         }
//         this.name = name;
//     }

//     speak() {
//         throw new Error("Nimadir xato ketdi!");
//     }

//     static info() {
//         return "Bu Animal klassi barcha hayvonlar uchun asosiy class sifatida ishlatiladi";
//     }

//     static totalLegs(legs) {
//         return `Hayvonlarning jami oyoqlari soni: ${legs}`;
//     }

//     static isMammal(animalType) {
//         return animalType === "mammal" ? "Bu hayvon sutemizuvchi." : "Bu hayvon sutemizuvchi emas";
//     }
// }

// class Dog extends Animal {
//     speak() {
//         return "Vov-vov!";
//     }
// }

// class Cat extends Animal {
//     speak() {
//         return "Meow-meow!";
//     }
// }

// class Bird extends Animal {
//     speak() {
//         return "Chirq-chirq!";
//     }
// }

// console.log(Animal.info());
// console.log(Animal.totalLegs(12));
// console.log(Animal.isMammal("mammal"));

// const dog = new Dog("Reks");
// console.log(dog.speak());

// const cat = new Cat("Ketya");
// console.log(cat.speak());

// const bird = new Bird("Qushcha");
// console.log(bird.speak());


// 4

class Animal {
    #name;

    constructor(name) {
        if (this.constructor === Animal) {
            throw new Error("Nimadir xato ketdi!");
        }
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }

    speak() {
        throw new Error("Nimadir xato ketdi");
    }

    static info() {
        return "Bu Animal klassi barcha hayvonlar uchun asosiy class sifatida ishlatiladi.";
    }

    static totalLegs(legs) {
        return `Hayvonlarning jami oyoqlari soni: ${legs}`;
    }

    static isMammal(animalType) {
        return animalType === "mammal" ? "Bu hayvon sutemizuvchi." : "Bu hayvon sutemizuvchi emas.";
    }
}

class Dog extends Animal {
    speak() {
        return "Vov-vov!";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow-meow!";
    }
}

class Bird extends Animal {
    speak() {
        return "Chirq-chirq!";
    }
}

console.log(Animal.info());
console.log(Animal.totalLegs(12));
console.log(Animal.isMammal("mammal"));

const dog = new Dog("Reks");
console.log(dog.getName());
dog.setName("Max");
console.log(dog.getName());
console.log(dog.speak());

const cat = new Cat("Ketya");
console.log(cat.getName());
console.log(cat.speak());

const bird = new Bird("Qushcha");
console.log(bird.getName());
console.log(bird.speak());


