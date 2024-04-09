import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UserRouter } from './routes/user.js';
import { BookpoojaRouter } from './routes/bookpooja.js'; // import the new route

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://temple-management-frontend.vercel.app"],
    credentials: true
}));
app.use(cookieParser());
app.use('/auth', UserRouter);
app.use('/bookpooja', BookpoojaRouter); // use the new route

mongoose.connect('mongodb+srv://shawnjoywin:Shawn123@cluster0.y38rqvr.mongodb.net/?retryWrites=true&w=majority');

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
});

