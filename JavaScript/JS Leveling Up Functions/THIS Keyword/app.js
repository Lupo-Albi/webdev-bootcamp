const person = {
    first       :       'Robert',
    last        :       'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`;
    }
};

console.log(person.fullName());
person.last = 'Plant';
console.log(person.fullName());

const cat = {
    name        :       'Blue Steele',
    color       :       'grey',
    breed       :       'scottish fold',
    meow() {
        console.log("THIS IS: ", this)
        console.log(`${this.name} says MEOWWW!`);
    }
}

cat.meow();

const meow2 = cat.meow;

const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}

// The window object