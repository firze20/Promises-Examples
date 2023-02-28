import {bakeChicken, cookBeans, cookRice, steamBroccoli} from './library';

const serveDinnerAgain = async (): Promise<void> => {
    const resolvedPromises: string[] = [];
    await Promise.all([bakeChicken(), cookBeans(), cookRice(), steamBroccoli()])
        .then((resolved: string[]) => {
            for(let i=0; i<resolved.length; i++) {
                resolvedPromises.push(resolved[i]);
            }
        })

    console.log(`Dinner is served. We're having ${resolvedPromises[0]}, ${resolvedPromises[1]}, ${resolvedPromises[2]}, and ${resolvedPromises[3]}.`);
}

serveDinnerAgain();