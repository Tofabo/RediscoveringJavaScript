function first() {
    for( let i = 0; i < 5; i++) {
        second();
    }
};

function second() {
    for( let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// If you leave i as a global variable, calling first will result in console logs forever
// first();

// Error: Assignment to constant variable
const fourth = '4th';
// fourth = fourth;
// console.log(fourth); 


// freeze() makes an object immutable, But! Only the top level.
const person = Object.freeze({
    name: 'John',
    address: {
        street: '101 Main st.',
        city: "New York",
    },
});

person.address.street = '102 Main St.';

console.log(person);

