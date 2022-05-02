const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {

  constructor(direction) {
    if(direction == false) this.direction = 'reverse';
    else this.direction = 'direct';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return  this.encode(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    return this.encode(message, key);
  }

  encode(message, key, method) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = message.match(/[a-z]/gi);
    if (!letters) return message;
    
    let changedKey = key.repeat(Math.ceil(letters.length/key.length)).split('').map(char =>alphabet.indexOf(char.toUpperCase()));
    let i = 0;
    let result = message.split('').map(char =>{
      if (/[a-z]/i.test(char)) {
        let changedLetter = alphabet.indexOf(char.toUpperCase());
        let letterCode = method == 'encrypt' ? ((changedLetter + changedKey[i++]) % 26) : ((changedLetter - changedKey[i++] + 26) % 26);
        return alphabet[letterCode];
        }
      else return char;
      });
      
    return this.direction == 'direct' ? result.join('') : result.reverse().join('');;
  }

}

module.exports = {
  VigenereCipheringMachine
};
