// Import dependencies
import Product from "../models/product_mdl";

// The product controller
const productController = {
  // Get all products
  getProducts: async (req, res) => {
    let response = await Product.findAll().catch((err) => console.error(err));
    if (!response) {
      return res.status(500).json({
        error: {
          message: "Error",
        },
      });
    }

    res.status(200).json({
      status: 200,
      count: response.length,
      response: response,
    });
  },

  // Get product by id controller
  getOneProduit: async (req, res) => {
    let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await Product.findOne({ where: id }).catch((err) =>
      console.error(err)
    );
    if (!response) {
      return res.status(401).json({
        error: {
          message: "product not found",
        },
      });
    }
    res.status(200).json({
      status: 200,
      message: "Product successfully getted",
      product: response,
    });
  },

  // Add product
  addProduct: async (req, res) => {
    let data = {
      name: req.body.name,
      price: isNaN(parseFloat(req.body.price)) ? 0 : parseFloat(req.body.price),
    };

    let response = await Product.create({
      name: data.name,
      price: data.price,
    }).catch((err) => {
      console.error(err);
    });

    if (response) {
      return res.status(201).json({
        status: 201,
        message: "Product Successfully created",
        response: response,
      });
    }
  },

  // Adding many products at once
  addProducts: async (req, res) => {
    let data = req.body;
    let response = [];

    for (let i = 0; i < data.length; i++) {
      response.push(
        await Product.create({
          name: data[i].name,
          price: data[i].price,
        })
      );
    }

    if (!response.length > 0) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "Products not found",
        },
      });
    }

    res.status(201).json({
      status: 201,
      message: "All products success created",
      response: response,
    });
  },

  // Update a product
  updateProduct: async (req, res) => {
    let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await Product.findOne({ where: { id: _id } });
    if (!response) {
      res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }
    if (response) {
      let updated = await Product.update(
        {
          name: req.body.name,
          price: req.body.price,
        },
        { where: { id: _id } }
      );
      if (updated[0] !== 0) {
        res.status(200).json({
          status: 200,
          message: "Product updated succesfully",
        });
      } else {
        res.status(500).json({
          status: 500,
          message: "Product not updated",
        });
      }
    }
  },

  // Delete a product
  deleteProduct: async (req, res) => {
    let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await Product.findOne({ where: { id: _id } });
    if (!response) {
      res.status(404).json({
        status: 404,
        message: "Product does not exist",
      });
    } else {
      await Product.destroy({ where: { id: _id } });
      res.status(200).json({
        status: 200,
        data: {
          message: "Product deleted Successfully",
        },
      });
    }
  },
};

// Exporting module
export default productController;
