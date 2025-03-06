// Select all elements with the class name 'title' and store them in a variable called 'titles'
//const titles = document.getElementsByClassName('title');

// Check if 'titles' is an array and log the result to the console
// Note: 'titles' is an HTMLCollection, so this will return false
//console.log(Array.isArray(titles)); 

// Log the string "hello world" to the console
//console.log("hello world");

// Convert the HTMLCollection 'titles' into an array and check if it is now an array
// Log the result to the console (should be true)
//console.log(Array.isArray(Array.from(titles))); 

// Convert the HTMLCollection 'titles' into an array and iterate over each element
// Log each element to the console
//Array.from(titles).forEach(function(item){
//    console.log(item);
//});

// Select the element with the class 'name' inside the second <li> of the element with ID 'book-list'
//const wmf = document.querySelector('#book-list li:nth-child(2) .name');

// Select the first element with the class 'name' inside any <li> of the element with ID 'book-list'
//var books = document.querySelector("#book-list li .name"); // This only returns one element

// Select ALL elements with the class 'name' inside any <li> of the element with ID 'book-list'
// This returns a NodeList (a collection of elements)
//books = document.querySelectorAll("#book-list li .name");

// Check if 'books' is an array and log the result to the console
// Note: 'books' is a NodeList, so this will return false
//console.log(Array.isArray(books)); 

// Convert the NodeList 'books' into an array and iterate over each element
// Append '(book title)' to the text content of each element
//Array.from(books).forEach(function (items) {
 //   items.textContent += ' (book title)';
//});

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

// Select the element with the ID 'book-list' and store it in the 'bookList' variable
const bookList = document.querySelector('#book-list');

// Replace the entire content inside the '#book-list' element with a new <h2> element
// bookList.innerHTML = '<h2>armed and dangerous again again again again again again again again again</h2>';

// Append a new <p> element to the existing content inside the '#book-list' element
//bookList.innerHTML += '<p>this is how you add HTML</p>';

// Log the updated inner HTML of the '#book-list' element to the console
//console.log(bookList.innerHTML);

// Select the element with the ID 'page-banner' and store it in the 'banner' variable
const banner = document.querySelector('#page-banner');

// Log the node type of the '#page-banner' element to the console
// Node type 1 means it is an element node
console.log('#page-banner node type is', banner.nodeType);

// Log the node name of the '#page-banner' element to the console
// This will log the tag name (e.g., 'DIV' for a <div> element)
console.log('#page-banner node name is', banner.nodeName);

// Check if the '#page-banner' element has any child nodes and log the result to the console
console.log('#page-banner has child nodes?', banner.hasChildNodes());

// Create a deep copy of the 'banner' element, including all its child nodes, if the 
// argument passed was false only a deep copy of the 'banner' element would be made
const clonedBanner = banner.cloneNode(true);

// Log the cloned element to the console
console.log(clonedBanner);

// Log the parent node of the 'bookList' element to the console
console.log('the parent node is:', bookList.parentNode);

// Log the grandparent element of the 'bookList' element to the console
console.log('the grandparent element is:', bookList.parentElement.parentElement);

// Log the child elements of the 'bookList' element to the console
// 'children' returns an HTMLCollection of only the **element nodes** (e.g., <div>, <p>, etc.)
console.log(bookList.children);

// Log the next sibling of the 'bookList' element to the console
// 'nextSibling' returns the **next node** (which could be an element, text node, comment, etc.)
console.log('book-list next sibling is:', bookList.nextSibling);


// Log the next **element sibling** of the 'bookList' element to the console
// 'nextElementSibling' returns only the next **element node** (ignores text nodes, comments, etc.)
console.log('book-list next element sibling is:', bookList.nextElementSibling);

// Log the previous sibling of the 'bookList' element to the console
// 'previousSibling' returns the **previous node** (which could be an element, text node, comment, etc.)
console.log('book-list previous sibling is:', bookList.previousSibling);

// Log the previous **element sibling** of the 'bookList' element to the console
// 'previousElementSibling' returns only the previous **element node** (ignores text nodes, comments, etc.)
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

// Select the previous **element sibling** of 'bookList', find the first <p> element inside it,
// and append a line break with the text 'too Cool for school' to its inner HTML
bookList.previousElementSibling.querySelector('p').innerHTML += '<br>too Cool for school</br>';


// var test = bookList.querySelectorAll('li > :nth-child(2)');
// console.log(test);
// test.forEach(function(items){
//     items.innerHTML+=", aint no party like a diddy party";

// });


var buttns = document.querySelectorAll('#book-list .delete');

buttns.forEach(function(item){
    item.addEventListener('click', function(e){

        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    });
});




