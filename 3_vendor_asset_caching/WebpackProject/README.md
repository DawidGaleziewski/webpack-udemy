# Improve bundle size/performance

1. we will create two chunks of code using code splitting

- separate our code and vendor code
  This is due to the fact we will update the dependencies for vendors rarly and our code very often if not daily.

2. Asset cache
   --> fileA.js -> have I downloaded you? -> NO -> Ok, downloading

--> fileA.js -> have I downloaded you? -> YES -> I do nothing

## Split code into:

- vendor.js
- bundle.js

## setup

1. Unlike the spliting with System.import we will simply code what is going to be outputed as vendor and what as bundle
