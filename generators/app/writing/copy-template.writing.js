/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');
const glob = require('glob');

module.exports = {
  /**
   *
   * @param {Generator} generator
   */
  copyTemplate(generator) {
    const { appName, gitEmail, githubAccount } = generator.options;
    const root = generator.templatePath();

    generator.destinationRoot(`${
      generator.destinationPath(appName)
    }`);

    const files = glob.sync('**', {
      dot: true, nodir: true, cwd: root,
    });

    for (let i = 0; i < files.length; ++i) {
      generator
        .fs
        .copyTpl(
          generator.templatePath(files[i]),
          generator.destinationPath(files[i]),
          {
            appName,
            gitEmail,
            githubAccount,
          },
        );
    }
  },
};
