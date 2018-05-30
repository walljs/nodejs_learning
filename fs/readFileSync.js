const fs = require('fs');
const { URL } = require('url');

const fileUrl = new URL('file:///D:/workspace/nodejs_learning/fs/read.txt');

fs.readFile(fileUrl, (err, data) => {
  if (err)
    throw err;
  console.log(666);
  console.log(data);
})
