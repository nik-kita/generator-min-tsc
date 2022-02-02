const Generator = require('yeoman-generator');
const { copyTemplate } = require('./writing/copy-template.writing');
const { loopAskProjectName, saveDevDependenciesCheckbox } = require('./prompting/index.prompting');
const { saveDevDependenciesInstall } = require('./install/index.install');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appName', { required: false });
  }

  initializing() {

  }

  async prompting() {
    await loopAskProjectName(this);
    await saveDevDependenciesCheckbox(this);
  }

  configuring() {

  }

  default() {

  }

  writing() {
    copyTemplate(this);
  }

  conflicts() {

  }

  async install() {
    await saveDevDependenciesInstall(this);
  }

  end() {

  }
};
