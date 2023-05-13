const express = require("express");

const app = express();
app.use(express.static(__dirname));

let messages = [
  { name: "Eddy", message: "안녕하세요! 빅트레이더님!" },
  { name: "ptw3726", message: "좋아!! 빠르게 가!" },
  { name: "sunny247", message: "모든게 완벽해!!" },
];

app.get("/messages", (req, res) => {
  res.send(messages);
});

const server = app.listen(3000, () => {
  console.log("Server is listening on port", server.address().port);
});