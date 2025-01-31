const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  let pos = -1;
  for(let i = 0; i<email.length; i++) {
    (email[i] === '@') ? pos = i : null
  }
  return email.substring(pos + 1);
}

module.exports = {
  getEmailDomain
};
