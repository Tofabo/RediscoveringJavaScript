'use strict'

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.length = pages;
        this.sold = 0;
    }

    //this cannot be the same name as the property.
    get pages() {
        return this.length;
    }

    set copiesSold(copies) {
        if(copies < 0) {
            throw new Error(`Value can't be negative`);
        }

        this.sold = copies;
    }

    get copiesSold() {
        return this.sold;
    }
}

const book = new Book('Who Moved my Cheese?', 'Spencer Johnson', 96);
console.log(book.title);
console.log(book.pages);

try {
    book.pages = 96;
    console.log('just set pages');
} catch(ex) {
    console.log(ex.message);
}

console.log(book.copiesSold);
book.copiesSold = 1;
console.log(book.copiesSold);

try {
    book.copiesSold = -2;
} catch(ex) {
    console.log(ex.message);
}

console.log(book.copiesSold)

class Tax {
    static get stateRate() {
        return 0.08;
    }

    static forAmount(price) {
        return price * Tax.stateRate;
    }
}

console.log(Tax.stateRate);
console.log(Tax.forAmount(100));

const forAmount = Tax.forAmount; // setting variable equal to static method
console.log('this', this);
this.stateRate = 0.01 // what does this refer to in this context? It's an empty array. What this supposed to be 'Tax'?
console.log(forAmount.call(this, 100)); //8

const goodName = 'learn Javascript';
const elegantCode = 'write elegant code';
const test = 'automated tests';

class Todo {
    constructor() {
        // this['spaces in ma name'] = 'hi';
        this[goodName] = 'done';
        this[elegantCode] = 'wip';
        this[test] = 'wip';
        this.tasks = [goodName, elegantCode, test];
    }

    get completedCount() {
        // return [goodName, elegantCode, test].filter(k => this[k] == 'done').length
        let completed = 0;
        // count 
        for (let task of this.tasks) {
            if (this[task] === 'done') {
                completed++;
            }
        }
        
        return completed;
    } 
}

// const todo = new Todo();
// console.log(todo['learn Javascript']); // could also use todo[goodName]
// console.log(todo['write elegant code']);
// console.log(todo['automated tests']);
// console.log(todo.completedCount);

const createTodo  = () => {
    return new Map([['learn Javascript', 'done'], ['write elegant code', 'wip'], ['automate tests', 'wip']]);
}

const completedCount = (todoMap) => {
    let completed = 0;
    // console.log(todoMap.values());
    // Array.prototype.forEach.call(todoMap.values(), value => {
    //     console.log('value', value);
    //     if (value === 'done') {
    //         completed++;
    //     }
    // })
    todoMap.forEach((key) => {
        if (key === 'done') {
            completed++;
        }});
    return completed;
}

// const todo = createTodo();
// console.log(todo.get('learn Javascript'))
// console.log(todo.get('write elegant code'))
// console.log(todo.get('automate tests'))
// console.log(completedCount(todo));

const create = (sports) => {
    // create a set with all upper case
    return new Set(sports.map(sport => sport.toUpperCase()));
}

const toLowerCase = (set) => {
    // take a set 
    const array = [...set].map(sport => sport.toLowerCase());
    return new Set(array);
    // return a set with all lower case
}

const sports = create(['Soccer', 'Football', 'Cricket', 'Tennis', 'soccer']);

console.log(sports);
console.log(sports.has('FOOTBALL'));
console.log(sports.has('Football'));
console.log(sports.size);

const inLowerCase = toLowerCase(sports);
console.log(inLowerCase.has('football'));
console.log(inLowerCase.size);

