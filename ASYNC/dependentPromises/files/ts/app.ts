import {shopForBeans, soakTheBeans, cookTheBeans} from './library';

async function makeBeans() {
    let type: string = await shopForBeans();
    console.log(type);
    let isSoft: boolean = await soakTheBeans(type);
    let dinner: string = await cookTheBeans(isSoft);
    console.log(dinner);
}

makeBeans();
