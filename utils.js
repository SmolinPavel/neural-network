const fs = require('fs');
const bmp = require('bmp-js');
const _ = require('underscore');

const getStartNeuronesArray = store => { // got from stackoverflow :(
    const distribution = [];
    let max = 0;
    let result = [];

    store.forEach(a => {
        distribution[a] = (distribution[a] || 0) + 1;
        if (distribution[a] > max) {
            max = distribution[a];
            result = [a];
            return;
        }
        if (distribution[a] === max) {
            result.push(a);
        }
    });

    let numberColorCount = 0;
    numberColor = '';
    for (let color in distribution) {
        if (color !== result[0]) { // TODO check if there are two color winners 
            if (numberColorCount < distribution[color]) {
                numberColorCount = distribution[color];
                numberColor = color;
            }
        }
    }

    const neuroArray = store.map(color => {
        if (numberColor === color) return 1;
        return 0;
    })

    return neuroArray;
}

const getRGBfromBMP = inputArr => {
    const outputArr = [];
    inputArr.forEach((pixel, index) => {
        const currentIndex = Math.floor(index/4) ;
        if ((index) % 4 !== 0) {
            outputArr[currentIndex] = outputArr[currentIndex] !== undefined ? `${outputArr[currentIndex]} ${pixel}` : pixel;
        }
    });
    
    return outputArr;
}

const prepareBMP = src => {
    const bmpBuffer = fs.readFileSync(src);
    const bmpData = bmp.decode(bmpBuffer);
    const imageBuffer = bmpData.data;

    return imageBuffer.toJSON().data;
}

const getResultNeuros = num => {
    const res = [];
    for (i = 0; i < 11; i++) { 
        res.push(num === i ? 1 : 0);
    }
    return res;
}

module.exports = {
    getStartNeuronesArray,
    getResultNeuros,
    getRGBfromBMP,
    prepareBMP
}