import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
    let count = 0;
    let filArr = matrix.map(item => {
    	return item.filter(word => (word !== null && word !== undefined && word.length == 2));
    })
    let arStr = filArr.map(item => item.join(","));
    arStr.forEach(item => {if (item.match(/\^\^/g) && item.match(/\^\^/g) !== 0) {
      count += item.match(/\^\^/g).length;
    }else {
        count += 0;
    }}); 
    return(count);
}
