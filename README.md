# Graphlib

Graphlib is a JavaScript library that provides an implementation of a
multi-graph. This library is used as part of the
[dagre](https://github.com/cpettitt/dagre) library, but is available here in a
light-weight, standalone form.

[![Build Status](https://secure.travis-ci.org/cpettitt/graphlib.png)](http://travis-ci.org/cpettitt/graphlib)

[![browser support](https://ci.testling.com/cpettitt/graphlib.png)](https://ci.testling.com/cpettitt/graphlib)

Note that graphlib is current a pre-1.0.0 library. We will do our best to
maintain backwards compatibility, for patch level increases (e.g. 0.0.1 to
0.0.2) but make no claim to backwards compatibility across minor releases (e.g.
0.0.1 to 0.1.0). Watch our [CHANGELOG](CHANGELOG.md) for details on changes.

# Build / Install

Before building this library you need to install the [npm package manager].

To get graphlib from npm, use:

    $ npm install graphlib

# Example

```js
var Graph = require("graphlib").Graph;

// Create a new empty graph
var g = new Graph();

// Add node "A" to the graph with no value
g.addNode("A");

// This returns true
g.hasNode("A");

// Add node "B" to the graph with a String value
g.addNode("B", "B's value");

// Prints `B's value`
console.log(g.node("B"));

// Add node "C" to the graph with an Object value
g.addNode("C", { k: 123 });
g.addNode("D");

// Prints `[ 'A', 'B', 'C', 'D' ]`
console.log(g.nodes());

// Add a directed edge with the ID "AB" from "A" to "B", but assign no value
g.addEdge("AB", "A", "B");

// Add a directed edge with no ID (Graph will assign one) from "B" to "C"
g.addEdge(null, "B", "C");

// Add a directed edge from "C" to "D" with an Object value
g.addEdge("CD", "C", "D", { k: 456 });

// Since Graph is a multi-graph, we can have multiple edges incident on the
// same source and target nodes.
g.addEdge("AB2", "A", "B");

// Prints `[ 'AB', '_ANON-1', 'CD', 'AB2' ]`. `_ANON-1` is the edge from "B" to "C"
console.log(g.edges());

// Which edges go from "A" to "B"? This prints `[ 'AB', 'AB2' ]`
console.log(g.edges("A", "B"));

// Which edges are incident on "D"? This prints `[ 'CD' ]`
console.log(g.edges("D"));

// How about a subgraph?
var g2 = g.subgraph(["A", "B", "C"]);

// Prints `[ 'A', 'B', 'C' ]`
console.log(g2.nodes());

// Prints `[ 'AB', '_ANON-1', 'AB2' ]`. Note that edges that have both their
// source and target nodes in the graph are also included in the subgraph.
console.log(g2.edges());
```

# API

[API documentation](http://cpettitt.github.io/project/graphlib/doc/index.html)

## 

# License

Graphlib is licensed under the terms of the MIT License. See the LICENSE file
for details.

[npm package manager]: http://npmjs.org/