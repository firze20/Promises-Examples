import {IStore} from './models/IStore'

const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
}

//exporting this function
export const checkInventory = (order: any[]): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock: boolean = order[0].sunglasses >= inventory.sunglasses ? true : false;
            if(inStock) {
                console.log()
                resolve(inStock);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`)
            }
        }, 1000);
    })
}
