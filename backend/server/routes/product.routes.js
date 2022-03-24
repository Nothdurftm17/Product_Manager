const ProductController = require("../controllers/Product.controller")

module.exports = app => {

    app.get("/api/test", ProductController.testResponse);

    app.get("/api/products/findAll", ProductController.findAll);

    app.post("/api/products/create", ProductController.create);

    app.get("/api/products/:_id", ProductController.findOne);

    app.delete("/api/products/:_id", ProductController.deleteOne);

    app.patch("/api/products/:_id", ProductController.updateOne);

}