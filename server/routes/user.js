import express from 'express'
import bcrypt from 'bcrypt'
const router = express.Router();
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

router.post('/signup', async (req, res) => {
    const { name, email, mobile, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        return res.json({ message: "user already exists" })
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        name,
        email,
        mobile,
        password: hashpassword,
    })

    await newUser.save()
    return res.json({ status: true, message: "record registered" })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return res.json({ message: "user is not registered" })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
        return res.json({ message: "password is incorrect" })
    }

    const token = jwt.sign({ name: user.name }, process.env.KEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ status: true, message: "login successfully" })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({ status: true })
})

export { router as UserRouter}
