const express = require("express");
const router = express.Router();
const Order = require("../models/order");
router.get("/", async (req, res) => {
  const orders = await Order.find();
  try {
    res.status(200).json({
      error: false,
      data: orders

    });
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err.msg
    });
  }
});


router.get("/:id", async (req, res) => {
    const orders= await Order.findById(req.params.id)
    if(!orders){
        res.status(404).json({
            error: true,
            msg: " Order does not exist"
          });
    }try {
        res.status(200).json({
            error: false,
            data:orders
          });
    } catch (err) {
        res.status(400).json({
            error: true,
            msg: err.msg
          });
    }
 
});

router.post("/", async (req, res) => {
  let orders = req.body;
  console.log(orders);
  let doc = await Order.create(orders);
  try {
    res.status(201).json({
      error: false,
      data: doc
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err.msg
    });
  }
});

  


module.exports = router;
