const { getRGBfromBMP, prepareBMP } = require('./utils');

const imageSrc = process.argv[2]; 

console.log(getRGBfromBMP(prepareBMP(imageSrc)));
