const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // Fetch rest of the code
  // System.import is part of ES6
  // It fetches rest of the code from server
  // Work in async
  // System import returns promise
  System.import('./image_viewer.js').then(module => {
    console.log(module);
    // module.default() will run any chunks passed from the import
    module.default();
  });
};

document.body.appendChild(button);
