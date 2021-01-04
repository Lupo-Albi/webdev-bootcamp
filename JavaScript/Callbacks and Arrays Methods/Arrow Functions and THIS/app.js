// Keyword this works differently inside arrow functions

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}

// Inside the arrow function, keyword this just reference the scope it was created in
// The scope of this is the same of where the arrow function was created