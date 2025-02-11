var titles = document.getElementsByClassName('title');

    // console.log(Array.isArray(titles)); // this command checks if something is an array it outputs answer in console

    // console.log("hello world");// this outputs the string hello world to the console

    // console.log(Array.isArray(Array.from(titles))); // in this instance this converstes a html collection "titles" to an array , and then checks if that conversion was sucessful 


Array.from(titles).forEach(function(item){
    console.log(item);
})