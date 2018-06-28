var dfs = require("./dfs");

module.exports = preorder;

function preorder(g, vs, reverse) {
  return dfs(g, vs, "pre", reverse);
}
