# zip [![](https://img.shields.io/npm/v/@cocopina/zip.svg?colorA=cb3837&colorB=474a50)](https://www.npmjs.com/package/@cocopina/zip)

A JavaScript implementation of the native Python [`zip`](https://www.programiz.com/python-programming/methods/built-in/zip) function.

## Table of Contents

- [Installation](#installation)
- [API](#api)

## Installation

Install the package:
```sh
npm i @cocopina/zip
```

## API

The `zip` function is the default export of the package.

### Example

```js
import zip from '@cocopina/zip';

const array1 = [1, 2];
const arary2 = [3, 4];
const zipped = zip(array1, array2);

console.log(zipped); // [[1, 3], [2, 4]]
```
