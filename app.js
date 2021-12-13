const express = require("express");
const app = express();

app.use(express.json);

app.use(express.urlencoded({ extended: true }));

const APIRoutes = require("./routes/api.route");

app.use("/api/", APIRoutes);

app.listen(3000,(err,done)=>{
    console.log("Server is listening at  port 3000")

})