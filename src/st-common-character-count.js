import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let obj = {};
  let obj1 = {};
  for(let i=0; i<s1.length; i++) {
    obj[`${s1[i]}`] = s1.split(s1[i]).length - 1;
  }
  for(let i=0; i<s2.length; i++) {
    obj1[`${s2[i]}`] = s2.split(s2[i]).length - 1;
  }

  let count1 = 0;
  for(let char in obj) {
    if(obj1[char]) {
      count1 += Math.min(obj[char],obj1[char]);
    }
  }
  return count1;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
