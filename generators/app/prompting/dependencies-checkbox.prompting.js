// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

const DEPENDENCIES = [
  {
    dependency: 'dotenv',
    checked: true,
  },
];

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { checkboxDependencies } = await generator.prompt([
    {
      type: 'checkbox',
      name: 'checkboxDependencies',
      message: 'pnpm (or npm) will install such dependencies:',
      pageSize: 100,
      loop: false,
      choices: DEPENDENCIES.map(({ dependency, disabled, checked }) => ({
        name: dependency,
        value: dependency,
        checked: checked === undefined ? true : checked,
        disabled: disabled === undefined ? false : disabled,
      })),
    },
  ]);

  // eslint-disable-next-line no-param-reassign
  generator.options.dependencies = checkboxDependencies;
};
