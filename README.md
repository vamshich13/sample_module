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
    at 8700 (bundle.js:1:688093)
    at r (bundle.js:1:865837)
    at 762 (bundle.js:1:740917)
    at r (bundle.js:1:865837)
    at 4273 (bundle.js:1:835097)
    at r (bundle.js:1:865837)
    at 1226 (bundle.js:1:673397)
    at r (bundle.js:1:865837)
    at 548 (bundle.js:1:646100)
    at r (bundle.js:1:865837)
```

--------------------------------
