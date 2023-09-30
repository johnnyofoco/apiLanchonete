const router = require("express").Router();

const CustomerController = require("../controllers/customerController");
const ProductController = require("../controllers/productsController");
const OrderController = require("../controllers/ordersController");

router.get("/products/:id?", ProductController.get);
router.post("/products", ProductController.post);
router.put("/products/:id", ProductController.put);
router.delete("/products/:id", ProductController.remove);

router.get("/customers/:id?", CustomerController.get);
router.post("/customers", CustomerController.post);
router.put("/customers/:id", CustomerController.put);
router.delete("/customers/:id", CustomerController.remove);

router.get("/orders/:id?", OrderController.get);
router.post("/orders", OrderController.post);
router.put("/orders/:id", OrderController.put);
router.delete("/orders/:id", OrderController.remove);

module.exports = router;
