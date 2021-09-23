const express = require("express");
const app = express(); //Creating a new app
const port = 3000; //3000 port as back server

const config = require("./config/key");
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB error...", err));

//Client에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해줌.(bodyparser)
const bodyParser = require("body-parser");
//application x-www-format-urlencoded를 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({ extended: true }));
//application/json을 가져올 수 있게 해줌
app.use(bodyParser.json());

//Executing app on port 3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const { User } = require("./models/User");
app.post("/register", (req, res) => {
  //회원가입시 필요한 정보들을 client에서 가져오면 그것을 db에 넣는다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      //성공시에는 json 형태로 success:true출력하게 하라.
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
