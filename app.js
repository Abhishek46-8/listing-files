const fs = require("fs");  
let directory_name = __dirname;
  
let openedDir = fs.opendirSync(directory_name);
  
console.log("\nPath of the directory:", openedDir.path);
  
console.log("Files Present in directory:");
  
let filesLeft = true;
while (filesLeft) {
  let fileDirent = openedDir.readSync();
  
  
  if (fileDirent != null)
    console.log("Name:", fileDirent.name);

  else filesLeft = false;
}