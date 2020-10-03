const common  = require('./common');
const express = require('express');

const app = express();
const port = 4000;

app.use(express.static('./build'));
app.listen(port);

console.log('\nYou can load stitched file from:');
console.log('http://localhost:' + port + url);