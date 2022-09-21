/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');
const execTerminalCommandExec = require('../utils/exec-terminal-command.exec');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  const defaultGitEmail = await execTerminalCommandExec('git config user.email');
  const { gitEmail } = await generator.prompt([
    {
      type: 'input',
      name: 'gitEmail',
      message: 'Your email (for git/git-hub):',
      default: defaultGitEmail,
    },
  ]);

  const email = gitEmail.trim();
  // eslint-disable-next-line no-param-reassign
  generator.options.gitEmail = email;
  const { githubAccount } = await generator.prompt([
    {
      type: 'input',
      name: 'githubAccount',
      message: 'Your github account name:',
      default: 'TODO-replace-with-your-github-account-name',
    },
  ]);

  // eslint-disable-next-line no-underscore-dangle
  const _githubAccount = githubAccount.trim();
  // eslint-disable-next-line no-param-reassign
  generator.options.githubAccount = _githubAccount;
};
