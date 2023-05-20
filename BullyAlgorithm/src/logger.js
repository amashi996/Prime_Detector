/** Logger file */

// create logger object to logging with contexual info - process ID, key, host
class Logger {
  // set properties
  constructor(pid, node) {
    this.pid = pid;
    this.key = node.key;
    this.host = node.host;
  }

  // for logging messages
  log(message) {
    console.log(`(${this.pid}) ${this.host.href} -- ${message}`);
  }
}

module.exports = Logger;
