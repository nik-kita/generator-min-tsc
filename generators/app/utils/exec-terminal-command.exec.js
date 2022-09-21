const { exec } = require('child_process');

module.exports = (command) => new Promise((resolve, reject) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      reject(error);
    }

    resolve(stdout ?? stderr);
  });
});
