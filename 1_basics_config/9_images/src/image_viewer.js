//Import pictures to js
import big from '../assets/big.jpeg';

// small is raw data in bundle.js and we can inject it to image.src
import small from '../assets/small.jpeg';

import '../styles/image_viewer.css';

const smallImage = document.createElement('img');
smallImage.src = small;

document.body.appendChild(smallImage);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);
