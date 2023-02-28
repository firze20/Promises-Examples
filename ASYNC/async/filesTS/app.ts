import * as fs from 'fs';
import {promisifiedReadfile} from './promisifiedReadfile';

const file = './file.txt';

const file2 = './file2.txt';

const enconding = 'utf-8';

fs.readFile(file, enconding, (err, data) => {
    if (err) throw err;
    let firstSentence = data;
    fs.readFile(file2, enconding, (err, data) => {
        if (err) throw err;
        let secondSentence = data;
        console.log(firstSentence, secondSentence)
    });
});

let firstSentence: string;
promisifiedReadfile(file, enconding)
    .then((data) => {
        firstSentence = data.toString();
        return promisifiedReadfile(file2, enconding)
    })
    .then((data) => {
        let secondSentence: string = data.toString();
        console.log(firstSentence, secondSentence)
    })
    .catch((err) => {
        console.log(err);
    })
;

async function readFiles() : Promise<void> {
    let firstSentence = await promisifiedReadfile(file, enconding);
    let secondSentence = await promisifiedReadfile(file2, enconding);
    console.log(firstSentence, secondSentence);
}

readFiles();