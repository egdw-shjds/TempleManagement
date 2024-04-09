import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Donate = () => {

    const redirectToRazorpay = () => {
        // Replace with your actual Razorpay payment URL
        const paymentUrl = 'https://rzp.io/l/0J85z4Tj6';
        window.location.href = paymentUrl; // Redirect to Razorpay payment page
    };

    return (
        <>
        <div className='sign-up-container'>
            <form className='sign-up-form' action="#" method="get" target="_blank">
                <h2>Donate</h2>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' placeholder='Enter Name' />

                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' autoComplete='off' placeholder='Email' />

                <label htmlFor='mobile'>Mobile Number:</label>
                <input type="tel" name='mobile' placeholder="Enter Mobile Number" />

                <label>Address:</label>
                <input type="text" name='address' placeholder='Enter Address' />

                <label>City:</label>
                <input type="text" name='city' placeholder='Enter City' />

                <label>State:</label>
                <input type="text" name='state' placeholder='Enter State' />

                <label>Country:</label>
                <input type="text" name='country' placeholder='Enter Country' />

                <div className="btn-block">
                    <Link to="/donate">
                        <button onClick={redirectToRazorpay}>Donate Now</button>
                    </Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Donate;