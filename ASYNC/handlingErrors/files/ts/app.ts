import {cookBeanSouffle, randomSuccess} from './library';

//Promise with try catch
const hostDinnerParty = async (): Promise<void> => {
    try {
        let resolvedValue: string = await cookBeanSouffle();
        console.log(`${resolvedValue} is served!`);
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}

hostDinnerParty();