const { getStartNeuronesArray, getRGBfromBMP, prepareBMP } = require('./utils');

const imageSrc = process.argv[2]; 

console.log(
    getStartNeuronesArray(
        getRGBfromBMP(
            prepareBMP(imageSrc)
        )
    )
);
