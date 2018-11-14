import { DIFFERENT_LENGTH_ERROR, BAD_ARGUMENT_ERROR } from './constants';

const validateArguments = (arrays) => {
    let baseArrayLength;

    arrays.forEach((array) => {
        if (!Array.isArray(array)) throw new Error(BAD_ARGUMENT_ERROR);

        baseArrayLength = baseArrayLength || array.length;

        if (array.length !== baseArrayLength) throw new Error(DIFFERENT_LENGTH_ERROR);
    });
};

const zip = (...arrays) => {
    validateArguments(arrays);

    const length = arrays[0].length;
    const zippedArray = [];

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
