import small from '../assets/small.jpeg';

import '../styles/image_viewer.css';

export default () => {
  const smallImage = document.createElement('img');
  smallImage.src = small;

  document.body.appendChild(smallImage);
};
