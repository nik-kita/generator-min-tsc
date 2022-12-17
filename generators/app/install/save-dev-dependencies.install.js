// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { saveDevDependencies } = generator.options;

  return saveDevDependencies.length && generator.spawnCommand('pnpm', [
    'add',
    '-D',
    ...saveDevDependencies,
  ]).catch((error) => {
    return generator.spawnCommand('npm', [
      'install',
      '-g',
      'pnpm',
    ]).then(() => {
      return generator.spawnCommand('pnpm', [
        'add',
        '-D',
        ...dependencies,
      ]);
    });
  });
};
