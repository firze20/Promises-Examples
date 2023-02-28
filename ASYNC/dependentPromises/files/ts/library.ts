const shopForBeans = () : Promise<string> => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex : number = Math.floor(Math.random() * 5);
      let beanType : string = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
     resolve(beanType);
    }, 1000)
  })
  }

let soakTheBeans = (beanType: string) : Promise<boolean> => {
    return new Promise((resolve, reject) => {
        console.log('Time to soak the beans');
        setTimeout(() => {
            console.log(`... The ${beanType} beans are softended.`);
            resolve(true);
        }, 1000);
    })
}

let cookTheBeans = (isSoftened: boolean) : Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('Time to cook the beans.');
        setTimeout(() => {
            if (isSoftened) {
                console.log('... The beans are cooked!');
                resolve('\n\nDinner is served!');
            }
        }, 1000);
    })
}

export {
    shopForBeans,
    soakTheBeans,
    cookTheBeans
}