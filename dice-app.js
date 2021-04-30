const path = require("path");
const express = require("express");
const app = express();
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD));
app.use("/static", express.static("public"));
app.get("*",function(req,res){
  const index = path.join(__dirname,'index.html');
  res.sendFile(index);
});
app.listen(process.env.PORT || 3000,function(){
  console.log("Server is started on port 3000");
});
