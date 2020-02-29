
const mongoose=require('mongoose')
const orderSchema= mongoose.Schema({

    Buyers_Name: String,
    Shipping_address:String,
    City:String,
    Amount: Number,
    Phone:Number
})

module.exports=mongoose.model('Order',orderSchema)