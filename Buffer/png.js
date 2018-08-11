const fs = require('fs');

const buffer = new Buffer('==ii1j2i3h1i23h', 'base64');

console.log(buffer);
fs.writeFile('./test.png', buffer);
