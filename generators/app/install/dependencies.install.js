// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { dependencies } = generator.options;

  return dependencies.length && generator.spawnCommand('pnpm', [
    'add',
    ...dependencies,
  ]).catch((error) => {
    return generator.spawnCommand('npm', [
      'install',
      '-g',
      'pnpm',
    ]).then(() => {
      return generator.spawnCommand('pnpm', [
        'add',
        ...dependencies,
      ]);
    });
  });
};
