const brainstormDinner = require('./library');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}


// async/await version:
// Write your code below:

async function announceDinner() {
    await brainstormDinner()
      .then((resolvedValue) => {
        console.log(`I'm going to make ${resolvedValue} for dinner.`);
      });
}

announceDinner();




