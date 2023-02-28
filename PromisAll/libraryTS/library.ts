// library TS

export const checkAvailability = (itemName: string, distributorName: string) : Promise<string> => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if(restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    })
}

function restockSuccess() : boolean {
    return (Math.random() > 0.2);
}

