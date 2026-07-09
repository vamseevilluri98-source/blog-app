const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const apis = require("./routes/routes")
const connectDB = require("./database/db"); 
connectDB();
require('dotenv').config()
const port = 3000 || process.env.PORT;
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    exposedHeaders: [
      "X-Total-Count",
      "X-Total-Pages",
      "X-Current-Page",
      "X-Limit"
    ]
  })
);
app.use("/",apis)


app.listen(port,()=>{
console.log(`backend app running successfully on port ${port}`)
})



