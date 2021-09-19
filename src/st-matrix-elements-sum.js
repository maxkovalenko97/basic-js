import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let arr = [];
    for(let i=0; i<matrix[0].length; i++) {
      let subArr = [];
      for(let j=0; j<matrix.length; j++) {
        subArr.push(matrix[j][i]);
      }
      arr.push(subArr);
    }
    let sum = 0;
    arr.forEach(item => {
      for(let i=0; i<item.length; i++) {
        if (item[i] == 0) break;
        else sum += item[i];
      }
    });
    return sum;
}
