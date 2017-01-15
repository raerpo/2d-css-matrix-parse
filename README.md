# css-translate-matrix-parser

Let's you get the matrix value from a element CSS translate property.

This is an ES6 port from [iranreyes's 2d-css-matrix-parse](https://github.com/iranreyes/2d-css-matrix-parse). I also remove it's dependency from [get-style-property](https://www.npmjs.com/package/get-style-property) by using `window.getComputedStyle` function.  

## Install

```bash
npm install --save css-translate-matrix-parser
```

## Usage
```javascript
import CSSParser from 'css-translate-matrix-parser';
// You can user css-translate-matrix-parser by passing it the element
let matrixValues = CSSParser.fromElement(document.querySelector('#element'));

// Or by passing the transform value
const styles = window.getComputedStyle(document.querySelector('#element'));
let matrixValues = CSSParser.parse(styles.transform);
```