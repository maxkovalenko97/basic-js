const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let arr = [];
  let str = String(strp);
  let separator = '+';
  if(options.separator) separator = options.separator;
  let additionSeparator = '|';
  if(options.additionSeparator) additionSeparator = options.additionSeparator;

  let repeatTimes = 0;
  if(options.repeatTimes) repeatTimes = options.repeatTimes;
  let additionRepeatTimes = 0;
  if(options.additionRepeatTimes) additionRepeatTimes = options.additionRepeatTimes;

  let addition;
  if(options.addition === undefined) {
    addition = '';
  }
  else addition = String(options.addition);

  if(!additionRepeatTimes) { str = str + addition};
  if(additionRepeatTimes >= 1) {
    addition = addition + additionSeparator;
    addition = addition.repeat(additionRepeatTimes);
    addition = addition.slice(0 , (addition.length - additionSeparator.length))
    str = str + addition;
  }

  if(repeatTimes == 1 || repeatTimes == 0) {console.log(str); return str}
  else {
      for(let i=0; i<repeatTimes; i++) {
          if(i == repeatTimes-1) {arr.push(str)}
          else {arr.push(str + separator)}
      }    
  }
  console.log(arr.join(''));
  return(arr.join(''))
}

module.exports = {
  repeater
};
