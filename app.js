const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("into middleware 1");
  req.user = "Guest";
  next();
});

app.use("/welcome", (req, res, next) => {
  res.send(`<h1>Welcome ${req.user}</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`connection eshtablished successfully http://localhost:${PORT}`);
});
