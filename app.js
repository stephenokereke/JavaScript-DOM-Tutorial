const titles = document.getElementsByClassName('title');


    // console.log(Array.isArray(titles)); // this command checks if something is an array it outputs answer in console

    // console.log("hello world");// this outputs the string hello world to the console

    // console.log(Array.isArray(Array.from(titles))); // in this instance this converstes a html collection "titles" to an array , and then checks if that conversion was sucessful 
    
    // Array.from(titles).forEach(function(item){
    //     console.log(item);
    // })

const wmf = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(wmf);
var books = document.querySelector("#book-list li .name")// this only returns one element

books = document.querySelectorAll("#book-list li .name")// this returns a collection (multiple) elements
// console.log(books);

// console.log(Array.isArray(books)); // checking if this is an array

// Convert the NodeList `books` into an array and iterate over each element
Array.from(books).forEach(function (items) {
    items.textContent += ' (book title)'; // Append '(book title)' to the text content of each element
});

// NOTE 1:
// A NodeList does NOT need to be converted into an array to use the `forEach` loop.
// Modern browsers support `forEach` on NodeList directly. For example:
// books.forEach(function (items) {
//     items.textContent += ' (book title)';
// });

// NOTE 2:
// You can check the type of a variable (e.g., Array, NodeList, HTMLCollection) by logging it to the console:
// console.log(books);
// In the console, you can inspect the variable and see its type and properties.


// Select the element with the ID `#book-list` and store it in the `bookList` variable
const bookList = document.querySelector('#book-list');

// Replace the entire content inside the `#book-list` element with a new `<h2>` element
// bookList.innerHTML = '<h2>armed and dangerous again again again again again again again again again</h2>';

// Append a new `<p>` element to the existing content inside the `#book-list` element
bookList.innerHTML += '<p>this is how you add HTML</p>';
console.log(bookList.innerHTML); // Logs the updated inner HTML of the #book-list element