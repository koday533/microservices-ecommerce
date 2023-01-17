const { Order } = require('../model/')
const axios = require('axios');

class orderController {
    async createOrder(req, res) {
        try {
            const { product_id, member_id, itemt } = req.body;
            console.log(itemt);
            var token = req.headers.authorization.split(' ')[1];
            const product = await axios.get(`${process.env.ENDPOINT_PRODUCT_SERVICE}/api/product/${product_id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (product.data.status === false) {
                return res.json({ status: false, message: product.data.message });
            }

            let amount = (product.data.product.price * itemt);

            const order = await Order.create(
                {
                    product_id: product_id,
                    member_id: member_id,
                    itemt: itemt,
                    amount: amount, //จำนวนชิ้นคูณด้วยราคา
                    status: 1   // 1 = รอชำระเงิน  2 = ตรวจสอบการชำระเงิน 3 = เตรียมการจัดส่ง 4 = จัดส่งแล้ว 5 = ยกเลิก 6 = ล้มเหลว
                }
            )
            return res.json({ status: true, order });


        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async cancelOrder(req, res) {
        try {
            const { order_id } = req.body;

            await Order.update(
                {
                    status: 5
                },
                {
                    where: { order_id: order_id },
                }
            );

            return res.json({ status: true, message: "cancel success" });

        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async orderDetail(req, res) {
        try {
            const { order_id } = req.body;
            var token = req.headers.authorization.split(' ')[1];
            const order = await Order.findOne({ where: { order_id: order_id } })

            const product = await axios.get(`${process.env.ENDPOINT_PRODUCT_SERVICE}/api/product/${order.product_id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            let status;
            if (order.status === 1) {
                status = 'รอชำระเงิน'
            } else if (order.status === 2) {
                status = 'ตรวจสอบการชำระเงิน'
            } else if (order.status === 3) {
                status = ' เตรียมการจัดส่ง'
            } else if (order.status === 4) {
                status = ' จัดส่งแล้ว'
            } else if (order.status === 5) {
                status = ' ยกเลิก'
            } else if (order.status === 6) {
                status = ' ล้มเหลว'
            }

            const product_detail = Array({
                "order_id": order.order_id,
                "order_id": order.order_id,
                "name": product.data.product.name,
                "amount": order.amount,
                "detail": product.data.product.detail,
                "status": status

            }

            )

            return res.json({ status: true, message: product_detail });

        } catch (error) {
            return res.json({ status: false, message: error.message });
        }

    }

    async orderHistory(req, res) {
        try {
            const { member_id } = req.body;
            const orderHistory = await Order.findOne({ where: { member_id: member_id } })
            console.log(orderHistory);

            return res.json({ status: true, orderHistory });

        } catch (error) {

            return res.json({ status: false, message: error.message });
        }

    }



}

module.exports = orderController;