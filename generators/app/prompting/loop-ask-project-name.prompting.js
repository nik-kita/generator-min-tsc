/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');

module.exports = {
  /**
   *
   * @param {Generator} generator
   */
  async loopAskProjectName(generator) {
    let { appName } = generator.options;

    while (!appName) {
      // eslint-disable-next-line no-await-in-loop
      const { inputAppName } = await generator.prompt([
        {
          type: 'input',
          name: 'inputAppName',
          message: 'You should define your project\'s name:',
        },
      ]);

      appName = inputAppName.trim();
    }

    // eslint-disable-next-line no-param-reassign
    generator.options.appName = appName;
    generator.log(generator.options.appName);
  },
};
