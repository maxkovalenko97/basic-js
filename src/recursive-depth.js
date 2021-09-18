import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, count = 1) {
    if (!Array.isArray(arr)) return;
    var result = count;
    for(var i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
            var subDepth = this.calculateDepth(arr[i], count + 1);
                if (subDepth > result) {
                    result = subDepth;
                }
        }
    }
    return result;
  }
}
