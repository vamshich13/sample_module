Sample minimal code to reproduce @endo/static-module-record error.

----Steps to run the code-----

To install the dependencies
`npm install`

To build the project:
`npm run build`

To run the project:
`npm run start`
Open `http://localhost:8080/` in browser and check the error in the Inspect->Console

Alternatively, you can also open `dist/index.html` in the browser and check the error in the Inspect->Console

```
Uncaught ReferenceError: process is not defined
    at eval (core.js:18:17)
    at ./node_modules/@babel/types/lib/definitions/core.js (bundle.js:1678:1)
    at __webpack_require__ (bundle.js:2329:42)
    at eval (index.js:74:1)
    at ./node_modules/@babel/types/lib/definitions/index.js (bundle.js:1722:1)
    at __webpack_require__ (bundle.js:2329:42)
    at eval (validate.js:9:20)
    at ./node_modules/@babel/types/lib/validators/validate.js (bundle.js:2184:1)
    at __webpack_require__ (bundle.js:2329:42)
    at eval (validateNode.js:7:17)
```

--------------------------------
