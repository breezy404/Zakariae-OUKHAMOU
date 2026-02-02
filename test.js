const fs = require('fs');
try {
  fs.writeFileSync('test_node.txt', 'Hello Node');
  console.log('Node executed successfully. File created.');
} catch (e) {
  console.error('Node error:', e);
}
