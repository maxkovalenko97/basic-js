import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  throw new NotImplementedError('Not implemented');
  // if(n == 0 || n === "undefined" || n === null) { return 0};
  // let arr = String(n).split('');
  // let sum = 0;
  //   for(let i=0; i<arr.length; i++){
  //     sum +=+arr[i];
  //   }
  //   // if(String(sum).length > 1) {
  //   if(sum > 9) {
  //     getSumOfDigits(sum);
  //   }
  //   else return (sum);
}
