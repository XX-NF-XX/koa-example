const os = require('os');

function getUptimeMessage() {
  return `Serving for ${process.uptime()} seconds`;
}

function getFreeMemMessage() {
  return `Free memory: ${os.freemem() / 1024 / 1024} Mb`;
}

module.exports = {
  getUptimeMessage,
  getFreeMemMessage,
};
