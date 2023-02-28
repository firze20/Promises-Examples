const shopForBeans = require('./library');

//for await operations the async is always needed
async function getBeans() {
// waits for the resolvedValue of Promise shopforBeans , if there was no await it would print the console log first before
//resolving the Promise
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();




