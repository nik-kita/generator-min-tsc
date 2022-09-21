const Generator = require('yeoman-generator');
const {
  copyTemplate,
} = require('./writing/copy-template.writing');
const {
  loopAskProjectName,
  saveDevDependenciesCheckbox,
  dependenciesCheckbox,
} = require('./prompting/index.prompting');
const {
  saveDevDependenciesInstall,
  dependendiesInstall,
} = require('./install/index.install');
const {
  askOpenProjectInVs,
  gitInitAddCommit,
  npxHuskyInstall,
} = require('./end/index.end');
const { getGitEmail } = require('./git-github/index.git-configuration');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appName', { required: false });
    this.argument('gitEmail', { required: false });
    this.argument('githubAccount', { required: false });
  }

  initializing() {

  }

  async prompting() {
    await loopAskProjectName(this);
    await getGitEmail(this);
    await dependenciesCheckbox(this);
    await saveDevDependenciesCheckbox(this);
  }

  configuring() {

  }

  default() {

  }

  async writing() {
    await copyTemplate(this);
  }

  conflicts() {

  }

  async install() {
    await dependendiesInstall(this);
    await saveDevDependenciesInstall(this);
  }

  async end() {
    await gitInitAddCommit(this);
    await askOpenProjectInVs(this);
    await npxHuskyInstall(this);
  }
};
