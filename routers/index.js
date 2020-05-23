const express = require('express'); // using express

const router = express.Router(); // setting up router
// import order controller 
const orderController = require('../controllers/order_controller'); 

// routing actions
router.get('/',(req,res) => {
    res.send('Place order');
})
router.post('/create', orderController.createOrder); // to create an order 
router.get('/list',orderController.orders) // to fetch all orders
router.get('/:id',orderController.orderById) // find order by id
module.exports = router; // exporting router