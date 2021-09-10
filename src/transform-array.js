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
  // throw new NotImplementedError('Not implemented');
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  };
  if(Array.isArray(arr) && arr.length === 0) { return arr;}
  if(arr.length == 0) { return false};
  if(arr.some(item => typeof (item) === 'boolean' || typeof (item) === "object")) { return arr;}
  // if(arr.filter(item => typeof (item) === 'string').some(item => item !== '--discard-next' || item !== '--discard-prev' || item !== '--double-next' || item !== '--double-prev')) {return arr} 

  let result = [];

  for(let i=0; i<arr.length; i++) {
    if (typeof(arr[i]) === 'number') { result.push(arr[i])}
    else if (arr[i] === '--discard-next') {
      if(typeof arr[i+1] !== 'number') { continue};
    	++i;
    	continue;
    }
    else if(arr[i] === '--discard-prev') {
      if (i == 0) {continue}; ///
      if(typeof arr[i-1] !== 'number') { continue};
      if(arr[i-2] === '--discard-next') { continue}
    	result.pop();
    }
    else if(arr[i] === '--double-next') {
      if(typeof arr[i+1] !== 'number') { continue};
    	result.push(arr[i+1]);
    }    
    else if(arr[i] === '--double-prev') {
      if(typeof arr[i-1] !== 'number') { continue};
      if(arr[i-2] === '--discard-next') { continue}
    	result.push(arr[i-1]);
    }        
  }
	return(result);
  
}
