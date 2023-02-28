import * as fs from 'fs';

export const promisifiedReadfile = (file: string, enconding: any) : Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, enconding, (err, text) => {
            if (err) {
                reject(err.message);
            }
            resolve(text);
        })
    })
}

