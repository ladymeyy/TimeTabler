const env = process.env;
const _ = require('lodash');

function getFilterEnvs() {
  return _.pickBy(env, (value, key) => !key.includes('npm'));
}

module.exports = {
  getFilterEnvs
};
