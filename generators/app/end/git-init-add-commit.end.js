// eslint-disable-next-line no-unused-vars
const Generator = require('yeoman-generator');
const { execTerminalCommand } = require('../utils/index.utils');

/**
 *
 * @param {Generator} generator
 */
module.exports = async (generator) => {
  execTerminalCommand(`\
    cd ${generator.destinationPath()} \
    && git init \
    && git add -A \
    && git commit -m "initial commit"\
    `);
};
