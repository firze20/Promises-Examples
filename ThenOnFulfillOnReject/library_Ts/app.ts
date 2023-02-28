import {checkInventory} from './libary';
import {IStore} from './models/IStore';

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue: any) => {
    console.log(resolvedValue);
}

const handleFailure = (rejectedValue: any) => {
    console.log(rejectedValue);
}

//promising handling functions onresolved catch handlefailure
checkInventory(order)
    .then(handleSuccess)
    .catch(handleFailure)