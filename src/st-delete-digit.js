import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split('').map(item => Number(item));
  let min = Math.min(...arr);
  arr.splice(arr.indexOf(min),1);
  return Number(arr.join(''));
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
