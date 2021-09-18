import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt() { //str, key
      throw new NotImplementedError('Not implemented');
    if(str == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }

    let kf = Math.ceil(str.length / key.length);
    key = key.repeat(kf).toUpperCase();
    str = str.toUpperCase();

    let codeA = 'A'.charCodeAt(0);
    let alphabet = 26;

    let result = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt > 90 || str[i].charCodeAt < 65) {
        result.push(str[i]);
      } else {
        let letterIdx = str.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
  
        result.push(
          String.fromCharCode( codeA + (letterIdx + shift) % alphabet )
        );
      }
    }
  
    // remove line with error and write your code here
  }
  decrypt() { // str, key
    throw new NotImplementedError('Not implemented')
    if(str == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}