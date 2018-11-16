const fs = require('fs');
const bmp = require('bmp-js');
const _ = require('lodash');

const getColorOfTheNumber = rgbArr => getMostPopularInArray(rgbArr);

const getMostPopularInArray = store => {
    const distribution = {};
    let max = 0;
    let result = [];

    store.forEach(function (a) {
        distribution[a] = (distribution[a] || 0) + 1;
        if (distribution[a] > max) {
            max = distribution[a];
            result = a;
            return;
        }
        if (distribution[a] === max) {
            // In this case there's more than one dominant color
            // result.push(a);
        }
    });

    // console.log('max: ' + max);
    // console.log('key/s with max count: ' + JSON.stringify(result));
    // console.log(distribution);

    return result;
}

const getRGBfromBMP = inputArr => {
    const outputArr = [];
    inputArr.forEach((pixel, index) => {
        const currentIndex = Math.floor(index/4) ;
        if ((index) % 4 !== 0) {
            outputArr[currentIndex] = outputArr[currentIndex] ? `${outputArr[currentIndex]} ${pixel}` : pixel;
        }
    });
    
    return outputArr;
}

const getUniqueValuesFromArray = arr => _.uniq(arr);

const prepareBMP = src => {
    const bmpBuffer = fs.readFileSync(src);
    const bmpData = bmp.decode(bmpBuffer);
    const imageBuffer = bmpData.data;

    return imageBuffer.toJSON().data;
}

module.exports = {
    getColorOfTheNumber,
    getRGBfromBMP,
    prepareBMP
}