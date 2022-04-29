const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let arr = domains.map(item => item.split('.').reverse());
  let obj = {};
  console.log(arr);
  let res = '';
  arr.forEach(subarr => {
      res = '';
    subarr.forEach(item => {
        res += '.' + item;
        obj[res] ? obj[res] += 1 : obj[res] = 1;
    })
  });
  console.log(obj);
  return obj;
}

module.exports = {
  getDNSStats
};
