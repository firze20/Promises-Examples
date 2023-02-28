import {checkAvailability} from './library';

const onFulfill = (itemsArray: string[]) : void => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason: string) : void => {
    console.log(rejectionReason);
}

// Write your code below

const checkSunglasses : Promise<string> = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants : Promise<string> = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags : Promise<string> = checkAvailability('bags', 'Favorite Supply Co.');

//Promises async with no order 
Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject)
