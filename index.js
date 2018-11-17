import { DIFFERENT_LENGTH_ERROR, BAD_ARGUMENT_ERROR, TO_OBJECT_ERROR, NOT_ENOUGH_ARGUMENTS_ERROR } from './constants';

/**
 * Validates all provided arguments are arrays of the same length.
 * @param {Array[]} arrays
 * @throws
 */
const validateArguments = (arrays) => {
    let baseArrayLength;

    if (arrays.length < 2) throw new Error(NOT_ENOUGH_ARGUMENTS_ERROR);

    arrays.forEach((array) => {
        if (!Array.isArray(array)) throw new Error(BAD_ARGUMENT_ERROR);

        baseArrayLength = baseArrayLength || array.length;

        if (array.length !== baseArrayLength) throw new Error(DIFFERENT_LENGTH_ERROR);
    });
};

/**
 * @class Zip
 * @classdesc A slim extension on the Array prototype.
 */
class Zip extends Array {
    /**
     * Generates a new object from this instance's arrays, using the first array as keys, and the second one as values.
     * @return {Object}
     */
    toObject() {
        if (this[0].length !== 2) throw new Error(TO_OBJECT_ERROR);

        const object = {};

        this.forEach(([key, value]) => object[key] = value);

        return object;
    }
}

/**
 * Joins provided arrays, basically transposing a 3d matrix, much like Python's zip function.
 * @param  {Array[]} arrays
 * @return {Array[]}
 * @see https://www.programiz.com/python-programming/methods/built-in/zip
 * @example
 *
 * const zipped = zip(
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9],
 *   [10, 11, 12]
 * );
 *
 * console.log(zipped) // [ [1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12] ]
 */
const zip = (...arrays) => {
    validateArguments(arrays);

    const length = arrays[0].length;
    const zippedArray = new Zip();

    for (let i = 0; i < length; i++) {
        const zippedItem = [];

        for (let j = 0; j < arrays.length; j++) {
            const array = arrays[j];
            zippedItem.push(array[i]);
        }

        zippedArray.push(zippedItem);
    }

    return zippedArray;
};

export default zip;
