// Using rest parameter to account for variable number of arguments
// Rest parameter is an array! Array methods can be used.
const amountAfterTax = (amount, ...taxes) => {
    let percentage = taxes.reduce((x, y) => x + y, 0)
    return (amount + (amount * percentage/100)).toFixed(2);
}

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTax(amount)); //25.12
console.log(amountAfterTax(amount, fedTax)); //27.63
console.log(amountAfterTax(amount, fedTax, stateTax)); //28.13
console.log(amountAfterTax(amount, fedTax, stateTax, localTax)); //28.26

// Using spread operator to concatonate two arrays
const purchaseItems = function (essential1, essential2, ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
}

purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

purchaseItems(...mustHaves, ...andAlso);

// Setting defaults in function declaration. 
const purchaseMoreItems = function(essential1 = 'milk', essential2 = 'bread', ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
}
const items = ['cheese', 'milk'];

purchaseMoreItems('cheese');
purchaseMoreItems(...items);
purchaseMoreItems();

// Setting default to value of a function! Oh snap.
const placeOrder = function(id, amount, shipping = getShipping(amount), date = new Date()) {
    console.log('shipping charge for id: ' + id + ' is $' + shipping + ' Date: ' + date.getDate());
};

const getShipping = function(amount) {
    if (amount >= 20) {
        return 10;
    } else {
        return 5;
    }
}

placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.30);
placeOrder(1, 25.20);

const sortByTitle = function(books) {
    const byTitle = function (book1, book2) {
        return book1.title.localeCompare(book2.title);
    }

    // Use spread operator to make a copy of the array.
    return [...books].sort(byTitle);
}

const unsortedBooks = [
    {title: 'zabba'},
    {title: 'bad'},
];

console.log(sortByTitle(unsortedBooks));