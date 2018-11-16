const fs = require('fs');
const bmp = require('bmp-js');

const imageSrc = process.argv[2]; 

const prepareBMP = src => {
    const bmpBuffer = fs.readFileSync(src);
    const bmpData = bmp.decode(bmpBuffer);
    const imageBuffer = bmpData.data;

    return imageBuffer.toJSON().data;
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

console.log(getRGBfromBMP(prepareBMP(imageSrc)));
