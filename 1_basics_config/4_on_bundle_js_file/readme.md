# What webpack does in bundle.js?

under the hood webpack creates a variable with modules.
Sudo code example:

```javascript
//Holds in functions code from both files
var myModules = [
  function() {
    const sum = (a, b) => a + b;
    return sum;
  },
  function() {
    const sum = myModules[0]();
    const total = sum(10, 10);
    console.log;
  }
];

// Defined where is the entry point
var entryPointIndex = 1;

// Entry point code is run
myModules[entryPointIndex];
```

# Other things webpack does:

- works around compatibility issues.
- makes sure modules are not reloaded without need.
