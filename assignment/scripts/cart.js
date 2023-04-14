console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item) {
    basket.push(item);
    console.log('an item was added to the basket', item)
    return true;
}
addItem('coffee')
addItem('stapler')
console.log(basket)

function listItems() {
    for (let index = 0; index < basket.length; index++) {
        const element = basket [index];
        console.log(`i am element ${element} and my index is ${index}`)
        }
}
listItems()

function empty() {
    basket = [];
}
console.log(basket);
empty();
console.log(basket);

