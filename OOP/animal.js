class Animal {
    speak() {
        return "The animal makes a sound.";
    }
}

class Dog extends Animal{
    speak() {
        return `${super.speak()} The dog barks.`;
    }
}

const dog = new Dog();
console.log(dog.speak()); // Output: "The dog barks."