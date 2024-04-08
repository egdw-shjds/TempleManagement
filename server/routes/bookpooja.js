import express from 'express';
import { Booking } from '../models/Bookpooja.js'; // import the Booking model

const router = express.Router();

router.post('/bookpooja', async (req, res) => {
    const newBooking = new Booking({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        pooja: req.body.pooja
    });

    try {
        const savedBooking = await newBooking.save();
        res.json(savedBooking);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

export { router as BookpoojaRouter}
