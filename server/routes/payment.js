import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Razorpay from 'razorpay';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

router.post("/orders", async (req, res) => {

    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: 50000, // Amount in smallest currency unit (e.g., paise)
            currency: "INR", // Currency code (e.g., INR, USD)
            receipt: "order123", // Unique order ID
            payment_capture: 1, // Auto-capture payment
        };

        const order = await instance.orders.create(options);
        const paymentUrl = `https://rzp.io/l/0J85z4Tj6/${order.id}`; 
        console.log('Payment URL:', paymentUrl);
        res.redirect(paymentUrl);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Error creating order" });
    }

    function generateOrderId() {
        return `order-${uuidv4()}`;
    }

});

module.exports = router;