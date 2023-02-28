import {bakeChicken, cookBeans, cookRice, steamBroccoli} from './library';

const serveDinner = async () => {
    const vegetablePromise: Promise<string> = steamBroccoli();
    const starchPromise: Promise<string> = cookRice();
    const proteinPromise: Promise<string> = bakeChicken();
    const sidePromise: Promise<string> = cookBeans();

    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();