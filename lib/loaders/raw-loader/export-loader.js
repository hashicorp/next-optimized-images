/**
 * Copyright IBM Corp. 2018, 2020
 * SPDX-License-Identifier: MIT
 */

module.exports = (content) => { // eslint-disable-line arrow-body-style
  return `${content.toString('utf-8').replace('export default', 'var raw =')}; module.exports = raw; exports.default = raw;`;
};
