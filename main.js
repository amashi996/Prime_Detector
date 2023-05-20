/** generating a unique node ID to identify different nodes participating in the consensus protocol */

// calculates the current time in seconds
// represents the current time in milliseconds

function generate_node_id() {
  millis = int(round(time.time() * 1000));
  node_id = millis + randint(800000000000, 900000000000);
  return node_id;
}
console.log(node_id);
main;
