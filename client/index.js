// This console log and other logs are visible in the browser console (dev tools) when 
// you use "open client/index.html" from the terminal
console.log('so fetch!')

// GET Lesson:

// There is an "Add Item!" button on the DOM that you'll see on the HTML page, but you will
// not use this until the POST Lesson section

// 1. Make a GET request on page load to get all of the users for a given resource, and log those items to the console.
// 2. Make a GET request on page load to get all of the animals for a given resource, and log those items to the console.
// 3. Make a GET request on page load  to get all of the sports items for a given resource, and log those items to the console.
// 4. Let's hook it up to the DOM! On page load, fire off #1 from above and populate the section (.js-collection) with those items.



// STOP!
// Don't do the next section until the POST lesson!

// POST Lesson:
// 1. Make a POST request to create a new instance of that resource, and log the result to the console.
// 2. Rerun your previous GET fetch request to verify you added the new resource
// 3. Add an event listener, so that when you click button.js-add-item, it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection

// Spicy Challenge:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)
