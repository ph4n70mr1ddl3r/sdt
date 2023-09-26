const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const fs = require("fs");

const [encoding, ...leafs]=fs
.readFileSync("crank.csv", "utf-8")
.trim()
.split("\r\n");

const tree = StandardMerkleTree.of(
	leafs.map((leaf) => leaf.split(",")),
	encoding.split(",")
);

console.log('Merkle Root:', tree.root);

