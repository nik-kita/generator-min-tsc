// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

const SAVE_DEV_DEPENDENCIES = [
  { dependency: 'husky', checked: false },
  { dependency: '@types/node' },
  { dependency: 'typescript' },
  { dependency: 'jest' },
  { dependency: 'ts-jest' },
  { dependency: 'ts-node' },
  { dependency: '@jest/types' },
  { dependency: '@types/jest' },
  { dependency: 'eslint' },
  { dependency: 'eslint-config-airbnb-base' },
  { dependency: 'eslint-plugin-import' },
  { dependency: '@typescript-eslint/eslint-plugin' },
  { dependency: '@typescript-eslint/parser' },
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
      message: 'pnpm will install --save-dev dependencies:',
      pageSize: 100,
      loop: false,
      choices: SAVE_DEV_DEPENDENCIES.map(({ dependency, disabled, checked }) => ({
        name: dependency,
        value: dependency,
        checked: checked === undefined ? true : checked,
        disabled: disabled === undefined ? false : disabled,
      })),
    },
  ]);

  // eslint-disable-next-line no-param-reassign
  generator.options.saveDevDependencies = checkboxSaveDev;
};
