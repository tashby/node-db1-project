
const express = require("express");
const Apiserver = require("./api/Apiserver.js");

Apiserver.use(express.json());
const PORT = process.env.PORT || 5000;


const server = express();
server.use(Apiserver)

server.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({
    message: "Something went wrong"
  })
})

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
