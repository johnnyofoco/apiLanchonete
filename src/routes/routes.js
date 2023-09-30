const router = require('express').Router()

const CustomerController = require("../controllers/customerController");
const ProductController = require('../controllers/productsController')

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

router.get("/customers/:id?", CustomerController.get);
router.post("/customers", CustomerController.post);
router.put("/customers/:id", CustomerController.put);
router.delete("/customers/:id", CustomerController.remove);

module.exports = router