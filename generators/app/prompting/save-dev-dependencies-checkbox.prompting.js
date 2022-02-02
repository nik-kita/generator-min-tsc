// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

const SAVE_DEV_DEPENDENCIES = [
  '@types/node',
  'typescript',
  'ts-node',
  'ts-node-dev',
  'jest',
  '@jest/types',
  '@types/jest',
  'eslint',
  'eslint-config-airbnb-base',
  'eslint-plugin-import',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
];

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { checkboxSaveDev } = await generator.prompt([
    {
      type: 'checkbox',
      name: 'checkboxSaveDev',
      message: 'Npm will install --save-dev dependencies:',
      pageSize: 100,
      loop: false,
      choices: SAVE_DEV_DEPENDENCIES.map((dependency) => ({
        name: dependency,
        value: dependency,
        checked: true,
      })),
    },
  ]);

  // eslint-disable-next-line no-param-reassign
  generator.options.saveDevDependencies = checkboxSaveDev;
};
