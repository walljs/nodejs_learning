const fs = require("fs");

/**
 * 使用回调的方式实现异步文件操作
 */
fs.unlink('./1.txt', (err) => {
  if (err) throw err;
  console.log('成功删除 /tmp/hello');
});

// 当使用同步操作时，任何异常都会被立即抛出，可以使用 try/catch 来处理异常，或让异常向上冒泡。
try {
  fs.unlink("./1.txt");
  console.log("删除成功");
} catch (err) {
  console.log(err);
}

