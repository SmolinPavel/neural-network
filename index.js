const brain = require('brain.js'); // this is a cheat!! 

const { getStartNeuronesArray, getResultNeuros, getRGBfromBMP, prepareBMP } = require('./utils');

const net = new brain.NeuralNetwork(); 
const imageSrc = process.argv[2]; 

const preparedBMP = prepareBMP(imageSrc);
const rgbArr = getRGBfromBMP(preparedBMP);
const neuronesArr = getStartNeuronesArray(rgbArr);

net.train([{ input: neuronesArr, output: getResultNeuros(3) }]);

const output = net.run(neuronesArr);
console.log(output);

// net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
//     {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
//     {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

// const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }

// console.log(output);


