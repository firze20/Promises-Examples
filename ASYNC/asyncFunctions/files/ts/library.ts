export const shopForBeans = () : Promise<string> => {
    return new Promise((resolve, reject) => {
        const beanTypes : string[] = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(() => {
            let randomIndex : number = Math.floor(Math.random() * beanTypes.length);
            let beanType : string = beanTypes[randomIndex];
            console.log(`2. I bought ${beanType} beans because they were on sale.`);
            resolve(beanType);
        }, 1000);
    })
}
