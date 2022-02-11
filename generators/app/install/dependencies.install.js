// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { dependencies } = generator.options;

  return generator.spawnCommand('npm', [
    'install',
    ...dependencies,
  ]);
};
