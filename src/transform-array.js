import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // let sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  // // throw new NotImplementedError('Not implemented');
  // if(!Array.isArray(arr)) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // };
  // if(arr.length == 0) return [];
  // if(arr.every(item => typeof item === 'number')) return arr;
  // if(!(arr.includes(sequences[0]) || arr.includes(sequences[1]) || arr.includes(sequences[2]) || arr.includes(sequences[3]))) return arr;

  // let result = [];
  // for(let i=0; i<=arr.length; i++) {
  //   if (i == 0 && (arr[i] === sequences[1] || arr[i] === sequences[3])) continue;
  //   if(i == arr.length-1 && (arr[i] === sequences[0] || arr[i] === sequences[2])) continue;
  //   if((arr[i] === sequences[0] || arr[i] === sequences[2]) && (arr[i+1] === arr[0] || arr[i+1] === arr[1] || arr[i+1] === arr[2] || arr[i+1] === arr[3])) continue;
    
  //   if((arr[i]) && arr[i] !== sequences[0] && arr[i] !== sequences[1] && arr[i] !== sequences[2] && arr[i] !== sequences[3]) result.push(arr[i]);
  //   if(arr[i] === sequences[0])  {++i; continue;}
  //   if(arr[i] === sequences[1])  {if(arr[i-2] == sequences[0]){continue} else result.pop(); continue;}
  //   if(arr[i] === sequences[2])  {result.push(arr[i+1]); continue;}
  //   if(arr[i] === sequences[3])  {if(arr[i-2] == sequences[0]){continue} else result.push(arr[i-1]); continue;}
  // }
  // return result;

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = [];
  for (let i=0; i<arr.length; i++){
      switch (arr[i]) {
        case '--discard-prev':
          if(arr[i-2] == '--discard-next') continue;
          if(i - 1 >= 0) res.pop();
          break;
        case '--discard-next':
          if (i + 1 <= arr.length - 1) i++;
          break;
       case '--double-prev':
        if(arr[i-2] == '--discard-next') continue;
        if (i - 1 >= 0) res.push(arr[i-1]);
          break;
        case '--double-next':
          if (i + 1 <= arr.length - 1) res.push(arr[i + 1]);
          break;
        default: res.push(arr[i]);
    }
  }
  console.log(res);
  return res;
};
