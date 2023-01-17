const { Product } = require('../model/')

class ProductController {
    async createProduct(req, res) {
        try {
            const { name, price, detail, stock, photoUrl, } = req.body;
            const product = await Product.create(
                {
                    name: name,
                    price: price,
                    detail: detail,
                    stock: stock,
                    photoUrl: photoUrl
                }
            )
            return res.json({ status: true, product });


        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async getProductAll(req, res) {
        try {
            let products = await Product.findAll()
            return res.json({ status: true, products });

        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async getProductByProductId(req, res) {
        try {
            let product_id = req.body.product_id
            const product = await Product.findOne({ where: { product_id: product_id } })
            return res.json({ status: true, product });

        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }
}

module.exports = ProductController;