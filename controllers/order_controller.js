const Order = require('../models/order'); // importing order schema
 
// create Order
module.exports.createOrder = function(req,res){
    Order.create(req.body,function(err,order){
        if(err){
            res.json({
                message:"Error in creating Order"
            })
        }
        res.json({
            data:{order},
            message:"Order created Successfully"
        })
    })
}

// fetch list of order
module.exports.orders = function(req,res){
    Order.find({},(err,orders) => {
        if(err){
            res.json("Error in fetching orders")
        }
        res.json({
            data: orders
        })
    })
}

// order by id
module.exports.orderById = function(req,res){
    let order = req.params.id;

    Order.findById(order,(err,order) => {
        if(err){
            res.json("Error in finding the order")
        }

        res.json({data:order})
    })
}