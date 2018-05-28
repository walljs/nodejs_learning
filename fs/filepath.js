const fs = require('fs');

/**
 * 字符串形式的路径会被解释为表示绝对路径或相对路径的 UTF-8 字符序列。 相对路径会相对于 process.cwd() 定义的当前工作目录进行处理。
 */
fs.open('filepath.txt', 'r', (err, fd) => {
  if (err)
    throw err;
  fs.close(fd, (err) => {
    if (err)
      throw err;
  })
})

// fs.open(Buffer.)
