import zip from './index';
import { DIFFERENT_LENGTH_ERROR, BAD_ARGUMENT_ERROR } from './constants';

describe('zip', () => {
    describe('Argument validation', () => {
        it('Throws an error if not all arguments are arrays', () => {
            const badZip = () => {
                zip(1);
            };

            expect(badZip).toThrowError(BAD_ARGUMENT_ERROR);
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
});
