const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use("/", function (req, res, next) {
  let day = new Date().getDay();
  let hour = new Date().getHours();
  if (day == 0 || day == 6 || hour > 16 || hour <= 8) {
    res.sendFile(path.join(__dirname + "/html/out.html"));
  } else next();
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/Homepage.html"));
});

router.get("/Contact", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/Contactus.html"));
});

router.get("/Services", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/OurServices.html"));
});

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
let now = new Date().toString();
console.log(`${now}`);
let year = new Date().getHours().toString();
console.log(`${year}`);
let day = new Date().getDay();
console.log(`${day}`);
console.log(9 < 9);
