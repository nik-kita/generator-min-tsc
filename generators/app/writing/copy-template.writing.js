const Generator = require('yeoman-generator');
const glob = require('glob');
const { join } = require('path');

module.exports = {
  /**
   *
   * @param {Generator} generator
   */
  copyTemplate(generator) {
    const {
      appName,
      gitEmail,
      githubAccount,
      dependencies,
      saveDevDependencies,
    } = generator.options;
  
    const husky = saveDevDependencies.includes('husky');

    const prefix = husky ? 'full' : 'no-husky';

    const root = generator.templatePath(prefix);

    generator.destinationRoot(`${generator.destinationPath(appName)
      }`);

    const files = glob.sync('**', {
      dot: true, nodir: true, cwd: root,
    });

    for (let i = 0; i < files.length; ++i) {
      generator
        .fs
        .copyTpl(
          generator.templatePath(prefix, files[i]),
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
