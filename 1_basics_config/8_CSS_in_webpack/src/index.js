import sum from './sum';
//This is not importing code to RUN in the project
// webpack needs to this to know to bundle this code with the rest

import './image_viewer';

const total = sum(10, 5);
console.log(total);
