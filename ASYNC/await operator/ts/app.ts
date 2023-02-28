import {brainstormDinner} from './library';

// Native promise version:
function nativePromiseDinner() : void {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
  }

// async/await version:
async function announceDinner() : Promise<void> {
  // Write your code below:
  await brainstormDinner()
      .then((resolvedValue) => {
        console.log(`I'm going to make ${resolvedValue} for dinner.`);
      });
}

//nativePromiseDinner();

announceDinner();

