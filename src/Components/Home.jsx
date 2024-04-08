import React from 'react';
import '../NavigationBar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Home() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleLogout = () => {
        axios.get("http://localhost:3000/auth/logout")
            .then(res => {
                if (res.data.status) {
                    navigate('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='left'>
                        <a href='#'>Home</a>
                    </div>
                    <div className='middle'>
                        <a href='#'>Temple Management System</a>
                    </div>
                    <div className='right'>
                        <div className='right'>
                            <button style={{
                                background: 'rgba(0, 0, 0, 0)',
                                color: '#fff',
                                border: 'none',
                                fontSize: '25pt', fontFamily:
                                    'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
                            }} onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="temples-section">
                <h2>TEMPLES IN MANGALORE</h2>
                <div className="temples-images">
                    <div>
                        <Link to="/sharavu">
                            <img src="src\Images\Sharavu.jpg" alt="Sharavu Temple" />
                            <p className='templeName'>Sharavu Mahaganapathi Temple</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/polali">
                            <img src="src\Images\Polali.jpg" alt="Polali Temple" />
                            <p className='templeName'>Shri Kshetra Raajerajeshwari Temple</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/kudroli">
                            <img src="src\Images\Kudroli.jpg" alt="Kudroli Temple" />
                            <p className='templeName'>Kudroli Sri Gokarnanatheshwara Temple</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/kateel">
                            <img src="src\Images\Kateel.jpg" alt="Kateel Temple" />
                            <p className='templeName'>Shree Durgaaparameshwari Temple</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
