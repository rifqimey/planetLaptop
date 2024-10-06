const express = require("express")
const dotenv = require("dotenv")
dotenv.config()


const app = express()
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my simple API");
  });
  
  app.get("/ping", (req, res) => {
    res.json({ msg: "pong" });
  });

app.listen(port, () => {
    console.log(`APP is running on PORT ${port}`);
  });