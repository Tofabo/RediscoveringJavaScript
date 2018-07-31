const addAge = function(person, age) {
    // this breaks if the person passed in doesn't have a 'last' property. 
    return{ ...person, last: person.last.toUpperCase(), age};
}

const parker = {
    first: 'peter',
    last: 'parker',
    email: 'imclever@gmail.com'
}

// console.log(addAge(parker, 15));

const greet = function(name, gender) {
    // this feels bad 
    return `Hello, ${gender.toString() === 'Symbol(female)'? 'Ms.':'Mr.'} ${name}`;
}

// console.log(greet('Sara', Symbol.for('female')));
// console.log(greet('Tom', Symbol.for('male')));

function stripMargin(texts, ...expressions) {
    // remove leading spaces and indentations - trim, split and join
    // convert expressions to uppercase
    console.log(texts);
    console.log(expressions);

    const removedSpaces = expressions.map((expression, index) =>
        `${texts[index].trim()} ${expression.toString().toUpperCase()}`).join('');

    const closingText = texts[texts.length-1];

    return `${removedSpaces}${closingText}`;
}

const name = 'Jane';

const processed = stripMargin` This is for
${name} and it needs to be delivered but December 24th`

console.log(processed);

const beforeAndAfter = function(number) {
    if(number < 0) return [];
    if(number === 0) return [1]

    return[number - 1, number + 1];
}

let before = 0;
let after = 0;

[before, after] = beforeAndAfter(7);
console.log(`${before} and ${after}`);

[before, after] = beforeAndAfter(9);
console.log(`${before} and ${after}`);

[after, before = 0] = beforeAndAfter(0);
console.log(`${before} and ${after}`);

[before =  0, after = 0] = beforeAndAfter(-1);
console.log(`${before} and ${after}`);

const purchaseItems = function(essential1, essential2, ...optionals) {
    console.log(optionals);
    console.log(`${essential1}, ${essential2}, ${optionals.join(', ')}`);
}

const mustHaves = ['bread', 'milk'];
const also = ['eggs', 'donuts'];
const andAlso = ['juice', 'tea'];

// need to spread the second argument or you will can an array with one element that is an array of the items
purchaseItems(...mustHaves, ...[...also, 'coffee', ...andAlso]);

function getDetails({name, born: {year: birthYear}, graduated: {year: graduationDate}}){
    return `${name} was born in year ${birthYear}, graduated in ${graduationDate}`;
}

const details = getDetails({
    name: 'Sarah',
    born: {month: 1, day: 1, year: 2000},
    graduated: {month: 5, day: 31, year: 2018},
})

console.log(details);

