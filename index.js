const express = require("express");
const app = express(); //Creating a new app
const port = 3000; //3000 port as back server
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://kklee0930:1234@boilerplate.7pcpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB error...", err));

//Executing app on port 3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
