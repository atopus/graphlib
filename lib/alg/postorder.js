var dfs = require("./dfs");

module.exports = postorder;

function postorder(g, vs, reverse) {
  return dfs(g, vs, "post", reverse);
}
