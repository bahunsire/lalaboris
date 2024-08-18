const jsonpatch = require('jsonpatch');

// Example document
let document = { "title": "Hello, world!" };

// Example JSON Patch operation
let operation = [{ "op": "replace", "path": "/title", "value": "Bonjour le monde!" }];

// Applying the operation
jsonpatch.applyOperation(document, jsonpatch._deepClone(operation));

console.log(document); // Output: { "title": "Bonjour le monde!" }
