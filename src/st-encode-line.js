import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(/*str*/) {
  throw new NotImplementedError('Not implemented');
  let arr = str.split('');
  let obj = {};
  arr.forEach(char => {
    obj[char]? obj[char] += 1 : obj[char] = 1;
  });
  console.log(obj);
  let result = '';
  for(let key in obj){
    (obj[key] == 1) ? result += key : result += obj[key] + key;
  }
  return result;
  // remove line with error and write your code here
}
