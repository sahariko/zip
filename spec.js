import zip from './index';
import { DIFFERENT_LENGTH_ERROR, BAD_ARGUMENT_ERROR, TO_OBJECT_ERROR, NOT_ENOUGH_ARGUMENTS_ERROR } from './constants';

describe('zip', () => {
    describe('Argument validation', () => {
        it('Throws an error if not all arguments are arrays', () => {
            const badZip = () => {
                zip(
                    [],
                    1
                );
            };

            expect(badZip).toThrowError(BAD_ARGUMENT_ERROR);
        });

        it('Throws an error if not enough arrays are provided', () => {
            const badZip = () => {
                zip([]);
            };

            expect(badZip).toThrowError(NOT_ENOUGH_ARGUMENTS_ERROR);
        });

        it('Throws an error if not all arrays are of the same length', () => {
            const array1 = [1];
            const array2 = [1, 2];

            const badZip = () => {
                zip(array1, array2);
            };

            expect(badZip).toThrowError(DIFFERENT_LENGTH_ERROR);
        });
    });

    it('Merges given arrays based by item index', () => {
        const zipped = zip(
            [1, 2],
            [3, 4]
        );
        const expected = [[1, 3], [2, 4]];

        expect(zipped).toEqual(expected);
    });

    it('Supports multitude of arguments', () => {
        const zipped = zip(
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12]
        );
        const expected = [
            [1, 4, 7, 10],
            [2, 5, 8, 11],
            [3, 6, 9, 12]
        ];

        expect(zipped).toEqual(expected);
    });

    describe('toObject', () => {
        it('Throws an error if provided with more than 2 arrays', () => {
            const zipped = zip(
                [1, 2],
                [3, 4],
                [5, 6]
            );
            const badToObject = () => zipped.toObject();

            expect(badToObject).toThrowError(TO_OBJECT_ERROR);
        });

        it('Returns an Object with the first array as keys and the second as values', () => {
            const zipped = zip(
                ['a', 'b', 'c', 'd'],
                [1, 2, 3, 4]
            );
            const expected = {
                a: 1,
                b: 2,
                c: 3,
                d: 4
            };
            const objectified = zipped.toObject();

            expect(objectified).toEqual(expected);
        });
    });
});
