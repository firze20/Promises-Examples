import {IOrder} from './models';

import {library} from './library'

const {checkIventory, processPayment, shipOrder} = library;

const order: IOrder = {
    items: [
        {
            product: 'sunglasses',
            amount: 1
        },
        {
            product: 'bags',
            amount: 2
        }
    ],
    giftcardBalance: 120.82
}

checkIventory(order)
    .then((resolvedArray) => {
        return processPayment(resolvedArray);
    })
    .then((resolvedArray) => {
        return shipOrder(resolvedArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })