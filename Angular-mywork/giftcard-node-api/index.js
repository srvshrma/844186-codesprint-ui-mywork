const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")
mongoose.connect(
    "mongodb://localhost:27017/Gifts",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (err) {
        console.log("Mongodb could not connect");
      } else {
        console.log("Mongodb connected");
      }
    }
  );
  
  const orderRoutes = require("./routes/orders");
  
  const app = express();
  const PORT = process.env.PORT || 5000;
  
  //Default Route
  app.get("/", (req, res) => {
    //res.send('Started')cmd
    res.status(200).json({
      error: false,
      msg: "Api is running"
    });
  })
  
  //Middleware
  app.use(cors())
  app.use(morgan("dev")); // Morgan is used to display log's pm console.
  app.use(express.json())
  app.use("/api/v1/order", orderRoutes);

  app.listen(PORT, () => {
    console.log("Server is running at PORT: " + PORT);
  });