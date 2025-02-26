import isEqual from 'lodash/isEqual';

/**
 * Convert an array of numbers to an array of strings.
 *
 * @param {number[]} numbersArray
 * @returns {string[]}
 */
export const numbersToStringsArray = (numbersArray: number[]): string[] =>
  numbersArray.map((number) => String(number));

/**
 * Convert an array of strings to an array of numbers.
 *
 * @param {string[]} stringsArray
 * @returns {number[]}
 */
export const stringsToNumbersArray = (stringsArray: string[]): number[] =>
  stringsArray.map((string) => Number(string));

/**
 * Check whether 2 arrays are equal or not irrespective of
 * their order. We need to create a copy of both arrays first
 * since sort() overwrites the original array.
 *
 * @param {T[]} array1
 * @param {T[]} array2
 * @returns {boolean}
 */
export const areArraysEqual = <T>(array1: T[], array2: T[]): boolean =>
  isEqual([...array1].sort(), [...array2].sort());

/**
 * Remove `itemToRemove` from `array`
 *
 * @example
 * removeItemFromArray(1, [1,2,3]) // returns [2,3]
 *
 * @param {T} itemToRemove
 * @param {T[]} array
 * @returns {boolean}j
 */
export const removeItemFromArray = <T>(itemToRemove: T, array: T[]): T[] =>
  array.filter((item) => item !== itemToRemove);
