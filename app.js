const express = require("express");
const app = express();
const port = 9000;

const morgan = require("morgan");

app.use(express.urlencoded({ extended: true }));

const APIRoutes = require("./routes/api.route");
// for log
app.use(morgan("tiny"));

require("./config/mongoose");

app.use("/api", APIRoutes);

app.listen(port, (err, done) => {
  if (err) {
    console.log("error ", err);
  } else {
    console.log(`app listening at http://localhost:${port}`);
    console.log("press CTRL + C to exit");
  }
});
