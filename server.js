const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

app.use(express.json()); //n1

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./routes/timezones"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
