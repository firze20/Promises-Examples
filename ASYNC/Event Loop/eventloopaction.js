console.log("This is the first line of code in app.js.");
 
function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);
 
console.log("This is the last line of code in app.js.");