/**
 * Copyright IBM Corp. 2018, 2020
 * SPDX-License-Identifier: MIT
 */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  optimizedImages,
]);
