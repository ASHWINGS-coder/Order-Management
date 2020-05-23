const mongoose = require('mongoose'); // requiring mongoose

// Setting up Schema for order
const orderSchema = new mongoose.Schema({
   name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order; // exporting the Order Schema