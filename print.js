const fs= require("fs");
// const txt=fs.readFileSync("./test.txt")
// console.log(txt)

fs.readFile("./test.txt","utf8",(err,contents)=>{
    if(err) console.log("Error",err)
    else console.log(contents)
})