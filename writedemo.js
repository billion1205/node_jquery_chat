const fs = require("fs");

const readableStream = fs.createReadStream("message.txt");
const writeableStream = fs.createWriteStream("message2.txt");

readableStream.setEncoding("utf-8");

readableStream.on('data',(chunk)=>{
  writeableStream.write(chunk);
})