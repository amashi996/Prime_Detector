/** create child processes/instances */
// spawn multiple instances of the same script, each with a different configuration or target endpoint
// modified array of URLs is passed as command-line arguments to each child process

const { fork } = require("child_process");
const path = require("path");

const network = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "http://localhost:3004",
].map((x, i) => `${i}:${x}`);

const processes = [];
network.forEach((x, i) => {
  let args = network.slice();
  args.splice(i, 1);
  args.unshift(x);

  let process = fork(path.join(__dirname, "index.js"), args, {
    detached: false,
    stdio: "inherit",
  });
  processes.push(process);
});
