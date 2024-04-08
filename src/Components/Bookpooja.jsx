import React, { useState } from 'react';
import '../App.css';
import jsPDF from 'jspdf';
import tickMark from './tickMark.png';

const Bookpooja = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pooja, setPooja] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const doc = new jsPDF();

        if (name && email && mobile && date && time && pooja) {

            // Draw a border
            doc.setLineWidth(1); // Border width
            doc.rect(20, 20, 170, 165); // Draw a rectangle: rect(x, y, width, height)

            doc.setFont('helvetica'); // set font
            doc.setFontSize(22); // set font size
            doc.setTextColor(0, 0, 255); // set text color to blue
            doc.text('Your Slot is Booked', 105, 40, { align: 'center' }); // Center align

            // Add tick mark image
            doc.addImage(tickMark, 'PNG', 80, 45, 50, 50); // addImage(image, format, x, y, width, height)

            doc.setFontSize(16); // set font size
            doc.setTextColor(0, 0, 0); // set text color to black
            doc.text(`Name: ${name}`, 105, 110, { align: 'center' }); // Center align
            doc.text(`Date: ${date}`, 105, 120, { align: 'center' }); // Center align
            doc.text(`Time: ${time}`, 105, 130, { align: 'center' }); // Center align
            doc.text(`Pooja: ${pooja}`, 105, 140, { align: 'center' }); // Center align

            doc.setFontSize(18); // set font size
            doc.setTextColor(0, 128, 0); // set text color to green
            doc.text('Thank You!', 105, 160, { align: 'center' }); // Center align

            // Save the PDF
            doc.save('Receipt.pdf');
        } else {
            alert('Please fill all the details');
        }
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Book Pooja</h2>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Enter Name' onChange={e => setName(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>

                <label htmlFor='mobile'>Mobile:</label>
                <input type='tel' placeholder='Enter Mobile Number' onChange={e => setMobile(e.target.value)}/>

                <label>Date:</label>
                <input type="date" onChange={e => setDate(e.target.value)} />

                <label>Time:</label>
                <input type="time" onChange={e => setTime(e.target.value)} />

                <label htmlFor='pooja'>Pooja:</label>
                <input type='text' placeholder='Enter Pooja' onChange={e => setPooja(e.target.value)} />

                <button type='submit'>Book Pooja</button>
            </form>
        </div>
    )
}

export default Bookpooja;
