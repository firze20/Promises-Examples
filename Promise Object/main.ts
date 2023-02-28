const _inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };

function promiseSync(resolve: any, reject: any): void {
    _inventory.sunglasses > 0 ? resolve('Sunglasses order processed.') : reject("That item is sold out.")
}

const _orderSunGlasses = (): Promise<any> => {
    return new Promise(promiseSync);
}

const _orderPromise = _orderSunGlasses();

console.log(_orderPromise);