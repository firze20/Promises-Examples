import {shopForBeans} from './library';

//for await operations the async is always needed
async function getBeans() : Promise<void> {
    console.log(`1. Heading to the store to buy beans...`);
    // waits for the resolvedValue of Promise shopforBeans , if there was no await it would print the console log first before
    //resolving the Promise
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

