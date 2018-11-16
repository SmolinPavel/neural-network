const { getColorOfTheNumber, getRGBfromBMP, prepareBMP } = require('./utils');

const imageSrc = process.argv[2]; 

console.log(getColorOfTheNumber(getRGBfromBMP(prepareBMP(imageSrc))));
