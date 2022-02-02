const Generator = require('yeoman-generator');
const { copyTemplate } = require('./writing/copy-template.writing');
const { loopAskProjectName } = require('./prompting/loop-ask-project-name.prompting');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appName', { required: false });
  }

  initializing() {

  }

  async prompting() {
    await loopAskProjectName(this);
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

  install() {

  }

  end() {

  }
};
