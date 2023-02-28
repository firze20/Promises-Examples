const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:

// chaining promises that depend on one another, 
const makeBeans = async () => {
    //shopForBeans will return a resolved Promise of string
    let type = await shopForBeans();
    //soakTheBeans is a promise function that accepts 1 param of string
    let isSoft = await soakTheBeans(type);
    //cookTheBeans is a promise function that accepts 1 param of boolean, if its true it will serve the dinner
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}

makeBeans();

