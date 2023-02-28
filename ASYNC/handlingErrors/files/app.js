const cookBeanSouffle = require('./library');

// Write your code below:

//Promise with try catch
const hostDinnerParty = async () => {
    try {
        let resolvedValue = await cookBeanSouffle();
        console.log(`${resolvedValue} is served`);
    } catch (error) {
        console.log(error);
        console.log("Ordering a pizza!");
    }
}

hostDinnerParty();