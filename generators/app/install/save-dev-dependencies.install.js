// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { saveDevDependencies } = generator.options;

  return saveDevDependencies.length && generator.spawnCommand('npm', [
    'install',
    '--save-dev',
    ...saveDevDependencies,
  ]);
};
