import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/auth/signup', { 
            name, 
            email, 
            mobile, 
            password, 
        }).then(response => {
            if(response.data.status) {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='mobile'>Mobile Number:</label>
                <input type="tel" placeholder="Enter Mobile Number"
                    onChange={(e) => setMobile(e.target.value)} />

                <label>Password:</label>
                <input type="password" placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <label>Confirm Password:</label>
                <input type="password" placeholder="Re-Enter Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
                <p>Already registered? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup