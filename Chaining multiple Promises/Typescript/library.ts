import {IStore, IOrder} from './models';


const store: IStore = {
    sunglasses: {
        inventory: 817,
        cost: 9.99
    },
    pants: {
        inventory: 236,
        cost: 7.99
    },
    bags: {
        inventory: 236,
        cost: 12.99
    },
}

const checkIventory = (order: IOrder) : Promise<any[]> => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const itemsArr = order.items;
            let inStock: boolean = itemsArr.every(item => store[item.product].inventory >= item.amount);

            if(inStock) {
                let total: number = 0;
                itemsArr.forEach(item => {
                    total+= item.amount * store[item.product].cost
                });
                console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
                resolve([order, total])
            } else {
                reject(`The order could not be completed because some items are sold out.`);
            }
        }, generateRandomDelay());
    })
}

const processPayment = (responseArray: any[]): Promise<any[]> => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let hasEnoughMoney = order.giftcardBalance >= total;
            if(hasEnoughMoney) {
                console.log(`Payment processed with giftcard. Generating shipping label.`);
                let trackingNumber = generateTrackingNumber();
                resolve([order, trackingNumber]);
            } else {
                reject(`Cannot process order: giftcard balance was insufficient`);
            }
        }, generateRandomDelay());
    })
}

const shipOrder = (responseArray: any[]): Promise<string> => {
    const order = responseArray[0];
    const trackingNumber = responseArray[1];
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`The order has been shipped. The tracking number is: ${trackingNumber}.`);
        }, generateRandomDelay());
    })
}

function generateTrackingNumber() : number {
    return Math.floor(Math.random() * 1000000);
}

function generateRandomDelay(): number {
    return Math.floor(Math.random() * 2000);
}

export const library = {checkIventory, processPayment, shipOrder};

