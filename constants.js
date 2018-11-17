/**
 * The error thrown when trying to zip arrays with different lengths.
 * @type {String}
 */
export const DIFFERENT_LENGTH_ERROR = 'Supplied arrays must be of the same length';

/**
 * The error thrown when not all arguments supplied are arrays.
 * @type {String}
 */
export const BAD_ARGUMENT_ERROR = 'All supplied arguments must be arrays';

/**
 * The error thrown when not enough arguments are provided.
 * @type {String}
 */
export const NOT_ENOUGH_ARGUMENTS_ERROR = 'Please provide at least 2 arrays';

/**
 * The error thrown when trying to convert a zipped object that has more than 2 arrays.
 * @type {String}
 */
export const TO_OBJECT_ERROR = 'Cannot convert zipped object constructed from more than 2 arrays';
