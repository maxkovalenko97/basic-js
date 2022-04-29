const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.arr.length;
    
  },
  addLink(value) {
    if(value || value === null || value === 0 || Number.isNaN(value) || value == false) this.arr.push(value);
    if(value === undefined) this.arr.push('')
    // throw new NotImplementedError('Not implemented');
    return this;
    
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if ((typeof position) !== "number" && !Number.isInteger(position) || position <= 0 || position > this.getLength()) {
      this.arr = []; 
      throw new Error("You can't remove incorrect link!")
    };
    this.arr.splice(position-1,1);
    return this;
    
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.arr.reverse();
    return this;
    
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let result = this.arr.map(item => `( ${item} )`).join("~~") ;
    console.log(result);
    this.arr = []; 
    return result;
  }
};


module.exports = {
  chainMaker
};

