// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');
const { execTerminalCommand } = require('../utils/index.utils');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const { confirmAskOpenProjectInVs } = await generator.prompt([
    {
      type: 'confirm',
      name: 'confirmAskOpenProjectInVs',
      message: 'Do you want to open project in vs-code now?',
      default: true,
    },
  ]);

  if (confirmAskOpenProjectInVs) {
    await execTerminalCommand(`code ${generator.destinationPath()}`);
  }
};
