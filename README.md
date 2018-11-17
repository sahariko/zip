# zip [![](https://img.shields.io/npm/v/@cocopina/zip.svg?colorA=cb3837&colorB=474a50)](https://www.npmjs.com/package/@cocopina/zip)

A JavaScript implementation of the native Python [`zip`](https://www.programiz.com/python-programming/methods/built-in/zip) function.

## Table of Contents

- [Installation](#installation)
- [API](#api)
    * [`toObject [Function]`](#toobject-function)

## Installation

Install the package:
```sh
npm i @cocopina/zip
```

## API

The `zip` function is the default export of the package.

`zip` joins provided arrays, basically transposing a 3d matrix, much like Python's [`zip`](https://www.programiz.com/python-programming/methods/built-in/zip)  function.

#### Example

```js
import zip from '@cocopina/zip';

const array1 = [1, 2];
const arary2 = [3, 4];
const zipped = zip(array1, array2);

console.log(zipped); // [[1, 3], [2, 4]]
```

### `toObject [Function]`

Generates a new object from this instance's arrays, using the first array as keys, and the second one as values.

**IMPORTANT** This will only work when providing exactly 2 arrays.

#### Example

```js
import zip from '@cocopina/zip';

const zipped = zip(
    ['a', 'b', 'c', 'd'],
    [1, 2, 3, 4]
);

console.log(zipped.toObject()); // { a: 1, b: 2, c: 3, d: 4 }
```
