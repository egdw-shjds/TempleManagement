import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    date: {type: String, required: true, unique: true},
    time: {type: String, required: true, unique: true},
    pooja: {type: String, required: true, unique: true},
});

const Bookpooja = mongoose.model('Booking', BookingSchema);

export { Bookpooja as Booking}
