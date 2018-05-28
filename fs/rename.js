const fs = require("fs");

fs.rename("./1.txt", "rename.txt", (err) => {
  if (err)
    throw err;
  // 检查文件是否存在
  fs.stat("./rename.txt", (err, stats) => {
    if (err)
      throw err
    console.log(`改文件的属性： ${JSON.stringify(stats)}`)
  });
});
