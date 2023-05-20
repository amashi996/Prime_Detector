/** fetch information about learner services from a service registry in a distributed system */
//  verify whether the selected number is prime or not

const Recorder = require("./recorder");
const Monotonic = require("./monotonic");

// retrieve information about learner services from a service registry
function getLearnerServiceregistry() {
  learner_array = {}; // store the information about learner services
  response = requests.get("http://127.0.0.1:8500/dc1/services"); // retrieve info about services registered in the distributed system
  nodes = response.json();

  // If the node has metadata &  identified as "Learner", the node information is extracted
  nodes.forEach((element) => {
    if (length(nodes[each]["Meta"]) > 0) {
      if (nodes[each]["Meta"]["Role"] == "Learner") {
        node = nodes[each]["Service"];
        role = nodes[each]["Port"];
        key = node;
        value = role;
        learner_array[key] = value;
      }
    }
  });
  print("learner_array", learner_array);
  learner_array.forEach((element) => {
    url = "http://localhost:${learner_array[each]/finalResult}";
  });
  return url;
}
module.exports = Acceptor;
