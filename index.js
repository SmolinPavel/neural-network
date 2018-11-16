const fs = require('fs');
const bmp = require('bmp-js');

const imageSrc = './images/3.bmp'; // process.argv[2]; 


const bmpBuffer = fs.readFileSync(imageSrc);
const bmpData = bmp.decode(bmpBuffer);
const imageBuffer = bmpData.data;
const pixelsByteArray = imageBuffer.toJSON().data;

const testArr = [];

for (let i = 1; i <= 100; i++) {
    testArr.push(i);
}

const colorsArr = [];

pixelsByteArray.forEach((pixel, index) => {
    const currentIndex = Math.floor(index/4) ;
    if ((index) % 4 !== 0) {
        colorsArr[currentIndex] = colorsArr[currentIndex] ? `${colorsArr[currentIndex]} ${pixel}` : pixel;
    }
});

console.log(colorsArr);
