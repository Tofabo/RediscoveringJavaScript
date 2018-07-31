const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (let i = 0; i < numbers.length; i = i +3) {
    // console.log(numbers[i]);
}

for(const [i, number] of numbers.entries()) {
    if( i%3 === 0 ) {
        // console.log(number);
    }
} 

// console.log( 'The Symbol properties in arrays are: ');
// console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(numbers)));

class Message {
    constructor (text) {this.text = text;}

    // My code here...
    [Symbol.replace](og_string, value) {
        console.log('this.text is : ', this.text);
        console.log('og', og_string);
        console.log('value', value);

        return this.text.replace(og_string, value);
    }
}

const message = new Message('There are no stupid questions');

// console.log('stupid'.replace(message, 'S*****'));

console.log(''.replace(message, 'Yes, '));

const m = 'there are stupid questions';

console.log(m.replace('', 'Yes, '))

// 4
const iterativeFib = function(index) {
    let num_1 = 0;
    let num_2 = 1;
    let temp;
    
    if(index === 0) {
        return num_1;
    } else if (index === 1) {
        return num_2;
    } else {
        for( let i = 1; i < index; i++) {
            temp = num_2;
            num_2 = num_2 + num_1;
            num_1 = num_2;
        }
        return num_2;
    }
}

const fibonocciSeries = function*(start = 0) {
    let index = start;

    while (true) {
        yield iterativeFib(index);
        index++;
    }
}

for(const value of fibonocciSeries()){
    if (value > 25 ) break;
    // process.stdout.write(value + ", ");
}

const fibonocciSeries2 = function*(start = 0) {
    let index = start;

    while (true) {
        yield iterativeFib(index);
        index++;
    }
}

// for(const [index, value] of fibonocciSeries2()){
//     console.log(index);
//     if (index > 8 ) break;
//     process.stdout.write(value + ", ");
// }