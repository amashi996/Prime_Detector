/** Integrates with Consul for service registry by registering the HTTP server as a service, providing a health check endpoint, and utilizing the ConsulConfig module for interacting with Consul's API */

const http = require("http");
const ConsulConfig = require("./consul");

const port = process.argv[2] || 3000;

const consul = new ConsulConfig(`200-${port}`, port);

http
  .createServer((req, res) => {
    const { url, method } = req;
    //Test health check
    if (url === "/health") {
      res.end("OK!");
    }

    if (url === "/findPrime") {
    }

    if (url === "/learner") {
    }

    if (url === "/validate") {
    }

    if (url === "/accept") {
    }

    if (url === "/asignRole") {
    }
  })
  .listen(port, () => {
    console.log(`server listening:`, port);
  });
