const rewireStyledComponents = require('react-app-rewire-styled-components');
const {injectBabelPlugin} = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  return config;
}